let restaurants                             = []
// Récupère les données de cart depuis le localestorage
let cart                                    = JSON.parse(localStorage.getItem('cart')) || [];
let cartNotif                               = JSON.parse(localStorage.getItem('cartNotif'))

fetch("../datas/restaurants.json")
.then((res) => res.json())
.then((data) => {
    restaurants = data
    
    restaurants.forEach((restaurant) => {
        
        let verifyUrl = new URLSearchParams(window.location.search)
        verifyUrl.has(restaurant.id)
        let param = verifyUrl.get("id")

        if (restaurant.id == param) {
            displayBanner(restaurant)
            displayTitleMenu(restaurant)

            const products                  = restaurant.products 
            const menuSection               = document.querySelector(".menu")
            const menuContainer             = document.createElement("div")

            products.forEach((product) => {
                
                const productContainer      = document.createElement("div")

                productContainer.classList.add("bloc__container")
                menuContainer.classList.add("menu-container")

                productContainer.innerHTML  = `
                    <span class="open-card">Cliquez pour voir le produit</span>
                    <div class="bloc__container__card column animation">
                        <h4 class="bloc__container__card__title">${product.name}</h4>
                        <p class="details">${product.description}</p>
                    </div>
                    <div class="bloc__price__icone">
                        <p class="price">${product.price}€</p>
                        <div class="bloc__container__icone">
                            <button class="quantity-card btn-minus" data-id="${product.id}" data-name="${product.name}" >
                                <i class="fas fa-minus"></i>
                            </button>
                            <select id="quantity" name="q" class="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button class="btn-plus add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" >
                                <i id="btn-plus" class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                `
                menuSection.appendChild(menuContainer)
                menuContainer.appendChild(productContainer)

                const addToCartBtn          = productContainer.querySelector(".add-to-cart-btn")
                const quantitySelect        = productContainer.querySelector(".quantity")
                const card                  = productContainer.querySelector(".bloc__container__card")
                const removeQuantityBtn     = productContainer.querySelector(".quantity-card")
                const openCardText          = productContainer.querySelector(".open-card")
                
                addToCartBtn.addEventListener("click", (e) => {
                    const productName       = e.currentTarget.getAttribute("data-name")
                    const quantity          = parseInt(quantitySelect.value)
                    addToCart(productName, quantity)
                })
                card.addEventListener("click", () => {
                    lightbox(product)
                    const lightboxx         = document.querySelector(".lightbox")
                    lightboxx.style.display = "block"
                })
                removeQuantityBtn.addEventListener("click", (e) => {
                    const productName       = e.currentTarget.getAttribute("data-name")
                    removeProductQuantity(productName)
                })
                card.addEventListener("mouseover", () => {
                    openCardText.style.display = "block"
                })
                card.addEventListener("mouseout", () => {
                    openCardText.style.display = "none"
                })
            })

            function addToCart(productName, quantity) {
                // Recherche le produit correspondant au nom du produit dans le tableau `products`
                const product               = products.find(product => product.name === productName);
                // Recherche si le produit est déjà présent dans le panier
                const existingProduct       = cart.find(item => item.product.name === productName);
                
                if (existingProduct) {
                  // Si le produit existe déjà dans le panier, on ajoute simplement la quantité
                  existingProduct.quantity += quantity
                } else {
                  // Si le produit n'existe pas encore dans le panier, on l'ajoute avec la quantité
                  cart.push({
                    product: product,
                    quantity: quantity
                  })
                }

                // Stocke le panier dans le localStorage
                localStorage.setItem('cart', JSON.stringify(cart))
                localStorage.setItem('cartNotif', JSON.stringify(cartNotif))
                //Actualise les notifs dans le panier
                updateCartNotification()
                // Actualise le panier 
                displayCart()
            }

            function removeProductQuantity(productName) {
                // Rechercher l'élément correspondant dans le panier
                //const product = products.find(product => product.name === productName);
                const existingProduct       = cart.find(item => item.product.name === productName);
                
                if (existingProduct) {
                    // Réduire la quantité du produit de 1
                    if (existingProduct.quantity > 1) {
                        existingProduct.quantity -= 1;
                    } else {
                        // Si la quantité atteint 0, supprimer l'élément du panier
                        cart.splice(cart.indexOf(existingProduct), 1);
                    }
                    // Mettre à jour l'affichage du prix total
                    const totalPrice = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
                    total.textContent = totalPrice;
                }

                // Stocker le panier dans le localStorage
                localStorage.setItem('cart', JSON.stringify(cart))
                localStorage.setItem('cartNotif', JSON.stringify(cartNotif))
                //Actualise les notifs dans le panier
                updateCartNotification()
                // Actualise le panier 
                displayCart()
            }
        }
    })
})
.catch