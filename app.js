// import functions and grab DOM elements
import { candies } from './candy-data.js';
import { renderCandy } from './render-candy.js';

// import { idioms } from './idiom-data.js';
// import { renderIdioms } from './render-idioms.js';
// initialize global state
const candyListEl = document.querySelector('.candy-list');
// set event listeners 
for (let candy of candies) {
    const candyEl = renderCandy(candy);
    candyListEl.append(candyEl);

}

// const idiomListEl = document.querySelector('idiom-list');

// for (let idiom of idioms) {
//     const idiomsEl = renderIdioms(idiom);
//     idiomListEl.append(idiomsEl);
// }

import { albums } from '.album-data.js';
import { renderAlbum } from './render-album.js';

const albumListEl = document.querySelector('.album-list');

for (let album of albums) {
    const albumEl = renderAlbum(album);

    albumListEl.append(albumEl);
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
