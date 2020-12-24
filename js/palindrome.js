const palindrome = (string) => {
  
  const rev = string.split("").reverse().join("").toLowerCase();
  if (string.toLowerCase() !== rev) {
    return false;
  } else {
    return true;
  }
};
console.log(palindrome("MaDam"));
module.exports = palindrome;
