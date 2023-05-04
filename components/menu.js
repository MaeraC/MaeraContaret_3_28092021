function displayMenu(restaurant) {
    const menuSection                   = document.querySelector(".menu")
    const menuContainer                 = document.createElement("div")
    const entreesContainer              = document.createElement("div")
    const entreestitle                  = document.createElement("h4")
    const dishesContainer               = document.createElement("div")
    const dishestitle                   = document.createElement("h4")
    const dessertsContainer             = document.createElement("div")
    const dessertsTitle                 = document.createElement("h4")

    const entrees                       = restaurant.entrees
    const dishes                        = restaurant.dishes
    const desserts                      = restaurant.desserts

    entreestitle.textContent            = "ENTREES"
    dishestitle.textContent             = "PLATS"
    dessertsTitle.textContent           = "DESSERTS"

    menuContainer.classList.add("menu__container")
    entreesContainer.classList.add("bloc")
    entreestitle.classList.add("bloc__title")
    dishesContainer.classList.add("bloc")
    dishestitle.classList.add("bloc__title")
    dessertsContainer.classList.add("bloc")
    dessertsTitle.classList.add("bloc__title")

    menuSection.appendChild(menuContainer)
    menuContainer.appendChild(entreesContainer)
    entreesContainer.appendChild(entreestitle)
    menuContainer.appendChild(dishesContainer)
    dishesContainer.appendChild(dishestitle)
    menuContainer.appendChild(dessertsContainer)
    dessertsContainer.appendChild(dessertsTitle)

    entrees.forEach((entree => {
        const entreeBloc                = document.createElement("div")
        const entreeCard                = document.createElement("div")
        const entreeCardTitle           = document.createElement("span")
        const entreeCardDesc            = document.createElement("div")
        const entreeDetails             = document.createElement("span")
        const entreePrice               = document.createElement("span")
        const checkContainer            = document.createElement("div")
        const checkIcon                 = document.createElement("i")

        entreeCardTitle.textContent     = entree.name
        entreeDetails.textContent       = entree.description
        entreePrice.textContent         = entree.price + "€"

        checkIcon.classList.add("far", "fa-check-circle")
        entreeBloc.classList.add("bloc__container")
        entreeCard.classList.add("bloc__container__card", "column", "animation")
        entreeCardTitle.classList.add("bloc__container__card__title")
        entreeCardDesc.classList.add("bloc__container__card__description")
        entreeDetails.classList.add("details")
        entreePrice.classList.add("price")
        checkContainer.classList.add("bloc__container__icone")

        entreesContainer.appendChild(entreeBloc)
        entreeBloc.appendChild(entreeCard)
        entreeCard.appendChild(entreeCardTitle)
        entreeCard.appendChild(entreeCardDesc)
        entreeCardDesc.appendChild(entreeDetails)
        entreeCardDesc.appendChild(entreePrice)
        entreeBloc.appendChild(checkContainer)
        checkContainer.appendChild(checkIcon)
    }))

    dishes.forEach((dish => {
        const entreeBloc                = document.createElement("div")
        const entreeCard                = document.createElement("div")
        const entreeCardTitle           = document.createElement("span")
        const entreeCardDesc            = document.createElement("div")
        const entreeDetails             = document.createElement("span")
        const entreePrice               = document.createElement("span")
        const checkContainer            = document.createElement("div")
        const checkIcon                 = document.createElement("i")

        entreeCardTitle.textContent     = dish.name
        entreeDetails.textContent       = dish.description
        entreePrice.textContent         = dish.price + "€"

        checkIcon.classList.add("far", "fa-check-circle")
        entreeBloc.classList.add("bloc__container")
        entreeCard.classList.add("bloc__container__card", "column", "animation")
        entreeCardTitle.classList.add("bloc__container__card__title")
        entreeCardDesc.classList.add("bloc__container__card__description")
        entreeDetails.classList.add("details")
        entreePrice.classList.add("price")
        checkContainer.classList.add("bloc__container__icone")

        dishesContainer.appendChild(entreeBloc)
        entreeBloc.appendChild(entreeCard)
        entreeCard.appendChild(entreeCardTitle)
        entreeCard.appendChild(entreeCardDesc)
        entreeCardDesc.appendChild(entreeDetails)
        entreeCardDesc.appendChild(entreePrice)
        entreeBloc.appendChild(checkContainer)
        checkContainer.appendChild(checkIcon)
    }))

    desserts.forEach((dessert => {
        const entreeBloc                = document.createElement("div")
        const entreeCard                = document.createElement("div")
        const entreeCardTitle           = document.createElement("span")
        const entreeCardDesc            = document.createElement("div")
        const entreeDetails             = document.createElement("span")
        const entreePrice               = document.createElement("span")
        const checkContainer            = document.createElement("div")
        const checkIcon                 = document.createElement("i")

        entreeCardTitle.textContent     = dessert.name
        entreeDetails.textContent       = dessert.description
        entreePrice.textContent         = dessert.price + "€"

        checkIcon.classList.add("far", "fa-check-circle")
        entreeBloc.classList.add("bloc__container")
        entreeCard.classList.add("bloc__container__card", "column", "animation")
        entreeCardTitle.classList.add("bloc__container__card__title")
        entreeCardDesc.classList.add("bloc__container__card__description")
        entreeDetails.classList.add("details")
        entreePrice.classList.add("price")
        checkContainer.classList.add("bloc__container__icone")

        dessertsContainer.appendChild(entreeBloc)
        entreeBloc.appendChild(entreeCard)
        entreeCard.appendChild(entreeCardTitle)
        entreeCard.appendChild(entreeCardDesc)
        entreeCardDesc.appendChild(entreeDetails)
        entreeCardDesc.appendChild(entreePrice)
        entreeBloc.appendChild(checkContainer)
        checkContainer.appendChild(checkIcon)
    })) 

}