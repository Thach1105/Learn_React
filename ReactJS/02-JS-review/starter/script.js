const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
const book = getBook(1);
book;
const { title, author, publicationDate, genres, hasMovieAdaptation, pages } =
  book;

// console.log(genres);

// const [firstGenre, ...otherGenre] = genres;
// console.log(firstGenre);
// console.log(otherGenre);

// const [secondGenre] = otherGenre;
// console.log(secondGenre);

// const newGenres = ["epic fantasy", ...genres, "action"];
// newGenres;

// Spread Operator
const updateBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-19",
  // overwriting an existing property
  pages: 1250,
};
updateBook;

//Ternaies Instead: toán tử 3 ngôi
const pagesRange = pages > 1000 ? "over than 1000" : "less than 1000";
console.log(`the book has ${pagesRange} pages`);

// Arrown function
const getYear = (str) => str.split("-")[0];
console.log(publicationDate);

// Template Literals
const summary = `${title}, a 4{pages}-page long book, was written by ${author} in ${getYear(
  publicationDate
)}`;
console.log(summary);

// falsy: 0, null, '', undefined
const spanishTranslation =
  book.translations.spanish || "NOT TRANSLATED SPANISH";
console.log(spanishTranslation);

const vietnameseTranslation =
  book.translations.vietnamese || "NOT TRANSLATED VIETNAMESE";
console.log(vietnameseTranslation);

//Optinal Chaining
const book3 = getBook(3);
book3;
*/

// const getTotalReviews = (o) => {
//   const goodreads = o.reviews.goodreads?.reviewsCount ?? 0;
//   const librarything = o.reviews.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// };

// const x = [2, 4, 6, 8, 10].map((el) => el * 2);
// console.log(x);

// const books = getBooks();
// const titles = books.map((book) => book.title);
// console.log(titles);

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
//   reviewsCount: getTotalReviews(book),
// }));
// console.log(essentialData);

// const longBooksWithMovie = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// console.log(longBooksWithMovie);

// const adventureBook = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => ({
//     title: book.title,
//     author: book.author,
//   }));
// console.log(adventureBook);

// const totalPage = books.reduce((sum, book) => (sum += book.pages), 0);
// console.log(totalPage);

// const sortByPages = books.slice().sort((a, b) => b.pages - a.pages);
// console.log(sortByPages);

// const newBook = {
//   id: 6,
//   title: "new Book",
//   author: "new Author",
// };
// //addBookList
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// const booksAfterDelete = books.filter((book) => book.id !== 3);
// booksAfterDelete;

// const booksAfterUpdte = books.map((book) =>
//   book.id === 1 ? { ...book, pages: 1000 } : book
// );
// booksAfterUpdte;

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
console.log("thach");

const book1 = getBook(1);
const genre = book1.genres;

console.log(genre);