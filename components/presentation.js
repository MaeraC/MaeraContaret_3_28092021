const presentationSection = document.querySelector(".presentation")
const presentationTitle = document.createElement("h2")
const presentationDescription = document.createElement("p")
const locationBloc = document.createElement("div")
const presentationButton = document.createElement("a")
const form = document.createElement("form")
const searchBar = document.createElement("input")
const barResults = document.createElement("div")

searchBar.setAttribute("type", "text")
searchBar.setAttribute("placeholder", "Sélectionnez le quartier de votre choix")
presentationButton.setAttribute("href", "")

presentationTitle.textContent = "Réservez le menu qui vous convient"
presentationDescription.textContent = "Découvrez des restaurants d'exception, sélectionnés par nos soins."
presentationButton.textContent = "Choisir un restaurant"

presentationTitle.classList.add("presentation-title")
presentationDescription.classList.add("presentation-description")
presentationButton.classList.add("presentation-button")
searchBar.classList.add("search-bar")
barResults.classList.add("bar-results")
locationBloc.classList.add("location")

presentationSection.appendChild(presentationTitle)
presentationSection.appendChild(presentationDescription)
presentationSection.appendChild(locationBloc)
locationBloc.appendChild(form)
form.appendChild(searchBar)
form.appendChild(barResults)
locationBloc.appendChild(presentationButton)
