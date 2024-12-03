const express = require("express");
require("dotenv").config()
const bodyparser = require("body-parser");
const routes=require("./routes/routes.js")
const { default: mongoose } = require("mongoose");
const { error, log } = require("console");
const app = express();
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json())
const cors=require("cors")
// console.log(process.env.MONGODB_URL)
app.use(cors())
// const url = "mongodb://127.0.0.1:27017/assessment";
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" DB connection successfull");
  })
  .catch((error) => {
    console.log(error);
  });
  
app.use("/",routes)
app.listen(process.env.PORT,()=>{
    console.log("sever connected");
    
})