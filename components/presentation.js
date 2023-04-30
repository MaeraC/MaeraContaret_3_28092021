const presentationSection = document.querySelector(".presentation")
const presentationTitle = document.createElement("h2")
const presentationDescription = document.createElement("p")
const presentationButton = document.createElement("a")

presentationTitle.textContent = "Réservez le menu qui vous convient"
presentationDescription.textContent = "Découvrez des restaurants d'exception, sélectionnés par nos soins."
presentationButton.textContent = "Choisir un restaurant"

presentationButton.setAttribute("href", "#restaurants")

presentationTitle.classList.add("presentation-title")
presentationDescription.classList.add("presentation-description")
presentationButton.classList.add("presentation-button")

presentationSection.appendChild(presentationTitle)
presentationSection.appendChild(presentationDescription)
presentationSection.appendChild(presentationButton)