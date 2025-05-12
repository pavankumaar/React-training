import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import CompleteButton from '../../components/CompleteButton';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const Functions = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day5" 
        nextLink="/day5/arrays-objects" 
        indexLink="/day5" 
      />
      
      <Title>JavaScript Functions</Title>
      
      <Section>
        <SectionTitle>What are Functions?</SectionTitle>
        <p>
          Functions are blocks of reusable code designed to perform a specific task. They allow you to structure your code, make it reusable, and keep it organized.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Function Declarations</SectionTitle>
        <p>
          The most common way to define a function is using a function declaration:
        </p>
        
        <CodeBlock>
{`// Basic function declaration
function greet() {
  console.log("Hello, world!");
}

// Function with parameters
function greetPerson(name) {
  console.log("Hello, " + name + "!");
}

// Function with multiple parameters
function add(a, b) {
  return a + b;
}

// Function with default parameters (ES6)
function greetWithDefault(name = "Guest") {
  console.log("Hello, " + name + "!");
}

// Calling functions
greet(); // "Hello, world!"
greetPerson("John"); // "Hello, John!"
const sum = add(5, 3); // sum = 8
greetWithDefault(); // "Hello, Guest!"
greetWithDefault("Alice"); // "Hello, Alice!"`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Function Expressions</SectionTitle>
        <p>
          Functions can also be defined as expressions and assigned to variables:
        </p>
        
        <CodeBlock>
{`// Function expression
const square = function(x) {
  return x * x;
};

// Using the function
console.log(square(4)); // 16

// Named function expression
const factorial = function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5)); // 120

// The main difference between function declarations and expressions is hoisting:
// Function declarations are hoisted (can be used before they are defined)
// Function expressions are not hoisted`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Arrow Functions (ES6)</SectionTitle>
        <p>
          Arrow functions provide a shorter syntax for writing functions and do not have their own <code>this</code> context:
        </p>
        
        <CodeBlock>
{`// Basic arrow function
const greet = () => {
  console.log("Hello, world!");
};

// Arrow function with one parameter (parentheses can be omitted)
const greetPerson = name => {
  console.log("Hello, " + name + "!");
};

// Arrow function with multiple parameters
const add = (a, b) => {
  return a + b;
};

// Arrow function with implicit return (when the body is a single expression)
const square = x => x * x;

// Arrow functions with object literals need parentheses
const createPerson = (name, age) => ({ name, age });

// Using arrow functions
greet(); // "Hello, world!"
greetPerson("John"); // "Hello, John!"
console.log(add(5, 3)); // 8
console.log(square(4)); // 16
console.log(createPerson("Alice", 30)); // { name: "Alice", age: 30 }`}
        </CodeBlock>
      </Section>
      
      <Example title="When to Use Different Function Types">
        <p>
          Each function type has its use cases:
        </p>
        <ul>
          <li><strong>Function Declarations</strong>: For main functions that need to be hoisted</li>
          <li><strong>Function Expressions</strong>: When you need to assign a function to a variable or pass it as an argument</li>
          <li><strong>Arrow Functions</strong>: For short, concise functions, especially callbacks, and when you want to preserve the parent's <code>this</code> context</li>
        </ul>
        <CodeBlock>
{`// Example: Different function types in action
// 1. Function declaration for a main utility
function calculateTax(amount, rate) {
  return amount * rate;
}

// 2. Function expression for an event handler
const handleClick = function() {
  console.log("Button clicked!");
};

// 3. Arrow function for a callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 4. Arrow function preserving 'this'
const counter = {
  count: 0,
  increment: function() {
    // Using arrow function to preserve 'this'
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
};`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>Function Parameters and Arguments</SectionTitle>
        <p>
          Functions can accept parameters and handle them in various ways:
        </p>
        
        <CodeBlock>
{`// Basic parameters
function greet(firstName, lastName) {
  return \`Hello, \${firstName} \${lastName}!\`;
}

console.log(greet("John", "Doe")); // "Hello, John Doe!"

// Default parameters (ES6)
function greetWithDefault(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

console.log(greetWithDefault()); // "Hello, Guest!"
console.log(greetWithDefault("John")); // "Hello, John!"
console.log(greetWithDefault("John", "Hi")); // "Hi, John!"

// Rest parameters (ES6) - collect remaining arguments into an array
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Combining regular and rest parameters
function printInfo(name, age, ...hobbies) {
  console.log(\`Name: \${name}, Age: \${age}\`);
  console.log(\`Hobbies: \${hobbies.join(", ")}\`);
}

printInfo("Alice", 30, "reading", "hiking", "coding");
// Name: Alice, Age: 30
// Hobbies: reading, hiking, coding`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Function Scope and Closures</SectionTitle>
        <p>
          Functions create their own scope, and closures allow functions to retain access to variables from their parent scope:
        </p>
        
        <CodeBlock>
{`// Function scope
function outer() {
  const x = 10;
  
  function inner() {
    const y = 20;
    console.log(x + y); // Can access x from outer scope
  }
  
  inner();
  // console.log(y); // Error: y is not defined (can't access inner's variables)
}

// Closures - a function that remembers its outer variables
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Practical closure example: creating private variables
function createPerson(name) {
  // Private variable
  let age = 0;
  
  return {
    getName: function() {
      return name;
    },
    getAge: function() {
      return age;
    },
    setAge: function(newAge) {
      if (newAge >= 0) {
        age = newAge;
      }
    }
  };
}

const person = createPerson("John");
console.log(person.getName()); // "John"
person.setAge(30);
console.log(person.getAge()); // 30`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Immediately Invoked Function Expressions (IIFE)</SectionTitle>
        <p>
          An IIFE is a function that runs as soon as it is defined:
        </p>
        
        <CodeBlock>
{`// Basic IIFE
(function() {
  console.log("This function runs immediately!");
})();

// IIFE with parameters
(function(name) {
  console.log(\`Hello, \${name}!\`);
})("John");

// IIFE with arrow function
(() => {
  console.log("Arrow function IIFE");
})();

// IIFE to create private scope
const counter = (function() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1`}
        </CodeBlock>
      </Section>
      
      <CompleteButton />
      
      <Navigation 
        prevLink="/day5" 
        nextLink="/day5/arrays-objects" 
        indexLink="/day5" 
      />
    </Layout>
  );
};

export default Functions;