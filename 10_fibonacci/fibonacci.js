const fibonacci = function(pos) {
  if(pos < 0) {
    return "OOPS"
  }
  let seq = [0,1]
  for(let i = 1; i <= pos; i++) {
    if(i >= 2) {
      seq.push(seq[i-1]+ seq[i - 2]);
    }
  }
  return seq[pos]
};

// Do not edit below this line
module.exports = fibonacci;
