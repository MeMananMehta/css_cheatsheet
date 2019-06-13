class book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

}

class UI{

  addBookToList(newBook){
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
  
  showAlert(message, className){
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
  
  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
      this.showAlert('Book removed!', 'success');
    }
  }
  
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  
  }

}


//local storage class
class store{
  
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books=[];
    }else{
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks(){
    const books = store.getBooks();
    books.forEach(function(aBook){
      const ui = new UI();
      ui.addBookToList(aBook);
    });

  }

  static addBook(newBook){
    const books = store.getBooks();
    books.push(newBook)
    localStorage.setItem('books', JSON.stringify(books));
  }

  
  static removeBook(isbn){
    const books = store.getBooks();
    books.forEach(function(aBook, index){
      if(aBook.isbn === isbn){
        books.splice(index, 1)
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }

}

//DOM Load Event
document.addEventListener('DOMContentLoaded', store.displayBooks);


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
    store.addBook(newBook);
    ui.showAlert('Book added', 'success')
    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteBook(e.target);

  store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  
  e.preventDefault();
});