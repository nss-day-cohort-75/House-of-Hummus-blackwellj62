export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await response.json()

    let salesDivs = ""
    const salesArray =sales.map(
        (sale) => {
            const orderPrice = sale.entree.price + sale.vegetable.price + sale.side.price
            const formattedPrice = orderPrice.toFixed(2)
            return `<div>Receipt #${sale.id} =$${formattedPrice}</div>`
        }
    )

    

    return salesDivs += salesArray.join("")
}

