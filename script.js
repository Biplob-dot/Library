// const myLibrary = [];

// function Book(author, title, pages, readStatus) {
//     if (!new.target) {
//         throw Error("You must use the 'new' operator to call the constructor");
//     }
//     let uniqueID = self.crypto.randomUUID();
//     this.id = uniqueID;
//     this.author = author;
//     this.title = title;
//     this.pages = pages;
//     this.readStatus = readStatus;
//     this.info = function(){
//         console.log(`${this.title} by ${this.author} with ${this.pages},${this.readStatus}`);
//     }
// }

// const theHobbit = new Book('J.R.R. Tolkien','The Hobbit','295 pages', 'not read yet');
// myLibrary.push(theHobbit);

// const perilAtTheEndHouse = new Book('Agatha Christie','Peril at the end House','300 pages', 'read');
// myLibrary.push(perilAtTheEndHouse);

// const aBoyInTheStrippedPajamas = new Book('John Boyne','A boy in the Stripped Pajamas','224 pages', 'read');
// myLibrary.push(aBoyInTheStrippedPajamas);

// myLibrary.forEach(function(element, index){
//     let book = document.createElement("li");
//     book.innerText = element.title;
//     libraryList.appendChild(book);
// })

const libraryContainer = document.querySelector(".library-container"); 
let imgAddress = "Images/night.jpg";

class Book{
    constructor(title,author,rating) {
        let uniqueID = self.crypto.randomUUID();
        this.id = uniqueID;
        this.title = title;
        this.author = author;
        this.rating = rating;
    }
}

const night = new Book("Night", "Ellie Weisel", "4.3");

const bookCard = document.createElement("div");
bookCard.classList.add("book-card");
libraryContainer.appendChild(bookCard);

const bookImage = document.createElement("div");
bookImage.classList.add("book-image");
bookCard.appendChild(bookImage);

const libraryImg = document.createElement("img");
libraryImg.classList.add("library-img");
libraryImg.setAttribute("src", imgAddress);
bookImage.appendChild(libraryImg);

const bookCardInfo = document.createElement("div");
bookCardInfo.classList.add("book-card-info");
bookCard.appendChild(bookCardInfo);

const bookTitle = document.createElement("div");
bookTitle.classList.add("book-title");
bookTitle.innerText = night.title;
bookCardInfo.appendChild(bookTitle);

const bookAuthor = document.createElement("div");
bookAuthor.classList.add("book-author");
bookAuthor.innerText = night.author;
bookCardInfo.appendChild(bookAuthor);

const bookRating = document.createElement("div");
bookRating.classList.add("book-rating");
bookRating.innerText = night.rating + "  ⭐";
bookCardInfo.appendChild(bookRating);




function addBookToLibrary() {

}