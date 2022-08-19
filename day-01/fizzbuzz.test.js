function fizzBuzz(n) {
 const numbers = [];
 for(let i = 1; i <= n; i++){
    if(i % 15 === 0) {
        numbers.push('FizzBuzz');
    } else if( i % 5 === 0) {
        numbers.push('Buzz')
    } else if (i % 3 === 0) {
        numbers.push('Fizz')
    } else numbers.push(i);
 }
 return numbers;
}

test("fizzBuzz", () => {
    expect(fizzBuzz(16)).toEqual([
        1, 2, 'Fizz', 4, 'Buzz', 
        'Fizz', 7, 8, 'Fizz', 'Buzz', 
        11, 'Fizz', 13, 14, 'FizzBuzz', 
        16
      ])
})