//Работа с выпадающими списками в JavaScript
const select = document.querySelector(`#select`);
const paragraph = document.querySelector("p");

select.addEventListener(`change`, function () {
let year = select.value;
let date = new Date(year, 1, 29);
console.log(date);
let dayOfMonth = date.getDate();
if (dayOfMonth == 29) {
console.log(`Visokosny`);
}
});

let select = document.querySelector("#select");
let button = document.querySelector(".b1");
button.addEventListener("click", function () {
select.value = "one";
});
