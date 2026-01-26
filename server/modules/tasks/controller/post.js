import addedTask from "../services/post.js"

const addTask=async(req,res)=>{
 return await addedTask(req.body.task,res)
}

export default addTask