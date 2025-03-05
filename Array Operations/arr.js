// what is array 
// An array is a """collection of elements""" stored in a single variable.

// basic array
let arr = [-1, 33, 43, 23, 55, 5, 5];
let err = [3, 5, 7, 2, 5, 6, 0];

// Accessing elemen
//console.log(arr[1])  by index
//console.log(arr[arr.length - 6])  by negetive indexing

// Inserting
// arr.push(39) in the last
// arr.unshift(10) in first
// arr.splice(5,0,39,40) 5-indexNo 0-notremoveonlyADD 39,40-add

// removing
// arr.pop() from last
// arr.shift() from first
// arr.splice(2, 1); Removes 1 element at index 2 (43)

// search element
// console.log(arr.includes(39))
// console.log(arr.indexOf(2)) if not found than output is (-1)

// Iterating
// for(let i =0;i< arr.length;i++){
//     console.log(i)
// }

// reversing the arry
// console.log(arr.reverse())

// sorting
// arr.sort((a,b)=> b-a); a-b = incending / b-a = descending

// slice(startIndex, endIndex) (Returns a new array without modifying the original)
// let narr = arr.slice(1, 3);

// Concatenation (Merging two arrays)
// let modifying = arr.concat(err); 

// find elements Returns the first matching element
// let found =arr.find(num => num > 3);

// findIndex() – Returns the index of the first matching element
// let found = arr.findIndex(i => i > 2)

// filter() – Returns a new array with elements that satisfy a condition
// let fill = arr.filter(i => i > 7)

// map() – Creates a new array by applying a function to each element
// let m = arr.map(i => i * i)

// Convert an array of strings to uppercase toUpperCase()
// let word = [ 'bhavesh']
// let result = word.map(word => word.toUpperCase() )
// console.log(result)

// reduce() – Reduces an array to a single value
// let r = arr.reduce((i, j) => i + j);
// Finding Maximum using reduce() max no
// let max = arr.reduce((a,b) => Math.max(a,b))

// some() – Checks if at least one element meets a condition
// let meet = arr.some(num => num % 2 === 0);
// every() – Checks if all elements meet a condition
// let meet = arr.every(num => num > 0)

// flat() – Flattens a nested array
// let meet = [1, [2, 3], [4, [5, 6]]].flat(Infinity)

// fill(value, start, end) – Fills an array with a value
// let rrr = new Array(5).fill(2)

// from() – Creates an array from an iterable
// let f = Array.from('hola') output [ 'h', 'o', 'l', 'a' ]

// join() – Convert an Array to a String
// let arvr = ["Apple", "Banana", "Cherry"];

// toString() – Convert an Array to a Simple String  Similar to join(), but always uses commas as the separator
// console.log(arr.toString())

// Using Spread Operator [...arr]
// let cops = [...arr]; This creates an exact copy of the original array.

// Removing Duplicates using new Set() 📌 Set stores only unique values, so it removes duplicates.
// let soo = [...new Set(arr)];

// Destructuring & Spread Operator
// let [first, second , ...rest] = arr;
// console.log(first);   // 10
// console.log(second);  // 20
// console.log(rest);

'next level'

// This code demonstrates low-level memory management using ArrayBuffer and TypedArray.
// It allocates raw binary memory and then interprets it as a specific data type (Int32Array).

// 1️⃣ ArrayBuffer (Raw Memory Allocation)
// ArrayBuffer alone cannot be used directly—it must be viewed through a TypedArray.
// 2️⃣ Int32Array (TypedArray View)

// 3️⃣ Performance Optimization Tricks
// for(let i of arr){
//     console.log(i)
// }

// 5️⃣ Memory Management & Garbage Collection
// Arrays in JavaScript are dynamic, meaning memory is allocated automatically.
// Use .length = 0 to clear an array efficiently:
// let arr = [1, 2, 3];
// arr.length = 0;
// console.log(arr); // []
// 📌 Why? Helps in large-scale applications for better memory handling.


"You're now an Array Master! 🚀🔥"
"You've covered everything in arrays that you need for interviews, real-world projects, and optimizations."