function getAge(birthYear, deathYear) {
  if(deathYear === undefined) deathYear = new Date().getFullYear();
  return deathYear - birthYear;
}

const findTheOldest = function(objArr) {
  return objArr.reduce((oldestAge, currentPerson) => {
    let old = getAge(oldestAge.yearOfBirth, oldestAge.yearOfDeath);
    let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    
    if(currentAge > old) {
      return currentPerson
    } else {
      return oldestAge
    }
  })
};
// // Do not edit below this line
module.exports = findTheOldest;
