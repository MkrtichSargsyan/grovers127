module.exports = function () {
  const res = [];
  for (let index = 1; index <= 100; index++) {
    index % 15 === 0
      ? res.push('FizzBuzz')
      : index % 5 === 0
      ? res.push('Buzz')
      : index % 3 === 0
      ? res.push('Fizz')
      : res.push(index);
  }

  return res;
};
