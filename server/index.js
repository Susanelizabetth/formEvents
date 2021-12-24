const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const path = require('path')
const fs = require('fs')
const multer = require('multer')

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '/images'),
    filename: (req, file, cb) => {
        cb(null, Math.random()+ '-' + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Cabello01*23K',
    database: 'dicomesdatabase'

})



app. use(cors())

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname,'dbimages')))


app.get('/', (req, res) => {
    res.send('<h1>BIENVENIDO A LA API<h1/>')
})
    
app.get('/api/get', (req, res) => {
    sqlSelect = "select idformulario, eventname, unidad, date_format(fecha, '%d-%m-%Y') as fecha, TIME_FORMAT(hora_inicio, '%h:%i %p') as hora_inicio, imagen_name, imagen_data from dicomesdatabase.formulario;"
    db.query(sqlSelect, (err, result) => {
        if(err) {console.log(err)}

        result.map(imagen => {
            fs.writeFileSync(path.join(__dirname, '/dbimages/' + imagen.idformulario + '-'+ 'imagen.jpg'),imagen.imagen_data)
        })
        const dataRes = result
        dataRes.map(e =>{
            e.imagen_name = e.idformulario + '-' + 'imagen.jpg'
            delete e.imagen_data
        })
        res.send(dataRes)
        
    })
})

app.post("/api/insert",fileUpload, (req, res) => {
    console.log(req)
    const formName = req.body.formName
    const formUnid = req.body.formUnid
    const formDate = req.body.formDate
    const formTime = req.body.formTime

    const name = req.file.filename
    const data = fs.readFileSync(path.join(__dirname, '/images/' + req.file.filename))

    const sqlInsert = "insert into formulario(eventname, unidad, fecha, hora_inicio, imagen_name, imagen_data) values (?,?,?,?,?,?)"
    db.query(sqlInsert, [formName, formUnid, formDate, formTime, name, data], (err, result) =>{
        if(err) return console.log(err)
        console.log(result+"RES=======================")

    })
})

app.delete("/api/delete/:formId", (req, res) => {
    const id = req.params.formId
    const sqlDelete = "DELETE FROM formulario WHERE idformulario = ?;"

    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err)
    })
})

app.put("/api/update", (req, res) => {
    const id = req.body.formId
    const name = req.body.formName
    const sqlUpdate = "UPDATE formulario SET eventname = ? WHERE idformulario = ?;"

    db.query(sqlUpdate, [name, id], (err, result) => {
        if (err) console.log(err)
    })
})

app.listen(3001, () => {
    console.log("in http://localhost:3001")
})

