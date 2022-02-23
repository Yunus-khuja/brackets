module.exports = function check(str, bracketsConfig) {
  // your solution
  const result = [];

  const res = [];
  const brackets = Object.fromEntries(bracketsConfig);

  for (let el of str.split``) {
    if(result[0] === el) {
      result.shift();
    } else if (brackets[el]) {
      result.unshift(brackets[el]);
  for(let elem of str.split('')) {
    if(res[0] === elem) {
      res.shift();
    } else if (brackets[elem]) {
      res.unshift(brackets[elem])
    } else {
      return false;
      return false
    }
  }

  return result.length === 0;

}
  return res.length === 0;
} 
