/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Olga Rudina Student ID: 039949136 Date: 31-Jan-2019
*
*
********************************************************************************/ 

let employeesModel = [];


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

    // to fetch the data and populate our employees table
    $( document ).ready(function() {
        initializeEmployeesModel();
       $('#employee-search').on('keyup', function(){
           let searchTxt = $('#employee-search').val();
    
           refreshEmployeeRows(getFilteredEmployeesModel(searchTxt))
       });
    
       $(".bootstrap-header-table").on("click", ".body-row", function() {

        let copy = getEmployeeModelById($(this).attr('data-id'));

       $("body-row").data("data-id", copy);

       let fullName = copy.FirstName + " " + copy.LastName;
       let mDate = moment(copy.HireDate);
       mDate.utc();
       let requiredDate = mDate.format("LL");
       copy.HireDate = requiredDate;

       let clickedTemp = _.template('<strong>Address: </strong><%- employee.AddressStreet %> <%- employee.AddressCity %>, <%- employee.AddressState %> <%- employee.AddressZip %> <br/>' +
                                    '<strong>Phone Number: </strong><%- employee.PhoneNum %> ext: <%- employee.Extension %> <br/>' +
                                    '<strong>Hire Date: </strong><%- employee.HireDate %>');

        let emp = clickedTemp({'employee': copy});

        showGenericModal(fullName, emp);
    });
    });
    
