const num1 = document.querySelector<HTMLInputElement>("#num1")!;
const num2 = document.querySelector<HTMLInputElement>("#num2")!;
const result = document.querySelector<HTMLSpanElement>("#result")!;

function getValues(): [number, number] {
    return [Number(num1.value), Number(num2.value)];
}

function updateResult(value: number): void {
    result.textContent = value.toString();
}

document.querySelector("#add")!.addEventListener("click", () => {
    const [a, b] = getValues();
    updateResult(a + b);
});

document.querySelector("#subtract")!.addEventListener("click", () => {
    const [a, b] = getValues();
    updateResult(a - b);
});

document.querySelector("#multiply")!.addEventListener("click", () => {
    const [a, b] = getValues();
    updateResult(a * b);
});

document.querySelector("#divide")!.addEventListener("click", () => {
    const [a, b] = getValues();
    if (b === 0) {
        alert("Tidak bisa membagi dengan nol!");
        return;
    }
    updateResult(a / b);
});
