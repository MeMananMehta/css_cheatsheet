class Weather {
  constructor(city) {
    this.apiKey = "7e0ba7033ac6e6ea066d0276bcdcb0b1";
    this.city = city;
  }

  //fetch weather from api
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${
        this.apiKey
      }`
    );
    const responseData = await response.json();
    return responseData;
  }

  //change weather location
  changeLocation(city) {
    this.city = city;
  }
}
