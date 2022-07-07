const express = require("express");
const app = express();                 //creating instance


const jsonData = require("./data");

app.get("/getUser1", function (req, res) {
  console.log(jsonData.student.fun())
  res.json(jsonData.student);
});

//home route
app.get("/", function (req, res) {
  res.json(jsonData);
});

app.listen(4004);


//express : Express is a node js web application framework that provides broad 
//features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.

