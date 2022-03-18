var isPalindrome = function(x) {

  let pString1 = String(x);
  console.log(pString1);
  let arr = pString1.split("");
  arr.reverse();
  let pString2 = arr.join("");
  console.log(pString1, pString2, arr);
  if(pString1 == pString2){
    return true
  }
  return false
};

isPalindrome(121);
isPalindrome(-121);
isPalindrome(10)