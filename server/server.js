import Express from "express";
import dotenv from 'dotenv';
import morgan from 'morgan-json';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRout.js'
import categoryRoutes from './routes/categoryRoute.js'
import productRoutes from './routes/productRoute.js'
import cors from 'cors'


// config env
dotenv.config();

// config database
connectDB();

// rest object
const app = Express();

// middleware
app.use(cors());
app.use(Express.json());
// app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/product', productRoutes)

// rest api
app.get('/', (req, res) => {
    res.json('Welcome to ecommerce App');
})

// port
const PORT =  process.env.PORT;

// rull listen
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})