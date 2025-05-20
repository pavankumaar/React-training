import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';
import { day4EditorContent } from './day4_editor_content';

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const Variables = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day4" 
        nextLink="/day4/data-types" 
        indexLink="/day4"
        title="Variables in JavaScript"
        subtitle="Learn about JavaScript variables, including declaration, initialization, and scope"
      />
      
      <Section>
        <SectionTitle>What are Variables?</SectionTitle>
        <p>
          Variables are containers for storing data values. In JavaScript, we use the keywords <code>let</code>, <code>const</code>, and <code>var</code> to declare variables.
        </p>
        <p>
          Modern JavaScript encourages the use of <code>let</code> and <code>const</code> (introduced in ES6) over the older <code>var</code> keyword.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Declaring Variables with let</SectionTitle>
        <p>
          The <code>let</code> keyword is used to declare variables that can be reassigned later:
        </p>
        
        <CodeBlock>
{`// Declaring a variable
let age = 25;
console.log(age); // 25

// Reassigning a value
age = 26;
console.log(age); // 26

// You can also declare a variable without initializing it
let score;
console.log(score); // undefined

score = 100;
console.log(score); // 100`}
        </CodeBlock>
        
        <p>
          Variables declared with <code>let</code> have block scope, which means they are only accessible within the block they are defined in.
        </p>
        
        <CodeBlock>
{`{
  let blockScoped = "I'm only available inside this block";
  console.log(blockScoped); // Works fine
}

// console.log(blockScoped); // Error: blockScoped is not defined`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day4EditorContent.letVariables.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>Declaring Constants with const</SectionTitle>
        <p>
          The <code>const</code> keyword is used to declare variables whose values cannot be reassigned:
        </p>
        
        <CodeBlock>
{`// Declaring a constant
const PI = 3.14159;
console.log(PI); // 3.14159

// PI = 3.14; // Error: Assignment to constant variable`}
        </CodeBlock>
        
        <p>
          Like <code>let</code>, <code>const</code> also has block scope. However, there's an important distinction to make:
        </p>
        
        <p>
          While you cannot reassign a <code>const</code> variable, if the variable holds an object or array, you can still modify its properties or elements:
        </p>
        
        <CodeBlock>
{`const person = {
  name: "John",
  age: 30
};

// This is allowed
person.age = 31;
console.log(person); // { name: "John", age: 31 }

// But this is not allowed
// person = { name: "Jane", age: 25 }; // Error: Assignment to constant variable`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day4EditorContent.constVariables.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>The var Keyword (Legacy)</SectionTitle>
        <p>
          Before ES6, <code>var</code> was the only way to declare variables in JavaScript. While it's still supported, modern JavaScript favors <code>let</code> and <code>const</code>.
        </p>
        
        <CodeBlock>
{`// Declaring with var
var message = "Hello";
console.log(message); // "Hello"

// var variables can be redeclared
var message = "Hello again"; // No error
console.log(message); // "Hello again"

// var has function scope, not block scope
{
  var blockVar = "I'm visible outside the block";
}
console.log(blockVar); // "I'm visible outside the block"

// var variables are hoisted
console.log(hoisted); // undefined (not an error)
var hoisted = "I'm hoisted";`}
        </CodeBlock>
        
        <p>
          The main differences between <code>var</code> and <code>let</code>/<code>const</code> are:
        </p>
        
        <ul>
          <li><code>var</code> has function scope, while <code>let</code>/<code>const</code> have block scope</li>
          <li><code>var</code> variables can be redeclared, <code>let</code>/<code>const</code> cannot</li>
          <li><code>var</code> variables are hoisted and initialized with <code>undefined</code>, <code>let</code>/<code>const</code> are hoisted but not initialized (Temporal Dead Zone)</li>
        </ul>
        
        <TryEditorButton
          jsCode={day4EditorContent.varVariables.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Example title="When to use let vs const">
        <p>
          Use <code>const</code> by default, and only use <code>let</code> when you know the variable will need to be reassigned:
        </p>
        <ul>
          <li>Use <code>const</code> for values that should not change, like PI or configuration values</li>
          <li>Use <code>const</code> for object and array declarations (even if their contents will change)</li>
          <li>Use <code>let</code> for counters, values that will be reassigned, or variables that will change during runtime</li>
        </ul>
        <CodeBlock>
{`// Good practice
const API_URL = 'https://api.example.com';
const user = { name: 'John', role: 'Admin' };

// Counter example with let
let count = 0;
count += 1;`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>Variable Scope</SectionTitle>
        <p>
          Scope determines where variables are accessible in your code. JavaScript has several types of scope:
        </p>
        
        <ul>
          <li><strong>Global scope</strong>: Variables declared outside any function or block are globally accessible</li>
          <li><strong>Function scope</strong>: Variables declared within a function are only accessible inside that function</li>
          <li><strong>Block scope</strong>: Variables declared with <code>let</code> and <code>const</code> are only accessible within the block they are defined</li>
        </ul>
        
        <CodeBlock>
{`// Global scope
const globalVar = "I'm a global variable";

function exampleFunction() {
  // Function scope
  const functionVar = "I'm a function-scoped variable";
  console.log(globalVar); // Can access global variables
  
  {
    // Block scope
    const blockVar = "I'm a block-scoped variable";
    console.log(functionVar); // Can access function-scoped variables
  }
  
  // console.log(blockVar); // Error: blockVar is not defined
}

// console.log(functionVar); // Error: functionVar is not defined`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day4EditorContent.variableScope.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>Variable Naming Rules</SectionTitle>
        <p>
          When naming variables in JavaScript, follow these rules:
        </p>
        <ul>
          <li>Names can contain letters, digits, underscores, and dollar signs</li>
          <li>Names must begin with a letter, $ or _</li>
          <li>Names are case sensitive (<code>myVar</code> and <code>myvar</code> are different variables)</li>
          <li>Reserved words (like JavaScript keywords) cannot be used as names</li>
        </ul>
        
        <p>Common naming conventions:</p>
        <ul>
          <li>Use camelCase for variables and functions (e.g., <code>firstName</code>, <code>calculateTotal</code>)</li>
          <li>Use PascalCase for classes and components (e.g., <code>Person</code>, <code>UserProfile</code>)</li>
          <li>Use UPPER_SNAKE_CASE for constants (e.g., <code>MAX_SIZE</code>, <code>API_KEY</code>)</li>
        </ul>
      </Section>
      
      
      <Navigation 
        prevLink="/day4" 
        nextLink="/day4/data-types" 
        indexLink="/day4"
        title="Variables in JavaScript"
        subtitle="Learn about JavaScript variables, including declaration, initialization, and scope"
      />
    </Layout>
  );
};

export default Variables;