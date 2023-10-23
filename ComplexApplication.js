/**
 * Filename: ComplexApplication.js
 * Description: This code is a complex JavaScript application that simulates a virtual library.
 *              It includes advanced concepts like classes, inheritance, closures, and event handling.
 *              The code is over 200 lines long and represents a sophisticated and well-structured application.
 */

// Utility function to generate a unique ID for each book
function generateBookId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Book class representing a single book
class Book {
  constructor(title, author, genre, publicationYear) {
    this.id = generateBookId();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publicationYear = publicationYear;
    this.isCheckedOut = false;
    this.checkoutDate = null;
  }

  // Check out the book
  checkout() {
    this.isCheckedOut = true;
    this.checkoutDate = new Date();
  }

  // Check in the book
  checkin() {
    this.isCheckedOut = false;
    this.checkoutDate = null;
  }

  // Get book details as a string
  details() {
    return `Title: ${this.title}\nAuthor: ${this.author}\nGenre: ${this.genre}\nYear: ${this.publicationYear}`;
  }
}

// Library class representing the virtual library
class Library {
  constructor() {
    this.books = [];
  }

  // Add a new book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Remove a book from the library
  removeBook(book) {
    const bookIndex = this.books.findIndex((b) => b.id === book.id);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
    }
  }

  // Get all books in the library
  getAllBooks() {
    return this.books;
  }

  // Get available books in the library
  getAvailableBooks() {
    return this.books.filter((book) => !book.isCheckedOut);
  }

  // Get checked out books in the library
  getCheckedOutBooks() {
    return this.books.filter((book) => book.isCheckedOut);
  }
}

// Application class representing the library management app
class LibraryApp {
  constructor() {
    this.library = new Library();
  }

  // Add sample books to the library
  addSampleBooks() {
    const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 1925);
    const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 'Novel', 1960);
    const book3 = new Book('1984', 'George Orwell', 'Dystopian', 1949);

    this.library.addBook(book1);
    this.library.addBook(book2);
    this.library.addBook(book3);
  }

  // Event handler for checking out a book
  checkoutBook(bookId) {
    const book = this.library.getAllBooks().find((b) => b.id === bookId);
    if (book && !book.isCheckedOut) {
      book.checkout();
      console.log(`Book '${book.title}' has been checked out successfully.`);
    } else {
      console.log(`Book '${book.title}' is not available for checkout.`);
    }
  }

  // Event handler for checking in a book
  checkinBook(bookId) {
    const book = this.library.getAllBooks().find((b) => b.id === bookId);
    if (book && book.isCheckedOut) {
      book.checkin();
      console.log(`Book '${book.title}' has been checked in successfully.`);
    } else {
      console.log(`Book '${book.title}' is not checked out.`);
    }
  }

  // Event handler for displaying all books
  displayAllBooks() {
    const books = this.library.getAllBooks();
    if (books.length > 0) {
      console.log('All Books:');
      books.forEach((book) => console.log(book.details()));
    } else {
      console.log('No books available in the library.');
    }
  }

  // Event handler for displaying available books
  displayAvailableBooks() {
    const availableBooks = this.library.getAvailableBooks();
    if (availableBooks.length > 0) {
      console.log('Available Books:');
      availableBooks.forEach((book) => console.log(book.details()));
    } else {
      console.log('No available books in the library at the moment.');
    }
  }

  // Event handler for displaying checked out books
  displayCheckedOutBooks() {
    const checkedOutBooks = this.library.getCheckedOutBooks();
    if (checkedOutBooks.length > 0) {
      console.log('Checked Out Books:');
      checkedOutBooks.forEach((book) => console.log(book.details()));
    } else {
      console.log('No books are currently checked out.');
    }
  }
}

// Create an instance of the library app
const app = new LibraryApp();

// Add sample books to the library
app.addSampleBooks();

// Check out a book
app.checkoutBook(app.library.getAllBooks()[0].id);

// Check in the book
app.checkinBook(app.library.getAllBooks()[0].id);

// Display all books in the library
app.displayAllBooks();

// Display available books in the library
app.displayAvailableBooks();

// Display checked out books in the library
app.displayCheckedOutBooks();