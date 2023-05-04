const sectionFunctionning               = document.querySelector(".functioning")
const functionningContainer             = document.createElement("div")

const functionningArray                 = [
    {
        "number": "1",
        "icon": "fa-mobile-alt",
        "title": "Choisissez un restaurant"
    },
    {
        "number": "2",
        "icon": "fa-bars",
        "title": "Composez votre menu"
    },
    {
        "number": "3",
        "icon": "fa-store",
        "title": "Dégustez au restaurant"
    }
]

functionningArray.forEach((item) => {
    const functionningBox               = document.createElement("div")
    const number                        = document.createElement("span")
    const functionningDetails           = document.createElement("div")
    const icon                          = document.createElement("i")
    const title                         = document.createElement("span")

    number.textContent                  = item.number
    title.textContent                   = item.title

    icon.classList.add("fas", item.icon)
    number.classList.add("functionning-number")
    title.classList.add("functionning-title")
    functionningDetails.classList.add("functionning-details")
    functionningBox.classList.add("functionning__element")

    functionningContainer.appendChild(functionningBox)
    functionningBox.appendChild(number)
    functionningBox.appendChild(functionningDetails)
    functionningDetails.appendChild(icon)
    functionningDetails.appendChild(title)
})

functionningContainer.classList.add("functionning_container")

sectionFunctionning.appendChild(functionningContainer)
