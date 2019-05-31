
const library = document.getElementById('library');
//Book
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

  }
}

function toogleRead(book) {
    if (book.isRead) { book.isRead = false; }
    else { book.isRead = true; }
  }

function addBook(books) {
  let title = document.querySelector('input[name="title"]').value;
  let author = document.querySelector('input[name="author"]').value;
  let pages = document.querySelector('input[name="pages"]').value;
  let readRadio = document.querySelectorAll('input[name="isRead"]');
  let isRead = false;

  readRadio.forEach(function(radio) {if (radio.checked) {isRead = radio.value}});

  let newBook = new Book(title, author, pages, isRead);

  books.push(newBook);

}

function creatElem(book) {
  let div = document.createElement('div');
  let readStatus = (book.isRead) ? "Read" : "Not read";
  div.className = "flex-1";
  div.innerHTML = `<div class="w-min-sm bg-white m-3 rounded shadow-lg overflow-hidden">
        <img src="https://picsum.photos/1000/600">
        <div id="title" class="font-bold text-xl m-1 py-2">${book.title}</div>
        <div id="author" class="font-bold text-xl m-1 py-2">${book.author}</div>
        <div id="pages" class="font-bold text-xl m-1 py-2">${book.pages}</div>
        <div class="flex justify-around mb-4">
          <input type="button" name="read" value="${readStatus}"
          class="button text-white bg-green-600 m-1 p-2 hover:bg-green-500"/>
          <input type="button" name="del" value="Del"
          class="button text-white bg-red-400 m-1 p-2 hover:bg-red-300"/>
        </div>
    </div>`;
    return div;
}

function addBookToLibrary(book) {
    let div = creatElem(book);
    library.appendChild(div);
}

function delBook(target, book) {
  library.removeChild(target);
  books.splice(book, 1);
}

function replaceBook(book, oldchild) {
    let div = creatElem(book);
    library.replaceChild(div, oldchild)
}

const books = [];
const addBookBtn = document.getElementById('addBookBtn');
addBookBtn.onclick = () => {
    addBook(books);
    addBookToLibrary(books[books.length - 1]);

};

library.onclick = function(event) {
  let target = event.target;
  let targetbook = target.parentElement.parentElement;
  let childElem = targetbook.children;
  let book = books.find(item => (item.title == childElem[1].textContent) && item.author == childElem[2].textContent)
  if (target.name == "del") delBook(targetbook.parentElement, book);
  else if (target.name == "read") {
    toogleRead(book);
    replaceBook(book, targetbook.parentElement);
  }

}
