import TodoModel from "../model/index.js"

const getTodoFromDb=async(req,res)=>{
await  TodoModel.find()
  .then(result=>res.json(result))
  .catch(err=>res.json(err))
}
export default getTodoFromDb