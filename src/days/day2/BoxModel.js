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
  overflow: hidden; /* Contain floated elements */
`;

// Box model visualization
const BoxModelDemo = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
`;

const MarginBox = styled.div`
  background-color: #ffcccc;
  padding: 20px;
  margin-bottom: 20px;
`;

const BorderBox = styled.div`
  background-color: #ffcc99;
  padding: 20px;
`;

const PaddingBox = styled.div`
  background-color: #ffffcc;
  padding: 20px;
`;

const ContentBox = styled.div`
  background-color: #ccffcc;
  padding: 20px;
`;

// Margin examples
const MarginAll = styled.div`
  background-color: #e0e0e0;
  margin: 20px;
  padding: 10px;
  border: 1px solid #999;
`;

const MarginIndividual = styled.div`
  background-color: #e0e0e0;
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
  padding: 10px;
  border: 1px solid #999;
`;

const MarginShorthand = styled.div`
  background-color: #e0e0e0;
  /* top, right, bottom, left */
  margin: 10px 20px 30px 40px;
  padding: 10px;
  border: 1px solid #999;
`;

const MarginAuto = styled.div`
  background-color: #e0e0e0;
  width: 300px;
  margin: 0 auto; /* Center horizontally */
  padding: 10px;
  border: 1px solid #999;
`;

const MarginNegative = styled.div`
  background-color: #e0e0e0;
  width: 300px;
  margin-top: -20px;
  padding: 10px;
  border: 1px solid #999;
`;

// Padding examples
const PaddingAll = styled.div`
  background-color: #d1e0ff;
  padding: 20px;
  border: 1px solid #6699cc;
`;

const PaddingIndividual = styled.div`
  background-color: #d1e0ff;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
  border: 1px solid #6699cc;
`;

const PaddingShorthand = styled.div`
  background-color: #d1e0ff;
  /* top, right, bottom, left */
  padding: 10px 20px 30px 40px;
  border: 1px solid #6699cc;
`;

// Border examples
const BorderAll = styled.div`
  background-color: #ffe6cc;
  padding: 15px;
  border: 3px solid #ff9933;
  margin-bottom: 10px;
`;

const BorderIndividual = styled.div`
  background-color: #ffe6cc;
  padding: 15px;
  border-top: 3px dashed #ff9933;
  border-right: 3px dotted #ff9933;
  border-bottom: 3px double #ff9933;
  border-left: 3px solid #ff9933;
  margin-bottom: 10px;
`;

const BorderRadius = styled.div`
  background-color: #ffe6cc;
  padding: 15px;
  border: 3px solid #ff9933;
  border-radius: 15px;
  margin-bottom: 10px;
`;

// Box-sizing examples
const BoxSizingDemo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ContentBoxSizing = styled.div`
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid #999;
  background-color: #e0e0e0;
`;

const BorderBoxSizing = styled.div`
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid #999;
  background-color: #d1e0ff;
`;

const ReferenceLine = styled.div`
  height: 30px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
`;

