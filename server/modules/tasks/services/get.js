import getTodoFromDb from "../db/get.js"

const getTodosService=async(req,res)=>{
 await  getTodoFromDb(req,res)
}

export default getTodosService