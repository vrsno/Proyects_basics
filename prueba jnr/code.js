const formBtn = document.getElementById("form-btn");
const API_KEY = "98a157d157f6bec16353ca8c773ad37c";
const error = document.querySelector(".error") || document.createElement("p"); // Si no existe, se crea el error

let loading = false;

formBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  let city = document.getElementById("city").value;

  // eliminar busqueda
  const previusWeatherInfo = document.querySelector(".weather-info");
  if (previusWeatherInfo) {
    previusWeatherInfo.remove();
  }

  // Ocultar cualquier error anterior
  error.style.display = "none";

  // Verificar si la ciudad está vacía
  if (!city) {
    error.textContent = "Ingresa una ciudad válida";
    document.body.appendChild(error); // Asegúrate de agregarlo solo una vez
    return;
  }

  // Verificar si ya está cargando los datos
  if (loading) {
    const cargando = document.createElement("p");
    cargando.textContent = "Cargando...";
    document.body.appendChild(cargando);
    return;
  }

  try {
    const weatherData = await getWeatherData(city);

    if (!weatherData) {
      error.style.display = "block";
      error.textContent = "No se encontró información para esa ciudad.";
      document.body.appendChild(error);
      document.getElementById("city").value = "";
      return;
    } else {
      // Si todo es correcto, ocultamos el mensaje de error
      error.style.display = "none";
    }

    const { coord, main, name } = weatherData;
    const { lat, lon } = coord;
    const { temp, temp_min, temp_max, humidity } = main;

    // Mostrar los datos en el DOM
    const weatherInfo = document.createElement("p");
    weatherInfo.classList.add("weather-info");
    weatherInfo.innerHTML = `
      Ciudad: ${name} <br>
      Latitud: ${lat.toFixed(2)} Longitud: ${lon.toFixed(2)} <br>
      Temperatura: ${temp.toFixed(1)}°C <br>
      Temp. Mínima: ${temp_min.toFixed(1)}°C <br>
      Temp. Máxima: ${temp_max.toFixed(1)}°C <br>
      Humedad: ${humidity}%`;

    document.body.appendChild(weatherInfo);
  } catch (error) {
    console.log("Error:", error);
  }
});

async function getWeatherData(city) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  loading = true;

  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.cod !== 200) {
      console.log(`Error: ${responseJson.message}`);
      return null;
    }

    return responseJson;
  } catch (error) {
    console.log(error);
    return null;
  } finally {
    loading = false;
  }
}
