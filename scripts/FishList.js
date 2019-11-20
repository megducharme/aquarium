/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

const FishListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("insert selector here")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            All the fish go here!
        </section>
    `
}

export default FishListComponent