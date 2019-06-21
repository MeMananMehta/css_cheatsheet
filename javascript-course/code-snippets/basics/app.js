//alert('hello world')

const today = new Date();
//console.log(today)

const address = {
  name:'hello',
  pocket:'c2'
}

//console.log(address)


//old way
const name = 'manan';
const age = 42;
const job = 'we developer';
const city = 'delhi';


let html;


html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';


//template string(es6)

function hello(){
  return 'hello';
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;

const numbers1 = [23,45,11,1,345,65];
const numbers2 = [12,67,54,55,99];

let val;

// val = numbers1.sort(function(a,b){
//   return b-a;
// });

console.log(val)

function under50(num){
  return num<50;
}

let a = under50(4);
console.log(typeof a);

val = numbers1.find(under50)

console.log(val)

let id;

if(id){
  console.log('ok');
}else{
  console.log('not ok');
}
