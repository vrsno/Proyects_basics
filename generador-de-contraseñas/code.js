document.getElementById("generate").addEventListener("click",()=>{
    const lenght = parseInt(document.getElementById("lenght").value);
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length)
        password += charset[randomIndex];
    }

    document.getElementById("password").textContent = password;
})