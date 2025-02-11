import { setEntreeChoice } from "./transientState.js"

export const entreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()
    document.addEventListener("change", handleEntreeChange)
    
    let entreeHTML = ""
    const entreeStringArray = entrees.map(
        (entree) => {
            return `<div>
            <input type="radio" name="entree" value="${entree.id}" />
            ${entree.name}
            </div>`
        }
    )
    return entreeHTML += entreeStringArray.join("")
}

const handleEntreeChange = (changeEvent) => {
    if (changeEvent.target.name === 'entree') {
        setEntreeChoice(parseInt(changeEvent.target.value))
    }
}