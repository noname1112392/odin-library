const globalContainer = document.getElementById('global-container');
const contentContainer = document.getElementById('content-container');
const mainContent = document.getElementById('main-content');
document.body.appendChild(globalContainer);
// Array for storing book
const myLibrary = [];

//constructor of the book
function Book(title, author, page) {

}

//function to add book to library

//function of a book layout
function bookLayout() {
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
    bTitle.innerHTML = 'THN';
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
    bPage.innerHTML = '355';
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
    bAuthor.innerHTML = 'CP';
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
//Example
bookLayout();
bookLayout();
bookLayout();


