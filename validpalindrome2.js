var validPalindrome = function(s) {
  let arr = s.toLowerCase().replace( /(_|\W)/g,"").replace(/\s/g,"").split(""); //make s into array, make sure there arent symbols or empty spaces

  let ans1 = arr.join(""); //make back into string
  let revArr = arr.reverse();
  let ans2=revArr.join(""); //make the reverse into a string 

  if(ans1 === ans2) return true; //if it's already a palindrome, return, dont need to check with deleting

  let index = 0;
  while (index < s.length){
    if(ans1[index] !== ans2[index]){ //check if any of the letters --> <-- arent a match
      break; //if they arent a match - end, we need to try deleting a letter at this index 
    } else{
      index++; //if they do match, let's go to the next index and check
    }
  }
  let sliced1 = (ans1.slice(0, index) + ans1.slice(index + 1) === //this is the string of ans1 with index removed
  ans2.slice(0, ans1.length - 1 - index) + ans2.slice(ans1.length - index) ); // this is reversed string with that index removed from the reverse side (starting with left to right)

  //same as above but starting from the other side (starting with right to left)
  let sliced2 = ans2.slice(0, index) + ans2.slice(index + 1) ===
  ans1.slice(0, ans1.length - 1 - index) + ans1.slice(ans1.length - index);

console.log(sliced1)
  return sliced1 || sliced2 ;
  
  
};

validPalindrome("abca");
validPalindrome("aba");
validPalindrome("aca");

