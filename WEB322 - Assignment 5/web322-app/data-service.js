const Sequelize = require('sequelize')

var sequelize = new Sequelize('dffeum6aqqk4uq', 'hazyxcehworevg', '87cfd4b9f39faa8ea19b8c109e96eb65320589da264ef7cb7d82ec77e381e343', {

    host: 'ec2-50-16-185-9.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: true
    }

});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err) => {
    console.log('Unable to connect to the database:', err);
});

//Employee model

var Employee = sequelize.define('Employee', {
    employeeNum: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    SSN: Sequelize.STRING,
    addressStreet: Sequelize.STRING,
    addressCity: Sequelize.STRING,
    addressState: Sequelize.STRING,
    addressPostal: Sequelize.STRING,
    maritalStatus: Sequelize.STRING,
    isManager: Sequelize.BOOLEAN,
    employeeManagerNum: Sequelize.INTEGER,
    status: Sequelize.STRING,
    hireDate: Sequelize.STRING
},

    {
        createdAt: false, // disable createdAt
        updatedAt: false // disable updatedAt
    });

//Department model

var Department = sequelize.define('Department', {
    departmentId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    departmentName: Sequelize.STRING
},

    {
        createdAt: false, // disable createdAt
        updatedAt: false // disable updatedAt
    });

//HasMany relationship

Department.hasMany(Employee, { foreignKey: 'department' });

// Initializer

module.exports.Initialize = function () {
    return new Promise(function (resolve, reject) {
        sequelize.sync().then(function () {
            console.log('Connection has been established successfully.');
            resolve();

        }).catch(function (err) {
            reject("unable to sync the database");
        });
    });
};
// Get all employees

module.exports.getAllEmployees = () => {
    return new Promise((resolve, reject)=>{
        Employee.findAll({
            order: ["employeeNum"]
        }).then((data)=>{
            resolve(data);
        }).catch((err)=>{
            reject("no results returned");
        });
    });
};



// Get employees by status

module.exports.getEmployeesByStatus = (status) => {


    return new Promise((resolve, reject) => {
         Employee.findAll({
                where: {
                    status: status
                }
            }).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject("no results returned");
            });
        });
    };



// Get employees by Department

module.exports.getEmployeesByDepartment = (department) => {

    return new Promise((resolve, reject) => {

        Employee.findAll({
            where: {
                department: department
            }
        }).then((data)=>{
            resolve(data);
        }).catch((err)=>{
            reject("no results returned");
        });
    });
}

//Get employees by Manager

module.exports.getEmployeesByManager = (manager) => {

    return new Promise((resolve, reject) => {

        Employee.findAll({
            where: {
                employeeManagerNum: manager
            }

        }).then((data)=>{
            resolve(data);
        }).catch((err)=>{
            reject("no results returned");
        });
    });
}

//Get employees by number

module.exports.getEmployeeByNum = (empNum) => {

    return new Promise((resolve, reject) => {
        Employee.findAll({
            where: {
                employeeNum: empNum
            }
        }).then((data) => {
            resolve(data[0])
        }).catch((err) => {
            reject(err);
        });

    });
}

//Get all departments

module.exports.getDepartments = () => {
    return new Promise((resolve, reject)=>{
        Department.findAll({
            order: ["departmentId"]
        }).then((data)=>{
            resolve(data);
        }).catch((err)=>{
            reject("no results returned");
        });
    });
};

// add Employee 

module.exports.addEmployee = (employeeData) => {
    employeeData.isManager = (employeeData.isManager) ? true : false;
    
    for (let i in employeeData){
        if (employeeData[i] == ""){
            employeeData[i] = null;
        }
    }

    return new Promise((resolve, reject)=>{
        Employee.create({
            firstName: employeeData.firstName,
            lastName: employeeData.lastName,
            email: employeeData.email,
            SSN: employeeData.SSN,
            addressStreet: employeeData.addressStreet,
            addresCity: employeeData.addresCity,
            addressState: employeeData.addressState,
            addressPostal: employeeData.addressPostal,
            maritalStatus: employeeData.maritalStatus,
            isManager: employeeData.isManager,
            employeeManagerNum: employeeData.employeeManagerNum,
            status: employeeData.status,
            department: employeeData.department,
            hireDate: employeeData.hireDate
        }).then(()=>{
            resolve();
        }).catch((err)=>{
            reject("unable to create employee");
        });
        
    });
};





// Update Employee

module.exports.updateEmployee = (employeeData) => {

    employeeData.isManager = (employeeData.isManager) ? true : false;
    
    for (let i in employeeData){
        if (employeeData[i] == ""){
            employeeData[i] = null;
        }
    }

    return new Promise((resolve, reject)=>{
        Employee.update({
            firstName: employeeData.firstName,
            lastName: employeeData.lastName,
            email: employeeData.email,
            SSN: employeeData.SSN,
            addressStreet: employeeData.addressStreet,
            addresCity: employeeData.addresCity,
            addressState: employeeData.addressState,
            addressPostal: employeeData.addressPostal,
            maritalStatus: employeeData.maritalStatus,
            isManager: employeeData.isManager,
            employeeManagerNum: employeeData.employeeManagerNum,
            status: employeeData.status,
            department: employeeData.department,
            hireDate: employeeData.hireDate
        },
        {where: {
            employeeNum: employeeData.employeeNum
        }}).then(()=>{
            resolve();
        }).catch((err)=>{
            reject("unable to update employee");
        });
        
    });
};

//addDepartment(departmentData)

module.exports.addDepartment = (departmentData) => {
    
    for (let i in departmentData) {
        if (departmentData[i] == "") {
            departmentData[i] = null;
        }
    }

    return new Promise((resolve, reject) => {
        Department.create({
            departmentName: departmentData.departmentName
        }).then(() => {
            resolve();
        }).catch((err) => {
            reject("unable to create department");
        });
    });
};


module.exports.updateDepartment = (departmentData) => {

    for (let i in departmentData) {
        if (departmentData[i] == "") {
            departmentData[i] = null;
        }
    }

    return new Promise((resolve, reject) => {
        Department.update({
            departmentName: departmentData.departmentName
            }, {
                    where: {
                        departmentId: departmentData.departmentId
                    }
        }).then(() => {
            resolve();
        }).catch((err) => {
            reject("unable to update department");
        });
    });
};




//getDepartmentById(id)

module.exports.getDepartmentById = (id) =>{
    return new Promise((resolve, reject)=>{
        Department.findAll({
            where: {
                departmentId: id
            }
        }).then((data)=>{
            resolve(data[0]);
        }).catch((err)=>{
            reject("no results returned");
        });
    });
};


//deleteDepartmentById(id)

module.exports.deleteDepartmentById = (depID) => {
    return new Promise((resolve, reject) => {
        Department.destroy({
                where: {
                    departmentId: depID
                }
            }).then(()=>{
                resolve();
            }).catch((err)=>{
                reject("Unable to remove department / Department not found");
            });
        });
    };

//delete employee

module.exports.deleteEmployeeByNum = (empNum) =>{
    return new Promise((resolve, reject)=>{
        Employee.destroy({
            where: {
                employeeNum: empNum
            }
        }).then(()=>{
            resolve();
        }).catch((err)=>{
            reject("Unable to remove employee / Employee not found");
        });
    });
};