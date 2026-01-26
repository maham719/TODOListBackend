import updateTodoService from "../services/put.js"

const updateTodoController=(req,res)=>{
const {id}=req.params
return updateTodoService(id,res)
}

export default  updateTodoController