/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(){
    this.result = 0;
  }

  add(input){
    if (typeof input === "number") {
      this.result += input;
    }
  };

  subtract(input){
    if (typeof input === "number") {
      this.result -= input;
    }
  };

  multiply(input){
    if (typeof input === "number") {
      this.result *= input;
    }
  };

  divide(input){
    if (input === 0) {
      throw Error();
    }

    if (typeof input === "number" && input !== 0) {
      this.result /= input;
    }
  };

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }

  remove_extra_spaces(expr){
    var bits = expr.split(" ")
    var bits_without_spaces = []
    for(let x = 0; x < bits.length; x ++){
      if (bits[x] !== "") {
        bits_without_spaces.push(bits[x])
      }
    }
    return bits_without_spaces.join(" ");
  };

  check_string_validity(expr) {
    const allowed_chars = new Set("0123456789(). +-/*".split(""));
    var elems = expr.split("");
    // console.log("Allowed Characters", allowed_chars);
    // console.log("Elements in the split expression", elems);
    for (let x = 0; x < elems.length; x++){
      if (!allowed_chars.has(elems[x])){
        console.log(elems[x]);
        return false;
      }
    }
    return true;
  }

  calculate(expr){
    // console.log("Before Removing spaces", expr)
    expr = this.remove_extra_spaces(expr);
    // console.log("After Removing spaces", expr);
    if (this.check_string_validity(expr)){
      try{
        this.result = eval(expr);
        if (this.result == "Infinity"){
          throw Error();
        }
        console.log(expr, this.result);
      }
      catch(err){
        throw Error();
      }
    }
    else {
      throw Error();
    }
    
  }
}

module.exports = Calculator;