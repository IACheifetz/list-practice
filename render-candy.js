export function renderCandy(candy) {
            // <div class="candies" style="background: red">
            //     <h3>lollipop</h3>
            //     <p>candy type: hard</p>
            //     <p>candy flavor: cherry</p>
            //     <p>description: a hard candy sucker</p>
            // </div>
    const candyEl = document.createElement('div'); 
    const candyNameEl = document.createElement('h3');
    const typeEl = document.createElement('p'); 
    const flavorEl = document.createElement('p'); 
    const descriptionEl = document.createElement('p'); 

    candyEl.classList.add('candies');
    candyEl.style.background = candy.color;

    candyNameEl.textContent = candy.name;
    typeEl.textContent = `Type: ${candy.type}`;
    flavorEl.textContent = `Flavor: ${candy.flavor}`;
    descriptionEl.textContent = candy.description;

    candyEl.append(candyNameEl, typeEl, flavorEl, descriptionEl);
    
    return candyEl;
}