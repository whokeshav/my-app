import logo from './logo.svg';
import './App.css';
import Header from "./mycomponent/header"
import {Footer} from "./mycomponent/Footer";
import {AddTodo} from "./mycomponent/AddTodo";
import {Todos} from "./mycomponent/Todos"; 
import React, { useState , useEffect} from 'react';

function App() {
  let initTodo;
  
  const onDelete=(todo)=>{
    console.log("deleting")
   setTodos(todos.filter((e)=>
   {return e!==todo;
  }))
  localStorage.getItem("todos");
  };
  let sno
  const addTodo = (title,desc)=>{
    console.log(" i am adding title and todo list ")
    if(todos.length==0)
    {
      sno=0;
    }
    else
    { sno=todos[todos.length-1].sno+1}
    const  myTodo={
      sno : sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
    if (localStorage.getItem("todos"))
    {
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  }
  const [todos, setTodos] = useState([]);
  if (localStorage.setItem("todos",JSON.stringify(todos))) {
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  return (
    
    <>
      <Header title="MyTodosList" searchBar={true}/> 
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/> 
      <Footer/>

    </>
  );
}

export default App;
