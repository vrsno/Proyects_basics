const tarea = document.querySelector(".tarea");
const listaTarea = document.querySelector(".listaTarea");
const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    agregarTarea();
})

function agregarTarea() {
    const li = document.createElement("li");
    const tareaValor = tarea.value;

    if (tareaValor) {
        li.textContent = tareaValor;
        li.onclick = function(){
            this.remove();
        }
        listaTarea.appendChild(li);
        tarea.value = "";
    } else alert("Por favor, ingrese una tarea.")
}