var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)


function loadTableWithFilters()
{
    var main = document.querySelector("#main-table-body").innerHTML = "";
    for (var i = 0; i < petData.length; i++)
		
    {
        if ((filterType === "Dog" && petData[i].type === "dog") || (filterType === "Cat" && petData[i].type === "cat") || (filterType === "Bird" && petData[i].type === "bird") || (filterType === ""))
			
        {
            if (petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax)
				
			{
				
                var row = document.createElement("tr");
                var col = document.createElement("td");
                var photo = document.createElement("img");
                photo.src = petData[i].image.src;
                photo.alt = petData[i].image.alt;
                photo.height = petData[i].image.height;
                photo.width = petData[i].image.width;
                col.appendChild(photo);
                var col2 = document.createElement("td");
                var h4 = document.createElement("h4");
                var petName = document.createTextNode(petData[i].name);
                h4.appendChild(petName);
                var p = document.createElement("p");
                p.innerHTML = petData[i].description;
                var span = document.createElement("span");
                var tAge = document.createTextNode("Age: ");
                var petAge = document.createTextNode(petData[i].age);
                var tYears = document.createTextNode(" years old.");
                span.appendChild(tAge);
                span.appendChild(petAge);
                span.appendChild(tYears);
                col2.appendChild(h4);
                col2.appendChild(p);
                col2.appendChild(span);
                row.appendChild(col);
                row.appendChild(col2);
                document.querySelector("#main-table-body").appendChild(row);
			}
		}
	}
           
}
	

function filterDogs()
{
    filterType = "Dog";
    loadTableWithFilters();
}

function filterCats()
{
    filterType = "Cat";
    loadTableWithFilters();
}

function filterBirds()
{
    filterType = "Bird";
    loadTableWithFilters();
}

function filterLess1()
{
    filterAgeMax = 1;
    filterAgeMin = 0;
    loadTableWithFilters();
}
function filter1to3()
{
    filterAgeMax = 3;
    filterAgeMin = 1;
    loadTableWithFilters();
}
function filterGreater4()
{
    filterAgeMax = Number.MAX_VALUE;
    filterAgeMin = 4;
    loadTableWithFilters();
}
function filterAllPets()
{
    filterType = "";
    filterAgeMax = Number.MAX_VALUE;
    filterAgeMin = 0;
    loadTableWithFilters();
}

window.onload = function()
{
    loadTableWithFilters();
};