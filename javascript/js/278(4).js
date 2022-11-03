let input = document.querySelector(`#elem`);
let paragraph = document.querySelector("p");

input.addEventListener(`input`, function () {
let length = this.value.length;
if (length < 5) {
input.style.borderColor = `red`;
input.classList.add(`input`);
} else {
input.style.borderColor = `green`;
input.classList.add(`input1`);
}
});