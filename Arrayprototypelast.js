// function last(nums){
//     if(!nums || nums.length===0){
//         return -1
//     }
//     else{
//         return nums[nums.length-1]
//     }
// }
// console.log(last([1,2,3]))
// console.log(last([]))

Array.prototype.last=function(){
    if(this.length===0){
        return -1
    }
    else{
        return this[this.length-1]
    }
}
let nums=[1,2,3]
console.log(nums.last());
// prototype functions should use "this", not take the array as a parameter.