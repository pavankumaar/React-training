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

const OperatorsConditionals = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day4/data-types" 
        nextLink="/day5" 
        indexLink="/day4"
        title="JavaScript Operators and Conditionals"
        subtitle="Learn about operators and conditional statements in JavaScript"
      />
      
      <Title>JavaScript Operators and Conditionals</Title>
      
      <Section>
        <SectionTitle>Arithmetic Operators</SectionTitle>
        <p>
          JavaScript provides operators for performing arithmetic operations:
        </p>
        
        <CodeBlock>
{`// Basic arithmetic operators
const sum = 10 + 5; // 15 (addition)
const difference = 10 - 5; // 5 (subtraction)
const product = 10 * 5; // 50 (multiplication)
const quotient = 10 / 5; // 2 (division)
const remainder = 10 % 3; // 1 (modulus - remainder after division)
const exponent = 10 ** 2; // 100 (exponentiation - 10 to the power of 2)

// Increment and decrement
let count = 5;
count++; // post-increment (count is now 6)
++count; // pre-increment (count is now 7)
count--; // post-decrement (count is now 6)
--count; // pre-decrement (count is now 5)

// The difference between post and pre increment/decrement
let a = 5;
let b = a++; // b = 5, a = 6 (value is assigned before incrementing)
let c = 5;
let d = ++c; // d = 6, c = 6 (value is assigned after incrementing)`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Assignment Operators</SectionTitle>
        <p>
          Assignment operators assign values to JavaScript variables:
        </p>
        
        <CodeBlock>
{`// Basic assignment
let x = 10;

// Compound assignment operators
x += 5; // x = x + 5 (x is now 15)
x -= 3; // x = x - 3 (x is now 12)
x *= 2; // x = x * 2 (x is now 24)
x /= 4; // x = x / 4 (x is now 6)
x %= 4; // x = x % 4 (x is now 2)
x **= 3; // x = x ** 3 (x is now 8)

// Other compound assignments
let text = "Hello";
text += " World"; // text = text + " World" (text is now "Hello World")`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Comparison Operators</SectionTitle>
        <p>
          Comparison operators compare values and return boolean results:
        </p>
        
        <CodeBlock>
{`// Equality operators
console.log(5 == 5); // true (loose equality - checks value only)
console.log(5 == "5"); // true (loose equality with type conversion)
console.log(5 === 5); // true (strict equality - checks value and type)
console.log(5 === "5"); // false (strict equality - different types)
console.log(5 != 8); // true (loose inequality)
console.log(5 !== "5"); // true (strict inequality)

// Relational operators
console.log(5 > 3); // true (greater than)
console.log(5 >= 5); // true (greater than or equal to)
console.log(5 < 10); // true (less than)
console.log(5 <= 4); // false (less than or equal to)

// Best practice: Always use strict equality (=== and !==) to avoid unexpected type conversions`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Logical Operators</SectionTitle>
        <p>
          Logical operators perform logical operations and return boolean results:
        </p>
        
        <CodeBlock>
{`// Logical AND (&&) - returns true if both operands are true
console.log(true && true); // true
console.log(true && false); // false
console.log(5 > 3 && 10 > 5); // true

// Logical OR (||) - returns true if at least one operand is true
console.log(true || false); // true
console.log(false || false); // false
console.log(5 > 10 || 10 > 5); // true

// Logical NOT (!) - returns the opposite boolean value
console.log(!true); // false
console.log(!false); // true
console.log(!(5 > 10)); // true

// Short-circuit evaluation
// With &&, if the first operand is false, the second is not evaluated
let a = false && someFunction(); // someFunction() is not called

// With ||, if the first operand is true, the second is not evaluated
let b = true || someFunction(); // someFunction() is not called

// Nullish coalescing operator (??) - returns right operand when left is null or undefined
const value = null ?? "default"; // "default"
const count = 0 ?? 42; // 0 (0 is not null or undefined)`}
        </CodeBlock>
      </Section>
      
      <Example title="Logical Operators for Default Values">
        <p>
          Logical operators are commonly used for setting default values and conditional assignments:
        </p>
        <CodeBlock>
{`// Using || for default values (be careful with falsy values like 0 or "")
function greet(name) {
  name = name || "Guest";
  return \`Hello, \${name}!\`;
}

console.log(greet("John")); // "Hello, John!"
console.log(greet("")); // "Hello, Guest!" (empty string is falsy)

// Using ?? for default values (better for cases where 0 or "" are valid)
function calculateTotal(price, tax) {
  tax = tax ?? 0.1; // Use 0.1 (10%) as default tax rate
  return price * (1 + tax);
}

console.log(calculateTotal(100, 0.2)); // 120
console.log(calculateTotal(100, 0)); // 100 (tax is explicitly 0)
console.log(calculateTotal(100)); // 110 (default tax applied)`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>Conditional Statements: if, else if, else</SectionTitle>
        <p>
          Conditional statements execute different code blocks based on different conditions:
        </p>
        
        <CodeBlock>
{`// Basic if statement
const age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

// if...else statement
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// if...else if...else statement
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Nested if statements
const isLoggedIn = true;
const isAdmin = true;

if (isLoggedIn) {
  console.log("Welcome back!");
  
  if (isAdmin) {
    console.log("You have admin privileges");
  } else {
    console.log("You have user privileges");
  }
}`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Ternary Operator</SectionTitle>
        <p>
          The ternary operator is a shorthand for the if...else statement:
        </p>
        
        <CodeBlock>
{`// Syntax: condition ? expressionIfTrue : expressionIfFalse

// Example 1: Simple ternary
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Example 2: Assigning a value
const score = 75;
const result = score >= 60 ? "pass" : "fail";
console.log(result); // "pass"

// Example 3: Using in a template literal
const name = "John";
const greeting = \`Hello, \${name ? name : "Guest"}!\`;
console.log(greeting); // "Hello, John!"

// Example 4: Nested ternary (use with caution for readability)
const grade = score >= 90 ? "A" :
             score >= 80 ? "B" :
             score >= 70 ? "C" :
             score >= 60 ? "D" : "F";
console.log(grade); // "C"`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Switch Statement</SectionTitle>
        <p>
          The switch statement evaluates an expression and matches it against multiple case clauses:
        </p>
        
        <CodeBlock>
{`// Basic switch statement
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Mid-week");
    break;
  case "Friday":
    console.log("End of the work week");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}

// The break statement is important to prevent fall-through
// Without break, execution continues to the next case

// Switch with fall-through (intentional)
const month = 2;
let season = "";

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Fall";
    break;
  default:
    season = "Invalid month";
}

console.log(season); // "Winter"`}
        </CodeBlock>
      </Section>
      
      
      <Navigation 
        prevLink="/day4/data-types" 
        nextLink="/day5" 
        indexLink="/day4" 
      />
    </Layout>
  );
};

export default OperatorsConditionals;