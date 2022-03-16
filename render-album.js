export function renderAlbumEl(album) {
           // <div class="albums">
            //     <h3>Around The World</h3>
            //     <p>Homework</p>
            //     <p>Artist: Daft Punk</p>
            //     <p>Released: 1997</p>
            //     <ul class="singles"> 
            //         <li>Da Funk</li>
            //         <li>Around the World</li>
            //         <li>Burnin</li>
            //         <li>Revolution 909</li>
            //     </ul>
            // </div>
    const AlbumEl = document.createElement('div');
    const titleEl = document.createElement('h3');
    const artistEl = document.createElement('p');
    const releasedEl = document.createElement('p');
    const singlesEl = document.createElement('ul');

    AlbumEl.classList.add('album');

    titleEl.textContent = album.title;
    artistEl.textContent = `By ${album.artist.name}, including: ${album.artist.collaborators}`;
    releasedEl.textContent = `Released in ${album.releaseDate}`;

    for (let single of album.Singles) {

        const singleEl = document.createElement('li');
        singleEl.textContent = single;

        singlesEl.append(singleEl);
    } 

    AlbumEl.append(titleEl, artistEl, releasedEl, singlesEl);

    return AlbumEl;
}