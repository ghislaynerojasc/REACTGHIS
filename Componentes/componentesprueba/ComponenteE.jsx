import React, { useState,useEffect } from 'react'

const Estados = () => {
    const [contador, setContador] = useState(0)
    const aumentar=()=>{
        setContador(contador+1) 
    }
    const disminuir=()=>{
        setContador(contador-1);
    }
    const reset=()=>{
        setContador(0);
    }
    useEffect(() => {
      console.log(`contador: ${contador}`)
    }, [contador]);
    
  return (
    <>
    <h1>Estado y Efecto</h1>
    <h3>Contador:{contador}</h3>
    <button onClick={aumentar}>+1</button>
    <button onClick={disminuir}>-1</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default Estados;