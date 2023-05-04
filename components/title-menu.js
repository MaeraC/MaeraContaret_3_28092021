function displayTitleMenu(restaurant) {
    const menuSection                   = document.querySelector(".menu")
    const titleContainer                = document.createElement("div")
    const titleMenu                     = document.createElement("h2")
    const iconContainer                 = document.createElement("div")
    const heartIcon                     = document.createElement("i")

    titleMenu.textContent               = restaurant.name

    heartIcon.classList.add("far", "fa-heart")
    titleContainer.classList.add("title-container")

    menuSection.appendChild(titleContainer)
    titleContainer.appendChild(titleMenu)
    titleContainer.appendChild(iconContainer)
    iconContainer.appendChild(heartIcon)
}