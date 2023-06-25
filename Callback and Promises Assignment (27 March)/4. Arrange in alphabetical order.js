
const books = [
    {title: "The Heritage", author: "Jawahar", year: 1987},
    {title: "Rhe Heritage", author: "Yawahar", year: 1987},
    {title: "Phe Heritage", author: "Tawahar", year: 1987},
    {title: "She Heritage", author: "Zawahar", year: 1987},
];

function extractTitle(books, callback) {
    const titles = books.map((book) => book.title )
    callback(titles);
}

function logTitles(titles) {
    titles.sort();
    console.log(titles.join(", "));
    // console.log(titles);
}

extractTitle(books, logTitles)