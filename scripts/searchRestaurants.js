function searchRestaurants() {

    function removeAccents(str) {
        const accents = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ";
        const noAccents = "AAAAAAaaaaaaOOOOOOooooooEEEEeeeeCcIIIIiiiiUUUUuuuuyNn";
        let newStr = "";

        for (let i = 0; i < str.length; i++) {
          let index = accents.indexOf(str[i]);

            if (index !== -1) {
                newStr += noAccents[index];
            } 
            else {
                newStr += str[i];
            }
        }

        return newStr;
    }
      
    const searchBar                     = document.querySelector(".search-bar")
    const barResults                    = document.querySelector(".bar-results")
    const restaurantsContainer          = document.querySelector(".rest-container")

    // Affiche la liste de tous les quartiers au clic 
    searchBar.addEventListener("click", () => {
        barResults.innerHTML = ""

        const allTowns = restaurants.map(restaurant => restaurant.town)

        allTowns.forEach((town) => {
            const townNode = document.createElement("p");
            townNode.textContent = town;
            townNode.classList.add("town-node");
            barResults.appendChild(townNode);

            // Affiche les restaurants qui correspondent au clic du quartier
            townNode.addEventListener("click", () => {
                restaurantsContainer.innerHTML = "";
                barResults.style.display = "none"

                restaurants.forEach((restaurant) => {
                if (restaurant.town.includes(townNode.textContent) === true) {
                    const restaurantModel = restaurantFactory(restaurant);
                    restaurantModel.getRestaurantCard();
                }
                });
            })
        })
    })

    // Recherche d'un nom de quartier à la frappe
    searchBar.addEventListener("input", (e) => {
        barResults.innerHTML            = ""
        barResults.style.display        = "block"

        const searchString              = removeAccents(e.target.value.toLowerCase())
        const allTowns                  = restaurants.map(restaurant => restaurant.town)
        const townsFound                = allTowns.filter(town => removeAccents(town.toLowerCase()).includes(searchString))
        
        // Affiche les quartiers trouvés à la frappe
        townsFound.forEach((town) => {
            const townNode              = document.createElement("p")
            townNode.textContent        = town
            townNode.classList.add("town-node")
            
            barResults.appendChild(townNode)

            // Affichage des restaurants qui se trouve dans le quartier choisi
            townNode.addEventListener("click", () => {
                restaurantsContainer.innerHTML = ""
                barResults.style.display = "none"

                restaurants.forEach((restaurant) => {
                    if (restaurant.town.includes(townNode.textContent) === true) {
                        const restaurantModel = restaurantFactory(restaurant)
                        restaurantModel.getRestaurantCard()
                    }
                })
            })
        })
    })
}

