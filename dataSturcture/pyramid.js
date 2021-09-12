const pyramid = (num) => {
        res = ''
          for (let i = 1; i <= num; i+=2 ) {

            for (let index = 0; index <= (num-i)/2; index++) {
                res+=' '  
            }
  

              for (let index = 1; index <= i; index++) {
                 
                      res+='#'  
              } 
              res+= '\n'
           }
      
        return res;
}
console.log(pyramid(5));


