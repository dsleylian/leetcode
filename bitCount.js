var countBits = function (n) {
 
  let ans = [];

  for (let i = 0; i <= n ; i++ ){
    ans.push(Number(i).toString(2).replace(/0/g, '').length);
  }
console.log(ans);
  return ans;

};

countBits(5);
