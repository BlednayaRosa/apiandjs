const select = document.querySelector(`#select`);
const paragraph = document.querySelector("p");
const butt = document.querySelector(`.b1`);

butt.addEventListener(`click`, function () {
paragraph.textContent = select.value;
});