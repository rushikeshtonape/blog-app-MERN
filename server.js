const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');


//env config
dotenv.config();

//rest objects

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.get('/',(req,res)=>{

    res.status(200).send({
        "message": "Node server"
    })

})

const port = process.env.PORT || 8080;

app.listen(8080,()=>{
    console.log(`server running on ${process.env.DEV_MOD} port ${port}`.bgCyan.white);
})