import { setSideChoice } from "./transientState.js"

export const Sides = async () => {
        const response = await fetch("http://localhost:8088/sides")
        const sides = await response.json()
        document.addEventListener("change", handleSideChange)

        let sideHTML = ""
        const sideStringArray = sides.map(
            (side) => {
                return `<div>
                <input type="radio" name="sides" value="${side.id}" />
                ${side.title}
                </div>`
            }
        )
    return sideHTML += sideStringArray.join("")
}

const handleSideChange = (changeEvent) => {
    if (changeEvent.target.name === "sides")
        setSideChoice(parseInt(changeEvent.target.value))
}