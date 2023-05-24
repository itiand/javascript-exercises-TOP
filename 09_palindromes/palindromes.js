
const palindromes = function (str) {
  let convertStr = str.toLowerCase().replace(/[^a-z]/g, "");
  let convertStr1 = convertStr.split('').reverse().join('');
  return convertStr1 === convertStr
};

console.log(palindromes('A car, a man, a maraca'));

// Do not edit below this line
module.exports = palindromes;
