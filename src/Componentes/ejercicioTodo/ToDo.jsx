import React, {useState} from 'react';
import TareaForm from './TareaForm.jsx';
import Tarea from './Tarea.jsx';


function ToDo() {
  const [listaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas]);
  };

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  };

  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if (index === id) {
        e = tarea;
      }

      return e;
    });

    setListaTareas(listaActualizada);
  };

  return (
    <>
    <div className="contenedorPrincipal">
      <h1>To-Do Lista</h1>
    <div className="contenedorForm">
      <TareaForm nuevaTarea={nuevaTarea} />
    </div>
      <div className="lista">
        <div><h2>Lista Tareas</h2></div>
        {listaTareas.map((e, index) => (
          <Tarea
            tarea={e}
            borrar={borrar}
            id={index}
            editar={actualizarTarea}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default ToDo;