import deleteTodoInDb from "../db/delete.js"

const deleteTodoService=async(id,res)=>{
 await deleteTodoInDb(id,res)
}

export default deleteTodoService