import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';


const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const HtmlBasics = () => {
  return (
    <Layout>
      <Navigation
        prevLink="/day1"
        nextLink="/day1/headings"
        indexLink="/day1"
        title="HTML Basics"
        subtitle="Learn the fundamentals of HTML, including document structure and basic elements"
      />

      <Section>
        <SectionTitle>What is HTML?</SectionTitle>
        <p>
          HTML (HyperText Markup Language) is the standard markup language for creating web pages.
          It describes the structure of a web page using a series of elements or tags.
        </p>
        <p>
          HTML elements tell the browser how to display the content. They label pieces of content
          such as "this is a heading", "this is a paragraph", "this is a link", etc.
        </p>
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>What is HTML</title>
</head>
<body>
    <h1>Learning HTML</h1>
    <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>
    <p>It describes the structure of a web page using a series of elements or tags.</p>
</body>
</html>`}
          cssCode={`/* Basic styling */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  line-height: 1.6;
  color: #555;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Section>

      <Section>
        <SectionTitle>HTML Document Structure</SectionTitle>
        <p>
          A basic HTML document has the following structure:
        </p>

        <CodeBlock>
          {`<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>`}
        </CodeBlock>

        <p>Let's break down the structure:</p>
        <ul>
          <li><strong>!DOCTYPE html</strong> - Declares the document type and HTML version</li>
          <li><strong>html</strong> - The root element of an HTML page</li>
          <li><strong>head</strong> - Contains meta information about the document</li>
          <li><strong>title</strong> - Specifies a title for the document (shown in the browser tab)</li>
          <li><strong>body</strong> - Contains the visible page content</li>
          <li><strong>h1</strong> - Defines a large heading</li>
          <li><strong>p</strong> - Defines a paragraph</li>
        </ul>
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Document Structure</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Understanding HTML Structure</h1>
    <p>This is a basic HTML document showing the essential structure.</p>
    <p>Try modifying this content to see how it affects the page!</p>
</body>
</html>`}
          cssCode={`/* You can add CSS to style your HTML */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f8f9fa;
}

h1 {
  color: #0066cc;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

p {
  color: #333;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Section>

      <Example title="Basic HTML Document Example">
        <p>Here's how a simple HTML document looks in the browser:</p>
        <div style={{ border: '1px solid #ddd', padding: '20px', marginTop: '10px' }}>
          <h1 style={{ color: '#333' }}>My First Heading</h1>
          <p>My first paragraph.</p>
        </div>

        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>`}
          cssCode={`/* Add your CSS styles here */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1 {
  color: #333;
}

p {
  color: #666;
}`}
          jsCode={`// Add your JavaScript code here
console.log("Hello, world!");

// You can also add event listeners
document.addEventListener("DOMContentLoaded", function() {
  console.log("Document loaded!");
});`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Section>
        <SectionTitle>HTML Elements</SectionTitle>
        <p>
          HTML elements are defined by a start tag, some content, and an end tag:
        </p>
        <CodeBlock>
          {`<tagname>Content goes here...</tagname>`}
        </CodeBlock>

        <p>Examples of HTML elements:</p>
        <ul>
          <li><strong>Headings</strong>: <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code></li>
          <li><strong>Paragraphs</strong>: <code>&lt;p&gt;</code></li>
          <li><strong>Links</strong>: <code>&lt;a&gt;</code></li>
          <li><strong>Images</strong>: <code>&lt;img&gt;</code></li>
          <li><strong>Lists</strong>: <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></li>
          <li><strong>Divisions</strong>: <code>&lt;div&gt;</code></li>
          <li><strong>Spans</strong>: <code>&lt;span&gt;</code></li>
        </ul>
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Elements</title>
</head>
<body>
    <!-- Headings -->
    <h1>This is a Heading 1</h1>
    <h2>This is a Heading 2</h2>
    <h3>This is a Heading 3</h3>
    
    <!-- Paragraph -->
    <p>This is a paragraph element. It contains text content.</p>
    
    <!-- Link -->
    <a href="https://www.example.com">This is a link to Example.com</a>
    
    <!-- Lists -->
    <h3>Unordered List:</h3>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    
    <h3>Ordered List:</h3>
    <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>
    
    <!-- Div and Span -->
    <div>This is a div element - a block-level container</div>
    <p>This paragraph contains a <span style="color: red;">span element</span> which is an inline container.</p>
</body>
</html>`}
          cssCode={`/* Styling for HTML elements */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  padding: 20px;
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #3498db;
}

h3 {
  color: #e74c3c;
}

ul, ol {
  background-color: #f8f9fa;
  padding: 15px 15px 15px 40px;
  border-radius: 5px;
}

div {
  background-color: #e8f4f8;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}

a {
  color: #2980b9;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Section>

      <Section>
        <SectionTitle>HTML Attributes</SectionTitle>
        <p>
          HTML attributes provide additional information about HTML elements:
        </p>
        <CodeBlock>
          {`<tagname attribute="value">Content goes here...</tagname>`}
        </CodeBlock>

        <p>Examples of HTML attributes:</p>
        <ul>
          <li><strong>href</strong>: Specifies the URL of a link</li>
          <li><strong>src</strong>: Specifies the path to an image</li>
          <li><strong>width</strong> and <strong>height</strong>: Specify the dimensions of an image</li>
          <li><strong>alt</strong>: Specifies alternative text for an image</li>
          <li><strong>style</strong>: Specifies inline CSS styles</li>
          <li><strong>class</strong>: Specifies one or more class names for CSS styling</li>
          <li><strong>id</strong>: Specifies a unique id for an element</li>
        </ul>
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Attributes</title>
</head>
<body>
    <h1>HTML Attributes Examples</h1>
    
    <!-- Link with href attribute -->
    <p><a href="https://www.example.com" target="_blank">Visit Example.com</a></p>
    
    <!-- Image with src, alt, width, and height attributes -->
    <img src="https://via.placeholder.com/150" alt="Placeholder Image" width="150" height="150">
    
    <!-- Element with style attribute -->
    <p style="color: blue; font-size: 18px; background-color: #f0f0f0; padding: 10px;">
        This paragraph has inline styles applied using the style attribute.
    </p>
    
    <!-- Elements with class and id attributes -->
    <div id="container" class="content-box highlight">
        This div has both id and class attributes.
    </div>
    
    <!-- Form input with various attributes -->
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required>
        <br><br>
        <input type="submit" value="Submit" disabled>
    </form>
</body>
</html>`}
          cssCode={`/* CSS to style elements with class and id attributes */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  padding: 20px;
}

h1 {
  color: #333;
  text-align: center;
}

/* Styling using class selector */
.content-box {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 20px 0;
  border-radius: 5px;
}

.highlight {
  background-color: #ffffd0;
}

/* Styling using id selector */
#container {
  max-width: 600px;
  margin: 0 auto;
}

/* Form styling */
form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Section>

      <Example title="HTML Element with Attributes">
        <p>Here's an example of an HTML link with the href attribute:</p>
        <CodeBlock>
          {`<a href="https://www.example.com">Visit Example.com</a>`}
        </CodeBlock>

        <p>Result:</p>
        <div style={{ padding: '10px', marginTop: '10px' }}>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a>
        </div>

        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Attributes Example</title>
</head>
<body>
    <h1>HTML Links</h1>
    <p>Here's a link with the href attribute:</p>
    <a href="https://www.example.com">Visit Example.com</a>
    
    <h2>More Attribute Examples</h2>
    <img src="/image.jpg" alt="Placeholder Image" width="150" height="150">
    
    <h2>Local Image Example</h2>
    <img src="image.jpg" alt="Local Image Example" width="300">
    
    <p style="color: blue; font-size: 18px;">This paragraph has style attributes.</p>
    <div id="unique-id" class="container">This div has id and class attributes.</div>
</body>
</html>`}
          cssCode={`/* Add your CSS styles here */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1, h2 {
  color: #333;
}

.container {
  border: 1px solid #ddd;
  padding: 15px;
  margin-top: 20px;
  background-color: #f9f9f9;
}`}
          jsCode={`// Add your JavaScript code here
document.addEventListener("DOMContentLoaded", function() {
  // Change link color when hovering
  const link = document.querySelector("a");
  if (link) {
    link.addEventListener("mouseover", function() {
      this.style.color = "red";
    });
    link.addEventListener("mouseout", function() {
      this.style.color = "";
    });
  }
});`}
          enabledTabs={{ html: true, css: true, js: true }}
        />
      </Example>


      <Navigation
        prevLink="/day1"
        nextLink="/day1/headings"
        indexLink="/day1"
        title="HTML Basics"
        subtitle="Learn the fundamentals of HTML, including document structure and basic elements"
      />
    </Layout>
  );
};

export default HtmlBasics;