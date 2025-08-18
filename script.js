const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`);
        const data = await response.json();

        if (data.cod != 200) { 
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            const main = data.weather[0].main;
            if (main === "Clouds") weatherIcon.src = "clouds.png";
            else if (main === "Clear") weatherIcon.src = "clear.png";
            else if (main === "Rain") weatherIcon.src = "rain.png";
            else if (main === "Drizzle") weatherIcon.src = "drizzle.png";
            else if (main === "Mist") weatherIcon.src = "mist.png";
            else weatherIcon.src = "default.png";

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

// Search button click
searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) checkWeather(city);
});

// Enter key support
searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const city = searchBox.value.trim();
        if (city) checkWeather(city);
    }
});
