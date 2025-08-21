// author, title, number of pages, whether it’s been read and anything else you might want
// const libraryList = document.querySelector("#library");

const myLibrary = [];

function Book(author, title, pages, readStatus) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    let uniqueID = self.crypto.randomUUID();
    this.id = uniqueID;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function(){
        console.log(`${this.title} by ${this.author} with ${this.pages},${this.readStatus}`);
    }
}

const theHobbit = new Book('J.R.R. Tolkien','The Hobbit','295 pages', 'not read yet');
myLibrary.push(theHobbit);

const perilAtTheEndHouse = new Book('Agatha Christie','Peril at the end House','300 pages', 'read');
myLibrary.push(perilAtTheEndHouse);

const aBoyInTheStrippedPajamas = new Book('John Boyne','A boy in the Stripped Pajamas','224 pages', 'read');
myLibrary.push(aBoyInTheStrippedPajamas);

myLibrary.forEach(function(element, index){
    let book = document.createElement("li");
    book.innerText = element.title;
    libraryList.appendChild(book);
})

function addBookToLibrary() {

}