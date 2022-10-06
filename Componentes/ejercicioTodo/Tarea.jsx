import React, { useState } from "react";


const Tarea = (props) => {
  const [modoEdit, setModoEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const editar = () => {
    setModoEdit(true);
  };

  const manejarEdit = (event) => {
    setEditText(event.target.value);
  };

  const submitEdit = (event) => {
    event.preventDefault();
    props.editar(props.id, editText);
    setEditText("");
    setModoEdit(false);
  };

  const borrarTarea = () => {
    props.borrar(props.id);
  };

  return (
    
    <div className="listaTarea">    
        {!modoEdit ? (
        <div className="tarea">
          <span>{props.tarea}</span>
          <div>
            <button className="btn" onClick={editar}>Editar</button>
            <button className="btn" onClick={borrarTarea}>Borrar</button>
          </div>
        </div>
      ) : (
        <form className="formEdit" onSubmit={submitEdit}>
          <input value={editText} onChange={manejarEdit} required/>{" "}
          <button className="btn">Guardar</button>
        </form>
      )}</div>
  );
};

export default Tarea;