
const express = require("express");
const app = express();
const form=require('./routes/from');
const todo=require('./routes/todo');
const path=require('path');
const bodyParser=require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.set("view engine", "ejs");
app.set("views", "views");



app.use('/from',form)
app.use('/todo',todo)







const port = 4000;
app.listen(port ,()=>{
    console.log(`server is runing on port ${port}`);
})
