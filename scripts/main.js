/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
// import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './FishDataProvider.js'
import initializeDetailButtonEvents from './dialogs.js'


// initializeDetailButtonEvents()
FishListComponent()

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}