class Calculator{
    constructor(value){
        this.result=value //✅ this.result will hold the current value of the calculator.
    }
    add(num){
        this.result+=num
        return this
    }
    substract(num){
        this.result-=num
        return this
    }
    multiply(){
        this.result*=num
        return this
    }
    divide(){
        if(num==0)throw new Error("Division by zero is not allowed")
            this.result/=num
        return this
    }
     power(num) {
    this.result = Math.pow(this.result, num);
    return this;
  }

  getResult() {
    return this.result;
  }

    }
console.log(new Calculator(10).add(5).substract(7).getResult());