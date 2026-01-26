import getTodosService from "../services/get.js"

const getTodoscontroller=async(req,res)=>{
 return  await getTodosService(req,res)
}
export default getTodoscontroller