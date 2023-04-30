function searchRestaurants() {
    const searchBar = document.querySelector(".search-bar")
    const barResults = document.querySelector(".bar-results")
    const restaurantsContainer = document.querySelector(".rest-container")
    
    // Recherche d'un nom de quartier 
    searchBar.addEventListener("input", (e) => {
        barResults.innerHTML = ""
        barResults.style.display = "block"

        const searchString = e.target.value.toLowerCase()
        const allTowns = restaurants.map(restaurant => restaurant.town)
        const townsFound = allTowns.filter(town => town.toLowerCase().includes(searchString))
        
        // Affichage des quartiers trouvés à la frappe
        townsFound.forEach((town) => {
            const townNode = document.createElement("p")
            townNode.textContent = town
            barResults.appendChild(townNode)

            // Affichage des restaurants qui se trouve le quartier choisi
            townNode.addEventListener("click", () => {
                restaurantsContainer.innerHTML = ""
                restaurants.forEach((restaurant) => {
                    if (restaurant.town.includes(townNode.textContent) == true) {
                        const restaurantModel = restaurantFactory(restaurant)
                        restaurantModel.getRestaurantCard()
                    }
                })
            })
        })
    })

    window.addEventListener("click", () => {
        barResults.style.display = "none"
    })
}