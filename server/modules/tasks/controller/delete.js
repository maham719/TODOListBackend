import deleteTodoService from "../services/delete.js"

const deleteTodoController=(req,res)=>{
    const {id}=req.params
    return deleteTodoService(id,res)
}

export default deleteTodoController
