import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';
import { day2EditorContent } from './day2_editor_content';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const SubSectionTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const DemoArea = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  margin-top: 10px;
  border-radius: 4px;
`;

// Div examples
const Box = styled.div`
  background-color: #e0f7fa;
  border: 2px solid #00acc1;
  padding: 10px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  padding: 10px;
  width: 30%;
`;

// Span examples
const Highlight = styled.span`
  background-color: yellow;
  padding: 2px 5px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Italic = styled.span`
  font-style: italic;
`;

const RedText = styled.span`
  color: red;
`;

const BlueText = styled.span`
  color: blue;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

// Table styles
const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #f0f0f0;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const DivSpan = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day2/classes-ids" 
        nextLink="/day2/box-model" 
        indexLink="/day2"
        title="Div and Span Elements"
        subtitle="Understand how to use div and span elements for grouping and styling content"
      />
      
      <Example>
        <SectionTitle>Introduction to Div and Span</SectionTitle>
        <p>The <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> elements are two of the most fundamental HTML elements used for structuring and styling web pages. They don't have any inherent meaning or styling on their own, but they serve as containers that can be styled with CSS and manipulated with JavaScript.</p>
      </Example>

      <Example>
        <SectionTitle>The Div Element</SectionTitle>
        <p>The <code>&lt;div&gt;</code> element is a block-level container used to group larger sections of content or create layout structures.</p>
        
        <SubSectionTitle>Key Characteristics of Div:</SubSectionTitle>
        <ul>
          <li><strong>Block-level element:</strong> By default, starts on a new line and takes up the full width available</li>
          <li><strong>Structural container:</strong> Used to group and organize content into sections</li>
          <li><strong>Layout tool:</strong> Commonly used for creating page layouts and positioning elements</li>
          <li><strong>No semantic meaning:</strong> Doesn't convey any specific meaning about its content</li>
        </ul>
        
        <SubSectionTitle>Basic Div Syntax:</SubSectionTitle>
        <CodeBlock>
{`<div>
    Content goes here...
</div>`}
        </CodeBlock>
        
        <SubSectionTitle>Div Examples:</SubSectionTitle>
        <DemoArea>
          {/* Simple div example */}
          <Box>
            <p>This is a simple div with a background color, border, and padding.</p>
          </Box>
          
          {/* Nested divs example */}
          <Box>
            <h4>Nested Divs</h4>
            <p>Divs can be nested inside other divs to create complex layouts.</p>
            <Container>
              <Column>Column 1</Column>
              <Column>Column 2</Column>
              <Column>Column 3</Column>
            </Container>
          </Box>
        </DemoArea>
        
        <SubSectionTitle>Common Uses for Div:</SubSectionTitle>
        <ul>
          <li>Creating page layouts (header, footer, sidebar, main content)</li>
          <li>Grouping related content together</li>
          <li>Creating containers for styling purposes</li>
          <li>Building grid systems and flexible layouts</li>
          <li>Creating card-like components</li>
        </ul>
        <TryEditorButton
          htmlCode={day2EditorContent.divSpan.divElement.html}
          cssCode={day2EditorContent.divSpan.divElement.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>The Span Element</SectionTitle>
        <p>The <code>&lt;span&gt;</code> element is an inline container used to style or manipulate small pieces of text or content within a larger block of content.</p>
        
        <SubSectionTitle>Key Characteristics of Span:</SubSectionTitle>
        <ul>
          <li><strong>Inline element:</strong> Does not start on a new line and only takes up as much width as necessary</li>
          <li><strong>Text-level container:</strong> Used to style or manipulate parts of text</li>
          <li><strong>No semantic meaning:</strong> Doesn't convey any specific meaning about its content</li>
          <li><strong>No visual change:</strong> By default, adds no visual change to the content</li>
        </ul>
        
        <SubSectionTitle>Basic Span Syntax:</SubSectionTitle>
        <CodeBlock>
{`<p>This is a paragraph with <span>some styled text</span> inside it.</p>`}
        </CodeBlock>
        
        <SubSectionTitle>Span Examples:</SubSectionTitle>
        <DemoArea>
          {/* Basic span styling */}
          <p>This paragraph contains <Highlight>highlighted text</Highlight> using a span element.</p>
          
          {/* Multiple spans with different styles */}
          <p>You can use spans to apply <Bold>bold</Bold>, <Italic>italic</Italic>, 
          <Underline>underlined</Underline>, <RedText>red</RedText>, or 
          <BlueText>blue</BlueText> styling to specific parts of text.</p>
          
          {/* Nested spans */}
          <p>Spans can be <Bold>nested <RedText>inside</RedText> other spans</Bold> for combined effects.</p>
        </DemoArea>
        
        <SubSectionTitle>Common Uses for Span:</SubSectionTitle>
        <ul>
          <li>Highlighting specific words or phrases</li>
          <li>Applying different colors to parts of text</li>
          <li>Adding icons or small images inline with text</li>
          <li>Creating tooltips or popups</li>
          <li>Targeting specific text for JavaScript manipulation</li>
        </ul>
        <TryEditorButton
          htmlCode={day2EditorContent.divSpan.spanElement.html}
          cssCode={day2EditorContent.divSpan.spanElement.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>Div vs. Span: Key Differences</SectionTitle>
        <ComparisonTable>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Div</th>
              <th>Span</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Display type</td>
              <td>Block-level element</td>
              <td>Inline element</td>
            </tr>
            <tr>
              <td>Default behavior</td>
              <td>Starts on a new line and takes full width</td>
              <td>Stays inline with surrounding content</td>
            </tr>
            <tr>
              <td>Typical use</td>
              <td>Grouping larger sections of content</td>
              <td>Styling small portions of text</td>
            </tr>
            <tr>
              <td>Can contain</td>
              <td>Block-level and inline elements</td>
              <td>Only inline elements and text</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>Can have width, height, margin, and padding</td>
              <td>Width and height properties have no effect by default</td>
            </tr>
          </tbody>
        </ComparisonTable>
      </Example>

      <Example>
        <SectionTitle>When to Use Div vs. Span</SectionTitle>
        
        <SubSectionTitle>Use Div When:</SubSectionTitle>
        <ul>
          <li>You need to group content into sections</li>
          <li>You want to create layout structures</li>
          <li>You need a container that takes up the full width</li>
          <li>You're working with block-level content</li>
          <li>You need to apply margin, padding, or dimensional styling</li>
        </ul>
        
        <SubSectionTitle>Use Span When:</SubSectionTitle>
        <ul>
          <li>You need to style a specific part of text</li>
          <li>You want to add inline elements without breaking the flow</li>
          <li>You need to target specific text for JavaScript</li>
          <li>You're working with inline content</li>
          <li>You don't want to create a new line or block</li>
        </ul>
      </Example>
      
      <Navigation 
        prevLink="/day2/classes-ids" 
        nextLink="/day2/box-model" 
        indexLink="/day2"
        title="Div and Span Elements"
        subtitle="Understand how to use div and span elements for grouping and styling content"
      />
    </Layout>
  );
};

export default DivSpan;