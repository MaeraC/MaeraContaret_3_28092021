function displayBanner(restaurant) {
    
    const headerMenuu = document.querySelector(".header-menu")
    const banner = document.createElement("img")

    banner.setAttribute("src", restaurant.image)

    headerMenuu.appendChild(banner)

}