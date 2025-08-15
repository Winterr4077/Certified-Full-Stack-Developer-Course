let books = [
  {
    title: "This is the first book",
    authorName: "Winterr",
    releaseYear: 2025
  },
  {
    title: "This is the second book",
    authorName: "Not Winterr",
    releaseYear: 2026
  },
  {
    title: "This is a third book with the same year as the first book",
    authorName: "Winterr",
    releaseYear: 2025
  }
]

function sortByYear(book1, book2){
  if (book1.releaseYear < book2.releaseYear){
    return -1;
  } else if (book1.releaseYear > book2.releaseYear){
    return 1;
  } else {
    return 0;
  }
}

let filteredBooks = books.filter(function(book) {
  return book.releaseYear <= 2025;
});

filteredBooks.sort(sortByYear);
