// Methods for Defining JavaScript Objects
//      Using an Object Literal
//      Using the new Keyword
//      Using an Object Constructor
//      Using Object.assign()
//      Using Object.create()
//      Using Object.fromEnties()

//An object literal is also callled an object initializer.


//--------------------------------------------- Activity 1: Object Creation and Access ------------------------------------------------
//Task 1: Create an object representing a book with properties like title, author and year, and log the object to the console.

// Create an Object
const Book = new Object(); // Better way than const book_details = {}

//Adding Properties
Book.title = 'Fire and Blood';
Book.author = 'George R.R. Martin';
Book.year = 2015;

console.log(Book);

//Task 2: Access and log the title and author properties of the book object.

console.log('Title = '+ Book['title'] + '\n' + 'Author = ' + Book['author']);


//--------------------------------------------- Activity 2: Object Methods ------------------------------------------------
//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

Book.details = function (title, author) {
    return 'Title = ' + Book.title + '\nAuthor = ' + Book.author;
}
console.log(Book.details());

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

Book.upd_details = function (year) {
    this.year = year;
}
Book.upd_details(2016);
console.log(Book);

//--------------------------------------------- Activity 3: Nested Objects -----------------------------------------------
//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.




//Task 6: Access and log the name of the library and the titles of all the books in the library.

//--------------------------------------------- Activity 4: The 'this' Keyword ------------------------------------------------
//Task 7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year, and log the result of calling this method.

// --------------------------------------------- Activity 5: Object Iteration -----------------------------------------------
// Task 8: Use a 'for...in' loop to iterate over the properties of the book object and log each property and its value.
// Task 9: Use 'Object.keys' and 'Object.values' methods to log all the keys and values of the book object.