const apiKey = "a78f5567348ed7f9157900a19f1e599d";

document.getElementById('getWeather').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value;
  const weatherInfo = document.getElementById('weatherInfo');
  
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();

    if (data.cod !== 200) throw new Error(data.message);

    document.getElementById('cityName').textContent = data.name;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('temp').textContent = data.main.temp;
    document.getElementById('wind').textContent = data.wind.speed;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherInfo.classList.remove('hidden');
  } catch (err) {
    alert("City not found or error occurred.");
    weatherInfo.classList.add('hidden');
  }
});
