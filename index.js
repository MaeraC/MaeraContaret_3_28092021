let restaurants = []

fetch("datas/restaurants.json")
.then((res) =>res.json())
.then((data) => {
    restaurants = data
    
    // Affiche les restaurants 
    getRestaurants(restaurants)

    // Trouve des restaurants dans la ville choisie 
    searchRestaurants(restaurants)
})

function getRestaurants() {
    // Modele restaurant card
    restaurants.forEach((restaurant) => {
        const restaurantModel = restaurantFactory(restaurant)
        restaurantModel.getRestaurantCard()
    })
}

const previousPageIcon = document.querySelector(".previous-page")
previousPageIcon.style.display = "none"