class Weather{
  constructor(city, state){
    this.apiKey = "";
    this.city = city;
    this.state = state;
  }

  //fetch weather from api
  async getWeather(){
    const response = await fetch(place api url here);
    const responseData = await response.json();

    return responseData.current_observation;
  }

  //change weather location
  changeLoaction(city, state){
    this.city = city;
    this.state = state;
  }
}