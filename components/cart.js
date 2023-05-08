const cartContainer = document.createElement("div")
const cartTitle = document.createElement("h4")
const cart = document.createElement("ul")
const totalPrice = document.createElement("p")
const closeIcon = document.createElement("i")

cartTitle.textContent = "Mon panier"
totalPrice.innerHTML = "Total:" + "<span id='total'></span>"

closeIcon.classList.add("fas", "fa-times")
cartContainer.classList.add("cart-container")

cart.setAttribute("id", "cart")

closeIcon.addEventListener("click", () => {
    cartContainer.style.display = "none"
})

cartIcon.addEventListener("click", () => {
    cartContainer.style.display = "block"
})

header.appendChild(cartContainer)
cartContainer.appendChild(cartTitle)
cartContainer.appendChild(cart)
cartContainer.appendChild(totalPrice)
cartContainer.appendChild(closeIcon)
