const express = require ('express');
const morgan = require ('morgan');
const db = require('./mongodb');
const studentRoutes =require('./Routes/studentRoutes');

const app =express();
app.use(morgan('dev'));
app.use('/api',studentRoutes)


app.listen(3005,()=>{
    console.log("listenting to port 3005");
})