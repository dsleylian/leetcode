var twoSum = function(nums, target) {
  let ansArr= [];
  
  for (let i = 0; i < nums.length; i++){
      let j = i+ 1;
      while ( j < nums.length){
          if(nums[i] + nums[j] == target){
              ansArr.push(i);
              ansArr.push(j)
              console.log(ansArr);
              return ansArr;
          }
          j++;
        }
      
  }
  console.log(ansArr);
  return ansArr;
};

twoSum([3, 2, 3], 6);