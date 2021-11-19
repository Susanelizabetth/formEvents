import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const [name, setName] = useState("")
  const [unidad, setUnidad] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  useEffect(() => {
    Axios 
      .get("http://localhost:3001/api/get")
      .then((res) => {
        console.log(res.data)
      })
  })

  const submmitForm = () => {
    Axios.post("http://localhost:3001/api/insert", {
      formName: name, 
      formUnid: unidad, 
      formDate: date, 
      formTime: time
    }).then(() => {
      alert("insertado correctamente")
    })
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
    </div>
  );
}

export default App;
