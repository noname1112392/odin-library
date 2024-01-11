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
// document.body.appendChild(globalContainer);

// Array for storing book
const myLibrary = [];

//constructor of the book
function Book(title, page, author) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.isRead = false;
}

//function of a book layout
function bookLayout(title, page, author, bookId, read) {
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
    //Attempt to create an if statement to change the color of the button when
    //the read checkbox is selected
    const readButton = document.createElement('button');
    readButton.textContent = 'READ';
    bottomContainer.appendChild(readButton);
    //a toggle on readbutton

    readButton.addEventListener('click', () => {
        myLibrary[bookId].isRead = !myLibrary[bookId].isRead;
        readButtonOnOff(myLibrary[bookId].isRead);

    })

    function readButtonOnOff(read) {
        if (read) {
            readButton.classList = 'border border-gray-200 bg-yellow-500 w-16 h-12 rounded-lg opacity-100';
        } else {
            readButton.classList = 'border border-gray-200 bg-yellow-500 w-16 h-12 rounded-lg opacity-20';
        }
    };

    readButtonOnOff(read);

    //DEL button
    const delButton = document.createElement('button');
    delButton.classList = 'border border-gray-200 bg-red-500 w-16 h-12 rounded-lg'
    delButton.textContent = 'DELETE';
    bottomContainer.appendChild(delButton);

    //function to declare the order of the book
    delButton.addEventListener("click", () => {
        if (bookId >= 0 && bookId < myLibrary.length) {
            myLibrary.splice(bookId, 1);
            updateUI();
        }
    });

    function updateUI() {
        mainContent.innerHTML = '';
        myLibrary.forEach((book, index) => {
            bookLayout(book.title, book.page, book.author, index, book.isRead);
        });
    }

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
closeDialog.addEventListener('click', (e) => {
    e.preventDefault();
    inputDialog.close();
})

//function for dialog submit button
dialogSubmit.addEventListener('click', (e) => {
    let titleValue = inputBTitle.value;
    let pageValue = inputBPage.value;
    let authorValue = inputBAuthor.value;
    let checkBox;
    const isReadCheckBox = document.getElementById('is-read-checkbox');
    e.preventDefault();
    checkBox = isReadCheckBox.checked;

    if (!titleValue || !pageValue || !authorValue) {
        let newPlaceHolderTitle = "-----------Requirement!-----------";
        let newPlaceHolderPage = "-----------Requirement!-----------";
        let newPlaceHolderAuthor = "-----------Requirement!-----------";
        inputBTitle.placeholder = newPlaceHolderTitle;
        inputBPage.placeholder = newPlaceHolderPage;
        inputBAuthor.placeholder = newPlaceHolderAuthor;
    } else {
        addBook(titleValue, pageValue, authorValue, checkBox);
        inputDialog.close();
    }
})

//function to add book to array
function addBook(title, page, author, checkbox) {
    const newBook = new Book(title, page, author);
    newBook.isRead = checkbox;
    myLibrary.push(newBook);
    displayBook();
    console.log(newBook.isRead);
}

//function to display book
function displayBook() {
    mainContent.innerHTML = '';
    myLibrary.forEach((book, index) => {
        bookLayout(book.title, book.page, book.author, index, book.isRead);
    });
}