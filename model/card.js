const { strict } = require("assert");
const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");
const userschema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
  },
  email: {
    type: String,
  },
  ph: {
    type: Number,
  },
  course: {
    type: String,
  },
  status: {
    type: String,
  },
  
});
module.exports=mongoose.model("card",userschema);
