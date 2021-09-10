const steps = (num) => {
  res = ''
    for (let i = 1; i <= num; i++ ) {
        for (let index = 0; index < i; index++) {
            res+='#'  
        } 
        res+= '\n'
     }

  return res;
}
console.log(steps(5))
//second solution 

const step = (num) => {
for (let row = 0; row < num; row++) {
  let stair = '';
  for (let column = 0; column < num; column++) {
      if(column <= row) {
          stair += '#'
      } else {
          stair += ' '
      } 
  } 
  console.log(stair);
}
}
step(3)