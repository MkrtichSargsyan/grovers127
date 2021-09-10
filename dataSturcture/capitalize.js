const capitalizeWord = (str) => {
 const res =  str.split(' ').reduce((acc, cur) => acc+ ' '+ cur[0].toUpperCase()+ cur.substr(1), '' ).trim()
console.log(res); 
}
capitalizeWord("hello world")