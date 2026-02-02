import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/index.js'
import ENV from './constants/index.js'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())

// API routes
app.use("/", router)


// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../todolist/dist")))


app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../todolist/dist', 'index.html'))
})

mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASSWORD}@mahamcluster.hkmzvsj.mongodb.net/${ENV.DB_NAME}?appName=mahamcluster`)

mongoose.connection.on('error', (err) => {
  console.log("db is not connected", err.message)
})

mongoose.connection.on("open", () => {
  console.log("db connected")
})

app.listen(3001, () => {
  console.log("running on port 3001")
})