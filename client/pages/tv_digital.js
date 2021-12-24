export default function TVDigital() {

    return(
        <div className="container box">
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

        </div>
        
    )
    
}