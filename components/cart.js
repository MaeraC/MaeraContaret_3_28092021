// Création des éléments HTML pour le panier
const cartContainer = document.createElement('div')
const cartTitle = document.createElement('h4')
const cartList = document.createElement('ul')
const totalPrice = document.createElement('p')
const closeIcon = document.createElement('i')

// Configuration des éléments HTML pour le panier
cartTitle.textContent = 'Mon panier'
totalPrice.innerHTML = 'Total : <span id="total"></span> €'
closeIcon.classList.add('fas', 'fa-times')
cartContainer.classList.add('cart-container')
cartList.setAttribute('id', 'cart')

// Gestion de la fermeture du panier
closeIcon.addEventListener('click', () => {
  cartContainer.style.display = 'none'
});

// Affichage du panier lorsque l'icône est cliquée
cartIcon.addEventListener('click', () => {
  displayCart();
  cartContainer.style.display = 'block'
});

// Ajout des éléments HTML à la page
cartContainer.appendChild(cartTitle)
cartContainer.appendChild(cartList)
cartContainer.appendChild(totalPrice)
cartContainer.appendChild(closeIcon)
header.appendChild(cartContainer)


// Affichage du contenu du panier
function displayCart() {

  //const cartList = document.querySelector('#cart')
  const total = document.querySelector('#total')

  // Réinitialisation du contenu du panier
  cartList.innerHTML = ''

  // Parcours des articles dans le panier
  cart.forEach(item => {
    // Création des éléments HTML pour chaque article
    const li = document.createElement('li')
    const name = document.createElement('span')
    const price = document.createElement('span')
    const removeBtn = document.createElement('button')

    // Configuration des éléments HTML
    name.textContent = item.product.name
    price.textContent = item.product.price + ' €'
    removeBtn.textContent = 'Supprimer'
    removeBtn.classList.add('remove-btn')

    // Suppression de l'article du panier lorsque le bouton "Supprimer" est cliqué
    removeBtn.addEventListener('click', () => {
      removeItemFromCart(item)
      displayCart()
    });

    li.appendChild(name)
    li.appendChild(price)
    li.appendChild(removeBtn)
    cartList.appendChild(li)
  })

  // Calcul et affichage du prix total
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price, 0)
  total.textContent = totalPrice
  console.log(totalPrice)
}

// Mise à jour du contenu du panier depuis le localStorage
function loadCartFromLocalStorage() {
  cart = JSON.parse(localStorage.getItem('cart')) || []
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
    }
  }

// Appel de la fonction loadCartFromLocalStorage() lorsque la page est chargée
window.addEventListener('load', loadCartFromLocalStorage)




