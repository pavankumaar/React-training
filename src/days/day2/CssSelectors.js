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

const DemoArea = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  margin-top: 10px;
  border-radius: 4px;
`;

// Element Selector Demo
const DemoElement = styled.div`
  p {
    color: blue;
  }
`;

// Class Selector Demo
const Highlight = styled.span`
  background-color: yellow;
  padding: 2px 5px;
`;

// ID Selector Demo
const UniqueElement = styled.p`
  font-weight: bold;
  color: red;
`;

// Attribute Selector Demo
const SpecialElement = styled.p`
  border-left: 3px solid purple;
  padding-left: 10px;
`;

// Descendant Selector Demo
const Parent = styled.div`
  .child {
    font-style: italic;
  }
`;

// Child Selector Demo
const DirectParent = styled.div`
  > .direct-child {
    text-decoration: underline;
  }
`;

// Adjacent Sibling Selector Demo
const SiblingContainer = styled.div`
  .sibling + p {
    color: green;
  }
`;

// Pseudo-class Selector Demo
const HoverDemo = styled.p`
  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
`;

const FirstChildContainer = styled.div`
  p:first-child {
    font-weight: bold;
  }
`;

// Pseudo-element Selector Demo
const FirstLineDemo = styled.p`
  &::first-line {
    font-weight: bold;
    color: purple;
  }
`;

const FirstLetterDemo = styled.p`
  &::first-letter {
    font-size: 24px;
    color: red;
  }
`;

const CssSelectors = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day2/css-introduction" 
        nextLink="/day2/classes-ids" 
        indexLink="/day2"
        title="CSS Selectors"
        subtitle="Learn how to target HTML elements with different types of CSS selectors"
      />
      
      <Example>
        <SectionTitle>What are CSS Selectors?</SectionTitle>
        <p>CSS selectors are patterns used to select and style HTML elements. They are the bridge between your HTML document and your style rules.</p>
      </Example>

      <Example>
        <SectionTitle>1. Element Selector</SectionTitle>
        <p>Selects elements based on the element name (tag).</p>
        
        <CodeBlock>
{`p {
    color: blue;
}`}
        </CodeBlock>
        
        <DemoArea>
          <DemoElement>
            <p>This paragraph is selected by the element selector.</p>
          </DemoElement>
        </DemoArea>
        <TryEditorButton
          htmlCode={day2EditorContent.cssSelectors.elementSelector.html} 
          cssCode={day2EditorContent.cssSelectors.elementSelector.css}
          jsCode={day2EditorContent.cssSelectors.elementSelector.js}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>2. Class Selector</SectionTitle>
        <p>Selects elements with a specific class attribute. Uses a period (.) followed by the class name.</p>
        
        <CodeBlock>
{`.highlight {
    background-color: yellow;
}`}
        </CodeBlock>
        
        <DemoArea>
          <p>This is a normal paragraph.</p>
          <p>This paragraph has a <Highlight>highlighted</Highlight> word.</p>
        </DemoArea>
        <TryEditorButton
          htmlCode={day2EditorContent.cssSelectors.classSelector.html} 
          cssCode={day2EditorContent.cssSelectors.classSelector.css}
          jsCode={day2EditorContent.cssSelectors.classSelector.js}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>3. ID Selector</SectionTitle>
        <p>Selects an element with a specific id attribute. Uses a hash (#) followed by the id name.</p>
        
        <CodeBlock>
{`#unique-element {
    font-weight: bold;
    color: red;
}`}
        </CodeBlock>
        
        <DemoArea>
          <p>This is a normal paragraph.</p>
          <UniqueElement id="unique-element">This paragraph has a unique ID and is styled differently.</UniqueElement>
        </DemoArea>
        <TryEditorButton
          htmlCode={day2EditorContent.cssSelectors.idSelector.html} 
          cssCode={day2EditorContent.cssSelectors.idSelector.css}
          jsCode={day2EditorContent.cssSelectors.idSelector.js}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>4. Attribute Selector</SectionTitle>
        <p>Selects elements based on an attribute or attribute value.</p>
        
        <CodeBlock>
{`[data-type="special"] {
    border-left: 3px solid purple;
    padding-left: 10px;
}`}
        </CodeBlock>
        
        <DemoArea>
          <p>This is a normal paragraph.</p>
          <SpecialElement data-type="special">This paragraph has a data-type attribute and is styled differently.</SpecialElement>
        </DemoArea>
        <TryEditorButton
          htmlCode={day2EditorContent.cssSelectors.attributeSelector.html} 
          cssCode={day2EditorContent.cssSelectors.attributeSelector.css}
          jsCode={day2EditorContent.cssSelectors.attributeSelector.js}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>5. Descendant Selector</SectionTitle>
        <p>Selects all elements that are descendants of a specified element.</p>
        
        <CodeBlock>
{`.parent .child {
    font-style: italic;
}`}
        </CodeBlock>
        
        <DemoArea>
          <Parent className="parent">
            <p>This is a direct child of the parent.</p>
            <div>
              <p className="child">This is a descendant (grandchild) of the parent.</p>
            </div>
          </Parent>
        </DemoArea>
        <TryEditorButton
          htmlCode={day2EditorContent.cssSelectors.descendantSelector.html} 
          cssCode={day2EditorContent.cssSelectors.descendantSelector.css}
          jsCode={day2EditorContent.cssSelectors.descendantSelector.js}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>6. Child Selector</SectionTitle>
        <p>Selects all elements that are direct children of a specified element.</p>
        
        <CodeBlock>
{`.direct-parent > .direct-child {
    text-decoration: underline;
}`}
        </CodeBlock>
        
        <DemoArea>
          <DirectParent className="direct-parent">
            <p className="direct-child">This is a direct child and will be underlined.</p>
            <div>
              <p className="not-direct-child">This is not a direct child and won't be underlined.</p>
            </div>
          </DirectParent>
        </DemoArea>
        <TryEditorButton
          htmlCode={day2EditorContent.cssSelectors.childSelector.html} 
          cssCode={day2EditorContent.cssSelectors.childSelector.css}
          jsCode={day2EditorContent.cssSelectors.childSelector.js}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>7. Adjacent Sibling Selector</SectionTitle>
        <p>Selects an element that is directly after another specific element.</p>
        
        <CodeBlock>
{`.sibling + p {
    color: green;
}`}
        </CodeBlock>
        
        <DemoArea>
          <SiblingContainer>
            <p className="sibling">This is the sibling paragraph.</p>
            <p>This paragraph comes immediately after the sibling and will be green.</p>
            <p>This paragraph is not adjacent to the sibling and won't be green.</p>
          </SiblingContainer>
        </DemoArea>
        <TryEditorButton
          htmlCode={day2EditorContent.cssSelectors.adjacentSiblingSelector.html} 
          cssCode={day2EditorContent.cssSelectors.adjacentSiblingSelector.css}
          jsCode={day2EditorContent.cssSelectors.adjacentSiblingSelector.js}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>8. Pseudo-class Selector</SectionTitle>
        <p>Selects elements based on a certain state or position.</p>
        
        <CodeBlock>
{`.hover-demo:hover {
    background-color: lightblue;
    cursor: pointer;
}`}
        </CodeBlock>
        
        <DemoArea>
          <HoverDemo>Hover over me to see the effect!</HoverDemo>
          
          <FirstChildContainer>
            <p>This is the first child and will be bold.</p>
            <p>This is not the first child and won't be bold.</p>
          </FirstChildContainer>
        </DemoArea>
        <TryEditorButton
          htmlCode={day2EditorContent.cssSelectors.pseudoClassSelector.html} 
          cssCode={day2EditorContent.cssSelectors.pseudoClassSelector.css}
          jsCode={day2EditorContent.cssSelectors.pseudoClassSelector.js}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>9. Pseudo-element Selector</SectionTitle>
        <p>Selects and styles a part of an element.</p>
        
        <CodeBlock>
{`.first-line-demo::first-line {
    font-weight: bold;
    color: purple;
}

