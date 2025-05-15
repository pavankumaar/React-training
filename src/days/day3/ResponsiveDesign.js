import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';

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
        title="Responsive Design"
        subtitle="Learn how to create websites that adapt to different screen sizes"
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
        
        <TryEditorButton 
          htmlCode={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background-color: #f5f5f5;
      padding: 20px;
      border-radius: 5px;
    }
    
    h1 {
      color: #333;
    }
    
    p {
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Responsive Web Design</h1>
    <p>This page uses the viewport meta tag to ensure proper scaling on all devices. Try resizing your browser window or viewing this on different devices.</p>
  </div>
</body>
</html>`}
          enabledTabs={{ html: true, css: false, js: false }}
        />
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
        
        <TryEditorButton 
          htmlCode={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Media Queries Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    
    .container {
      background-color: #f0f0f0;
      padding: 20px;
      border-radius: 5px;
    }
    
    .box {
      padding: 20px;
      margin-bottom: 20px;
      color: white;
      text-align: center;
      border-radius: 5px;
    }
    
    .device-info {
      background-color: #333;
      padding: 10px;
      color: white;
      text-align: center;
      margin-bottom: 20px;
      border-radius: 5px;
    }
    
    /* Extra small devices (phones) */
    .box {
      background-color: #e74c3c;
    }
    .device-info::after {
      content: "Extra small device (< 576px)";
    }
    
    /* Small devices (tablets) */
    @media (min-width: 576px) {
      .box {
        background-color: #f39c12;
      }
      .device-info::after {
        content: "Small device (576px - 767px)";
      }
    }
    
    /* Medium devices (laptops) */
    @media (min-width: 768px) {
      .box {
        background-color: #2ecc71;
      }
      .device-info::after {
        content: "Medium device (768px - 991px)";
      }
    }
    
    /* Large devices (desktops) */
    @media (min-width: 992px) {
      .box {
        background-color: #3498db;
      }
      .device-info::after {
        content: "Large device (992px - 1199px)";
      }
    }
    
    /* Extra large devices */
    @media (min-width: 1200px) {
      .box {
        background-color: #9b59b6;
      }
      .device-info::after {
        content: "Extra large device (≥ 1200px)";
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Media Queries Example</h1>
    <p>Resize your browser window to see the changes in layout and colors.</p>
    
    <div class="device-info"></div>
    
    <div class="box">
      <h2>Responsive Box</h2>
      <p>This box changes color based on the screen size.</p>
    </div>
  </div>
</body>
</html>`}
          enabledTabs={{ html: true, css: false, js: false }}
        />
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
        
        <TryEditorButton 
          htmlCode={`<div class="responsive-grid">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
  <div class="grid-item">Item 7</div>
  <div class="grid-item">Item 8</div>
</div>`}
          cssCode={`.responsive-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
}

/* Media queries for responsive grid */
@media (max-width: 992px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .grid-item {
    background-color: #2ecc71;
  }
}

@media (max-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-item {
    background-color: #f39c12;
  }
}

@media (max-width: 576px) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
  .grid-item {
    background-color: #e74c3c;
  }
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        <ResponsiveImage src="/image.jpg" alt="Responsive image example" />
        
        <TryEditorButton 
          htmlCode={`<div class="container">
  <h2>Responsive Images</h2>
  <p>These images will scale down if they need to fit a smaller container, but won't scale up beyond their original size.</p>
  
  <div class="image-container">
    <img src="https://via.placeholder.com/800x400" alt="Responsive image example" class="responsive-image">
    <p class="caption">A responsive image (800x400)</p>
  </div>
  
  <div class="image-container">
    <img src="https://via.placeholder.com/400x300" alt="Smaller responsive image" class="responsive-image">
    <p class="caption">A smaller responsive image (400x300)</p>
  </div>
</div>`}
          cssCode={`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.image-container {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
}

.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
}

