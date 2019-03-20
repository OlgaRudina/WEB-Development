function validate(){
         
document.querySelector("#errors").innerHTML = "";
var errors = document.querySelector("#errors");
var submit = true;         
 
//testing phone number
  
var phone = document.signup.phone.value;
var testPhone = phone.match(/^([0-9]{3}[-]){2}[0-9]{4}$/);

      if(testPhone===null) { 
      errors.innerHTML += "<p>* Please enter a phone according to the format: ###-###-###.</p>";
			document.signup.phone.focus();
			submit = false; 
         }
  
//testing password
  
 var pass = document.signup.pass.value;
 var pass2 = document.signup.pass2.value;
 var testPass = pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}$/);
 
  if(testPass===null) { 
      errors.innerHTML += "<p>*Your password must be 8 characters long and have at least one capital letter and one digit.</p>";
			document.signup.pass.focus();
			submit = false; 
         }
  if(pass!==pass2){
    
      errors.innerHTML += "<p>*Passwords are not matching.</p>";
			document.signup.pass2.focus();
			submit = false; 
  }
  
 //testing zipcode
  
   var zip = document.signup.zip.value;
   var testZip=zip.match(/[a-zA-Z][0-9][a-zA-Z] ?[0-9][a-zA-Z][0-9]/);
   if(testZip===null) { 
      errors.innerHTML += "<p>*Zip Code: only Canadian format allowed (Letter Digit Letter Digit Letter Digit).</p>";
			document.signup.zip.focus();
			submit = false; 
         }
  
 //testing username
  
   var uname = document.signup.uname.value;
   var testUname=uname.match(/^[a-zA-Z].{5,}$/);
   if(testUname===null) { 
      errors.innerHTML += "<p>*Username must start with a letter, must have at least 6 characters.</p>";
			document.signup.uname.focus();
			submit = false; 
         }
	
  //testing street name
  
  var strname = document.signup.streetName.value;
   var testStrname=strname.match(/^[A-Za-z]+$/);
   if(testStrname===null) { 
      errors.innerHTML += "<p>*Street name cannot contain digits.</p>";
			document.signup.streetName.focus();
			submit = false; 
         }
	
  //testing city
  
	var cityName = document.signup.city.value;
   var testCitynName=cityName.match(/^[A-Za-z]+$/);
   if(testCitynName===null) { 
      errors.innerHTML += "<p>*City name cannot contain digits.</p>";
			document.signup.city.focus();
			submit = false; 
         }
  
  //testing email
  
  var email = document.signup.email.value;
   var testEmail=email.match(/\S+@\S+\.\S+/);
   if(testEmail===null) { 
      errors.innerHTML += "<p>*Invalid email.</p>";
			document.signup.email.focus();
			submit = false; 
         }
   
 return submit;
}


