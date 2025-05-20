export const day5EditorContent = {
    // Function subtopics
    functionDeclaration: {
        js: `// Function Declaration Example

// Basic function declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Function call
console.log(greet("World")); // "Hello, World!"
console.log(greet("JavaScript")); // "Hello, JavaScript!"

// Function declarations are hoisted
console.log(hoistedFunction()); // "I can be called before my definition"

function hoistedFunction() {
    return "I can be called before my definition";
}

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8

// Try modifying the functions above or create your own function declaration below
`
    },
    
    functionExpression: {
        js: `// Function Expression Example

// Basic function expression
const greet = function(name) {
    return \`Hello, \${name}!\`;
};

console.log(greet("World")); // "Hello, World!"

// Anonymous function expression
const calculate = function(a, b) {
    return a + b;
};

console.log(calculate(5, 3)); // 8

// Function expressions are not hoisted
// Uncommenting this would cause an error:
// console.log(factorial(5));

// Named function expression (useful for recursion)
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)

// Try modifying these functions or create your own function expression below
`
    },
    
    arrowFunctions: {
        js: `// Arrow Functions Example

// Basic arrow function
const greet = (name) => \`Hello, \${name}!\`;
console.log(greet("World")); // "Hello, World!"

// Arrow function with multiple parameters
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// Arrow function with single parameter (parentheses optional)
const square = x => x * x;
console.log(square(4)); // 16

// Arrow function with no parameters
const sayHello = () => "Hello!";
console.log(sayHello()); // "Hello!"

// Arrow function with multiple statements
const calculateArea = (width, height) => {
    const area = width * height;
    return area;
};
console.log(calculateArea(5, 3)); // 15

// Arrow functions and 'this' context
const person = {
    name: "John",
    regularFunction: function() {
        return this.name; // 'this' refers to person
    },
    arrowFunction: () => {
        // 'this' is inherited from the surrounding scope
        // In this case, it's not 'person'
        return this.name;
    }
};

// Try modifying these functions or create your own arrow function below
`
    },
    
    functionParameters: {
        js: `// Function Parameters Example

// Basic parameters
function greet(name) {
    return \`Hello, \${name}!\`;
}
console.log(greet("World")); // "Hello, World!"

// Default parameters (ES6)
function greetWithDefault(name = "Guest") {
    return \`Hello, \${name}!\`;
}
console.log(greetWithDefault()); // "Hello, Guest!"
console.log(greetWithDefault("John")); // "Hello, John!"

// Multiple default parameters
function createMessage(name = "User", message = "No message provided") {
    return \`\${name} says: \${message}\`;
}
console.log(createMessage()); // "User says: No message provided"
console.log(createMessage("Alice")); // "Alice says: No message provided"
console.log(createMessage("Bob", "Hello!")); // "Bob says: Hello!"

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Destructuring parameters
function printPerson({name, age}) {
    return \`Name: \${name}, Age: \${age}\`;
}
const person = { name: "Alice", age: 30, job: "Developer" };
console.log(printPerson(person)); // "Name: Alice, Age: 30"

// Try modifying these functions or create your own function with parameters below
`
    },
    
    closures: {
        js: `// Closures Example

// Basic closure
function createCounter() {
    let count = 0; // This variable is "enclosed" in the returned function
    
    return function() {
        count++; // The inner function has access to count
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Another counter to show they're independent
const counter2 = createCounter();
console.log(counter2()); // 1 (separate count variable)
console.log(counter()); // 4 (continues from previous calls)

// Practical closure example: creating a greeting function
function createGreeting(greeting) {
    return function(name) {
        return \`\${greeting}, \${name}!\`;
    };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");
const sayHowdy = createGreeting("Howdy");

console.log(sayHello("John")); // "Hello, John!"
console.log(sayHi("Jane")); // "Hi, Jane!"
console.log(sayHowdy("Bob")); // "Howdy, Bob!"

// Private variables with closures
function createPerson(name) {
    let age = 0; // Private variable
    
    return {
        getName: function() { return name; },
        getAge: function() { return age; },
        setAge: function(newAge) { 
            if (newAge >= 0) age = newAge; 
        }
    };
}

const alice = createPerson("Alice");
console.log(alice.getName()); // "Alice"
alice.setAge(30);
console.log(alice.getAge()); // 30

// Try modifying these examples or create your own closure below
`
    },
    
    // Arrays subtopics
    arrayBasics: {
        js: `// Array Basics Example

// Creating arrays
const fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]

// Different ways to create arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

const empty = [];
console.log(empty); // []

const mixed = [1, "two", true, null, {name: "John"}, [1, 2, 3]];
console.log(mixed); // [1, "two", true, null, {name: "John"}, [1, 2, 3]]

// Accessing array elements (zero-based indexing)
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Orange"
console.log(fruits[3]); // "Mango"
console.log(fruits[4]); // undefined (out of bounds)

// Modifying array elements
fruits[1] = "Strawberry";
console.log(fruits); // ["Apple", "Strawberry", "Orange", "Mango"]

// Array properties
console.log(fruits.length); // 4

// Accessing the last element
console.log(fruits[fruits.length - 1]); // "Mango"

// Try modifying these arrays or create your own array below
`
    },
    
    arrayMethods: {
        js: `// Array Methods Example

let fruits = ["Apple", "Banana", "Orange"];
console.log("Original array:", fruits);

// Adding elements
fruits.push("Mango"); // Adds to the end
console.log("After push('Mango'):", fruits);

fruits.unshift("Strawberry"); // Adds to the beginning
console.log("After unshift('Strawberry'):", fruits);

// Removing elements
const lastFruit = fruits.pop(); // Removes from the end
console.log("pop() returned:", lastFruit);
console.log("After pop():", fruits);

const firstFruit = fruits.shift(); // Removes from the beginning
console.log("shift() returned:", firstFruit);
console.log("After shift():", fruits);

// Finding elements
console.log("indexOf('Orange'):", fruits.indexOf("Orange"));
console.log("includes('Banana'):", fruits.includes("Banana"));
console.log("includes('Mango'):", fruits.includes("Mango"));

// Slicing and splicing
const citrus = fruits.slice(1, 2); // Start at index 1, end before index 2
console.log("slice(1, 2):", citrus);
console.log("Original array after slice:", fruits); // slice doesn't modify original

fruits.splice(1, 1, "Kiwi", "Melon"); // Start at index 1, remove 1 item, insert "Kiwi" and "Melon"
console.log("After splice(1, 1, 'Kiwi', 'Melon'):", fruits);

// Joining arrays
const moreFruits = ["Pineapple", "Grapes"];
const allFruits = fruits.concat(moreFruits);
console.log("concat() result:", allFruits);

// Using spread operator (ES6)
const spreadFruits = [...fruits, ...moreFruits];
console.log("Using spread operator:", spreadFruits);

// Converting to string
const fruitString = fruits.join(", ");
console.log("join(', '):", fruitString);

// Try using these methods or other array methods below
`
    },
    
    objectBasics: {
        js: `// Object Basics Example

// Creating objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    isEmployed: true,
    hobbies: ["reading", "swimming", "coding"]
};

console.log(person);

// Accessing object properties
console.log("First name:", person.firstName); // Dot notation
console.log("Last name:", person["lastName"]); // Bracket notation
console.log("First hobby:", person.hobbies[0]);

// Modifying objects
person.age = 31;
console.log("After changing age:", person.age);

// Adding new properties
person.country = "USA";
console.log("After adding country:", person);

// Deleting properties
delete person.isEmployed;
console.log("After deleting isEmployed:", person);

// Nested objects
const student = {
    name: "Alice",
    grades: {
        math: 90,
        science: 85,
        history: 95
    }
};

console.log("Student:", student);
console.log("Math grade:", student.grades.math);

// Checking if a property exists
console.log("Does person have 'email' property?", "email" in person);
console.log("Does person have 'salary' property?", "salary" in person);
console.log("Does person have own 'age' property?", person.hasOwnProperty("age"));

// Try modifying these objects or create your own object below
`
    },
    
    objectMethods: {
        js: `// Object Methods Example

// Object with methods
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    
    // Method in an object (traditional syntax)
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    
    // ES6 shorthand method syntax
    greet() {
        return \`Hello, my name is \${this.firstName}!\`;
    },
    
    // Arrow function (note: 'this' behaves differently)
    getAgeInFiveYears: () => {
        // 'this' is not bound to person in arrow functions
        // This would not work as expected
        // return this.age + 5;
        
        // For demonstration, we'll use a fixed value
        return person.age + 5;
    }
};

// Calling object methods
console.log("Full name:", person.fullName());
console.log("Greeting:", person.greet());
console.log("Age in five years:", person.getAgeInFiveYears());

// Built-in Object methods
console.log("Object.keys():", Object.keys(person));
console.log("Object.values():", Object.values(person).filter(val => typeof val !== "function"));
console.log("Object.entries():", Object.entries(person).filter(([key, val]) => typeof val !== "function"));

// Object.assign() - copying properties
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);
console.log("Object.assign() result:", result);
console.log("Modified target:", target);

// Spread operator for object copying/merging (ES6)
const merged = { ...target, ...{ d: 5, e: 6 } };
console.log("Merged with spread operator:", merged);

// Try using these methods or create your own object methods below
`
    },
    
    arrayOfObjects: {
        js: `// Arrays of Objects Example

// Creating an array of objects
const users = [
    { id: 1, name: "Alice", age: 25, active: true },
    { id: 2, name: "Bob", age: 30, active: false },
    { id: 3, name: "Charlie", age: 35, active: true },
    { id: 4, name: "Diana", age: 28, active: true }
];

console.log("Users array:", users);

// Accessing data
console.log("First user's name:", users[0].name);
console.log("Second user's age:", users[1].age);

// Filtering objects
const activeUsers = users.filter(user => user.active);
console.log("Active users:", activeUsers);

// Mapping objects
const userNames = users.map(user => user.name);
console.log("User names:", userNames);

// Finding objects
const user = users.find(user => user.id === 3);
console.log("User with id 3:", user);

// Sorting objects
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log("Users sorted by age:", sortedByAge);

// Transforming data
const userSummaries = users.map(user => ({
    name: user.name,
    status: user.active ? "Active" : "Inactive"
}));
console.log("User summaries:", userSummaries);

// Calculating statistics
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / users.length;
console.log("Average age:", averageAge.toFixed(2));

// Try working with this array of objects or create your own below
`
    },
    
    // Loops subtopics
    forLoop: {
        js: `// for Loop Example

// Basic for loop
console.log("Basic for loop:");
for (let i = 0; i < 5; i++) {
    console.log(\`Iteration \${i}\`);
}

// Looping through an array
console.log("\\nLooping through an array:");
const fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
for (let i = 0; i < fruits.length; i++) {
    console.log(\`Fruit \${i+1}: \${fruits[i]}\`);
}

// Looping backwards
console.log("\\nLooping backwards:");
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(\`Fruit \${i+1}: \${fruits[i]}\`);
}

// Nested for loops
console.log("\\nNested for loops (multiplication table):");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += \`\${i}×\${j}=\${i*j} \`;
    }
    console.log(row);
}

// Breaking out of a loop
console.log("\\nBreaking out of a loop:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at i = 5");
        break;
    }
    console.log(\`Iteration \${i}\`);
}

// Skipping iterations
console.log("\\nSkipping iterations (continue):");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping i = 2");
        continue;
    }
    console.log(\`Iteration \${i}\`);
}

// Try modifying these loops or create your own for loop below
`
    },
    
    whileLoop: {
        js: `// while Loop Example

// Basic while loop
console.log("Basic while loop:");
let i = 0;
while (i < 5) {
    console.log(\`Iteration \${i}\`);
    i++;
}

// while loop with a condition
console.log("\\nwhile loop with a condition:");
let sum = 0;
let num = 1;
while (sum < 20) {
    sum += num;
    console.log(\`Added \${num}, sum is now \${sum}\`);
    num++;
}

// Finding a value
console.log("\\nFinding a value with while:");
const numbers = [4, 8, 15, 16, 23, 42];
let index = 0;
let found = false;
const target = 16;

while (index < numbers.length && !found) {
    if (numbers[index] === target) {
        found = true;
        console.log(\`Found \${target} at index \${index}\`);
    }
    index++;
}

if (!found) {
    console.log(\`\${target} not found in the array\`);
}

// Using while for user input simulation
console.log("\\nUser input simulation:");
let userInput = "invalid";
let attempts = 0;
const maxAttempts = 3;

while (userInput !== "password" && attempts < maxAttempts) {
    attempts++;
    console.log(\`Attempt \${attempts}: Incorrect password\`);
    
    // In a real scenario, we would get new input here
    if (attempts === 2) {
        userInput = "password"; // Simulate correct input on 2nd attempt
    }
}

if (userInput === "password") {
    console.log("Login successful!");
} else {
    console.log("Maximum attempts reached. Account locked.");
}

// Try modifying these loops or create your own while loop below
`
    },
    
    doWhileLoop: {
        js: `// do...while Loop Example

// Basic do...while loop
console.log("Basic do...while loop:");
let i = 0;
do {
    console.log(\`Iteration \${i}\`);
    i++;
} while (i < 5);

// do...while executes at least once
console.log("\\ndo...while executes at least once:");
let j = 10;
do {
    console.log(\`This runs once even though j = \${j} > 5\`);
    j++;
} while (j < 5);

// Menu system simulation
console.log("\\nMenu system simulation:");
let option = 1;
do {
    switch (option) {
        case 1:
            console.log("Selected option 1: View profile");
            break;
        case 2:
            console.log("Selected option 2: Edit settings");
            break;
        case 3:
            console.log("Selected option 3: Logout");
            break;
    }
    option++;
} while (option <= 3);

// Game loop simulation
console.log("\\nGame loop simulation:");
let score = 0;
let gameOver = false;
let round = 1;

do {
    console.log(\`Round \${round}: Playing...\`);
    
    // Simulate scoring points
    const points = Math.floor(Math.random() * 10) + 1;
    score += points;
    console.log(\`Scored \${points} points. Total score: \${score}\`);
    
    // Check if game should end
    if (score >= 20 || round >= 5) {
        gameOver = true;
        console.log("Game over!");
    }
    
    round++;
} while (!gameOver);

// Try modifying these loops or create your own do...while loop below
`
    },
    
    forOfLoop: {
        js: `// for...of Loop Example

// Iterating over an array
console.log("Iterating over an array:");
const fruits = ["Apple", "Banana", "Orange", "Mango"];
for (const fruit of fruits) {
    console.log(fruit);
}

// Iterating over a string
console.log("\\nIterating over a string:");
const text = "Hello";
for (const char of text) {
    console.log(char);
}

// Using with array index
console.log("\\nUsing with array index:");
for (const [index, fruit] of fruits.entries()) {
    console.log(\`\${index}: \${fruit}\`);
}

// Iterating over a Set
console.log("\\nIterating over a Set:");
const uniqueNumbers = new Set([1, 2, 3, 2, 1]);
for (const num of uniqueNumbers) {
    console.log(num); // No duplicates: 1, 2, 3
}

// Iterating over a Map
console.log("\\nIterating over a Map:");
const userRoles = new Map([
    ["John", "Admin"],
    ["Jane", "Editor"],
    ["Bob", "User"]
]);

for (const entry of userRoles) {
    console.log(entry); // Array of [key, value]
}

// Destructuring in for...of with Map
console.log("\\nDestructuring with Map entries:");
for (const [user, role] of userRoles) {
    console.log(\`\${user}: \${role}\`);
}

// Using for...of with array of objects
console.log("\\nUsing for...of with array of objects:");
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

for (const person of people) {
    console.log(\`\${person.name} is \${person.age} years old\`);
}

// Try modifying these loops or create your own for...of loop below
`
    },
    
    forInLoop: {
        js: `// for...in Loop Example

// Iterating over an object
console.log("Iterating over an object:");
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com"
};

for (const key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// Checking own properties
console.log("\\nChecking own properties:");
// Create an object with inherited properties
const employee = Object.create(person);
employee.jobTitle = "Developer";
employee.department = "Engineering";

console.log("Employee object with inherited properties:");
for (const key in employee) {
    console.log(\`\${key}: \${employee[key]}\`);
}

console.log("\\nOnly own properties:");
for (const key in employee) {
    if (employee.hasOwnProperty(key)) {
        console.log(\`Own property: \${key}: \${employee[key]}\`);
    }
}

// for...in with arrays (not recommended)
console.log("\\nfor...in with arrays (not recommended):");
const numbers = [10, 20, 30];
numbers.customProp = "test"; // Non-numeric property

for (const key in numbers) {
    console.log(\`\${key}: \${numbers[key]}\`);
}
console.log("Note: for...of is preferred for arrays");

// Nested objects
console.log("\\nNested objects with for...in:");
const company = {
    name: "Acme Corp",
    founded: 1985,
    locations: {
        headquarters: "New York",
        branches: ["London", "Tokyo", "Sydney"]
    },
    employees: 500
};

for (const key in company) {
    const value = company[key];
    if (typeof value === "object" && value !== null) {
        console.log(\`\${key}: [Complex Object]\`);
    } else {
        console.log(\`\${key}: \${value}\`);
    }
}

// Try modifying these loops or create your own for...in loop below
`
    },
    
    arrayIterationMethods: {
        js: `// Array Iteration Methods Example

const numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// forEach - executes a function for each element
console.log("\\nforEach:");
numbers.forEach((number, index) => {
    console.log(\`Element at index \${index} is \${number}\`);
});

// map - creates a new array with the results of calling a function on every element
console.log("\\nmap:");
const doubled = numbers.map(number => number * 2);
console.log("Doubled:", doubled);

// filter - creates a new array with elements that pass a test
console.log("\\nfilter:");
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers);

// reduce - reduces the array to a single value
console.log("\\nreduce:");
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum:", sum);

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log("Product:", product);

// find - returns the first element that passes a test
console.log("\\nfind:");
const firstEven = numbers.find(number => number % 2 === 0);
console.log("First even number:", firstEven);

// some - tests if at least one element passes a test
console.log("\\nsome:");
const hasEven = numbers.some(number => number % 2 === 0);
console.log("Has even numbers:", hasEven);

const hasNegative = numbers.some(number => number < 0);
console.log("Has negative numbers:", hasNegative);

// every - tests if all elements pass a test
console.log("\\nevery:");
const allPositive = numbers.every(number => number > 0);
console.log("All positive:", allPositive);

const allEven = numbers.every(number => number % 2 === 0);
console.log("All even:", allEven);

// Practical example with array of objects
console.log("\\nPractical example with array of objects:");
const products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Phone", price: 699, inStock: true },
    { id: 3, name: "Tablet", price: 399, inStock: false },
    { id: 4, name: "Headphones", price: 199, inStock: true }
];

// Get only in-stock products
const availableProducts = products.filter(product => product.inStock);
console.log("Available products:", availableProducts.map(p => p.name));

// Calculate total value of in-stock inventory
const inventoryValue = products
    .filter(product => product.inStock)
    .reduce((total, product) => total + product.price, 0);
console.log("Total inventory value:", inventoryValue);

// Try using these methods or create your own examples below
`
    }
};