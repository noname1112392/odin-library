// Create global variables
// So every function can have access to these variables
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


// Array for storing book
// This will store the book object
const myLibrary = [];

//constructor of the book
function Book(title, page, author) {
    this.title = title;
    this.author = author;
    this.page = page;
    // This line here is for storing the true/false
    // if the user has read the book or not
    this.isRead = false;
}

//function of a book layout
//this is a function to display the book on the website when user fill out information of the book
// the information will be filled out from the dialog
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
    const readButton = document.createElement('button');
    readButton.textContent = 'READ';
    bottomContainer.appendChild(readButton);

    //a toggle on readbutton
    //When the user clicks on the readbutton from the book layout
    //it will change the the opacity of the book as well as updating the value true/false
    readButton.addEventListener('click', () => {
        //updating the value true false
        myLibrary[bookId].isRead = !myLibrary[bookId].isRead;
        //call the readButtonOnOff function and give the result from the above variable
        readButtonOnOff(myLibrary[bookId].isRead);
    })

    //this is the function
    //it will be called whenever the user clicks the read button
    function readButtonOnOff(read) {
        //if true the opacity will be %100
        //else (false) the opacity will be only %20
        if (read) {
            readButton.classList = 'border border-gray-200 bg-yellow-500 w-16 h-12 rounded-lg opacity-100';
        } else {
            readButton.classList = 'border border-gray-200 bg-yellow-500 w-16 h-12 rounded-lg opacity-20';
        }
    };

    //this function update the opacity based on the user 
    //first check/uncheck the checkbox from dialog form
    readButtonOnOff(read);

    //DEL button
    const delButton = document.createElement('button');
    delButton.classList = 'border border-gray-200 bg-red-500 w-16 h-12 rounded-lg'
    delButton.textContent = 'DELETE';
    bottomContainer.appendChild(delButton);

    //delete button function
    //it will delete the book that the user has selected
    delButton.addEventListener("click", () => {
        //check to see if the book is in the myLib array
        if (bookId >= 0 && bookId < myLibrary.length) {
            //if true then the book that got selected will be deleted
            myLibrary.splice(bookId, 1);
            //updateUI function will be called
            //this function will update the new myLib array and display it on the website
            updateUI();
        }
    });

    //UpdateUI function will update the book onto the website
    function updateUI() {
        //Empty the page
        mainContent.innerHTML = '';
        //this line right here is to go inside the array
        //if there is element(book) then it will call the bookLayout function to display book
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

//Add button function to show dialog
showDialog.addEventListener('click', () => {
    inputDialog.showModal();
})

//Close button function to close dialog
closeDialog.addEventListener('click', (e) => {
    //this line right here is to prevent submiting the form
    //it will make the page empty if this line isnt existed
    e.preventDefault();
    inputDialog.close();
})

//Submit button function for the dialog
dialogSubmit.addEventListener('click', (e) => {
    //get user input and store it into variables
    let titleValue = inputBTitle.value;
    let pageValue = inputBPage.value;
    let authorValue = inputBAuthor.value;
    //read or not read checkbox (true/false)
    let checkBox;
    const isReadCheckBox = document.getElementById('is-read-checkbox');
    checkBox = isReadCheckBox.checked;
    //same thing for the submit button
    //we need this line of code to not submit the form
    e.preventDefault();
    //if this title/page/author input box empty then the placeholder will generate
    // a line  "-----------Requirement!-----------" for the user to input in the value
    if (!titleValue || !pageValue || !authorValue) {
        let newPlaceHolderTitle = "-----------Requirement!-----------";
        let newPlaceHolderPage = "-----------Requirement!-----------";
        let newPlaceHolderAuthor = "-----------Requirement!-----------";
        inputBTitle.placeholder = newPlaceHolderTitle;
        inputBPage.placeholder = newPlaceHolderPage;
        inputBAuthor.placeholder = newPlaceHolderAuthor;
    } else {
        //call the addBook function and pass the value into that function
        addBook(titleValue, pageValue, authorValue, checkBox);
        //to close ethe dialog when user press submit
        inputDialog.close();
    }
})

//function to add book to array
//generate a book with the index as bookId
function addBook(title, page, author, checkbox) {
    //store the user input value/ generate a whole book with the value
    //then will be store in the myLib array
    const newBook = new Book(title, page, author);
    newBook.isRead = checkbox;
    myLibrary.push(newBook);
    //call displayBook function to display the book onto the website
    displayBook();
}

//function to display book
function displayBook() {
    mainContent.innerHTML = '';
    myLibrary.forEach((book, index) => {
        bookLayout(book.title, book.page, book.author, index, book.isRead);
    });
}