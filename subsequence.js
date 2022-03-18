var isSubsequence = function(s, t) {

  let ans = 0;

  for (let i = 0; i < t.length; i ++){
    if (t[i] === s[ans]){
      ans++
    }
  }
  if (ans === s.length) {
    return true;
  }
  return false;
};

isSubsequence("abc", "ahbgdc");