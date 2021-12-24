import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Axios from 'axios'
import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import NavBar from './navBar';

export default function Home() {
  
  const [name, setName] = useState("")
  const [unidad, setUnidad] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [file, setFile] = useState({
    filedata: null,
    filename: ""
  })
  const [formList, setFormList] = useState([])

  const [newName, setNewName] = useState("")

  useEffect(() => {
    Axios 
      .get("http://localhost:3001/api/get")
      .then((res) => {
        setFormList(res.data)
      })
  }, [])

  const submmitForm = () => {
    if(!file){
      alert('Tienes que subir un archivo')
    }
    console.log(file.filedata)
    const formdata = new FormData()
    formdata.append('formName', name)
    formdata.append('formUnid', unidad)
    formdata.append('formDate', date)
    formdata.append('formTime', time)
    formdata.append('image',file.filedata)
    formdata.append('imagenName', file.filename)

    Axios.post("http://localhost:3001/api/insert", formdata)
    setFormList([...formList, 
                {eventname: name,
                  unidad:unidad,
                  fecha: date,
                  hora_inicio:time,
                  name: file.name,
                  data: file.filedata
                }])
    
  }

  const deleteForm = (formid) =>{
    Axios.delete(`http://localhost:3001/api/delete/${formid}`)
    window.location.reload(true);
  }

  const updateName = (formid) =>{
    Axios.put("http://localhost:3001/api/update",{formId: formid, formName: newName} )
    window.location.reload(true);

    setNewName("")
  }
  

  return (
    <div>
      <Head>
        <title>DICOMES</title>
        <link rel='icon' href='/utp.jpg'/>
      </Head>
      <div className='container mt-6 pt-6'>
        <div className=" box has-background-grey-light">
          <p className="has-text-justified">La Dirección de Comunicación Estratégica (DICOMES) se dedica al manejo de la Proyección Institucional e Imagen Corporativa de la Institución. Está conformada por el Departamento de Comunicación e Imagen, Departamento de Producción Gráfica y el Departamento de Protocolo, Ceremonial y Eventos. </p>
          <div className="has-text-centered">
            <button className="button is-link is-rounded mt-4" to="/form">Llenar Formulario</button>
          </div>
        </div>
      </div>
      <div className={styles.App}>
      <h1 className='title is-2 is-spaced has-text-danger'>formulario</h1>
      <div className='container'>
        <div className="columns">
          <div className="control column is-6">
            <label htmlFor="name">Nombre del evento:</label>
            <input className="input" type="text" name="name" id="name" onChange = {(e) => {
              setName(e.target.value)
            }}/>
          </div>
          
          <div className=" control column is-6">
          <label htmlFor="unid">Facultad o unidda:</label>
          <input className="input" type="text" name="unid" id="unid" onChange= {(e) =>
            setUnidad(e.target.value)
          }/>
          </div>
        </div>
       
        
        <div className="columns">
          <div className="control column">
            <label htmlFor="date">Fecha del evento:</label>
            <input className="input" type="date" name="date" id="date" onChange = {(e) =>
              setDate(e.target.value)
            }/>
          </div>
          <div className="control column">
            <label htmlFor="timeinit">Hora de inicio</label>
            <input className="input" type="time" name="timeinit" id="timeinit" onChange = {(e) => 
              setTime(e.target.value)
            }/>
          </div>

          
        </div>

        <div className="contol file has-name">
            <input className="" type="file" onChange={(e) =>{
              console.log(e.target.files[0])
              setFile({...file, filedata: e.target.files[0], filename: e.target.files[0].name})
            }}/>
        </div>


        <button className="button is-link" onClick={submmitForm}>listo</button>
      </div>

      

      {formList.map((val) =>{
        return <div>
                <h1>{val.idformulario} - Nombre del Evento: {val.eventname}</h1>
                <img
                  src={'http://localhost:3001/'+ val.imagen_name }
                  width={50}
                />
                <p>fecha: {val.fecha},  hora: {val.hora_inicio}</p>
                <button onClick={() => {deleteForm(val.idformulario)}}>BORRAR</button>
                <input type="text" onChange={(e) => {
                  setNewName(e.target.value)
                }}></input>
                <button onClick={() => {updateName(val.idformulario)}}>CAMBIAR</button>
                 <hr/>
               </div>

      })}
    </div>
      
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
