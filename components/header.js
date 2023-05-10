const header                = document.querySelector(".header")
const logo                  = document.createElement("a")
const logoImg               = document.createElement("img")
const headerMenu            = document.querySelector(".header-menu")
const previousPage          = document.createElement("a")
const previousIcon          = document.createElement("i")
const cartIcon              = document.createElement("i")
 
cartNotif                   = document.createElement("span")

// Création des éléments HTML pour le panier
const cartContainer               = document.createElement('div')
const cartTitle                   = document.createElement('h4')
const cartList                    = document.createElement('ul')
const totalPrice                  = document.createElement('button')
const iconsContainer              = document.createElement("div")
const closeIcon                   = document.createElement('i')
const favoritesIcon               = document.createElement("i")

cartTitle.textContent             = 'Mon panier'
totalPrice.innerHTML              = 'COMMANDER : <span id="total"></span> €'

totalPrice.addEventListener("click", () => {
    modalOrderSection.style.display = "flex"
})
closeIcon.classList.add('fas', 'fa-times')
cartContainer.classList.add('cart-container')
totalPrice.classList.add("total-price")
favoritesIcon.classList.add("fas", "fa-heart")
iconsContainer.classList.add("icons-container")
cartList.setAttribute('id', 'cart')

logo.setAttribute("href", "https://maerac.github.io/Ohmyfood/index.html")
logoImg.setAttribute("src", "https://maerac.github.io/Ohmyfood/images/ohmyfood.png")
logoImg.setAttribute("alt", "Logo Ohmyfood")
previousPage.setAttribute("href", "https://maerac.github.io/Ohmyfood/index.html")

logo.classList.add("logo")
previousPage.classList.add("previous-page")
previousIcon.classList.add("fas", "fa-arrow-left")
cartIcon.classList.add("fa", "fa-shopping-cart")
cartNotif.classList.add("cart-notif")

header.appendChild(logo)
logo.appendChild(logoImg)
header.appendChild(cartIcon)
header.appendChild(previousPage)
previousPage.appendChild(previousIcon)
header.appendChild(iconsContainer)
iconsContainer.appendChild(favoritesIcon)
iconsContainer.appendChild(cartIcon)
cartContainer.appendChild(cartTitle)
cartContainer.appendChild(cartList)
cartContainer.appendChild(totalPrice)
cartContainer.appendChild(closeIcon)
header.appendChild(cartContainer)
header.appendChild(cartNotif)



