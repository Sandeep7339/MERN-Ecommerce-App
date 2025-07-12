import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
// const path=require('path')
import cors from 'cors'
//configure store
dotenv.config();

//database config
connectDB()

//rest object 
const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));


// //static folder
// app.use(express.static(path.join(__dirname,'./client/build')))
//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)

// app.get('*',(req,res)=>{
//   res.sendFile(path.join(__dirname,'./client/build/index.html'))
// })
app.get("/", (req, res) => {
  res.send({ message: "welcome to express app" });
});

//port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgCyan.white);
});
