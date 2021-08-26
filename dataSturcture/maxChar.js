// mike solution
const maxChar = (str) => {
  let result = {};
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (!result.hasOwnProperty(element)) {
      result[element] = 1;
    } else {
      result[element] += 1;
    }
  }
  let max = Object.values(result).reduce(
    (acc, cur) => (cur > acc ? cur : acc),
    0
  );
  let key = Object.keys(result).find((key) => result[key] === max);
  console.log(key);
};
maxChar('ssduaifotaath');

// second solution
const maxCharSecond = (str) => {
  let result = {};
  let max = 0;
  let maxKey = '';

  for (const char of str) {
    result[char] = result[char] + 1 || 1;
  }
  for (const char in result) {
    if (result[char] > max) {
      max = result[char];
      maxKey = char;
    }
  }
  console.log(maxKey);
};
maxCharSecond('AAAATRTTU')