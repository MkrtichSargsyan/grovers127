const matrix = (num) => {
  const res = [];
  let temp = [];

  let start = 1;
  while (start <= num*num -2) {
      console.log(start);
    for (let index = start; index <= start+num-1; index++) {
      temp.push(index);
    }
    res.push(temp);
    start = temp[temp.length - 1];
    temp = [];
  }

  let resString = ''
  for (let index = 0; index < res.length; index++) {
     resString+=res[index] + '\n'
  }
  console.log(resString);
};

matrix(3);

// 123;
// 894
// 765
// const a = [3,4,5]
// console.log(a[a.length-1]);