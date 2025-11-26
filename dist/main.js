"use strict";
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");
function getValues() {
    return [Number(num1.value), Number(num2.value)];
}
function updateResult(value) {
    result.textContent = value.toString();
}
document.querySelector("#add").addEventListener("click", () => {
    const [a, b] = getValues();
    updateResult(a + b);
});
document.querySelector("#subtract").addEventListener("click", () => {
    const [a, b] = getValues();
    updateResult(a - b);
});
document.querySelector("#multiply").addEventListener("click", () => {
    const [a, b] = getValues();
    updateResult(a * b);
});
document.querySelector("#divide").addEventListener("click", () => {
    const [a, b] = getValues();
    if (b === 0) {
        alert("Tidak bisa membagi dengan nol!");
        return;
    }
    updateResult(a / b);
});
