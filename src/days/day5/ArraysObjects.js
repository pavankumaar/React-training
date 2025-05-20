import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';
import { day5EditorContent } from './day5_editor_content';


const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ArraysObjects = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day5/functions" 
        nextLink="/day5/loops" 
        indexLink="/day5"
        title="JavaScript Arrays and Objects"
        subtitle="Learn about arrays and objects for storing complex data"
      />
      
      <Title>JavaScript Arrays and Objects</Title>
      
      <Section>
        <SectionTitle>Arrays</SectionTitle>
        <p>
          Arrays are ordered collections of values that can be of any type. They are used to store multiple values in a single variable.
        </p>
        
        <CodeBlock>
{`// Creating arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];
const mixed = [1, "hello", true, null, { name: "John" }, [1, 2, 3]];

// Creating an empty array
const empty = [];
const anotherEmpty = new Array(); // Less common

// Accessing array elements (zero-based indexing)
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"
console.log(fruits[3]); // undefined (out of bounds)

// Modifying array elements
fruits[1] = "grape";
console.log(fruits); // ["apple", "grape", "orange"]

// Array properties
console.log(fruits.length); // 3

// Adding elements to an array
fruits.push("mango"); // Adds to the end
console.log(fruits); // ["apple", "grape", "orange", "mango"]

fruits.unshift("pear"); // Adds to the beginning
console.log(fruits); // ["pear", "apple", "grape", "orange", "mango"]

// Removing elements from an array
const lastFruit = fruits.pop(); // Removes from the end
console.log(lastFruit); // "mango"
console.log(fruits); // ["pear", "apple", "grape", "orange"]

const firstFruit = fruits.shift(); // Removes from the beginning
console.log(firstFruit); // "pear"
console.log(fruits); // ["apple", "grape", "orange"]`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day5EditorContent.arrayBasics.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>Common Array Methods</SectionTitle>
        <p>
          JavaScript arrays come with many built-in methods for manipulation and iteration:
        </p>
        
        <CodeBlock>
{`// Joining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Spread operator (ES6) for combining arrays
const combinedWithSpread = [...arr1, ...arr2];
console.log(combinedWithSpread); // [1, 2, 3, 4, 5, 6]

// Slicing arrays (extracting portions)
const numbers = [1, 2, 3, 4, 5];
const slice = numbers.slice(1, 4); // Start at index 1, end before index 4
console.log(slice); // [2, 3, 4]

// Splicing arrays (removing/replacing elements)
const letters = ["a", "b", "c", "d", "e"];
letters.splice(2, 2, "X", "Y"); // Start at index 2, remove 2 elements, insert "X" and "Y"
console.log(letters); // ["a", "b", "X", "Y", "e"]

// Finding elements
const fruits = ["apple", "banana", "orange", "apple"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.lastIndexOf("apple")); // 3
console.log(fruits.includes("orange")); // true

// Finding objects in arrays
const people = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" }
];

const jane = people.find(person => person.name === "Jane");
console.log(jane); // { id: 2, name: "Jane" }

const janeIndex = people.findIndex(person => person.name === "Jane");
console.log(janeIndex); // 1

// Sorting arrays
const fruits2 = ["banana", "apple", "orange", "grape"];
fruits2.sort();
console.log(fruits2); // ["apple", "banana", "grape", "orange"]

// Sorting numbers (be careful, default sort is lexicographic)
const nums = [40, 100, 1, 5, 25, 10];
nums.sort((a, b) => a - b); // Ascending order
console.log(nums); // [1, 5, 10, 25, 40, 100]

// Reversing arrays
nums.reverse();
console.log(nums); // [100, 40, 25, 10, 5, 1]

// Converting arrays to strings
console.log(fruits2.join(", ")); // "apple, banana, grape, orange"
console.log(fruits2.toString()); // "apple,banana,grape,orange"`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day5EditorContent.arrayMethods.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Example title="Array Destructuring">
        <p>
          ES6 introduced array destructuring, which provides a concise way to extract values from arrays:
        </p>
        <CodeBlock>
{`// Basic array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first); // "red"
console.log(second); // "green"
console.log(third); // "blue"

// Skipping elements
const [primary, , tertiary] = colors;
console.log(primary); // "red"
console.log(tertiary); // "blue"

// Rest pattern
const [head, ...tail] = colors;
console.log(head); // "red"
console.log(tail); // ["green", "blue"]

// Default values
const incomplete = ["red"];
const [red, green = "lime", blue = "navy"] = incomplete;
console.log(red); // "red"
console.log(green); // "lime" (default value)
console.log(blue); // "navy" (default value)

// Swapping variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>Objects</SectionTitle>
        <p>
          Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type.
        </p>
        
        <CodeBlock>
{`// Creating objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "hiking", "coding"]
};

// Accessing object properties
console.log(person.firstName); // "John"
console.log(person["lastName"]); // "Doe" (bracket notation)
console.log(person.address.city); // "New York"
console.log(person.hobbies[0]); // "reading"

// Adding new properties
person.phone = "555-1234";
person["dateOfBirth"] = "1992-05-15";

// Modifying properties
person.age = 31;
person.address.city = "Boston";

// Deleting properties
delete person.isEmployed;

// Checking if a property exists
console.log("email" in person); // true
console.log("salary" in person); // false
console.log(person.hasOwnProperty("age")); // true`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day5EditorContent.objectBasics.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>Object Methods</SectionTitle>
        <p>
          Objects can contain functions as properties, which are called methods:
        </p>
        
        <CodeBlock>
{`// Object with methods
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  // Shorthand method syntax (ES6)
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(2, 6)); // 12
console.log(calculator.divide(15, 3)); // 5

// The 'this' keyword in methods
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  changeName(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
};

console.log(person.fullName()); // "John Doe"
person.changeName("Jane", "Smith");
console.log(person.fullName()); // "Jane Smith"`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day5EditorContent.objectMethods.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Example title="Object Destructuring">
        <p>
          Similar to arrays, ES6 introduced object destructuring for extracting properties from objects:
        </p>
        <CodeBlock>
{`// Basic object destructuring
const person = {
  name: "Alice",
  age: 30,
  job: "Developer",
  address: {
    city: "New York",
    country: "USA"
  }
};

const { name, age, job } = person;
console.log(name); // "Alice"
console.log(age); // 30
console.log(job); // "Developer"

// Assigning to different variable names
const { name: fullName, job: profession } = person;
console.log(fullName); // "Alice"
console.log(profession); // "Developer"

// Default values
const { salary = 50000, experience = 5 } = person;
console.log(salary); // 50000 (default value)
console.log(experience); // 5 (default value)

// Nested destructuring
const { address: { city, country } } = person;
console.log(city); // "New York"
console.log(country); // "USA"

// Rest pattern with objects
const { name: personName, ...rest } = person;
console.log(personName); // "Alice"
console.log(rest); // { age: 30, job: "Developer", address: { city: "New York", country: "USA" } }

// Destructuring in function parameters
function printPersonInfo({ name, age, job = "Unknown" }) {
  console.log(\`\${name} is \${age} years old and works as a \${job}\`);
}

printPersonInfo(person); // "Alice is 30 years old and works as a Developer"`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>Object Methods and Properties</SectionTitle>
        <p>
          JavaScript provides several built-in methods for working with objects:
        </p>
        
        <CodeBlock>
{`// Object.keys() - returns an array of a given object's own property names
const person = { name: "John", age: 30, job: "Developer" };
console.log(Object.keys(person)); // ["name", "age", "job"]

// Object.values() - returns an array of a given object's own property values
console.log(Object.values(person)); // ["John", 30, "Developer"]

// Object.entries() - returns an array of a given object's own [key, value] pairs
console.log(Object.entries(person));
// [["name", "John"], ["age", 30], ["job", "Developer"]]

// Object.assign() - copies all enumerable own properties from source objects to a target object
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 3, c: 4 }
console.log(target); // { a: 1, b: 3, c: 4 } (target is modified)

// Spread operator (ES6) for object copying/merging
const merged = { ...target, ...{ d: 5, e: 6 } };
console.log(merged); // { a: 1, b: 3, c: 4, d: 5, e: 6 }

// Object.freeze() - prevents modifications to an object
const frozen = Object.freeze({ name: "John" });
// frozen.name = "Jane"; // Error in strict mode, silently fails otherwise
console.log(frozen.name); // "John"

// Object.seal() - prevents adding/removing properties, but allows modifying existing ones
const sealed = Object.seal({ name: "John" });
sealed.name = "Jane"; // Allowed
// sealed.age = 30; // Error in strict mode, silently fails otherwise
console.log(sealed.name); // "Jane"`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day5EditorContent.arrayOfObjects.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      
      
      <Navigation 
        prevLink="/day5/functions" 
        nextLink="/day5/loops" 
        indexLink="/day5" 
      />
    </Layout>
  );
};

export default ArraysObjects;