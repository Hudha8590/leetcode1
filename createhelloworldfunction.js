function createHelloWorld(){
    return function(){
        return "hello world"
    }
}
const f=createHelloWorld()
console.log(f());
console.log(f(1,2,3));

