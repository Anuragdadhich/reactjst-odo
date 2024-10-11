import React, { useState } from 'react'

export default function TodoInput(props) {

    const {handleAddtodos, todovalue, settodovalue} = props
  return (
    <header>
        <input value={todovalue} onChange={(e) => {
            settodovalue(e.target.value)    
        }} placeholder='Enter Todo....' />
        <button onClick={() => { 
            handleAddtodos(todovalue)
            settodovalue('')
        }}>Add</button>
    </header>
  )
}
