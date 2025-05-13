import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';


const Title = styled.h1`
  margin-bottom: 1rem;
`;

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
      />

      <Title>HTML Basics</Title>

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
      />
    </Layout>
  );
};

export default HtmlBasics;