export const day7EditorContent = {
    // Arrow Functions & Template Literals subtopics
    arrowFunctions: {
        js: `// Arrow Functions Example

// Traditional function expression
const greet = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet("World")); // "Hello, World!"

// Arrow function with block body
const greetArrow = (name) => {
    return "Hello, " + name + "!";
};
console.log(greetArrow("Arrow")); // "Hello, Arrow!"

// Arrow function with implicit return (no curly braces)
const greetShort = (name) => "Hello, " + name + "!";
console.log(greetShort("Short")); // "Hello, Short!"

// Arrow function with single parameter (parentheses optional)
const greetSimple = name => "Hello, " + name + "!";
console.log(greetSimple("Simple")); // "Hello, Simple!"

// Arrow function with no parameters (parentheses required)
const sayHi = () => "Hi there!";
console.log(sayHi()); // "Hi there!"

// Arrow function with multiple parameters
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// Arrow function with multiple statements
const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return { sum, product };
};
console.log(calculate(5, 3)); // { sum: 8, product: 15 }

// Arrow functions and 'this' context
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

// Try calling these methods and observe the difference
// person.printFriendsTraditional(); // Will cause an error
person.printFriendsArrow(); // Works correctly

// Try creating your own arrow functions below
`
    },
    
    templateLiterals: {
        js: `// Template Literals Example

const name = "Alice";
const age = 30;

// Traditional string concatenation
const greeting1 = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(greeting1);

// Template literal (with backticks)
const greeting2 = \`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(greeting2);

// Multi-line strings with traditional approach (using \\n)
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
console.log(\`\${a} times \${b} equals \${a * b}.\`);

// Conditional expressions in template literals
const isLoggedIn = true;
const status = \`User is \${isLoggedIn ? 'logged in' : 'logged out'}.\`;
console.log(status);

// Function calls in template literals
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(\`Hello, \${capitalize(name)}!\`);

// Nesting template literals
const nested = \`The result is: \${a > b ? \`\${a} is greater than \${b}\` : \`\${a} is not greater than \${b}\`}\`;
console.log(nested);

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

const highlighted = highlight\`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(highlighted);

// Try creating your own template literals below
`
    },
    
    arrowVsTraditional: {
        js: `// Comparing Arrow Functions and Traditional Functions

// 1. Syntax Comparison
console.log("--- Syntax Comparison ---");

// Traditional function
function add1(a, b) {
    return a + b;
}

// Function expression
const add2 = function(a, b) {
    return a + b;
};

// Arrow function with block body
const add3 = (a, b) => {
    return a + b;
};

// Arrow function with implicit return
const add4 = (a, b) => a + b;

console.log(add1(5, 3)); // 8
console.log(add2(5, 3)); // 8
console.log(add3(5, 3)); // 8
console.log(add4(5, 3)); // 8

// 2. 'this' Binding
console.log("\\n--- 'this' Binding ---");

const person = {
    name: "John",
    
    // Traditional method
    sayHiTraditional: function() {
        console.log("Traditional function 'this':", this.name);
        
        setTimeout(function() {
            // 'this' is lost in callback
            console.log("Traditional callback 'this':", this.name); // undefined
        }, 100);
    },
    
    // Arrow method
    sayHiArrow: function() {
        console.log("Outer function 'this':", this.name);
        
        setTimeout(() => {
            // 'this' is preserved from outer scope
            console.log("Arrow callback 'this':", this.name); // "John"
        }, 100);
    },
    
    // Arrow method as property (not recommended)
    sayHiProperty: () => {
        // 'this' is not bound to the object
        console.log("Arrow as property 'this':", this.name); // undefined
    }
};

person.sayHiTraditional();
person.sayHiArrow();
person.sayHiProperty();

// 3. Arguments Object
console.log("\\n--- Arguments Object ---");

function traditionalFunc() {
    console.log("Traditional function arguments:", arguments);
}

const arrowFunc = (...args) => {
    // Arrow functions don't have their own 'arguments' object
    // console.log("Arrow function arguments:", arguments); // Error
    console.log("Arrow function rest parameters:", args);
};

traditionalFunc(1, 2, 3); // [1, 2, 3]
arrowFunc(1, 2, 3); // [1, 2, 3]

// 4. Constructor Function
console.log("\\n--- Constructor Function ---");

function Person(name) {
    this.name = name;
}

// Arrow functions cannot be used as constructors
// const ArrowPerson = (name) => {
//     this.name = name;
// };

const john = new Person("John");
console.log(john.name); // "John"

// const jane = new ArrowPerson("Jane"); // Error: ArrowPerson is not a constructor

// Try experimenting with these differences below
`
    },
    
    // Destructuring, Spread/Rest subtopics
    arrayDestructuring: {
        js: `// Array Destructuring Example

// Basic array destructuring
const colors = ["red", "green", "blue"];

// Traditional way to access array elements
const firstColor = colors[0];
const secondColor = colors[1];
const thirdColor = colors[2];
console.log(firstColor, secondColor, thirdColor);

// Using array destructuring
const [red, green, blue] = colors;
console.log(red, green, blue);

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
console.log("After swap:", a, b);

// Nested array destructuring
const nestedArray = [1, [2, 3], 4];
const [one, [two, three], four] = nestedArray;
console.log(one, two, three, four); // 1, 2, 3, 4

// Rest pattern with arrays
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Destructuring function return values
function getCoordinates() {
    return [10, 20, 30];
}

const [x, y, z] = getCoordinates();
console.log(x, y, z); // 10, 20, 30

// Destructuring with iteration
const entries = [["name", "Alice"], ["age", 30], ["city", "New York"]];

for (const [key, value] of entries) {
    console.log(\`\${key}: \${value}\`);
}

// Try creating your own array destructuring examples below
`
    },
    
    objectDestructuring: {
        js: `// Object Destructuring Example

// Sample object
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
console.log(firstHobby, secondHobby); // "reading", "coding"

// Rest pattern with objects
const { firstName: name, ...otherInfo } = person;
console.log(name); // "John"
console.log(otherInfo); // { lastName: "Doe", age: 30, address: {...}, hobbies: [...] }

// Destructuring in function parameters
function printPersonInfo({ firstName, lastName, age = 25 }) {
    console.log(\`\${firstName} \${lastName}, \${age} years old\`);
}

printPersonInfo(person); // "John Doe, 30 years old"
printPersonInfo({ firstName: "Jane", lastName: "Smith" }); // "Jane Smith, 25 years old"

// Destructuring with computed property names
const key = "firstName";
const { [key]: extractedValue } = person;
console.log(extractedValue); // "John"

// Try creating your own object destructuring examples below
`
    },
    
    spreadOperator: {
        js: `// Spread Operator Example

// 1. Spreading arrays
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
// { name: "John", age: 31, city: "New York" }

// Copying an object
const personCopy = { ...person };
personCopy.age = 35;
console.log(person); // { name: "John", age: 30 } - original unchanged
console.log(personCopy); // { name: "John", age: 35 }

// 3. Spread in function calls
function sum(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(sum(...nums)); // 6

// 4. Spread with strings
const str = "hello";
const chars = [...str];
console.log(chars); // ["h", "e", "l", "l", "o"]

// 5. Creating a shallow copy (not deep)
const nestedObj = {
    info: {
        name: "Alice",
        age: 25
    },
    data: [1, 2, 3]
};

const nestedCopy = { ...nestedObj };
nestedCopy.info.name = "Bob"; // This will also change the original
console.log(nestedObj.info.name); // "Bob" - nested objects are still referenced

// 6. Practical examples
// Merging default options with user options
function createWidget(userOptions) {
    const defaultOptions = {
        width: 100,
        height: 100,
        color: "blue"
    };
    
    return { ...defaultOptions, ...userOptions };
}

console.log(createWidget({ height: 200, color: "red" }));
// { width: 100, height: 200, color: "red" }

// Try creating your own spread operator examples below
`
    },
    
    restParameters: {
        js: `// Rest Parameters Example

// 1. Basic rest parameter
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

// 3. Rest parameter must be the last parameter
function processData(id, ...data) {
    console.log(\`Processing data for ID: \${id}\`);
    data.forEach(item => console.log(\`- \${item}\`));
}

processData(123, "item1", "item2", "item3");
// Processing data for ID: 123
// - item1
// - item2
// - item3

// 4. Rest parameter in array destructuring
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(remaining); // [3, 4, 5]

// 5. Rest parameter in object destructuring
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
// { city: "New York", occupation: "Developer", hobbies: ["reading", "traveling"] }

// 6. Using rest parameters with arrow functions
const multiply = (multiplier, ...numbers) => {
    return numbers.map(num => num * multiplier);
};

console.log(multiply(2, 1, 2, 3, 4)); // [2, 4, 6, 8]

// 7. Practical example: Function that accepts any number of arguments
function logAll(...args) {
    args.forEach((arg, index) => {
        console.log(\`Argument \${index}: \${arg} (type: \${typeof arg})\`);
    });
}

logAll(42, "hello", true, { name: "John" }, [1, 2, 3]);
// Argument 0: 42 (type: number)
// Argument 1: hello (type: string)
// Argument 2: true (type: boolean)
// Argument 3: [object Object] (type: object)
// Argument 4: 1,2,3 (type: object)

// Try creating your own rest parameter examples below
`
    },
    
    // Array Methods subtopics
    mapMethod: {
        js: `// Array map() Method Example

// Basic array to work with
const numbers = [1, 2, 3, 4, 5];

// 1. Simple mapping: double each number
const doubled = numbers.map(num => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// 2. Using the index parameter
const withIndexes = numbers.map((num, index) => \`\${index}: \${num}\`);
console.log("With indexes:", withIndexes); 
// ["0: 1", "1: 2", "2: 3", "3: 4", "4: 5"]

// 3. Mapping objects
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

// Extract just the names
const names = users.map(user => user.name);
console.log("Names:", names); // ["Alice", "Bob", "Charlie"]

// Transform to new objects
const userSummaries = users.map(user => ({
    id: user.id,
    summary: \`\${user.name} is \${user.age} years old\`
}));
console.log("User summaries:", userSummaries);
// [{id: 1, summary: "Alice is 25 years old"}, ...]

// 4. Chaining with other methods
const evenDoubled = numbers
    .filter(num => num % 2 === 0) // Keep only even numbers
    .map(num => num * 2);         // Double them
console.log("Even numbers doubled:", evenDoubled); // [4, 8]

// 5. Mapping a string array
const words = ["hello", "world", "javascript"];
const capitalized = words.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
);
console.log("Capitalized:", capitalized); 
// ["Hello", "World", "Javascript"]

// 6. Mapping nested arrays
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArrays.map(arr => arr[0] + arr[1]);
console.log("Sum of nested arrays:", flattened); // [3, 7, 11]

// 7. Practical example: Formatting data from an API
const apiData = [
    { userId: 101, title: "Post 1", completed: false },
    { userId: 102, title: "Post 2", completed: true },
    { userId: 101, title: "Post 3", completed: true }
];

const formattedPosts = apiData.map(post => ({
    id: post.userId,
    title: post.title,
    status: post.completed ? "Completed" : "Pending"
}));
console.log("Formatted posts:", formattedPosts);

// Try creating your own map() examples below
`
    },
    
    filterMethod: {
        js: `// Array filter() Method Example

// Basic array to work with
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Simple filtering: get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Original:", numbers);
console.log("Even numbers:", evenNumbers); // [2, 4, 6, 8, 10]

// 2. Filtering with multiple conditions
const specialNumbers = numbers.filter(num => num > 3 && num < 8);
console.log("Numbers between 3 and 8:", specialNumbers); // [4, 5, 6, 7]

// 3. Using the index parameter
const oddPositionNumbers = numbers.filter((num, index) => index % 2 === 1);
console.log("Numbers at odd positions:", oddPositionNumbers); 
// [2, 4, 6, 8, 10]

// 4. Filtering objects
const users = [
    { id: 1, name: "Alice", age: 25, active: true },
    { id: 2, name: "Bob", age: 30, active: false },
    { id: 3, name: "Charlie", age: 35, active: true },
    { id: 4, name: "Diana", age: 28, active: false },
    { id: 5, name: "Eve", age: 22, active: true }
];

// Get active users
const activeUsers = users.filter(user => user.active);
console.log("Active users:", activeUsers); // [Alice, Charlie, Eve]

// Get users over 25
const olderUsers = users.filter(user => user.age > 25);
console.log("Users over 25:", olderUsers); // [Bob, Charlie, Diana]

// Complex filtering: active users over 25
const activeOlderUsers = users.filter(user => user.active && user.age > 25);
console.log("Active users over 25:", activeOlderUsers); // [Charlie]

// 5. Filtering strings
const words = ["apple", "banana", "grape", "pineapple", "orange"];

// Words longer than 5 characters
const longWords = words.filter(word => word.length > 5);
console.log("Long words:", longWords); // ["banana", "pineapple", "orange"]

// Words that contain 'ap'
const apWords = words.filter(word => word.includes("ap"));
console.log("Words containing 'ap':", apWords); // ["apple", "grape", "pineapple"]

// 6. Filtering out falsy values
const mixedArray = [0, 1, false, 2, "", 3, null, undefined, 4, NaN];
const truthyValues = mixedArray.filter(Boolean);
console.log("Truthy values:", truthyValues); // [1, 2, 3, 4]

// 7. Chaining with other methods
const sumOfEvenSquares = numbers
    .filter(num => num % 2 === 0)        // Keep only even numbers
    .map(num => num * num)               // Square them
    .reduce((sum, square) => sum + square, 0); // Sum them
console.log("Sum of even squares:", sumOfEvenSquares); // 220

// 8. Practical example: Filtering search results
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999 },
    { id: 2, name: "Headphones", category: "Electronics", price: 99 },
    { id: 3, name: "Keyboard", category: "Electronics", price: 49 },
    { id: 4, name: "Coffee Mug", category: "Kitchen", price: 9 },
    { id: 5, name: "Notebook", category: "Office", price: 5 }
];

function searchProducts(query, maxPrice) {
    return products.filter(product => {
        const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
        const matchesPrice = product.price <= maxPrice;
        return matchesQuery && matchesPrice;
    });
}

console.log("Search results:", searchProducts("e", 100));
// [Headphones, Keyboard, Coffee Mug, Notebook]

// Try creating your own filter() examples below
`
    },
    
    reduceMethod: {
        js: `// Array reduce() Method Example

// Basic array to work with
const numbers = [1, 2, 3, 4, 5];

// 1. Simple sum reduction
const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(\`Accumulator: \${accumulator}, Current Value: \${currentValue}\`);
    return accumulator + currentValue;
}, 0);

console.log("Sum:", sum); // 15

// 2. Using an initial value
const sumWithInitial = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    10 // Initial value
);
console.log("Sum with initial value of 10:", sumWithInitial); // 25

// 3. Finding maximum value
const max = numbers.reduce((max, current) => {
    return current > max ? current : max;
}, numbers[0]);
console.log("Maximum value:", max); // 5

// 4. Counting occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
console.log("Fruit count:", fruitCount); 
// { apple: 3, banana: 2, orange: 1 }

// 5. Flattening arrays
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArrays.reduce(
    (accumulator, currentArray) => accumulator.concat(currentArray), 
    []
);
console.log("Flattened array:", flattened); // [1, 2, 3, 4, 5, 6]

// 6. Grouping objects
const people = [
    { name: "Alice", age: 25, department: "Engineering" },
    { name: "Bob", age: 30, department: "Marketing" },
    { name: "Charlie", age: 35, department: "Engineering" },
    { name: "Diana", age: 28, department: "HR" },
    { name: "Eve", age: 22, department: "Marketing" }
];

const byDepartment = people.reduce((groups, person) => {
    const department = person.department;
    groups[department] = groups[department] || [];
    groups[department].push(person);
    return groups;
}, {});

console.log("Grouped by department:", byDepartment);
// { Engineering: [Alice, Charlie], Marketing: [Bob, Eve], HR: [Diana] }

// 7. Creating a pipeline of operations
const pipeline = [
    num => num * 2,        // Double
    num => num - 1,        // Subtract 1
    num => num * num,      // Square
    num => num.toString()  // Convert to string
];

const processNumber = (num, pipeline) => {
    return pipeline.reduce((result, fn) => fn(result), num);
};

console.log("Pipeline result:", processNumber(5, pipeline)); // "81"

// 8. Practical example: Cart total with tax
const cart = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Headphones", price: 99, quantity: 2 },
    { name: "Keyboard", price: 49, quantity: 1 }
];

const cartSummary = cart.reduce((summary, item) => {
    const itemTotal = item.price * item.quantity;
    summary.subtotal += itemTotal;
    summary.tax += itemTotal * 0.08; // 8% tax
    summary.total = summary.subtotal + summary.tax;
    return summary;
}, { subtotal: 0, tax: 0, total: 0 });

console.log("Cart summary:", cartSummary);
// { subtotal: 1247, tax: 99.76, total: 1346.76 }

// Try creating your own reduce() examples below
`
    },
    
    combinedArrayMethods: {
        js: `// Combined Array Methods Example

// Sample data
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 99, inStock: true },
    { id: 3, name: "Keyboard", category: "Electronics", price: 49, inStock: false },
    { id: 4, name: "Mouse", category: "Electronics", price: 29, inStock: true },
    { id: 5, name: "Coffee Mug", category: "Kitchen", price: 9, inStock: true },
    { id: 6, name: "Notebook", category: "Office", price: 5, inStock: true },
    { id: 7, name: "Monitor", category: "Electronics", price: 199, inStock: false },
    { id: 8, name: "Pen Set", category: "Office", price: 15, inStock: true }
];

// Example 1: Get total price of all in-stock electronics
const totalElectronicsPrice = products
    .filter(product => product.category === "Electronics" && product.inStock)
    .map(product => product.price)
    .reduce((total, price) => total + price, 0);

console.log("Total price of in-stock electronics:", totalElectronicsPrice); // 1127

// Example 2: Create a summary of products by category
const productsByCategory = products
    .reduce((categories, product) => {
        // If this category doesn't exist yet, create it
        if (!categories[product.category]) {
            categories[product.category] = {
                count: 0,
                totalValue: 0,
                items: []
            };
        }
        
        // Update the category information
        categories[product.category].count++;
        categories[product.category].totalValue += product.price;
        categories[product.category].items.push(product.name);
        
        return categories;
    }, {});

console.log("Products by category:", productsByCategory);

// Example 3: Find the most expensive product in each category
const mostExpensiveByCategory = Object.entries(
    products.reduce((result, product) => {
        // If we haven't seen this category or this product is more expensive
        if (!result[product.category] || product.price > result[product.category].price) {
            result[product.category] = {
                name: product.name,
                price: product.price
            };
        }
        return result;
    }, {})
);

console.log("Most expensive by category:", mostExpensiveByCategory);

// Example 4: Create a formatted product list with availability
const formattedProducts = products
    .map(product => ({
        name: product.name,
        price: \`$\${product.price}\`,
        status: product.inStock ? "In Stock" : "Out of Stock"
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

console.log("Formatted products:", formattedProducts);

// Example 5: Calculate statistics about the product inventory
const inventoryStats = products.reduce(
    (stats, product) => {
        // Update counts
        stats.totalProducts++;
        if (product.inStock) stats.inStockCount++;
        else stats.outOfStockCount++;
        
        // Update price statistics
        stats.totalValue += product.price;
        
        if (product.price < stats.minPrice) stats.minPrice = product.price;
        if (product.price > stats.maxPrice) stats.maxPrice = product.price;
        
        // Track categories
        if (!stats.categories.includes(product.category)) {
            stats.categories.push(product.category);
        }
        
        return stats;
    },
    {
        totalProducts: 0,
        inStockCount: 0,
        outOfStockCount: 0,
        totalValue: 0,
        minPrice: Infinity,
        maxPrice: -Infinity,
        categories: []
    }
);

// Calculate average price
inventoryStats.averagePrice = (
    inventoryStats.totalValue / inventoryStats.totalProducts
).toFixed(2);

console.log("Inventory statistics:", inventoryStats);

// Example 6: Find products that match search criteria
function searchProducts(query, options = {}) {
    return products
        .filter(product => {
            // Match name
            const nameMatch = product.name
                .toLowerCase()
                .includes(query.toLowerCase());
            
            // Apply category filter if provided
            const categoryMatch = !options.category || 
                product.category === options.category;
            
            // Apply price filter if provided
            const priceMatch = !options.maxPrice || 
                product.price <= options.maxPrice;
            
            // Apply stock filter if provided
            const stockMatch = options.inStockOnly ? 
                product.inStock : true;
            
            return nameMatch && categoryMatch && priceMatch && stockMatch;
        })
        .map(product => \`\${product.name} - $\${product.price}\`);
}

console.log("Search results:", searchProducts("e", { 
    maxPrice: 100, 
    inStockOnly: true 
}));

// Try creating your own combined array methods examples below
`
    }
};