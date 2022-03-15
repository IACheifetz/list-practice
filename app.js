// import functions and grab DOM elements
import { candies } from './candy-data.js';
import { renderCandy } from './render-candy.js';
// initialize global state
const candyListEl = document.querySelector('.candy-list');
// set event listeners 
for (let candy of candies) {
    const candyEl = renderCandy(candy);
    candyListEl.append(candyEl);

}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
