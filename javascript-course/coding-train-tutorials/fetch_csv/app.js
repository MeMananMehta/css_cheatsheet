window.addEventListener("load", setupChart);

async function setupChart() {
  var ctx = document.getElementById('myChart').getContext('2d');

  const toPlot = await getData();
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: toPlot.years,
      datasets: [{
        label: 'Temperatures in °C',
        data: toPlot.temps,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }, {
        label: 'Northern Hemisphere',
        data: toPlot.northTemps,
        fill: false,
        borderColor: 'rgba(132, 99, 255, 1)',
        borderWidth: 1
      }, {
        label: 'Southern Hemisphere',
        data: toPlot.southTemps,
        fill: false,
        borderColor: 'rgba(52, 12, 176, 1)',
        borderWidth: 1
      }]
    },
    options: {}
  });
}

async function getData() {

  const respnose = await fetch("ZonAnn.Ts+dSST.csv");
  const data = await respnose.text();
  console.log(data);
  const table = data.split('\n').slice(1);

  const years = [];
  const temps = [];
  const northTemps = [];
  const southTemps = [];

  table.forEach(row => {
    const columns = row.split(',');
    const year = columns[0];
    const temp = columns[1];
    const northTemp = columns[2];
    const southTemp = columns[3];
    years.push(year);
    temps.push(14 + parseFloat(temp));
    northTemps.push(14 + parseFloat(northTemp));
    southTemps.push(14 + parseFloat(southTemp));
  });

  return {
    years, temps, northTemps, southTemps
  };


}

