import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';


const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const Loops = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day5/arrays-objects" 
        nextLink="/" 
        indexLink="/day5"
        title="JavaScript Loops"
        subtitle="Learn about different types of loops for iterating through data"
      />
      
      <Title>JavaScript Loops</Title>
      
      <Section>
        <SectionTitle>Introduction to Loops</SectionTitle>
        <p>
          Loops are used to execute a block of code repeatedly. JavaScript provides several types of loops to handle different scenarios.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>for Loop</SectionTitle>
        <p>
          The <code>for</code> loop is the most common type of loop in JavaScript. It consists of three expressions: initialization, condition, and increment/decrement.
        </p>
        
        <CodeBlock>
{`// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}

// Breaking down the for loop:
// 1. Initialization: let i = 0 (executed once at the beginning)
// 2. Condition: i < 5 (checked before each iteration)
// 3. Increment: i++ (executed after each iteration)
// 4. Code block: console.log(i) (executed if condition is true)

// Looping through an array
const fruits = ["apple", "banana", "orange", "grape", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Looping backwards
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]); // Outputs: mango, grape, orange, banana, apple
}

// Skipping iterations
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // Skip even numbers
  console.log(i); // Outputs: 1, 3, 5, 7, 9
}

// Breaking out of a loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // Exit the loop when i is 5
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}

// Nested loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(\`i: \${i}, j: \${j}\`);
  }
}`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>while Loop</SectionTitle>
        <p>
          The <code>while</code> loop executes a block of code as long as a specified condition is true.
        </p>
        
        <CodeBlock>
{`// Basic while loop
let i = 0;
while (i < 5) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
}

// Using while when the number of iterations is unknown
let dice = 0;
while (dice !== 6) {
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(\`You rolled a \${dice}\`);
}
console.log("Finally rolled a 6!");

// Breaking out of a while loop
let j = 0;
while (true) {
  console.log(j);
  j++;
  if (j >= 5) break; // Exit the loop when j is 5 or greater
}

// Skipping iterations in a while loop
let k = 0;
while (k < 10) {
  k++;
  if (k % 2 === 0) continue; // Skip even numbers
  console.log(k); // Outputs: 1, 3, 5, 7, 9
}`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>do...while Loop</SectionTitle>
        <p>
          The <code>do...while</code> loop is similar to the <code>while</code> loop, but it executes the code block once before checking the condition.
        </p>
        
        <CodeBlock>
{`// Basic do...while loop
let i = 0;
do {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
} while (i < 5);

// The do...while loop always executes at least once
let j = 10;
do {
  console.log(j); // Outputs: 10 (executes once even though condition is false)
  j++;
} while (j < 5);

// Using do...while for user input validation
let userInput;
do {
  userInput = prompt("Please enter a number greater than 10:");
} while (parseInt(userInput) <= 10);
console.log("Thank you for entering a valid number!");`}
        </CodeBlock>
      </Section>
      
      <Example title="Choosing the Right Loop">
        <p>
          Different loops are suited for different scenarios:
        </p>
        <ul>
          <li><strong>for</strong>: Use when you know the number of iterations in advance</li>
          <li><strong>while</strong>: Use when the number of iterations is unknown and depends on a condition</li>
          <li><strong>do...while</strong>: Use when you need to execute the code at least once regardless of the condition</li>
        </ul>
        <CodeBlock>
{`// Example: Finding a number in an array
const numbers = [4, 8, 15, 16, 23, 42];
const target = 16;

// Using for loop (when you want to check all elements)
function findWithFor(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return \`Found \${target} at index \${i}\`;
    }
  }
  return \`\${target} not found\`;
}

// Using while loop (when you might exit early)
function findWithWhile(arr, target) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === target) {
      return \`Found \${target} at index \${i}\`;
    }
    i++;
  }
  return \`\${target} not found\`;
}

console.log(findWithFor(numbers, target)); // "Found 16 at index 3"
console.log(findWithWhile(numbers, target)); // "Found 16 at index 3"`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>for...of Loop (ES6)</SectionTitle>
        <p>
          The <code>for...of</code> loop iterates over the values of iterable objects like arrays, strings, maps, sets, etc.
        </p>
        
        <CodeBlock>
{`// Looping through an array
const fruits = ["apple", "banana", "orange", "grape"];
for (const fruit of fruits) {
  console.log(fruit);
}

// Looping through a string
const message = "Hello";
for (const char of message) {
  console.log(char);
}

// Looping through a Set
const uniqueNumbers = new Set([1, 2, 3, 2, 1]);
for (const num of uniqueNumbers) {
  console.log(num); // Outputs: 1, 2, 3 (no duplicates)
}

// Looping through a Map
const userRoles = new Map([
  ["John", "admin"],
  ["Jane", "editor"],
  ["Bob", "user"]
]);

for (const entry of userRoles) {
  console.log(entry); // Outputs: ["John", "admin"], ["Jane", "editor"], ["Bob", "user"]
}

// Destructuring in for...of
for (const [user, role] of userRoles) {
  console.log(\`\${user} is a \${role}\`);
}`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>for...in Loop</SectionTitle>
        <p>
          The <code>for...in</code> loop iterates over the enumerable properties of an object.
        </p>
        
        <CodeBlock>
{`// Looping through object properties
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  job: "Developer"
};

for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// Warning: for...in also iterates over inherited properties
const child = Object.create(person);
child.name = "Jane";

for (const key in child) {
  // This will include properties from person too
  console.log(key);
}

// To avoid inherited properties, use hasOwnProperty
for (const key in child) {
  if (child.hasOwnProperty(key)) {
    console.log(\`Own property: \${key}\`);
  }
}

// Note: for...in is not recommended for arrays
// It iterates over indices as strings and also includes non-numeric properties
const arr = [1, 2, 3];
arr.customProp = "test";

for (const key in arr) {
  console.log(key); // Outputs: "0", "1", "2", "customProp"
}`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Array Methods for Iteration</SectionTitle>
        <p>
          Modern JavaScript provides several array methods that handle iteration internally, making code more readable and functional.
        </p>
        
        <CodeBlock>
{`// forEach - executes a function for each element
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number, index) {
  console.log(\`Number at index \${index} is \${number}\`);
});

// With arrow function
numbers.forEach(number => console.log(number));

// map - creates a new array with the results of calling a function on every element
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - creates a new array with elements that pass a test
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce - reduces the array to a single value
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

// find - returns the first element that passes a test
const firstEven = numbers.find(number => number % 2 === 0);
console.log(firstEven); // 2

// some - tests if at least one element passes a test
const hasEven = numbers.some(number => number % 2 === 0);
console.log(hasEven); // true

// every - tests if all elements pass a test
const allEven = numbers.every(number => number % 2 === 0);
console.log(allEven); // false`}
        </CodeBlock>
      </Section>
      
      <Example title="Practical Examples with Array Methods">
        <p>
          Here are some practical examples of using array methods for common tasks:
        </p>
        <CodeBlock>
{`// Example 1: Processing a list of products
const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 699, inStock: true },
  { id: 3, name: "Tablet", price: 399, inStock: false },
  { id: 4, name: "Headphones", price: 199, inStock: true },
  { id: 5, name: "Keyboard", price: 49, inStock: false }
];

// Get only products that are in stock
const availableProducts = products.filter(product => product.inStock);
console.log(availableProducts.length); // 3

// Calculate total value of in-stock inventory
const inventoryValue = products
  .filter(product => product.inStock)
  .reduce((total, product) => total + product.price, 0);
console.log(inventoryValue); // 1897

// Format products for display
const productNames = products.map(product => {
  const status = product.inStock ? "In Stock" : "Out of Stock";
  return \`\${product.name} - $\${product.price} (\${status})\`;
});
console.log(productNames);

// Example 2: Working with user data
const users = [
  { id: 1, name: "John", age: 25, roles: ["user"] },
  { id: 2, name: "Jane", age: 32, roles: ["user", "admin"] },
  { id: 3, name: "Bob", age: 19, roles: ["user"] },
  { id: 4, name: "Alice", age: 28, roles: ["user", "editor"] }
];

// Find all admins
const admins = users.filter(user => user.roles.includes("admin"));
console.log(admins.map(admin => admin.name)); // ["Jane"]

// Check if all users are at least 18
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true

// Group users by age range
const ageGroups = users.reduce((groups, user) => {
  const ageGroup = user.age < 25 ? "under25" : "25andOver";
  groups[ageGroup] = groups[ageGroup] || [];
  groups[ageGroup].push(user);
  return groups;
}, {});
console.log(ageGroups);`}
        </CodeBlock>
      </Example>
      
      
      <Navigation 
        prevLink="/day5/arrays-objects" 
        nextLink="/" 
        indexLink="/day5" 
      />
    </Layout>
  );
};

export default Loops;