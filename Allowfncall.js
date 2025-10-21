const once=(fn)=>{
    let called=false; // we start as not called yet
    let result; // to store the first result

 return function(...args){
    if (!called) {
   result = fn(...args); // call fn the first time
   called = true;        // mark as called
   return result;        // return the value
}
else{
    return undefined
}
 }

}

const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined
console.log(onceFn(2, 3,8));