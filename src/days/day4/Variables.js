import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

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