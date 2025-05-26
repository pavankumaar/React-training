export const day6EditorContent = {
    // getElementById, querySelector subtopics
    getElementByIdExample: {
        js: `// getElementById Example

// HTML reference:
// <div id="myDiv">This is a div with ID "myDiv"</div>
// <p id="myParagraph">This is a paragraph with ID "myParagraph"</p>
// <button id="myButton">Click Me</button>

// Get element by ID
const divElement = document.getElementById('myDiv');
console.log(divElement); // Shows the div element

// Modify content
divElement.textContent = 'This text was changed using JavaScript!';

// Change style
divElement.style.backgroundColor = 'lightblue';
divElement.style.padding = '10px';
divElement.style.borderRadius = '5px';

// Get another element
const buttonElement = document.getElementById('myButton');

// Add click event
buttonElement.onclick = function() {
    const paragraph = document.getElementById('myParagraph');
    paragraph.textContent = 'The button was clicked!';
    paragraph.style.color = 'red';
};

// Try modifying these examples or create your own getElementById usage below
`
    },
    
    querySelectorExample: {
        js: `// querySelector and querySelectorAll Example

// HTML reference:
// <div class="container">
//   <p class="intro">First paragraph</p>
//   <p class="intro">Second paragraph</p>
//   <p class="outro">Third paragraph</p>
//   <ul>
//     <li class="item">Item 1</li>
//     <li class="item">Item 2</li>
//     <li class="item">Item 3</li>
//   </ul>
// </div>

// querySelector - returns the first matching element
const firstIntro = document.querySelector('.intro');
console.log(firstIntro); // First paragraph with class "intro"

// Change the first intro paragraph
firstIntro.style.fontWeight = 'bold';
firstIntro.style.color = 'blue';

// querySelectorAll - returns all matching elements as a NodeList
const allIntros = document.querySelectorAll('.intro');
console.log(allIntros); // NodeList containing both intro paragraphs

// Loop through all intro paragraphs
allIntros.forEach(paragraph => {
    paragraph.style.backgroundColor = 'lightyellow';
    paragraph.textContent += ' (Modified)';
});

// More complex selectors
const listItems = document.querySelectorAll('ul li.item');
console.log(listItems); // NodeList of all li elements with class "item"

// Modify all list items
listItems.forEach((item, index) => {
    item.textContent += \` - Item \${index + 1} modified\`;
    item.style.color = 'green';
});

// Try using querySelector with different selectors below
`
    },
    
    selectorComparison: {
        js: `// Comparison of Different Selector Methods

// HTML reference:
// <div id="main">
//   <p class="text">Paragraph 1</p>
//   <p class="text highlight">Paragraph 2</p>
//   <p class="text">Paragraph 3</p>
//   <div class="box">
//     <p class="text">Nested paragraph</p>
//   </div>
// </div>

// 1. getElementById - fastest, works only with IDs
const mainDiv = document.getElementById('main');
console.log('getElementById:', mainDiv);

// 2. getElementsByClassName - returns live HTMLCollection
const textElements = document.getElementsByClassName('text');
console.log('getElementsByClassName:', textElements);
console.log('Number of elements with class "text":', textElements.length);

// 3. getElementsByTagName - returns live HTMLCollection
const paragraphs = document.getElementsByTagName('p');
console.log('getElementsByTagName:', paragraphs);
console.log('Number of p elements:', paragraphs.length);

// 4. querySelector - returns first matching element
const firstText = document.querySelector('.text');
console.log('querySelector (first .text):', firstText);

// 5. querySelectorAll - returns static NodeList
const allTexts = document.querySelectorAll('.text');
console.log('querySelectorAll:', allTexts);
console.log('Number of .text elements:', allTexts.length);

// 6. Complex selectors with querySelector
const highlightedText = document.querySelector('.text.highlight');
console.log('querySelector (.text.highlight):', highlightedText);

// 7. Nested selectors
const nestedText = document.querySelector('.box .text');
console.log('querySelector (nested):', nestedText);

// 8. Attribute selectors
const elemWithAttribute = document.querySelector('[data-custom]');
console.log('querySelector (attribute):', elemWithAttribute);

// Try different selector methods below
`
    },
    
    // Event handling subtopics
    basicEventHandling: {
        js: `// Basic Event Handling Example

// HTML reference:
// <button id="myButton">Click Me</button>
// <div id="output">Click the button</div>

// 1. Using addEventListener
const button = document.getElementById('myButton');
const output = document.getElementById('output');

// Add click event listener
button.addEventListener('click', function() {
    output.textContent = 'Button was clicked!';
    output.style.color = 'green';
});

// 2. Add another event listener to the same element
button.addEventListener('click', function() {
    output.style.backgroundColor = 'lightyellow';
    output.style.padding = '10px';
});

// 3. Using named function
function handleMouseOver() {
    output.textContent = 'Mouse is over the button';
    output.style.color = 'blue';
}

function handleMouseOut() {
    output.textContent = 'Mouse left the button';
    output.style.color = 'black';
}

// Add mouseover and mouseout events
button.addEventListener('mouseover', handleMouseOver);
button.addEventListener('mouseout', handleMouseOut);

// 4. Remove an event listener
// button.removeEventListener('mouseout', handleMouseOut);

// Try adding different event listeners below
`
    },
    
    eventObject: {
        js: `// Event Object Example

// HTML reference:
// <input id="textInput" type="text" placeholder="Type something...">
// <div id="output">Event information will appear here</div>
// <button id="clickButton">Click Me</button>

const textInput = document.getElementById('textInput');
const output = document.getElementById('output');
const clickButton = document.getElementById('clickButton');

// Keyboard event with event object
textInput.addEventListener('keyup', function(event) {
    // The event object contains information about the event
    output.innerHTML = \`
        <strong>Event type:</strong> \${event.type}<br>
        <strong>Key pressed:</strong> \${event.key}<br>
        <strong>Key code:</strong> \${event.keyCode || event.which}<br>
        <strong>Current value:</strong> \${event.target.value}
    \`;
    
    // Check for specific key
    if (event.key === 'Enter') {
        output.innerHTML += '<br><strong>Enter key was pressed!</strong>';
        event.target.value = '';
    }
});

// Mouse event with coordinates
clickButton.addEventListener('click', function(event) {
    output.innerHTML = \`
        <strong>Event type:</strong> \${event.type}<br>
        <strong>Mouse X:</strong> \${event.clientX}<br>
        <strong>Mouse Y:</strong> \${event.clientY}<br>
        <strong>Target element:</strong> \${event.target.tagName}
    \`;
    
    // Prevent default behavior (for demonstration)
    // event.preventDefault();
    
    // Stop event propagation (for demonstration)
    // event.stopPropagation();
});

// Event delegation example
document.body.addEventListener('click', function(event) {
    // Check if the clicked element has a specific class
    if (event.target.classList.contains('clickable')) {
        console.log('Clickable element was clicked:', event.target);
    }
});

// Try exploring the event object with different events below
`
    },
    
    eventPropagation: {
        js: `// Event Propagation Example

// HTML reference:
// <div id="outer" style="padding: 20px; background-color: lightblue;">
//   <div id="middle" style="padding: 20px; background-color: lightgreen;">
//     <div id="inner" style="padding: 20px; background-color: pink;">
//       Click me
//     </div>
//   </div>
// </div>
// <div id="output">Click on the nested boxes</div>

const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');
const output = document.getElementById('output');

// Event bubbling (default) - events bubble up from the target element to ancestors
outer.addEventListener('click', function(event) {
    output.innerHTML += '<br>Outer div clicked (bubbling phase)';
    console.log('Outer div clicked', event);
});

middle.addEventListener('click', function(event) {
    output.innerHTML += '<br>Middle div clicked (bubbling phase)';
    console.log('Middle div clicked', event);
    
    // Uncomment to stop propagation
    // event.stopPropagation();
});

inner.addEventListener('click', function(event) {
    output.innerHTML += '<br>Inner div clicked (bubbling phase)';
    console.log('Inner div clicked', event);
});

// Event capturing - events are first captured by the outermost element
outer.addEventListener('click', function(event) {
    output.innerHTML += '<br>Outer div clicked (capturing phase)';
    console.log('Outer div clicked (capturing)', event);
}, true); // true enables capturing phase

middle.addEventListener('click', function(event) {
    output.innerHTML += '<br>Middle div clicked (capturing phase)';
    console.log('Middle div clicked (capturing)', event);
}, true);

inner.addEventListener('click', function(event) {
    output.innerHTML += '<br>Inner div clicked (capturing phase)';
    console.log('Inner div clicked (capturing)', event);
}, true);

// Clear output button
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear Output';
clearButton.addEventListener('click', function() {
    output.innerHTML = 'Click on the nested boxes';
});
document.body.appendChild(clearButton);

// Try experimenting with event propagation below
`
    },
    
    // Modifying DOM subtopics
    creatingElements: {
        js: `// Creating and Appending DOM Elements

// HTML reference:
// <div id="container"></div>
// <button id="addButton">Add Element</button>

const container = document.getElementById('container');
const addButton = document.getElementById('addButton');

// Function to create and append a new element
function createNewElement() {
    // 1. Create a new element
    const newParagraph = document.createElement('p');
    
    // 2. Add content to the element
    newParagraph.textContent = 'This paragraph was created with JavaScript!';
    
    // 3. Add attributes
    newParagraph.id = 'paragraph-' + (container.children.length + 1);
    newParagraph.className = 'dynamic-paragraph';
    
    // 4. Add inline styles
    newParagraph.style.color = getRandomColor();
    newParagraph.style.padding = '10px';
    newParagraph.style.border = '1px solid #ccc';
    newParagraph.style.margin = '5px 0';
    newParagraph.style.borderRadius = '5px';
    
    // 5. Add event listener to the new element
    newParagraph.addEventListener('click', function() {
        this.style.backgroundColor = getRandomColor();
    });
    
    // 6. Append the new element to the container
    container.appendChild(newParagraph);
    
    console.log('New paragraph created with ID:', newParagraph.id);
}

// Helper function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add click event to the button
addButton.addEventListener('click', createNewElement);

// Create initial elements
createNewElement();
createNewElement();

// Try creating different types of elements below
`
    },
    
    modifyingElements: {
        js: `// Modifying Existing DOM Elements

// HTML reference:
// <div id="content">
//   <h2 id="title">Original Title</h2>
//   <p id="paragraph">This is the original paragraph text.</p>
//   <ul id="list">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//   </ul>
//   <div id="attributes-demo" class="demo">Original attributes</div>
// </div>
// <button id="modifyButton">Modify Elements</button>
// <button id="resetButton">Reset</button>

const title = document.getElementById('title');
const paragraph = document.getElementById('paragraph');
const list = document.getElementById('list');
const attributesDemo = document.getElementById('attributes-demo');
const modifyButton = document.getElementById('modifyButton');
const resetButton = document.getElementById('resetButton');

// Store original values for reset
const originalValues = {
    titleText: title.textContent,
    paragraphText: paragraph.textContent,
    listItems: Array.from(list.children).map(item => item.textContent),
    demoClass: attributesDemo.className,
    demoText: attributesDemo.textContent
};

// Function to modify elements
function modifyElements() {
    // 1. Modify text content
    title.textContent = 'Modified Title';
    
    // 2. Modify innerHTML (can include HTML tags)
    paragraph.innerHTML = 'This paragraph now has <strong>bold</strong> and <em>italic</em> text.';
    
    // 3. Modify styles
    title.style.color = 'purple';
    paragraph.style.backgroundColor = 'lightyellow';
    paragraph.style.padding = '10px';
    paragraph.style.borderRadius = '5px';
    
    // 4. Modify list items
    const listItems = list.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].textContent = 'Modified Item ' + (i + 1);
        listItems[i].style.color = 'blue';
    }
    
    // 5. Add a new list item
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    newItem.style.color = 'green';
    list.appendChild(newItem);
    
    // 6. Modify attributes
    attributesDemo.setAttribute('data-modified', 'true');
    attributesDemo.removeAttribute('class');
    attributesDemo.classList.add('modified');
    attributesDemo.classList.add('highlight');
    attributesDemo.textContent = 'Modified attributes: ' + attributesDemo.className;
}

// Function to reset elements
function resetElements() {
    title.textContent = originalValues.titleText;
    paragraph.textContent = originalValues.paragraphText;
    
    // Reset styles
    title.removeAttribute('style');
    paragraph.removeAttribute('style');
    
    // Reset list
    list.innerHTML = '';
    originalValues.listItems.forEach(itemText => {
        const li = document.createElement('li');
        li.textContent = itemText;
        list.appendChild(li);
    });
    
    // Reset attributes
    attributesDemo.className = originalValues.demoClass;
    attributesDemo.removeAttribute('data-modified');
    attributesDemo.textContent = originalValues.demoText;
}

// Add event listeners to buttons
modifyButton.addEventListener('click', modifyElements);
resetButton.addEventListener('click', resetElements);

// Try modifying other properties of these elements below
`
    },
    
    removingElements: {
        js: `// Removing DOM Elements

// HTML reference:
// <div id="container">
//   <div class="item">Item 1 <button class="remove-btn">Remove</button></div>
//   <div class="item">Item 2 <button class="remove-btn">Remove</button></div>
//   <div class="item">Item 3 <button class="remove-btn">Remove</button></div>
//   <div class="item">Item 4 <button class="remove-btn">Remove</button></div>
//   <div class="item">Item 5 <button class="remove-btn">Remove</button></div>
// </div>
// <button id="addButton">Add Item</button>
// <button id="removeAllButton">Remove All</button>
// <button id="resetButton">Reset</button>

const container = document.getElementById('container');
const addButton = document.getElementById('addButton');
const removeAllButton = document.getElementById('removeAllButton');
const resetButton = document.getElementById('resetButton');

// Store original container content for reset
const originalContent = container.innerHTML;

// 1. Remove a specific element
function removeItem(event) {
    // Check if the clicked element is a remove button
    if (event.target.classList.contains('remove-btn')) {
        // Get the parent item div
        const item = event.target.parentElement;
        
        // Method 1: Remove using parentNode.removeChild()
        // item.parentNode.removeChild(item);
        
        // Method 2: Remove using remove() method (modern browsers)
        item.remove();
        
        console.log('Item removed');
    }
}

// 2. Add a new item
function addItem() {
    const newItem = document.createElement('div');
    newItem.className = 'item';
    
    const itemNumber = container.children.length + 1;
    newItem.innerHTML = \`Item \${itemNumber} <button class="remove-btn">Remove</button>\`;
    
    // Style the new item
    newItem.style.padding = '10px';
    newItem.style.margin = '5px 0';
    newItem.style.backgroundColor = '#f0f0f0';
    newItem.style.borderRadius = '5px';
    
    container.appendChild(newItem);
}

// 3. Remove all items
function removeAllItems() {
    // Method 1: Remove all children one by one
    // while (container.firstChild) {
    //     container.removeChild(container.firstChild);
    // }
    
    // Method 2: Clear innerHTML
    container.innerHTML = '';
    
    console.log('All items removed');
}

// 4. Reset to original state
function resetContainer() {
    container.innerHTML = originalContent;
    
    // Re-apply styles to items
    const items = container.getElementsByClassName('item');
    for (let item of items) {
        item.style.padding = '10px';
        item.style.margin = '5px 0';
        item.style.backgroundColor = '#f0f0f0';
        item.style.borderRadius = '5px';
    }
}

// Add event listeners
container.addEventListener('click', removeItem); // Event delegation
addButton.addEventListener('click', addItem);
removeAllButton.addEventListener('click', removeAllItems);
resetButton.addEventListener('click', resetContainer);

// Initialize styles for existing items
const items = container.getElementsByClassName('item');
for (let item of items) {
    item.style.padding = '10px';
    item.style.margin = '5px 0';
    item.style.backgroundColor = '#f0f0f0';
    item.style.borderRadius = '5px';
}

// Try experimenting with different ways to remove elements below
`
    }
};