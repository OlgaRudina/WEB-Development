/*********************************************************************************
* WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Olga Rudina Student ID: 039949136 Date: 15-Feb-2019
*
*
********************************************************************************/ 

let employeesModel = [];

var viewModel = {
    teams: ko.observableArray ([]),
    employees: ko.observableArray ([]),
    projects: ko.observableArray ([])
}

function initializeEmployeesModel()
    {
        
        // request data to REST server with jQuery-ajax
        $.ajax({
            // according to data-query type, request data to REST
            url: "https://stormy-plains-71044.herokuapp.com/employees",
            method: "GET",
            contentType: "application/json"
        })
        .done(function(data) {
            // Assign the results to the "employeesModel" variable, 
            // causing it to be populated with all 300 Employees returned from your API
            employeesModel = _.take(data, 300);
            // Invoke the "refreshEmployeeRows" function (see below for specification) 
            // with the employeesModel as the parameter
            refreshEmployeeRows(employeesModel);
        })
        .fail(function(err){
            // If the AJAX call fails, Invoke the "showGenericModal" 
            // function (see below for specification) with "Error" 
            // as the "title" parameter and an appropriate error message               
            showGenericModal('Error', 'Unable to get Employees');
        });
    }

    //Function: initializeTeams()

    function initializeTeams(){

        return new Promise(function(resolve, reject){
            
            $.ajax({
                // according to data-query type, request data to REST
                url: "https://stormy-plains-71044.herokuapp.com/teams-raw",
                method: "GET",
                contentType: "application/json"
            })
            .done(function(data){

               viewModel.teams = ko.mapping.fromJS(data);
               resolve();
            })
            .fail(function(err){
                reject( "Error loading the team data.");
            })


        })

    }

    //Function: initializeEmployees()

    function initializeEmployees(){

        return new Promise(function(resolve, reject){
            
            $.ajax({
                // according to data-query type, request data to REST
                url: "https://stormy-plains-71044.herokuapp.com/employees",
                method: "GET",
                contentType: "application/json"
            })
            .done(function(data){

               viewModel.employees= ko.mapping.fromJS(data);
               resolve();
            })
            .fail(function(err){
                reject( "Error loading the employee data");
            })


        })

    }

    //Function: initializeProjects()

    function  initializeProjects()    {

        return new Promise(function(resolve, reject){
            
            $.ajax({
                // according to data-query type, request data to REST
                url: "https://stormy-plains-71044.herokuapp.com/projects",
                method: "GET",
                contentType: "application/json"
            })
            .done(function(data){

               viewModel.projects= ko.mapping.fromJS(data);
               resolve();
            })
            .fail(function(err){
                reject( "Error loading the employee data");
            })


        })

    }



    // show	generic modal using	id
    function showGenericModal(title, message)
    {
        let modalTitle = $(".modal-title");
    let modalBody = $(".modal-body");

    modalTitle.empty();
    modalBody.empty();

    modalTitle.html(title);
    modalBody.html(message);
    $('#genericModal').modal('show');
    }

    // Defines a Lodash template
    // Invoke the template function
    // Add the results from invoking the template function
    function refreshEmployeeRows(employees)
    {
       
        let rowTemplate = _.template('<% _.forEach(employees, function(employee) { %>' +
        '<div class="row body-row" data-id="<%- employee._id %>">' +
        '<div class="col-xs-4 body-column"><%- employee.FirstName %></div>' +
        '<div class="col-xs-4 body-column"><%- employee.LastName %></div>' +
        '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' +
        '</div>' +
    '<% }); %>');

    let rows = rowTemplate({'employees': employees});
    let tbody=$("#employees-table");
    tbody.empty();
    tbody.append(rows);
    }

    // Returns a filtered version of the "employeesModel" array
    function getFilteredEmployeesModel(filterString)
    {             
        let filterData = _.filter(employeesModel, function(employee) {
            // This operation is not case sensitive 
            if(employee.FirstName.toUpperCase().indexOf(filterString.toUpperCase()) != -1 || 
                employee.LastName.toUpperCase().indexOf(filterString.toUpperCase()) != -1 || 
                employee.Position.PositionName.toUpperCase().indexOf(filterString.toUpperCase()) != -1)
            {
                return true;
            }
            else
            {
                return false;
            }
        });
        return filterData;
    }

    // search the global "employeesModel"	
    // array for an Employee whose _id matches the local "id"
    function getEmployeeModelById(id) {

        let find = _.find(employeesModel, function(employee){
    
            if(employee._id == id){
                console.log(_.cloneDeep(employee));
    
                return _.cloneDeep(employee);
            }
            else{
                return null;
            }
        });
        return find;
    }

    function saveTeam(){
  
    let currentTeam = this;
    $.ajax({
        url: "https://stormy-plains-71044.herokuapp.com/team/" + currentTeam._id(),
        type: "PUT",
        data: JSON.stringify ( 
            {
                "Projects": currentTeam.Projects(), 
                "Employees": currentTeam.Employees(), 
                "TeamLead": currentTeam.TeamLead() 
            }
        ),
        contentType: "application/json"
    })
    .done(function (data) {
        showGenericModal("Success", "[" 
        + currentTeam.TeamName() 
        + "] Updated Successfully");
    })
    .fail(function (err) {
        showGenericModal("Error", "Error updating the team information.");
    });
}

    // Promises and Chaining Promises
    $( document ).ready(function() {
       
        initializeTeams().then(initializeEmployees).then(initializeProjects).then(function(){

            ko.applyBindings(viewModel);
            $("select.multiple").multipleSelect({ filter: true });
            $("select").multipleSelect({ single: true, filter: true });

        }).catch(function(err){

            console.log("error: " + err);
            showGenericModal('Error', err);
        });


    });
   
    
