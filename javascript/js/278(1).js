let input = document.querySelector(`#elem`);
let paragraph = document.querySelector("p");

input.addEventListener(`input`, function () {
paragraph.textContent = this.value;
});