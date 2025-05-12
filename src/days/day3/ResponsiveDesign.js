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

const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background-color: #3498db;
  color: white;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
`;

// Responsive image example
const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

// Responsive text example
const ResponsiveText = styled.p`
  font-size: calc(16px + 0.5vw);
`;

// Responsive flexbox example
const ResponsiveFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const FlexItem = styled.div`
  flex: 1 1 200px;
  background-color: #2ecc71;
  color: white;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
`;

const ResponsiveDesign = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day3/styling-forms-buttons" 
        nextLink="/day1" 
        indexLink="/day3" 
      />
      
      <Title>Responsive Design Overview</Title>
      
      <Example>
        <SectionTitle>What is Responsive Design?</SectionTitle>
        <p>Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It ensures that websites look and function properly on desktops, tablets, and mobile phones.</p>
      </Example>

      <Example>
        <SectionTitle>Key Principles of Responsive Design</SectionTitle>
        <ol>
          <li><strong>Fluid Layouts:</strong> Using relative units (%, em, rem) instead of fixed units (px)</li>
          <li><strong>Flexible Images:</strong> Images that scale with the layout</li>
          <li><strong>Media Queries:</strong> CSS rules that apply based on device characteristics</li>
          <li><strong>Mobile-First Approach:</strong> Designing for mobile devices first, then enhancing for larger screens</li>
        </ol>
      </Example>

      <Example>
        <SectionTitle>Viewport Meta Tag</SectionTitle>
        <p>The viewport meta tag is essential for responsive design. It tells the browser how to control the page's dimensions and scaling:</p>
        
        <CodeBlock>
{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
        </CodeBlock>
        
        <p>This tag ensures that the width of the page is set to the width of the device and the initial zoom level is set to 1.</p>
      </Example>

      <Example>
        <SectionTitle>Media Queries</SectionTitle>
        <p>Media queries allow you to apply different CSS styles based on the characteristics of the device:</p>
        
        <CodeBlock>
{`/* Styles for screens smaller than 768px (typical tablet) */
@media (max-width: 768px) {
    .container {
        width: 100%;
        padding: 0 15px;
    }
    
    .column {
        width: 50%;
    }
}

/* Styles for screens smaller than 576px (typical mobile) */
@media (max-width: 576px) {
    .column {
        width: 100%;
    }
}`}
        </CodeBlock>
        
        <p>Common breakpoints:</p>
        <ul>
          <li>Extra small devices (phones): up to 576px</li>
          <li>Small devices (tablets): 577px to 768px</li>
          <li>Medium devices (laptops): 769px to 992px</li>
          <li>Large devices (desktops): 993px to 1200px</li>
          <li>Extra large devices: above 1200px</li>
        </ul>
      </Example>

      <Example>
        <SectionTitle>Responsive Grid Example</SectionTitle>
        <p>This grid changes the number of columns based on screen size. Try resizing your browser window to see it in action:</p>
        
        <ResponsiveGrid>
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
          <GridItem>Item 4</GridItem>
          <GridItem>Item 5</GridItem>
          <GridItem>Item 6</GridItem>
          <GridItem>Item 7</GridItem>
          <GridItem>Item 8</GridItem>
        </ResponsiveGrid>
        
        <CodeBlock>
{`.responsive-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

/* Media queries for responsive grid */
@media (max-width: 992px) {
    .responsive-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .responsive-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .responsive-grid {
        grid-template-columns: 1fr;
    }
}`}
        </CodeBlock>
      </Example>

      <Example>
        <SectionTitle>Responsive Images</SectionTitle>
        <p>Make images responsive by setting their max-width to 100%:</p>
        
        <CodeBlock>
{`img {
    max-width: 100%;
    height: auto;
}`}
        </CodeBlock>
        
        <p>Example of a responsive image (placeholder):</p>
        <ResponsiveImage src="https://via.placeholder.com/800x400" alt="Responsive image example" />
      </Example>

      <Example>
        <SectionTitle>Responsive Typography</SectionTitle>
        <p>Use relative units for font sizes to make text responsive:</p>
        
        <CodeBlock>
{`/* Using em units */
body {
    font-size: 16px; /* Base font size */
}

h1 {
    font-size: 2em; /* 2 times the parent font size */
}

/* Using rem units */
html {
    font-size: 16px; /* Root font size */
}

h1 {
    font-size: 2rem; /* 2 times the root font size */
}

/* Using viewport units */
h1 {
    font-size: calc(16px + 1vw); /* Scales with viewport width */
}`}
        </CodeBlock>
        
        <ResponsiveText>This text uses a responsive font size that scales with the viewport width. Try resizing your browser to see it change.</ResponsiveText>
      </Example>

      <Example>
        <SectionTitle>Responsive Flexbox Layout</SectionTitle>
        <p>Flexbox is naturally responsive and can be enhanced with media queries:</p>
        
        <ResponsiveFlex>
          <FlexItem>Flex Item 1</FlexItem>
          <FlexItem>Flex Item 2</FlexItem>
          <FlexItem>Flex Item 3</FlexItem>
          <FlexItem>Flex Item 4</FlexItem>
        </ResponsiveFlex>
        
        <CodeBlock>
{`.responsive-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.flex-item {
    flex: 1 1 200px; /* grow | shrink | basis */
}`}
        </CodeBlock>
      </Example>

      <Example>
        <SectionTitle>Mobile-First Approach</SectionTitle>
        <p>The mobile-first approach means designing for mobile devices first, then progressively enhancing the design for larger screens:</p>
        
        <CodeBlock>
{`/* Base styles for mobile */
.container {
    padding: 10px;
}

/* Enhance for tablets and up */
@media (min-width: 768px) {
    .container {
        padding: 20px;
    }
}

/* Enhance for desktops and up */
@media (min-width: 992px) {
    .container {
        padding: 30px;
        max-width: 960px;
        margin: 0 auto;
    }
}`}
        </CodeBlock>
      </Example>

      <Example>
        <SectionTitle>Best Practices for Responsive Design</SectionTitle>
        <ul>
          <li>Start with a mobile-first approach</li>
          <li>Use relative units (%, em, rem, vw, vh) instead of fixed units (px)</li>
          <li>Test your design on multiple devices and screen sizes</li>
          <li>Use appropriate breakpoints based on content, not specific devices</li>
          <li>Optimize images for different screen sizes</li>
          <li>Consider touch targets for mobile users (buttons, links should be at least 44x44px)</li>
          <li>Simplify navigation for smaller screens</li>
          <li>Ensure text remains readable at all screen sizes</li>
        </ul>
      </Example>
      
      
      
      <Navigation 
        prevLink="/day3/styling-forms-buttons" 
        nextLink="/day1" 
        indexLink="/day3" 
      />
    </Layout>
  );
};

export default ResponsiveDesign;