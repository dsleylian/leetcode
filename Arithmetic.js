/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
    
  //need to loop over the array, each time check a group of 3 (i, i+1, i+2 ? OR just check for 2 difference if theyre the same (1-2 & 2-3)
  //within each loop, check if the difference is the same between all 3
  //add to a counter? how many are atithmetic 

  if (nums === null || nums.length < 3) return 0

  let counter = 0;
  let current = 0;

  for ( let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i + 1] === nums[i + 1] - nums[i + 2]) {
      current += 1;
      counter += current;
      console.log(counter)
    } else {
      current = 0;
    }
    
  }
  console.log('final', counter)
  return counter;
  

};

numberOfArithmeticSlices([1,2,3,4, 5])