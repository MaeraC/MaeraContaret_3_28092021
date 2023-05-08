let restaurants = []

fetch("../datas/restaurants.json")
.then((res) =>res.json())
.then((data) => {
    restaurants = data
    
    restaurants.forEach((restaurant) => {
        // Vérifie si l'url contient bien l'id du restaurant 
        let verifyUrl = new URLSearchParams(window.location.search)
        verifyUrl.has(restaurant.id)
        let param = verifyUrl.get("id")

        if (restaurant.id == param) {
            displayBanner(restaurant)
            displayTitleMenu(restaurant)

            const products = restaurant.products 
            const menuSection = document.querySelector(".menu")
            let cart = []

            // Implémentation de chaque produit dans le DOM
            products.forEach((product) => {
                
                const productContainer = document.createElement("div")
                productContainer.classList.add("bloc__container")

                productContainer.innerHTML = `
                    <div class="bloc__container__card column animation">
                        <h4 class="bloc__container__card__title">${product.name}</h4>
                        <div class="bloc__container__card__description">
                            <p class="details">${product.description}</p>
                            <span class="price">${product.price}<span>
                        </div>
                    </div>
                    <div class="bloc__container__icone">
                        <button class="btn-plus add-to-cart-btn" data-product-id="${product.id}">
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

                menuSection.appendChild(productContainer)

                const addToCartBtn = productContainer.querySelector(".add-to-cart-btn")
                const quantitySelect = productContainer.querySelector(".quantity")

                addToCartBtn.addEventListener("click", (e) => {
                    
                    const productId = e.currentTarget.getAttribute("data-product-id")
                    const quantity = parseInt(quantitySelect.value)
                    addToCart(productId, quantity)
                })
            })

            function addToCart(productId, quantity) {

                // Recherche le produit correspondant à l'ID dans le tableau `products`
                const product = products.find(product => product.id === productId);
                console.log(product)
                // Recherche si le produit est déjà présent dans le panier
                const existingProduct = cart.find(item => item.product.id === productId);
                console.log('existingProduct:', existingProduct)
                if (existingProduct) {
                    // Si le produit existe déjà dans le panier, on ajoute simplement la quantité
                    existingProduct.quantity += quantity;
                } else {
                    // Si le produit n'existe pas encore dans le panier, on l'ajoute avec la quantité
                    cart.push({
                    product: product,
                    quantity: quantity
                    });
                }
                
                // Affichage du contenu du panier dans la console
                console.log(cart); 
                
            }
            
        }
    })
})

