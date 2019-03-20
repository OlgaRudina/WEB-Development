/*******************************************************************************
* WEB222 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) or distributed to
* other students.
*
* Name: Olga Rudina Student ID: 039949136 Date: 04/06/2018
*
******************************************************************************/

/*****************************
* Step 1
*****************************/

var e1, e2, e3, e4, e5, e6, e7, str;

/*****************************
* Step 2
*****************************/

function capFirstLetter(name)
{
  name = name.substr(0,1).toUpperCase() + name.substr(1).toLowerCase();

  return(name);
}

 e1 = prompt("Enter your first name");
 e1 = capFirstLetter(e1);


/*****************************
* Step 3
*****************************/

var getAge = function(year)
{
  var year = (new Date()).getFullYear() - e2;
  return year;
}

e2 = prompt("Enter a year of your birth day");
e2 = getAge(e2);

/*****************************
* Step 4
*****************************/

e3 = prompt("Enter your college name");
e3 = e3.split(' ');

for ( var i = 0; i < e3.length; i++ )
   {
     e3[i] = capFirstLetter(e3[i]);
   }
e3 = e3.join(' ');

/*****************************
* Step 5
*****************************/

e4 = prompt("Enter 5 favorite sports", "hockey,football,basketball,tennis,golf");
e4 = e4.split(",");
for (var i = 0; i < 4; i++)
  {
   
        e4[i] = e4[i].replace(/football/, "soccer")
     
  }

e5 = prompt("Enter an extra favourite sport", "formula 1")
e4.push(e5);
e4.join(" ");

/*****************************
* Step 6
*****************************/

for (var i=0; i<6; i++)
  {
    e4[i] = e4[i].toUpperCase();
  }
e4 = e4.sort().join("\n\t");

/*****************************
* Step 7
*****************************/

  function getDateString(date)
{
  var year = (new Date()).getFullYear();
  var month = (new Date()).getMonth();
if (month < 10)
  month = "0" + month;
  var day = (new Date()).getDate();
if (day < 10)
  day = "0" + day;
  
 date = year + "-" + month + "-" + day;
  
  return date;
}

e7 = getDateString(e6);


str = ("User info: " + "\n\n" + "name (e1): " + e1 + "\n" + "age (e2): " + e2 + "\n" + "school (e3): " + e3 + "\n" + "favourite sports (e4): " + "\n\t" + e4 + "\n" + "current date (e7): " + e7)

console.log(str);











