function lightbox(product) {
    const sectionLightbox           = document.querySelector(".lightbox")
    const lightbox                  = document.createElement("div")
    const lightboxBg                = document.createElement("div")
    const imageContainer            = document.createElement("div")
    const image                     = document.createElement("img")
    const informationsContainer     = document.createElement("div")
    const head                      = document.createElement("div")
    const productName               = document.createElement("h3")
    const details                   = document.createElement("div")
    const productDescription        = document.createElement("p")
    const productIngredients        = document.createElement("p")
    const addButton                 = document.createElement("button")
    const quantityBtn               = document.createElement("select")
    const optionQuantity            = document.createElement("option")
    const optionQuantity2           = document.createElement("option")
    const closeIcon                 = document.createElement("i")

    productName.textContent         = product.name
    productDescription.textContent  = product.description
    productIngredients.textContent  = product.ingredients
    addButton.innerHTML             = "AJOUTER AU PANIER" + "<span class='price-lightbox'>" + product.price + "€ </span> " + " <span class='check'><i class='fas fa-check'></i></span>"
    
    lightbox.classList.add("lightbox-container")
    imageContainer.classList.add("lightbox-image")
    informationsContainer.classList.add("informations-container")
    productDescription.classList.add("lightbox-description")
    productIngredients.classList.add("lightbox-ingredients")
    addButton.classList.add("add-button")
    head.classList.add("head")
    closeIcon.classList.add("fas", "fa-times")
    lightboxBg.classList.add("lightbox-bg")
    quantityBtn.classList.add("quantity-none")

    image.setAttribute("src", product.image)
    image.setAttribute("alt", product.name)
    closeIcon.setAttribute("id", "close-lightbox")
    addButton.setAttribute("data-id", product.id)
    addButton.setAttribute("data-name", product.name)
    optionQuantity.setAttribute("value", "1")
    optionQuantity.setAttribute("value", "2")

    closeIcon.addEventListener("click", () => {
        sectionLightbox.style.display = "none"
    })

    fetch("https://maerac.github.io/Ohmyfood/datas/restaurants.json")
      .then(res => res.json())
      .then(data => {
          const restaurants                   = data
          
          restaurants.forEach((restaurant) => {
            let verifyUrl = new URLSearchParams(window.location.search)
            verifyUrl.has(restaurant.id)
            let param = verifyUrl.get("id")

            // Si l'id du restaurant correspond à l'id dans l'url
            if (restaurant.id == param) {
              const products                = restaurant.products

              addButton.addEventListener("click", (e) => {
                const productName           = e.currentTarget.getAttribute("data-name")
                const quantitySelect        = document.querySelector(".quantity")
                const quantity              = parseInt(quantitySelect.value)
                const product               = products.find(product => product.name === productName);
                const existingProduct       = cart.find(item => item.product.name === productName);
                const checkIcon             = document.querySelector(".check")
                
                if (existingProduct) {
                  existingProduct.quantity += quantity
                } else {
                  cart.push({
                    product: product,
                    quantity: quantity
                  })
                }
              
                checkIcon.style.display = "block"

                localStorage.setItem('cart', JSON.stringify(cart))
                localStorage.setItem('cartNotif', JSON.stringify(cartNotif))
                displayCart()
                updateCartNotification()
                
              })

            }
          })
      })

    sectionLightbox.appendChild(lightboxBg)
    lightboxBg.appendChild(lightbox)
    lightbox.appendChild(imageContainer)
    imageContainer.appendChild(image)
    lightbox.appendChild(informationsContainer)
    informationsContainer.appendChild(head)
    head.appendChild(productName)
    head.appendChild(productDescription)
    informationsContainer.appendChild(details)
    details.appendChild(productIngredients)
    informationsContainer.appendChild(addButton)
    lightbox.appendChild(closeIcon)
    lightbox.appendChild(quantityBtn)
    quantityBtn.appendChild(optionQuantity)
    quantityBtn.appendChild(optionQuantity2)
}