//String Manipulation Functions
//Write a function that reverses a given string.
function reverseString(str) {
    return (str).split('').reverse().join('');
  }

  console.log(reverseString("hello"));


  //Create a function that counts the number of characters in a string.
  function countNumber(){
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
return numbers.length
  };
console.log(countNumber())

// Implement a function that capitalizes the first letter of each word in a sentence.
function capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
};

console.log(capitalize("david"));
console.log(capitalize("benjamin"));
console.log(capitalize("gomycode"));



//Arrays function
// Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Example usage:
const myArray = [10, 3, 8, 1, 33];
const maxValue = findMax(myArray);
const minValue = findMin(myArray);

console.log(`Max value is: ${maxValue}`);
console.log(`Min value is: ${minValue}`);

// Create a function that calculates the sum of all elements in an array.
function customSum(arr) {
    let total = 0;
    for (let value of arr) {
        total += value;
    }
    return total;
}

const customSumValue = customSum(myArray);
console.log(`Custom sum value: ${customSumValue}`);

// Implement a function that filters out elements from an array based on a given condition.
// ONE
/**
 
 * @param {Array} arr 
 * @param {Object} filter - The filter object containing conditions.
 * @returns {Array} - A new array with filtered elements.
 */
function filterArrayByCondition(arr, filter) {
    return arr.filter((item) => {
      
      for (const key in filter) {
        if (item[key] !== filter[key]) {
          return false; 
        }
      }
      return true; 
    });
  }
  
  
  const users = [
    { name: 'John', email: 'johnson@mail.com', age: 25, address: 'USA' },
    { name: 'Tom', email: 'tom@mail.com', age: 35, address: 'England' },
    { name: 'Mark', email: 'mark@mail.com', age: 28, address: 'England' }
  ];
  
  const filter = { address: 'England', name: 'Mark' };
  const filteredUsers = filterArrayByCondition(users, filter);
  
  console.log(filteredUsers);

//   TWO
  function filterArray(arr, conditionFunc) {
    const filteredArray = [];

    for (const element of arr) {
        if (conditionFunc(element)) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
}


const numbers = [1, 2, 3, 4, 5, 6];
const filteredNumbers = filterArray(numbers, (num) => num % 2 === 0); 
console.log(filteredNumbers); 


// Mathematical functions
// Write a function to calculate the factorial of a given number.

function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
}


const number = 5;
const result = factorialRecursive(number);
console.log("Factorial of", number, ":", result); // Output: Factorial of 5 : 120


//Create a function to check if a number is prime or not.
// FIRST EXAMPLE
function isPrime(number) {
    
    if (number <= 1) {
        return false;
    }
    
    
    const sqrt = Math.sqrt(number);
    for (let i = 2; i <= sqrt; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    
    return true;
}


console.log(isPrime(11)); 
console.log(isPrime(20)); 


// SECOND EXAMPLE
function isPrime(number) {
    if (number <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    for (let i = 2; i * i <= number; ++i) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; 
}


const testNumber = 19;
if (isPrime(testNumber)) {
    console.log(`${testNumber} is a prime number.`);
} else {
    console.log(`${testNumber} is not a prime number.`);
}


// Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacciSequence(numTerms) {
    const sequence = [0, 1];
    
    for (let i = 2; i < numTerms; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }
    
    return sequence;
}


const numTerms = 15;
const sequence = fibonacciSequence(numTerms);
console.log(sequence);


/* At the end of the day Mr. Momoh, we'll still have to look at this broadly 
because these where quite tasking to execute especially the "Array" and "Mathematical" function questions.*/