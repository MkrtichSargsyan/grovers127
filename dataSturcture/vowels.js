const vowels = (str) => {
  const vow = ['a', 'i', 'e', 'o'];
  let count = 0;
  for (const letter of str) {
    if (vow.includes(letter)) count++;
  }

  console.log(count);
};

vowels('hello there');
