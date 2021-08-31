// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//  reverse ('apple') === 'leppa'
//  reverse ('hello') === 'olleh'
//  reverse('Greetings!') === '!sgniteerG'


// function reverse(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }

// module.exports = reverse;


// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reverse;
//     }

//     return reversed;
// }

// module.exports = reverse;


// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }

// module.exports = reverse;



// Palindrome Directions
// Given a string, return true if the string is a palindrome or false if it is not. Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces and punctuation in determining if the string is a palindrome.
// Examples:
// palindrome("abba") === true => "abba"
// palindrome("abcdefg") === false => "gfedcba"

// function palindrome(str) {
//     const reversed = str
//         .split('')
//         .reverse()
//         .join('');

//     return str === reversed;
// }

// module.exports = palindrome;


// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     });
// }

// module.exports = palindrome;



// Reversal Int Directions
// Given an integer, return an integer that is the reverse ordering of numbers.
// Examples 
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

// function reverseInt(n) {
//     const reversed = n
//         .toString()
//         .split('')
//         .reverse()
//         .join('');

//     if (n < 0) {
//       return parseInt(reversed) * -1;
//     }
//     return parseInt(reversed);
// }

// module.exports = reverseInt;

// function reverseInt(n) {
//     const reversed = n
//         .toString
//         .split('')
//         .reverse()
//         .join('');

//     return parseInt(reversed) * Math.sign(n);
// }

// module.exports = reverseInt;



// MaxChar Directions
// Given a string, return the characters that is most commonly used in the string.
// Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';


//     for (let char of str) {
//         if (charMap[char]) {
//           charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     }

//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar = char;
//         }
//     }

//     return maxChar;
// }

// module.exports = maxChar;



// FizzBuzz Directions
// Write a program that console logs the numbers from 1 to n. But for multiples of three print
// "fizz" instead of the number and for the multiples of five print "buzz". For numbers which are 
// multiples of both three and five print "fizzbuzz". Examples
// fizzBuzz(5);
// 1 
// 2
// fizz
// 4
// buzz

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         // Is the number a multiple of 3 and 5?
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         } else if (i % 3 === 0) {
//             // Is the number a multiple of 3?
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             // Is the number a multiple of 5?
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// module.exports = fizzBuzz;




// Array Chunking Directions
// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.
// Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunkArray (array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
        
//         if(!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }

//     return chunked;
// }

// module.exports = chunked;


// function chunk(array, size) {
//     const chunked = [];
//     let index = 0;

//     while (index < array.length) {
//         chunked.push(arr.slice(index, index + size));
//         index += size;
//     }

//     return chunked;
// }

// module.exports = chunked;





// Anagrams Directions
// Check to see if two provided strings are anagrams of each other
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as lower case
// Examples anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stirngB);

//     if(OBject.keys(aCharMap).length !== OBject.keys(bCharMap).length) {
//         return false;
//     }

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};
    
//     for(let char of str.replace(/[%^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

// module.exports = anagrams;


// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

// }
// module.exports





// Capitalize Directions
// Write a function thay accepts a string. The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// Examples 
// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//      const words = [];

//      for(let word of str.split('')) {
//         words.push(word[0].toUpperCase() + word.splice(1));
//      }

//      return words.join(' ');
// }

// module.exports = capitalize;



// function capitalize(str) {
//     let result = str[0].toUpperCase();

//     for (let i = 1; i < str.length; i++) {
//         if (str[i - 1] === ' ') {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }

//     return result;
// }

// module.exports = capitalize;





// Printing Steps Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character. Make sure the 
// step has spaces on the right hand side!
// Examples
// steps(2)
// '# '
// '##'
// steps(3)
// '#  '
// '## '
// '###'
// steps(4)
// '#   '
// '##  '
// '### '
// '####'

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }

//         console.log(stairs);
//     }
// }

// module.exports = steps;


// function steps(n, row = 0, stair = '') {
//     if (n === row) {
//         return row;
//     }

//     if (n === stair.length) {
//         console.log(stair);
//         return steps(n, row + 1);
//     }

