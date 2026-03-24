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

factButton.addEventListener("click", fetchCatFact);
