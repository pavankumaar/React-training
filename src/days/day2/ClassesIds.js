import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';
import { classesIdsContent } from './classes_ids_content';

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

// Class examples
const TextRed = styled.p`
  color: red;
`;

const TextBlue = styled.p`
  color: blue;
`;

const BgYellow = styled.div`
  background-color: #ffffcc;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Italic = styled.span`
  font-style: italic;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const TextCenter = styled.p`
  text-align: center;
`;

const Rounded = styled.div`
  border-radius: 10px;
`;

const Shadow = styled.div`
  box-shadow: 3px 3px 5px rgba(0,0,0,0.2);
`;

const PaddingLarge = styled.div`
  padding: 20px;
`;

// ID examples
const Header = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const MainContent = styled.div`
  padding: 15px;
  background-color: #f0f0f0;
`;

const Sidebar = styled.div`
  width: 30%;
  background-color: #e0e0e0;
  padding: 10px;
  float: right;
  margin-left: 15px;
`;

const Footer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  clear: both;
  margin-top: 20px;
`;

const SpecialNote = styled.p`
  border-left: 4px solid #ff9900;
  padding-left: 10px;
  background-color: #fff9e6;
`;

const ClassesIds = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day2/css-selectors" 
        nextLink="/day2/div-span" 
        indexLink="/day2"
        title="CSS Classes and IDs"
        subtitle="Learn how to use CSS classes and IDs to target and style HTML elements"
      />
      
      <Example>
        <SectionTitle>Understanding Classes and IDs</SectionTitle>
        <p>Classes and IDs are attributes you can add to HTML elements to identify and target them for styling with CSS.</p>
      </Example>

      <Example>
        <SectionTitle>Classes</SectionTitle>
        <p>Classes are used to apply the same style to multiple elements. You can also apply multiple classes to a single element.</p>
        
        <SubSectionTitle>Class Syntax</SubSectionTitle>
        <p>In HTML:</p>
        <CodeBlock>
{`<element class="classname"></element>`}
        </CodeBlock>
        
        <p>In CSS:</p>
        <CodeBlock>
{`.classname {
    property: value;
}`}
        </CodeBlock>
        
        <SubSectionTitle>Class Examples</SubSectionTitle>
        <DemoArea>
          <TextRed>This text is red using the text-red class.</TextRed>
          <TextBlue className="bg-yellow">
            <BgYellow>This text is blue with a yellow background using multiple classes.</BgYellow>
          </TextBlue>
          <p><Bold><Italic>This text is both bold and italic using multiple classes.</Italic></Bold></p>
          <TextCenter><Underline>This text is centered and underlined.</Underline></TextCenter>
          
          <Rounded>
            <Shadow>
              <PaddingLarge>
                <BgYellow>
                  <p>This div has multiple classes applied: rounded corners, shadow, large padding, and yellow background.</p>
                </BgYellow>
              </PaddingLarge>
            </Shadow>
          </Rounded>
        </DemoArea>
        <TryEditorButton
          htmlCode={classesIdsContent.classExample.html}
          cssCode={classesIdsContent.classExample.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>IDs</SectionTitle>
        <p>IDs are used to identify a single, unique element. Each ID should only be used once per page.</p>
        
        <SubSectionTitle>ID Syntax</SubSectionTitle>
        <p>In HTML:</p>
        <CodeBlock>
{`<element id="idname"></element>`}
        </CodeBlock>
        
        <p>In CSS:</p>
        <CodeBlock>
{`#idname {
    property: value;
}`}
        </CodeBlock>
        
        <SubSectionTitle>ID Examples</SubSectionTitle>
        <DemoArea>
          <Header id="header">
            <h3>This is a header section</h3>
          </Header>
          
          <MainContent id="main-content">
            <p>This is the main content area of the page.</p>
            
            <Sidebar id="sidebar">
              <h4>Sidebar</h4>
              <p>This is a sidebar section.</p>
            </Sidebar>
            
            <p>More content in the main area.</p>
            <SpecialNote id="special-note">This is a special note with unique styling.</SpecialNote>
          </MainContent>
          
          <Footer id="footer">
            <p>This is the footer section</p>
          </Footer>
        </DemoArea>
        <TryEditorButton
          htmlCode={classesIdsContent.idExample.html}
          cssCode={classesIdsContent.idExample.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>Classes vs. IDs</SectionTitle>
        
        <SubSectionTitle>When to Use Classes:</SubSectionTitle>
        <ul>
          <li>When you want to apply the same style to multiple elements</li>
          <li>When you need to apply multiple styles to an element</li>
          <li>For reusable components and styles</li>
          <li>For elements that appear multiple times on a page</li>
        </ul>
        
        <SubSectionTitle>When to Use IDs:</SubSectionTitle>
        <ul>
          <li>When you need to identify a unique element</li>
          <li>For major page sections (header, footer, main content)</li>
          <li>When you need to link to a specific part of the page (using anchor links)</li>
          <li>When you need to access an element with JavaScript (though classes can also be used)</li>
        </ul>
        
        <SubSectionTitle>Key Differences:</SubSectionTitle>
        <ul>
          <li><strong>Uniqueness:</strong> IDs must be unique on a page, classes can be reused</li>
          <li><strong>Multiple values:</strong> An element can have multiple classes but only one ID</li>
          <li><strong>Specificity:</strong> IDs have higher specificity than classes in CSS</li>
          <li><strong>JavaScript access:</strong> IDs can be accessed directly with <code>getElementById()</code></li>
        </ul>
      </Example>

      <Example>
        <SectionTitle>Best Practices</SectionTitle>
        <ul>
          <li>Use meaningful names for classes and IDs that describe their purpose</li>
          <li>Use classes for styling and IDs for unique elements or JavaScript hooks</li>
          <li>Keep class names lowercase and use hyphens for multi-word names (e.g., <code>main-header</code>)</li>
          <li>Avoid using IDs for styling when possible (prefer classes for better reusability)</li>
          <li>Don't use the same name for both a class and an ID</li>
          <li>Consider using a naming convention like BEM (Block Element Modifier) for complex projects</li>
        </ul>
      </Example>

      <Navigation 
        prevLink="/day2/css-selectors" 
        nextLink="/day2/div-span" 
        indexLink="/day2"
        title="CSS Classes and IDs"
        subtitle="Learn how to use CSS classes and IDs to target and style HTML elements"
      />
    </Layout>
  );
};

export default ClassesIds;