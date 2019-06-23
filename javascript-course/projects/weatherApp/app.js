const weather = new Weather("Boston", "MA");
const ui = new UIEvent();

//get weather when DOM loads
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint();
    })
    .catch(err => console.log(err));
}
