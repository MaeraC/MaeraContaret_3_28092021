function displayBanner(restaurant) {
    
    const headerMenuu           = document.querySelector(".banner-menu")
    const banner                = document.createElement("img")

    banner.setAttribute("src", restaurant.image)
    banner.classList.add("header-banner")

    headerMenuu.appendChild(banner)
}