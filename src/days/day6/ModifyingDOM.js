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

const ModifyingDOM = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day6/event-handling" 
        nextLink="/day7" 
        indexLink="/day6"
        title="Modifying DOM Elements"
        subtitle="Learn how to dynamically create, modify, and remove elements from the DOM"
      />
      
      <Section>
        <SectionTitle>Introduction to DOM Manipulation</SectionTitle>
        <p>
          DOM manipulation allows you to dynamically change the content, structure, and style of a webpage. This is a fundamental aspect of creating interactive web applications.
        </p>
        <p>
          With JavaScript, you can:
        </p>
        <ul>
          <li>Create new HTML elements</li>
          <li>Modify existing elements' content and attributes</li>
          <li>Change element styles</li>
          <li>Remove elements from the page</li>
          <li>Move elements around the DOM</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Creating New Elements</SectionTitle>
        <p>
          To create new elements and add them to the DOM, you'll typically follow these steps:
        </p>
        <ol>
          <li>Create the element using <code>document.createElement()</code></li>
          <li>Set its properties (content, attributes, styles)</li>
          <li>Append it to an existing element in the DOM</li>
        </ol>
        
        <CodeBlock>
{`// 1. Create a new element
const newParagraph = document.createElement('p');

// 2. Add content to the element
newParagraph.textContent = 'This is a dynamically created paragraph.';

// Alternative: Using innerHTML (can include HTML tags)
// newParagraph.innerHTML = 'This is <strong>dynamically</strong> created.';

// 3. Set attributes
newParagraph.id = 'dynamic-paragraph';
newParagraph.className = 'highlight';
newParagraph.setAttribute('data-created', 'true');

// 4. Add styles
newParagraph.style.color = 'blue';
newParagraph.style.backgroundColor = 'lightyellow';
newParagraph.style.padding = '10px';
newParagraph.style.borderRadius = '5px';

// 5. Append to the DOM
const container = document.getElementById('container');
container.appendChild(newParagraph);

// 6. Creating and appending in one go
container.appendChild(document.createElement('hr'));

// 7. Creating a more complex element
const newButton = document.createElement('button');
newButton.textContent = 'Click Me';
newButton.className = 'btn';
newButton.addEventListener('click', function() {
  alert('Button clicked!');
});
container.appendChild(newButton);`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day6EditorContent.creatingElements.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>Modifying Existing Elements</SectionTitle>
        <p>
          Once you've selected an element, you can modify its content, attributes, and styles:
        </p>
        
        <CodeBlock>
{`// Select an element
const paragraph = document.getElementById('myParagraph');

// Modifying content
paragraph.textContent = 'New text content';
paragraph.innerHTML = 'Text with <strong>bold</strong> and <em>italic</em> parts';

// Modifying attributes
paragraph.id = 'newId';
paragraph.className = 'highlight';
paragraph.setAttribute('data-custom', 'value');
paragraph.removeAttribute('hidden');

// Checking attributes
console.log(paragraph.hasAttribute('data-custom')); // true
console.log(paragraph.getAttribute('class')); // "highlight"

// Working with classes
paragraph.classList.add('active');
paragraph.classList.remove('old-class');
paragraph.classList.toggle('visible'); // Add if missing, remove if present
paragraph.classList.replace('old-class', 'new-class');
console.log(paragraph.classList.contains('active')); // true

// Modifying styles
paragraph.style.color = 'blue';
paragraph.style.fontSize = '18px';
paragraph.style.margin = '10px 0';
paragraph.style.display = 'block';

// Getting computed styles
const computedStyle = window.getComputedStyle(paragraph);
console.log(computedStyle.color);
console.log(computedStyle.fontSize);`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day6EditorContent.modifyingElements.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>Removing Elements</SectionTitle>
        <p>
          There are several ways to remove elements from the DOM:
        </p>
        
        <CodeBlock>
{`// Method 1: Using remove() (modern browsers)
const element = document.getElementById('elementToRemove');
element.remove();

// Method 2: Using removeChild() (works in all browsers)
const child = document.getElementById('childElement');
const parent = child.parentNode;
parent.removeChild(child);

// Method 3: Clear all children of an element
const container = document.getElementById('container');

// Option A: Using innerHTML
container.innerHTML = '';

// Option B: Remove children one by one
while (container.firstChild) {
  container.removeChild(container.firstChild);
}

// Method 4: Hide an element without removing it
element.style.display = 'none';

// Method 5: Replace an element
const oldElement = document.getElementById('oldElement');
const newElement = document.createElement('div');
newElement.textContent = 'I replaced the old element';
oldElement.parentNode.replaceChild(newElement, oldElement);`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day6EditorContent.removingElements.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Example title="DOM Manipulation Techniques">
        <p>
          Here are some common DOM manipulation techniques for different scenarios:
        </p>
        
        <p><strong>1. Inserting elements at specific positions:</strong></p>
        <CodeBlock>
{`// Insert at the beginning of a parent
parent.prepend(newElement);

// Insert at the end of a parent (same as appendChild)
parent.append(newElement);

// Insert before a specific element
parent.insertBefore(newElement, referenceElement);

// Insert after a specific element
parent.insertBefore(newElement, referenceElement.nextSibling);

// Modern methods (not supported in older browsers)
referenceElement.before(newElement); // Insert before
referenceElement.after(newElement);  // Insert after`}
        </CodeBlock>
        
        <p><strong>2. Moving elements:</strong></p>
        <CodeBlock>
{`// Moving an element to a new parent
// (appendChild/append will move the element if it already exists in the DOM)
const element = document.getElementById('moveMe');
const newParent = document.getElementById('newParent');
newParent.appendChild(element);`}
        </CodeBlock>
        
        <p><strong>3. Cloning elements:</strong></p>
        <CodeBlock>
{`// Clone an element
const original = document.getElementById('original');
const clone = original.cloneNode(false); // Shallow clone (just the element)
const deepClone = original.cloneNode(true); // Deep clone (element and all its children)

// Modify the clone and add it to the DOM
clone.id = 'cloned';
document.body.appendChild(clone);`}
        </CodeBlock>
        
        <p><strong>4. Creating document fragments (for better performance):</strong></p>
        <CodeBlock>
{`// When adding multiple elements, use a DocumentFragment
const fragment = document.createDocumentFragment();

// Add elements to the fragment
for (let i = 0; i < 100; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = \`Item \${i + 1}\`;
  fragment.appendChild(listItem);
}

// Add the fragment to the DOM (only one reflow/repaint)
const list = document.getElementById('myList');
list.appendChild(fragment);`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>Working with Element Properties</SectionTitle>
        <p>
          Elements have many properties that you can access and modify:
        </p>
        
        <CodeBlock>
{`const element = document.getElementById('myElement');

// Basic properties
console.log(element.tagName); // "DIV", "P", etc.
console.log(element.id);
console.log(element.className);

// Size and position
console.log(element.clientWidth, element.clientHeight); // Content + padding
console.log(element.offsetWidth, element.offsetHeight); // Content + padding + border
console.log(element.scrollWidth, element.scrollHeight); // Actual content size
console.log(element.getBoundingClientRect()); // Position relative to viewport

// Scroll position
console.log(element.scrollTop, element.scrollLeft);
element.scrollTop = 100; // Scroll down 100px

// Parent-child relationships
console.log(element.parentNode); // Parent element
console.log(element.children); // Child elements (HTMLCollection)
console.log(element.firstElementChild); // First child element
console.log(element.lastElementChild); // Last child element
console.log(element.nextElementSibling); // Next sibling element
console.log(element.previousElementSibling); // Previous sibling element

// Content
console.log(element.textContent); // All text content
console.log(element.innerHTML); // HTML content
console.log(element.innerText); // Visible text content
console.log(element.outerHTML); // Element and its HTML content`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Practical Example: Building a Dynamic List</SectionTitle>
        <p>
          Let's put everything together to create a dynamic to-do list:
        </p>
        
        <CodeBlock>
{`// HTML
// <div id="todo-app">
//   <h2>To-Do List</h2>
//   <div>
//     <input type="text" id="new-task" placeholder="Add a new task">
//     <button id="add-button">Add</button>
//   </div>
//   <ul id="task-list"></ul>
// </div>

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const newTaskInput = document.getElementById('new-task');
  const addButton = document.getElementById('add-button');
  const taskList = document.getElementById('task-list');
  
  // Function to add a new task
  function addTask() {
    const taskText = newTaskInput.value.trim();
    
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }
    
    // Create list item
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    
    // Create task text span
    const taskTextSpan = document.createElement('span');
    taskTextSpan.className = 'task-text';
    taskTextSpan.textContent = taskText;
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });
    
    // Create complete button
    const completeButton = document.createElement('button');
    completeButton.className = 'complete-button';
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
      taskTextSpan.classList.toggle('completed');
      if (taskTextSpan.classList.contains('completed')) {
        completeButton.textContent = 'Undo';
      } else {
        completeButton.textContent = 'Complete';
      }
    });
    
    // Assemble the list item
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    
    // Add to the list
    taskList.appendChild(listItem);
    
    // Clear the input
    newTaskInput.value = '';
    newTaskInput.focus();
  }
  
  // Add task when button is clicked
  addButton.addEventListener('click', addTask);
  
  // Add task when Enter key is pressed
  newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

// CSS (for reference)
// .task-item {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   margin: 5px 0;
//   background-color: #f9f9f9;
//   border-radius: 5px;
// }
// .completed {
//   text-decoration: line-through;
//   color: #888;
// }
// .delete-button, .complete-button {
//   margin-left: 10px;
//   padding: 5px 10px;
//   border: none;
//   border-radius: 3px;
//   cursor: pointer;
// }
// .delete-button {
//   background-color: #ff6b6b;
//   color: white;
// }
// .complete-button {
//   background-color: #4caf50;
//   color: white;
// }`}
        </CodeBlock>
      </Section>
      
      <Example title="Best Practices for DOM Manipulation">
        <ul>
          <li><strong>Minimize DOM manipulations</strong> - they can be expensive in terms of performance</li>
          <li><strong>Use document fragments</strong> when adding multiple elements</li>
          <li><strong>Batch your changes</strong> to reduce reflows and repaints</li>
          <li><strong>Cache DOM references</strong> instead of repeatedly querying the DOM</li>
          <li><strong>Use event delegation</strong> for dynamically created elements</li>
          <li><strong>Consider using innerHTML</strong> for large HTML chunks (but be careful with security)</li>
          <li><strong>Be aware of browser compatibility</strong> for newer DOM methods</li>
        </ul>
        <CodeBlock>
{`// Bad: Multiple separate DOM operations
for (let i = 0; i < 100; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = \`Item \${i + 1}\`;
  list.appendChild(listItem); // Causes reflow each time
}

// Good: Batch operations with a document fragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = \`Item \${i + 1}\`;
  fragment.appendChild(listItem);
}
list.appendChild(fragment); // Only one reflow

// Bad: Reading and writing repeatedly
const box = document.getElementById('box');
box.style.width = (box.offsetWidth + 10) + 'px'; // Read, then write
box.style.height = (box.offsetHeight + 10) + 'px'; // Read, then write
box.style.left = (box.offsetLeft + 10) + 'px'; // Read, then write

// Good: Read all values first, then write
const width = box.offsetWidth;
const height = box.offsetHeight;
const left = box.offsetLeft;

box.style.width = (width + 10) + 'px';
box.style.height = (height + 10) + 'px';
box.style.left = (left + 10) + 'px';`}
        </CodeBlock>
      </Example>
      
      <Navigation 
        prevLink="/day6/event-handling" 
        nextLink="/day7" 
        indexLink="/day6"
        title="Modifying DOM Elements"
        subtitle="Learn how to dynamically create, modify, and remove elements from the DOM"
      />
    </Layout>
  );
};

export default ModifyingDOM;