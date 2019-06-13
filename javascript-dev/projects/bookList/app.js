//book constructor
function book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}



//ui constructor
function UI(){ }

UI.prototype.addBookToList = function(newBook){
  const list = document.getElementById('book-list');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>${newBook.isbn}</td>
    <td> <a href="#" class="delete">X</a> </td>
  `;

  list.appendChild(row);

}

UI.prototype.showAlert = function(message, className){
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);

  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 1000);

}

UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';

}


//event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  
  //get form values
  const title = document.getElementById('title').value;
        author = document.getElementById('author').value;
        isbn = document.getElementById('isbn').value;

  const newBook = new book(title, author, isbn);
  const ui = new UI();
  if(title === '' || author === '' || isbn === ''){
    
    //error
    ui.showAlert('Please fill in all fields', 'error');
  
  }else{
    
    ui.addBookToList(newBook);
    ui.showAlert('Book added', 'success')
    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('Book removed!', 'success');

  e.preventDefault();
});


