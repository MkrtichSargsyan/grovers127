/// best solution 
const bestChunk = (array, size) => {
    const res = [];
    let index = 0;
    while(index < array.length) {
        res.push(array.slice(index, index+size))
        index += size
    }
 console.log(res);
}

bestChunk([1, 2, 3, 4, 5], 2);

const chunk = (array, size) => {
  const res = [];
  let temp = [];

  for (const el of array) {
    temp.push(el);

    if (temp.length === size) {
      res.push(temp);
      temp = [];
    }
  }
  if (temp.length > 0) {
    res.push(temp);
    temp = [];
  }
  console.log(res);
};
// chunk([1, 2, 3, 4, 5], 2);



// second


const chunkArray = (array, size) => {
  const newArray = [];
  for (el of array) {
    const last = newArray[newArray.length - 1];
   if (!last || last.length === size) {
       newArray.push([el])

   } else {
       last.push(el)
   }
  }
  console.log(newArray);
};

// chunkArray([1, 2, 3, 4, 5], 2);
