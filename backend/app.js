import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectToDb from "./db/db.js"
import userRoutes from "./routes/user.routes.js"

dotenv.config(); 
connectToDb();

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended : true}));

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello word')
})

app.use('/users',userRoutes)

export default app;