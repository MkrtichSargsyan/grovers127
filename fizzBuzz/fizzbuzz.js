module.exports = function () {
  const res = [];
  for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      res.push('FizzBuzz');
    } else if (index % 5 === 0) {
      res.push('Buzz');
    } else if (index % 3 === 0) {
      res.push('Fizz');
    } else {
      res.push(index);
    }
  }
  return res;
};
