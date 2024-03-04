function func3(operation, val1, val2) {
    switch(operation) {
      case '+':
        return val1 + val2;
      case '-':
        return val1 - val2;
      case '*':
        return val1 * val2;
      case '/':
        return val1 / val2;
      default:
        return "Invalid operation";
    }
  }
  
  console.log(func3('+', 4, 7)); 
  console.log(func3('-', 15, 18)); 
