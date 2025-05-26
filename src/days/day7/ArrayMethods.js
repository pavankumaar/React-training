import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';
import { day7EditorContent } from './day7_editor_content';

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ArrayMethods = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day7/destructuring-spread-rest" 
        nextLink="/" 
        indexLink="/day7"
        title="Array Methods: map, filter, reduce"
        subtitle="Master functional programming techniques with powerful array methods for transforming and processing data"
      />
      
      <Section>
        <SectionTitle>Introduction to Modern Array Methods</SectionTitle>
        <p>
          Modern JavaScript provides powerful array methods that enable a more functional programming style. These methods make it easier to transform, filter, and process arrays without using traditional loops.
        </p>
        <p>
          The three most important array methods are:
        </p>
        <ul>
          <li><strong>map()</strong>: Transforms each element in an array and returns a new array</li>
          <li><strong>filter()</strong>: Creates a new array with elements that pass a test</li>
          <li><strong>reduce()</strong>: Reduces an array to a single value by applying a function to each element</li>
        </ul>
        <p>
          These methods are:
        </p>
        <ul>
          <li>Immutable (they don't modify the original array)</li>
          <li>Chainable (you can call one method after another)</li>
          <li>Expressive (they make your code more readable and declarative)</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>The map() Method</SectionTitle>
        <p>
          The <code>map()</code> method creates a new array by applying a function to each element in the original array. It's perfect for transforming data.
        </p>
        
        <CodeBlock>
{`// Basic syntax
// array.map(callback(currentValue, index, array) => { ... })

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
// [{id: 1, summary: "Alice is 25 years old"}, ...]`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day7EditorContent.mapMethod.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>The filter() Method</SectionTitle>
        <p>
          The <code>filter()</code> method creates a new array with all elements that pass a test implemented by the provided function. It's great for selecting a subset of data.
        </p>
        
        <CodeBlock>
{`// Basic syntax
// array.filter(callback(currentValue, index, array) => { ... })

// Basic array to work with
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Simple filtering: get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Original:", numbers);
console.log("Even numbers:", evenNumbers); // [2, 4, 6, 8, 10]

// 2. Filtering with multiple conditions
const specialNumbers = numbers.filter(num => num > 3 && num < 8);
console.log("Numbers between 3 and 8:", specialNumbers); // [4, 5, 6, 7]

// 3. Filtering objects
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
console.log("Active users over 25:", activeOlderUsers); // [Charlie]`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day7EditorContent.filterMethod.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>The reduce() Method</SectionTitle>
        <p>
          The <code>reduce()</code> method applies a function against an accumulator and each element in the array to reduce it to a single value. It's the most versatile array method and can be used to implement both <code>map()</code> and <code>filter()</code>.
        </p>
        
        <CodeBlock>
{`// Basic syntax
// array.reduce(callback(accumulator, currentValue, index, array) => { ... }, initialValue)

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
// { apple: 3, banana: 2, orange: 1 }`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day7EditorContent.reduceMethod.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Example title="Advanced reduce() Examples">
        <p>
          The <code>reduce()</code> method is incredibly versatile and can be used for many complex operations:
        </p>
        <CodeBlock>
{`// Flattening arrays
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArrays.reduce(
    (accumulator, currentArray) => accumulator.concat(currentArray), 
    []
);
console.log("Flattened array:", flattened); // [1, 2, 3, 4, 5, 6]

// Grouping objects
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

// Implementing map with reduce
const doubled = numbers.reduce((result, num) => {
    result.push(num * 2);
    return result;
}, []);
console.log("Map with reduce:", doubled); // [2, 4, 6, 8, 10]

// Implementing filter with reduce
const evenNumbers = numbers.reduce((result, num) => {
    if (num % 2 === 0) {
        result.push(num);
    }
    return result;
}, []);
console.log("Filter with reduce:", evenNumbers); // [2, 4]`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>Chaining Array Methods</SectionTitle>
        <p>
          One of the most powerful aspects of these array methods is that they can be chained together to create complex data transformations in a readable way.
        </p>
        
        <CodeBlock>
{`// Sample data
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

// Example 2: Create a formatted product list with availability
const formattedProducts = products
    .map(product => ({
        name: product.name,
        price: \`$\${product.price}\`,
        status: product.inStock ? "In Stock" : "Out of Stock"
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

console.log("Formatted products:", formattedProducts);`}
        </CodeBlock>
        
        <TryEditorButton
          jsCode={day7EditorContent.combinedArrayMethods.js}
          enabledTabs={{ html: false, css: false, js: true }}
        />
      </Section>
      
      <Section>
        <SectionTitle>Other Useful Array Methods</SectionTitle>
        <p>
          While <code>map()</code>, <code>filter()</code>, and <code>reduce()</code> are the most powerful array methods, there are several other useful methods worth knowing:
        </p>
        
        <CodeBlock>
{`// forEach() - Executes a function for each element (doesn't return anything)
numbers.forEach(num => console.log(num));

// find() - Returns the first element that satisfies a condition
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven); // 2

// findIndex() - Returns the index of the first element that satisfies a condition
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("Index of first even number:", firstEvenIndex); // 1

// some() - Tests if at least one element passes a test
const hasEven = numbers.some(num => num % 2 === 0);
console.log("Has even numbers:", hasEven); // true

// every() - Tests if all elements pass a test
const allEven = numbers.every(num => num % 2 === 0);
console.log("All numbers are even:", allEven); // false

// includes() - Checks if an array includes a certain value
const hasThree = numbers.includes(3);
console.log("Includes 3:", hasThree); // true

// sort() - Sorts the elements of an array
const sorted = [...numbers].sort((a, b) => b - a); // Descending order
console.log("Sorted descending:", sorted); // [5, 4, 3, 2, 1]

// flat() - Creates a new array with all sub-array elements concatenated
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("Flattened one level:", nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log("Flattened all levels:", nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6]`}
        </CodeBlock>
      </Section>
      
      <Example title="Real-World Examples">
        <p>
          Here are some common real-world scenarios where these array methods shine:
        </p>
        <CodeBlock>
{`// 1. Data transformation for UI display
const users = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com" }
];

const userList = users.map(user => ({
    id: user.id,
    fullName: \`\${user.firstName} \${user.lastName}\`,
    initials: \`\${user.firstName[0]}\${user.lastName[0]}\`,
    email: user.email
}));

// 2. Filtering data based on search criteria
function searchUsers(users, searchTerm) {
    if (!searchTerm) return users;
    
    const term = searchTerm.toLowerCase();
    return users.filter(user => 
        user.firstName.toLowerCase().includes(term) ||
        user.lastName.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
}

// 3. Calculating statistics
const orders = [
    { id: 1, customer: "John", total: 35.99, status: "completed" },
    { id: 2, customer: "Alice", total: 127.50, status: "pending" },
    { id: 3, customer: "Bob", total: 89.99, status: "completed" },
    { id: 4, customer: "Jane", total: 45.25, status: "cancelled" }
];

const orderStats = orders.reduce((stats, order) => {
    // Count by status
    stats.countByStatus[order.status] = (stats.countByStatus[order.status] || 0) + 1;
    
    // Sum totals
    stats.totalAmount += order.total;
    
    // Track highest order
    if (order.total > stats.highestOrder.amount) {
        stats.highestOrder = { customer: order.customer, amount: order.total };
    }
    
    return stats;
}, { 
    countByStatus: {}, 
    totalAmount: 0, 
    highestOrder: { customer: "", amount: 0 } 
});

// 4. Processing form data
const formData = [
    { name: "username", value: "johndoe" },
    { name: "email", value: "john@example.com" },
    { name: "interests", value: "sports" },
    { name: "interests", value: "music" },
    { name: "newsletter", value: "yes" }
];

const processedData = formData.reduce((result, field) => {
    // Handle multiple values for the same field (like checkboxes)
    if (result[field.name]) {
        if (Array.isArray(result[field.name])) {
            result[field.name].push(field.value);
        } else {
            result[field.name] = [result[field.name], field.value];
        }
    } else {
        result[field.name] = field.value;
    }
    return result;
}, {});

console.log(processedData);
// { username: "johndoe", email: "john@example.com", interests: ["sports", "music"], newsletter: "yes" }`}
        </CodeBlock>
      </Example>
      
      <Section>
        <SectionTitle>Performance Considerations</SectionTitle>
        <p>
          While these array methods are powerful and expressive, there are some performance considerations to keep in mind:
        </p>
        <ul>
          <li>For very large arrays, traditional <code>for</code> loops might be more performant</li>
          <li>Chaining multiple methods creates new intermediate arrays</li>
          <li><code>reduce()</code> can often accomplish the same task as multiple chained methods with better performance</li>
          <li>Early termination is not possible with these methods (except <code>find()</code> and <code>findIndex()</code>)</li>
        </ul>
        
        <CodeBlock>
{`// Performance optimization for large arrays
const largeArray = Array.from({ length: 1000000 }, (_, i) => i);

// Less efficient for very large arrays (creates intermediate arrays)
const result1 = largeArray
    .filter(num => num % 2 === 0)
    .map(num => num * 2);

// More efficient for very large arrays (single pass)
const result2 = largeArray.reduce((result, num) => {
    if (num % 2 === 0) {
        result.push(num * 2);
    }
    return result;
}, []);`}
        </CodeBlock>
      </Section>
      
      <Example title="Best Practices">
        <ul>
          <li><strong>Choose the right method for the job:</strong>
            <ul>
              <li>Use <code>map()</code> when you need to transform each element</li>
              <li>Use <code>filter()</code> when you need to select a subset of elements</li>
              <li>Use <code>reduce()</code> when you need to aggregate data or for complex transformations</li>
              <li>Use <code>forEach()</code> when you just need to execute code for each element without returning anything</li>
            </ul>
          </li>
          <li><strong>Keep callback functions pure:</strong>
            <ul>
              <li>Avoid side effects in your callback functions</li>
              <li>Don't modify the original array or external variables</li>
              <li>Return new objects/arrays instead of mutating existing ones</li>
            </ul>
          </li>
          <li><strong>Use method chaining effectively:</strong>
            <ul>
              <li>Chain methods in a logical order (usually filter → map → reduce)</li>
              <li>Break long chains into multiple lines for readability</li>
              <li>Consider using intermediate variables for complex transformations</li>
            </ul>
          </li>
        </ul>
        <CodeBlock>
{`// Good: Pure functions with no side effects
const doubled = numbers.map(num => num * 2);

// Bad: Side effects
numbers.map(num => {
  someExternalArray.push(num); // Side effect
  return num * 2;
});

// Good: Logical method chaining
const result = data
  .filter(item => item.active)
  .map(item => ({
    id: item.id,
    name: item.name
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

// Good: Using intermediate variables for clarity
const activeItems = data.filter(item => item.active);
const simplifiedItems = activeItems.map(item => ({
  id: item.id,
  name: item.name
}));
const sortedItems = simplifiedItems.sort((a, b) => a.name.localeCompare(b.name));`}
        </CodeBlock>
      </Example>
      
      <Navigation 
        prevLink="/day7/destructuring-spread-rest" 
        nextLink="/" 
        indexLink="/day7"
        title="Array Methods: map, filter, reduce"
        subtitle="Master functional programming techniques with powerful array methods for transforming and processing data"
      />
    </Layout>
  );
};

export default ArrayMethods;