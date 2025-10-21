const createCounter=(init)=>{
    const initialValue=init
    return {
        increment:()=>{
              return init+1
        },
        decrement:()=>{
            return init-1
        },
        reset:()=>{
            init=initialValue
            return init
        }
    }
}

console.log(createCounter(5).increment())
console.log(createCounter(5).decrement());
console.log(createCounter(4).reset());

