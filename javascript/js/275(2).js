let elem = document.querySelector("#elem");
let button = document.querySelector(".b1");

button.addEventListener("click", function () {
console.log(elem.disabled);
elem.disabled = !elem.disabled;
});