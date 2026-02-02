import React, { useEffect } from 'react'
import { useState } from 'react'
import Create from './Create.jsx'
import axios from 'axios'
import { FaCircle } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";


const Home = () => {
  const [todos, setTodos] = useState([])
 useEffect(() => {
   axios.get('https://todolistbackend-8aqk.onrender.com/get')
   .then(result=>setTodos(result.data))
   .catch(err=>console.log(err))
 }, [])
 
 const handleEdit=(id)=>{
axios.put('https://todolistbackend-8aqk.onrender.com/update' +id)
   .then(result=>{
    location.reload()
   })
   .catch(err=>console.log(err))
 }
 

 const handleDelete=(id)=>{
  axios.delete('https://todolistbackend-8aqk.onrender.com/delete' +id)
  .then(result=>{
    location.reload()
  }).catch(err=>console.log(err))
 }

  return (
    <div>
      <h1>TODO-List</h1>
      <Create/>
      {
        todos.length === 0?
        <div><h2>no todos</h2></div>
        :
        todos.map(todo=>(
            <div className='todoitem bg-dark'>

              <span> {todo.done ? <FaCircleCheck/>: <FaCircle className="icon" size={20} onClick={()=>handleEdit(todo._id)}/> }
                <p className={todo.done ? "text-decoration-line-through":"text-decoration-none"}>{todo.task}</p>
              </span>
            <MdOutlineDelete size={25} onClick={()=>handleDelete(todo._id)}/>
            </div>
        ))
      }
    </div>
  )
}

export default Home
