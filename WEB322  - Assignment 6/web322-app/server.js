/*********************************************************************************
*  WEB322 –Assignment05
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part 
*  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Olga Rudina Student ID:039949136 Date: 30-Nov-2018
*
*  Online (Heroku) Link:  https://young-oasis-53017.herokuapp.com/ 
*
********************************************************************************/


const express = require("express");
const app = express();
const path = require("path");
const data_service = require("./data-service.js");
const multer = require("multer");
const fs = require("fs");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const dataServiceAuth = require('./data-service-auth.js')
const clientSessions = require('client-sessions')
const HTTP_PORT = process.env.PORT || 8080;


// setup static folder to load public files

app.use(clientSessions({
  cookieName: "session", // this is the object name that will be added to 'req'
  secret: "web22assignmet6", // this should be a long un-guessable string
  duration: 20 * 60 * 1000, 
  activeDuration: 1000 * 60 // the session will be extended by this many ms each request (1 minute)
}));



app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
  });

  // helper middleware that checks if a user is logged in
function ensureLogin(req, res, next){
  if (!req.session.user){
      res.redirect("/login");
  } else {
      next();
  }
}

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  let route = req.baseUrl + req.path;
  app.locals.activeRoute = (route == "/") ? "/" : route.replace(/\/$/, "");
  next();
});

app.engine(".hbs", exphbs({
  extname: ".hbs",
  defaultLayout: 'main',
  helpers: {
    navLink: function (url, options) {
      return '<li' +
        ((url == app.locals.activeRoute) ? ' class="active" ' : '') +
        '><a href="' + url + '">' + options.fn(this) + '</a></li>';
    },
    equal: function (lvalue, rvalue, options) {
      if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
      if (lvalue != rvalue) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    }
  }
}));
app.set("view engine", ".hbs");

