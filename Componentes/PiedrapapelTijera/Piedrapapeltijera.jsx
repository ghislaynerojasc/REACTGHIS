import React, { useState,useEffect } from "react";

const opciones = ["Piedra","Papel", "Tijera"];
const aleatorio=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min)
}
const EjercicioPPT = () => {
  const [jugador, setJugador] = useState("");
  const [pc, setPc] = useState("");
  const [jugada, setJugada] = useState("");
  
  const eleccion = (valor) => { // valor es el elegido por el jugador
    setJugador(opciones[valor]);
    let i = aleatorio(0,2); // i es el valor elegido por la pc 
    setPc(opciones[i]); 
    if (i===valor){ 
        setJugada("Empate! 😏")
        } else if(valor===0 && (i===2)){
        setJugada("Ganaste! 👍🏻🎉");
        }else if(valor===1 && (i===0)){
        setJugada("Ganaste! 👍🏻🎉");
        }else if(valor===2 && (i===1)){
        setJugada("Ganaste! 👍🏻🎉");
        }else {
        setJugada("Perdiste! 👎🏻😥");
    }  
}
    
    const reset=()=>{
        setPc("");
        setJugador("");
        setJugada("");
    }
    useEffect(() => {
        console.log(`jugador: ${jugador} pc: ${pc} jugada: ${jugada}`)
        }, [jugador,pc,jugada]);
  return (
    <>
        <hr />
        <h1>Piedra, papel o tijera</h1>
        <div>
        </div>
        <div>
            <h2>Elige tu jugada:</h2>
            <label for="piedra">Piedra 🧱</label>
            <input type="radio" name="seleccion" id="piedra" onClick={() => eleccion(0)}/>
            <label for="papel">Papel 📄</label>
            <input type="radio" name="seleccion" id="papel" onClick={() => eleccion(1)}/>
            <label for="tijera">Tijera ✂</label>
            <input type="radio" name="seleccion" id="tijera" onClick={() => eleccion(2)}/>
        </div>
        <div>
        <span><strong> Tu elegiste: </strong>{jugador}</span>
        <br></br>
        <span><strong> Pc elige: </strong>{pc}</span>
        <br></br>
        <span><strong> Resultado Jugada: </strong>{jugada}</span>
        <br></br>
        </div>
        <br></br>
        <div><button type="reset" onClick={reset}> Reinicia la Jugada </button></div>
      
    </>
  );
};

export default EjercicioPPT;