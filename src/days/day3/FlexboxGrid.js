import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';

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
        
        <TryEditorButton 
          htmlCode={`<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`}
          cssCode={`.container {
  display: flex;
  background-color: #f1f1f1;
  padding: 10px;
}

.item {
  background-color: #4682b4;
  color: white;
  padding: 10px;
  margin: 5px;
  text-align: center;
  border-radius: 4px;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        
        <TryEditorButton 
          htmlCode={`<h3>Row (default):</h3>
<div class="container-row">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<h3>Column:</h3>
<div class="container-column">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`}
          cssCode={`.container-row {
  display: flex;
  flex-direction: row; /* default */
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
}

.container-column {
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 10px;
}

.item {
  background-color: #4682b4;
  color: white;
  padding: 10px;
  margin: 5px;
  text-align: center;
  border-radius: 4px;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        
        <TryEditorButton 
          htmlCode={`<div class="container-wrap">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
  <div class="item">Item 7</div>
  <div class="item">Item 8</div>
</div>`}
          cssCode={`.container-wrap {
  display: flex;
  flex-wrap: wrap;
  background-color: #f1f1f1;
  padding: 10px;
}

.item {
  background-color: #4682b4;
  color: white;
  padding: 10px;
  margin: 5px;
  text-align: center;
  border-radius: 4px;
  width: 100px;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        
        <TryEditorButton 
          htmlCode={`<h3>justify-content: flex-start</h3>
<div class="container flex-start">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<h3>justify-content: center</h3>
<div class="container center">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<h3>justify-content: space-between</h3>
<div class="container space-between">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<h3>justify-content: space-around</h3>
<div class="container space-around">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`}
          cssCode={`.container {
  display: flex;
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
}

.flex-start {
  justify-content: flex-start;
}

.center {
  justify-content: center;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

.item {
  background-color: #4682b4;
  color: white;
  padding: 10px;
  margin: 5px;
  text-align: center;
  border-radius: 4px;
  width: 80px;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        
        <TryEditorButton 
          htmlCode={`<div class="container">
  <div class="item tall">Tall</div>
  <div class="item">Normal</div>
  <div class="item short">Short</div>
</div>`}
          cssCode={`.container {
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
  height: 100px;
}

.item {
  background-color: #4682b4;
  color: white;
  padding: 10px;
  margin: 5px;
  text-align: center;
  border-radius: 4px;
}

.tall {
  height: 80px;
}

.short {
  height: 30px;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        
        <TryEditorButton 
          htmlCode={`<div class="container">
  <div class="item">Normal</div>
  <div class="item grow-1">Flex-grow: 1</div>
  <div class="item grow-2">Flex-grow: 2</div>
</div>`}
          cssCode={`.container {
  display: flex;
  background-color: #f1f1f1;
  padding: 10px;
}

.item {
  background-color: #4682b4;
  color: white;
  padding: 10px;
  margin: 5px;
  text-align: center;
  border-radius: 4px;
}

.grow-1 {
  flex-grow: 1;
}

.grow-2 {
  flex-grow: 2;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        
        <TryEditorButton 
          htmlCode={`<!-- Navigation Menu -->
<nav class="navbar">
  <div class="logo">Logo</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<!-- Card Layout -->
<div class="card-container">
  <div class="card">
    <h3>Card 1</h3>
    <p>This is a sample card with some content.</p>
    <button>Learn More</button>
  </div>
  <div class="card">
    <h3>Card 2</h3>
    <p>This is a sample card with some content.</p>
    <button>Learn More</button>
  </div>
  <div class="card">
    <h3>Card 3</h3>
    <p>This is a sample card with some content.</p>
    <button>Learn More</button>
  </div>
</div>

<!-- Centered Content -->
<div class="centered-container">
  <div class="centered-content">
    <h2>Perfectly Centered</h2>
    <p>This content is centered both horizontally and vertically.</p>
  </div>
</div>`}
          cssCode={`/* Navigation Menu */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

/* Card Layout */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.card {
  flex: 1 1 250px;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.card h3 {
  margin-top: 0;
}

.card button {
  margin-top: auto;
  background-color: #4682b4;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

/* Centered Content */
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #f0f0f0;
  margin-top: 20px;
}

.centered-content {
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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