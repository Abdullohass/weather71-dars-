const apiKey = "db41bfab2f60a1baa958283fa042c221";
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const temp = document.getElementById("temp");
const min = document.getElementById("min");
const max = document.getElementById("max");
const img = document.getElementById("mig");
const city = document.getElementById("city");
const date = document.getElementById("date");
const units = 'metric'


btn.addEventListener("click", () => {

    if (input.value.trim().length < 1) {
        alert("Iltimos biror shahar kiriting!!!")
    } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=${units}&appid=${apiKey}`;
        fetch(url)
            .then(res => res.json())
            .then(json => weatherView(json))
    }


})


function weatherView(data) {
    console.log(data);
    city.textContent = data.name;
    max.textContent = "Max: " + data.main.temp_max.toFixed(0) + "°C";
    min.textContent = "Min: " + data.main.temp_min.toFixed(0) + "°C";
    temp.textContent = data.main.temp.toFixed(0) + "°C";
    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`



    const currentDate = new Date();
    date.textContent = currentDate.toLocaleDateString();
}