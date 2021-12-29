import { ServicesData } from "./utils/servicesData";

import DiseñoGrafico from './diseno_grafico';
import TVDigital from './tv_digital';
import Otro from './otro';
import React, { useState } from "react";

export default function Todos() {
    const [currentComt, setCurrentComt] = useState(0)
    const [showComt, setShowComt] = useState([false, false, false])


    const setCurrent = (index) => {
        setCurrentComt(index)
        showComt[index] = !showComt[index]
    }
   
    /*function ShowComponent (i) {
        
        switch (i) {
            case '0': return 
            
            case '1': return  
            default: return null
        }
        
    }

    function ComponentShow(i){
        return(
            
        )
        
    }*/
  
    console.log(currentComt, showComt)
    return(
        <div className="container mt-6 pt-6 box">
            <h1 className="title has-text-centered">Formulario</h1>
            <hr/>
            <div className="columns is-multiline">
                <h3 className="title column is-4">Detalles del Evento</h3>
                <div className="column is-8">
                    <div className="field">
                        <label className="label">Nombre completo de la actividad:</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Nombre completo de la actividad" required/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Facultad o unidad que organiza:</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Facultad o unidad que organiza"/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="field column">
                            <label className="label">Fecha del evento:</label>
                            <div className="control">
                                <input className="input" type="date" placeholder="Fecha del evento:"/>
                            </div>
                        </div>
                        <div className="field column">
                            <label className="label">Hora de inicio:</label>
                            <div className="control">
                                <input className="input" type="time" placeholder="Hora de inicio"/>
                            </div>
                        </div>
                        <div className="field column">
                            <label className="label">Hora que finaliza:</label>
                            <div className="control">
                                <input className="input" type="time" placeholder="Hora que finaliza"/>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="field column">
                            <label className="label">Lugar donde se realizará:</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Lugar donde se realizará"/>
                            </div>
                        </div>
                        <div className="field column">
                            <label className="label">Tipo de actividad:</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Tipo de actividad:"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <hr/>
            {/*aqui van los servicios */}
            <div className="columns">
                <div className="column is-flex is-align-items-center">
                    <input type="checkbox" onClick={() => setCurrent(0)}/> 
                    <label className="checkbox label">Diseño Grafico</label>
                </div>
                
                <div className="column is-flex is-align-items-center">
                    <input type="checkbox" onClick={() => setCurrent(1)}/> 
                    <label className="checkbox label">Tv Digital</label>
                </div>

                <div className="column is-flex is-align-items-center">
                    <input type="checkbox" onClick={() => setCurrent(2)}/> 
                    <label className="checkbox label">Otro</label>
                </div>
                
            </div>

            <hr/>
            {showComt[0] ?  <DiseñoGrafico/> : null}

            {showComt[1] ? <TVDigital/> : null}

            {showComt[2] ? <Otro/> : null}
           
                      
        </div>
        
        
    )
    
}


