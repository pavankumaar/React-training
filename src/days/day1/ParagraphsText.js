import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
`;

const ParagraphsText = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day1/headings" 
        nextLink="/day1/attributes" 
        indexLink="/day1"
        title="HTML Paragraphs and Text Formatting"
        subtitle="Learn how to work with paragraphs and text formatting in HTML"
      />
      
      <Example title="Paragraphs">
        <p>This is a paragraph. Paragraphs are defined with the &lt;p&gt; tag.</p>
        <p>This is another paragraph. HTML automatically adds space before and after each paragraph.</p>
        
        <CodeBlock>
{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}
        </CodeBlock>
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Paragraphs</title>
</head>
<body>
    <h1>Working with Paragraphs</h1>
    
    <p>This is a paragraph. Paragraphs are defined with the p tag.</p>
    <p>This is another paragraph. HTML automatically adds space before and after each paragraph.</p>
    
    <p>Paragraphs are block-level elements, which means they take up the full width available and start on a new line.</p>
    
    <!-- Try adding more paragraphs below -->
    
</body>
</html>`}
          cssCode={`/* Styling for paragraphs */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 20px;
  max-width: 800px;
}

h1 {
  color: #2c3e50;
}

p {
  margin-bottom: 15px;
  color: #333;
  background-color: #f9f9f9;
  padding: 10px;
  border-left: 3px solid #3498db;
}

/* Try adding a hover effect */
p:hover {
  background-color: #e9f7fe;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example title="Line Breaks">
        <p>This is a paragraph with a line break.<br/>The text continues on a new line after the break.</p>
        
        <CodeBlock>
{`<p>This is a paragraph with a line break.<br>The text continues on a new line after the break.</p>`}
        </CodeBlock>
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Line Breaks</title>
</head>
<body>
    <h1>Working with Line Breaks</h1>
    
    <p>This is a paragraph with a line break.<br>The text continues on a new line after the break.</p>
    
    <p>Line breaks are useful when you want to<br>create a new line without<br>starting a new paragraph.</p>
    
    <p>They are commonly used for:</p>
    <p>
        Addresses:<br>
        123 Main Street<br>
        Anytown, ST 12345<br>
        United States
    </p>
    
    <p>
        Poetry:<br>
        Roses are red,<br>
        Violets are blue,<br>
        HTML is fun,<br>
        And so are you!
    </p>
    
    <!-- Try adding your own examples with line breaks -->
    
</body>
</html>`}
          cssCode={`/* Styling for the page */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  margin: 20px;
  max-width: 800px;
}

h1 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

p {
  margin-bottom: 20px;
  color: #333;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example title="Text Formatting">
        <SectionTitle>Bold and Strong Text</SectionTitle>
        <p>This is <b>bold text</b> using the b tag.</p>
        <p>This is <strong>strong text</strong> using the strong tag (semantically important).</p>
        
        <SectionTitle>Italic</SectionTitle>
        <p>This is <i>italic text</i> using the i tag.</p>
        
        <SectionTitle>Marked, Deleted</SectionTitle>
        <p>This is <mark>marked or highlighted text</mark> using the mark tag.</p>
        <p>This is <del>deleted text</del> using the del tag.</p>
        
        <SectionTitle>Subscript and Superscript</SectionTitle>
        <p>This is <sub>subscript</sub> text using the sub tag.</p>
        <p>This is <sup>superscript</sup> text using the sup tag.</p>
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Text Formatting</title>
</head>
<body>
    <h1>Text Formatting in HTML</h1>
    
    <h2>Bold and Strong Text</h2>
    <p>This is <b>bold text</b> using the b tag.</p>
    <p>This is <strong>strong text</strong> using the strong tag (semantically important).</p>
    
    <h2>Italic and Emphasized Text</h2>
    <p>This is <i>italic text</i> using the i tag.</p>
    <p>This is <em>emphasized text</em> using the em tag (semantically important).</p>
    
    <h2>Highlighted, Deleted, and Inserted Text</h2>
    <p>This is <mark>marked or highlighted text</mark> using the mark tag.</p>
    <p>This is <del>deleted text</del> using the del tag.</p>
    <p>This is <ins>inserted text</ins> using the ins tag.</p>
    
    <h2>Subscript and Superscript</h2>
    <p>Chemical formula for water: H<sub>2</sub>O</p>
    <p>Mathematical expression: E = mc<sup>2</sup></p>
    
    <h2>Other Text Formatting</h2>
    <p><small>This is smaller text</small> using the small tag.</p>
    <p><code>This is code</code> using the code tag.</p>
    <p><kbd>Ctrl</kbd> + <kbd>S</kbd> to save (keyboard input using kbd tag).</p>
    
    <!-- Try experimenting with different combinations of text formatting -->
    
</body>
</html>`}
          cssCode={`/* Styling for text formatting examples */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  margin: 20px;
  max-width: 800px;
}

h1 {
  color: #2c3e50;
  text-align: center;
}

h2 {
  color: #3498db;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin-top: 25px;
}

p {
  margin-bottom: 10px;
}

mark {
  background-color: #ffffcc;
  padding: 2px 4px;
}

del {
  color: #e74c3c;
}

ins {
  color: #27ae60;
  text-decoration: none;
  border-bottom: 1px solid #27ae60;
}

code {
  background-color: #f5f5f5;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
}

kbd {
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.2);
  color: #333;
  display: inline-block;
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  font-size: 0.9em;
  padding: 2px 4px;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example title="Preformatted Text">
        <p>The pre tag preserves both spaces and line breaks:</p>
        <pre>
{`    This text is displayed
    exactly as written
    in the HTML source code,
    preserving both spaces
    and line breaks.`}
        </pre>
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Preformatted Text</title>
</head>
<body>
    <h1>Working with Preformatted Text</h1>
    
    <p>The pre tag preserves both spaces and line breaks:</p>
    
    <pre>
    This text is displayed
    exactly as written
    in the HTML source code,
    preserving both spaces
    and line breaks.
    </pre>
    
    <h2>Using Pre for Code Examples</h2>
    <pre>
function sayHello() {
    console.log("Hello, world!");
}

// Call the function
sayHello();
    </pre>
    
    <h2>Using Pre for ASCII Art</h2>
    <pre>
    /\\
   /  \\
  /    \\
 /      \\
/________\\
    </pre>
    
    <h2>Pre with Code Tag</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    
    <!-- Try creating your own preformatted text examples -->
    
</body>
</html>`}
          cssCode={`/* Styling for preformatted text */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 20px;
  max-width: 800px;
}

h1, h2 {
  color: #2c3e50;
}

pre {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  border-left: 4px solid #3498db;
  overflow-x: auto;
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  font-size: 14px;
  line-height: 1.4;
  margin: 15px 0;
}

pre code {
  color: #e74c3c;
}

/* Different styling for different pre sections */
pre:nth-of-type(2) {
  border-left-color: #27ae60;
}

pre:nth-of-type(3) {
  border-left-color: #f39c12;
  font-family: monospace;
}

pre:nth-of-type(4) {
  border-left-color: #9b59b6;
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>
      
      <Example title="Try Text Formatting">
        <p>Try out different text formatting elements:</p>
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Text Formatting</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        .section {
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        h2 {
            color: #3498db;
        }
    </style>
</head>
<body>
    <h1>HTML Text Formatting Examples</h1>
    
    <div class="section">
        <h2>Paragraphs and Line Breaks</h2>
        <p>This is a paragraph. Paragraphs are defined with the p tag.</p>
        <p>This is another paragraph with a <br>line break.</p>
    </div>
    
    <div class="section">
        <h2>Text Formatting</h2>
        <p><b>Bold text</b> using the b tag</p>
        <p><strong>Strong text</strong> using the strong tag</p>
        <p><i>Italic text</i> using the i tag</p>
        <p><em>Emphasized text</em> using the em tag</p>
        <p><mark>Highlighted text</mark> using the mark tag</p>
        <p><del>Deleted text</del> using the del tag</p>
        <p><ins>Inserted text</ins> using the ins tag</p>
        <p>H<sub>2</sub>O uses the sub tag</p>
        <p>X<sup>2</sup> uses the sup tag</p>
    </div>
    
    <div class="section">
        <h2>Preformatted Text</h2>
        <pre>
    This text is displayed
    exactly as written
    in the HTML source code,
    preserving both spaces
    and line breaks.
        </pre>
    </div>
    
    <!-- Try modifying the code above or add your own examples! -->
</body>
</html>`}
          cssCode={`/* You can add additional CSS here */
.section:hover {
    background-color: #f8f9fa;
}

mark {
    background-color: #ffffcc;
    padding: 2px 4px;
}

pre {
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    overflow: auto;
}`}
          jsCode={`// JavaScript is not needed for this example`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>
      
      
      <Navigation 
        prevLink="/day1/headings" 
        nextLink="/day1/attributes" 
        indexLink="/day1"
        title="HTML Paragraphs and Text Formatting"
        subtitle="Learn how to work with paragraphs and text formatting in HTML"
      />
    </Layout>
  );
};

export default ParagraphsText;