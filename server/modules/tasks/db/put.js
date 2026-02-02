import TodoModel from "../model/index.js"

const updateTodoInDb =async(id,res)=>{
const todo=await TodoModel.findByIdAndUpdate({_id:id})
const updatedTodo = await TodoModel.findByIdAndUpdate(
      id,
      { done: !todo.done },
      { new: true }
    )
.then(result=>res.json(result))
.catch(err=>res.json(err))
}

export default updateTodoInDb