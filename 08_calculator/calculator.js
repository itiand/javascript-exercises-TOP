const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let acc = 0
	for(let i = 0; i < arr.length; i++) {
    acc += arr[i];
  }
  return acc;
};

const multiply = function(arr) {
  let prod;
  for(let i = 0; i < arr.length; i++) {
    if(i === 0) {
      prod = arr[i]
    } else {
      prod *= arr[i]
    }
  }
  return prod;
};


const power = function(a,b) {
  let output
	for(let i = 0; i < b; i++) {
    if(i === 0) {
      output = a;
    } else {
      output *= a
    }
  }
  return output
};


const factorial = function(num) {
  if(num === 0) {
    return 1;
  }

  let result = num;
  for(let i = 1; i < num; i++) {
    result *= (num-i)
  }
	return result;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
