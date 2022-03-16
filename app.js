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


import { albums } from './album-data.js';
import { renderAlbumEl } from './render-album.js';

const albumListEl = document.querySelector('.album-list');

for (let album of albums) {
    const albumEl = renderAlbumEl(album);

    albumListEl.append(albumEl);
}

import { idioms } from './idiom-data.js';
import { renderIdioms } from './render-idioms.js';

const idiomListEl = document.querySelector('.idiom-list');

for (let idiom of idioms) {
    const idiomsEl = renderIdioms(idiom);
    idiomListEl.append(idiomsEl);
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
