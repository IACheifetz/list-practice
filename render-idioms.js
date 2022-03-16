export function renderIdioms(idiom) {
    //<div class="idioms">
    // <p>idiom goes here<p>
    // </div>
    const idiomEl = document.createElement('div');
    const idiomBodyEl = document.createElement('p');

    idiomEl.classList.add('idioms');

    idiomBodyEl.textContent = idiom.idiomTag;

    for (let idioms of idiom) {
        const idiomsEl = renderIdioms(idioms);

        idiomsEl.append(idiomBodyEl);
    }

    idiomEl.append(idiomBodyEl);

    return idiomEl;
}