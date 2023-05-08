const header                = document.querySelector(".header")
const logo                  = document.createElement("a")
const logoImg               = document.createElement("img")
const headerMenu            = document.querySelector(".header-menu")
const previousPage          = document.createElement("a")
const previousIcon          = document.createElement("i")
const cartIcon              = document.createElement("i")

logo.setAttribute("href", "../index.html")
logoImg.setAttribute("src", "../images/ohmyfood.png")
logoImg.setAttribute("alt", "Logo Ohmyfood")
previousPage.setAttribute("href", "../index.html")

logo.classList.add("logo")
previousPage.classList.add("previous-page")
previousIcon.classList.add("fas", "fa-arrow-left")
cartIcon.classList.add("fa", "fa-shopping-cart")

header.appendChild(logo)
logo.appendChild(logoImg)
headerMenu.appendChild(previousPage)
previousPage.appendChild(previousIcon)
header.appendChild(cartIcon)


