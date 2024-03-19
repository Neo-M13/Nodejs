const fs = require('fs');

// const book = {

//     title:"Harry Potter",
//     author:"J.K Rowling",
// }

// const stringBook = JSON.stringify(book)

// fs.writeFileSync('1-book.json',stringBook)

const dataBuffer = fs.readFileSync('car.json')

// console.log(dataBuffer.toString());

const JSONdata = JSON.parse(dataBuffer.toString());

console.log(JSONdata);

JSONdata.year = "2013"

console.log(JSONdata);

const stringCar = JSON.stringify(JSONdata)

console.log(stringCar);

fs.writeFileSync('car.json' ,stringCar)

// console.log(book) 
// console.log(stringBook.title)

// const JSONbook = JSON.parse(stringBook);

// console.log(JSONbook);