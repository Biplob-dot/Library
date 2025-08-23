//dialog

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-new-btn");
const closeButton = document.querySelector(".close-btn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});



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