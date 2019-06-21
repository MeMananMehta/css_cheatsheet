document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function(){
    if(this.status === 200){
      document.getElementById('output').textContent = this.responseText;
    }

  }

  xhr.onerror = function(){
    console.log('Request error...');
  }

  xhr.send();

}
