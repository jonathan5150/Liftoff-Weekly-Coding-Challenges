function FirstReverse(str) { 

  // code goes here  
  const length = str.length - 1;
  const reversedArray = [];
  for(let i = length; i >= 0; i--) {
        reversedArray.push(str[i]);
      }
  return reversedArray.join('');

}
   
// keep this function call here 
console.log(FirstReverse(readline()));
