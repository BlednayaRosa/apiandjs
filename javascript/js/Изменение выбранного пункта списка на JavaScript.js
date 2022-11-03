//Номер выбранного пункта выпадающего списка
const input = document.querySelector(`#elem`);
let select = document.querySelector("#select");

input.addEventListener(`input`, function () {
select.value = this.value;
console.log(select);
});