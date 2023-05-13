function displayTitleMenu(restaurant) {
    const menuSection                   = document.querySelector(".menu")
    const titleContainer                = document.createElement("div")
    const titleMenu                     = document.createElement("h2")
    const heartContainer                = document.createElement("div")
    const heartIcon                     = document.createElement("i")
    const heartEmptyIcon                = document.createElement("i")

    titleMenu.textContent               = restaurant.name

    heartIcon.classList.add("far", "fa-heart", "empty-heart-menu") // vide 
    heartEmptyIcon.classList.add("fas", "fa-heart", "full-heart-menu") // black
    titleContainer.classList.add("title-container")
    heartContainer.classList.add("heart-container")

    heartIcon.addEventListener("click", () => {
        heartEmptyIcon.classList.toggle("full-heart")
        
        if (heartEmptyIcon.classList.contains("full-heart")) {
            console.log("yes")
            heartIcon.style.color       = "transparent"
        }
        else {
            console.log("no")
            heartIcon.style.color       = "#525050"
        }
    })

    menuSection.appendChild(titleContainer)
    titleContainer.appendChild(titleMenu)
    titleContainer.appendChild(heartContainer)
    heartContainer.appendChild(heartIcon)
    heartContainer.appendChild(heartEmptyIcon)
}