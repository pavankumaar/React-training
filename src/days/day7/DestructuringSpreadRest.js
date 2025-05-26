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

const DestructuringSpreadRest = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day7/arrow-functions-template-literals" 
        nextLink="/day7/array-methods" 
        indexLink="/day7"
        title="Destructuring, Spread & Rest"
        subtitle="Understand powerful ways to extract values from arrays and objects, and how to use the spread and rest operators"
      />
      
      <Section>
        <SectionTitle>Introduction to Destructuring</SectionTitle>
        <p>
          Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables. It makes your code more concise and readable.
        </p>
        <p>
          There are two types of destructuring:
        </p>
        <ul>
          <li><strong>Array destructuring</strong>: Extracts values from arrays</li>
          <li><strong>Object destructuring</strong>: Extracts properties from objects</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Array Destructuring</SectionTitle>
        <p>
          Array destructuring allows you to extract values from arrays and assign them to variables in a single statement.
        </p>
        
        <CodeBlock>
{`// Basic array destructuring
const colors = ["red", "green", "blue"];

// Traditional way to access array elements
const firstColor = colors[0];
const secondColor = colors[1];
const thirdColor = colors[2];
console.log(firstColor, secondColor, thirdColor);

// Using array destructuring
const [red, green, blue] = colors;
console.log(red, green, blue); // "red", "green", "blue"

// Skipping elements
const [primary, , tertiary] = colors;
console.log(primary, tertiary); // "red", "blue"

// Default values
const numbers = [1, 2];
const [first, second, third = 3] = numbers;
console.log(first, second, third); // 1, 2, 3

// Swapping variables without a temporary variable
let a = 5;
let b = 10;
console.log("Before swap:", a, b);

[a, b] = [b, a];
console.log("After swap:", a, b); // 10, 5`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day7EditorContent.arrayDestructuring.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>Object Destructuring</SectionTitle>
        <p>
          Object destructuring allows you to extract properties from objects and assign them to variables with the same name as the property.
        </p>
        
        <CodeBlock>
{`// Sample object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "coding", "hiking"]
};

// Traditional way to access object properties
const firstNameTraditional = person.firstName;
const lastNameTraditional = person.lastName;
console.log(firstNameTraditional, lastNameTraditional);

// Basic object destructuring
const { firstName, lastName } = person;
console.log(firstName, lastName); // "John", "Doe"

// Assigning to different variable names
const { firstName: fName, lastName: lName } = person;
console.log(fName, lName); // "John", "Doe"

// Default values
const { age, occupation = "Unknown" } = person;
console.log(age, occupation); // 30, "Unknown"

// Nested object destructuring
const { address: { city, country } } = person;
console.log(city, country); // "New York", "USA"

// Combining with array destructuring
const { hobbies: [firstHobby, secondHobby] } = person;
console.log(firstHobby, secondHobby); // "reading", "coding"`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day7EditorContent.objectDestructuring.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Example title="Destructuring in Function Parameters">
        <p>
          Destructuring is particularly useful in function parameters, especially when working with configuration objects or when you only need certain properties.
        </p>
        <CodeBlock>
{`// Without destructuring
function displayPerson(person) {
  console.log(person.name + " is " + person.age + " years old");
}

// With destructuring
function displayPerson({ name, age }) {
  console.log(name + " is " + age + " years old");
}

const person = { name: "Alice", age: 30, job: "Developer" };
displayPerson(person); // "Alice is 30 years old"

// With default values
function displayUser({ name, age, role = "User" }) {
  console.log(\`\${name} (\${age}) - \${role}\`);
}

displayUser({ name: "Bob", age: 25 }); // "Bob (25) - User"
displayUser({ name: "Charlie", age: 35, role: "Admin" }); // "Charlie (35) - Admin"

// Destructuring in arrow functions
const getFullName = ({ firstName, lastName }) => \`\${firstName} \${lastName}\`;
console.log(getFullName({ firstName: "John", lastName: "Doe" })); // "John Doe"

// Nested destructuring in parameters
function displayAddress({ name, address: { city, country } }) {
  console.log(\`\${name} lives in \${city}, \${country}\`);
}

displayAddress({
  name: "Alice",
  address: { city: "New York", country: "USA" }
}); // "Alice lives in New York, USA"`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>The Spread Operator (...)</SectionTitle>
        <p>
          The spread operator (<code>...</code>) allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected.
        </p>
        
        <CodeBlock>
{`// 1. Spreading arrays
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

// Combining arrays
const combined = [...numbers, ...moreNumbers];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Adding elements
const withExtra = [...numbers, 10, 20, ...moreNumbers];
console.log(withExtra); // [1, 2, 3, 10, 20, 4, 5, 6]

// Copying an array
const numbersCopy = [...numbers];
numbersCopy.push(4);
console.log(numbers); // [1, 2, 3] - original unchanged
console.log(numbersCopy); // [1, 2, 3, 4]

// 2. Spreading objects
const person = {
    name: "John",
    age: 30
};

const job = {
    title: "Developer",
    company: "Tech Co"
};

// Combining objects
const employee = { ...person, ...job };
console.log(employee); 
// { name: "John", age: 30, title: "Developer", company: "Tech Co" }

// Adding/overriding properties
const updatedPerson = { 
    ...person, 
    age: 31, // Override existing property
    city: "New York" // Add new property
};
console.log(updatedPerson); 
// { name: "John", age: 31, city: "New York" }`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day7EditorContent.spreadOperator.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>The Rest Parameter (...)</SectionTitle>
        <p>
          The rest parameter syntax (<code>...</code>) allows a function to accept an indefinite number of arguments as an array. It has the same syntax as the spread operator but is used in a different context.
        </p>
        
        <CodeBlock>
{`// 1. Basic rest parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20)); // 30
console.log(sum()); // 0

// 2. Rest parameter with other parameters
function displayInfo(name, age, ...hobbies) {
    console.log(\`Name: \${name}\`);
    console.log(\`Age: \${age}\`);
    console.log(\`Hobbies: \${hobbies.join(", ")}\`);
}

displayInfo("John", 30, "reading", "coding", "hiking");
// Name: John
// Age: 30
// Hobbies: reading, coding, hiking

// 3. Rest parameter in array destructuring
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(remaining); // [3, 4, 5]

// 4. Rest parameter in object destructuring
const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    occupation: "Developer",
    hobbies: ["reading", "traveling"]
};

const { name, age, ...otherInfo } = person;
console.log(name); // "Alice"
console.log(age); // 30
console.log(otherInfo); 
// { city: "New York", occupation: "Developer", hobbies: ["reading", "traveling"] }`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day7EditorContent.restParameters.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Example title="Spread vs. Rest: Understanding the Difference">
        <p>
          The spread and rest operators use the same syntax (<code>...</code>) but serve different purposes:
        </p>
        <ul>
          <li><strong>Spread operator</strong>: Expands an array or object into individual elements</li>
          <li><strong>Rest parameter</strong>: Collects multiple elements into a single array</li>
        </ul>
        <CodeBlock>
{`// Spread: Expands an array into individual elements
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

// Rest: Collects individual elements into an array
function collect(...items) {
  return items;
}
console.log(collect(1, 2, 3)); // [1, 2, 3]

// Example showing both in action
function addToArray(array, ...items) {
  return [...array, ...items];
}

const result = addToArray([1, 2], 3, 4, 5);
console.log(result); // [1, 2, 3, 4, 5]

// In this function:
// - Rest parameter (...items) collects 3, 4, 5 into an array
// - Spread operator (...array) expands [1, 2] into individual elements
// - Spread operator (...items) expands [3, 4, 5] into individual elements`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>Practical Applications</SectionTitle>
        
        <p><strong>1. Function Arguments:</strong></p>
        <CodeBlock>
{`// Using spread to pass array elements as separate arguments
function multiply(a, b, c) {
  return a * b * c;
}

const numbers = [2, 3, 4];
console.log(multiply(...numbers)); // 24

// Math functions with spread
const values = [5, 8, 2, 20, 3];
console.log(Math.max(...values)); // 20
console.log(Math.min(...values)); // 2`}
        </CodeBlock>
        
        <p><strong>2. Cloning and Merging:</strong></p>
        <CodeBlock>
{`// Deep cloning with JSON (for simple objects)
const original = { a: 1, b: { c: 2 } };
const deepClone = JSON.parse(JSON.stringify(original));

// Merging objects with specific overrides
const defaultSettings = {
  theme: 'light',
  fontSize: 16,
  showSidebar: true
};

function createSettings(userSettings) {
  return { ...defaultSettings, ...userSettings };
}

const mySettings = createSettings({ theme: 'dark', fontSize: 18 });
console.log(mySettings);
// { theme: 'dark', fontSize: 18, showSidebar: true }`}
        </CodeBlock>
        
        <p><strong>3. Working with Immutable Data:</strong></p>
        <CodeBlock>
{`// Updating an array immutably
const todos = [
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Learn React', completed: false },
  { id: 3, text: 'Build a project', completed: false }
];

// Toggle the completion status of todo with id 2
const updatedTodos = todos.map(todo => 
  todo.id === 2 ? { ...todo, completed: !todo.completed } : todo
);

console.log(updatedTodos[1].completed); // true
console.log(todos[1].completed); // false (original unchanged)

// Adding an item to an array immutably
const newTodo = { id: 4, text: 'Deploy application', completed: false };
const todosWithNew = [...todos, newTodo];

// Removing an item from an array immutably
const todosWithoutFirst = todos.filter(todo => todo.id !== 1);`}
        </CodeBlock>
      </Section>
      
      <Example title="Best Practices">
        <ul>
          <li><strong>Destructuring:</strong>
            <ul>
              <li>Use destructuring to make your code more concise and readable</li>
              <li>Provide default values for optional properties</li>
              <li>Use destructuring in function parameters for cleaner APIs</li>
              <li>Be careful with deeply nested destructuring as it can reduce readability</li>
            </ul>
          </li>
          <li><strong>Spread Operator:</strong>
            <ul>
              <li>Use spread for creating copies of arrays and objects</li>
              <li>Remember that spread only creates shallow copies</li>
              <li>Use spread to avoid mutating original data structures</li>
              <li>Combine spread with other operations for powerful transformations</li>
            </ul>
          </li>
          <li><strong>Rest Parameter:</strong>
            <ul>
              <li>Use rest parameters instead of the arguments object</li>
              <li>Place rest parameters at the end of the parameter list</li>
              <li>Use rest to create functions that accept a variable number of arguments</li>
              <li>Combine with destructuring for flexible parameter handling</li>
            </ul>
          </li>
        </ul>
        <CodeBlock>
{`// Good: Concise destructuring
const { name, age } = person;

// Bad: Unnecessary repetition
const name = person.name;
const age = person.age;

// Good: Default values
function greet({ name, greeting = 'Hello' }) {
  return \`\${greeting}, \${name}!\`;
}

// Good: Immutable updates with spread
const updatedUser = { ...user, age: user.age + 1 };

// Bad: Mutating the original
user.age += 1;

// Good: Rest parameter for variable arguments
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

// Bad: Using arguments object
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}`}
        </CodeBlock>
      </Example>
      
      <Navigation 
        prevLink="/day7/arrow-functions-template-literals" 
        nextLink="/day7/array-methods" 
        indexLink="/day7"
        title="Destructuring, Spread & Rest"
        subtitle="Understand powerful ways to extract values from arrays and objects, and how to use the spread and rest operators"
      />
    </Layout>
  );
};

export default DestructuringSpreadRest;