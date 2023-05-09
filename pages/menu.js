let restaurants = []
let cart = JSON.parse(localStorage.getItem('cart')) || [];

fetch("../datas/restaurants.json")
.then((res) => res.json())
.then((data) => {
    restaurants = data
    
    restaurants.forEach((restaurant) => {
        // Vérifie si l'url contient bien l'id du restaurant 
        let verifyUrl = new URLSearchParams(window.location.search)
        verifyUrl.has(restaurant.id)
        let param = verifyUrl.get("id")

        // Si l'id du restaurant correspond à l'id dans l'url
        if (restaurant.id == param) {
            // Affiche la bannière et le titre du restaurant qui correspond 
            displayBanner(restaurant)
            displayTitleMenu(restaurant)

            const products                  = restaurant.products 
            const menuSection               = document.querySelector(".menu")
            const menuContainer             = document.createElement("div")

            // Implémentation de chaque produit dans le DOM
            products.forEach((product) => {
                
                const productContainer      = document.createElement("div")

                productContainer.classList.add("bloc__container")
                menuContainer.classList.add("menu-container")

                productContainer.innerHTML  = `
                    <div class="bloc__container__card column animation">
                        <h4 class="bloc__container__card__title">${product.name}</h4>
                        <div class="bloc__container__card__description">
                            <p class="details">${product.description}</p>
                            <span class="price">${product.price}€<span>
                        </div>
                    </div>
                    <div class="bloc__container__icone">
                        <button class="btn-plus add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" >
                            <i class="fas fa-plus"></i>
                        </button>
                        <select id="quantity" name="q" class="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                `
                menuSection.appendChild(menuContainer)
                menuContainer.appendChild(productContainer)

                const addToCartBtn          = productContainer.querySelector(".add-to-cart-btn")
                const quantitySelect        = productContainer.querySelector(".quantity")

                // Ajoute le nom du produit et la quantité dans la panier
                addToCartBtn.addEventListener("click", (e) => {
                    const productName       = e.currentTarget.getAttribute("data-name")
                    const quantity          = parseInt(quantitySelect.value)
                    addToCart(productName, quantity)
                    console.log(quantity)
                })
            })

            function addToCart(productName, quantity) {

                // Recherche le produit correspondant au nom du produit dans le tableau `products`
                const product               = products.find(product => product.name === productName);
                
                if (!product) {
                  console.error(`Le produit avec le nom ${productName} n'existe pas.`)
                  return;
                }
              
                // Vérification de la quantité
                if (isNaN(quantity) || quantity <= 0) {
                    console.error(`La quantité doit être un nombre positif.`)
                    return;
                }

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

                // Stocker le panier dans le localStorage
                localStorage.setItem('cart', JSON.stringify(cart))
              
                // Affichage du contenu du panier dans la console
                //console.log(cart) 
              
            }
              
            
        }
    })
})
.catch