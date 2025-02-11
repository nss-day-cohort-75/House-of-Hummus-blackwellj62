import { purchaseCombo } from "./transientState.js"

const handleOrderButton = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        purchaseCombo()
    }
}


export const orderButton = () => {
    document.addEventListener("click", handleOrderButton)
    return '<button id="purchase">Purchase Combo</button>'
}