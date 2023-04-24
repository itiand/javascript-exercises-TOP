const convertToCelsius = function(fahrenheit) {
  // Celsius = (fahrenheit - 32) * 5/9
    //convert to one decical, use Math.round() --> RoundedCelsius = Math.round(Celsius * 10)/10
  let celsius = (fahrenheit - 32) * 5/9;
  return Math.round(celsius * 10)/10;
};

const convertToFahrenheit = function(celsius) {
  // Fahrenheit =  celsius * 9/5 + 32
  const fahrenheit = celsius * 9/5 + 32
  return Math.round(fahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
