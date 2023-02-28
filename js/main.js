'use strict';

const imgs = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

const sliderContainer = document.querySelector('.slider');

let sliderElements = '';

for (let i = 0; i < imgs.length; i++) {

    const currentImage = imgs[i];

    sliderElements += `<div class="item"><img src="img/${currentImage}" alt=""></div>`;
    console.log (sliderElements);
}

sliderContainer.innerHTML = sliderElements + sliderContainer;

//1. template literal
//<div class="item"><img src="img/01.webp"
//2. all'interno di ogni iterazione aggiungere gli elementi html e appendere gli elementi
//3. <template> come il mustache template

document.querySelector('item').classList.add('show');


const elementDiv = document.createElement('div');
const elementImg = document.createElement('img');
elementImg.src = `img/${currentImage}`;
elementDiv.append(elementImg);
elementDiv.classList.add('item');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function() {
 alert ('click prev');
})

next.addEventListener('click', function() {
    const currentElement = document.querySelector('item show');
    const nextElement = currentElement.nextSibling;

   if(nextElement === null) {}

    currentElement.classList.remove('show');
    nextElement.classList.add('show');

   })