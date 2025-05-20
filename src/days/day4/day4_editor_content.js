export const day4EditorContent = {
    // Variables subtopics
    letVariables: {
        js: `// let Variables Example

// Declaring variables with let
let message = "Hello, JavaScript!";
console.log("Initial message:", message);

// Reassigning values
message = "Hello, World!";
console.log("After reassignment:", message);

// Block scope
{
    let blockScopedVar = "I'm only available in this block";
    console.log("Inside block:", blockScopedVar);
}

// This would cause an error if uncommented:
// console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined

// let variables can be declared without initialization
let uninitializedVar;
console.log("Uninitialized variable:", uninitializedVar); // undefined

// let variables cannot be redeclared in the same scope
// This would cause an error if uncommented:
// let message = "Another message"; // SyntaxError: Identifier 'message' has already been declared

// Temporal Dead Zone (TDZ) - variables exist but cannot be accessed before declaration
// This would cause an error if uncommented:
// console.log(tdz); // ReferenceError: Cannot access 'tdz' before initialization
// let tdz = "Temporal Dead Zone example";

// Try modifying these examples or create your own let variables below
// For example, try uncommenting the error examples to see what happens!
`
    },
    
    constVariables: {
        js: `// const Variables Example

// Declaring constants
const PI = 3.14159;
console.log("PI value:", PI);

// This would cause an error if uncommented:
// PI = 3.14; // TypeError: Assignment to constant variable

// const must be initialized when declared
// This would cause an error if uncommented:
// const UNINITIALIZED; // SyntaxError: Missing initializer in const declaration

// Block scope
{
    const BLOCK_CONSTANT = "I'm only available in this block";
    console.log("Inside block:", BLOCK_CONSTANT);
}

// This would cause an error if uncommented:
// console.log(BLOCK_CONSTANT); // ReferenceError: BLOCK_CONSTANT is not defined

// Objects with const
const person = {
    name: "John",
    age: 30
};

// We can modify properties of a const object
console.log("Original person:", person);
person.age = 31;
person.country = "USA"; // Adding new property
console.log("Modified person:", person);

// But we cannot reassign the object itself
// This would cause an error if uncommented:
// person = { name: "Jane", age: 25 }; // TypeError: Assignment to constant variable

// Arrays with const
const numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// We can modify array elements
numbers[0] = 10;
numbers.push(6);
console.log("Modified array:", numbers);

// But we cannot reassign the array
// This would cause an error if uncommented:
// numbers = [10, 20, 30]; // TypeError: Assignment to constant variable

// Try modifying these examples or create your own const variables below
`
    },
    
    varVariables: {
        js: `// var Variables Example

// Declaring variables with var
var oldMessage = "Hello from var!";
console.log("Initial message:", oldMessage);

// Reassigning values
oldMessage = "Updated var message";
console.log("After reassignment:", oldMessage);

// var variables can be redeclared in the same scope
var oldMessage = "Redeclared var message";
console.log("After redeclaration:", oldMessage);

// Function scope (not block scope)
{
    var blockVar = "I'm declared in a block";
    console.log("Inside block:", blockVar);
}

// Still accessible outside the block
console.log("Outside block:", blockVar);

// Function scope demonstration
function scopeTest() {
    var functionScopedVar = "I'm only available in this function";
    console.log("Inside function:", functionScopedVar);
}

scopeTest();
// This would cause an error if uncommented:
// console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined

// Hoisting - var declarations are hoisted to the top of their scope
console.log("Before declaration:", hoistedVar); // undefined (not an error)
var hoistedVar = "I'm hoisted";
console.log("After declaration:", hoistedVar);

// Try modifying these examples or create your own var variables below
`
    },
    
    variableScope: {
        js: `// Variable Scope Example

// Global scope
let globalVar = "I'm a global variable";
const GLOBAL_CONSTANT = "I'm a global constant";

function demonstrateScope() {
    // Function scope
    let functionVar = "I'm a function-scoped variable";
    
    console.log("Inside function - accessing global:", globalVar);
    console.log("Inside function - accessing function-scoped:", functionVar);
    
    // Block scope
    {
        let blockVar = "I'm a block-scoped variable";
        const BLOCK_CONSTANT = "I'm a block-scoped constant";
        var functionScopedVar = "I'm function-scoped, not block-scoped";
        
        console.log("Inside block - accessing global:", globalVar);
        console.log("Inside block - accessing function-scoped:", functionVar);
        console.log("Inside block - accessing block-scoped:", blockVar);
    }
    
    console.log("Outside block - accessing function-scoped var:", functionScopedVar);
    
    // This would cause an error if uncommented:
    // console.log(blockVar); // ReferenceError: blockVar is not defined
    // console.log(BLOCK_CONSTANT); // ReferenceError: BLOCK_CONSTANT is not defined
}

demonstrateScope();
console.log("Global scope - accessing global:", globalVar);

// This would cause an error if uncommented:
// console.log(functionVar); // ReferenceError: functionVar is not defined

// Nested functions and closures
function outerFunction() {
    let outerVar = "I'm from the outer function";
    
    function innerFunction() {
        let innerVar = "I'm from the inner function";
        console.log("Inner function - accessing outer variable:", outerVar);
        console.log("Inner function - accessing inner variable:", innerVar);
    }
    
    console.log("Outer function - accessing outer variable:", outerVar);
    // This would cause an error if uncommented:
    // console.log(innerVar); // ReferenceError: innerVar is not defined
    
    innerFunction();
}

outerFunction();

// Try modifying these examples or create your own scope examples below
`
    },
    
    // Variables (let, const)
    variables: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Variables</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1, h2 {
            color: #333;
        }
        
        .container {
            margin: 20px 0;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        .output {
            background-color: #f5f5f5;
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
            min-height: 20px;
        }
        
        button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 10px;
            margin-top: 10px;
        }
        
        button:hover {
            background-color: #45a049;
        }
        
        code {
            background-color: #f8f9fa;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: Consolas, Monaco, monospace;
        }
    </style>
</head>
<body>
    <h1>JavaScript Variables</h1>
    
    <div class="container">
        <h2>let Variables</h2>
        <p>Variables declared with <code>let</code> can be reassigned:</p>
        <div class="output" id="let-output"></div>
        <button id="let-demo">Run Example</button>
    </div>
    
    <div class="container">
        <h2>const Variables</h2>
        <p>Variables declared with <code>const</code> cannot be reassigned:</p>
        <div class="output" id="const-output"></div>
        <button id="const-demo">Run Example</button>
    </div>
    
    <div class="container">
        <h2>Variable Scope</h2>
        <p>Variables declared with <code>let</code> and <code>const</code> have block scope:</p>
        <div class="output" id="scope-output"></div>
        <button id="scope-demo">Run Example</button>
    </div>
    
    <div class="container">
        <h2>Try It Yourself</h2>
        <p>Modify the code below to see how variables work:</p>
        <div class="output" id="custom-output"></div>
        <button id="custom-demo">Run Custom Code</button>
    </div>
</body>
</html>`,
        js: `// let example
document.getElementById('let-demo').addEventListener('click', function() {
    const output = document.getElementById('let-output');
    output.innerHTML = '';
    
    // Using let
    let count = 0;
    appendToOutput(output, \`Initial count: \${count}\`);
    
    count = count + 1;
    appendToOutput(output, \`After adding 1: \${count}\`);
    
    count += 5;
    appendToOutput(output, \`After adding 5 more: \${count}\`);
});

// const example
document.getElementById('const-demo').addEventListener('click', function() {
    const output = document.getElementById('const-output');
    output.innerHTML = '';
    
    // Using const for primitive value
    const PI = 3.14159;
    appendToOutput(output, \`PI value: \${PI}\`);
    
    try {
        // This will cause an error
        // PI = 3.14;
        appendToOutput(output, "If we uncomment the line 'PI = 3.14', it would cause an error");
    } catch (error) {
        appendToOutput(output, \`Error: \${error.message}\`);
    }
    
    // Using const with objects
    const person = { name: "John", age: 30 };
    appendToOutput(output, \`Initial person object: \${JSON.stringify(person)}\`);
    
    // We can modify properties of a const object
    person.age = 31;
    appendToOutput(output, \`After changing age: \${JSON.stringify(person)}\`);
    
    try {
        // But we cannot reassign the object itself
        // person = { name: "Jane", age: 25 };
        appendToOutput(output, "If we uncomment the reassignment line, it would cause an error");
    } catch (error) {
        appendToOutput(output, \`Error: \${error.message}\`);
    }
});

// Scope example
document.getElementById('scope-demo').addEventListener('click', function() {
    const output = document.getElementById('scope-output');
    output.innerHTML = '';
    
    // Global scope
    let globalVar = "I'm in global scope";
    appendToOutput(output, \`Global variable: \${globalVar}\`);
    
    // Block scope
    {
        let blockVar = "I'm in block scope";
        const constBlockVar = "I'm a constant in block scope";
        
        appendToOutput(output, \`Inside block - blockVar: \${blockVar}\`);
        appendToOutput(output, \`Inside block - constBlockVar: \${constBlockVar}\`);
        appendToOutput(output, \`Inside block - globalVar: \${globalVar}\`);
    }
    
    // blockVar is not accessible here
    appendToOutput(output, "Outside block - trying to access blockVar:");
    try {
        // This will cause an error
        // console.log(blockVar);
        appendToOutput(output, "If we uncomment the blockVar access, it would cause an error");
    } catch (error) {
        appendToOutput(output, \`Error: \${error.message}\`);
    }
    
    // globalVar is still accessible
    appendToOutput(output, \`Outside block - globalVar: \${globalVar}\`);
});

// Custom example - modify this code
document.getElementById('custom-demo').addEventListener('click', function() {
    const output = document.getElementById('custom-output');
    output.innerHTML = '';
    
    // Try modifying these variables and see what happens
    let counter = 10;
    const message = "Hello, JavaScript!";
    
    appendToOutput(output, \`counter: \${counter}\`);
    appendToOutput(output, \`message: \${message}\`);
    
    // Increment counter
    counter++;
    appendToOutput(output, \`counter after increment: \${counter}\`);
    
    // Try creating your own variables here
    // let yourVariable = "Your value";
    // appendToOutput(output, \`yourVariable: \${yourVariable}\`);
});

// Helper function to append text to output
function appendToOutput(element, text) {
    const line = document.createElement('div');
    line.textContent = text;
    element.appendChild(line);
}`
    },
    
    // Data Types subtopics
    primitiveTypes: {
        js: `// Primitive Data Types Example

// String
const name = "John Doe";
const greeting = 'Hello, World!';
const template = \`Hello, \${name}!\`; // Template literal (ES6)

console.log("String examples:");
console.log(name); // "John Doe"
console.log(greeting); // "Hello, World!"
console.log(template); // "Hello, John Doe!"
console.log("typeof name:", typeof name); // "string"

// Number
const integer = 42;
const float = 3.14159;
const negative = -10;
const exponent = 2.5e6; // 2.5 million
const binary = 0b1010; // 10 in binary
const octal = 0o744; // 484 in octal
const hex = 0xFF; // 255 in hexadecimal

console.log("\\nNumber examples:");
console.log(integer); // 42
console.log(float); // 3.14159
console.log(exponent); // 2500000
console.log(binary); // 10
console.log("typeof integer:", typeof integer); // "number"

// Special number values
const infinity = Infinity;
const negInfinity = -Infinity;
const notANumber = NaN;

console.log("\\nSpecial number values:");
console.log(infinity); // Infinity
console.log(negInfinity); // -Infinity
console.log(notANumber); // NaN
console.log("typeof NaN:", typeof notANumber); // "number" (yes, NaN is a number type!)

// Boolean
const isActive = true;
const isComplete = false;

console.log("\\nBoolean examples:");
console.log(isActive); // true
console.log(isComplete); // false
console.log("typeof isActive:", typeof isActive); // "boolean"

// Undefined
let undefinedVar;
const undefinedAssigned = undefined;

console.log("\\nUndefined examples:");
console.log(undefinedVar); // undefined
console.log(undefinedAssigned); // undefined
console.log("typeof undefinedVar:", typeof undefinedVar); // "undefined"

// Null
const nullVar = null;

console.log("\\nNull example:");
console.log(nullVar); // null
console.log("typeof nullVar:", typeof nullVar); // "object" (this is a historical bug in JavaScript)

// Symbol (ES6)
const uniqueSymbol = Symbol("description");
const anotherSymbol = Symbol("description");

console.log("\\nSymbol examples:");
console.log(uniqueSymbol.toString()); // "Symbol(description)"
console.log(uniqueSymbol === anotherSymbol); // false (each Symbol is unique)
console.log("typeof uniqueSymbol:", typeof uniqueSymbol); // "symbol"

// BigInt (ES2020)
const bigInteger = 9007199254740991n; // The 'n' suffix creates a BigInt
const anotherBigInt = BigInt("9007199254740992");

console.log("\\nBigInt examples:");
console.log(bigInteger); // 9007199254740991n
console.log(anotherBigInt); // 9007199254740992n
console.log("typeof bigInteger:", typeof bigInteger); // "bigint"

// Try experimenting with these primitive types or create your own examples below
`
    },
    
    referenceTypes: {
        js: `// Reference Data Types Example

// Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};

console.log("Object example:");
console.log(person);
console.log("Accessing properties:");
console.log(person.firstName); // "John"
console.log(person["lastName"]); // "Doe"
console.log(person.address.city); // "New York"
console.log("typeof person:", typeof person); // "object"

// Array
const colors = ["red", "green", "blue"];
const mixed = [1, "hello", true, null, { name: "John" }];

console.log("\\nArray examples:");
console.log(colors);
console.log(mixed);
console.log("Accessing array elements:");
console.log(colors[0]); // "red"
console.log(mixed[4].name); // "John"
console.log("typeof colors:", typeof colors); // "object"
console.log("Array.isArray(colors):", Array.isArray(colors)); // true

// Function
function greet(name) {
    return \`Hello, \${name}!\`;
}

const arrowGreet = (name) => \`Hi, \${name}!\`;

console.log("\\nFunction examples:");
console.log(greet("World")); // "Hello, World!"
console.log(arrowGreet("JavaScript")); // "Hi, JavaScript!"
console.log("typeof greet:", typeof greet); // "function"

// Date
const today = new Date();
const specificDate = new Date("2023-01-15");

console.log("\\nDate examples:");
console.log(today);
console.log(specificDate);
console.log("typeof today:", typeof today); // "object"

// RegExp (Regular Expression)
const emailPattern = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
const phonePattern = /^\\d{3}-\\d{3}-\\d{4}$/;

console.log("\\nRegExp examples:");
console.log(emailPattern);
console.log(phonePattern.test("123-456-7890")); // true
console.log("typeof emailPattern:", typeof emailPattern); // "object"

// Map (ES6)
const userRoles = new Map();
userRoles.set("John", "Admin");
userRoles.set("Jane", "Editor");
userRoles.set("Bob", "User");

console.log("\\nMap example:");
console.log(userRoles);
console.log(userRoles.get("Jane")); // "Editor"
console.log("typeof userRoles:", typeof userRoles); // "object"

// Set (ES6)
const uniqueNumbers = new Set([1, 2, 3, 2, 1]);

console.log("\\nSet example:");
console.log(uniqueNumbers);
console.log("Set size:", uniqueNumbers.size); // 3 (duplicates are removed)
console.log("typeof uniqueNumbers:", typeof uniqueNumbers); // "object"

// Try experimenting with these reference types or create your own examples below
`
    },
    
    typeConversion: {
        js: `// Type Conversion Example

// String to Number
const numStr = "42";
const floatStr = "3.14";
const invalidNum = "hello";

console.log("String to Number:");
console.log(Number(numStr)); // 42
console.log(parseInt(numStr)); // 42
console.log(parseFloat(floatStr)); // 3.14
console.log(+numStr); // 42 (unary plus operator)
console.log(Number(invalidNum)); // NaN

// Number to String
const num = 123;
const pi = 3.14159;

console.log("\\nNumber to String:");
console.log(String(num)); // "123"
console.log(num.toString()); // "123"
console.log(pi.toFixed(2)); // "3.14" (with 2 decimal places)
console.log(\`\${num}\`); // "123" (template literal)
console.log(num + ""); // "123" (concatenation with empty string)

// Boolean to String/Number
const isTrue = true;
const isFalse = false;

console.log("\\nBoolean conversions:");
console.log(String(isTrue)); // "true"
console.log(Number(isTrue)); // 1
console.log(Number(isFalse)); // 0

// To Boolean
console.log("\\nConversions to Boolean:");
// Falsy values
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false

// Truthy values
console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function(){})); // true

// Implicit type conversion (coercion)
console.log("\\nImplicit type conversion:");
console.log("5" + 3); // "53" (number is converted to string)
console.log("5" - 3); // 2 (string is converted to number)
console.log("5" * "3"); // 15 (strings are converted to numbers)
console.log(5 + true); // 6 (true is converted to 1)
console.log(5 + false); // 5 (false is converted to 0)
console.log("5" == 5); // true (loose equality, type conversion happens)
console.log("5" === 5); // false (strict equality, no type conversion)

// Array and Object conversions
console.log("\\nArray and Object conversions:");
console.log(String([1, 2, 3])); // "1,2,3"
console.log(String({name: "John"})); // "[object Object]"
console.log(Number([1])); // 1
console.log(Number([1, 2])); // NaN
console.log(Number([])); // 0
console.log(Number({})); // NaN

// Try experimenting with type conversions or create your own examples below
`
    },
    
    typeofOperator: {
        js: `// typeof Operator Example

// Basic usage
const string = "Hello";
const number = 42;
const boolean = true;
const undefinedVar = undefined;
const nullVar = null;
const symbol = Symbol("description");
const bigInt = 9007199254740991n;
const array = [1, 2, 3];
const object = { name: "John" };
const func = function() { return "Hello"; };

console.log("typeof string:", typeof string); // "string"
console.log("typeof number:", typeof number); // "number"
console.log("typeof boolean:", typeof boolean); // "boolean"
console.log("typeof undefinedVar:", typeof undefinedVar); // "undefined"
console.log("typeof nullVar:", typeof nullVar); // "object" (historical bug)
console.log("typeof symbol:", typeof symbol); // "symbol"
console.log("typeof bigInt:", typeof bigInt); // "bigint"
console.log("typeof array:", typeof array); // "object"
console.log("typeof object:", typeof object); // "object"
console.log("typeof func:", typeof func); // "function"

// Common gotchas and edge cases
console.log("\\nGotchas and edge cases:");
console.log("typeof NaN:", typeof NaN); // "number"
console.log("typeof [1,2,3]:", typeof [1,2,3]); // "object" (not "array")
console.log("typeof new Date():", typeof new Date()); // "object"
console.log("typeof /regex/:", typeof /regex/); // "object"
console.log("typeof class Person {}:", typeof class Person {}); // "function"

// Better ways to check for arrays
console.log("\\nChecking for arrays:");
console.log("Array.isArray([1,2,3]):", Array.isArray([1,2,3])); // true
console.log("Array.isArray({}):", Array.isArray({})); // false

// Checking for null
console.log("\\nChecking for null:");
console.log("nullVar === null:", nullVar === null); // true

// Checking for NaN
console.log("\\nChecking for NaN:");
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false
console.log("isNaN('hello'):", isNaN("hello")); // true (converts to number first)

// Checking for object type
console.log("\\nChecking object types:");
console.log("Object.prototype.toString.call(array):", Object.prototype.toString.call(array)); // "[object Array]"
console.log("Object.prototype.toString.call(object):", Object.prototype.toString.call(object)); // "[object Object]"
console.log("Object.prototype.toString.call(new Date()):", Object.prototype.toString.call(new Date())); // "[object Date]"

// Using typeof in conditions
function processValue(value) {
    if (typeof value === "string") {
        return \`String value: \${value}\`;
    } else if (typeof value === "number") {
        return \`Numeric value: \${value}\`;
    } else {
        return \`Other type: \${typeof value}\`;
    }
}

console.log("\\nUsing typeof in functions:");
console.log(processValue("hello")); // "String value: hello"
console.log(processValue(42)); // "Numeric value: 42"
console.log(processValue(true)); // "Other type: boolean"

// Try experimenting with typeof or create your own examples below
`
    },
    
    // Operators subtopics
    arithmeticOperators: {
        js: `// Arithmetic Operators Example

// Basic arithmetic operators
const a = 10;
const b = 3;

console.log("Basic arithmetic operations:");
console.log(\`a = \${a}, b = \${b}\`);
console.log(\`a + b = \${a + b}\`); // Addition: 13
console.log(\`a - b = \${a - b}\`); // Subtraction: 7
console.log(\`a * b = \${a * b}\`); // Multiplication: 30
console.log(\`a / b = \${a / b}\`); // Division: 3.3333...
console.log(\`a % b = \${a % b}\`); // Modulus (remainder): 1
console.log(\`a ** b = \${a ** b}\`); // Exponentiation (ES2016): 1000

// Increment and decrement
let x = 5;
let y = 5;

console.log("\\nIncrement and decrement:");
console.log(\`Initial x = \${x}, y = \${y}\`);

// Postfix increment (returns the value before incrementing)
console.log(\`x++ = \${x++}\`); // 5
console.log(\`After x++ = \${x}\`); // 6

// Prefix increment (returns the value after incrementing)
console.log(\`++y = \${++y}\`); // 6
console.log(\`After ++y = \${y}\`); // 6

// Decrement
let c = 8;
let d = 8;

console.log("\\nDecrement examples:");
console.log(\`c-- = \${c--}\`); // 8 (postfix)
console.log(\`After c-- = \${c}\`); // 7
console.log(\`--d = \${--d}\`); // 7 (prefix)
console.log(\`After --d = \${d}\`); // 7

// Unary plus and minus
const str = "42";
const negative = -5;

console.log("\\nUnary operators:");
console.log(\`+str = \${+str}\`); // 42 (converts string to number)
console.log(\`-str = \${-str}\`); // -42
console.log(\`+negative = \${+negative}\`); // -5 (no change)
console.log(\`-negative = \${-negative}\`); // 5 (negates the value)

// Order of operations (follows PEMDAS rule)
const expression = 2 + 3 * 4;
const withParentheses = (2 + 3) * 4;

console.log("\\nOrder of operations:");
console.log(\`2 + 3 * 4 = \${expression}\`); // 14 (multiplication happens first)
console.log(\`(2 + 3) * 4 = \${withParentheses}\`); // 20 (parentheses first)

// Floating point precision issues
const floatResult = 0.1 + 0.2;

console.log("\\nFloating point precision:");
console.log(\`0.1 + 0.2 = \${floatResult}\`); // 0.30000000000000004
console.log(\`0.1 + 0.2 === 0.3: \${floatResult === 0.3}\`); // false
console.log(\`Fixed with toFixed: \${floatResult.toFixed(1)}\`); // "0.3"

// Try experimenting with these operators or create your own examples below
`
    },
    
    assignmentOperators: {
        js: `// Assignment Operators Example

// Basic assignment
let x = 10;
console.log("Basic assignment: x =", x); // 10

// Assignment with operation (compound assignment)
let a = 5;

console.log("\\nCompound assignment examples:");
console.log(\`Initial a = \${a}\`);

a += 3; // Same as: a = a + 3
console.log(\`a += 3: \${a}\`); // 8

a -= 2; // Same as: a = a - 2
console.log(\`a -= 2: \${a}\`); // 6

a *= 4; // Same as: a = a * 4
console.log(\`a *= 4: \${a}\`); // 24

a /= 3; // Same as: a = a / 3
console.log(\`a /= 3: \${a}\`); // 8

a %= 5; // Same as: a = a % 5
console.log(\`a %= 5: \${a}\`); // 3

// Exponentiation assignment (ES2016)
let b = 2;
b **= 3; // Same as: b = b ** 3
console.log(\`b **= 3: \${b}\`); // 8

// Bitwise assignment operators
let c = 5; // Binary: 101

console.log("\\nBitwise assignment examples:");
console.log(\`Initial c = \${c} (binary: \${c.toString(2)})\`);

c &= 3; // Same as: c = c & 3 (Binary: 101 & 011 = 001)
console.log(\`c &= 3: \${c} (binary: \${c.toString(2)})\`); // 1

c = 5; // Reset to 5
c |= 3; // Same as: c = c | 3 (Binary: 101 | 011 = 111)
console.log(\`c |= 3: \${c} (binary: \${c.toString(2)})\`); // 7

c = 5; // Reset to 5
c ^= 3; // Same as: c = c ^ 3 (Binary: 101 ^ 011 = 110)
console.log(\`c ^= 3: \${c} (binary: \${c.toString(2)})\`); // 6

c = 5; // Reset to 5
c <<= 1; // Same as: c = c << 1 (Binary: 101 << 1 = 1010)
console.log(\`c <<= 1: \${c} (binary: \${c.toString(2)})\`); // 10

c = 5; // Reset to 5
c >>= 1; // Same as: c = c >> 1 (Binary: 101 >> 1 = 10)
console.log(\`c >>= 1: \${c} (binary: \${c.toString(2)})\`); // 2

// Logical assignment operators (ES2021)
let d = 0;
let e = "existing";
let f = null;

console.log("\\nLogical assignment examples:");

// Logical OR assignment (assigns if left side is falsy)
d ||= 10; // Same as: d = d || 10
console.log(\`d ||= 10: \${d}\`); // 10

e ||= "new value"; // Won't assign because e is truthy
console.log(\`e ||= "new value": \${e}\`); // "existing"

// Logical AND assignment (assigns if left side is truthy)
d &&= 20; // Same as: d = d && 20
console.log(\`d &&= 20: \${d}\`); // 20

f &&= "won't assign"; // Won't assign because f is falsy
console.log(\`f &&= "won't assign": \${f}\`); // null

// Nullish coalescing assignment (assigns if left side is null or undefined)
let g = 0;
let h = null;

g ??= 42; // Won't assign because g is 0 (not null or undefined)
console.log(\`g ??= 42: \${g}\`); // 0

h ??= "default value"; // Will assign because h is null
console.log(\`h ??= "default value": \${h}\`); // "default value"

// Chaining assignments
let j, k, l;
j = k = l = 5; // All variables get value 5
console.log(\`j = k = l = 5: j = \${j}, k = \${k}, l = \${l}\`);

// Try experimenting with these operators or create your own examples below
`
    },
    
    comparisonOperators: {
        js: `// Comparison Operators Example

// Equal and not equal (loose equality - converts types)
console.log("Loose equality (==, !=):");
console.log(\`5 == 5: \${5 == 5}\`); // true
console.log(\`5 == "5": \${5 == "5"}\`); // true (string "5" is converted to number 5)
console.log(\`0 == false: \${0 == false}\`); // true (false is converted to 0)
console.log(\`"" == false: \${"" == false}\`); // true (both convert to 0)
console.log(\`null == undefined: \${null == undefined}\`); // true

console.log(\`5 != 10: \${5 != 10}\`); // true
console.log(\`5 != "5": \${5 != "5"}\`); // false (they are loosely equal)

// Strict equal and not equal (no type conversion)
console.log("\\nStrict equality (===, !==):");
console.log(\`5 === 5: \${5 === 5}\`); // true
console.log(\`5 === "5": \${5 === "5"}\`); // false (different types)
console.log(\`0 === false: \${0 === false}\`); // false (different types)
console.log(\`null === undefined: \${null === undefined}\`); // false (different types)

console.log(\`5 !== 10: \${5 !== 10}\`); // true
console.log(\`5 !== "5": \${5 !== "5"}\`); // true (different types)

// Greater than and less than
console.log("\\nGreater than and less than (>, <, >=, <=):");
console.log(\`5 > 3: \${5 > 3}\`); // true
console.log(\`5 < 3: \${5 < 3}\`); // false
console.log(\`5 >= 5: \${5 >= 5}\`); // true
console.log(\`5 <= 10: \${5 <= 10}\`); // true

// Comparing different types
console.log("\\nComparing different types:");
console.log(\`"5" > 3: \${"5" > 3}\`); // true (string "5" is converted to number 5)
console.log(\`"apple" < "banana": \${"apple" < "banana"}\`); // true (lexicographical comparison)
console.log(\`"2" > "10": \${"2" > "10"}\`); // true (string comparison, "2" comes after "1" in lexicographical order)

// Special cases
console.log("\\nSpecial comparison cases:");
console.log(\`null > 0: \${null > 0}\`); // false
console.log(\`null == 0: \${null == 0}\`); // false
console.log(\`null >= 0: \${null >= 0}\`); // true (null is converted to 0 in this context)
console.log(\`undefined == 0: \${undefined == 0}\`); // false
console.log(\`undefined > 0: \${undefined > 0}\`); // false
console.log(\`undefined < 0: \${undefined < 0}\`); // false
console.log(\`NaN == NaN: \${NaN == NaN}\`); // false (NaN is not equal to anything, including itself)

// Object comparisons
const obj1 = { name: "John" };
const obj2 = { name: "John" };
const obj3 = obj1;

console.log("\\nObject comparisons:");
console.log(\`obj1 == obj2: \${obj1 == obj2}\`); // false (different objects in memory)
console.log(\`obj1 === obj2: \${obj1 === obj2}\`); // false (different objects in memory)
console.log(\`obj1 == obj3: \${obj1 == obj3}\`); // true (same object reference)
console.log(\`obj1 === obj3: \${obj1 === obj3}\`); // true (same object reference)

// Try experimenting with these operators or create your own examples below
`
    },
    
    logicalOperators: {
        js: `// Logical Operators Example

// Logical AND (&&)
console.log("Logical AND (&&):");
console.log(\`true && true: \${true && true}\`); // true
console.log(\`true && false: \${true && false}\`); // false
console.log(\`false && true: \${false && true}\`); // false
console.log(\`false && false: \${false && false}\`); // false

// Logical OR (||)
console.log("\\nLogical OR (||):");
console.log(\`true || true: \${true || true}\`); // true
console.log(\`true || false: \${true || false}\`); // true
console.log(\`false || true: \${false || true}\`); // true
console.log(\`false || false: \${false || false}\`); // false

// Logical NOT (!)
console.log("\\nLogical NOT (!):");
console.log(\`!true: \${!true}\`); // false
console.log(\`!false: \${!false}\`); // true
console.log(\`!!true: \${!!true}\`); // true (double negation)
console.log(\`!!false: \${!!false}\`); // false (double negation)

// Short-circuit evaluation
console.log("\\nShort-circuit evaluation:");

// AND short-circuit (second operand is not evaluated if first is false)
let a = false && console.log("This won't be logged");
console.log(\`false && anything: \${a}\`); // false

// OR short-circuit (second operand is not evaluated if first is true)
let b = true || console.log("This won't be logged either");
console.log(\`true || anything: \${b}\`); // true

// Using short-circuit for conditional execution
function greet(name) {
    // Only call toUpperCase if name exists
    return name && name.toUpperCase();
}

console.log(\`greet("john"): \${greet("john")}\`); // "JOHN"
console.log(\`greet(): \${greet()}\`); // undefined

// Using OR for default values (pre-ES6)
function welcome(name) {
    // If name is falsy, use "Guest" instead
    return "Welcome, " + (name || "Guest");
}

console.log(\`welcome("John"): \${welcome("John")}\`); // "Welcome, John"
console.log(\`welcome(""): \${welcome("")}\`); // "Welcome, Guest"
console.log(\`welcome(0): \${welcome(0)}\`); // "Welcome, Guest" (0 is falsy)

// Nullish coalescing operator (??) - ES2020
// Returns right side only if left side is null or undefined
console.log("\\nNullish coalescing operator (??):");
console.log(\`null ?? "default": \${null ?? "default"}\`); // "default"
console.log(\`undefined ?? "default": \${undefined ?? "default"}\`); // "default"
console.log(\`"" ?? "default": \${"" ?? "default"}\`); // "" (empty string is not null/undefined)
console.log(\`0 ?? "default": \${0 ?? "default"}\`); // 0 (0 is not null/undefined)
console.log(\`false ?? "default": \${false ?? "default"}\`); // false (false is not null/undefined)

// Logical operators with non-boolean values
console.log("\\nLogical operators with non-boolean values:");
console.log(\`"hello" && "world": \${"hello" && "world"}\`); // "world" (returns last value if all are truthy)
console.log(\`"" && "world": \${"" && "world"}\`); // "" (returns first falsy value)
console.log(\`"hello" || "world": \${"hello" || "world"}\`); // "hello" (returns first truthy value)
console.log(\`"" || "world": \${"" || "world"}\`); // "world" (returns first truthy value)

// Combining logical operators
console.log("\\nCombining logical operators:");
console.log(\`true && false || true: \${true && false || true}\`); // true
console.log(\`false || false && true: \${false || false && true}\`); // false (AND has higher precedence)
console.log(\`(false || false) && true: \${(false || false) && true}\`); // false (parentheses change precedence)

// Try experimenting with these operators or create your own examples below
`
    },
    
    conditionalOperator: {
        js: `// Conditional (Ternary) Operator Example

// Basic syntax: condition ? expressionIfTrue : expressionIfFalse

// Simple example
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(\`Age: \${age}, Status: \${status}\`); // "Adult"

// With different values
const score = 75;
const result = score >= 60 ? "Pass" : "Fail";
console.log(\`Score: \${score}, Result: \${result}\`); // "Pass"

// Using with variables
let a = 5;
let b = 10;
const max = a > b ? a : b;
console.log(\`a: \${a}, b: \${b}, Max: \${max}\`); // 10

// Multiple conditions
const grade = 85;
const letterGrade = 
    grade >= 90 ? "A" :
    grade >= 80 ? "B" :
    grade >= 70 ? "C" :
    grade >= 60 ? "D" : "F";
console.log(\`Grade: \${grade}, Letter Grade: \${letterGrade}\`); // "B"

// Using with functions
function getFee(isMember) {
    return isMember ? 2.00 : 10.00;
}

console.log(\`Member fee: $\${getFee(true)}\`); // $2.00
console.log(\`Non-member fee: $\${getFee(false)}\`); // $10.00

// Assigning default values
const username = "";
const displayName = username ? username : "Guest";
console.log(\`Display name: \${displayName}\`); // "Guest"

// Combining with logical operators
const isLoggedIn = true;
const userMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(userMessage); // "Welcome back!"

// Ternary vs. if-else
let message;
if (age >= 18) {
    message = "You can vote";
} else {
    message = "You cannot vote yet";
}
console.log(\`Using if-else: \${message}\`); // "You can vote"

// Same logic with ternary
const messageWithTernary = age >= 18 ? "You can vote" : "You cannot vote yet";
console.log(\`Using ternary: \${messageWithTernary}\`); // "You can vote"

// Returning values from functions
function getGreeting(hour) {
    return hour < 12 ? "Good morning" :
           hour < 18 ? "Good afternoon" :
           "Good evening";
}

console.log(getGreeting(9)); // "Good morning"
console.log(getGreeting(14)); // "Good afternoon"
console.log(getGreeting(20)); // "Good evening"

// Try experimenting with the ternary operator or create your own examples below
`
    },
    
    // Conditionals subtopics
    ifStatement: {
        js: `// if Statement Example

// Basic if statement
const age = 20;

if (age >= 18) {
    console.log("You are an adult");
}

// if-else statement
const temperature = 15;

if (temperature > 30) {
    console.log("It's hot outside");
} else {
    console.log("It's not hot outside");
}

// if-else if-else statement
const score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Nested if statements
const num = 15;

if (num > 0) {
    console.log("Number is positive");
    
    if (num % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
} else if (num < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

// Using logical operators in conditions
const username = "admin";
const password = "password123";

if (username === "admin" && password === "password123") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

// Checking multiple conditions with OR
const day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
} else {
    console.log("It's a weekday");
}

// Truthy and falsy values
const userInput = "";

if (userInput) {
    console.log("Input provided:", userInput);
} else {
    console.log("No input provided");
}

// Using the NOT operator
const isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in to continue");
}

// Single-line if statement (without curly braces)
const isAdmin = true;
if (isAdmin) console.log("Admin access granted");

// Multiple statements in a block
const hour = 20;

if (hour >= 22) {
    console.log("Good night");
    console.log("Time to sleep");
} else if (hour >= 18) {
    console.log("Good evening");
    console.log("Time to relax");
} else if (hour >= 12) {
    console.log("Good afternoon");
    console.log("Time to work");
} else {
    console.log("Good morning");
    console.log("Time to wake up");
}

// Try modifying these examples or create your own if statements below
`
    },
    
    switchStatement: {
        js: `// switch Statement Example

// Basic switch statement
const day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(\`Day \${day} is \${dayName}\`); // "Day 3 is Wednesday"

// Without break statements (falls through)
const grade = "B";
let feedback;

switch (grade) {
    case "A":
        feedback = "Excellent! ";
        // Falls through to B
    case "B":
        feedback = (feedback || "") + "Good job! ";
        // Falls through to C
    case "C":
        feedback = (feedback || "") + "Passing grade.";
        break;
    case "D":
    case "F":
        feedback = "You need to improve.";
        break;
    default:
        feedback = "Invalid grade";
}

console.log(\`Grade \${grade} feedback: \${feedback}\`); // "Grade B feedback: Good job! Passing grade."

// Using expressions in case values
const score = 85;

switch (true) {
    case score >= 90:
        console.log("Grade: A");
        break;
    case score >= 80:
        console.log("Grade: B");
        break;
    case score >= 70:
        console.log("Grade: C");
        break;
    case score >= 60:
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}

// Multiple cases with the same code
const month = "February";
let days;

switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        days = 31;
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        days = 30;
        break;
    case "February":
        days = 28; // Not accounting for leap years for simplicity
        break;
    default:
        days = "Unknown month";
}

console.log(\`\${month} has \${days} days\`); // "February has 28 days"

// switch with strings
const fruit = "apple";

switch (fruit.toLowerCase()) {
    case "apple":
        console.log("Apples are red or green");
        break;
    case "banana":
        console.log("Bananas are yellow");
        break;
    case "orange":
        console.log("Oranges are orange");
        break;
    default:
        console.log("I don't know that fruit");
}

// Using switch for command processing
const command = "help";

switch (command) {
    case "start":
        console.log("Starting the application...");
        break;
    case "stop":
        console.log("Stopping the application...");
        break;
    case "restart":
        console.log("Restarting the application...");
        break;
    case "help":
        console.log("Available commands: start, stop, restart, help");
        break;
    default:
        console.log(\`Unknown command: \${command}\`);
}

// Try modifying these examples or create your own switch statements below
`
    },
    
    nullishCoalescing: {
        js: `// Nullish Coalescing Operator (??) Example

// Basic usage
const username = null;
const displayName = username ?? "Guest";
console.log(\`Display name: \${displayName}\`); // "Guest"

// Comparison with OR operator
const count = 0;
const defaultCount = 10;

// Using OR operator (||)
const countWithOr = count || defaultCount;
console.log(\`Count with OR: \${countWithOr}\`); // 10 (0 is falsy, so defaultCount is used)

// Using nullish coalescing operator (??)
const countWithNullish = count ?? defaultCount;
console.log(\`Count with nullish coalescing: \${countWithNullish}\`); // 0 (0 is not null/undefined)

// More examples
const values = {
    a: null,
    b: undefined,
    c: 0,
    d: "",
    e: false,
    f: NaN,
    g: "Hello"
};

console.log("\\nComparing ?? and || with different values:");

for (const [key, value] of Object.entries(values)) {
    const withOr = value || "Default";
    const withNullish = value ?? "Default";
    
    console.log(\`\${key}: \${value}\`);
    console.log(\`  value || "Default": \${withOr}\`);
    console.log(\`  value ?? "Default": \${withNullish}\`);
    console.log("---");
}

// Chaining nullish coalescing
const settings = {
    theme: null,
    // Other properties not defined
};

const theme = settings.theme ?? settings.defaultTheme ?? "light";
console.log(\`Theme: \${theme}\`); // "light"

// Nullish coalescing with optional chaining
const user = {
    profile: null
};

// Without optional chaining, this would throw an error
// const userCity = user.profile.city ?? "Unknown";

// With optional chaining
const userCity = user.profile?.city ?? "Unknown";
console.log(\`User city: \${userCity}\`); // "Unknown"

// Using with function parameters
function greet(name) {
    return \`Hello, \${name ?? "Guest"}!\`;
}

console.log(greet("John")); // "Hello, John!"
console.log(greet()); // "Hello, Guest!"
console.log(greet(null)); // "Hello, Guest!"

// Using with computed properties
const key = null;
const obj = {
    key1: "Value 1",
    key2: "Value 2"
};

const value = obj[key ?? "key1"];
console.log(\`Value: \${value}\`); // "Value 1"

// Try experimenting with the nullish coalescing operator or create your own examples below
`
    },
    
    optionalChaining: {
        js: `// Optional Chaining Operator (?.) Example

// Object with nested properties
const user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    contact: {
        email: "john@example.com"
    },
    orders: [
        { id: 1, product: "Laptop" },
        { id: 2, product: "Phone" }
    ],
    getFullName: function() {
        return this.name + " Doe";
    }
};

// Without optional chaining
console.log("Without optional chaining:");

// This works fine
console.log(\`Name: \${user.name}\`); // "John"
console.log(\`City: \${user.address.city}\`); // "New York"

// This would cause an error if uncommented
// const country = user.address.country.name; // Error: Cannot read property 'name' of undefined

// Traditional way to avoid errors
let country;
if (user.address && user.address.country && user.address.country.name) {
    country = user.address.country.name;
} else {
    country = "Unknown";
}
console.log(\`Country (traditional way): \${country}\`); // "Unknown"

// With optional chaining
console.log("\\nWith optional chaining:");

// Accessing nested properties safely
const city = user.address?.city;
console.log(\`City: \${city}\`); // "New York"

const country2 = user.address?.country?.name ?? "Unknown";
console.log(\`Country: \${country2}\`); // "Unknown"

const phone = user.contact?.phone ?? "No phone provided";
console.log(\`Phone: \${phone}\`); // "No phone provided"

// Accessing array elements
const firstOrder = user.orders?.[0]?.product;
console.log(\`First order: \${firstOrder}\`); // "Laptop"

const thirdOrder = user.orders?.[2]?.product ?? "No such order";
console.log(\`Third order: \${thirdOrder}\`); // "No such order"

// Calling methods
const fullName = user.getFullName?.();
console.log(\`Full name: \${fullName}\`); // "John Doe"

const formatName = user.formatName?.() ?? "Method not available";
console.log(\`Formatted name: \${formatName}\`); // "Method not available"

// More complex example
const company = {
    departments: {
        engineering: {
            employees: [
                { name: "Alice", position: "Developer" },
                { name: "Bob", position: "Manager" }
            ]
        }
    }
};

// Deeply nested property access
const engineeringManager = company.departments?.engineering?.employees?.[1]?.position ?? "Unknown";
console.log(\`Engineering manager position: \${engineeringManager}\`); // "Manager"

const marketingManager = company.departments?.marketing?.employees?.[0]?.position ?? "Department not found";
console.log(\`Marketing manager position: \${marketingManager}\`); // "Department not found"

// Using with expressions
const departmentName = "engineering";
const employeePosition = company.departments?.[departmentName]?.employees?.[0]?.position ?? "Not found";
console.log(\`Employee position: \${employeePosition}\`); // "Developer"

// Try experimenting with the optional chaining operator or create your own examples below
`
    },
    
    // Data Types
    dataTypes: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Data Types</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1, h2 {
            color: #333;
        }
        
        .container {
            margin: 20px 0;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        .output {
            background-color: #f5f5f5;
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
            min-height: 20px;
        }
        
        button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 10px;
            margin-top: 10px;
        }
        
        button:hover {
            background-color: #45a049;
        }
        
        .type-box {
            display: inline-block;
            margin: 5px;
            padding: 10px;
            border-radius: 5px;
            background-color: #e9f7ef;
            min-width: 120px;
            text-align: center;
        }
        
        code {
            background-color: #f8f9fa;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: Consolas, Monaco, monospace;
        }
    </style>
</head>
<body>
    <h1>JavaScript Data Types</h1>
    
    <div class="container">
        <h2>Primitive Data Types</h2>
        <div class="type-boxes">
            <div class="type-box">String</div>
            <div class="type-box">Number</div>
            <div class="type-box">Boolean</div>
            <div class="type-box">Undefined</div>
            <div class="type-box">Null</div>
            <div class="type-box">Symbol</div>
            <div class="type-box">BigInt</div>
        </div>
        <div class="output" id="primitive-output"></div>
        <button id="primitive-demo">Run Example</button>
    </div>
    
    <div class="container">
        <h2>Reference Data Types</h2>
        <div class="type-boxes">
            <div class="type-box">Object</div>
            <div class="type-box">Array</div>
            <div class="type-box">Function</div>
            <div class="type-box">Date</div>
            <div class="type-box">RegExp</div>
        </div>
        <div class="output" id="reference-output"></div>
        <button id="reference-demo">Run Example</button>
    </div>
    
    <div class="container">
        <h2>Type Conversion</h2>
        <p>JavaScript can convert between different data types:</p>
        <div class="output" id="conversion-output"></div>
        <button id="conversion-demo">Run Example</button>
    </div>
    
    <div class="container">
        <h2>typeof Operator</h2>
        <p>Use the <code>typeof</code> operator to check the data type:</p>
        <div class="output" id="typeof-output"></div>
        <button id="typeof-demo">Run Example</button>
    </div>
</body>
</html>`,
        js: `// Primitive data types
document.getElementById('primitive-demo').addEventListener('click', function() {
    const output = document.getElementById('primitive-output');
    output.innerHTML = '';
    
    // String
    const name = "John Doe";
    appendToOutput(output, \`String: \${name} (typeof: \${typeof name})\`);
    
    // Number
    const age = 30;
    const price = 19.99;
    appendToOutput(output, \`Integer Number: \${age} (typeof: \${typeof age})\`);
    appendToOutput(output, \`Decimal Number: \${price} (typeof: \${typeof price})\`);
    
    // Boolean
    const isActive = true;
    appendToOutput(output, \`Boolean: \${isActive} (typeof: \${typeof isActive})\`);
    
    // Undefined
    let undefinedVar;
    appendToOutput(output, \`Undefined: \${undefinedVar} (typeof: \${typeof undefinedVar})\`);
    
    // Null
    const nullVar = null;
    appendToOutput(output, \`Null: \${nullVar} (typeof: \${typeof nullVar})\`);
    
    // Symbol (ES6)
    const symbolVar = Symbol('unique');
    appendToOutput(output, \`Symbol: \${symbolVar.toString()} (typeof: \${typeof symbolVar})\`);
    
    // BigInt (ES2020)
    const bigIntVar = BigInt(9007199254740991);
    appendToOutput(output, \`BigInt: \${bigIntVar} (typeof: \${typeof bigIntVar})\`);
});

// Reference data types
document.getElementById('reference-demo').addEventListener('click', function() {
    const output = document.getElementById('reference-output');
    output.innerHTML = '';
    
    // Object
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };
    appendToOutput(output, \`Object: \${JSON.stringify(person)} (typeof: \${typeof person})\`);
    
    // Array
    const colors = ["red", "green", "blue"];
    appendToOutput(output, \`Array: \${JSON.stringify(colors)} (typeof: \${typeof colors})\`);
    appendToOutput(output, \`Is Array? \${Array.isArray(colors)}\`);
    
    // Function
    function greet(name) {
        return \`Hello, \${name}!\`;
    }
    appendToOutput(output, \`Function: \${greet.toString().substring(0, 50)}... (typeof: \${typeof greet})\`);
    appendToOutput(output, \`Function call result: \${greet("World")}\`);
    
    // Date
    const today = new Date();
    appendToOutput(output, \`Date: \${today} (typeof: \${typeof today})\`);
    
    // RegExp
    const pattern = /^\\d{3}-\\d{2}-\\d{4}$/;
    appendToOutput(output, \`RegExp: \${pattern} (typeof: \${typeof pattern})\`);
});

// Type conversion
document.getElementById('conversion-demo').addEventListener('click', function() {
    const output = document.getElementById('conversion-output');
    output.innerHTML = '';
    
    // String to Number
    const numStr = "42";
    const num1 = Number(numStr);
    const num2 = parseInt(numStr);
    const num3 = +numStr;
    
    appendToOutput(output, \`Original string: "\${numStr}" (typeof: \${typeof numStr})\`);
    appendToOutput(output, \`Number(numStr): \${num1} (typeof: \${typeof num1})\`);
    appendToOutput(output, \`parseInt(numStr): \${num2} (typeof: \${typeof num2})\`);
    appendToOutput(output, \`+numStr: \${num3} (typeof: \${typeof num3})\`);
    
    // Number to String
    const num = 123;
    const str1 = String(num);
    const str2 = num.toString();
    const str3 = num + "";
    
    appendToOutput(output, \`Original number: \${num} (typeof: \${typeof num})\`);
    appendToOutput(output, \`String(num): "\${str1}" (typeof: \${typeof str1})\`);
    appendToOutput(output, \`num.toString(): "\${str2}" (typeof: \${typeof str2})\`);
    appendToOutput(output, \`num + "": "\${str3}" (typeof: \${typeof str3})\`);
    
    // Boolean conversion
    appendToOutput(output, \`Boolean(1): \${Boolean(1)}\`);
    appendToOutput(output, \`Boolean(0): \${Boolean(0)}\`);
    appendToOutput(output, \`Boolean(""): \${Boolean("")}\`);
    appendToOutput(output, \`Boolean("hello"): \${Boolean("hello")}\`);
    appendToOutput(output, \`Boolean(null): \${Boolean(null)}\`);
    appendToOutput(output, \`Boolean(undefined): \${Boolean(undefined)}\`);
});

// typeof operator
document.getElementById('typeof-demo').addEventListener('click', function() {
    const output = document.getElementById('typeof-output');
    output.innerHTML = '';
    
    const examples = [
        { value: "Hello", label: '"Hello"' },
        { value: 42, label: '42' },
        { value: true, label: 'true' },
        { value: undefined, label: 'undefined' },
        { value: null, label: 'null' },
        { value: {}, label: '{}' },
        { value: [], label: '[]' },
        { value: function() {}, label: 'function() {}' },
        { value: new Date(), label: 'new Date()' }
    ];
    
    examples.forEach(example => {
        appendToOutput(output, \`typeof \${example.label}: \${typeof example.value}\`);
    });
    
    // Special cases
    appendToOutput(output, "\\nSpecial cases:");
    appendToOutput(output, \`typeof null: \${typeof null} (This is a known JavaScript quirk)\`);
    appendToOutput(output, \`Array.isArray([]): \${Array.isArray([])}\`);
    appendToOutput(output, \`Object.prototype.toString.call([]): \${Object.prototype.toString.call([])}\`);
});

// Helper function to append text to output
function appendToOutput(element, text) {
    const line = document.createElement('div');
    line.textContent = text;
    element.appendChild(line);
}`
    },
    
    // Operators and Conditionals
    operatorsConditionals: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Operators and Conditionals</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1, h2 {
            color: #333;
        }
        
        .container {
            margin: 20px 0;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        .output {
            background-color: #f5f5f5;
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
            min-height: 20px;
        }
        
        button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 10px;
            margin-top: 10px;
        }
        
        button:hover {
            background-color: #45a049;
        }
        
        input {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-right: 10px;
        }
        
        code {
            background-color: #f8f9fa;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: Consolas, Monaco, monospace;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>JavaScript Operators and Conditionals</h1>
    
    <div class="container">
        <h2>Arithmetic Operators</h2>
        <table>
            <tr>
                <th>Operator</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>+</td>
                <td>Addition</td>
                <td>5 + 2 = 7</td>
            </tr>
            <tr>
                <td>-</td>
                <td>Subtraction</td>
                <td>5 - 2 = 3</td>
            </tr>
            <tr>
                <td>*</td>
                <td>Multiplication</td>
                <td>5 * 2 = 10</td>
            </tr>
            <tr>
                <td>/</td>
                <td>Division</td>
                <td>5 / 2 = 2.5</td>
            </tr>
            <tr>
                <td>%</td>
                <td>Modulus (Remainder)</td>
                <td>5 % 2 = 1</td>
            </tr>
            <tr>
                <td>++</td>
                <td>Increment</td>
                <td>let x = 5; x++; // x is now 6</td>
            </tr>
            <tr>
                <td>--</td>
                <td>Decrement</td>
                <td>let x = 5; x--; // x is now 4</td>
            </tr>
        </table>
        <div class="output" id="arithmetic-output"></div>
        <button id="arithmetic-demo">Run Example</button>
    </div>
    
    <div class="container">
        <h2>Comparison Operators</h2>
        <table>
            <tr>
                <th>Operator</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>==</td>
                <td>Equal to (value)</td>
                <td>5 == "5" is true</td>
            </tr>
            <tr>
                <td>===</td>
                <td>Equal to (value and type)</td>
                <td>5 === "5" is false</td>
            </tr>
            <tr>
                <td>!=</td>
                <td>Not equal to (value)</td>
                <td>5 != "6" is true</td>
            </tr>
            <tr>
                <td>!==</td>
                <td>Not equal to (value and type)</td>
                <td>5 !== "5" is true</td>
            </tr>
            <tr>
                <td>></td>
                <td>Greater than</td>
                <td>5 > 3 is true</td>
            </tr>
            <tr>
                <td><</td>
                <td>Less than</td>
                <td>5 < 3 is false</td>
            </tr>
            <tr>
                <td>>=</td>
                <td>Greater than or equal to</td>
                <td>5 >= 5 is true</td>
            </tr>
            <tr>
                <td><=</td>
                <td>Less than or equal to</td>
                <td>5 <= 3 is false</td>
            </tr>
        </table>
        <div class="output" id="comparison-output"></div>
        <button id="comparison-demo">Run Example</button>
    </div>
    
    <div class="container">
        <h2>Logical Operators</h2>
        <table>
            <tr>
                <th>Operator</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>&&</td>
                <td>Logical AND</td>
                <td>(5 > 3) && (2 < 4) is true</td>
            </tr>
            <tr>
                <td>||</td>
                <td>Logical OR</td>
                <td>(5 < 3) || (2 < 4) is true</td>
            </tr>
            <tr>
                <td>!</td>
                <td>Logical NOT</td>
                <td>!(5 > 3) is false</td>
            </tr>
        </table>
        <div class="output" id="logical-output"></div>
        <button id="logical-demo">Run Example</button>
    </div>
    
    <div class="container">
        <h2>Conditional Statements</h2>
        <h3>if...else Statement</h3>
        <div class="output" id="if-else-output"></div>
        <div>
            <input type="number" id="age-input" placeholder="Enter your age" value="18">
            <button id="if-else-demo">Check Age</button>
        </div>
        
        <h3>switch Statement</h3>
        <div class="output" id="switch-output"></div>
        <div>
            <input type="text" id="day-input" placeholder="Enter day of week" value="Monday">
            <button id="switch-demo">Check Day</button>
        </div>
        
        <h3>Ternary Operator</h3>
        <div class="output" id="ternary-output"></div>
        <div>
            <input type="number" id="score-input" placeholder="Enter score" value="75">
            <button id="ternary-demo">Check Score</button>
        </div>
    </div>
</body>
</html>`,
        js: `// Arithmetic operators
document.getElementById('arithmetic-demo').addEventListener('click', function() {
    const output = document.getElementById('arithmetic-output');
    output.innerHTML = '';
    
    let x = 10;
    let y = 5;
    
    appendToOutput(output, \`x = \${x}, y = \${y}\`);
    appendToOutput(output, \`Addition (x + y): \${x + y}\`);
    appendToOutput(output, \`Subtraction (x - y): \${x - y}\`);
    appendToOutput(output, \`Multiplication (x * y): \${x * y}\`);
    appendToOutput(output, \`Division (x / y): \${x / y}\`);
    appendToOutput(output, \`Modulus (x % y): \${x % y}\`);
    
    let z = 5;
    appendToOutput(output, \`\\nz = \${z}\`);
    appendToOutput(output, \`Increment (z++): \${z++}\`); // Post-increment (returns 5, then increments)
    appendToOutput(output, \`After increment: z = \${z}\`); // Now z is 6
    
    appendToOutput(output, \`Pre-increment (++z): \${++z}\`); // Pre-increment (increments first, then returns 7)
    
    appendToOutput(output, \`Decrement (z--): \${z--}\`); // Post-decrement (returns 7, then decrements)
    appendToOutput(output, \`After decrement: z = \${z}\`); // Now z is 6
    
    appendToOutput(output, \`Pre-decrement (--z): \${--z}\`); // Pre-decrement (decrements first, then returns 5)
});

// Comparison operators
document.getElementById('comparison-demo').addEventListener('click', function() {
    const output = document.getElementById('comparison-output');
    output.innerHTML = '';
    
    let x = 5;
    let y = "5";
    let z = 10;
    
    appendToOutput(output, \`x = \${x} (number), y = "\${y}" (string), z = \${z} (number)\`);
    
    // Equal operators
    appendToOutput(output, \`\\nEqual operators:\`);
    appendToOutput(output, \`x == y: \${x == y}\`); // true (value equality)
    appendToOutput(output, \`x === y: \${x === y}\`); // false (strict equality - different types)
    
    // Not equal operators
    appendToOutput(output, \`\\nNot equal operators:\`);
    appendToOutput(output, \`x != y: \${x != y}\`); // false (value inequality)
    appendToOutput(output, \`x !== y: \${x !== y}\`); // true (strict inequality - different types)
    
    // Comparison operators
    appendToOutput(output, \`\\nComparison operators:\`);
    appendToOutput(output, \`x > z: \${x > z}\`); // false
    appendToOutput(output, \`x < z: \${x < z}\`); // true
    appendToOutput(output, \`x >= 5: \${x >= 5}\`); // true
    appendToOutput(output, \`z <= 10: \${z <= 10}\`); // true
});

// Logical operators
document.getElementById('logical-demo').addEventListener('click', function() {
    const output = document.getElementById('logical-output');
    output.innerHTML = '';
    
    let x = 5;
    let y = 10;
    
    appendToOutput(output, \`x = \${x}, y = \${y}\`);
    
    // Logical AND (&&)
    appendToOutput(output, \`\\nLogical AND (&&):\`);
    appendToOutput(output, \`(x < 10) && (y > 5): \${(x < 10) && (y > 5)}\`); // true && true = true
    appendToOutput(output, \`(x > 10) && (y > 5): \${(x > 10) && (y > 5)}\`); // false && true = false
    
    // Logical OR (||)
    appendToOutput(output, \`\\nLogical OR (||):\`);
    appendToOutput(output, \`(x < 10) || (y < 5): \${(x < 10) || (y < 5)}\`); // true || false = true
    appendToOutput(output, \`(x > 10) || (y < 5): \${(x > 10) || (y < 5)}\`); // false || false = false
    
    // Logical NOT (!)
    appendToOutput(output, \`\\nLogical NOT (!):\`);
    appendToOutput(output, \`!(x < 10): \${!(x < 10)}\`); // !true = false
    appendToOutput(output, \`!(x > 10): \${!(x > 10)}\`); // !false = true
    
    // Short-circuit evaluation
    appendToOutput(output, \`\\nShort-circuit evaluation:\`);
    
    let a = 0;
    let result = (a !== 0) && (10 / a > 1); // Second part won't evaluate due to short-circuit
    appendToOutput(output, \`(a !== 0) && (10 / a > 1): \${result}\`); // false, no division by zero error
    
    let b = null;
    let value = b || "default value"; // If b is falsy, use default value
    appendToOutput(output, \`b || "default value": \${value}\`); // "default value"
});

// if...else statement
document.getElementById('if-else-demo').addEventListener('click', function() {
    const output = document.getElementById('if-else-output');
    output.innerHTML = '';
    
    const age = parseInt(document.getElementById('age-input').value);
    
    appendToOutput(output, \`Age entered: \${age}\`);
    
    if (age < 0) {
        appendToOutput(output, "Invalid age: Age cannot be negative");
    } else if (age < 13) {
        appendToOutput(output, "You are a child");
    } else if (age < 18) {
        appendToOutput(output, "You are a teenager");
    } else if (age < 65) {
        appendToOutput(output, "You are an adult");
    } else {
        appendToOutput(output, "You are a senior");
    }
    
    // Nested if example
    appendToOutput(output, "\\nNested if example:");
    if (age >= 18) {
        appendToOutput(output, "You can vote");
        
        if (age >= 21) {
            appendToOutput(output, "You can also drink in the US");
        } else {
            appendToOutput(output, "You cannot drink in the US yet");
        }
    } else {
        appendToOutput(output, "You cannot vote yet");
    }
});

// switch statement
document.getElementById('switch-demo').addEventListener('click', function() {
    const output = document.getElementById('switch-output');
    output.innerHTML = '';
    
    const day = document.getElementById('day-input').value.toLowerCase();
    
    appendToOutput(output, \`Day entered: \${day}\`);
    
    switch (day) {
        case 'monday':
            appendToOutput(output, "It's the start of the work week");
            break;
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
            appendToOutput(output, "It's a work day");
            break;
        case 'friday':
            appendToOutput(output, "It's almost the weekend");
            break;
        case 'saturday':
        case 'sunday':
            appendToOutput(output, "It's the weekend!");
            break;
        default:
            appendToOutput(output, "That's not a valid day of the week");
    }
});

// Ternary operator
document.getElementById('ternary-demo').addEventListener('click', function() {
    const output = document.getElementById('ternary-output');
    output.innerHTML = '';
    
    const score = parseInt(document.getElementById('score-input').value);
    
    appendToOutput(output, \`Score entered: \${score}\`);
    
    // Using if...else
    appendToOutput(output, "\\nUsing if...else:");
    if (score >= 60) {
        appendToOutput(output, "Result: Pass");
    } else {
        appendToOutput(output, "Result: Fail");
    }
    
    // Using ternary operator
    appendToOutput(output, "\\nUsing ternary operator:");
    const result = score >= 60 ? "Pass" : "Fail";
    appendToOutput(output, \`Result: \${result}\`);
    
    // Nested ternary
    appendToOutput(output, "\\nUsing nested ternary operator:");
    const grade = score >= 90 ? "A" : 
                  score >= 80 ? "B" : 
                  score >= 70 ? "C" : 
                  score >= 60 ? "D" : "F";
    appendToOutput(output, \`Grade: \${grade}\`);
});

// Helper function to append text to output
function appendToOutput(element, text) {
    const line = document.createElement('div');
    line.textContent = text;
    element.appendChild(line);
}`
    }
};