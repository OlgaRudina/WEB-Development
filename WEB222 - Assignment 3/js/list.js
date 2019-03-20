// Data for the "HTML Lists" Page
var listTitle = "Fruits";
var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos"];

var directory = [
{type: "file", name: "file1.txt"},
{type: "file", name: "file2.txt"},
{type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
{type: "file", name: "file3.txt"},
{type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function(){
    var myContainer = document.querySelector("#outputContainer");
  
  for(var i = 0; i<fruits.length; i++){
    myContainer.innerHTML += (i+1) + ". "+ fruits[i] + "<br>";
  }
    
    var x = "<ul>";
    for (var i = 0; i < directory.length; i++) {
            x += "<li>" + directory[i].name;
            if (directory[i].files) {
                x += "<ul>";
                for (var k = 0; k < directory[i].files.length; k++) {
                    x += "<li>" + directory[i].files[k].name + "</li>";
                }
                x += "</ul>";
            }
             x += "</li>";
        }
         x += "</ul>";

        var myContainer = document.querySelector("#ulContainer");
        myContainer.innerHTML = x;
    }
    
    
    
  