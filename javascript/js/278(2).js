let check = document.querySelector(`#elem`);
let paragraph = document.querySelector("p");

check.addEventListener(`change`, function () {
paragraph.textContent = check.checked;
});