
const express = require("express");
const app = express();





app.set("view engine", "ejs");
app.set("views", "views");










const port = 4000;
app.listen(port ,()=>{
    console.log(`server is runing on port ${port}`);
})
