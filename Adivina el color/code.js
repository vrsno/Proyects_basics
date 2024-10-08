const colorDisplay = document.getElementById("colorDisplay");
const colorInput = document.getElementById("colorInput");
const submitBtn = document.getElementById("submitBtn");
const resultEl = document.getElementById("result");
const restarBtn = document.getElementById("restarBtn");
const colors = ["red", "green", "blue", "yellow", "orange", "violet", "gray"];

let randomColor = colors[Math.floor(Math.random() * colors.length)];

colorDisplay.style.backgroundColor = randomColor;

submitBtn.addEventListener("click",()=>{
    const userGuess = colorInput.value.toLowerCase();
    if(userGuess === randomColor) {
        resultEl.textContent = "Correcto! has adivinado el color.";
        restarBtn.style.display = "block"
    } else {
        resultEl.textContent = "intenta de nuevo";
    };
});

restarBtn.addEventListener("click",()=>{
    randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.style.backgroundColor = randomColor;
    colorInput.value = "";
    resultEl.textContent = "";
    restarBtn.style.display = "none";

})


