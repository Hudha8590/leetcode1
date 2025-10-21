var argumentsLength = function(...args) {
    return args.length
};

console.log(argumentsLength());        // 0
console.log(argumentsLength(5));       // 1
console.log(argumentsLength(1, 2, 3)); // 3
console.log(argumentsLength("a", 4, true, null)); // 4