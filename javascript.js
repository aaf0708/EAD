const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 console.log('Print numbers 1 to n');
rl.question('Enter a number to print from 1 to n: ', (answer) => {
  const n = parseInt(answer);
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  rl.close();
});

rl.question('Enter a number for multiplication table: ', (answer) => {
  const number = parseInt(answer);
console.log('Display multiplication table of a number');
  function displayMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  }

  displayMultiplicationTable(number);
  rl.close();
});


 rl.question('Enter a number to print even numbers up to n: ', (answer) => {
  const n = parseInt(answer);
console.log('Print even numbers up to n');
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }

  rl.close();
}); 


 rl.question('Enter a number to find factorial: ', (answer) => {
  const n = parseInt(answer);
console.log('Factorial of a number');
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  console.log(`Factorial of ${n} is ${factorial(n)}`);
  rl.close();
});
 

 rl.question('Enter a number to reverse: ', (answer) => {
  const num = parseInt(answer);
console.log('Reverse a number');

  function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  }

  console.log(`Reversed number: ${reverseNumber(num)}`);
  rl.close();
});

rl.question('Enter number of terms for Fibonacci series: ', (answer) => {
  const n = parseInt(answer);
console.log('Fibonacci Series');
  function fibonacci(n) {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return fibSeries.slice(0, n);
  }

  console.log(fibonacci(n));
  rl.close();
});


 rl.question('Enter a number to count digits: ', (answer) => {
  const num = parseInt(answer);
console.log('Count of digits in a number');
  function countDigits(num) {
    return num.toString().length;
  }

  console.log(`Number of digits: ${countDigits(num)}`);
  rl.close();
});


 rl.question('Enter a string to reverse: ', (str) => {
console.log('Reverse a string');
  function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  console.log(`Reversed string: ${reverseString(str)}`);
  rl.close();
});


 rl.question('Enter a number to check if it is prime: ', (answer) => {
  const num = parseInt(answer);
console.log('Check if a number is Prime');

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is not a prime number.`);
  }

  rl.close();
});
