const divBook = document.querySelector(".book");
const btnNewBook = document.querySelector(".newBook");
const newForm = document.querySelector(".bookForm");
const hidden = document.querySelector(".hidden");
const btnSubmit = document.querySelector("#submit");
const newBookCard = document.querySelector(".bookCard");
const errorMessage = document.getElementById("errorMessage");
let myLibrary = [];

btnNewBook.addEventListener("click", function () {
  hidden.classList.remove("hidden");
});

class book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleRead() {
    this.read = !this.read;
  }
}

function toggleRead() {
  myLibrary[index].toggleRead();
  displayBook();
}

function addBooktoLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBook();
}

function displayBook() {
  let libraryBook = document.querySelector(".bookCard");
  libraryBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("bookEntry");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `<div class = "card-header">
    <h3 class=title>${book.title}</h3>
    <h3 class=author>${book.author}</h3> 
    <h3 class= pages>${book.pages} pages</h3>
    <h3 class=read>${book.read ? "Read" : "Not read yet"}</h3> 
    <button id='remove-btn' onclick='removeBook(${i})'>Remove Book</button>
   
    </div>
    `;
    libraryBook.appendChild(bookEl);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBook();
}

newForm.addEventListener("submit", function (e) {
  e.preventDefault();

  addBooktoLibrary();
});

// console.log(book);

// myLibrary.push(new book("Atomic Habits", "James Clear", "233", "read"));
// myLibrary.push(new book("The Hobbit", "JRR Tolkein", "295", "read"));

// console.log(myLibrary);

//console.log(addBooktoLibrary);

// function student() {}

// student.prototype.sayName = function () {
//   console.log(this.name);
// };
// function eightgrader(name) {
//   this.name = name;
//   this.grade = 8;
// }

// eightgrader.prototype = Object.create(student.prototype);

// const ali = new student("ali");
// ali.sayName;
// ali.grade;
// console.log(ali);

// const carl = new eightgrader("carl");
// carl.sayName;
// carl.grade;
// console.log(carl);
