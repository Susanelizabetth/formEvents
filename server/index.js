const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Cabello01*23K',
    database: 'dicomesdatabase'

})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
    
app.get('/api/get', (req, res) => {
    sqlSelect = "SELECT * FROM formulario"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post("/api/insert", (req, res) => {
    const formName = req.body.formName
    const formUnid = req.body.formUnid
    const formDate = req.body.formDate
    const formTime = req.body.formTime

    const sqlInsert = "insert into formulario(eventname, unidad, fecha, hora_inicio) values (?,?,?,?)"
    db.query(sqlInsert, [formName, formUnid, formDate, formTime], (err, result) =>{
        console.log(result)

    })
})


app.listen(3001, () => {
    console.log("in port 3001")
})