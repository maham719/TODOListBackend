import express from 'express'
import mongoose from 'mongoose'
import cors  from 'cors'
import router from './routes/index.js'
const app=express()
import ENV from './constants/index.js'

app.use(cors())
app.use(express.json())

app.use("/",router)

mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASSWORD}@mahamcluster.hkmzvsj.mongodb.net/${ENV.DB_NAME}?appName=mahamcluster`)

mongoose.connection.on('error', (err)=>{
console.log("db is not connected")
})
mongoose.connection.on("open", ()=>{
console.log("db connected")
})

app.listen(3001,()=>{
    console.log("running on port 3001")
})