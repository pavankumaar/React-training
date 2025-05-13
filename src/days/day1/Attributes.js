import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';

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
        title="HTML Attributes"
        subtitle="Understand how to use HTML attributes to provide additional information about elements"
      />
      
      <Example title="What are HTML Attributes?">
        <p>HTML attributes provide additional information about HTML elements:</p>
        <ul>
          <li>All HTML elements can have attributes</li>
          <li>Attributes provide additional information about elements</li>
          <li>Attributes are always specified in the start tag</li>
          <li>Attributes usually come in name/value pairs like: <Highlight>name="value"</Highlight></li>
        </ul>
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Attributes Introduction</title>
</head>
<body>
    <h1>Understanding HTML Attributes</h1>
    
    <p>HTML attributes provide additional information about HTML elements:</p>
    <ul>
        <li>All HTML elements can have attributes</li>
        <li>Attributes provide additional information about elements</li>
        <li>Attributes are always specified in the start tag</li>
        <li>Attributes usually come in name/value pairs like: <span style="background-color: yellow; padding: 2px;">name="value"</span></li>
    </ul>
    
    <h2>Basic Attribute Examples:</h2>
    
    <!-- Link with href attribute -->
    <p><a href="https://www.example.com">This link has an href attribute</a></p>
    
    <!-- Image with src and alt attributes -->
    <p><img src="https://via.placeholder.com/100" alt="This image has src and alt attributes"></p>
    
    <!-- Element with style attribute -->
    <p style="color: blue; font-weight: bold;">This paragraph has a style attribute</p>
    
    <!-- Try adding your own elements with attributes below -->
    
</body>
</html>`}
          cssCode={`/* Basic styling for the page */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 20px;
  max-width: 800px;
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #3498db;
}

ul {
  background-color: #f8f9fa;
  padding: 15px 15px 15px 40px;
  border-radius: 5px;
}

li {
  margin-bottom: 8px;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        <img src="image.jpg" alt="Placeholder Img" width="150" height="150" />
        <CodeBlock>
{`<img src="image.jpg" alt="Placeholder Img" width="150" height="150">`}
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
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>Common HTML Attributes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
        }
        .section {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        h2 {
            color: #3498db;
            margin-top: 0;
        }
        .note {
            background-color: #f8f9fa;
            padding: 10px;
            border-radius: 5px;
        }
        .important {
            border-left: 4px solid #e74c3c;
        }
        #unique-element {
            font-weight: bold;
            color: purple;
        }
    </style>
</head>
<body>
    <h1>Common HTML Attributes</h1>
    
    <div class="section">
        <h2>The href Attribute</h2>
        <p>The href attribute specifies the URL of the page the link goes to:</p>
        <a href="https://www.example.com" target="_blank">Visit Example.com</a>
        <p>Adding target="_blank" opens the link in a new tab:</p>
        <a href="https://www.example.com" target="_blank">Open in new tab</a>
    </div>
    
    <div class="section">
        <h2>The src, alt, width, and height Attributes</h2>
        <p>The src attribute specifies the path to the image:</p>
        <img src="https://via.placeholder.com/150" alt="A placeholder image" width="150" height="150">
        <p>Try changing the width and height values:</p>
        <img src="https://via.placeholder.com/300/09f/fff.png" alt="Blue placeholder" width="200" height="100">
    </div>
    
    <div class="section">
        <h2>The style Attribute</h2>
        <p>The style attribute adds inline CSS:</p>
        <p style="color: red; font-size: 20px; background-color: lightgray; padding: 10px;">
            This paragraph has inline styling.
        </p>
        <p>Try adding your own style attribute to this paragraph.</p>
    </div>
    
    <div class="section">
        <h2>The class Attribute</h2>
        <p>The class attribute applies CSS classes:</p>
        <div class="note">This is a note.</div>
        <br>
        <div class="note important">This is a very important note.</div>
    </div>
    
    <div class="section">
        <h2>The id Attribute</h2>
        <p>The id attribute gives an element a unique identifier:</p>
        <div id="unique-element">This element has a unique ID.</div>
        <p>IDs can be used for JavaScript selection and CSS styling.</p>
    </div>
    
    <!-- Try adding more elements with different attributes below -->
    
</body>
</html>`}
          cssCode={`/* Additional CSS styles */
.section:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

a {
  color: #2980b9;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #e74c3c;
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
}

img:hover {
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
}

#unique-element:hover {
  background-color: #f0e6ff;
  cursor: pointer;
}`}
          jsCode={`// Add some interactivity
