/**
 *   FishListComponent which renders individual fish objects as HTML
 */
import { useFish } from "./FishDataProvider.js"
import FishComponent from "./Fish.js"

const FishListComponent = () => {

    const contentElement = document.querySelector(".content")
    console.log(contentElement)
    const fishes = useFish()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        FishComponent(fish)
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <section class="fishList">
            ${fishHTMLRepresentations}
        </section>
    `
}

export default FishListComponent