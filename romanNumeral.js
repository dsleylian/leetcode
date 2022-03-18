
const roman = { "M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}

var romanToInt = function(s) {
  
  let num = 0;

  for(let i = 0; i < s.length; i++){
      num = (roman[s[i]] < roman[s[i+1]] ) ? num -= roman[s[i]] : num += roman[s[i]];  
  }

    return num;
  
};

romanToInt('III');
romanToInt('IV');
romanToInt('LVIII');
romanToInt('MCMXCIV');