.caption {
  text-align: center;
  margin-top: 10px;
  color: #666;
  font-style: italic;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        
        <TryEditorButton 
          htmlCode={`<div class="container">
  <h1 class="responsive-title">Responsive Typography</h1>
  
  <p class="responsive-text">This text uses a responsive font size that scales with the viewport width. Try resizing your browser to see it change.</p>
  
  <div class="text-examples">
    <p class="text-em">This text uses em units (1.2em)</p>
    <p class="text-rem">This text uses rem units (1.2rem)</p>
    <p class="text-vw">This text uses viewport width units (2vw)</p>
    <p class="text-calc">This text uses calc() for responsive sizing</p>
  </div>
</div>`}
          cssCode={`body {
  font-family: Arial, sans-serif;
  font-size: 16px; /* Base font size */
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.responsive-title {
  font-size: calc(24px + 2vw);
  margin-bottom: 20px;
  color: #333;
}

.responsive-text {
  font-size: calc(16px + 0.5vw);
  line-height: 1.5;
  margin-bottom: 30px;
}

.text-examples {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
}

.text-examples p {
  margin-bottom: 15px;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
}

.text-em {
  font-size: 1.2em;
  border-left: 4px solid #3498db;
}

.text-rem {
  font-size: 1.2rem;
  border-left: 4px solid #2ecc71;
}

.text-vw {
  font-size: 2vw;
  border-left: 4px solid #e74c3c;
}

.text-calc {
  font-size: calc(14px + 0.8vw);
  border-left: 4px solid #f39c12;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        
        <TryEditorButton 
          htmlCode={`<div class="container">
  <h2>Responsive Flexbox Layout</h2>
  
  <div class="responsive-flex">
    <div class="flex-item">Flex Item 1</div>
    <div class="flex-item">Flex Item 2</div>
    <div class="flex-item">Flex Item 3</div>
    <div class="flex-item">Flex Item 4</div>
  </div>
  
  <h3>Card Layout with Flexbox</h3>
  <div class="card-container">
    <div class="card">
      <div class="card-header">Card 1</div>
      <div class="card-body">
        <p>This is a responsive card that will adjust based on screen size.</p>
      </div>
      <div class="card-footer">
        <button>Learn More</button>
      </div>
    </div>
    
    <div class="card">
      <div class="card-header">Card 2</div>
      <div class="card-body">
        <p>Cards will wrap to new rows on smaller screens.</p>
      </div>
      <div class="card-footer">
        <button>Learn More</button>
      </div>
    </div>
    
    <div class="card">
      <div class="card-header">Card 3</div>
      <div class="card-body">
        <p>Flexbox makes it easy to create responsive layouts.</p>
      </div>
      <div class="card-footer">
        <button>Learn More</button>
      </div>
    </div>
  </div>
</div>`}
          cssCode={`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h2, h3 {
  margin-top: 30px;
  margin-bottom: 15px;
}

.responsive-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.flex-item {
  flex: 1 1 200px; /* grow | shrink | basis */
  background-color: #2ecc71;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
}

/* Card Layout */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.card-header {
  background-color: #3498db;
  color: white;
  padding: 15px;
  font-weight: bold;
  font-size: 18px;
}

.card-body {
  padding: 15px;
  flex-grow: 1;
}

.card-footer {
  padding: 15px;
  background-color: #f5f5f5;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

/* Media queries for responsive adjustments */
@media (max-width: 768px) {
  .flex-item {
    background-color: #f39c12;
  }
}

@media (max-width: 576px) {
  .flex-item {
    background-color: #e74c3c;
  }
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        
        <TryEditorButton 
          htmlCode={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Website Example</title>
  <style>
    /* Base styles (mobile first) */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    
    .container {
      width: 100%;
      padding: 0 15px;
      margin: 0 auto;
    }
    
    /* Header */
    header {
      background-color: #333;
      color: white;
      padding: 1rem 0;
    }
    
    .navbar {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    
    .nav-links {
      display: flex;
      flex-direction: column;
      list-style: none;
      width: 100%;
      text-align: center;
    }
    
    .nav-links li {
      margin-bottom: 0.5rem;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 0.5rem;
      display: block;
    }
    
    .nav-links a:hover {
      background-color: #555;
    }
    
    /* Main content */
    main {
      padding: 2rem 0;
    }
    
    .hero {
      background-color: #f4f4f4;
      padding: 2rem 0;
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .hero h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    .features {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .feature-card {
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 1.5rem;
      text-align: center;
    }
    
    .feature-card h3 {
      margin-bottom: 1rem;
      color: #333;
    }
    
    /* Footer */
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 1.5rem 0;
    }
    
    /* Tablet styles */
    @media (min-width: 768px) {
      .container {
        max-width: 720px;
      }
      
      .navbar {
        flex-direction: row;
        justify-content: space-between;
      }
      
      .logo {
        margin-bottom: 0;
      }
      
      .nav-links {
        flex-direction: row;
        width: auto;
      }
      
      .nav-links li {
        margin-bottom: 0;
        margin-left: 1rem;
      }
      
      .features {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
    }
    
    /* Desktop styles */
    @media (min-width: 992px) {
      .container {
        max-width: 960px;
      }
      
      .features {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .hero h1 {
        font-size: 3rem;
      }
    }
    
    /* Large desktop styles */
    @media (min-width: 1200px) {
      .container {
        max-width: 1140px;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <nav class="navbar">
        <div class="logo">Responsive Site</div>
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <main>
    <section class="hero">
      <div class="container">
        <h1>Responsive Web Design</h1>
        <p>This example demonstrates responsive design principles. Resize your browser to see how the layout adapts.</p>
      </div>
    </section>
    
    <div class="container">
      <div class="features">
        <div class="feature-card">
          <h3>Mobile First</h3>
          <p>Design for mobile devices first, then progressively enhance for larger screens.</p>
        </div>
        
        <div class="feature-card">
          <h3>Fluid Layouts</h3>
          <p>Use relative units and flexible grids to create layouts that adapt to any screen size.</p>
        </div>
        
        <div class="feature-card">
          <h3>Media Queries</h3>
          <p>Apply different styles based on device characteristics like screen width.</p>
        </div>
      </div>
    </div>
  </main>
  
  <footer>
    <div class="container">
      <p>&copy; 2023 Responsive Design Example</p>
    </div>
  </footer>
</body>
</html>`}
          enabledTabs={{ html: true, css: false, js: false }}
        />
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