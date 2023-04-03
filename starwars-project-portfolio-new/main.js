// document.getElementById("search").addEventListener("submit", async (event) => {
//     event.preventDefault();
  
    // const searchInput = document.getElementById("search-input");

    function displaySearchResults(results) {
        const container = document.querySelector(".container");
        container.innerHTML = "";
      
        results.forEach((result) => {
          const characterDiv = document.createElement("div");
          characterDiv.classList.add("child");
          characterDiv.innerText = result.name;
          container.appendChild(characterDiv);
        });
      }
      
      // fetch data
      async function fetchQuote(baseURL) {
        const response = await fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote");
        const quoteData = await response.json();
        return quoteData;
      }
      
      async function handleSubmit(event) {
        event.preventDefault();
        const quoteData = await fetchQuote();
        const quoteElement = document.createElement("div");
        quoteElement.textContent = quoteData.starWarsQuote;
        quoteElement.classList.add("child");
        container.appendChild(quoteElement);
      }

      // event listener
      
      const search = document.getElementById("search-form");
      search.addEventListener("submit", handleSubmit);
  
  



//   const searchForm = document.getElementById("search-form");
// searchForm.addEventListener("submit", handleSubmit);






//   async function searchCharacters(searchTerm) {
//     try {
//       const response = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
//       const data = await response.json();
  
//       // Process and display the data as needed
//       console.log(data.results);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
  


// const card = document.getElementById("flip-card")

// card.addEventListener("click",flipcard);
// function flipcars() {
//     card.classList.toggle("flipCard");
// }

