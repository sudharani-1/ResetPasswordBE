import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
dotenv.config()
import { UserRouter } from "./routes/user.js"


const app = express()
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use(cors({
    origin: ["https://resetpasswordfe.onrender.com"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', UserRouter)

mongoose.connect('mongodb+srv://sudharanips01:94woHa3qUi8O4sib@cluster0.w0il7fq.mongodb.net/authentication')



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
