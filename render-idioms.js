export function renderIdioms(idiom) {
    //<div class="idioms">
    // <p>idiom goes here<p>
    // </div>
    const idiomEl = document.createElement('div');
    const idiomList = document.createElement('h4');

    idiomEl.classList.add('idioms');

    for (let idioms of idiom) {
        const idiomsEl = document.createElement('p');
        idiomsEl.textContent = idioms;

        idiomList.append(idioms);
       
    }

    idiomEl.append(idiomList);

    return idiomEl;
}