import addtasktodb from "../db/post.js"

const addedTask=async(task,res)=>{
     const usertask= task
     await addtasktodb(usertask,res)
   
}

export default addedTask