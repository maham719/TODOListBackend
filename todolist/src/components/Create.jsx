import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios'
const Create = () => {
  const [task, setTask] = useState(" ")
  const handleAdd=()=>{
   axios.post('https://todolistbackend-8aqk.onrender.com/add',{task})
   .then(result=>{
    location.reload()
   })
   .catch(err=>console.log(err))
  }
  return (
    <div>
       <Form >
      <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Add Task" onChange={(e)=>setTask(e.target.value)}/>
      <Button variant='dark' className='px-4 rounded-0' type='submit' onClick={handleAdd}>Add</Button>

      </Form.Group>
      
      </Form>
    </div>
  )
}

export default Create
