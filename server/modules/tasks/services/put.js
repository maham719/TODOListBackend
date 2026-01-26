import updateTodoInDb from "../db/put.js"

const updateTodoService=async(id,res)=>{
    await updateTodoInDb(id,res)
}

export default updateTodoService