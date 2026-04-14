/* script.js - JavaScript code for fetching cat facts and pictures from APIs */
const factButton = document.getElementById("fact-button");
const pictureButton = document.getElementById("picture-button");
const output = document.getElementById("output");
const pictureOutput = document.getElementById("picture-output");

/* Function to fetch a random cat fact from the API and display it */
function fetchCatFact() {
  output.textContent = "Loading cat fact...";

  fetch("https://catfact.ninja/fact")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      return response.json();
    })
    .then(function (data) {
      output.textContent = data.fact;
    })
    .catch(function (error) {
      output.textContent = "Something went wrong. Please try again.";
      console.error("Fetch error:", error);
    });
}

/* Function to fetch a random cat picture from the API and display it */
function fetchCatPicture() {
  pictureOutput.textContent = "Loading cat picture...";

  fetch("https://api.thecatapi.com/v1/images/search")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(function (data) {
      if (!Array.isArray(data) || !data[0] || !data[0].url) {
        throw new Error("No image URL found in API response");
      }

      const img = document.createElement("img");
      img.src = data[0].url;
      img.alt = "A cute cat";
      img.loading = "lazy";
      img.className = "cat-image";

      pictureOutput.innerHTML = "";
      pictureOutput.appendChild(img);
    })
    .catch(function (error) {
      pictureOutput.textContent = "Something went wrong. Please try again.";
      console.error("Fetch error:", error);
    });
}

factButton.addEventListener("click", fetchCatFact);
pictureButton.addEventListener("click", fetchCatPicture);
