const modalOrderSection             = document.querySelector(".modal-order")
const modal                         = document.createElement("div")
const modalTitle                    = document.createElement("h2")
const modalText                     = document.createElement("p")
const closeButton                   = document.createElement("button")

modalTitle.innerHTML              = "Oups..." + "</br>" + "Aucune commande disponible !"
modalText.textContent               = "Ohmyfood est une entreprise fictive ayant pour objectif de concevoir un site web prototype afin de démontrer mes compétences dans le développement web."
closeButton.textContent             = "Fermer"

closeButton.addEventListener("click", () => {
    modalOrderSection.style.visibility = "hidden"
})

modalOrderSection.appendChild(modal)
modal.appendChild(modalTitle)
modal.appendChild(modalText)
modal.appendChild(closeButton)