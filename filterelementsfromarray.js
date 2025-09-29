var filter = function(arr, fn) {
    let result=[]
    for(i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            result.push(arr[i])
        }
    }
    return result;
};
function greaterThan10(n) { return n > 10; }
console.log(filter([0, 10, 20, 30], greaterThan10)); 

function firstIndex(n, i) { return i === 0; }
console.log(filter([1, 2, 3], firstIndex)); 

function plusOne(n) { return n + 1; }
console.log(filter([-2, -1, 0, 1, 2], plusOne));