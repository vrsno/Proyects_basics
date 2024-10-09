const btn = document.getElementById("click-btn")
const countEl = document.getElementById("count")
let count = 0;


btn.addEventListener("click",()=>{
    count++;
    countEl.textContent = "clicks: " + count;
})