//     const add = stair.length < = row ? '#' : ' ';
//     steps(n, row, stair + add);
// }

// module.exports = steps;





// Pyramid directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character. Make sure the
// pyramid has spaces on both the left *and* right hand sides
// ---Examles 
// pyramid(1)
//      '#'
// pyramid(2)
//      ' # '
//      '###'
// pyramid(3)
//      '  #  '
//      ' ### '
//      '#####'

// function pyramid(n) {
//     for (let row = 0; row < n; row++) {
//         let level = '';

//         for (let column = 0; column < 2 * n - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);    
//     }
// }

// module.exports = pyramid;





// Vowels Directions
// Write a function that returns the number of vowels
// used in a string. Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// ---Examples
// vowels('Hi There!') --> 3
// vowels('Why do you ask?') --> 4
// vowels('Why?') --> 0

// function vowels(str) {
//     let count = 0;
//     const checker = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// module.exports = vowels;


// function vowels(str) {
//     str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }

// module.exports = vowels;




// Matrix Spirals Directions
// Write a function that accepts an intefer N
// and returns a NxN spiral matrix.
// --- Examples
// matrix(2)
// [[1, 2],
// [4, 3]]
// matrix(3)
// [[1, 2, 3],
// [8, 9, 4],
// [7, 6, 5]]
// matrix(4)
// [[1, 2, 3, 4],
// [12, 13, 14, 5],
// [11, 16, 15, 6],
// [10, 9, 8, 7]]

// function matrix(n) {
//     const results = [];

//     for(let i = 0; i < n; i++) {
//         results.push([]);
//     }

//     let counter = 1;
//     let startColumn = 0;
//     let endColumn = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;
//     while (startColumn <= endColumn && startRow <= endRow) {
//         // Top row
//         for (let i = startColumn; i <= endColumn; i++) {
//             results[startRow][i] = counter;
//             counter++
//         }
//         startRow++; 

//         // Right column
//         for (let i = startRow; i <= endRow; i++) {
//             results[i][endColumn] = counter;
//             counter++;
//         }
//         endColumn--;

//         // Bottom row
//         for (let i = endColumn; i >= startColumn; i--) {
//             results[endRow] [i] = counter;
//             counter++;
//         }
//         endRow--;

//         // start column
//         for(let i = endRow; i >= startRow; i--) {
//             results[i] [startColumn] = counter;
//             counter++;
//         }
//         startColumn++;
//     }

//     return results;
// }

// module.exports = matrix;




// Directions Run time Complexity
// Describes the performance of an algorithm
// How much more processing power/time is required to run
// your alogrithm if we double the inputs?

// Constant Run Time => 1 => No matter how many elements we're working with
// the alogorithm will always take the same amount of time.

// Logarithmic Run Time => log(n) => You have this if doubling the number of elements
// you are iterating over doesn't double the amount of work. Always 
// assume that searching operations are log(n)

// Linear Run Time => n => Iterating through all elements in a collection of data.
// If you see a for loop spanning from '0' to 'array.length',
// you probably have 'n', or linear runtime

// Quasilinear Run Time => n * log(n) => You have this if doubling the
// number of elements you are iterating over doesn't double the amount of work.
// Always assume that any sorting operation is n*log(n)

// Quadratic Run Time => n^2 => Every element in a collection has to be compared to
// every other element. 'The handshake problem'

// Exponential Run Time => 2^n => If you add a single *single* element to a
// collection, the processing power required doubles


// Big 'O' Notation
// O(n) => Linear
// O(1) => Constant
// O(n^2) => Quadratic


// Identifying Runtime Complexity
// Iterating with a simple for loop through a single collection? => Probably O(n)
// Iterating through half a collection? => Still O(n). There are no constants in runtime.
// Iterating through two *different* collections with separate for loops? => 0(n+m)
// Two nested for loops iterating over the same collection? => O(n^2)
// Two nested for loops iterating over different collections? => O(n*m)
// Sorting? => O(n*log(n))
// Searching a sorted array? => O(log(n))

