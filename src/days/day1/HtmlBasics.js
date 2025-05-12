import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';


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