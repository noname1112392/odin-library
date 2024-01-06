// Create global variables
const globalContainer = document.getElementById('global-container');
const contentContainer = document.getElementById('content-container');
const mainContent = document.getElementById('main-content');
const inputDialog = document.getElementById('input-dialog');
const showDialog = document.getElementById('show-dialog');
const closeDialog = document.getElementById('close-dialog');
const dialogSubmit = document.getElementById('dialog-submit');
const inputBTitle = document.getElementById('input-b-title');
const inputBPage = document.getElementById('input-b-page');
const inputBAuthor = document.getElementById('input-b-author');

// Body append
document.body.appendChild(globalContainer);

// Array for storing book
const myLibrary = [];

//constructor of the book
function Book(title, page, author) {
    this.title = title;
    this.author = author;
    this.page = page;
    
}

//function to add book to library

//function of a book layout
function bookLayout(title, page, author) {
    // outside layer of the book
    const outsideContainer = document.createElement('div');
    outsideContainer.className = 'w-full h-64 border border-black bg-gray-700 p-5 flex flex-col justify-center';

    // top container
    const topContainer = document.createElement('div');
    topContainer.className = 'border border-black rounded-t-lg p-2 flex flex-col h-[60%] bg-white';
    
    //content container title
    const topContentContainerTitle = document.createElement('div');
    topContentContainerTitle.classList = 'flex space-x-2';
    topContainer.appendChild(topContentContainerTitle);

    //title content
    const pTitle = document.createElement('p');
    pTitle.innerHTML = 'Title:';
    const bTitle = document.createElement('p');
    bTitle.innerHTML = title;
    topContentContainerTitle.appendChild(pTitle);
    topContentContainerTitle.appendChild(bTitle);

    //content container page
    const topContentContainerPage = document.createElement('div');
    topContentContainerPage.classList = 'flex space-x-2';
    topContainer.appendChild(topContentContainerPage);

    //page content
    const pPage = document.createElement('p');
    pPage.innerHTML = 'Page:';
    const bPage = document.createElement('p');
    bPage.innerHTML = page;
    topContentContainerPage.appendChild(pPage);
    topContentContainerPage.appendChild(bPage);

    //content container author
    const topContentContainerAuthor = document.createElement('div');
    topContentContainerAuthor.classList = 'flex space-x-2';
    topContainer.appendChild(topContentContainerAuthor);

    //title content
    const pAuthor = document.createElement('p');
    pAuthor.innerHTML = 'Author:';
    const bAuthor = document.createElement('p');
    bAuthor.innerHTML = author;
    topContentContainerAuthor.appendChild(pAuthor);
    topContentContainerAuthor.appendChild(bAuthor);
    
    //border
    const border = document.createElement('div');
    border.classList = 'border border-black';

    // botttom container
    const bottomContainer = document.createElement('div');
    bottomContainer.classList = 'border border-black rounded-b-md p-2 flex justify-between h-[40%] items-center bg-white';

    //READ button
    const readButton = document.createElement('button');
    readButton.classList = 'border border-gray-200 bg-yellow-500 w-16 h-12 rounded-lg'
    readButton.textContent = 'READ';
    bottomContainer.appendChild(readButton);

    //DEL button
    const delButton = document.createElement('button');
    delButton.classList = 'border border-gray-200 bg-red-500 w-16 h-12 rounded-lg'
    delButton.textContent = 'DELETE';
    bottomContainer.appendChild(delButton);

    //Append the elements
    outsideContainer.appendChild(topContainer);
    outsideContainer.appendChild(border);
    outsideContainer.appendChild(bottomContainer);

    //Append from the outside
    mainContent.appendChild(outsideContainer);
    contentContainer.appendChild(mainContent);
    globalContainer.appendChild(contentContainer);
}

//function for show dialog
showDialog.addEventListener('click', () => {
    inputDialog.showModal();
})

//function to close dialog
closeDialog.addEventListener('click', () => {
    inputDialog.close();
})

//function for dialog submit button
dialogSubmit.addEventListener('click', (e) => {
    let titleValue = inputBTitle.value;
    let pageValue = inputBPage.value;
    let authorValue = inputBAuthor.value;

    e.preventDefault();

    if (!titleValue || !pageValue || !authorValue) {
        let newPlaceHolderTitle = "-----------Requirement!-----------";
        let newPlaceHolderPage = "-----------Requirement!-----------";
        let newPlaceHolderAuthor = "-----------Requirement!-----------";
        inputBTitle.placeholder = newPlaceHolderTitle;
        inputBPage.placeholder = newPlaceHolderPage;
        inputBAuthor.placeholder = newPlaceHolderAuthor;
    } else {
        addBook(titleValue, pageValue, authorValue);
        inputDialog.close();
    }
})

//function to add book to array
function addBook(title, page, author) {
    const newBook = new Book(title, page, author);
    myLibrary.push(newBook); 
    displayBook();
}

//function to display book
function displayBook() {
    myLibrary.forEach((book) => {
        bookLayout(book.title, book.page, book.author);
    })
}