// Space Complexity => How much more memory is required by doubling
// the problem set?




// Fibonacci Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
// fib(4) === 3
// [0]=>[1]=>[1]=>[2]=>[3]=>[5]=>[8]=>[13]=>
// function fib(n) {
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b);
//     }

//     return result[n];
// }

// module.exports = fib;
// linear Run Time


// Recurstion
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// }

// module.exports = fib;


// function memorize(fn) {
//     const cache = {};
//     return function(...args) {
//         if(cache[args]) {
//             return cache[args];
//         }

//         const results = fn.apply(this, args);
//         cache[args] = results;

//         return results;
//     };
// }

// function slowFib(n) {
//     if(n< 2) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib);
// module.exports = fib;





// Data Structures
// Ways of organizing information with optimal 'runtime complexity'
// for adding or removing records
// Javascript natively implements several data structures.
// You will still be asked about 'inferior' data structures.

// Queue Data Structure => first in first out

//Queue || Array Equivalent
// Add to queue || array.unshift();
// Remove from queue || array.pop();
// Array => Add => shift, unshift, push
// Array => Remove => pop, splice, slice

// Create a new, empty queue => const q = new Queue();
// Add a record to a queue => q.add(1);
// Remove a record at the end of a queue => q.remove();


// Queue Description
// Create a queue data structure. The queue should be a class with
// methods 'add' and 'remove'. Adding to the queue should store an
// element until it is removed
// --Examples
// const q = new Queue();
// q.add(1);
// q.remove(); // returns 1;

// class Queue {
//     constructor() {
//         this.data = [];
//     }

//     add(record) {
//         this.data.unshift(record);
//     }

//     remove() {
//         return this.data.pop();
//     }
// }

// module.exports = Queue;




// Weave Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function. Weave
// receives two queues as arguments and combines the contents of each
// into a new, third queue. The third queue should contain the *alterating*
// content of the queues. The function should handle queues of
// different lengths without inserting 'undefined' into the new one.
// *Do not* access the array inside of any queue, only 
// use the 'add', 'remove', and 'peek' functions.
// --- Examples
// const queueOne = new Queue();
// queueOne.add(1);
// queueOne.add(2);
// const queueTwo = new Queue();
// queueTwo.add('Hi');
// queueTwo.add('There');
// const q = weave(queueOne, queueTwo);
// q.remove() // 1
// q.remove() // 'Hi'
// q.remove() // 2
// q.remove() // 'There'

// class Queue {
//     constructor() {
//         this.data = [];
//     }

//     add(record) {
//         this.data.unshift(record);
//     }

//     remove() {
//         return this.data.pop();
//     }
//     peek() {
//         return this.data[this.data.length - 1];
//     }
// }

// module.exports = Queue;

// const Queue = require('./queue');

// function weave(sourceOne, sourceTwo) {
//     const q = new Queue();

//     while (sourceOne.peek() || sourceTwo.peek()) {
//         if (sourceOne.peek()) {
//             q.add(sourceOne.remove());
//         }

//         if (sourceTwo.peek()) {
//             q.add(sourceTwo.remove());
//         }
//     }

//     return q;
// }

// module.exports = weave;




// Stacks Directions 
// First In Last Out FILO
// Stack Methods
// Push => Add a record to the stack
// Pop => Remove the "top" record in the stack
// Peek => Return the "top" record without popping it
// Create a stack data structure. The stack should be a class
// with methods 'push', 'pop', and 'peek'. Adding an element to the
// stack should store it until it is removed.
// --- Examples
// const s = new Stack();
// s.push(1);
// s.push(2);
// s.pop(); // returns 2
// s.pop(); // returns 1

// class Stack {
//     constructor() {
//         this.data = [];
//     }

//     push(record) {
//         this.data.push(record);
//     }

//     pop() {
//         return this.data.pop();
//     }

//     peek() {
//         return this.data[this.data.length - 1];
//     }
// }

// module.exports = Stack;

const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }
}

module.exports = Queue;