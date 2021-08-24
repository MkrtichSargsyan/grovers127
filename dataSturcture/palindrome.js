// first solution
 function palin(str) {
    
    if (str === str.split('').reverse().join('')) {
        console.log('This is a palindrome') 
    } else {
        console.log('This is not a palindrome') 
    }

}
palin('razar') 

// second solution 
function palindrome(str) {
    return str.split('').every((char, i) => {
         char === str[str.length - i - 1 ]
    })
}

console.log(palindrome('razar'))

