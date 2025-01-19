const myLibrary = [
    //placeholder books
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: 'yes'
    },
    {
        title: 'The Art of War',
        author: 'Sun Tzu',
        pages: 38,
        read: 'no'
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pages: 180,
        read: 'yes'
    },
];

displayBooks();
function Book(title,author,pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
}


function displayBooks() {
    const bookList = document.getElementById('book-list');
    if (bookList.innerHTML !== '') {
        bookList.innerHTML = '';
    }

    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <p class="elements" id="title1"><b> ${book.title} </b></p>
            <p class="elements"><b>Author:</b> ${book.author}</p>
            <p class="elements"><b>Pages:</b> ${book.pages}</p>
            `;

        const readButton = document.createElement('button');    
        readButton.textContent = book.read=='yes' ? 'Read' : 'Not Read';
        readButton.classList.add('read-button');
        readButton.addEventListener('click', ()=> {
            if (book.read=='yes') {
                book.read = 'no';
                readButton.textContent = 'Not Read';
                readButton.classList.remove('read');
                readButton.classList.add('not-read');
            }
            else{
                book.read = 'yes';
                readButton.textContent = 'Read';
                readButton.classList.remove('not-read');
                readButton.classList.add('read');
            }
        });

        if (book.read=='yes') {
            readButton.classList.add('read');
        }
        else{
            readButton.classList.add('not-read');
        }

        bookCard.appendChild(readButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            displayBooks();
        });

        bookCard.appendChild(deleteButton);
        bookList.appendChild(bookCard);
    });
}



// handle form submission

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {    
    
    // check outputs


    //handle rerender
    addBookToLibrary();
    event.preventDefault();
    displayBooks();
    
    //clear input fields
    form.reset();
    
    dialog.close();

});

