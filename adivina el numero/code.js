const feedback = document.getElementById("feedback");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const guessInput = document.getElementById("guess-input");

let randomNumber = Math.floor(Math.random()*100) + 1;


function getRandomColor() {
    const letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()* 16)]; 
    }
    return color;
}

submitBtn.addEventListener("click",()=>{
    const userGuess = parseInt(guessInput.value);

    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        feedback.textContent = "Por favor, introduce un numero entre 1 y 100";
        feedback.style.color = "black";
        return;
    }

    if(userGuess === randomNumber){
        feedback.textContent = "Correcto!!!!";
        feedback.style.color = "blue";
        resetBtn.style.display = "inline-block";
    } else if(userGuess < randomNumber){
        feedback.textContent = "Demasiado bajo intenta de nuevo"
        feedback.style.color = getRandomColor();
    } else {
        feedback.textContent ="demasiado alto intenta de nuevo";
        feedback.style.color = getRandomColor();
    }
})

resetBtn.addEventListener("click",()=>{
    randomNumber = Math.floor(Math.random() * 100) + 1;
    feedback.textContent = ""
    guessInput.value = "";
    resetBtn.style.display = "none"
})