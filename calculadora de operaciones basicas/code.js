const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".display")

let firstValue = null;
let operador = "";
let input = "";

btns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        const value = btn.textContent;
        
        if (value === "C") {
            input = "";
            firstValue = null;
            display.value = "";
        } else if (value === "=") {
            if (firstValue !== null && operador) {
                input = calcular(firstValue, operador, parseFloat(input));
                display.value = input;
                operador = "";
                firstValue = null
            }
        }
        else if (["+", "-", "/", "*"].includes(value)) {
            if (input) {
                firstValue = parseFloat(input);
                operador = value;
                input = "";
            }
        } else {
            input += value;
            display.value = input;
        }
    });
});











function calcular(first, operador, second) {
    switch (operador) {
        case "+": return first + second;
        case "-": return first - second;
        case "/": return first / second;
        case "*": return first * second;
        default: return second;
    }
}