/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {

  // 1. create a variable to keep track of substring, and a  variable for result ( a number)
  // 2. loop through the given string s
  // 3. at every inner loop check - is the current s[i] in the substring ? 
  // 4. if it isnt, add it to substring and continue 
  // 5. if it is, dont add, set current-substring to the longest substring, re set substring and see if there's a longer substring

  if (s.length == 0 || s == null) {
    return 0
  }

  let i = 0;
  let j = 0;
  let maxWindow = 0;

  let substringSet = new Set();

  while (i < s.length){
    let curr = s[i];
    while(substringSet.has(curr)){
      substringSet.delete(s[j]);
      j++;
    }
    substringSet.add(curr);
    maxWindow = Math.max(maxWindow, i-j +1);
    i++;
  }
  console.log(maxWindow);

return maxWindow; 

  // sArr = Array.from(s);

  // let currSubstring = [];
  // let windowSize = 2;
  // let longestSub = []; 

  // while (windowSize <= sArr.length){

  //     for(let i = 0; i < sArr.length; i++){

  //         currSubstring
  //         console.log(currSubstring)
  //         if(i >= windowSize -1) {
  //           if(!currSubstring.includes(sArr[i])) {
  //             longestSub = (currSubstring > longestSub) ? currSubstring : longestSub;
  //           }
  //           currSubstring = currSubstring.shift();
  //         }
  //     }
      
  //     windowSize++;
  // }
  
  // console.log("curr", currSubstring, "longest", longestSub);


  // let currentSub = [s[0]];
  // let result = 0; 
  
  // for(let i = 1 ; i < s.length; i++){ //looping over s

  //   if(currentSub.includes(s[i])){  //if the substring has the current s[i]

  //       if (currentSub.length > (result) ) { 
  //         result = currentSub.length; 
  //       }

  //       // delete the repeat as well as any character before it - it wont be a conitnuout substring otherwise 
  //       let index = currentSub.indexOf(s[i]);
  //       currentSub.splice(0, (index));
        
  //   } else { // if the current s[i] isnt in the substring, add it
  //     currentSub.push(s[i]); 
  //   }
    
  //   //make sure result holds the longest substring 
  //   if (currentSub.length > result) {
  //     result = currentSub.length;
  //   }
  // }

  // return result;
};


lengthOfLongestSubstring("abcabcbb");
console.log("\n\n");
lengthOfLongestSubstring("pwwkew");
console.log("\n\n");
lengthOfLongestSubstring("aab");
console.log("\n\n");
lengthOfLongestSubstring("dvdf");