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

const EventHandling = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day6/getelementbyid-queryselector" 
        nextLink="/day6/modifying-dom" 
        indexLink="/day6"
        title="Event Handling with addEventListener"
        subtitle="Learn how to handle user interactions by attaching event listeners to DOM elements"
      />
      
      <Section>
        <SectionTitle>Introduction to Events</SectionTitle>
        <p>
          Events are actions or occurrences that happen in the browser, such as a user clicking a button, pressing a key, or a page finishing loading. JavaScript can "listen" for these events and execute code in response.
        </p>
        <p>
          Common types of events include:
        </p>
        <ul>
          <li><strong>Mouse events</strong>: click, dblclick, mouseover, mouseout, mousemove</li>
          <li><strong>Keyboard events</strong>: keydown, keyup, keypress</li>
          <li><strong>Form events</strong>: submit, change, focus, blur</li>
          <li><strong>Document/Window events</strong>: load, resize, scroll, unload</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>The addEventListener Method</SectionTitle>
        <p>
          The <code>addEventListener()</code> method is the modern way to handle events in JavaScript. It allows you to:
        </p>
        <ul>
          <li>Attach multiple event handlers to a single element</li>
          <li>Add event listeners to multiple elements at once</li>
          <li>Easily remove event listeners when needed</li>
          <li>Control event propagation</li>
        </ul>
        
        <CodeBlock>
{`// Basic syntax
element.addEventListener(eventType, handlerFunction, options);

// Example: Adding a click event listener to a button
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log('Button was clicked!');
  // Do something when the button is clicked
});

// Using a named function
function handleClick() {
  console.log('Button was clicked!');
}

button.addEventListener('click', handleClick);

// Adding multiple listeners to the same element
button.addEventListener('click', function() {
  console.log('First click handler');
});

button.addEventListener('click', function() {
  console.log('Second click handler');
});

// Both handlers will run when the button is clicked`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day6EditorContent.basicEventHandling.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>The Event Object</SectionTitle>
        <p>
          When an event occurs, the browser creates an <strong>event object</strong> that contains information about the event. This object is automatically passed to your event handler function.
        </p>
        
        <CodeBlock>
{`// Using the event object
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
  // 'event' is the event object
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
  console.log('Mouse coordinates:', event.clientX, event.clientY);
  
  // Prevent default behavior
  event.preventDefault();
  
  // Stop event propagation
  event.stopPropagation();
});

// Keyboard event example
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
  console.log('Key code:', event.keyCode);
  
  if (event.key === 'Escape') {
    console.log('Escape key was pressed!');
  }
});`}
        </CodeBlock>
        
        <p>
          Common properties and methods of the event object include:
        </p>
        <ul>
          <li><code>event.type</code> - the type of event (e.g., "click", "keydown")</li>
          <li><code>event.target</code> - the element that triggered the event</li>
          <li><code>event.currentTarget</code> - the element that the event listener is attached to</li>
          <li><code>event.preventDefault()</code> - prevents the default browser behavior</li>
          <li><code>event.stopPropagation()</code> - stops the event from bubbling up</li>
        </ul>
        
        <TryEditorButton
          jsCode={day6EditorContent.eventObject.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>Event Propagation: Bubbling and Capturing</SectionTitle>
        <p>
          When an event occurs on an element, it doesn't just trigger event handlers on that element. Events in the DOM propagate in two phases:
        </p>
        
        <ol>
          <li><strong>Capturing Phase</strong>: The event travels from the document root down to the target element</li>
          <li><strong>Bubbling Phase</strong>: The event bubbles up from the target element back to the document root</li>
        </ol>
        
        <CodeBlock>
{`// HTML
<div id="outer">
  <div id="middle">
    <div id="inner">Click me</div>
  </div>
</div>

// JavaScript
const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

// Bubbling phase (default)
outer.addEventListener('click', function() {
  console.log('Outer div clicked (bubbling)');
});

middle.addEventListener('click', function() {
  console.log('Middle div clicked (bubbling)');
});

inner.addEventListener('click', function() {
  console.log('Inner div clicked (bubbling)');
});

// When you click on the inner div, you'll see:
// "Inner div clicked (bubbling)"
// "Middle div clicked (bubbling)"
// "Outer div clicked (bubbling)"

// Capturing phase (third parameter set to true)
outer.addEventListener('click', function() {
  console.log('Outer div clicked (capturing)');
}, true);

middle.addEventListener('click', function() {
  console.log('Middle div clicked (capturing)');
}, true);

inner.addEventListener('click', function() {
  console.log('Inner div clicked (capturing)');
}, true);

// Now when you click on the inner div, you'll see:
// "Outer div clicked (capturing)"
// "Middle div clicked (capturing)"
// "Inner div clicked (capturing)"
// Followed by the bubbling phase events`}
        </CodeBlock>
        
        <p>
          You can stop event propagation at any point using <code>event.stopPropagation()</code>.
        </p>
        
        <TryEditorButton
          jsCode={day6EditorContent.eventPropagation.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Example title="Event Delegation">
        <p>
          Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners on child elements. This is especially useful for dynamically created elements.
        </p>
        <CodeBlock>
{`// HTML
<ul id="taskList">
  <li class="task">Task 1</li>
  <li class="task">Task 2</li>
  <li class="task">Task 3</li>
</ul>

// Without event delegation (not ideal)
const tasks = document.querySelectorAll('.task');
tasks.forEach(task => {
  task.addEventListener('click', function() {
    console.log('Task clicked:', this.textContent);
  });
});

// With event delegation (better approach)
const taskList = document.getElementById('taskList');
taskList.addEventListener('click', function(event) {
  // Check if the clicked element is a task
  if (event.target.classList.contains('task')) {
    console.log('Task clicked:', event.target.textContent);
  }
});

// Now you can add new tasks dynamically and they'll work without adding new listeners
const newTask = document.createElement('li');
newTask.className = 'task';
newTask.textContent = 'Task 4';
taskList.appendChild(newTask);`}
        </CodeBlock>
        <p>
          Benefits of event delegation:
        </p>
        <ul>
          <li>Fewer event listeners = better performance</li>
          <li>Works for dynamically added elements</li>
          <li>Less memory usage</li>
          <li>Cleaner code</li>
        </ul>
      </Example>
      
      <Section>
        <SectionTitle>Removing Event Listeners</SectionTitle>
        <p>
          To prevent memory leaks, you should remove event listeners when they're no longer needed, especially for elements that will be removed from the DOM.
        </p>
        
        <CodeBlock>
{`// Adding an event listener with a named function
function handleClick() {
  console.log('Button clicked!');
}

button.addEventListener('click', handleClick);

// Removing the event listener
button.removeEventListener('click', handleClick);

// Note: You must use the same function reference to remove the listener
// This won't work:
button.addEventListener('click', function() { console.log('Clicked'); });
// You can't remove this listener because the function reference is lost

// Solution: Store the function reference
const clickHandler = function() { console.log('Clicked'); };
button.addEventListener('click', clickHandler);
button.removeEventListener('click', clickHandler);`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Common Events and Their Uses</SectionTitle>
        
        <p><strong>Mouse Events:</strong></p>
        <CodeBlock>
{`// Click event
button.addEventListener('click', function() {
  console.log('Clicked!');
});

// Double-click event
element.addEventListener('dblclick', function() {
  console.log('Double clicked!');
});

// Mouse over and mouse out (hover)
element.addEventListener('mouseover', function() {
  this.style.backgroundColor = 'lightblue';
});

element.addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
});

// Mouse move
document.addEventListener('mousemove', function(event) {
  console.log(\`Mouse position: \${event.clientX}, \${event.clientY}\`);
});`}
        </CodeBlock>
        
        <p><strong>Keyboard Events:</strong></p>
        <CodeBlock>
{`// Key down event
document.addEventListener('keydown', function(event) {
  console.log(\`Key pressed: \${event.key}\`);
  
  // Check for specific keys
  if (event.key === 'Enter') {
    console.log('Enter key pressed!');
  }
  
  // Check for key combinations
  if (event.ctrlKey && event.key === 's') {
    console.log('Ctrl+S pressed!');
    event.preventDefault(); // Prevent browser save dialog
  }
});

// Key up event
document.addEventListener('keyup', function(event) {
  console.log(\`Key released: \${event.key}\`);
});`}
        </CodeBlock>
        
        <p><strong>Form Events:</strong></p>
        <CodeBlock>
{`// Form submission
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  console.log('Form submitted!');
  
  // Get form data
  const formData = new FormData(this);
  for (const [key, value] of formData.entries()) {
    console.log(\`\${key}: \${value}\`);
  }
});

// Input change
const input = document.getElementById('myInput');

input.addEventListener('change', function() {
  console.log('Input value changed to:', this.value);
});

// Input as you type
input.addEventListener('input', function() {
  console.log('Current value:', this.value);
});

// Focus and blur
input.addEventListener('focus', function() {
  this.style.backgroundColor = 'lightyellow';
});

input.addEventListener('blur', function() {
  this.style.backgroundColor = '';
});`}
        </CodeBlock>
        
        <p><strong>Document/Window Events:</strong></p>
        <CodeBlock>
{`// Page load
window.addEventListener('load', function() {
  console.log('Page fully loaded!');
});

// DOM content loaded (faster than load)
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM ready!');
});

// Window resize
window.addEventListener('resize', function() {
  console.log(\`Window size: \${window.innerWidth} x \${window.innerHeight}\`);
});

// Scroll event
window.addEventListener('scroll', function() {
  console.log(\`Scroll position: \${window.scrollX}, \${window.scrollY}\`);
});`}
        </CodeBlock>
      </Section>
      
      <Example title="Best Practices for Event Handling">
        <ul>
          <li><strong>Use event delegation</strong> for multiple similar elements</li>
          <li><strong>Remove event listeners</strong> when they're no longer needed</li>
          <li><strong>Debounce or throttle</strong> frequent events like scroll or resize</li>
          <li><strong>Keep event handlers small and focused</strong></li>
          <li><strong>Use named functions</strong> for reusable event handlers</li>
        </ul>
        <CodeBlock>
{`// Debouncing example (only run after user stops typing)
function debounce(func, delay) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

// Usage
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', debounce(function() {
  console.log('Searching for:', this.value);
  // Perform search operation
}, 300));

// Throttling example (limit how often an event can fire)
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
window.addEventListener('scroll', throttle(function() {
  console.log('Scroll position:', window.scrollY);
  // Update something based on scroll
}, 100));`}
        </CodeBlock>
      </Example>
      
      <Navigation 
        prevLink="/day6/getelementbyid-queryselector" 
        nextLink="/day6/modifying-dom" 
        indexLink="/day6"
        title="Event Handling with addEventListener"
        subtitle="Learn how to handle user interactions by attaching event listeners to DOM elements"
      />
    </Layout>
  );
};

export default EventHandling;