.first-letter-demo::first-letter {
    font-size: 24px;
    color: red;
}`}
        </CodeBlock>
        
        <DemoArea>
          <FirstLineDemo>
            This paragraph has its first line styled differently.<br />
            This is the second line which will look normal.
          </FirstLineDemo>
          
          <FirstLetterDemo>
            This paragraph has its first letter styled differently.
          </FirstLetterDemo>
        </DemoArea>
        <TryEditorButton
          htmlCode={day2EditorContent.cssSelectors.pseudoElementSelector.html} 
          cssCode={day2EditorContent.cssSelectors.pseudoElementSelector.css}
          jsCode={day2EditorContent.cssSelectors.pseudoElementSelector.js}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example>
        <SectionTitle>Selector Specificity</SectionTitle>
        <p>CSS selectors have different levels of specificity, which determines which styles are applied when multiple rules target the same element:</p>
        <ol>
          <li>Inline styles (highest specificity)</li>
          <li>ID selectors</li>
          <li>Class selectors, attribute selectors, and pseudo-classes</li>
          <li>Element selectors and pseudo-elements (lowest specificity)</li>
        </ol>
        <p>When specificity is equal, the last rule defined wins.</p>
        <TryEditorButton
          htmlCode={day2EditorContent.cssSelectors.selectorSpecificity.html} 
          cssCode={day2EditorContent.cssSelectors.selectorSpecificity.css}
          jsCode={day2EditorContent.cssSelectors.selectorSpecificity.js}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>
      
      <Navigation 
        prevLink="/day2/css-introduction" 
        nextLink="/day2/classes-ids" 
        indexLink="/day2"
        title="CSS Selectors"
        subtitle="Learn how to target HTML elements with different types of CSS selectors"
      />
    </Layout>
  );
};

export default CssSelectors;