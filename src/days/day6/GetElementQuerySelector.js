import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';
import { day6EditorContent } from './day6_editor_content';

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const GetElementQuerySelector = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day6" 
        nextLink="/day6/event-handling" 
        indexLink="/day6"
        title="getElementById & querySelector"
        subtitle="Learn how to select and access DOM elements using various selector methods"
      />
      
      <Section>
        <SectionTitle>Introduction to DOM Selection</SectionTitle>
        <p>
          To manipulate HTML elements with JavaScript, you first need to select them. The Document Object Model (DOM) provides several methods to find and select elements in your HTML document.
        </p>
        <p>
          The most commonly used methods for selecting elements are:
        </p>
        <ul>
          <li><code>getElementById()</code> - selects an element by its ID</li>
          <li><code>querySelector()</code> - selects the first element that matches a CSS selector</li>
          <li><code>querySelectorAll()</code> - selects all elements that match a CSS selector</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>getElementById</SectionTitle>
        <p>
          The <code>getElementById()</code> method is the most straightforward way to select an element when you know its ID. It returns a single element or <code>null</code> if no matching element is found.
        </p>
        
        <CodeBlock>
{`// HTML
<div id="myDiv">This is a div with ID "myDiv"</div>
<p id="myParagraph">This is a paragraph with ID "myParagraph"</p>

// JavaScript
const divElement = document.getElementById('myDiv');
const paragraphElement = document.getElementById('myParagraph');

// Checking if the element exists
if (divElement) {
  console.log('Found the div element:', divElement);
}

// Accessing element properties
console.log(paragraphElement.textContent); // "This is a paragraph with ID "myParagraph""

// Element that doesn't exist
const nonExistentElement = document.getElementById('nonExistent');
console.log(nonExistentElement); // null`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day6EditorContent.getElementByIdExample.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>querySelector</SectionTitle>
        <p>
          The <code>querySelector()</code> method allows you to select elements using CSS selectors. It returns the first matching element or <code>null</code> if no match is found.
        </p>
        
        <CodeBlock>
{`// HTML
<div class="container">
  <p class="intro">First paragraph</p>
  <p class="intro">Second paragraph</p>
  <p class="outro">Third paragraph</p>
</div>

// JavaScript
// Select by class
const firstIntro = document.querySelector('.intro');
console.log(firstIntro.textContent); // "First paragraph"

// Select by tag
const firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent); // "First paragraph"

// Select by attribute
const elementWithAttribute = document.querySelector('[data-custom="value"]');

// More complex selectors
const nestedElement = document.querySelector('.container p.intro');
const firstListItem = document.querySelector('ul li:first-child');`}
        </CodeBlock>
        
        <p>
          Note that <code>querySelector()</code> only returns the first matching element. If you need all matching elements, use <code>querySelectorAll()</code>.
        </p>
        
        <TryEditorButton
          jsCode={day6EditorContent.querySelectorExample.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>querySelectorAll</SectionTitle>
        <p>
          The <code>querySelectorAll()</code> method works like <code>querySelector()</code> but returns a NodeList containing all matching elements.
        </p>
        
        <CodeBlock>
{`// HTML
<ul>
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>

// JavaScript
const allItems = document.querySelectorAll('.item');
console.log(allItems.length); // 3

// Loop through all items
allItems.forEach((item, index) => {
  console.log(\`Item \${index + 1}: \${item.textContent}\`);
});

// Convert NodeList to Array for more array methods
const itemsArray = Array.from(allItems);
const texts = itemsArray.map(item => item.textContent);
console.log(texts); // ["Item 1", "Item 2", "Item 3"]`}
        </CodeBlock>
        
        <p>
          A NodeList is similar to an array but has limited methods. It supports <code>forEach()</code>, but if you need other array methods like <code>map()</code> or <code>filter()</code>, convert it to an array using <code>Array.from()</code> or the spread operator <code>[...nodeList]</code>.
        </p>
      </Section>
      
      <Example title="Other Selector Methods">
        <p>
          While <code>getElementById</code> and <code>querySelector</code> are the most commonly used methods today, there are other selector methods you might encounter:
        </p>
        <ul>
          <li><code>getElementsByClassName()</code> - returns a live HTMLCollection of elements with the specified class</li>
          <li><code>getElementsByTagName()</code> - returns a live HTMLCollection of elements with the specified tag name</li>
          <li><code>getElementsByName()</code> - returns a NodeList of elements with the specified name attribute</li>
        </ul>
        <p>
          A "live" collection means it automatically updates when the DOM changes, unlike the static NodeList returned by <code>querySelectorAll()</code>.
        </p>
        <CodeBlock>
{`// getElementsByClassName example
const introElements = document.getElementsByClassName('intro');
console.log(introElements.length);

// getElementsByTagName example
const allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs.length);

// Converting HTMLCollection to Array
const paragraphsArray = Array.from(allParagraphs);`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day6EditorContent.selectorComparison.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Example>
      
      <Section>
        <SectionTitle>Selecting Multiple Elements</SectionTitle>
        <p>
          When working with multiple elements, you'll often need to iterate through them to apply changes:
        </p>
        
        <CodeBlock>
{`// Select all paragraphs
const paragraphs = document.querySelectorAll('p');

// Method 1: forEach
paragraphs.forEach(paragraph => {
  paragraph.style.color = 'blue';
});

// Method 2: for...of loop
for (const paragraph of paragraphs) {
  paragraph.classList.add('highlighted');
}

// Method 3: traditional for loop
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = \`Paragraph \${i + 1}\`;
}`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Selecting Elements Within Elements</SectionTitle>
        <p>
          You can narrow down your selection by selecting elements within other elements:
        </p>
        
        <CodeBlock>
{`// HTML
<div id="container">
  <p class="intro">Paragraph in container</p>
  <div class="nested">
    <p class="intro">Nested paragraph</p>
  </div>
</div>

// JavaScript
// First, select the container
const container = document.getElementById('container');

// Then, select elements within the container
const introInContainer = container.querySelector('.intro');
console.log(introInContainer.textContent); // "Paragraph in container"

// Select all paragraphs within the container
const allParagraphsInContainer = container.querySelectorAll('p');
console.log(allParagraphsInContainer.length); // 2`}
        </CodeBlock>
        
        <p>
          This approach is more efficient than searching the entire document, especially for complex pages.
        </p>
      </Section>
      
      <Example title="Best Practices for DOM Selection">
        <ul>
          <li><strong>Use IDs for unique elements</strong> - <code>getElementById()</code> is the fastest selector method</li>
          <li><strong>Use querySelector for complex selections</strong> - it's more flexible than older methods</li>
          <li><strong>Cache DOM selections</strong> - store elements in variables instead of selecting them repeatedly</li>
          <li><strong>Check if elements exist</strong> before manipulating them to avoid errors</li>
          <li><strong>Use specific selectors</strong> to improve performance on large pages</li>
        </ul>
        <CodeBlock>
{`// Bad: Selecting the same element multiple times
document.getElementById('myButton').style.color = 'blue';
document.getElementById('myButton').disabled = true;
document.getElementById('myButton').textContent = 'Clicked';

// Good: Select once and reuse
const myButton = document.getElementById('myButton');
myButton.style.color = 'blue';
myButton.disabled = true;
myButton.textContent = 'Clicked';

// Good: Check if element exists
const element = document.querySelector('.optional-element');
if (element) {
  // Safe to manipulate the element
  element.classList.add('active');
}`}
        </CodeBlock>
      </Example>
      
      <Navigation 
        prevLink="/day6" 
        nextLink="/day6/event-handling" 
        indexLink="/day6"
        title="getElementById & querySelector"
        subtitle="Learn how to select and access DOM elements using various selector methods"
      />
    </Layout>
  );
};

export default GetElementQuerySelector;