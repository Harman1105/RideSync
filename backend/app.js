import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectToDb from "./db/db.js"
import userRoutes from "./routes/user.routes.js"
import cookieParser from 'cookie-parser'
import captainRoutes from './routes/captain.routes.js'

dotenv.config(); 
connectToDb();

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended : true}));
app.use(cookieParser())
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello word')
})

app.use('/users',userRoutes)
app.use('/captain',captainRoutes)

export default app;