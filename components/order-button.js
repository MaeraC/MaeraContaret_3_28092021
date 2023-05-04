function displayOrderBtn() {
    const menuSection               = document.querySelector(".menu")
    const buttonContainer           = document.createElement("div")
    const buttonOrder               = document.createElement("button")

    buttonOrder.textContent         = "Commander"

    buttonContainer.classList.add("menu__button")

    menuSection.appendChild(buttonContainer)
    buttonContainer.appendChild(buttonOrder)
}