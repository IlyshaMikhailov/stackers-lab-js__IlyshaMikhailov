function func2(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}

var arr = [19, 5, 42, 2, 77];
console.log(func2(arr)); 