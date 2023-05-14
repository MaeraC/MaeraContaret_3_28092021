const favoritesTitle = document.createElement("h3")
const favoritesList = document.createElement("ul")

favoritesTitle.textContent = "Mes restaurants favoris"

favoritesList.classList.add("favorites-list")

favoritesContainer.appendChild(favoritesTitle)
favoritesContainer.appendChild(favoritesList)