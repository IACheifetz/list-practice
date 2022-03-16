export function renderIdioms(idiom) {
    //<div class="idioms">
    // <p>idiom goes here<p>
    // </div>
    const idiomEl = document.createElement('div');
    const idiomList = document.createElement('p');

    idiomEl.classList.add('idioms');

    for (let idioms of idiom) {
        const idiomsEl = document.createElement('p');

        idiomsEl.textContent = idioms.idiom[0], idioms.idiom[1], idioms.idiom[2], idioms.idiom[3];

        idiomEl.append(idiomList);
    }

    idiomEl.append(idiomList);

    return idiomEl;
}