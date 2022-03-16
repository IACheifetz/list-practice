export function renderIdioms(idiom) {
    //<div class="idioms">
    // <p>idiom goes here<p>
    // </div>
    const idiomEl = document.createElement('div');
    const idiomBodyOneEl = document.createElement('p');
    const idiomBodyTwoEl = document.createElement('p');
    const idiomBodyThreeEl = document.createElement('p');
    const idiomBodyFourEl = document.createElement('p');

    idiomEl.classList.add('idioms');

    idiomBodyOneEl.textContent = idiom.idiom1;
    idiomBodyTwoEl.textContent = idiom.idiom2;
    idiomBodyThreeEl.textContent = idiom.idiom3;
    idiomBodyFourEl.textContent = idiom.idiom4;

    // for (let idioms of idiom) {
    //     const idiomsEl = renderIdioms(idioms);

    //     idiomsEl.append(idiomBodyEl);
    // }

    idiomEl.append(idiomBodyOneEl, idiomBodyTwoEl, idiomBodyThreeEl, idiomBodyFourEl);

    return idiomEl;
}