var isPalindrome = function(head) {
    
  let arr= [];
  while(head !== null) {
      arr.push(head.val);
      head = head.next;
  }

  let str = arr.join("");
  let rev = arr.reverse();
  let rStr = rev.join("");
  console.log(str, rStr, str == rStr)


return (str == rStr)
  
  
};