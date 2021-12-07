let elList = document.querySelector('.pocedex__list');
let elTemplate = document.querySelector('.pocedex__template').content;
let elFragment = document.createDocumentFragment();
let elAllBtn = document.querySelector('.sort__all');
let elBtn1 = document.querySelector('.sort__btn1');
let elBtn2 = document.querySelector('.sort__btn2');
let elBtn3 = document.querySelector('.sort__btn3');
let elBtn4 = document.querySelector('.sort__btn4');
let elBtn5 = document.querySelector('.sort__btn5');


for(let i of pokemons.slice(0,100)) {
    let elCloneTemplate = elTemplate.cloneNode(true);
    elCloneTemplate.querySelector('.pocedex__title').textContent = i.name;
    elCloneTemplate.querySelector('.pocedex__img').src = i.img;
    elCloneTemplate.querySelector('.pocedex__number').textContent = i.num;
    elFragment.appendChild(elCloneTemplate);
    console.log(elCloneTemplate);
}
elList.appendChild(elFragment);

// function pages (i,j) {
//     elList.innerHTML = "";
// }
// elAllBtn.addEventListener('click', () => {pages(0,10)})