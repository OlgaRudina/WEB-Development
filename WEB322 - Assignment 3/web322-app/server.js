/*********************************************************************************
*  WEB322 –Assignment02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part 
*  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Olga Rudina Student ID:039949136 Date: 12-Oct-2018
*
*  Online (Heroku) Link: https://pure-wildwood-20852.herokuapp.com
*
********************************************************************************/
const express = require("express");
const app = express();
const path = require("path");
const data_service = require("./data-service");
const multer = require("multer");
const fs = require("fs");
const bodyParser = require("body-parser");

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: "./public/images/uploaded",
  filename: function (req, file, cb) {

    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/home.html"));
});

// About page route

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

// Employees page route

app.get("/employees", function (req, res) {

  if (req.query.status) {

    data_service.getEmployeesByStatus(req.query.status).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json({ message: err });
    });
  }
  else if (req.query.department) {
    data_service.getEmployeesByDepartment(req.query.department).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json({ message: err });
    });
  }

  else if (req.query.manager) {
    data_service.getEmployeesByManager(req.query.manager).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json({ message: err });
    });
  }


  else {

    data_service.getAllEmployees().then(function (data) {
      res.json(data);

    }).catch(function (err) {
      res.json({ message: err });
    });

  }

});



// Managers page route

app.get("/managers", function (req, res) {

  data_service.getManagers().then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json({ message: err });
  });

});

app.get("/departments", function (req, res) {

  data_service.getDepartments().then(function (data) {
    res.json(data);
  }).catch(function (error) {
    res.json({ message: err });
  });
});

// Add Employee route

app.get("/employees/add", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/addEmployee.html"));
});

// POST Employee route

app.post("/employees/add", (req, res) => {
  data_service.addEmployee(req.body).then(function (data) {
    res.redirect("/employees");
  }).catch(function (err) {
    res.json({ message: err })
  })
});

// Add image route

app.get("/images/add", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/addImage.html"));
});

//POST image route

app.post("/images/add", upload.single("imageFile"), (req, res) => {
  res.redirect("/images");
});

// "Get" route / using the "fs" module

app.get("/images", (req, res) => {

  fs.readdir('./public/images/uploaded', (err, data) => {
    if (err) {
      console.log("Unable to read the file!");
    } else {
      res.json({ images: data });
    }
  })
});


//the "/employee/value" route

app.get("/employee/:num", (req, res) => {
  data_service.getEmployeeByNum(req.params.num).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json({ message: err });
  });
});

//no matching route

app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname + "/views/notFound.html"));

});

data_service.Initialize().then(() => {
  try {
    app.listen(HTTP_PORT, function () {
      console.log("Express http server listening on: " + HTTP_PORT);
    });
  } catch (err) {
    console.log("Error!");
  }
});




