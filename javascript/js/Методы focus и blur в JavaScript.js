//Методы focus и blur в JavaScript
let input = document.querySelector(`#elem`);
let input1 = document.querySelector(`#elem1`);

input.addEventListener(`input`, function () {
let length = this.value.length;
if (length >= 2) {
input1.focus();
}
});
input1.addEventListener(`input`, function () {
let length = this.value.length;
if (length >= 2) {
input1.blur();
}
});