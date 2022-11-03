let elem = document.querySelector("#elem");
let butt1 = document.querySelector(".b1");
let butt2 = document.querySelector(".b2");

butt1.addEventListener(`click`, () => {
if (elem.checked) {
document.querySelector(`p`).textContent = `Hi!`;
} else {
document.querySelector(`p`).textContent = `Bye!`;
}
});
butt2.addEventListener(`click`, () => {
elem.checked = false;
});