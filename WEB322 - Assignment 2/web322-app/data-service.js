var employees = [];
var departments = [];

var fs = require("fs");

// Initializer

module.exports.Initialize = function(){

  return new Promise(function(resolve, reject){

    try{

        fs.readFile('./data/employees.json', function(err, data) {
            if (err) 

                throw err;
        
            employees = JSON.parse(data);
            
        });

        fs.readFile('./data/departments.json', function(err, data) {
            if (err) throw err;
            departments = JSON.parse(data);
        });

    } catch (ex) {

        reject("Unable to read file");
    }
    resolve("File successfully read.");

  });
}

// Get all employees

module.exports.getAllEmployees = function(){

    return new Promise(function(resolve, reject){

        for (var i = 0; i < employees.lenght; i++){

            employees.push(employees[i]);
        }

        if(employees.lenght == 0){

            reject("No data")
        }

      resolve(employees);
  
    });
  }
 
  //Get all managers

  module.exports.getManagers = function(){

    var managers = [];

    return new Promise(function(resolve, reject){

      for(i = 0; i < employees.length; i++){

        if(employees[i].isManager == true)

        {
         managers.push(employees[i])
        };

}

        if(managers.lenght == 0){

            reject("No data")
        }

      resolve(managers);

        });
      }
    

      //Get all departments

      module.exports.getDepartments = function(){
        
            return new Promise(function(resolve, reject){
        
                if(departments.lenght == 0){
        
                    reject("No results returned")
                } 
                
                else
                
                {
                    for (var i = 0; i < departments.lenght; i++){
        
                   
                        departments.push(employees[i]);
            
                }
    
                resolve(departments);
    
                }
            });
          }


