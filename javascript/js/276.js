let elem = document.querySelector("#elem");
let button = document.querySelector(".b1");

button.addEventListener("click", function () {
console.log(elem.checked);
elem.checked = !elem.checked;
});