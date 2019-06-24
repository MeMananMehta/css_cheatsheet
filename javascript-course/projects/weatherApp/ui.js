class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.temperature = document.getElementById("w-temperature");
    this.humidity = document.getElementById("w-humidity");
    this.visibility = document.getElementById("w-visibility");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    const temp = (parseFloat(weather.main.temp) - 273.15).toFixed(2);
    this.temperature.textContent = temp + " C";
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.visibility.textContent = `Visibility: ${weather.visibility}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
  }
}
