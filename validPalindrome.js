var isPalindrome = function(s) {
  let arr = s.toLowerCase().replace( /(_|\W)/g,"").replace(/\s/g,"").split("");
  // sLow = sLow.replace( /(_|\W)/g,"");
  // sLow = sLow.replace(/\s/g,"");
  // let arr = sLow.split("");

  let ans1 = arr.join("");
  let revArr = arr.reverse();
  let ans2=revArr.join("");
console.log(ans1, ans2);
  return (ans1 === ans2)
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome("darya")
isPalindrome("ab@a")