const sumAll = function(start, end) {
   let accumulated = 0;
   if (start < 0 || end < 0 || isNaN(start) || isNaN(end) || typeof start !== 'number' || typeof end !== 'number') {
      return 'ERROR'
   } else {
      if (start < end) {
         for(let i = start; i <= end; i ++) {
            accumulated += i;
         }
      } else if (start > end) {
         for(let i = start; i >= end; i--) {
            accumulated += i
         }
      }
   }
   return accumulated;
};

// Do not edit below this line
module.exports = sumAll;
