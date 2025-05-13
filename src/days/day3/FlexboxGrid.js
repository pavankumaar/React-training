import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

// Flexbox examples
const FlexContainer = styled.div`
  display: flex;
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
`;

const FlexItem = styled.div`
  background-color: #4682b4;
  color: white;
  padding: 10px;
  margin: 5px;
  text-align: center;
  border-radius: 4px;
`;

const FlexContainerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
`;

const FlexContainerJustify = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
`;

const FlexContainerAlign = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
  height: 100px;
`;

const TallItem = styled(FlexItem)`
  height: 80px;
`;

const ShortItem = styled(FlexItem)`
  height: 30px;
`;

const FlexGrowItem = styled(FlexItem)`
  flex-grow: 1;
`;

const FlexGrow2 = styled(FlexItem)`
  flex-grow: 2;
`;

const FlexboxGrid = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day2/box-model" 
        nextLink="/day3/styling-forms-buttons" 
        indexLink="/day3"
        title="Flexbox Basics"
        subtitle="Learn how to create flexible and responsive layouts using CSS Flexbox"
      />
      
      <Example>
        <SectionTitle>What is Flexbox?</SectionTitle>
        <p>Flexbox (Flexible Box Layout) is a one-dimensional layout method designed for laying out items in rows or columns. It makes it easier to design flexible responsive layout structures without using float or positioning.</p>
      </Example>

      <Example>
        <SectionTitle>Creating a Flex Container</SectionTitle>
        <p>To create a flex container, set the <code>display</code> property to <code>flex</code>:</p>
        
        <CodeBlock>
{`.container {
    display: flex;
}`}
        </CodeBlock>
        
        <p>Example:</p>
        <FlexContainer>
          <FlexItem>Item 1</FlexItem>
          <FlexItem>Item 2</FlexItem>
          <FlexItem>Item 3</FlexItem>
        </FlexContainer>
      </Example>

      <Example>
        <SectionTitle>Flex Direction</SectionTitle>
        <p>The <code>flex-direction</code> property defines the direction of the flex items. The default is <code>row</code> (left to right).</p>
        
        <CodeBlock>
{`.container {
    display: flex;
    flex-direction: row; /* default */
}

.container-column {
    display: flex;
    flex-direction: column;
}`}
        </CodeBlock>
        
        <p>Row (default):</p>
        <FlexContainer>
          <FlexItem>Item 1</FlexItem>
          <FlexItem>Item 2</FlexItem>
          <FlexItem>Item 3</FlexItem>
        </FlexContainer>
        
        <p>Column:</p>
        <FlexContainerColumn>
          <FlexItem>Item 1</FlexItem>
          <FlexItem>Item 2</FlexItem>
          <FlexItem>Item 3</FlexItem>
        </FlexContainerColumn>
      </Example>

      <Example>
        <SectionTitle>Flex Wrap</SectionTitle>
        <p>The <code>flex-wrap</code> property specifies whether flex items should wrap or not if there isn't enough space.</p>
        
        <CodeBlock>
{`.container {
    display: flex;
    flex-wrap: wrap;
}`}
        </CodeBlock>
        
        <p>Flex wrap example:</p>
        <FlexContainerWrap>
          <FlexItem>Item 1</FlexItem>
          <FlexItem>Item 2</FlexItem>
          <FlexItem>Item 3</FlexItem>
          <FlexItem>Item 4</FlexItem>
          <FlexItem>Item 5</FlexItem>
          <FlexItem>Item 6</FlexItem>
          <FlexItem>Item 7</FlexItem>
          <FlexItem>Item 8</FlexItem>
        </FlexContainerWrap>
      </Example>

      <Example>
        <SectionTitle>Justify Content</SectionTitle>
        <p>The <code>justify-content</code> property aligns flex items along the main axis (horizontally for row, vertically for column).</p>
        
        <CodeBlock>
{`.container {
    display: flex;
    justify-content: space-between; /* Other values: flex-start, flex-end, center, space-around, space-evenly */
}`}
        </CodeBlock>
        
        <p>Justify content (space-between):</p>
        <FlexContainerJustify>
          <FlexItem>Item 1</FlexItem>
          <FlexItem>Item 2</FlexItem>
          <FlexItem>Item 3</FlexItem>
        </FlexContainerJustify>
      </Example>

      <Example>
        <SectionTitle>Align Items</SectionTitle>
        <p>The <code>align-items</code> property aligns flex items along the cross axis (vertically for row, horizontally for column).</p>
        
        <CodeBlock>
{`.container {
    display: flex;
    align-items: center; /* Other values: flex-start, flex-end, stretch, baseline */
}`}
        </CodeBlock>
        
        <p>Align items (center):</p>
        <FlexContainerAlign>
          <TallItem>Tall</TallItem>
          <FlexItem>Normal</FlexItem>
          <ShortItem>Short</ShortItem>
        </FlexContainerAlign>
      </Example>

      <Example>
        <SectionTitle>Flex Grow</SectionTitle>
        <p>The <code>flex-grow</code> property specifies how much a flex item should grow relative to the other items.</p>
        
        <CodeBlock>
{`.item {
    flex-grow: 1; /* Default is 0 */
}

.item-grow-more {
    flex-grow: 2; /* Grows twice as much as the others */
}`}
        </CodeBlock>
        
        <p>Flex grow example:</p>
        <FlexContainer>
          <FlexItem>Normal</FlexItem>
          <FlexGrowItem>Flex-grow: 1</FlexGrowItem>
          <FlexGrow2>Flex-grow: 2</FlexGrow2>
        </FlexContainer>
      </Example>

      <Example>
        <SectionTitle>Common Flexbox Use Cases</SectionTitle>
        <ul>
          <li>Navigation menus</li>
          <li>Card layouts</li>
          <li>Form layouts</li>
          <li>Equal height columns</li>
          <li>Centering elements vertically and horizontally</li>
        </ul>
      </Example>
      
      
      
      <Navigation 
        prevLink="/day2/box-model" 
        nextLink="/day3/styling-forms-buttons" 
        indexLink="/day3"
        title="Flexbox Basics"
        subtitle="Learn how to create flexible and responsive layouts using CSS Flexbox"
      />
    </Layout>
  );
};

export default FlexboxGrid;