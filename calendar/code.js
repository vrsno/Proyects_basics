const monthName =document.getElementById("month-name")
const dayName = document.getElementById("day-name")
const dayNumber = document.getElementById("day-number")
const year = document.getElementById("year")

const date = new Date()

monthName.textContent = date.toLocaleDateString("en-US",{
    month:"long"
});

dayName.textContent = date.toLocaleDateString("en-US",{
    weekday:"long"
});

dayNumber.textContent = date.getDate()
year.textContent = date.getFullYear()