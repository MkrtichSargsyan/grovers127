function reverseInt(int) {
    const result = int.toString().split('').reverse().join('')
    return parseInt(result) * Math.sign(int);
}

console.log(reverseInt(200))
console.log(reverseInt(189))
console.log(reverseInt(-200))