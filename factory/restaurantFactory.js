let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function restaurantFactory(data) {
    const { name, town, image, id }         = data // liste de tous les restaurants
   
    function getRestaurantCard() {
        const restContainer                 = document.querySelector(".rest-container")
        const card                          = document.createElement("a")
        const cardImage                     = document.createElement("img")
        const cardDescription               = document.createElement("div")
        const cardDetails                   = document.createElement("div")
        const cardName                      = document.createElement("h3")
        const cardTown                      = document.createElement("span")
        const heartEmpty                    = document.createElement("i")
        const heartFull                     = document.createElement("i")
        cardImage.setAttribute("src", image)

        cardImage.addEventListener("click", () => {
            window.location.href = `https://maerac.github.io/Ohmyfood/pages/menu.html?id=${id}`
            cardImage.style.cursor = "pointer"
        })

        heartEmpty.classList.add("far", "fa-heart", "empty-heart-restaurant")
        heartFull.classList.add("fas", "fa-heart", "full-heart-restaurant")    
        
        heartEmpty.addEventListener("click", () => {
           
            heartFull.classList.toggle("full-heart")
            if (heartFull.classList.contains("full-heart")) {
                heartEmpty.style.color = "transparent"
                favorites.push({ name, town, image, id });
            }
            else {
                heartEmpty.style.color = "#525050"
                favorites = favorites.filter((f) => f.id !== id);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
            displayFavorites();
        })
          
        cardName.textContent                = name 
        cardTown.textContent                = town 

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
        cardDescription.appendChild(heartEmpty)
        cardDescription.appendChild(heartFull)
    }
    
    return { image, town, name, getRestaurantCard }
}


    