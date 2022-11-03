let elem = document.querySelector("#elem");
let butt1 = document.querySelector(".b1");
let butt2 = document.querySelector(".b2");
let butt3 = document.querySelector(".b3");

butt1.addEventListener(`click`, () => {
elem.disabled = true;
});
butt2.addEventListener(`click`, () => {
elem.disabled = false;
});
butt3.addEventListener(`click`, () => {
alert(elem.disabled);
});