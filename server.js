const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');



//env config
dotenv.config();

//router import
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')
//mongodb connection
connectDB();


//rest objects

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/blog',blogRoutes);

const port = process.env.PORT || 8080;

app.listen(8080,()=>{
    console.log(`server running on ${process.env.DEV_PORT} port ${port}`.bgCyan.white);
})