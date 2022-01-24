import React, { useState } from "react";
import Checkbox from './components/Checkbox';
import Input from './components/Input';
import StepBox from './components/StepBox';
import Textarea from "./components/Textarea";

import { checkPlan } from "./utils/utilData";
import { checkProt } from "./utils/utilData";
import { checkCont } from "./utils/utilData";
import { checkAsen } from "./utils/utilData";
import { checkPrAu } from "./utils/utilData";


export default function Todos() {
    /*const [currentComt, setCurrentComt] = useState(0)*/
    /*const [showComt, setShowComt] = useState([false, false, false])*/

    const [isCheck, setIsCheck] = useState({
        index: 1,
        value: "Precedencia",
        check: false
    })
    const [isCheckPlan, setIsCheckPlan] = useState(checkPlan)
    const [isCheckProt, setisCheckProt] = useState(checkProt)
    const [isCheckCont, setisCheckCont] = useState(checkCont)
    const [isCheckAsen, setisCheckAsen] = useState(checkAsen)
    const [isCheckPrAu, setisCheckPrAu] = useState(checkPrAu)

    /*const setCurrent = (index) => {
        setCurrentComt(index)
        showComt[index] = !showComt[index]
    }*/

    const onChangeCheckbox = () => {
        setIsCheck({index:isCheck.index,
                    value: isCheck.value,
                    check: !isCheck.check})
    }

    const onChangeCheck = (i, d, c) => {
       d[i].check = !c
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
  
    /*console.log(currentComt, showComt)*/
    return(
        <div className="container mt-6 pt-6 box">
            <h1 className="title has-text-centered">Formulario</h1>
            <hr/>
            <StepBox title="Detalles del Evento">
                <Input label="Nombre completo de la actividad"/>
                <Input label="Facultad o unidad que organiza"/>
                
                <div className="columns">
                    <Input label="Fecha del evento" set="field column" type="date" />
                    <Input label="Hora de inicio" set="field column" type="time" />
                    <Input label="Hora de cierre" set="field column" type="time" />
                </div>

                <div className="columns">
                    <Input label="Lugar donde se realizará" set="field column" />
                    <Input label="Tipo de actividad" set="field column" />
                </div>
            </StepBox>
            <hr/>
            {/*aqui van los servicios */}
            <StepBox title="Servicios de Protocolo"
                     subtitle="Servicios de protocolo, ceremonila y organización del evento">
                <div class="columns is-multiline">
                    <div class="column is-6">
                        <Checkbox label={isCheck.value} index={isCheck.index} toggleChange={onChangeCheckbox}/>
                        <br/>
                        <div class="field">
                            <label class="label">Planeación y organización del evento:</label>
                            {isCheckPlan.map((e, i) =>{
                                return(
                                    <Checkbox label={e.value} index={i} toggleChange={() => onChangeCheck(i, isCheckPlan, e.check)} />
                                )
                            })}  
                        </div>

                        <br/>

                        <div class="field">
                            <label class="label">Protocolo</label>
                            {isCheckProt.map((e,i) => {
                                return(
                                    <Checkbox label={e.value} index={i} toggleChange={() => onChangeCheck(i, isCheckProt, e.check)}/> 
                                )
                            })}
                        </div>

                        <br/>

                        <div class="field">
                            <label class="label">Contenido de</label>
                            {isCheckCont.map((e, i) => {
                                return(
                                    <Checkbox label={e.value} index={i} toggleChange={() => onChangeCheck(i, isCheckCont, e.check)}/>
                                )
                                })}   
                        </div>
                    </div>

                    <div class="column is-6">
                        <div class="field">
                            <label class="label">Asesorías en:</label>
                            {isCheckAsen.map((e,i) => {
                                return(
                                    <Checkbox label={e.value} index={i} toggleChange={() => onChangeCheck(i, isCheckAsen, e.check)} />
                                )
                            })}
            
                        </div>
                    </div>
                </div>
            </StepBox>
            <hr/>
            <StepBox title="Servicios de Prensa y Audiovisual">
                <div className="field">
                <label class="label">Servicios de Prensa y Audiovisual:</label>
                    {isCheckPrAu.map((e,i) => {
                        return(
                            <Checkbox label={e.value} index={i} toggleChange={() => onChangeCheck(i, isCheckPrAu, e.check)} />
                        )
                    })}
                </div>
                <Textarea label="Información para nota de Prensa"/>
            </StepBox>                    
        </div>
        
        
    )
    
}


