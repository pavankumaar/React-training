import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import CompleteButton from '../../components/CompleteButton';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  background-color: yellow;
  padding: 2px;
`;

const StyledParagraph = styled.p`
  color: red;
  font-size: 20px;
  background-color: lightgray;
  padding: 10px;
`;

const UniqueElement = styled.div`
  /* Styling for the unique ID element */
`;

const Attributes = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day1/paragraphs-text" 
        nextLink="/day1/tables" 
        indexLink="/day1" 
      />
      
      <Title>HTML Attributes</Title>
      
      <Example title="What are HTML Attributes?">
        <p>HTML attributes provide additional information about HTML elements:</p>
        <ul>
          <li>All HTML elements can have attributes</li>
          <li>Attributes provide additional information about elements</li>
          <li>Attributes are always specified in the start tag</li>
          <li>Attributes usually come in name/value pairs like: <Highlight>name="value"</Highlight></li>
        </ul>
      </Example>

      <Example title="Common HTML Attributes">
        <SectionTitle>The href Attribute</SectionTitle>
        <p>The <code>href</code> attribute specifies the URL of the page the link goes to:</p>
        <a href="https://www.example.com">This is a link to example.com</a>
        <CodeBlock>
{`<a href="https://www.example.com">This is a link to example.com</a>`}
        </CodeBlock>
        
        <SectionTitle>The src Attribute</SectionTitle>
        <p>The <code>src</code> attribute specifies the path to the image to be displayed:</p>
        <img src="image.jpg" alt="Placeholder Image" width="150" height="150" />
        <CodeBlock>
{`<img src="image.jpg" alt="Placeholder Image" width="150" height="150">`}
        </CodeBlock>
        
        <SectionTitle>The width and height Attributes</SectionTitle>
        <p>The <code>width</code> and <code>height</code> attributes specify the width and height of an element:</p>
        <CodeBlock>
{`<img src="image.jpg" width="500" height="300">`}
        </CodeBlock>
        
        <SectionTitle>The alt Attribute</SectionTitle>
        <p>The <code>alt</code> attribute provides alternative text for an image:</p>
        <CodeBlock>
{`<img src="image.jpg" alt="Description of the image">`}
        </CodeBlock>
        
        <SectionTitle>The style Attribute</SectionTitle>
        <p>The <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more:</p>
        <StyledParagraph>This is a paragraph with inline styling.</StyledParagraph>
        <CodeBlock>
{`<p style="color: red; font-size: 20px; background-color: lightgray; padding: 10px;">This is a paragraph with inline styling.</p>`}
        </CodeBlock>
        
        <SectionTitle>The class Attribute</SectionTitle>
        <p>The <code>class</code> attribute specifies one or more class names for an element:</p>
        <CodeBlock>
{`<div class="note important">This is a very important note.</div>`}
        </CodeBlock>
        
        <SectionTitle>The id Attribute</SectionTitle>
        <p>The <code>id</code> attribute specifies a unique id for an element:</p>
        <UniqueElement id="unique-element">This element has a unique ID.</UniqueElement>
        <CodeBlock>
{`<div id="unique-element">This element has a unique ID.</div>`}
        </CodeBlock>
      </Example>

      <Example title="Global Attributes">
        <p>Global attributes are attributes that can be used on any HTML element.</p>
        <ul>
          <li><code>class</code> - Specifies one or more class names for an element</li>
          <li><code>id</code> - Specifies a unique id for an element</li>
          <li><code>style</code> - Specifies an inline CSS style for an element</li>
          <li><code>title</code> - Specifies extra information about an element (displayed as a tooltip)</li>
          <li><code>lang</code> - Specifies the language of the element's content</li>
          <li><code>data-*</code> - Used to store custom data private to the page or application</li>
          <li><code>hidden</code> - Specifies that an element is not yet, or is no longer, relevant</li>
        </ul>
      </Example>
      
      
      
      <Navigation 
        prevLink="/day1/paragraphs-text" 
        nextLink="/day1/tables" 
        indexLink="/day1" 
      />
    </Layout>
  );
};

export default Attributes;