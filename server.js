const express = require("express");
const mongoose = require("mongoose");
//intsall body parser package
const bodyParser = require('body-parser');

const app = express();

//import routes
const postRoutes = require('./routes/post');

//middle ware ---
app.use(bodyParser.json());

app.use(postRoutes)

//port declare
const PORT = 8000;

//DB connection
const DB_URL= 'mongodb+srv://merncruds:merncrude@cluster0.6cknu.mongodb.net/merncrud?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => {
    console.log("DB connected")
})
.catch((err) =>console.log("DB is not connected",err))





//listem
app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
})


