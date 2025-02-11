const transientState = {
    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0
}
const defaultState = {
    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0
}


export const setEntreeChoice = (entreeChoice) => {
    transientState.entreeId = entreeChoice
    
    console.log(transientState)
}

export const setVegetableChoice = (vegetableChoice) => {
    transientState.vegetableId = vegetableChoice
    
    console.log(transientState)
}

export const setSideChoice = (sideChoice) => {
    transientState.sideId = sideChoice
    
    console.log(transientState)
}

const resetTransientState = () => {
    Object.assign(transientState, defaultState)
}


export const purchaseCombo = async () => {
    const unSelectedOptions = Object.values(transientState).every(value => value === 0)

    if (unSelectedOptions) {
        window.alert(`Please make a selection before submitting your order.`)
    } else {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/purchases", postOptions)

    

    const comboPurchase = new CustomEvent("orderPlaced")
    document.dispatchEvent(comboPurchase)

    resetTransientState()
    


}
}
