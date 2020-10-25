module.exports = function reverse (n) {
   var str = "" + n;
  return parseInt(str.split("").reverse().join(''));
}
