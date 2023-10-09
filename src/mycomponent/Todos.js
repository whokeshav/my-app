import React from 'react'
import {TodoItem} from "../mycomponent/TodoItem"

export const Todos = (props) => {
  let myStyle={
    minHeight:"70vh"
  }
  return (
    <div className="container my-3 " style={myStyle}>
      <h3 className="text-center my-3">Todos List </h3>
      
        {props.todos.length===0?"No todos to display ":
      props.todos.map((todo)=>{
           return <TodoItem todo={todo} keys={todo.sno} onDelete={props.onDelete} />  
      })}
      
      
       </div>
  )
}
