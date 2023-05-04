const header                = document.querySelector(".header")
const logo                  = document.createElement("a")
const logoImg               = document.createElement("img")

logo.setAttribute("href", "../index.html")
logoImg.setAttribute("src", "../images/ohmyfood.png")
logoImg.setAttribute("alt", "Logo Ohmyfood")

logo.classList.add("logo")

header.appendChild(logo)
logo.appendChild(logoImg)

