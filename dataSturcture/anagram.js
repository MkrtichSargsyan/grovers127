const anagram = (str1, str2) => {
  result = false;
  str1 = str1.replace(/[^\w]/g, '').toLowerCase();
  str2 = str2.replace(/[^\w]/g, '').toLowerCase();

  objStr1 = {};
  objStr2 = {};
  for (const char of str1) {
    objStr1[char] = objStr1[char] + 1 || 1;     
  }
  for (const char of str2) {
    objStr2[char] = objStr2[char] + 1 || 1;
  }
  console.log(objStr1);

  if (Object.keys(objStr1).length !== Object.keys(objStr2)){
    res = false;
    return res;
  } 

  for (let index = 0; index < objStr1.length; index++) {
      if(objStr1[index].k)  
  }
};
anagram('HELO.  .!!!', 'help');
// best solution 
function anagrams(string1, string2) {
  return cleanString(string1) === cleanString(string2);

}
function cleanString(str) {
  str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
