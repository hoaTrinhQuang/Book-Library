//Book
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  toogleRead() {
    this.isRead ? this.isRead = false : this.isRead = true
  }
}

function addBook(books) {
  let title = document.querySelector('input[name="title"]').value;
  let author = document.querySelector('input[name="author"]').value;
  let pages = document.querySelector('input[name="pages"]').value;
  let readRadio = document.getElementByName('read');
  let isRead = false;

  readRadio.forEach(function(radio) {if (radio.checked) {isRead = radio.value}});

  let newBook = new Book(title, author, pages, isRead);

  books.push(newBook);
}

function render(books) {
    let library = document.getElementById('library');

    books.forEach(function(book) {
    let div = document.createElement('div');
    let readStatus = (book.isRead) ? 'Read' : 'Not read';
    div.className = "flex-1";
    div.innerHTML = `<div class="w-min-sm bg-white m-3 rounded shadow-lg overflow-hidden">
        <img src="https://picsum.photos/1000/600">
          <div id="title" class="font-bold text-xl m-1 py-2">${book.title}</div>
          <div id="author" class="font-bold text-xl m-1 py-2">${book.author}</div>
          <div id="pages" class="font-bold text-xl m-1 py-2">${book.pages}</div>
          <div class="flex justify-around mb-4">
            <input type="button" id="isread"  value="${readStatus}"
            class="button text-white bg-green-600 m-1 p-2 hover:bg-green-500"/>
            <input type="button" id="del" value="Del"
            class="button text-white bg-red-400 m-1 p-2 hover:bg-red-300"/>
          </div>
      </div>`;

    library.appendChild(div);
  });
}


addBookBtn.addEventListener("click", function() {
    addBook(books);
    render(books);
});

let books = [];
let book1 = new Book('a', 'b', 2, true);

books=[book1];

render(books);