const storage = multer.diskStorage({
  destination: "./public/images/uploaded",
  filename: function (req, file, cb) {

    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

data_service.Initialize()
    .then(dataServiceAuth.initialize)
    .then(function(){
        app.listen(HTTP_PORT, function(){
            console.log("Express http server listening on: " + HTTP_PORT)
        });
    }).catch(function(err){
        console.log("Error!");
});


////////GET ROUTES

app.get("/", function (req, res) {
  res.render("home");
});

// About page route

app.get("/about", function (req, res) {
  res.render("about");
});

// Employees page route

app.get("/employees", ensureLogin, function (req, res) {

  if (req.query.status) {

    data_service.getEmployeesByStatus(req.query.status).then(function (data) {

      res.render("employees", { data: data });

    }).catch(function () {
      res.render({ message: "no results" });
    });
  }
  else if (req.query.department) {
    data_service.getEmployeesByDepartment(req.query.department).then(function (data) {

      res.render("employees", { data: data });
    }).catch(function () {
      res.render({ message: "no results" });
    });
  }

  else if (req.query.manager) {
    data_service.getEmployeesByManager(req.query.manager).then(function (data) {
      res.render("employees", { data: data });
    }).catch(function () {
      res.render({ message: "no results" });
    });
  }

  else {

    data_service.getAllEmployees().then(function (data) {
      res.render("employees", { data: data });
    }).catch(function () {
      res.render({ message: "no results" });
    });

  }

});

// Add Employee route

app.get("/employees/add", ensureLogin, function (req, res) {
  data_service.getDepartments().then(function (data) {
    res.render("addEmployee", { data: data });
  }).catch(function () {
    res.render("addEmployee", { departments: [] });
  });
});

//the "/employee/value" route

app.get("/employee/:empNum", ensureLogin, (req, res) => {

  // initialize an empty object to store the values

  let viewData = {};
  data_service.getEmployeeByNum(req.params.empNum).then((data) => {
    if (data) {
      viewData.employee = data; //store employee data in the "viewData" object as "employee"
    } else {
      viewData.employee = null; // set employee to null if none were returned
    }

    // console.log(viewData.employee);

  }).catch(() => {
    viewData.employee = null; // set employee to null if there was an error
  }).then(data_service.getDepartments)
    .then((data) => {
      viewData.departments = data; // store department data in the "viewData" object as "departments"
      // loop through viewData.departments and once we have found the departmentId that matches
      // the employee's "department" value, add a "selected" property to the matching
      // viewData.departments object
      for (let i = 0; i < viewData.departments.length; i++) {
        if (viewData.departments[i].departmentId == viewData.employee.department) {
          viewData.departments[i].selected = true;
        }
      }
    }).catch(() => {
      viewData.departments = []; // set departments to empty if there was an error
    }).then(() => {
      if (viewData.employee == null) { // if no employee - return an error
        res.status(404).send("Employee Not Found");
      } else {

        res.render("employee", { viewData: viewData }); // render the "employee" view
      }
    });
});

//delete employee

app.get("/employees/delete/:empNum", ensureLogin, (req, res) => {
  data_service.deleteEmployeeByNum(req.params.empNum).then((data) => {
    res.redirect("/employees");
  }).catch((err) => {
    res.status(500).send("Unable to Remove Employee / Employee not found");
  });
});
// get departments

app.get("/departments", ensureLogin, (req, res)=>{
  data_service.getDepartments().then((data)=>{
      res.render("departments", {data: data});
  }).catch((err)=>{
      res.render("departments", {data: {}});
  }); 
});

//// GET /departments/add

app.get("/departments/add", ensureLogin, (req, res) => {
  res.render("addDepartment");
});

///department/:departmentId GET

app.get("/department/:departmentId",  ensureLogin, (req, res) => {
  data_service.getDepartmentById(req.params.departmentId).then((data) => {
    res.render("department", {
      data: data
    });
  }).catch((err) => {
    res.status(404).send("Department Not Found");
  });
});



///departments/delete/:departmentId GET

app.get("/departments/delete/:depID", ensureLogin, (req, res) => {
  data_service.deleteDepartmentById(req.params.depID).then(() => {
    res.redirect("/departments");
  }).catch((err) => {
    res.status(500).send("Unable to Remove Department / Department not found");
  });
});

// Add image route

app.get("/images/add", ensureLogin, function (req, res) {
  res.render("addImage");
});


// "Get" route / using the "fs" module

app.get("/images", ensureLogin, (req, res) => {

  fs.readdir('./public/images/uploaded', (err, data) => {
    if (err) {
      console.log("Unable to read the file!");
    } else {
      //res.json({ images: data });
      res.render("images", { images: data })
    }
  })
});


//////////////POST ROUTES


// POST Employee route

app.post("/employees/add", ensureLogin, (req, res) => {
  data_service.addEmployee(req.body).then(function (data) {
    res.redirect("/employees");
  }).catch(function (err) {
    res.json({ message: err })
  })
});


//Update Employee route
app.post("/employee/update", ensureLogin, (req, res) => {
  data_service.updateEmployee(req.body).then((data) => {
    res.redirect("/employees");
  }).catch((err) => {
    res.json({ message: err })
  });
});

//POST image route

app.post("/images/add", ensureLogin, upload.single("imageFile"), (req, res) => {
  res.redirect("/images");
});


///departments/add POST

app.post("/departments/add", ensureLogin, (req, res) => {
  data_service.addDepartment(req.body).then(() => {
    res.redirect("/departments");
  }).catch(function () {
    res.json({ message: "data is not here" })
  });
});

///departments/update POST

app.post("/department/update", ensureLogin, (req, res) => {
  data_service.updateDepartment(req.body).then(() => {
    res.redirect("/departments");
  });
});


//login/register routes

app.get("/login", (req, res)=>{
  res.render("login");
});


app.get("/register", (req, res)=>{
  res.render("register");
});

app.post("/register", (req, res)=>{
  dataServiceAuth.registerUser(req.body).then((data)=>{
      res.render("register", {successMessage: "User created"});
  }).catch((err)=>{
      res.render("register", {errorMessage: err, user:req.body.userName});
  });
});

app.post("/login", (req, res)=>{
  req.body.userAgent = req.get('User-Agent');
  dataServiceAuth.checkUser(req.body).then((user)=>{
    console.log("---------------------------------------");
    console.log(user);
      req.session.user = {
        userName: user.userName, 
        email: user.email, 
        loginHistory: user.loginHistory 
      };

      res.redirect("/employees");
  }).catch((err)=>{
      res.render("login", {errorMessage: err, user: req.body.userName});
  });
});


app.get("/logout", (req, res)=>{
  req.session.reset();
  res.redirect("/");
});

app.get("/userHistory", ensureLogin, (req, res)=>{
  res.render("userHistory")
});

//no matching route

app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname + "/views/notFound.html"));

});
