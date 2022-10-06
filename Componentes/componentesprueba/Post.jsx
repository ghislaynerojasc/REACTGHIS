import React from 'react'

const Post = (props) => {
    console.log(props)
  return (
    <div>
        <h1>Nick:</h1><span>{props.nick}</span>
        <h2>Mensaje:</h2><span>{props.mensaje}</span>
    </div>
  )
}

export default Post