const getTheTitles = function(bookArr) {
  let bookTitles = []
  for(let i = 0; i < bookArr.length; i++) {
    bookTitles.push(bookArr[i]['title'])
  }
  return bookTitles
};

console.log(getTheTitles([
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]))

// Do not edit below this line
module.exports = getTheTitles;