const BoxModel = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day2/div-span" 
        nextLink="/day3/flexbox-grid" 
        indexLink="/day2" 
      />
      
      <Title>CSS Box Model</Title>
      
      <Example>
        <SectionTitle>What is the Box Model?</SectionTitle>
        <p>The CSS box model is a fundamental concept that describes how elements are rendered on a web page. Every HTML element is treated as a box with the following properties:</p>
        <ul>
          <li><strong>Content:</strong> The actual content of the element (text, images, etc.)</li>
          <li><strong>Padding:</strong> The space between the content and the border</li>
          <li><strong>Border:</strong> The line that surrounds the padding and content</li>
          <li><strong>Margin:</strong> The space outside the border, separating the element from other elements</li>
        </ul>
        
        <BoxModelDemo>
          <MarginBox>
            Margin
            <BorderBox>
              Border
              <PaddingBox>
                Padding
                <ContentBox>
                  Content
                </ContentBox>
              </PaddingBox>
            </BorderBox>
          </MarginBox>
        </BoxModelDemo>
      </Example>

      <Example>
        <SectionTitle>Margin</SectionTitle>
        <p>Margin is the space outside the border of an element. It creates space between elements.</p>
        
        <SubSectionTitle>Margin Properties</SubSectionTitle>
        <CodeBlock>
{`margin: 10px;                  /* All sides */
margin-top: 10px;
margin-right: 10px;
margin-bottom: 10px;
margin-left: 10px;

/* Shorthand (clockwise: top, right, bottom, left) */
margin: 10px 20px 30px 40px;

/* Shorthand (top/bottom, left/right) */
margin: 10px 20px;

/* Auto margins for horizontal centering */
margin: 0 auto;`}
        </CodeBlock>
        
        <SubSectionTitle>Margin Examples</SubSectionTitle>
        <DemoArea>
          <MarginAll>
            <p>This box has a margin of 20px on all sides.</p>
          </MarginAll>
          
          <MarginIndividual>
            <p>This box has individual margins: top 10px, right 20px, bottom 30px, left 40px.</p>
          </MarginIndividual>
          
          <MarginShorthand>
            <p>This box uses margin shorthand: 10px 20px 30px 40px (top, right, bottom, left).</p>
          </MarginShorthand>
          
          <MarginAuto>
            <p>This box is centered horizontally using margin: 0 auto.</p>
          </MarginAuto>
          
          <ReferenceLine>
            <p>Reference line</p>
          </ReferenceLine>
          
          <MarginNegative>
            <p>This box has a negative top margin of -20px, pulling it upward.</p>
          </MarginNegative>
        </DemoArea>
        
        <SubSectionTitle>Margin Collapse</SubSectionTitle>
        <p>When two vertical margins meet, they collapse into a single margin. The height of the collapsed margin is equal to the larger of the two margins.</p>
        
        <CodeBlock>
{`/* These two elements will have a total margin of 30px between them, not 50px */
.element1 {
    margin-bottom: 30px;
}
.element2 {
    margin-top: 20px;
}`}
        </CodeBlock>
      </Example>

      <Example>
        <SectionTitle>Padding</SectionTitle>
        <p>Padding is the space between the content and the border of an element. It creates space inside the element.</p>
        
        <SubSectionTitle>Padding Properties</SubSectionTitle>
        <CodeBlock>
{`padding: 10px;                  /* All sides */
padding-top: 10px;
padding-right: 10px;
padding-bottom: 10px;
padding-left: 10px;

/* Shorthand (clockwise: top, right, bottom, left) */
padding: 10px 20px 30px 40px;

/* Shorthand (top/bottom, left/right) */
padding: 10px 20px;`}
        </CodeBlock>
        
        <SubSectionTitle>Padding Examples</SubSectionTitle>
        <DemoArea>
          <PaddingAll>
            <p>This box has padding of 20px on all sides.</p>
          </PaddingAll>
          
          <PaddingIndividual>
            <p>This box has individual padding: top 10px, right 20px, bottom 30px, left 40px.</p>
          </PaddingIndividual>
          
          <PaddingShorthand>
            <p>This box uses padding shorthand: 10px 20px 30px 40px (top, right, bottom, left).</p>
          </PaddingShorthand>
        </DemoArea>
        
        <p><strong>Note:</strong> Unlike margins, padding values do not collapse.</p>
      </Example>

      <Example>
        <SectionTitle>Border</SectionTitle>
        <p>Border is the line that surrounds the padding and content of an element.</p>
        
        <SubSectionTitle>Border Properties</SubSectionTitle>
        <CodeBlock>
{`/* Shorthand */
border: 1px solid black;

/* Individual properties */
border-width: 1px;
border-style: solid;
border-color: black;

/* Individual sides */
border-top: 1px solid black;
border-right: 1px solid black;
border-bottom: 1px solid black;
border-left: 1px solid black;

/* Border radius (rounded corners) */
border-radius: 10px;`}
        </CodeBlock>
        
        <SubSectionTitle>Border Examples</SubSectionTitle>
        <DemoArea>
          <BorderAll>
            <p>This box has a 3px solid border on all sides.</p>
          </BorderAll>
          
          <BorderIndividual>
            <p>This box has different border styles on each side: dashed (top), dotted (right), double (bottom), and solid (left).</p>
          </BorderIndividual>
          
          <BorderRadius>
            <p>This box has rounded corners with a border-radius of 15px.</p>
          </BorderRadius>
        </DemoArea>
      </Example>

      <Example>
        <SectionTitle>Box Sizing</SectionTitle>
        <p>The box-sizing property defines how the width and height of an element are calculated.</p>
        
        <SubSectionTitle>Box Sizing Values</SubSectionTitle>
        <CodeBlock>
{`/* Default - width/height only includes the content */
box-sizing: content-box;

/* Width/height includes content, padding, and border */
box-sizing: border-box;`}
        </CodeBlock>
        
        <SubSectionTitle>Box Sizing Examples</SubSectionTitle>
        <DemoArea>
          <BoxSizingDemo>
            <div>
              <h4>content-box (default)</h4>
              <ContentBoxSizing>
                <p>Width: 200px</p>
                <p>Total width: 200px + 40px padding + 10px border = 250px</p>
              </ContentBoxSizing>
            </div>
            
            <div>
              <h4>border-box</h4>
              <BorderBoxSizing>
                <p>Width: 200px</p>
                <p>Total width: 200px (includes padding and border)</p>
              </BorderBoxSizing>
            </div>
          </BoxSizingDemo>
          
          <p>Many developers prefer to use <code>box-sizing: border-box;</code> for all elements as it makes sizing more intuitive:</p>
          
          <CodeBlock>
{`* {
    box-sizing: border-box;
}`}
          </CodeBlock>
        </DemoArea>
      </Example>

      <Example>
        <SectionTitle>Calculating Total Element Size</SectionTitle>
        <p>To calculate the total size of an element, you need to consider all parts of the box model:</p>
        
        <SubSectionTitle>With box-sizing: content-box (default)</SubSectionTitle>
        <ul>
          <li><strong>Total width</strong> = width + padding-left + padding-right + border-left + border-right</li>
          <li><strong>Total height</strong> = height + padding-top + padding-bottom + border-top + border-bottom</li>
        </ul>
        
        <SubSectionTitle>With box-sizing: border-box</SubSectionTitle>
        <ul>
          <li><strong>Total width</strong> = specified width (padding and border included)</li>
          <li><strong>Total height</strong> = specified height (padding and border included)</li>
        </ul>
        
        <p>In both cases, margins are not included in the element's dimensions but affect its position and the space around it.</p>
      </Example>
      
      <CompleteButton />
      
      <Navigation 
        prevLink="/day2/div-span" 
        nextLink="/day3/flexbox-grid" 
        indexLink="/day2" 
      />
    </Layout>
  );
};

export default BoxModel;