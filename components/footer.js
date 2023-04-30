const footer = document.querySelector(".footer")
const footerTitle = document.createElement("span")
const footerContainer = document.createElement("div")
const footerBloc1 = document.createElement("div")
const iconBloc1 = document.createElement("i")
const descBloc1 = document.createElement("a")
const footerBloc2 = document.createElement("div")
const iconBloc2 = document.createElement("i")
const descBloc2 = document.createElement("a")
const footerMention = document.createElement("a")
const footerContact = document.createElement("a")

footerTitle.textContent = "ohmyfood"
descBloc1.textContent = "Proposer un restaurant"
descBloc2.textContent = "Devenir partenaire"
footerMention.textContent = "Mentions légales"
footerContact.textContent = "Contact"

iconBloc1.classList.add("fas", "fa-utensils", "Icone1")
iconBloc2.classList.add("fas", "fa-hands-helping", "Icone2")
footerTitle.classList.add("footer__title")
footerBloc1.classList.add("footer__bloc")
footerBloc2.classList.add("footer__bloc")
footerMention.classList.add("footer__mention")
footerContact.classList.add("footer__contact")
footerContainer.classList.add("footer__container")

descBloc1.setAttribute("href", "")
descBloc1.setAttribute("href", "mailto:ohmyfood@gmail.com")

footer.appendChild(footerTitle)
footer.appendChild(footerContainer)
footerContainer.appendChild(footerBloc1)
footerBloc1.appendChild(iconBloc1)
footerBloc1.appendChild(descBloc1)
footerContainer.appendChild(footerBloc2)
footerBloc2.appendChild(iconBloc2)
footerBloc2.appendChild(descBloc2)
footerContainer.appendChild(footerMention)
footerContainer.appendChild(footerContact)
