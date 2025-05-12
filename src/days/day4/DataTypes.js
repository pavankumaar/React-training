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

const DataTypes = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day4/variables" 
        nextLink="/day4/operators-conditionals" 
        indexLink="/day4" 
      />
      
      <Title>JavaScript Data Types</Title>
      
      <Section>
        <SectionTitle>Primitive Data Types</SectionTitle>
        <p>
          JavaScript has seven primitive data types:
        </p>
        <ul>
          <li><strong>String</strong>: Represents textual data</li>
          <li><strong>Number</strong>: Represents numeric values</li>
          <li><strong>Boolean</strong>: Represents logical values (true or false)</li>
          <li><strong>Undefined</strong>: Represents a variable that has been declared but not assigned a value</li>
          <li><strong>Null</strong>: Represents the intentional absence of any object value</li>
          <li><strong>Symbol</strong>: Represents a unique identifier</li>
          <li><strong>BigInt</strong>: Represents integers with arbitrary precision</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Strings</SectionTitle>
        <p>
          Strings are used to represent text and are created using single quotes, double quotes, or backticks (template literals):
        </p>
        
        <CodeBlock>
{`// String examples
const singleQuotes = 'Hello, world!';
const doubleQuotes = "Hello, world!";
const templateLiteral = \`Hello, world!\`;

// String with escape characters
const withQuote = 'It\\'s a beautiful day';
const withNewLine = 'First line\\nSecond line';

// Template literals allow expressions and multi-line strings
const name = 'John';
const greeting = \`Hello, \${name}!
Welcome to JavaScript.\`;

console.log(greeting);
// Output:
// Hello, John!
// Welcome to JavaScript.`}
        </CodeBlock>
        
        <p>
          Strings have many built-in methods for manipulation:
        </p>
        
        <CodeBlock>
{`const text = 'JavaScript is amazing';

// String properties and methods
console.log(text.length); // 22
console.log(text.toUpperCase()); // JAVASCRIPT IS AMAZING
console.log(text.toLowerCase()); // javascript is amazing
console.log(text.indexOf('is')); // 11
console.log(text.includes('amazing')); // true
console.log(text.slice(0, 10)); // JavaScript
console.log(text.split(' ')); // ['JavaScript', 'is', 'amazing']`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Numbers</SectionTitle>
        <p>
          The Number type represents both integer and floating-point numbers:
        </p>
        
        <CodeBlock>
{`// Number examples
const integer = 42;
const float = 3.14;
const negative = -10;
const exponent = 2.5e6; // 2.5 million
const binary = 0b1010; // 10 in decimal
const octal = 0o744; // 484 in decimal
const hex = 0xFF; // 255 in decimal

// Special numeric values
const infinity = Infinity;
const negInfinity = -Infinity;
const notANumber = NaN;

// Number methods
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(3.14)); // false
console.log(Number.parseFloat('3.14')); // 3.14
console.log((3.14159).toFixed(2)); // "3.14"
console.log((1000000).toLocaleString()); // "1,000,000" (depends on locale)`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Booleans</SectionTitle>
        <p>
          Booleans represent logical values: true or false:
        </p>
        
        <CodeBlock>
{`// Boolean examples
const isActive = true;
const isLoggedIn = false;

// Expressions that evaluate to booleans
const isGreater = 10 > 5; // true
const isEqual = 10 === 10; // true
const hasPermission = Boolean(user.permissions); // converts to true if user.permissions exists`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Undefined and Null</SectionTitle>
        <p>
          <code>undefined</code> and <code>null</code> are special values that represent the absence of a value:
        </p>
        
        <CodeBlock>
{`// undefined examples
let variable;
console.log(variable); // undefined

// null examples
const emptyValue = null;
console.log(emptyValue); // null

// Checking for undefined or null
console.log(variable === undefined); // true
console.log(emptyValue === null); // true

// The difference between undefined and null
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is considered a bug in JavaScript)`}
        </CodeBlock>
      </Section>
      
      <Example title="Type Checking and Conversion">
        <p>
          JavaScript provides several ways to check and convert between types:
        </p>
        <CodeBlock>
{`// Using typeof operator
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects in JavaScript)
console.log(typeof function() {}); // "function"

// Type conversion
console.log(String(42)); // "42"
console.log(Number("42")); // 42
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true

// Implicit conversion (be careful with these)
console.log("42" + 1); // "421" (string concatenation)
console.log("42" - 1); // 41 (numeric operation)
console.log("42" == 42); // true (loose equality)
console.log("42" === 42); // false (strict equality)`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>Reference Types: Objects</SectionTitle>
        <p>
          Unlike primitive types, objects are reference types. The main reference types in JavaScript are:
        </p>
        <ul>
          <li><strong>Object</strong>: Collections of key-value pairs</li>
          <li><strong>Array</strong>: Ordered collections of values</li>
          <li><strong>Function</strong>: Callable objects</li>
          <li><strong>Date</strong>, <strong>RegExp</strong>, <strong>Map</strong>, <strong>Set</strong>, etc.</li>
        </ul>
        
        <CodeBlock>
{`// Object example
const person = {
  name: 'Alice',
  age: 30,
  isEmployed: true,
  skills: ['JavaScript', 'React', 'Node.js'],
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Accessing object properties
console.log(person.name); // "Alice"
console.log(person['age']); // 30
console.log(person.skills[0]); // "JavaScript"
console.log(person.address.city); // "New York"

// Array example
const colors = ['red', 'green', 'blue'];
console.log(colors[0]); // "red"
console.log(colors.length); // 3

// Function example
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('Bob')); // "Hello, Bob!"`}
        </CodeBlock>
      </Section>
      
      <CompleteButton />
      
      <Navigation 
        prevLink="/day4/variables" 
        nextLink="/day4/operators-conditionals" 
        indexLink="/day4" 
      />
    </Layout>
  );
};

export default DataTypes;