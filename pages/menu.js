let restaurants = []

fetch("../datas/restaurants.json")
.then((res) =>res.json())
.then((data) => {
    restaurants = data
    
    restaurants.forEach((restaurant) => {
        // Vérifie si l'url contient bien l'id du restaurant 
        let verifyUrl = new URLSearchParams(window.location.search)
        verifyUrl.has(restaurant.id)
        let param = verifyUrl.get("id")

        if (restaurant.id == param) {
            displayHeader()
            displayBanner(restaurant)
        }
    })
})

