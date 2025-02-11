import { setVegetableChoice } from "./transientState.js"

export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const veggies = await response.json()
    document.addEventListener("change", handleVegetableChange)

    let veggieHTML = ""
    const vegStringArray = veggies.map(
        (veggie) => {
            return `<div>
            <input type="radio" name="veggies" value="${veggie.id}" />
            ${veggie.type}
            </div>`
        }
    )
    return veggieHTML += vegStringArray.join("")
}

const handleVegetableChange = (changeEvent) => {
    if (changeEvent.target.name === "veggies")
        setVegetableChoice(parseInt(changeEvent.target.value))

}