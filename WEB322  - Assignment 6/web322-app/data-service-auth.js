var mongoose = require("mongoose"); //require the mongoose module
const bcrypt = require('bcryptjs'); 
var Schema = mongoose.Schema;  //create a Schema variable to point to mongoose.Schema

var userSchema = new Schema({ //Define a new "userSchema"

    "userName": {
        type: String,
        unique: true
    },
    "password": String,
    "email": String,
    "loginHistory": [{
        dateTime: Date,
        userAgent: String,
    }]
});


let User; // to be defined on new connection (see initialize)

module.exports.initialize = function () {
    return new Promise(function (resolve, reject) {
        let db = mongoose.createConnection("mongodb://OlgaRudina:AlisA190609@ds231133.mlab.com:31133/web322_a6", { useNewUrlParser: true } );
        db.on('error', (err) => {
            reject(err); // reject the promise with the provided error
        });
        db.once('open', () => {
            User = db.model("users", userSchema);
            resolve();
        });
    });
};

module.exports.registerUser = function (userData) {
    return new Promise(function (resolve, reject) {

        if (userData.password != userData.password2) {
            reject("Passwords do not match");
        } 

        bcrypt.genSalt(10, function(err, salt) { 
        bcrypt.hash(userData.password, salt, (err, hash) => { 
            if(err){
                reject("There was an error encrypting the password");
                
            } else{
                userData.password = hash;
                let newUser = new User(userData);
                newUser.save((err) =>{
        
                    if(err){
                        if(err.code == 11000){
                            reject("User Name already taken");    
                
                        }
                        reject("There was an error creating the user: " + err);

                      
                        
                    }
                
                    resolve(); // no errors
                });
            }
        });
    });
})
}


module.exports.checkUser = function (userData) {
    return new Promise(function (resolve, reject) {

        User.find({ userName: userData.userName })
            .then((users) => {
                if (users.length == 0) {
                    reject("Unable to find user: " + userData.userName);
                }

                bcrypt.compare(userData.password, users[0].password).then((res) => {
                    if (!res) {
                        reject("Incorrect Password for user: " + userData.userName);
                    } else {
    
                        users[0].loginHistory.push({
                            dateTime: new Date(),
                            userAgent: userData.userAgent
                        });
                        User.update({
                            userName: users[0].userName
                        }, {
                            $set: {
                                loginHistory: users[0].loginHistory
                            }
                        }).exec().then(() => {
                            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
                            console.log(users[0]);
                            resolve(users[0]);
                        }).catch((err) => {
                            reject("There was an error verifying the user: " + err);
                        });
                    }
                }).catch(() => {
                    reject("Incorrect Password for user: " + userData.userName);
                });
    
    
            }).catch(() => {
                reject("Unable to find user: " + userData.userName);
            });
        });
    }