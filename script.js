const factButton = document.getElementById("fact-button");
const output = document.getElementById("output");

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

function fetchCatPicture() {
  output.textContent = "Loading cat picture...";
  
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(function (data) {
      const img = document.createElement("img");
      img.src = data[0].url;
      img.alt = "A cute cat";
      output.innerHTML = "";
      output.appendChild(img);
    })
    .catch(function (error) {
      output.textContent = "Something went wrong. Please try again.";
      console.error("Fetch error:", error);
    });
}

factButton.addEventListener("click", fetchCatFact);
