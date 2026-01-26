import TodoModel from "../model/index.js"

const updateTodoInDb =(id,res)=>{
TodoModel.findByIdAndUpdate({_id:id},{done:true})
.then(result=>res.json(result))
.catch(err=>res.json(err))
}

export default updateTodoInDb