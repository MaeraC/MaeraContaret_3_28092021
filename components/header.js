const header = document.querySelector(".header")
const logo = document.createElement("a")
const logoImg = document.createElement("img")

const form = document.createElement("form")
const searchBar = document.createElement("input")
const searchResults = document.createElement("div")

logo.setAttribute("href", "index.html")
logoImg.setAttribute("src", "images/ohmyfood.png")
logoImg.setAttribute("alt", "Logo Ohmyfood")
searchBar.setAttribute("type", "text")
searchBar.setAttribute("placeholder", "Sélectionnez le quartier de votre choix")

logo.classList.add("logo")
form.classList.add("location")
searchBar.classList.add("search-bar")
searchResults.classList.add("search-results")

const towns = ["La Défense - Grande Arche", "Esplanade de la Défense", "Pont de Neuilly", "Les Sablons", "Porte Maillot", "Argentine", "Charles de Gaulle — Étoile", "George V", "Franklin D. Roosevelt", "Champs-Élysées — Clemenceau", "Concorde", "Tuileries", "Palais Royal - Musée du Louvre", "Louvre — Rivoli", "Châtelet", "Hôtel de Ville", "Saint-Paul", "Bastille", "Gare de Lyon", "Reuilly — Diderot", "Nation", "Porte de Vincennes", "Saint-Mandé", "Bérault", "Château de Vincennes"]

searchBar.addEventListener("input", (e) => {
    const searchString = e.target.value.toLowerCase()
    const townsFound = towns.filter(item => item.toLowerCase().includes(searchString))

    townsFound.forEach((town) => {
        const townNode = document.createElement("p")
        townNode.textContent = town
        townNode.style.fontWeight = "normal"
        townNode.style.fontSize = "14px"
        //townNode.style.borderBottom = "grey 1px solid"
        searchResults.appendChild(townNode)
    })
})

header.appendChild(logo)
logo.appendChild(logoImg)
header.appendChild(form)
form.appendChild(searchBar)
form.appendChild(searchResults)