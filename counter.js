function createCounter(n){
      return function counter2(){
        let current=n
        n=n+=1
         return current
      }
}
const counter=createCounter(10)
const counter2=createCounter(-2)
console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());


