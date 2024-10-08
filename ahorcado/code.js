const wordDisplay = document.getElementById("word");
const letterInput = document.getElementById("letterInput");
const guessButton = document.getElementById("guessbtn");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset");

const words = ["manzana","cereza","platano","fresa","kiwi"];

let chosenWord = "";
let displayWord = "";
let attemps = 0;


function startGame(){
    chosenWord = words[Math.floor(Math.random() * words.length)];
    displayWord = "_".repeat(chosenWord.length).split("");
    wordDisplay.textContent = displayWord.join(" ");
    messageDisplay.textContent = "";
    resetButton.style.display = "none"
    attemps = 0;
}
  
guessButton.addEventListener("click",()=>{
    const letter = letterInput.value.toLocaleLowerCase();
    letterInput.value = "";


    if(letter && !letterInput.value.includes(letter)) {
        let correctGuess = false;
    
        for (let i = 0; i < chosenWord.length; i++) {
            if(chosenWord[i] === letter){
                displayWord[i] = letter;
                correctGuess = true;
            }
            
        }

    wordDisplay.textContent = displayWord.join(" ");

    if (correctGuess){
        if (!displayWord.includes("_")){
            messageDisplay.textContent = "Ganaste La Palabra era: " +
            chosenWord;
            resetButton.style.display = "block";
        }
    } else {
        attemps++;
        if (attemps >= 6){
            messageDisplay.textContent = "Perdiste la Palabra era: " +
            chosenWord;
            resetButton.style.display = "block";
        }
    }

    }
})


resetButton.addEventListener("click",()=>{
    startGame();
    
})

startGame()


