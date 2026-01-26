import TodoModel from "../model/index.js"
const addtasktodb=(usertask,res)=>{
      TodoModel.create({
        task:usertask
     }).then(result=>res.json(result))
     .catch(err=>res.json(err))
}
export default addtasktodb