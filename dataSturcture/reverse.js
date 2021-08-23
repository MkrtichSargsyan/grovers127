// use reduce method
function reverse(str) {
  return str.split('').reduce((acc, cur) => cur + acc, '')
}

console.log(reverse('nikolas'));