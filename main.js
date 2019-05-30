
//Book
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

  }
  switchRead(isRead) {
    if (isRead) this.isRead = false;
    else this.isRead = true;
  }
  addBook() {
    let library = document.getElementById('library');
    let div = document.createElement('div');
    div.className = "flex-1";
    div.innerHTML = `<div class="w-min-sm bg-white m-3 rounded shadow-lg overflow-hidden">
        <img src="https://picsum.photos/1000/600">
          <div id="title" class="font-bold text-xl m-1 py-2">'${this.title}'</div>
          <div id="author" class="font-bold text-xl m-1 py-2">'${this.author}'</div>
          <div id="pages" class="font-bold text-xl m-1 py-2">'${this.pages}'</div>
          <div class="flex justify-around mb-4">
            <input type="button" id="isread"  value="Action 2"
            class="button text-white bg-green-600 m-1 p-2 hover:bg-green-500"/>
            <input type="button" id="del" value="Del"
            class="button text-white bg-red-400 m-1 p-2 hover:bg-red-300"/>
          </div>
      </div>`
  }
}

addBook.onclick = function() {
  let input = document.querrySelectorAll('input');
  let title = input.querrySelector('input[name="title"]');
  let author = input.querrySelector('input[name="author"]');
  let pages = input.querrySelector('input[name="pages"]');
  let read = input.querrySelector('input[name="read"]');
  let notRead = input.querrySelector('input[name="notread"]');
  if (read) isRead = true;
  else isRead = false;
  let book = new Book(title, author, pages, isRead);

}
