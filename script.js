// STEP 1: Select elements from the page -- Instructor explain Step 1-2 & demo/explain Step 3 event listener

const factButton = document.getElementById("fact-button");

const factDisplay = document.getElementById("fact-display");


// STEP 2: Create function to fetch data from API

function fetchCatFact() {

    // Show loading message - Explain this line of code
    factDisplay.textContent = "Loading cat fact...";

    // Fetch data from API
    fetch("https://catfact.ninja/fact")

        .then(function(response) {

            // Convert response to JSON
            return response.json();

        })

        .then(function(data) {

            // Display fact on page
            factDisplay.textContent = data.fact;

        })

        .catch(function(error) {

            // Handle errors
            factDisplay.textContent = "Something went wrong. Try again.";

            console.log(error);

        });

}


// STEP 3: Add click event listener to button - Instructor add in event listener and explain
factButton.addEventListener("click", fetchCatFact);

fetch("https://catfact.ninja/fact") 
.then(response =>response.json()) 
.then(data => { console.log(data);   });

const output=document.getElementById("output");  
fetch("https://catfact.ninja/fact") 
.then(response =>response.json()) 
.then(data => { output.innerText=data.fact;   });


