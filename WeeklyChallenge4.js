function LongestWord(sen) { 

  // code goes here  
  stringArray = sen.split("");
  var tempString = "";
  var longestArray = [];
  let i = 0;

  while ( i < stringArray.length ) {

    var regExp = /[a-zA-Z]/;
           
    if (regExp.test(stringArray[i])) {
      longestArray.push(stringArray[i]);
      if ( longestArray.join("").length > tempString.length && (i >= 1)) {
        var tempString = longestArray.join("");
      }
    } else {
      if ( longestArray.join("").length > tempString.length ) {
        var tempString = longestArray.join("");
      }
      var longestArray = [];
    }

    i++;

  }

  return tempString; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
