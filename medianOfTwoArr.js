/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    
    let ans = 0;
    let fullArray = nums1.concat(nums2);
    fullArray.sort((a,b) => a-b);

    if((fullArray.length % 2) == 0){
        ans = ( (fullArray[fullArray.length /2]) + (fullArray[(fullArray.length /2) -1] ) ) /2;
    }else {
        ans = fullArray[Math.round(fullArray.length /2) -1];
    }
    Number(ans);
    ans.toFixed(5);


  console.log(ans);

};

findMedianSortedArrays([1,3], [2, 4]);