document.addEventListener("DOMContentLoaded", function() {
  // Change the unique element when clicked
  const uniqueElement = document.getElementById("unique-element");
  if (uniqueElement) {
    uniqueElement.addEventListener("click", function() {
      this.textContent = "You clicked me! ID attributes are useful for JavaScript.";
      this.style.backgroundColor = "#e6ccff";
    });
  }
  
  // Add hover effect to images
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.addEventListener("mouseover", function() {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseout", function() {
      this.style.transform = "scale(1)";
    });
  });
});`}
          enabledTabs={{ html: true, css: true, js: true }}
        />
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
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Global HTML Attributes</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
        }
        .highlight {
            background-color: #ffffcc;
            padding: 5px;
            border-radius: 3px;
        }
        .section {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        [data-importance="high"] {
            border-left: 4px solid #e74c3c;
            padding-left: 10px;
        }
        [data-importance="medium"] {
            border-left: 4px solid #f39c12;
            padding-left: 10px;
        }
        [data-importance="low"] {
            border-left: 4px solid #3498db;
            padding-left: 10px;
        }
    </style>
</head>
<body>
    <h1>Global HTML Attributes</h1>
    <p>Global attributes can be used on any HTML element.</p>
    
    <div class="section">
        <h2>The title Attribute</h2>
        <p>The title attribute shows a tooltip when you hover over an element:</p>
        <p title="This is a tooltip!">Hover over me to see a tooltip.</p>
        <button title="Click to submit the form">Submit</button>
    </div>
    
    <div class="section">
        <h2>The lang Attribute</h2>
        <p>The lang attribute specifies the language of the element's content:</p>
        <p lang="en">This paragraph is in English.</p>
        <p lang="es">Este párrafo está en español.</p>
        <p lang="fr">Ce paragraphe est en français.</p>
    </div>
    
    <div class="section">
        <h2>The data-* Attributes</h2>
        <p>Data attributes store custom data:</p>
        <div data-importance="high" class="highlight">This is a high importance note.</div>
        <div data-importance="medium" class="highlight">This is a medium importance note.</div>
        <div data-importance="low" class="highlight">This is a low importance note.</div>
        <p>Data attributes are useful for storing information that can be accessed with JavaScript.</p>
    </div>
    
    <div class="section">
        <h2>The hidden Attribute</h2>
        <p>The hidden attribute hides an element:</p>
        <div>This element is visible.</div>
        <div hidden>This element is hidden.</div>
        <button id="toggle-btn">Toggle Hidden Element</button>
    </div>
    
    <div class="section">
        <h2>The contenteditable Attribute</h2>
        <p>The contenteditable attribute makes content editable:</p>
        <div contenteditable="true" style="border: 1px dashed #ccc; padding: 10px;">
            This text is editable. Click here and start typing to edit this content.
        </div>
    </div>
    
    <!-- Try experimenting with other global attributes -->
    
</body>
</html>`}
          cssCode={`/* Additional styling for global attributes */
.highlight {
  margin: 10px 0;
}

.highlight:hover {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

[contenteditable="true"]:focus {
  outline: none;
  background-color: #f8f9fa;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #2980b9;
}`}
          jsCode={`// Add interactivity to the global attributes example
document.addEventListener("DOMContentLoaded", function() {
  // Toggle hidden element
  const toggleBtn = document.getElementById("toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function() {
      const hiddenElement = document.querySelector("[hidden]");
      if (hiddenElement) {
        if (hiddenElement.hasAttribute("hidden")) {
          hiddenElement.removeAttribute("hidden");
        } else {
          hiddenElement.setAttribute("hidden", "");
        }
      }
    });
  }
  
  // Add click event to data-importance elements
  const importanceElements = document.querySelectorAll("[data-importance]");
  importanceElements.forEach(element => {
    element.addEventListener("click", function() {
      const importance = this.getAttribute("data-importance");
      alert("This note has " + importance + " importance!");
    });
  });
});`}
          enabledTabs={{ html: true, css: true, js: true }}
        />
      </Example>
      
      <Example title="Try HTML Attributes">
        <p>Experiment with different HTML attributes:</p>
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Attributes Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        .section {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .important {
            background-color: #ffe6e6;
            border-left: 5px solid #ff4d4d;
        }
        .info {
            background-color: #e6f7ff;
            border-left: 5px solid #1890ff;
        }
        #unique-element {
            font-weight: bold;
            color: purple;
        }
        h2 {
            color: #3498db;
        }
    </style>
</head>
<body>
    <h1>HTML Attributes Examples</h1>
    
    <div class="section">
        <h2>The href Attribute</h2>
        <p>The href attribute specifies the URL of the page the link goes to:</p>
        <a href="https://www.example.com" target="_blank">Visit Example.com</a>
    </div>
    
    <div class="section">
        <h2>The src Attribute</h2>
        <p>The src attribute specifies the path to the image to be displayed:</p>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image" width="150" height="150">
    </div>
    
    <div class="section">
        <h2>The style Attribute</h2>
        <p style="color: red; font-size: 18px; background-color: lightgray; padding: 10px;">
            This paragraph has inline styling using the style attribute.
        </p>
    </div>
    
    <div class="section">
        <h2>The class Attribute</h2>
        <div class="important">This is an important note using a class attribute.</div>
        <br>
        <div class="info">This is an informational note using a class attribute.</div>
    </div>
    
    <div class="section">
        <h2>The id Attribute</h2>
        <p>The id attribute specifies a unique id for an element:</p>
        <div id="unique-element">This element has a unique ID.</div>
    </div>
    
    <div class="section">
        <h2>The title Attribute</h2>
        <p>Hover over the text below to see the title attribute in action:</p>
        <p title="This is a tooltip!">Hover over me to see a tooltip.</p>
    </div>
    
    <!-- Try modifying the attributes above or add your own examples! -->
</body>
</html>`}
          cssCode={`/* You can add additional CSS here */
.section:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

#unique-element:hover {
    background-color: #f0e6ff;
    cursor: pointer;
}

a:hover {
    text-decoration: none;
    color: #ff6600;
}`}
          jsCode={`// Add interactivity with JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Change the unique element text when clicked
    const uniqueElement = document.getElementById("unique-element");
    if (uniqueElement) {
        uniqueElement.addEventListener("click", function() {
            this.textContent = "You clicked the unique element!";
            this.style.backgroundColor = "#e6ccff";
        });
    }
    
    // Add a tooltip dynamically
    const infoDiv = document.querySelector(".info");
    if (infoDiv) {
        infoDiv.title = "This tooltip was added with JavaScript";
    }
});`}
          enabledTabs={{ html: true, css: true, js: true }}
        />
      </Example>
      
      
      <Navigation 
        prevLink="/day1/paragraphs-text" 
        nextLink="/day1/tables" 
        indexLink="/day1"
        title="HTML Attributes"
        subtitle="Understand how to use HTML attributes to provide additional information about elements"
      />
    </Layout>
  );
};

export default Attributes;