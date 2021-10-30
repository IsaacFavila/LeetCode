/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  let result = 0;
  let place  = 10;

  while(x) {
    result *= 10;
    result += (x % place) / (place / 10); 
    x -= x % place;
    place  *= 10; 
  }
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31)) {
      return 0; 
  } else {
      return result;
  }
};