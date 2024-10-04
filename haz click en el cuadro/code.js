const colorBox = document.getElementById("colorBox")
const scoreEl = document.getElementById("score")

let score = 0;

function changeColorAndPosition(){
    const colors = ["#48e","#dc3545","#007bff","#ffc107","#28a745"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomX = Math.random() * (window.innerWidth- 100);
    const randomY = Math.random() * (window.innerHeight- 100);

    colorBox.style.backgroundColor = randomColor;
    colorBox.style.position = "absolute";
    colorBox.style.left = `${randomX}px`;
    colorBox.style.top = `${randomY}px`;

}

colorBox.addEventListener("click",()=>{
    score++;
    scoreEl.textContent = `Puntuacion: ${score}`;
    changeColorAndPosition();
})



changeColorAndPosition()