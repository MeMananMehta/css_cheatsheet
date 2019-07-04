
callRainbow().catch(err => {
  console.log(err);
});

async function callRainbow() {
  const response = await fetch('rainbow.jpg');
  const blob = await response.blob();
  document.getElementById('rainbow').src = URL.createObjectURL(blob);
}



callText().catch(err => {
  console.log(err);
});

async function callText() {
  const response = await fetch('sample.txt');
  const output = await response.text();
  document.getElementById('text').innerText = output;
}


const filenames = [
  'images/daniele-levis-pelusi-311027-unsplash.jpg',
  'images/guy-stevens-746794-unsplash.jpg'
];

callRainbows(filenames).catch(err => {
  console.log(err);
})

async function callRainbows(filenames) {
  for (let filename of filenames) {
    const response = await fetch(filename);
    const blob = await response.blob();

    const image = document.createElement('img');
    image.src = URL.createObjectURL(blob);
    image.width = 200;
    document.body.append(image);
  }
}

// fetch('rainbow.jpg').then(response => {
//   console.log(response);
//   return response.blob();
// }).then(blob => {
//   console.log(blob);
//   document.getElementById('rainbow').src = URL.createObjectURL(blob);
// }).catch(err => {
//   console.log(err); 
// });