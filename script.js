const container = document.querySelector('#mainContainer')
const squareContent = document.getElementsByClassName('.square')
const bookName = document.getElementById('bookName')
bookName.addEventListener('input', updateNameValue)
const bookAuthor = document.getElementById('bookAuthor')
bookAuthor.addEventListener('input',updateAuthorValue)
let nameValue = document.getElementById('bookName').value
let authorValue = document.getElementById('bookAuthor').value
const pagesValue = document.getElementById('bookPages').value
let myLibary = [];
// updates form values
function updateNameValue(e) {
    nameValue = e.target.value;
}
function updateAuthorValue(e) {
    authorValue = e.target.value
}

// operator
function Book(name,author,pages,read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}
// this need to be updated properly button dom needs to be added
function newBook () {
    
    const square = document.createElement('div')
    let book = new Book
     book.name = nameValue
     book.author = authorValue
     book.pages = pagesValue
     myLibary.push(book)
     square.classList.add('square');
     container.appendChild(square)
     square.innerHTML = `book name: ${book.name} book Author ${book.author}`
}


function displayBooks () {
    for (let i=0; i<myLibary.length; i++) {
        console.log(myLibary[i]);
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
