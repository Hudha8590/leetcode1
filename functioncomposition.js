var compose=function(functions){
    return function(x){
        if(functions.length===0)
            return x
        for(let i=functions.length-1;i>=0;i--){
            x=functions[i](x)
        }
        return x
    }
}

const functions = [x => x + 1, x => x * x, x => 2 * x];
const fn = compose(functions);

console.log(fn(4));
