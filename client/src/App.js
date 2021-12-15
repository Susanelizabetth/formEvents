import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const [name, setName] = useState("")
  const [unidad, setUnidad] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
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
    Axios.post("http://localhost:3001/api/insert", {
      formName: name, 
      formUnid: unidad, 
      formDate: date, 
      formTime: time
    })
    setFormList([...formList, 
                {eventname: name,
                  unidad:unidad,
                  fecha: date,
                  hora_inicio:time
                }])
    window.location.reload(true);
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
    <div className="App">
      <h1>formulario</h1>
      <div>
        <label for="name">Nombre del evento:</label>
        <input type="text" name="name" id="name" onChange = {(e) => {
          setName(e.target.value)
        }}/>

        <label for="unid">Facultad o unidda:</label>
        <input type="text" name="unid" id="unid" onChange= {(e) =>
          setUnidad(e.target.value)
        }/>

        <label for="date">Fecha del evento:</label>
        <input type="date" name="date" id="date" onChange = {(e) =>
          setDate(e.target.value)
        }/>

        <label for="timeinit">Hora de inicio</label>
        <input type="time" name="timeinit" id="timeinit" onChange = {(e) => 
          setTime(e.target.value)
        }/>
      </div>

      <button onClick={submmitForm}>listo</button>

      {formList.map((val) =>{
        return <div>
                <h1>Nombre del Evento: {val.eventname}</h1>
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
  );
}

export default App;
