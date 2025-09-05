//dialog

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-new-btn");
const closeButton = document.querySelector("#close-btn");
const previewContainer = document.querySelector("#previewContainer");

showButton.addEventListener("click", () => {
  dialog.showModal();
  let fileInput = document.querySelector("#image");
  
  let imageFile = null;

    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      if (file) {
        imageFile = file; // store in variable

        // Show preview inside the div using FileReader
        const reader = new FileReader();
        reader.onload = (e) => {
          previewContainer.innerText = "";
          const imagePreview = document.createElement("img");
          imagePreview.classList.add("image-preview");
          previewContainer.appendChild(imagePreview);
          
          imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file); // convert file → base64 URL
      } else {
        imageFile = null;
        previewContainer.innerText = "No image selected";
      }
    });
});

closeButton.addEventListener("click", () => {
  closeForm();
});

const closeForm = () => {
  if(previewContainer.lastChild != null){
    const imagePreviewer = previewContainer.lastChild;
    previewContainer.removeChild(imagePreviewer);
  }
  dialog.close();
}


const removeBtn = [];
const myLibrary = [];
const libraryContainer = document.querySelector(".library-container"); 

class Book{
    constructor(title,author,rating,image) {
        let uniqueID = self.crypto.randomUUID();
        this.id = uniqueID;
        this.title = title;
        this.author = author;
        this.rating = rating + "  ⭐";
        this.image = image;
    }
}


const addBookBtn = document.querySelector(".submit-btn-form");
const formSubmit = document.querySelector("form");

formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let rating = document.querySelector("#rating").value;
    let fileInput = document.querySelector("#image");


    const file = fileInput.files[0];
    const reader = new FileReader();
    if (file) {
        reader.onload = (e) => {
          const image = e.target.result;
          let book = new Book(title, author, rating, image);
           myLibrary.push(book);
           addBookToLibrary();
        };
          reader.readAsDataURL(file); // convert file → base64 URL
        } else {
          image = null;
        }

    event.target.reset();
    closeForm();
})


function addBookToLibrary() {

      libraryContainer.innerHTML = "";

      myLibrary.forEach((book,index) => {
      
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
      libraryContainer.appendChild(bookCard);

      const bookImage = document.createElement("div");
      bookImage.classList.add("book-image");
      bookCard.appendChild(bookImage);

      const libraryImg = document.createElement("img");
      libraryImg.classList.add("library-img");
      libraryImg.setAttribute("src", book.image);
      bookImage.appendChild(libraryImg);

      const bookCardInfo = document.createElement("div");
      bookCardInfo.classList.add("book-card-info");
      bookCard.appendChild(bookCardInfo);

      const bookTitle = document.createElement("div");
      bookTitle.classList.add("book-title");
      bookTitle.innerText = book.title;
      bookCardInfo.appendChild(bookTitle);

      const bookAuthor = document.createElement("div");
      bookAuthor.classList.add("book-author");
      bookAuthor.innerText = book.author;
      bookCardInfo.appendChild(bookAuthor);

      const bookBottom = document.createElement("div");
      bookBottom.classList.add("book-bottom");
      bookCardInfo.appendChild(bookBottom);

      const bookRating = document.createElement("div");
      bookRating.classList.add("book-rating");
      bookRating.innerText = book.rating;
      bookBottom.appendChild(bookRating);

      const svgNS = "http://www.w3.org/2000/svg";

      const removeSVG = document.createElementNS(svgNS, "svg");
      removeSVG.setAttribute("id", "remove-book-btn");
      removeSVG.setAttribute("viewBox", "0 0 24 24");

      const path = document.createElementNS(svgNS, "path");
      path.setAttribute(
        "d",
        "M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"
      );

      removeSVG.appendChild(path);
      bookBottom.appendChild(removeSVG);
      removeBtn.push(removeSVG);

      removeSVG.addEventListener("click", () => {
        myLibrary.splice(index,1);
        addBookToLibrary();
      })
    })
}


let aGOT = new Book('A Game of Thrones','George R.R. Martins', '5', 'Images/aGOT.jpg');
myLibrary.push(aGOT);

let perilAtTheEndHouse = new Book('Peril At The End House','Agatha Christie', '4.8', 'Images/perilattheendhouse.jpg');
myLibrary.push(perilAtTheEndHouse);

let night = new Book('Night','Ellie Wiesel', '4.6', 'Images/night.jpg');
myLibrary.push(night);

let theHobbit = new Book('The Hobbit','J.R.R. Tolkien', '4.5', 'Images/thehobbit.jpg');
myLibrary.push(theHobbit);

let theBoy = new Book('The Boy in the Stripped Pajamas','John Boyne', '4.2', 'Images/theboy.jpg');
myLibrary.push(theBoy);

let aDWD = new Book('A Dance with Dragons','George R.R. Martins', '4.6', 'Images/aDWD.jpg');
myLibrary.push(aDWD);

addBookToLibrary();