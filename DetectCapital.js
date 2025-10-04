function DetectCapital(word){
    if(!word)
     return false
     const isAllupperCase=word===word.toUpperCase();
     const isAlllowerCase=word===word.toLowerCase();
      const isFirstUpperRestLower=word[0]===word[0].toUpperCase()&&word.slice(1)===word.slice(1).toLowerCase()
      const isLastUpperCase=word[word.length-1]===word[word.length-1].toUpperCase()&&word.slice(0,-1)===word.slice(0,-1).toLowerCase()
      return isAlllowerCase || isAllupperCase || isFirstUpperRestLower|| isLastUpperCase
    }
console.log(DetectCapital("flaG"));
console.log(DetectCapital("USA"));
console.log(DetectCapital("Flag"));


