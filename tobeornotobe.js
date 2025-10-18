const expected=(val)=>{
   return{
    tobe:(compareVal)=>{
       if (val===compareVal){
        return true;
       }
       else{
        throw new Error("Not Equal")
       }
    },
    notToBe:(compareVal)=>{
        if(val !==compareVal){
            return true
        }else{
             throw new Error("Not equal")
        }
    
    }
   } 

} 

console.log(expected(5).tobe(5))
console.log(expected(5).notToBe(5));
console.log(expected(5).tobe(10));

