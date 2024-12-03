const express = require("express");
const bodyparser = require("body-parser");
const card = require("../model/card.js");
const router = express.Router();
const app = express();
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json())
let get;

async function fetch(req, res, next) {
    // await card.create({name:"dhanus",course:"ui/ux",id:"1"})
  get = await card.find();
  next();
}
async function create(req, res, next) {
  console.log(req.body.data);
  
  let x = await card.countDocuments();
  await card.create({
    id: x + 1,
    name: req.body.data.name,
    role: req.body.data.role,
    ph: req.body.data.ph,
    course: req.body.data.course,
    email: req.body.data.email,
    status: req.body.data.status
  });
  get = await card.find();

  next();
}
router.get("/", fetch, (req, res) => {
  console.log(get);
  
  res.send(get)
});

router.post("/create", create, (req, res) => {
  res.send(get)
});

router.delete("/delete/:id", async (req, res) => {
  console.log("id",req.params.id);
  
  let id = req.params.id;
console.log(typeof(id));

  await card.deleteOne({id:id});
  get = await card.find();
console.log(get);

 res.send(get)
});
module.exports = router;
