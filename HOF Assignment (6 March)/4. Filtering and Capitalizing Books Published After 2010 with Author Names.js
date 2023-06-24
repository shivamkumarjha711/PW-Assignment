const Books = [
    {author: "herry", publication: "hero", year: 2018},
    {author: "serry", publication: "kia", year: 2007},
    {author: "derry", publication: "oddy", year: 2015},
    {author: "oerry", publication: "honda", year: 2005},
    {author: "kerry", publication: "sonate", year: 2012},
    {author: "lerry", publication: "nexon", year: 2001},
    {author: "werry", publication: "tata", year: 2022}
  ]
  

  
  const filterBook = Books.filter((book) => book.year >= 2010).map(book => {
    const upperauthor = book.author.toUpperCase()
    return {...book, author:upperauthor}
  })
  console.log(filterBook);


  // DONE




  