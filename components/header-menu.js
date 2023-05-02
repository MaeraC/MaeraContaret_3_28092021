function displayHeader() {
    const headerMenu = document.querySelector(".header-menu")
    const previousPage = document.createElement("i")
    const logoLink = document.createElement("a")
    const logoImg = document.createElement("img")

    previousPage.classList.add("fas", "fa-arrow-left")
    logoLink.classList.add("logo-link")
    previousPage.classList.add("previous-page")

    logoLink.setAttribute("href", "../../index.html")
    logoImg.setAttribute("src", "../images/ohmyfood.png")
    logoImg.setAttribute("alt", "Logo Ohmyfood")

    headerMenu.appendChild(previousPage)
    headerMenu.appendChild(logoLink)
    logoLink.appendChild(logoImg)

}