/*********************************************************************************
*  WEB322 –Assignment02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part 
*  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Olga Rudina Student ID:039949136 Date: 28-Sep-2018
*
*  Online (Heroku) Link: https://serene-earth-58266.herokuapp.com/
*
********************************************************************************/ 
var express = require("express");
var app = express();
var path = require("path");
var data_service = require("./data-service");


var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
  return new Promise(function(req, re) {
    data_service.Initialize().then(function(data) {
        console.log(data)
    }).catch(function(err) {
        console.log(err);
    });
});
}

app.get("/", function(req,res){
   res.sendFile(path.join(__dirname + "/views/home.html"));
});

// About page route

app.get("/about", function(req,res){
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

// Employees page route

app.get("/employees", function(req,res){
  
    data_service.getAllEmployees().then(function(data) {
    res.json(data);

}).catch(function(err) 

{
  res.json({ message: err });
});

});

// Managers page route

app.get("/managers", function(req,res){
 
  data_service.getManagers().then(function(data) {
    res.json(data);
}).catch(function(err) {
  res.json({ message: err });
});

});

app.get("/departments", function(req,res){
    
    data_service.getDepartments().then(function(data) {
    res.json(data);
}).catch(function(error) {
  res.json({ message: err });
});
});

//no matching route

app.use(function(req, res) {
  res.status(404).sendFile(path.join(__dirname + "/views/notFound.html"));
  
});

app.listen(HTTP_PORT, onHttpStart);





