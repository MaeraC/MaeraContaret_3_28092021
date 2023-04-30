const header = document.querySelector(".header")
const logo = document.createElement("a")
const logoImg = document.createElement("img")

const form = document.createElement("form")
const searchBar = document.createElement("input")
const barResults = document.createElement("div")

logo.setAttribute("href", "index.html")
logoImg.setAttribute("src", "images/ohmyfood.png")
logoImg.setAttribute("alt", "Logo Ohmyfood")
searchBar.setAttribute("type", "text")
searchBar.setAttribute("placeholder", "Sélectionnez le quartier de votre choix")

logo.classList.add("logo")
form.classList.add("location")
searchBar.classList.add("search-bar")
barResults.classList.add("bar-results")

header.appendChild(logo)
logo.appendChild(logoImg)
header.appendChild(form)
form.appendChild(searchBar)
form.appendChild(barResults)