import {  useState,useEffect } from 'react'
import './App.css'
import TodoInput from './component/TodoInput'
import Todolist from './component/Todolist'

function App() {
  
  const [todos, settodos] = useState([])
  const [todovalue, settodovalue] = useState('')

  function persistData(newList) {
    localStorage.setItem('Todo', JSON.stringify({ Todo: newList }))
  }


  function handleAddtodos(newtodos){
    const newtodolist = [...todos, newtodos]
    persistData(newtodolist)
    settodos(newtodolist)
  }

  function handleDeleteTodo(index){
    const newTodolist = todos.filter((Todo, todoindex) => {
      return todoindex !== index
    })
    persistData(newTodolist)
    settodos(newTodolist)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    settodovalue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

  let localTodos = localStorage.getItem('Todo')
  if (!localTodos) {
    return
  }

  console.log(localTodos)
  localTodos = JSON.parse(localTodos).Todo
  settodos(localTodos)

}, [])
   

  return (
    <>
      <div>
      <TodoInput todovalue ={todovalue} settodovalue = {settodovalue}  handleAddtodos = {handleAddtodos}/>
      <Todolist handleEditTodo = {handleEditTodo} handleDeleteTodo = {handleDeleteTodo} todos = {todos}/>
      </div>
    </>
  )
}

export default App
