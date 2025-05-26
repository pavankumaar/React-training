import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';
import { day7EditorContent } from './day7_editor_content';

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ArrowFunctionsTemplateLiterals = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day7" 
        nextLink="/day7/destructuring-spread-rest" 
        indexLink="/day7"
        title="Arrow Functions & Template Literals"
        subtitle="Learn about concise function syntax and improved string formatting in modern JavaScript"
      />
      
      <Section>
        <SectionTitle>Introduction to ES6+ Features</SectionTitle>
        <p>
          ECMAScript 2015 (ES6) introduced many powerful features to JavaScript that make code more concise, readable, and expressive. Two of the most widely used features are arrow functions and template literals.
        </p>
        <p>
          These features are now supported in all modern browsers and have become standard in modern JavaScript development.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Arrow Functions</SectionTitle>
        <p>
          Arrow functions provide a shorter syntax for writing functions in JavaScript. They also have some special behavior regarding the <code>this</code> keyword.
        </p>
        
        <CodeBlock>
{`// Traditional function expression
const greet = function(name) {
  return "Hello, " + name + "!";
};

// Arrow function with block body
const greetArrow = (name) => {
  return "Hello, " + name + "!";
};

// Arrow function with implicit return (no curly braces)
const greetShort = (name) => "Hello, " + name + "!";

// Arrow function with single parameter (parentheses optional)
const greetSimple = name => "Hello, " + name + "!";

// Arrow function with no parameters (parentheses required)
const sayHi = () => "Hi there!";

// Arrow function with multiple parameters
const add = (a, b) => a + b;

// Using all these functions
console.log(greet("World"));        // "Hello, World!"
console.log(greetArrow("Arrow"));   // "Hello, Arrow!"
console.log(greetShort("Short"));   // "Hello, Short!"
console.log(greetSimple("Simple")); // "Hello, Simple!"
console.log(sayHi());               // "Hi there!"
console.log(add(5, 3));             // 8`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day7EditorContent.arrowFunctions.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>Arrow Functions and 'this'</SectionTitle>
        <p>
          One of the key features of arrow functions is that they don't have their own <code>this</code> binding. Instead, they inherit <code>this</code> from the surrounding code (lexical scoping).
        </p>
        
        <CodeBlock>
{`// Traditional function and 'this'
const person = {
  name: "John",
  friends: ["Alice", "Bob", "Charlie"],
  
  // Method using traditional function
  printFriendsTraditional: function() {
    console.log(this.name + "'s friends:");
    
    // 'this' is lost in the inner function
    this.friends.forEach(function(friend) {
      // 'this' refers to the global object or undefined in strict mode
      console.log(this.name + " knows " + friend); // Error: this.name is undefined
    });
  },
  
  // Method using arrow function
  printFriendsArrow: function() {
    console.log(this.name + "'s friends:");
    
    // Arrow function preserves 'this' from the outer scope
    this.friends.forEach(friend => {
      console.log(this.name + " knows " + friend); // Works correctly
    });
  }
};

// This will cause an error
// person.printFriendsTraditional();

// This works correctly
person.printFriendsArrow();`}
        </CodeBlock>
        
        <p>
          This behavior makes arrow functions particularly useful for callbacks, event handlers, and methods that need to access <code>this</code> from their parent scope.
        </p>
      </Section>
      
      <Example title="When to Use Arrow Functions vs. Traditional Functions">
        <p>
          Arrow functions are not a replacement for all traditional functions. Each has its use cases:
        </p>
        <ul>
          <li><strong>Use arrow functions when:</strong>
            <ul>
              <li>You need a short, concise function syntax</li>
              <li>You want to preserve the parent's <code>this</code> context (callbacks, event handlers)</li>
              <li>You're using functional programming patterns (map, filter, reduce)</li>
            </ul>
          </li>
          <li><strong>Use traditional functions when:</strong>
            <ul>
              <li>You need to use the function as a constructor (with <code>new</code>)</li>
              <li>You need access to the <code>arguments</code> object</li>
              <li>You need the function to have its own <code>this</code> context</li>
              <li>You need to use <code>yield</code> (in generator functions)</li>
            </ul>
          </li>
        </ul>
        <CodeBlock>
{`// Arrow functions can't be used as constructors
function Person(name) {
  this.name = name;
}
const john = new Person("John"); // Works

const ArrowPerson = (name) => {
  this.name = name;
};
// const jane = new ArrowPerson("Jane"); // Error: ArrowPerson is not a constructor

// Arrow functions don't have their own 'arguments' object
function sum() {
  console.log(arguments); // [1, 2, 3, 4, 5]
  return Array.from(arguments).reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// With arrow functions, use rest parameters instead
const arrowSum = (...args) => {
  // console.log(arguments); // Error: arguments is not defined
  return args.reduce((total, num) => total + num, 0);
};
console.log(arrowSum(1, 2, 3, 4, 5)); // 15`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day7EditorContent.arrowVsTraditional.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Example>
      
      <Section>
        <SectionTitle>Template Literals</SectionTitle>
        <p>
          Template literals (also called template strings) provide an easier way to create strings with embedded expressions and multi-line content.
        </p>
        
        <CodeBlock>
{`// Traditional string concatenation
const name = "Alice";
const age = 30;
const greeting1 = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(greeting1);

// Template literal (with backticks)
const greeting2 = \`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(greeting2);

// Multi-line strings with traditional approach
const multiLine1 = "This is line 1.\\n" +
                  "This is line 2.\\n" +
                  "This is line 3.";
console.log(multiLine1);

// Multi-line strings with template literals
const multiLine2 = \`This is line 1.
This is line 2.
This is line 3.\`;
console.log(multiLine2);

// Expressions in template literals
const a = 5;
const b = 10;
console.log(\`The sum of \${a} and \${b} is \${a + b}.\`);
console.log(\`\${a} times \${b} equals \${a * b}.\`);`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day7EditorContent.templateLiterals.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>Advanced Template Literal Features</SectionTitle>
        <p>
          Template literals can do more than just basic string interpolation:
        </p>
        
        <CodeBlock>
{`// Conditional expressions in template literals
const isLoggedIn = true;
const status = \`User is \${isLoggedIn ? 'logged in' : 'logged out'}.\`;
console.log(status); // "User is logged in."

// Function calls in template literals
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const name = "alice";
console.log(\`Hello, \${capitalize(name)}!\`); // "Hello, Alice!"

// Nesting template literals
const a = 5;
const b = 10;
const nested = \`The result is: \${a > b ? \`\${a} is greater than \${b}\` : \`\${a} is not greater than \${b}\`}\`;
console.log(nested); // "The result is: 5 is not greater than 10"

// Tagged template literals
function highlight(strings, ...values) {
    let result = '';
    strings.forEach((string, i) => {
        result += string;
        if (i < values.length) {
            result += \`<strong>\${values[i]}</strong>\`;
        }
    });
    return result;
}

const name2 = "Alice";
const age2 = 30;
const highlighted = highlight\`Hello, my name is \${name2} and I am \${age2} years old.\`;
console.log(highlighted);
// "Hello, my name is <strong>Alice</strong> and I am <strong>30</strong> years old."`}
        </CodeBlock>
      </Section>
      
      <Example title="Tagged Template Literals">
        <p>
          Tagged template literals are a more advanced feature that allows you to parse template literals with a function. The function (tag) receives the template's string parts and expressions as separate arguments.
        </p>
        <CodeBlock>
{`// Basic tagged template literal
function tag(strings, ...values) {
  console.log('Strings:', strings);
  console.log('Values:', values);
  
  // You can process the strings and values however you want
  let result = '';
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += values[i];
    }
  });
  return result;
}

const name = "Alice";
const age = 30;
const result = tag\`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(result);

// Practical example: HTML escaping
function safeHTML(strings, ...values) {
  const escapeHTML = (str) => {
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
  };
  
  let result = strings[0];
  for (let i = 0; i < values.length; i++) {
    // Escape any user-provided values
    result += escapeHTML(String(values[i])) + strings[i + 1];
  }
  return result;
}

const userInput = '<script>alert("XSS attack!")</script>';
const safeOutput = safeHTML\`<div>User input: \${userInput}</div>\`;
console.log(safeOutput);
// "<div>User input: &lt;script&gt;alert(&quot;XSS attack!&quot;)&lt;/script&gt;</div>"`}
        </CodeBlock>
        <p>
          Tagged template literals are used in many modern JavaScript libraries, such as styled-components for CSS-in-JS and GraphQL for query construction.
        </p>
      </Example>
      
      <Section>
        <SectionTitle>Combining Arrow Functions and Template Literals</SectionTitle>
        <p>
          Arrow functions and template literals work great together, especially for functional programming patterns:
        </p>
        
        <CodeBlock>
{`// Array of users
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 }
];

// Map users to formatted strings
const userList = users.map(user => \`\${user.name} is \${user.age} years old\`);
console.log(userList);
// ["Alice is 25 years old", "Bob is 30 years old", "Charlie is 35 years old"]

// Filter and map in one chain
const olderUsers = users
  .filter(user => user.age > 25)
  .map(user => \`\${user.name} (ID: \${user.id})\`);
console.log(olderUsers);
// ["Bob (ID: 2)", "Charlie (ID: 3)"]

// Creating HTML elements
const createUserElement = user => \`
  <div class="user" id="user-\${user.id}">
    <h3>\${user.name}</h3>
    <p>Age: \${user.age}</p>
    <button onclick="editUser(\${user.id})">Edit</button>
  </div>
\`;

const userElements = users.map(createUserElement).join('');
console.log(userElements);`}
        </CodeBlock>
      </Section>
      
      <Example title="Best Practices">
        <ul>
          <li><strong>Arrow Functions:</strong>
            <ul>
              <li>Use arrow functions for short callbacks and anonymous functions</li>
              <li>Use implicit return for simple expressions</li>
              <li>Be careful with <code>this</code> in object methods</li>
              <li>Don't use arrow functions for methods that need their own <code>this</code></li>
            </ul>
          </li>
          <li><strong>Template Literals:</strong>
            <ul>
              <li>Use template literals for string interpolation instead of concatenation</li>
              <li>Use template literals for multi-line strings</li>
              <li>Consider tagged templates for complex string processing</li>
              <li>Be mindful of whitespace in multi-line template literals</li>
            </ul>
          </li>
        </ul>
        <CodeBlock>
{`// Good: Arrow function for callback
[1, 2, 3].map(x => x * 2);

// Bad: Arrow function for object method
const obj = {
  value: 42,
  getValue: () => this.value // 'this' is not the object
};

// Good: Traditional function for object method
const obj2 = {
  value: 42,
  getValue() { // Shorthand method syntax
    return this.value;
  }
};

// Good: Template literal for interpolation
const greeting = \`Hello, \${name}!\`;

// Bad: Unnecessary template literal
const simple = \`Hello\`; // Just use 'Hello'

// Good: Template literal for HTML
const html = \`
  <div>
    <h1>\${title}</h1>
    <p>\${content}</p>
  </div>
\`;`}
        </CodeBlock>
      </Example>
      
      <Navigation 
        prevLink="/day7" 
        nextLink="/day7/destructuring-spread-rest" 
        indexLink="/day7"
        title="Arrow Functions & Template Literals"
        subtitle="Learn about concise function syntax and improved string formatting in modern JavaScript"
      />
    </Layout>
  );
};

export default ArrowFunctionsTemplateLiterals;