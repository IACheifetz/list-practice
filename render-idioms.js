export function renderIdioms(idiom) {
    //<div class="idioms">
    // <p>idiom goes here<p>
    // </div>
    const idiomEl = document.createElement('div');
    const idiomList = document.createElement('h4');

    idiomEl.classList.add('idioms');

    for (let idioms of idiom) {
        const idiomsOneEl = document.createElement('p');
        idioms.idiom;
        idiomsOneEl.textContent = idiom;

        idiomList.append(idiomsOneEl);
    }

    idiomEl.append(idiomList);

    return idiomEl;
}