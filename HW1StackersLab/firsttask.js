function func1(arr) {
    return arr.map((num, index) => {
        const sum = num + (index + 1);
        return sum % 10; 
    });
  }
  
  console.log(func1([1, 2, 4]));