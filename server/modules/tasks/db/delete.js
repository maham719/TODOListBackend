import TodoModel from "../model/index.js"

const deleteTodoInDb=async(id,res)=>{
TodoModel.findByIdAndDelete({_id:id})
.then(result=>res.json(result))
.catch(err=>res.json(err))
}
export default deleteTodoInDb