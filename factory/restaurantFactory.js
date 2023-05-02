function restaurantFactory(data) {
    const { name, town, image, id } = data

    function getRestaurantCard() {
        const restContainer = document.querySelector(".rest-container")
        const card = document.createElement("a")
        const cardImage = document.createElement("img")
        const cardDescription = document.createElement("div")
        const cardDetails = document.createElement("div")
        const cardName = document.createElement("h3")
        const cardTown = document.createElement("span")
        const cardLike = document.createElement("i")

        card.setAttribute("href", `../pages/menu.html?id=${id}`)
        cardImage.setAttribute("src", image)

        cardName.textContent = name 
        cardTown.textContent = town

        card.classList.add("restaurant-card")
        cardImage.classList.add("restaurant-card-image")
        cardDetails.classList.add("restaurant-details")
        cardName.classList.add("restaurant-name")
        cardTown.classList.add("restaurant-town")
        cardDescription.classList.add("restaurant-description")

        restContainer.appendChild(card)
        card.appendChild(cardImage)
        card.appendChild(cardDescription)
        cardDescription.appendChild(cardDetails)
        cardDetails.appendChild(cardName)
        cardDetails.appendChild(cardTown)
        cardDescription.appendChild(cardLike)
       
    }
    
    return { image, town, name, getRestaurantCard }
}

    