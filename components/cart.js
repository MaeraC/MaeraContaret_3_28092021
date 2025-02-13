// Fermeture du panier
closeIcon.addEventListener('click', () => {
  cartContainer.style.display     = 'none'
});

// Ouverture du panier
cartIcon.addEventListener('click', () => {
  displayCart();
  cartContainer.style.display     = 'block'
});

// Affichage du panier
function displayCart() {

  const total                     = document.querySelector('#total')

  // Réinitialise le panier
  cartList.innerHTML              = ''

  cart.forEach(item => {
    const li                      = document.createElement('li')
    const containerND             = document.createElement("div")
    const name                    = document.createElement('span')
    const description             = document.createElement("p")
    const quantity                = document.createElement("p")
    const price                   = document.createElement('span')
    const removeBtn               = document.createElement('button')

    name.textContent              = item.product.name
    description.textContent       = item.product.description
    quantity.textContent          = "x" + item.quantity
    price.textContent             = item.product.price + '€' 
    removeBtn.innerHTML           = '<i class="fas fa-trash"></i>'

    removeBtn.classList.add('remove-btn')
    name.classList.add('namecart')
    price.classList.add('pricecart')
    quantity.classList.add('quantity-cart')
    containerND.classList.add('description-nd')

    // Supprime les articles du panier
    removeBtn.addEventListener('click', () => {
      removeItemFromCart(item)
      updateCartNotification()
      displayCart()
    });

    li.appendChild(containerND)
    containerND.appendChild(name)
    containerND.appendChild(description)
    li.appendChild(quantity)
    li.appendChild(price)
    li.appendChild(removeBtn)
    cartList.appendChild(li)
  })

  // Calcul et affichage du prix total
  const totalPrice                = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  total.textContent               = totalPrice
}

// Mise à jour du contenu du panier depuis le localStorage
function loadCartFromLocalStorage() {
  cart                            = JSON.parse(localStorage.getItem('cart')) || []
  cartNotif                       = JSON.parse(localStorage.getItem('cartNotif'))
  updateCartNotification()
  displayCart();
}

// supprime un article du panier
function removeItemFromCart(item) {
    // Recherche de l'index de l'article à supprimer dans le panier
    const index = cart.findIndex(cartItem => cartItem.name === item.name)
  
    if (index !== -1) {
      // Suppression de l'article du panier
      cart.splice(index, 1)
      // Mise à jour du localStorage avec le nouveau panier
      localStorage.setItem('cart', JSON.stringify(cart))
      localStorage.setItem('cartNotif', JSON.stringify((cartNotif)))
    }
}

function updateCartNotification() {
  //Actualise les notifs dans le panier
  let cartNotif                   = document.querySelector(".cart-notif")
  if (cart.length > 0) {
    cartNotif.textContent         = cart.length
  }
  else {
    cartNotif.textContent         = "0"
  }
}

// Appel loadCartFromLocalStorage() lorsque la page est chargée
window.addEventListener('load', loadCartFromLocalStorage)




