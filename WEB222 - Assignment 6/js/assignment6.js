// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1


window.onload = function(){
	
	makeRequest(1);
}


function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...
	
var url;

	if (pageNum === 1){
		
		url = "https://reqres.in/api/users?page=1";
	}
	
	else if(pageNum === 2)
		{
			url = "https://reqres.in/api/users?page=2"; 
		}
	
	else if (pageNum === 3)
		{
			url = "https://reqres.in/api/users?page=3"; 
		
		}
	
	else
	{
		url = " https://reqres.in/api/users?page=4";
	
	}
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			var data = document.querySelector("#data").innerHTML = "";
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			
			for (var i = 0; i < 3; i++)
				
				{
					var tr = document.createElement("tr");
					var td1 = document.createElement("td");
					var info = document.createTextNode(jsData.data[i].id);
					td1.appendChild(info);
					tr.appendChild(td1);
					
					var td2 = document.createElement("td");
					var info1 = document.createTextNode(jsData.data[i].first_name);
					td2.appendChild(info1);
					tr.appendChild(td2);
					
					var td3 = document.createElement("td");
					var info2 = document.createTextNode(jsData.data[i].last_name);
					td3.appendChild(info2);
					tr.appendChild(td3);
					
					var td4 = document.createElement("td");
					var pic = document.createElement("img");
					pic.src = jsData.data[i].avatar;
					td4.appendChild(pic);
					tr.appendChild(td4);
					document.querySelector("#data").appendChild(tr);
					
				}
			
			//clear out the contents of the table
			
			document.getElementsByClassName("#pgbtn").removeClass("active");
			
			if (jsData.page === 1)
				
				{
					document.getElementById("pgbtn1").className += "active";
				}
			
			else if(jsData.page === 2)
					
					{
						
					document.getElementById("pgbtn2").className += "active";
						
					}
					
			else if(jsData.page === 3)
					
			{
				document.getElementById("pgbtn3").className += "active";
			}
			
			else
				{
					document.getElementById("pgbtn4").className += "active";
				}
					


		} else {
			console.log('There was a problem with the request.');
		}
	}
}	