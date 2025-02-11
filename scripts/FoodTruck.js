import { Sales } from "./Sales.js"
import { entreeOptions } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { orderButton } from "./orderButton.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreeHTML = await entreeOptions()
    const veggieHTML = await Veggies()
    const sideHTML = await Sides()
    const button = orderButton()
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="entrees">
        <h2>Base Dish</h2>
        ${entreeHTML}
        </article>
       
        <article class="veggies">
        <h2>Vegetables</h2>
        ${veggieHTML}
        </article>

        <article class="sides">
        <h2>Sides</h2>
        ${sideHTML}
        </article>

        <article class= "button">
        ${button}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
