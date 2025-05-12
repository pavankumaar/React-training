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

const CssExample = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 10px;
`;

const StyledParagraph = styled.p`
  color: #3498db;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
`;

const CssIntroduction = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day2" 
        nextLink="/day2/css-selectors" 
        indexLink="/day2" 
      />
      
      <Title>CSS Introduction</Title>
      
      <Section>
        <SectionTitle>What is CSS?</SectionTitle>
        <p>
          CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation
          of a document written in HTML. CSS describes how HTML elements should be displayed on screen,
          on paper, or in other media.
        </p>
        <p>
          CSS saves a lot of work by allowing you to control the layout of multiple web pages all at once.
          It can control the layout of multiple web pages all at once.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>CSS Syntax</SectionTitle>
        <p>
          A CSS rule consists of a selector and a declaration block:
        </p>
        
        <CodeBlock>
{`selector {
    property: value;
    property: value;
    property: value;
}`}
        </CodeBlock>
        
        <ul>
          <li><strong>Selector</strong>: Points to the HTML element you want to style</li>
          <li><strong>Declaration Block</strong>: Contains one or more declarations separated by semicolons</li>
          <li><strong>Property</strong>: The style attribute you want to change</li>
          <li><strong>Value</strong>: The value of the property</li>
        </ul>
      </Section>
      
      <Example title="Basic CSS Example">
        <p>Here's a simple CSS rule that styles all paragraphs:</p>
        <CodeBlock>
{`p {
    color: blue;
    font-size: 18px;
    font-weight: bold;
}`}
        </CodeBlock>
        
        <p>Result:</p>
        <CssExample>
          <StyledParagraph>This paragraph is styled with CSS!</StyledParagraph>
        </CssExample>
      </Example>
      
      <Section>
        <SectionTitle>Ways to Insert CSS</SectionTitle>
        <p>
          There are three ways to insert CSS into your HTML:
        </p>
        
        <h3>1. External CSS</h3>
        <p>
          With an external style sheet, you can change the look of an entire website by changing just one file.
          Each HTML page must include a reference to the external style sheet file inside the <code>&lt;link&gt;</code> element,
          inside the <code>&lt;head&gt;</code> section.
        </p>
        <CodeBlock>
{`<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}
        </CodeBlock>
        
        <h3>2. Internal CSS</h3>
        <p>
          An internal style sheet may be used if one single HTML page has a unique style.
          The internal style is defined inside the <code>&lt;style&gt;</code> element, inside the <code>&lt;head&gt;</code> section.
        </p>
        <CodeBlock>
{`<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: navy;
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}
        </CodeBlock>
        
        <h3>3. Inline CSS</h3>
        <p>
          An inline style may be used to apply a unique style for a single element.
          To use inline styles, add the style attribute to the relevant element.
        </p>
        <CodeBlock>
{`<!DOCTYPE html>
<html>
<body>
    <h1 style="color: blue; text-align: center;">This is a heading</h1>
    <p style="color: red;">This is a paragraph.</p>
</body>
</html>`}
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>CSS Colors</SectionTitle>
        <p>
          Colors in CSS can be specified in several ways:
        </p>
        <ul>
          <li><strong>Color Names</strong>: Like "red", "blue", "green", etc.</li>
          <li><strong>Hexadecimal</strong>: Like "#ff0000" for red</li>
          <li><strong>RGB</strong>: Like "rgb(255, 0, 0)" for red</li>
          <li><strong>RGBA</strong>: Like "rgba(255, 0, 0, 0.5)" for semi-transparent red</li>
          <li><strong>HSL</strong>: Like "hsl(0, 100%, 50%)" for red</li>
          <li><strong>HSLA</strong>: Like "hsla(0, 100%, 50%, 0.5)" for semi-transparent red</li>
        </ul>
      </Section>
      
      <Example title="CSS Color Examples">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
          <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '4px', width: '150px', textAlign: 'center' }}>
            Color Name: red
          </div>
          <div style={{ backgroundColor: '#00ff00', color: 'black', padding: '10px', borderRadius: '4px', width: '150px', textAlign: 'center' }}>
            Hex: #00ff00
          </div>
          <div style={{ backgroundColor: 'rgb(0, 0, 255)', color: 'white', padding: '10px', borderRadius: '4px', width: '150px', textAlign: 'center' }}>
            RGB: rgb(0, 0, 255)
          </div>
          <div style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'white', padding: '10px', borderRadius: '4px', width: '150px', textAlign: 'center' }}>
            RGBA: rgba(255, 0, 0, 0.5)
          </div>
        </div>
      </Example>
      
      
      
      <Navigation 
        prevLink="/day2" 
        nextLink="/day2/css-selectors" 
        indexLink="/day2" 
      />
    </Layout>
  );
};

export default CssIntroduction;