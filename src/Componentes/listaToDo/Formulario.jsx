import '../index.css';
import React from "react";

export function Formulario(props) {
    
    const{tarea, handleSubmit, handleChange} = props;
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Introduce la tarea" onChange={handleChange} value={tarea}/>
            <input type="submit" classname="btn" value="Agregar" onClick={handleSubmit}/>
        </form>

    );
}