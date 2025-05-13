import { divSpanContent } from './divSpan_content';

export const day2EditorContent = {
    // CSS Introduction - What is CSS?
    cssIntroductionBasics: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Basics Example</title>
    <style>
        /* Basic page without styling */
        .unstyled {
            font-family: Times New Roman;
            margin: 0;
            padding: 0;
        }
        
        /* Same page with CSS styling */
        .styled {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f0f8ff;
        }
        
        .styled h2 {
            color: #0066cc;
            border-bottom: 2px solid #ddd;
            padding-bottom: 5px;
        }
        
        .styled p {
            color: #333;
            margin-bottom: 15px;
        }
        
        .styled .highlight {
            background-color: #ffffcc;
            padding: 10px;
            border-left: 4px solid #ffcc00;
            margin: 15px 0;
        }
        
        .styled button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .styled button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Transforms Content</h1>
        
        <h2>Without CSS:</h2>
        <div class="unstyled">
            <h2>Welcome to My Website</h2>
            <p>This is how a website looks without CSS styling.</p>
            <p class="highlight">This is important information!</p>
            <button>Click Me</button>
        </div>
        
        <h2>With CSS:</h2>
        <div class="styled">
            <h2>Welcome to My Website</h2>
            <p>This is how a website looks with CSS styling.</p>
            <p class="highlight">This is important information!</p>
            <button>Click Me</button>
        </div>
    </div>
</body>
</html>`,
        css: `/* Try modifying these styles to see immediate changes */

/* Change the background color of the styled section */
.styled {
    /* Try changing these values */
    /* background-color: #e6f7ff; */
    /* font-family: 'Georgia', serif; */
}

/* Modify the heading style */
.styled h2 {
    /* color: purple; */
    /* text-align: center; */
    /* text-transform: uppercase; */
}

/* Change the highlight style */
.styled .highlight {
    /* background-color: #e6ffe6; */
    /* border-left: 4px solid #00cc00; */
}

/* Modify the button */
.styled button {
    /* background-color: #0066cc; */
    /* border-radius: 20px; */
    /* font-weight: bold; */
}

/* Add hover effects to the button */
.styled button:hover {
    /* transform: scale(1.1); */
    /* transition: all 0.3s ease; */
}
`
    },
    
    // CSS Syntax
    cssSyntax: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Syntax Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }
        
        .example-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .example-box {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
            width: 45%;
            min-width: 300px;
        }
        
        /* Example styles that you can modify */
        .box1 {
            background-color: #f0f0f0;
            border-left: 5px solid #0066cc;
            padding: 10px;
        }
        
        .box2 {
            color: white;
            background-color: #333;
            text-align: center;
            padding: 20px;
            border-radius: 8px;
        }
        
        .box3 {
            font-size: 18px;
            font-weight: bold;
            color: #0066cc;
            border: 2px dashed #ccc;
            padding: 15px;
        }
        
        .box4 {
            background-color: #ffffcc;
            border: 1px solid #ffcc00;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>CSS Syntax Examples</h1>
    
    <div class="example-container">
        <div class="example-box">
            <h3>Example 1: Basic Selector</h3>
            <pre>
.box1 {
    background-color: #f0f0f0;
    border-left: 5px solid #0066cc;
    padding: 10px;
}</pre>
            <div class="box1">This box uses the .box1 class selector</div>
        </div>
        
        <div class="example-box">
            <h3>Example 2: Multiple Properties</h3>
            <pre>
.box2 {
    color: white;
    background-color: #333;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
}</pre>
            <div class="box2">This box uses the .box2 class selector</div>
        </div>
    </div>
    
    <div class="example-container">
        <div class="example-box">
            <h3>Example 3: Font Properties</h3>
            <pre>
.box3 {
    font-size: 18px;
    font-weight: bold;
    color: #0066cc;
    border: 2px dashed #ccc;
    padding: 15px;
}</pre>
            <div class="box3">This box uses the .box3 class selector</div>
        </div>
        
        <div class="example-box">
            <h3>Example 4: Box Model Properties</h3>
            <pre>
.box4 {
    background-color: #ffffcc;
    border: 1px solid #ffcc00;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    padding: 10px;
}</pre>
            <div class="box4">This box uses the .box4 class selector</div>
        </div>
    </div>
</body>
</html>`,
        css: `/* Try modifying these example styles */

/* Example 1: Change the basic selector styles */
.box1 {
    /* Try changing these values */
    /* background-color: #e6f7ff; */
    /* border-left: 5px solid #ff6600; */
    /* padding: 15px; */
}

/* Example 2: Modify multiple properties */
.box2 {
    /* Try changing these values */
    /* color: yellow; */
    /* background-color: #0066cc; */
    /* text-align: left; */
    /* border-radius: 20px; */
}

/* Example 3: Change font properties */
.box3 {
    /* Try changing these values */
    /* font-size: 20px; */
    /* font-family: 'Courier New', monospace; */
    /* color: #ff6600; */
    /* border: 2px dotted #333; */
}

/* Example 4: Modify box model properties */
.box4 {
    /* Try changing these values */
    /* background-color: #e6ffe6; */
    /* border: 2px solid #00cc00; */
    /* box-shadow: 0 5px 15px rgba(0,0,0,0.2); */
    /* border-radius: 10px; */
}

/* Try creating your own custom class */
/*
.my-custom-box {
    background-color: #your-color;
    color: #your-text-color;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
}
*/
`
    },
    
    // Ways to Insert CSS
    cssInsertionMethods: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Insertion Methods</title>
    <!-- External CSS (commented out for this example) -->
    <!-- <link rel="stylesheet" href="styles.css"> -->
    
    <!-- Internal CSS Example -->
    <style>
        /* This is internal CSS */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .example-box {
            border: 1px solid #ddd;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        
        /* Internal CSS styles */
        .internal-css-example {
            background-color: #e6f7ff;
            border-left: 4px solid #0066cc;
            padding: 15px;
        }
        
        /* These styles will be overridden by inline CSS */
        .inline-css-example {
            background-color: #f0f0f0;
            color: #333;
            padding: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Three Ways to Insert CSS</h1>
        
        <div class="example-box">
            <h2>1. External CSS</h2>
            <p>External CSS is linked using the &lt;link&gt; tag in the &lt;head&gt; section:</p>
            <pre>&lt;link rel="stylesheet" href="styles.css"&gt;</pre>
            <div class="external-css-example">
                <p>This would be styled by external CSS if the link wasn't commented out.</p>
                <p>External CSS is in a separate .css file.</p>
            </div>
        </div>
        
        <div class="example-box">
            <h2>2. Internal CSS</h2>
            <p>Internal CSS is defined in the &lt;style&gt; tag in the &lt;head&gt; section:</p>
            <div class="internal-css-example">
                <p>This box is styled using internal CSS.</p>
                <p>The styles are defined in the &lt;style&gt; tag in this document.</p>
            </div>
        </div>
        
        <div class="example-box">
            <h2>3. Inline CSS</h2>
            <p>Inline CSS is applied directly to elements using the style attribute:</p>
            <div class="inline-css-example" style="background-color: #ffe6e6; color: #cc0000; border-left: 4px solid #cc0000; padding: 15px;">
                <p>This box is styled using inline CSS.</p>
                <p>The styles are applied directly to this element using the style attribute.</p>
                <p>Inline styles override both internal and external CSS.</p>
            </div>
        </div>
    </div>
</body>
</html>`,
        css: `/* This is external CSS (the file you're editing now) */
/* These styles would apply if the <link> tag wasn't commented out */

/* Try uncommenting and modifying these styles */

/*
body {
    background-color: #f0f8ff;
    font-family: 'Georgia', serif;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.example-box {
    border: 1px solid #ccc;
    margin-bottom: 30px;
}

.external-css-example {
    background-color: #e6ffe6;
    border-left: 4px solid #00cc00;
    padding: 15px;
}
*/

/* Try creating styles that would override the internal CSS */
/*
.internal-css-example {
    background-color: #e6e6ff;
    border-left: 4px solid #6600cc;
}
*/

/* Note: External CSS can't override inline CSS */
`
    },
    
    // CSS Colors
    cssColors: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Color Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .color-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .color-box {
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            border-radius: 5px;
            padding: 10px;
            text-align: center;
            font-weight: bold;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
        }
        
        /* Color examples */
        .color-name {
            background-color: red;
        }
        
        .color-hex {
            background-color: #00cc00;
        }
        
        .color-rgb {
            background-color: rgb(0, 0, 255);
        }
        
        .color-rgba {
            background-color: rgba(255, 0, 0, 0.5);
        }
        
        .color-hsl {
            background-color: hsl(270, 100%, 50%);
        }
        
        .color-hsla {
            background-color: hsla(180, 100%, 50%, 0.5);
        }
        
        /* Text color examples */
        .text-color-section {
            margin-top: 30px;
        }
        
        .text-example {
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
        
        .text-light-bg {
            background-color: #f0f0f0;
        }
        
        .text-dark-bg {
            background-color: #333;
        }
        
        .text-color-1 {
            color: #cc0000;
        }
        
        .text-color-2 {
            color: rgb(0, 128, 0);
        }
        
        .text-color-3 {
            color: hsl(240, 100%, 50%);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Color Examples</h1>
        
        <h2>Background Color Formats</h2>
        <div class="color-grid">
            <div class="color-box color-name">
                Color Name<br>red
            </div>
            <div class="color-box color-hex">
                Hex<br>#00cc00
            </div>
            <div class="color-box color-rgb">
                RGB<br>rgb(0, 0, 255)
            </div>
            <div class="color-box color-rgba">
                RGBA<br>rgba(255, 0, 0, 0.5)
            </div>
            <div class="color-box color-hsl">
                HSL<br>hsl(270, 100%, 50%)
            </div>
            <div class="color-box color-hsla">
                HSLA<br>hsla(180, 100%, 50%, 0.5)
            </div>
        </div>
        
        <div class="text-color-section">
            <h2>Text Color Examples</h2>
            <div class="text-example text-light-bg">
                <p class="text-color-1">This text uses hex color: #cc0000</p>
                <p class="text-color-2">This text uses RGB color: rgb(0, 128, 0)</p>
                <p class="text-color-3">This text uses HSL color: hsl(240, 100%, 50%)</p>
            </div>
            <div class="text-example text-dark-bg">
                <p style="color: white;">White text on dark background</p>
                <p style="color: #ffcc00;">Gold text (#ffcc00) on dark background</p>
                <p style="color: rgb(0, 255, 255);">Cyan text (rgb(0, 255, 255)) on dark background</p>
            </div>
        </div>
    </div>
</body>
</html>`,
        css: `/* Try modifying these color examples */

/* Background color examples */
.color-name {
    /* Try a different color name */
    /* background-color: purple; */
}

.color-hex {
    /* Try a different hex color */
    /* background-color: #ff9900; */
}

.color-rgb {
    /* Try different RGB values */
    /* background-color: rgb(128, 0, 128); */
}

.color-rgba {
    /* Try different RGBA values (last number controls transparency) */
    /* background-color: rgba(0, 128, 0, 0.7); */
}

.color-hsl {
    /* Try different HSL values (hue, saturation, lightness) */
    /* background-color: hsl(30, 100%, 50%); */
}

.color-hsla {
    /* Try different HSLA values */
    /* background-color: hsla(300, 100%, 50%, 0.5); */
}

/* Text color examples */
.text-color-1 {
    /* Try a different hex color */
    /* color: #0066cc; */
}

.text-color-2 {
    /* Try different RGB values */
    /* color: rgb(128, 0, 128); */
}

.text-color-3 {
    /* Try different HSL values */
    /* color: hsl(120, 100%, 40%); */
}

/* Try creating your own color examples */
/*
.my-color-example {
    background-color: your-color-here;
    color: contrasting-text-color;
    padding: 15px;
    border-radius: 5px;
    margin-top: 15px;
}
*/
`
    },
    
    // Original full example (keeping for reference)
    cssIntroduction: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Introduction</title>
    <style>
        /* Internal CSS */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .section {
            margin-bottom: 30px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        h2 {
            color: #0066cc;
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
        }
        
        .color-box {
            display: inline-block;
            width: 150px;
            height: 80px;
            margin: 10px;
            text-align: center;
            line-height: 80px;
            border-radius: 5px;
            font-weight: bold;
        }
        
        .color-name {
            background-color: red;
            color: white;
        }
        
        .color-hex {
            background-color: #00ff00;
            color: black;
        }
        
        .color-rgb {
            background-color: rgb(0, 0, 255);
            color: white;
        }
        
        .color-rgba {
            background-color: rgba(255, 0, 0, 0.5);
            color: white;
        }
        
        .styled-paragraph {
            color: #3498db;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
        }
        
        /* CSS for the inline example */
        .inline-example {
            margin-top: 20px;
        }
    </style>
    
    <!-- External CSS (commented out for this example) -->
    <!-- <link rel="stylesheet" href="styles.css"> -->
</head>
<body>
    <div class="container">
        <h1>CSS Introduction</h1>
        
        <div class="section">
            <h2>What is CSS?</h2>
            <p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. CSS describes how HTML elements should be displayed on screen, on paper, or in other media.</p>
            <p>CSS saves a lot of work by allowing you to control the layout of multiple web pages all at once.</p>
        </div>
        
        <div class="section">
            <h2>CSS Syntax</h2>
            <p>A CSS rule consists of a selector and a declaration block:</p>
            <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 5px; overflow: auto;">
selector {
    property: value;
    property: value;
    property: value;
}
            </pre>
            <ul>
                <li><strong>Selector</strong>: Points to the HTML element you want to style</li>
                <li><strong>Declaration Block</strong>: Contains one or more declarations separated by semicolons</li>
                <li><strong>Property</strong>: The style attribute you want to change</li>
                <li><strong>Value</strong>: The value of the property</li>
            </ul>
        </div>
        
        <div class="section">
            <h2>Basic CSS Example</h2>
            <p>Here's a simple CSS rule that styles all paragraphs:</p>
            <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 5px; overflow: auto;">
p {
    color: blue;
    font-size: 18px;
    font-weight: bold;
}
            </pre>
            <p>Result:</p>
            <p class="styled-paragraph">This paragraph is styled with CSS!</p>
        </div>
        
        <div class="section">
            <h2>Ways to Insert CSS</h2>
            
            <h3>1. External CSS</h3>
            <p>With an external style sheet, you can change the look of an entire website by changing just one file. Each HTML page must include a reference to the external style sheet file inside the &lt;link&gt; element, inside the &lt;head&gt; section.</p>
            <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 5px; overflow: auto;">
&lt;link rel="stylesheet" href="styles.css"&gt;
            </pre>
            
            <h3>2. Internal CSS</h3>
            <p>An internal style sheet may be used if one single HTML page has a unique style. The internal style is defined inside the &lt;style&gt; element, inside the &lt;head&gt; section.</p>
            <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 5px; overflow: auto;">
&lt;style&gt;
    body {
        background-color: lightblue;
    }
    h1 {
        color: navy;
        margin-left: 20px;
    }
&lt;/style&gt;
            </pre>
            
            <h3>3. Inline CSS</h3>
            <p>An inline style may be used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element.</p>
            <div class="inline-example">
                <h3 style="color: blue; text-align: center;">This heading has inline styling</h3>
                <p style="color: red; font-size: 16px;">This paragraph has inline styling with red text and a specific font size.</p>
            </div>
        </div>
        
        <div class="section">
            <h2>CSS Colors</h2>
            <p>Colors in CSS can be specified in several ways:</p>
            <div style="display: flex; flex-wrap: wrap; justify-content: center;">
                <div class="color-box color-name">Color Name: red</div>
                <div class="color-box color-hex">Hex: #00ff00</div>
                <div class="color-box color-rgb">RGB: rgb(0,0,255)</div>
                <div class="color-box color-rgba">RGBA: rgba(255,0,0,0.5)</div>
            </div>
        </div>
    </div>
    
    <!-- Try modifying the CSS above or add your own styles! -->
</body>
</html>`,
        css: `/* You can add additional CSS here */
/* For example, try creating a dark mode */

.dark-mode {
    background-color: #333;
    color: #fff;
}

.dark-mode .container {
    background-color: #444;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.dark-mode h1 {
    color: #fff;
    border-bottom-color: #555;
}

.dark-mode h2 {
    color: #66b3ff;
}

.dark-mode .section {
    border-color: #555;
}

.dark-mode pre {
    background-color: #555;
    color: #fff;
}

/* Try adding more styles or modifying existing ones */
.fancy-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.fancy-button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Add your own custom styles below */
`
    },
    cssSelectors: {
        elementSelector: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Element Selector Example</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Element Selector */
        p {
            color: blue;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Element Selector</h1>
        
        <p>This paragraph is selected by the element selector.</p>
        <p>All paragraphs on this page are styled using the element selector.</p>
        <p>Element selectors target HTML elements directly by their tag name.</p>
        
        <div>
            <p>Even paragraphs inside other elements are affected.</p>
        </div>
    </div>
</body>
</html>`,
            css: `/* Try modifying the element selector */

/* Change the styling for all paragraphs */
p {
    /* Uncomment and modify these properties */
    /* color: red; */
    /* font-size: 18px; */
    /* font-weight: bold; */
}

/* Try adding selectors for other elements */
h1 {
    /* Add your styles here */
}

div {
    /* Add your styles here */
}
`,
            js: ``
        },
        
        classSelector: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Class Selector Example</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Class Selector */
        .highlight {
            background-color: yellow;
            padding: 2px 5px;
        }
        
        .text-red {
            color: red;
        }
        
        .text-bold {
            font-weight: bold;
        }
        
        .box {
            border: 1px solid #ddd;
            padding: 10px;
            margin: 10px 0;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Class Selector</h1>
        
        <p>This is a normal paragraph.</p>
        <p>This paragraph has a <span class="highlight">highlighted</span> word.</p>
        
        <p class="text-red">This entire paragraph is red because of a class.</p>
        
        <p class="text-red text-bold">This paragraph has multiple classes applied.</p>
        
        <div class="box">
            <p>This paragraph is inside a div with a class of "box".</p>
            <p class="highlight">Classes can be applied to any element.</p>
        </div>
    </div>
</body>
</html>`,
            css: `/* Try modifying the class selectors */

/* Change the styling for highlighted text */
.highlight {
    /* Uncomment and modify these properties */
    /* background-color: lightblue; */
    /* color: white; */
    /* font-weight: bold; */
}

/* Try creating your own classes */
.fancy-text {
    /* Add your styles here */
}

/* You can apply the same class to different elements */
`,
            js: ``
        },
        
        idSelector: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>ID Selector Example</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* ID Selector */
        #unique-element {
            font-weight: bold;
            color: red;
        }
        
        #special-header {
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 4px;
            text-align: center;
        }
        
        #main-content {
            border-left: 3px solid #0066cc;
            padding-left: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="special-header">ID Selector</h1>
        
        <div id="main-content">
            <p>This is a normal paragraph.</p>
            <p id="unique-element">This paragraph has a unique ID and is styled differently.</p>
            <p>IDs should be unique - each ID should only appear once on a page.</p>
            <p>IDs have higher specificity than classes in CSS.</p>
        </div>
    </div>
</body>
</html>`,
            css: `/* Try modifying the ID selectors */

/* Change the styling for the unique element */
#unique-element {
    /* Uncomment and modify these properties */
    /* color: purple; */
    /* font-size: 20px; */
    /* text-decoration: underline; */
}

/* Try modifying other ID selectors */
#special-header {
    /* Add your styles here */
}

/* Create styles for a new ID */
#new-section {
    /* Add your styles here */
}
`,
            js: ``
        },
        
        attributeSelector: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Attribute Selector Example</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Attribute Selector */
        [data-type="special"] {
            border-left: 3px solid purple;
            padding-left: 10px;
        }
        
        [target="_blank"] {
            color: #0066cc;
            text-decoration: none;
            border-bottom: 1px dotted #0066cc;
        }
        
        [disabled] {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        /* Attribute selectors with wildcards */
        [class^="btn-"] {
            padding: 5px 10px;
            border-radius: 3px;
            display: inline-block;
            margin: 5px;
        }
        
        .btn-primary {
            background-color: #0066cc;
            color: white;
        }
        
        .btn-secondary {
            background-color: #6c757d;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Attribute Selector</h1>
        
        <p>This is a normal paragraph.</p>
        <p data-type="special">This paragraph has a data-type attribute and is styled differently.</p>
        
        <p>
            <a href="https://example.com" target="_blank">This link opens in a new tab</a>
        </p>
        
        <p>
            <button disabled>Disabled Button</button>
            <button>Normal Button</button>
        </p>
        
        <p>
            <span class="btn-primary">Primary Button</span>
            <span class="btn-secondary">Secondary Button</span>
        </p>
    </div>
</body>
</html>`,
            css: `/* Try modifying the attribute selectors */

/* Target elements with specific attributes */
[data-type="special"] {
    /* Uncomment and modify these properties */
    /* border-color: red; */
    /* background-color: #f9f9f9; */
}

/* Target links that open in new tabs */
[target="_blank"] {
    /* Add your styles here */
}

/* Target elements with class attributes that start with "btn-" */
[class^="btn-"] {
    /* Add your styles here */
}

/* Try creating your own attribute selectors */
/* For example: [href*="example"] would select all links containing "example" in the URL */
`,
            js: ``
        },
        
        descendantSelector: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Descendant Selector Example</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Descendant Selector */
        .parent .child {
            font-style: italic;
        }
        
        .box p {
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 4px;
        }
        
        .nested-example span {
            color: #0066cc;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Descendant Selector</h1>
        
        <div class="parent">
            <p>This is a direct child of the parent, but not a "child" class.</p>
            <div>
                <p class="child">This is a descendant (grandchild) of the parent with class "child".</p>
            </div>
        </div>
        
        <div class="box">
            <p>This paragraph is inside a div with class "box".</p>
            <p>All paragraphs inside the "box" class have the same styling.</p>
            <div>
                <p>Even deeply nested paragraphs are affected.</p>
            </div>
        </div>
        
        <div class="nested-example">
            <p>This paragraph contains a <span>styled span</span> element.</p>
            <p>This paragraph also has a <span>styled span</span> element.</p>
        </div>
    </div>
</body>
</html>`,
            css: `/* Try modifying the descendant selectors */

/* Change the styling for child elements inside parent */
.parent .child {
    /* Uncomment and modify these properties */
    /* color: red; */
    /* text-decoration: underline; */
}

/* Style paragraphs inside the box class */
.box p {
    /* Add your styles here */
}

/* Try creating your own descendant selectors */
.container h1 {
    /* Add your styles here */
}
`,
            js: ``
        },
        
        childSelector: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Child Selector Example</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Child Selector */
        .direct-parent > .direct-child {
            text-decoration: underline;
        }
        
        .list > li {
            color: #0066cc;
            margin-bottom: 5px;
        }
        
        .box > p {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Child Selector</h1>
        
        <div class="direct-parent">
            <p class="direct-child">This is a direct child and will be underlined.</p>
            <div>
                <p class="not-direct-child">This is not a direct child and won't be underlined.</p>
            </div>
        </div>
        
        <ul class="list">
            <li>This is a direct child of the list.</li>
            <li>This is also a direct child of the list.
                <ul>
                    <li>This is not a direct child of the main list.</li>
                </ul>
            </li>
            <li>Another direct child of the list.</li>
        </ul>
        
        <div class="box">
            <p>This is a direct child paragraph of the box.</p>
            <div>
                <p>This paragraph is not a direct child of the box.</p>
            </div>
        </div>
    </div>
</body>
</html>`,
            css: `/* Try modifying the child selectors */

/* Change the styling for direct children */
.direct-parent > .direct-child {
    /* Uncomment and modify these properties */
    /* color: red; */
    /* font-size: 18px; */
}

/* Style direct list items */
.list > li {
    /* Add your styles here */
}

/* Try creating your own child selectors */
.container > h1 {
    /* Add your styles here */
}
`,
            js: ``
        },
        
        adjacentSiblingSelector: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Adjacent Sibling Selector Example</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Adjacent Sibling Selector */
        .sibling + p {
            color: green;
        }
        
        h2 + p {
            font-weight: bold;
        }
        
        .box + .box {
            margin-top: 20px;
            border-top: 2px dashed #ddd;
            padding-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Adjacent Sibling Selector</h1>
        
        <div>
            <p class="sibling">This is the sibling paragraph.</p>
            <p>This paragraph comes immediately after the sibling and will be green.</p>
            <p>This paragraph is not adjacent to the sibling and won't be green.</p>
        </div>
        
        <h2>Section Title</h2>
        <p>This paragraph is immediately after an h2, so it will be bold.</p>
        <p>This paragraph is not immediately after an h2, so it won't be bold.</p>
        
        <div class="box">
            <p>First box content</p>
        </div>
        <div class="box">
            <p>Second box content - this box has a top margin and border</p>
        </div>
        <div class="box">
            <p>Third box content - this box also has a top margin and border</p>
        </div>
    </div>
</body>
</html>`,
            css: `/* Try modifying the adjacent sibling selectors */

/* Change the styling for paragraphs after .sibling */
.sibling + p {
    /* Uncomment and modify these properties */
    /* color: purple; */
    /* background-color: #f5f5f5; */
    /* padding: 5px; */
}

/* Style paragraphs after headings */
h2 + p {
    /* Add your styles here */
}

/* Try creating your own adjacent sibling selectors */
li + li {
    /* Add your styles here */
}
`,
            js: ``
        },
        
        pseudoClassSelector: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Pseudo-class Selector Example</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Pseudo-class Selectors */
        .hover-demo:hover {
            background-color: lightblue;
            cursor: pointer;
        }
        
        .first-child-container p:first-child {
            font-weight: bold;
        }
        
        a:link {
            color: #0066cc;
            text-decoration: none;
        }
        
        a:visited {
            color: #800080;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        a:active {
            color: red;
        }
        
        input:focus {
            outline: 2px solid #0066cc;
            background-color: #f0f8ff;
        }
        
        li:nth-child(odd) {
            background-color: #f5f5f5;
        }
        
        li:nth-child(even) {
            background-color: #e9e9e9;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Pseudo-class Selector</h1>
        
        <h2>Hover Effect</h2>
        <p class="hover-demo">Hover over me to see the effect!</p>
        
        <h2>First Child</h2>
        <div class="first-child-container">
            <p>This is the first child and will be bold.</p>
            <p>This is not the first child and won't be bold.</p>
        </div>
        
        <h2>Link States</h2>
        <p>
            <a href="https://example.com">This is a link - try hovering and clicking</a>
        </p>
        
        <h2>Form Element States</h2>
        <p>
            <input type="text" placeholder="Click me to see focus state">
        </p>
        
        <h2>Nth-child</h2>
        <ul>
            <li>First item (odd)</li>
            <li>Second item (even)</li>
            <li>Third item (odd)</li>
            <li>Fourth item (even)</li>
            <li>Fifth item (odd)</li>
        </ul>
    </div>
</body>
</html>`,
            css: `/* Try modifying the pseudo-class selectors */

/* Change the hover effect */
.hover-demo:hover {
    /* Uncomment and modify these properties */
    /* background-color: yellow; */
    /* color: black; */
    /* transform: scale(1.05); */
}

/* Style the first child */
.first-child-container p:first-child {
    /* Add your styles here */
}

/* Modify link states */
a:link {
    /* Normal link state */
}

a:visited {
    /* Visited link state */
}

a:hover {
    /* Hovered link state */
}

a:active {
    /* Active (being clicked) link state */
}

/* Try other pseudo-classes */
input:focus {
    /* Add your styles here */
}

li:nth-child(odd) {
    /* Add your styles here */
}
`,
            js: ``
        },
        
        pseudoElementSelector: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Pseudo-element Selector Example</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Pseudo-element Selectors */
        .first-line-demo::first-line {
            font-weight: bold;
            color: purple;
        }
        
        .first-letter-demo::first-letter {
            font-size: 24px;
            color: red;
        }
        
        .before-after-demo::before {
            content: "🔍 ";
        }
        
        .before-after-demo::after {
            content: " (Read more)";
            font-style: italic;
            color: #0066cc;
        }
        
        .selection-demo::selection {
            background-color: yellow;
            color: black;
        }
        
        .placeholder-demo::placeholder {
            color: #999;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Pseudo-element Selector</h1>
        
        <h2>First Line</h2>
        <p class="first-line-demo">
            This paragraph has its first line styled differently.
            This is the second line which will look normal.
        </p>
        
        <h2>First Letter</h2>
        <p class="first-letter-demo">
            This paragraph has its first letter styled differently.
        </p>
        
        <h2>Before and After</h2>
        <p class="before-after-demo">
            This paragraph has content added before and after it
        </p>
        
        <h2>Selection</h2>
        <p class="selection-demo">
            Try selecting this text to see a custom selection style.
        </p>
        
        <h2>Placeholder</h2>
        <p>
            <input type="text" class="placeholder-demo" placeholder="Custom placeholder styling">
        </p>
    </div>
</body>
</html>`,
            css: `/* Try modifying the pseudo-element selectors */

/* Change the first line styling */
.first-line-demo::first-line {
    /* Uncomment and modify these properties */
    /* color: blue; */
    /* text-transform: uppercase; */
}

/* Change the first letter styling */
.first-letter-demo::first-letter {
    /* Add your styles here */
}

/* Modify before and after content */
.before-after-demo::before {
    /* Change the content and styling */
    /* content: "→ "; */
}

.before-after-demo::after {
    /* Change the content and styling */
    /* content: " ←"; */
}

/* Try other pseudo-elements */
.selection-demo::selection {
    /* Add your styles here */
}
`,
            js: ``
        },
        
        selectorSpecificity: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Selector Specificity Example</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Specificity Examples */
        p {
            color: black; /* Element selector (specificity: 0,0,1) */
        }
        
        .text {
            color: blue; /* Class selector (specificity: 0,1,0) */
        }
        
        #unique {
            color: red; /* ID selector (specificity: 1,0,0) */
        }
        
        /* Multiple selectors with different specificity */
        p.text {
            color: green; /* Element + class (specificity: 0,1,1) */
        }
        
        .text.highlight {
            color: purple; /* Two classes (specificity: 0,2,0) */
        }
        
        /* This won't override the ID selector */
        .text.highlight.important {
            color: orange; /* Three classes (specificity: 0,3,0) */
        }
        
        /* Inline styles have even higher specificity */
    </style>
</head>
<body>
    <div class="container">
        <h1>Selector Specificity</h1>
        
        <h2>Specificity Hierarchy</h2>
        <ol>
            <li>Inline styles (highest specificity)</li>
            <li>ID selectors</li>
            <li>Class selectors, attribute selectors, and pseudo-classes</li>
            <li>Element selectors and pseudo-elements (lowest specificity)</li>
        </ol>
        
        <h2>Examples</h2>
        
        <p>This is a normal paragraph (element selector).</p>
        
        <p class="text">This paragraph has a class (class selector wins over element selector).</p>
        
        <p id="unique" class="text">This paragraph has both an ID and a class (ID selector wins).</p>
        
        <p class="text highlight">This paragraph has two classes (more specific than a single class).</p>
        
        <p id="unique" class="text highlight important">This paragraph has an ID and multiple classes (ID still wins).</p>
        
        <p style="color: teal;" id="unique" class="text highlight important">This paragraph has inline styles (inline styles win over everything).</p>
    </div>
</body>
</html>`,
            css: `/* Try experimenting with specificity */

/* Element selector (specificity: 0,0,1) */
p {
    /* color: black; */
}

/* Class selector (specificity: 0,1,0) */
.text {
    /* color: blue; */
}

/* ID selector (specificity: 1,0,0) */
#unique {
    /* color: red; */
}

/* Element + class (specificity: 0,1,1) */
p.text {
    /* color: green; */
}

/* Two classes (specificity: 0,2,0) */
.text.highlight {
    /* color: purple; */
}

/* Try creating selectors with different specificity levels */
/* For example: */
/* div p.text (specificity: 0,1,2) */
/* .container p.text (specificity: 0,2,1) */
`,
            js: ``
        }
    },
    classesIds: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Classes and IDs Practice</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        .section {
            margin-bottom: 30px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        h2 {
            color: #0066cc;
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
        }
        
        /* Class Examples */
        .text-red {
            color: red;
        }
        
        .text-blue {
            color: blue;
        }
        
        .bg-yellow {
            background-color: #ffffcc;
        }
        
        .bold {
            font-weight: bold;
        }
        
        .italic {
            font-style: italic;
        }
        
        .underline {
            text-decoration: underline;
        }
        
        .text-center {
            text-align: center;
        }
        
        .rounded {
            border-radius: 10px;
        }
        
        .shadow {
            box-shadow: 3px 3px 5px rgba(0,0,0,0.2);
        }
        
        .padding-large {
            padding: 20px;
        }
        
        /* ID Examples */
        #header {
            background-color: #333;
            color: white;
            padding: 10px;
            text-align: center;
        }
        
        #main-content {
            padding: 15px;
            background-color: #f0f0f0;
        }
        
        #sidebar {
            width: 30%;
            background-color: #e0e0e0;
            padding: 10px;
            float: right;
            margin-left: 15px;
        }
        
        #footer {
            background-color: #333;
            color: white;
            padding: 10px;
            text-align: center;
            clear: both;
            margin-top: 20px;
        }
        
        #special-note {
            border-left: 4px solid #ff9900;
            padding-left: 10px;
            background-color: #fff9e6;
        }
        
        /* Multiple classes example */
        .card {
            border: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 10px;
        }
        
        .primary {
            border-color: #007bff;
        }
        
        .success {
            border-color: #28a745;
        }
        
        .warning {
            border-color: #ffc107;
        }
        
        .danger {
            border-color: #dc3545;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Classes and IDs Examples</h1>
        
        <div class="section">
            <h2>Class Examples</h2>
            <p class="text-red">This text is red using the text-red class.</p>
            <p class="text-blue bg-yellow">This text is blue with a yellow background using multiple classes.</p>
            <p class="bold italic">This text is both bold and italic using multiple classes.</p>
            <p class="text-center underline">This text is centered and underlined.</p>
            
            <div class="rounded shadow padding-large bg-yellow">
                <p>This div has multiple classes applied: rounded corners, shadow, large padding, and yellow background.</p>
            </div>
        </div>
        
        <div class="section">
            <h2>ID Examples</h2>
            <div id="header">
                <h3>This is a header section</h3>
            </div>
            
            <div id="main-content">
                <p>This is the main content area of the page.</p>
                
                <div id="sidebar">
                    <h4>Sidebar</h4>
                    <p>This is a sidebar section.</p>
                </div>
                
                <p>More content in the main area.</p>
                <p id="special-note">This is a special note with unique styling.</p>
            </div>
            
            <div id="footer">
                <p>This is the footer section</p>
            </div>
        </div>
        
        <div class="section">
            <h2>Multiple Classes for Components</h2>
            <div class="card primary">
                <h3>Primary Card</h3>
                <p>This card uses multiple classes: 'card' and 'primary'</p>
            </div>
            
            <div class="card success">
                <h3>Success Card</h3>
                <p>This card uses multiple classes: 'card' and 'success'</p>
            </div>
            
            <div class="card warning">
                <h3>Warning Card</h3>
                <p>This card uses multiple classes: 'card' and 'warning'</p>
            </div>
            
            <div class="card danger">
                <h3>Danger Card</h3>
                <p>This card uses multiple classes: 'card' and 'danger'</p>
            </div>
        </div>
    </div>
    
    <!-- Try modifying the classes and IDs above or add your own! -->
</body>
</html>`,
        css: `/* You can add additional CSS here */
/* For example, try creating a BEM-style naming convention */

/* Block component */
.user-profile {
    border: 1px solid #ddd;
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;
}

/* Element that depends upon the block */
.user-profile__name {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
}

.user-profile__image {
    border-radius: 50%;
    border: 3px solid #eee;
}

.user-profile__details {
    margin-top: 15px;
    padding: 10px;
    background-color: #f9f9f9;
}

/* Modifier that changes the style of the block */
.user-profile--premium {
    border-color: gold;
    background-color: #fffdf0;
}

.user-profile--admin {
    border-color: #007bff;
    background-color: #f0f8ff;
}

/* Try creating your own class and ID styles below */
`
    },
    divSpan: {
        ...divSpanContent,
        html: `<!DOCTYPE html>
<html>
<head>
    <title>Div and Span Practice</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        .section {
            margin-bottom: 30px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        h2 {
            color: #0066cc;
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
        }
        
        /* Div Examples */
        .box {
            background-color: #e0f7fa;
            border: 2px solid #00acc1;
            padding: 10px;
            margin-bottom: 10px;
        }
        
        .container-flex {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }
        
        .column {
            background-color: #e8f5e9;
            border: 2px solid #4caf50;
            padding: 10px;
            width: 30%;
        }
        
        .nested-example {
            border: 1px solid #ddd;
            padding: 10px;
            margin-top: 15px;
        }
        
        .nested-child {
            background-color: #f5f5f5;
            padding: 10px;
            margin: 5px;
        }
        
        /* Span Examples */
        .highlight {
            background-color: yellow;
            padding: 2px 5px;
        }
        
        .bold {
            font-weight: bold;
        }
        
        .italic {
            font-style: italic;
        }
        
        .red-text {
            color: red;
        }
        
        .blue-text {
            color: blue;
        }
        
        .underline {
            text-decoration: underline;
        }
        
        /* Layout Examples */
        .header {
            background-color: #333;
            color: white;
            padding: 15px;
            text-align: center;
        }
        
        .main-content {
            display: flex;
            margin: 15px 0;
        }
        
        .content {
            flex: 70%;
            background-color: #f9f9f9;
            padding: 15px;
        }
        
        .sidebar {
            flex: 30%;
            background-color: #e0e0e0;
            padding: 15px;
        }
        
        .footer {
            background-color: #333;
            color: white;
            padding: 15px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Div and Span Elements</h1>
        
        <div class="section">
            <h2>Div Examples</h2>
            
            <div class="box">
                <p>This is a simple div with a background color, border, and padding.</p>
            </div>
            
            <div class="box">
                <h3>Nested Divs</h3>
                <p>Divs can be nested inside other divs to create complex layouts.</p>
                <div class="container-flex">
                    <div class="column">Column 1</div>
                    <div class="column">Column 2</div>
                    <div class="column">Column 3</div>
                </div>
            </div>
            
            <div class="nested-example">
                <h3>More Nested Divs</h3>
                <p>You can nest divs as deeply as needed:</p>
                <div class="nested-child">
                    <p>Level 1</p>
                    <div class="nested-child">
                        <p>Level 2</p>
                        <div class="nested-child">
                            <p>Level 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h2>Span Examples</h2>
            
            <p>This paragraph contains <span class="highlight">highlighted text</span> using a span element.</p>
            
            <p>You can use spans to apply <span class="bold">bold</span>, <span class="italic">italic</span>, 
            <span class="underline">underlined</span>, <span class="red-text">red</span>, or 
            <span class="blue-text">blue</span> styling to specific parts of text.</p>
            
            <p>Spans can be <span class="bold"><span class="red-text">nested</span> inside other spans</span> for combined effects.</p>
            
            <p>Spans are <span class="highlight">inline elements</span>, which means they don't create new lines and only take up as much space as needed.</p>
        </div>
        
        <div class="section">
            <h2>Page Layout Example</h2>
            <p>Using divs to create a basic page layout:</p>
            
            <div class="header">
                <h3>Header</h3>
                <p>This is the page header created with a div</p>
            </div>
            
            <div class="main-content">
                <div class="content">
                    <h3>Main Content</h3>
                    <p>This is the main content area of the page.</p>
                    <p>Divs are perfect for creating layout structures like this.</p>
                    <p>This paragraph contains <span class="highlight">highlighted text</span> using a span.</p>
                </div>
                
                <div class="sidebar">
                    <h3>Sidebar</h3>
                    <p>This is a sidebar section.</p>
                    <p>It's created using a div element.</p>
                </div>
            </div>
            
            <div class="footer">
                <p>This is the footer section created with a div</p>
            </div>
        </div>
    </div>
    
    <!-- Try modifying the divs and spans above or add your own! -->
</body>
</html>`,
        css: `/* You can add additional CSS here */
/* For example, try creating different layouts or styling */

/* Example: Create a card layout */
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card-header {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.card-body {
    padding: 10px 0;
}

.card-footer {
    border-top: 1px solid #eee;
    padding-top: 10px;
    margin-top: 10px;
    text-align: right;
}

/* Example: Create a grid layout */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 15px 0;
}

.grid-item {
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
}

/* Example: Style for inline elements */
.badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    background-color: #007bff;
    color: white;
}

/* Try adding your own styles below */
`
    },
    boxModel: {
        boxModelIntro: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Box Model Introduction</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Box Model Visualization */
        .box-model-demo {
            width: 300px;
            margin: 0 auto;
            text-align: center;
        }
        
        .margin-box {
            background-color: #ffcccc;
            padding: 20px;
            margin-bottom: 20px;
        }
        
        .border-box {
            background-color: #ffcc99;
            padding: 20px;
        }
        
        .padding-box {
            background-color: #ffffcc;
            padding: 20px;
        }
        
        .content-box {
            background-color: #ccffcc;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Box Model</h1>
        
        <p>The CSS box model is a fundamental concept that describes how elements are rendered on a web page. Every HTML element is treated as a box with the following properties:</p>
        <ul>
            <li><strong>Content:</strong> The actual content of the element (text, images, etc.)</li>
            <li><strong>Padding:</strong> The space between the content and the border</li>
            <li><strong>Border:</strong> The line that surrounds the padding and content</li>
            <li><strong>Margin:</strong> The space outside the border, separating the element from other elements</li>
        </ul>
        
        <div class="box-model-demo">
            <div class="margin-box">
                Margin
                <div class="border-box">
                    Border
                    <div class="padding-box">
                        Padding
                        <div class="content-box">
                            Content
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Try modifying the box model visualization above! -->
    </div>
</body>
</html>`,
            css: `/* You can add additional CSS here */
/* Try modifying the box model visualization */

.box-model-demo {
    /* Try changing the width */
}

.margin-box {
    /* Try changing the background color or padding */
}

.border-box {
    /* Try adding a border */
    /* border: 2px solid black; */
}

.padding-box {
    /* Try changing the padding */
}

.content-box {
    /* Try adding some content styling */
}

/* Create your own box model example below */
.my-box {
    /* Add your styles here */
}
`
        },

        marginExamples: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Margin Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Margin Examples */
        .margin-all {
            background-color: #e0e0e0;
            margin: 20px;
            padding: 10px;
            border: 1px solid #999;
        }
        
        .margin-individual {
            background-color: #e0e0e0;
            margin-top: 10px;
            margin-right: 20px;
            margin-bottom: 30px;
            margin-left: 40px;
            padding: 10px;
            border: 1px solid #999;
        }
        
        .margin-shorthand {
            background-color: #e0e0e0;
            /* top, right, bottom, left */
            margin: 10px 20px 30px 40px;
            padding: 10px;
            border: 1px solid #999;
        }
        
        .margin-auto {
            background-color: #e0e0e0;
            width: 300px;
            margin: 0 auto; /* Center horizontally */
            padding: 10px;
            border: 1px solid #999;
        }
        
        .reference-line {
            height: 30px;
            background-color: #f0f0f0;
            margin-bottom: 10px;
        }
        
        .margin-negative {
            background-color: #e0e0e0;
            width: 300px;
            margin-top: -20px;
            padding: 10px;
            border: 1px solid #999;
        }
        
        /* Margin Collapse Example */
        .margin-collapse-container {
            background-color: #f0f0f0; 
            padding: 1px;
            margin-top: 20px;
        }
        
        .box-1 {
            background-color: #ffcccc; 
            margin-bottom: 30px; 
            padding: 10px;
        }
        
        .box-2 {
            background-color: #ccccff; 
            margin-top: 20px; 
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Margin Examples</h1>
        
        <h2>Margin on All Sides</h2>
        <div class="margin-all">
            <p>This box has a margin of 20px on all sides.</p>
        </div>
        
        <h2>Individual Margins</h2>
        <div class="margin-individual">
            <p>This box has individual margins: top 10px, right 20px, bottom 30px, left 40px.</p>
        </div>
        
        <h2>Margin Shorthand</h2>
        <div class="margin-shorthand">
            <p>This box uses margin shorthand: 10px 20px 30px 40px (top, right, bottom, left).</p>
        </div>
        
        <h2>Auto Margins for Centering</h2>
        <div class="margin-auto">
            <p>This box is centered horizontally using margin: 0 auto.</p>
        </div>
        
        <h2>Negative Margins</h2>
        <div class="reference-line">
            <p>Reference line</p>
        </div>
        
        <div class="margin-negative">
            <p>This box has a negative top margin of -20px, pulling it upward.</p>
        </div>
        
        <h2>Margin Collapse</h2>
        <p>When two vertical margins meet, they collapse into a single margin. The height of the collapsed margin is equal to the larger of the two margins.</p>
        
        <div class="margin-collapse-container">
            <div class="box-1">
                <p>This element has a margin-bottom of 30px.</p>
            </div>
            
            <div class="box-2">
                <p>This element has a margin-top of 20px. The total space between these elements is 30px (not 50px) due to margin collapse.</p>
            </div>
        </div>
        
        <!-- Try modifying the margin examples above! -->
    </div>
</body>
</html>`,
            css: `/* You can add additional CSS here */
/* Try modifying the margin examples */

/* Create a new example with different margin values */
.my-margin-example {
    background-color: #e8f5e9;
    border: 1px solid #4caf50;
    padding: 10px;
    /* Add your margin values here */
}

/* Try creating a horizontally and vertically centered element */
.centered-box {
    width: 200px;
    height: 100px;
    background-color: #bbdefb;
    border: 1px solid #2196f3;
    /* Add your centering styles here */
}

/* Try creating an overlapping effect with negative margins */
.overlap-container {
    position: relative;
}

.base-element {
    background-color: #ffecb3;
    border: 1px solid #ffc107;
    padding: 20px;
}

.overlapping-element {
    background-color: #e1bee7;
    border: 1px solid #9c27b0;
    padding: 15px;
    /* Add negative margin to create overlap */
}
`
        },

        paddingExamples: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Padding Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Padding Examples */
        .padding-all {
            background-color: #d1e0ff;
            padding: 20px;
            border: 1px solid #6699cc;
            margin-bottom: 20px;
        }
        
        .padding-individual {
            background-color: #d1e0ff;
            padding-top: 10px;
            padding-right: 20px;
            padding-bottom: 30px;
            padding-left: 40px;
            border: 1px solid #6699cc;
            margin-bottom: 20px;
        }
        
        .padding-shorthand {
            background-color: #d1e0ff;
            /* top, right, bottom, left */
            padding: 10px 20px 30px 40px;
            border: 1px solid #6699cc;
            margin-bottom: 20px;
        }
        
        .padding-zero {
            background-color: #d1e0ff;
            padding: 0;
            border: 1px solid #6699cc;
            margin-bottom: 20px;
        }
        
        .padding-percentage {
            background-color: #d1e0ff;
            padding: 5%;
            border: 1px solid #6699cc;
            margin-bottom: 20px;
        }
        
        /* Padding vs Margin Comparison */
        .comparison-container {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
        }
        
        .padding-box {
            width: 45%;
            background-color: #d1e0ff;
            border: 1px solid #6699cc;
            padding: 20px;
        }
        
        .margin-box {
            width: 45%;
            background-color: #ffe6cc;
            border: 1px solid #ff9933;
            margin: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Padding Examples</h1>
        
        <h2>Padding on All Sides</h2>
        <div class="padding-all">
            <p>This box has padding of 20px on all sides.</p>
        </div>
        
        <h2>Individual Padding</h2>
        <div class="padding-individual">
            <p>This box has individual padding: top 10px, right 20px, bottom 30px, left 40px.</p>
        </div>
        
        <h2>Padding Shorthand</h2>
        <div class="padding-shorthand">
            <p>This box uses padding shorthand: 10px 20px 30px 40px (top, right, bottom, left).</p>
        </div>
        
        <h2>No Padding</h2>
        <div class="padding-zero">
            <p>This box has no padding (padding: 0). Notice how the content touches the border.</p>
        </div>
        
        <h2>Percentage Padding</h2>
        <div class="padding-percentage">
            <p>This box has padding set to 5%. Percentage padding is relative to the width of the containing block.</p>
        </div>
        
        <h2>Padding vs Margin Comparison</h2>
        <div class="comparison-container">
            <div class="padding-box">
                <p>This box has <strong>padding</strong> of 20px. Padding adds space <em>inside</em> the border.</p>
            </div>
            
            <div class="margin-box">
                <p>This box has <strong>margin</strong> of 20px. Margin adds space <em>outside</em> the border.</p>
            </div>
        </div>
        
        <p><strong>Note:</strong> Unlike margins, padding values do not collapse.</p>
        
        <!-- Try modifying the padding examples above! -->
    </div>
</body>
</html>`,
            css: `/* You can add additional CSS here */
/* Try modifying the padding examples */

/* Create a new example with different padding values */
.my-padding-example {
    background-color: #e8f5e9;
    border: 1px solid #4caf50;
    /* Add your padding values here */
}

/* Try creating a card with different padding in different areas */
.card {
    width: 300px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 20px auto;
    overflow: hidden;
}

.card-header {
    background-color: #f5f5f5;
    /* Add padding for the header */
}

.card-body {
    /* Add padding for the body */
}

.card-footer {
    background-color: #f5f5f5;
    /* Add padding for the footer */
}

/* Try creating a button with padding that changes on hover */
.button {
    display: inline-block;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    /* Add padding */
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #0b7dda;
    /* Change padding on hover */
}
`
        },

        borderExamples: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Border Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Border Examples */
        .border-all {
            background-color: #ffe6cc;
            padding: 15px;
            border: 3px solid #ff9933;
            margin-bottom: 20px;
        }
        
        .border-width {
            background-color: #ffe6cc;
            padding: 15px;
            border-style: solid;
            border-color: #ff9933;
            border-width: 1px 2px 3px 4px; /* top, right, bottom, left */
            margin-bottom: 20px;
        }
        
        .border-style {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .border-style-box {
            background-color: #ffe6cc;
            padding: 10px;
            width: 120px;
            text-align: center;
        }
        
        .border-solid {
            border: 2px solid #ff9933;
        }
        
        .border-dotted {
            border: 2px dotted #ff9933;
        }
        
        .border-dashed {
            border: 2px dashed #ff9933;
        }
        
        .border-double {
            border: 4px double #ff9933;
        }
        
        .border-groove {
            border: 5px groove #ff9933;
        }
        
        .border-ridge {
            border: 5px ridge #ff9933;
        }
        
        .border-inset {
            border: 5px inset #ff9933;
        }
        
        .border-outset {
            border: 5px outset #ff9933;
        }
        
        .border-color {
            background-color: #ffe6cc;
            padding: 15px;
            border-style: solid;
            border-width: 3px;
            border-color: red green blue yellow; /* top, right, bottom, left */
            margin-bottom: 20px;
        }
        
        .border-individual {
            background-color: #ffe6cc;
            padding: 15px;
            border-top: 3px dashed #ff9933;
            border-right: 3px dotted #ff9933;
            border-bottom: 3px double #ff9933;
            border-left: 3px solid #ff9933;
            margin-bottom: 20px;
        }
        
        .border-radius {
            background-color: #ffe6cc;
            padding: 15px;
            border: 3px solid #ff9933;
            border-radius: 15px;
            margin-bottom: 20px;
        }
        
        .border-radius-individual {
            background-color: #ffe6cc;
            padding: 15px;
            border: 3px solid #ff9933;
            border-radius: 5px 15px 25px 35px; /* top-left, top-right, bottom-right, bottom-left */
            margin-bottom: 20px;
        }
        
        .border-circle {
            background-color: #ffe6cc;
            padding: 15px;
            border: 3px solid #ff9933;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Border Examples</h1>
        
        <h2>Basic Border</h2>
        <div class="border-all">
            <p>This box has a 3px solid border on all sides.</p>
        </div>
        
        <h2>Border Width</h2>
        <div class="border-width">
            <p>This box has different border widths: top 1px, right 2px, bottom 3px, left 4px.</p>
        </div>
        
        <h2>Border Styles</h2>
        <div class="border-style">
            <div class="border-style-box border-solid">solid</div>
            <div class="border-style-box border-dotted">dotted</div>
            <div class="border-style-box border-dashed">dashed</div>
            <div class="border-style-box border-double">double</div>
            <div class="border-style-box border-groove">groove</div>
            <div class="border-style-box border-ridge">ridge</div>
            <div class="border-style-box border-inset">inset</div>
            <div class="border-style-box border-outset">outset</div>
        </div>
        
        <h2>Border Color</h2>
        <div class="border-color">
            <p>This box has different border colors: top red, right green, bottom blue, left yellow.</p>
        </div>
        
        <h2>Individual Borders</h2>
        <div class="border-individual">
            <p>This box has different border styles on each side: dashed (top), dotted (right), double (bottom), and solid (left).</p>
        </div>
        
        <h2>Border Radius</h2>
        <div class="border-radius">
            <p>This box has rounded corners with a border-radius of 15px.</p>
        </div>
        
        <h2>Individual Border Radius</h2>
        <div class="border-radius-individual">
            <p>This box has different border-radius values: top-left 5px, top-right 15px, bottom-right 25px, bottom-left 35px.</p>
        </div>
        
        <h2>Circular Border</h2>
        <div class="border-circle">
            <p>Circle with border-radius: 50%</p>
        </div>
        
        <!-- Try modifying the border examples above! -->
    </div>
</body>
</html>`,
            css: `/* You can add additional CSS here */
/* Try modifying the border examples */

/* Create a new example with a gradient border */
.gradient-border {
    background-color: white;
    padding: 20px;
    position: relative;
    margin: 20px 0;
    
    /* Method 1: Using border-image */
    /* border: 5px solid;
    border-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    border-image-slice: 1; */
    
    /* Method 2: Using pseudo-element */
    /* Add your gradient border styles here */
}

/* Try creating a button with a border that changes on hover */
.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: white;
    color: #333;
    border: 2px solid #2196f3;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button:hover {
    /* Change the border on hover */
}

/* Try creating a custom shape using border-radius */
.custom-shape {
    width: 200px;
    height: 100px;
    background-color: #e1bee7;
    border: 2px solid #9c27b0;
    /* Add your border-radius values to create a custom shape */
}
`
        },

        boxSizingExamples: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Box Sizing Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Box-sizing Examples */
        .box-sizing-demo {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        .box-container {
            width: 45%;
            min-width: 300px;
        }
        
        .content-box-sizing {
            box-sizing: content-box;
            width: 200px;
            padding: 20px;
            border: 5px solid #999;
            background-color: #e0e0e0;
            margin-bottom: 10px;
        }
        
        .border-box-sizing {
            box-sizing: border-box;
            width: 200px;
            padding: 20px;
            border: 5px solid #999;
            background-color: #d1e0ff;
            margin-bottom: 10px;
        }
        
        .highlight {
            background-color: #ffffcc;
            padding: 5px;
            border-radius: 3px;
        }
        
        .box-sizing-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        .box-sizing-table th, .box-sizing-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        
        .box-sizing-table th {
            background-color: #f2f2f2;
        }
        
        .box-sizing-table tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        
        .box-sizing-reset {
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            font-family: monospace;
            white-space: pre;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Box Sizing</h1>
        
        <p>The <code>box-sizing</code> property defines how the width and height of an element are calculated:</p>
        <ul>
            <li><strong>content-box</strong> (default): Width and height only apply to the content of the element</li>
            <li><strong>border-box</strong>: Width and height include padding and border (but not margin)</li>
        </ul>
        
        <h2>Box Sizing Comparison</h2>
        <div class="box-sizing-demo">
            <div class="box-container">
                <h3>content-box (default)</h3>
                <div class="content-box-sizing">
                    <p>Width: <span class="highlight">200px</span></p>
                    <p>Total width: 200px + 40px padding + 10px border = <span class="highlight">250px</span></p>
                </div>
                <p>With <code>box-sizing: content-box</code>, the width you set applies only to the content area. Padding and border are added to the total width.</p>
            </div>
            
            <div class="box-container">
                <h3>border-box</h3>
                <div class="border-box-sizing">
                    <p>Width: <span class="highlight">200px</span></p>
                    <p>Total width: <span class="highlight">200px</span> (includes padding and border)</p>
                </div>
                <p>With <code>box-sizing: border-box</code>, the width you set includes content, padding, and border. This makes sizing more intuitive.</p>
            </div>
        </div>
        
        <h2>When to Use Each Box Sizing Model</h2>
        <table class="box-sizing-table">
            <tr>
                <th>Box Sizing</th>
                <th>Best Used For</th>
                <th>Advantages</th>
            </tr>
            <tr>
                <td>content-box</td>
                <td>When you need precise control over the content area size</td>
                <td>Default behavior, no additional CSS needed</td>
            </tr>
            <tr>
                <td>border-box</td>
                <td>Most modern layouts, responsive designs, grid systems</td>
                <td>More intuitive sizing, easier to calculate widths, better for responsive design</td>
            </tr>
        </table>
        
        <h2>Global Box Sizing Reset</h2>
        <p>Many developers prefer to use <code>box-sizing: border-box;</code> for all elements as it makes sizing more intuitive. Here's a common CSS reset:</p>
        
        <div class="box-sizing-reset">
html {
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}
        </div>
        
        <p>This sets all elements to use <code>border-box</code> sizing, making it easier to create predictable layouts.</p>
        
        <!-- Try modifying the box-sizing examples above! -->
    </div>
</body>
</html>`,
            css: `/* You can add additional CSS here */
/* Try modifying the box-sizing examples */

/* Create a comparison of the same layout with different box-sizing */
.layout-comparison {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0;
}

.layout-container {
    width: 45%;
    min-width: 300px;
    border: 1px solid #ddd;
    padding: 10px;
}

.content-box-layout {
    box-sizing: content-box;
}

.border-box-layout {
    box-sizing: border-box;
}

.layout-row {
    display: flex;
    margin-bottom: 10px;
}

.layout-column {
    width: 50%;
    padding: 10px;
    border: 1px solid #999;
    background-color: #f0f0f0;
}

/* Try creating a responsive grid with border-box */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 20px 0;
}

.grid-item {
    background-color: #bbdefb;
    border: 2px solid #2196f3;
    padding: 20px;
    box-sizing: border-box;
}

/* Try creating a form with border-box */
.form-container {
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
}

.form-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}
`
        },

        interactiveBoxModel: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Interactive CSS Box Model</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        /* Interactive Box Model Examples */
        .interactive-box {
            width: 200px;
            height: 100px;
            background-color: #f0f0f0;
            border: 2px solid #999;
            margin: 20px auto;
            padding: 20px;
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .interactive-box:hover {
            padding: 30px;
            margin: 30px auto;
            border-width: 4px;
            background-color: #e0e0ff;
        }
        
        .controls {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
            justify-content: center;
        }
        
        .control-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 15px;
        }
        
        label {
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input[type="range"] {
            width: 150px;
        }
        
        .value-display {
            font-size: 12px;
            color: #666;
            margin-top: 5px;
        }
        
        .box-model-display {
            display: flex;
            justify-content: center;
            margin: 30px 0;
        }
        
        .box-model-container {
            position: relative;
            width: 400px;
            height: 300px;
        }
        
        .box-layer {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .margin-layer {
            background-color: rgba(255, 204, 204, 0.7);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        
        .border-layer {
            background-color: rgba(255, 204, 153, 0.7);
        }
        
        .padding-layer {
            background-color: rgba(255, 255, 204, 0.7);
        }
        
        .content-layer {
            background-color: rgba(204, 255, 204, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Interactive CSS Box Model</h1>
        
        <h2>Hover Example</h2>
        <p>Hover over the box below to see how changing padding, margin, and border affects the element:</p>
        
        <div class="interactive-box">
            <p>Hover over me!</p>
            <p>Watch how the box model properties change</p>
        </div>
        
        <h2>Adjustable Box Model</h2>
        <p>Use the controls below to adjust the box model properties and see the changes in real-time:</p>
        
        <div class="controls">
            <div class="control-group">
                <label for="content-width">Content Width</label>
                <input type="range" id="content-width" min="50" max="200" value="100">
                <div class="value-display" id="content-width-value">100px</div>
            </div>
            
            <div class="control-group">
                <label for="content-height">Content Height</label>
                <input type="range" id="content-height" min="50" max="150" value="80">
                <div class="value-display" id="content-height-value">80px</div>
            </div>
            
            <div class="control-group">
                <label for="padding">Padding</label>
                <input type="range" id="padding" min="0" max="50" value="20">
                <div class="value-display" id="padding-value">20px</div>
            </div>
            
            <div class="control-group">
                <label for="border-width">Border Width</label>
                <input type="range" id="border-width" min="0" max="20" value="2">
                <div class="value-display" id="border-width-value">2px</div>
            </div>
            
            <div class="control-group">
                <label for="margin">Margin</label>
                <input type="range" id="margin" min="0" max="50" value="20">
                <div class="value-display" id="margin-value">20px</div>
            </div>
        </div>
        
        <div class="box-model-display">
            <div class="box-model-container">
                <div class="box-layer margin-layer" id="margin-layer">
                    Margin
                    <div class="box-layer border-layer" id="border-layer">
                        Border
                        <div class="box-layer padding-layer" id="padding-layer">
                            Padding
                            <div class="box-layer content-layer" id="content-layer">
                                Content
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Try modifying the interactive examples above! -->
    </div>
    
    <script>
        // JavaScript for the interactive box model
        document.addEventListener('DOMContentLoaded', function() {
            const contentWidth = document.getElementById('content-width');
            const contentHeight = document.getElementById('content-height');
            const padding = document.getElementById('padding');
            const borderWidth = document.getElementById('border-width');
            const margin = document.getElementById('margin');
            
            const contentWidthValue = document.getElementById('content-width-value');
            const contentHeightValue = document.getElementById('content-height-value');
            const paddingValue = document.getElementById('padding-value');
            const borderWidthValue = document.getElementById('border-width-value');
            const marginValue = document.getElementById('margin-value');
            
            const contentLayer = document.getElementById('content-layer');
            const paddingLayer = document.getElementById('padding-layer');
            const borderLayer = document.getElementById('border-layer');
            const marginLayer = document.getElementById('margin-layer');
            
            function updateBoxModel() {
                const cWidth = contentWidth.value;
                const cHeight = contentHeight.value;
                const p = padding.value;
                const b = borderWidth.value;
                const m = margin.value;
                
                contentWidthValue.textContent = cWidth + 'px';
                contentHeightValue.textContent = cHeight + 'px';
                paddingValue.textContent = p + 'px';
                borderWidthValue.textContent = b + 'px';
                marginValue.textContent = m + 'px';
                
                // Update the visual box model
                contentLayer.style.width = cWidth + 'px';
                contentLayer.style.height = cHeight + 'px';
                
                paddingLayer.style.width = (parseInt(cWidth) + parseInt(p) * 2) + 'px';
                paddingLayer.style.height = (parseInt(cHeight) + parseInt(p) * 2) + 'px';
                
                borderLayer.style.width = (parseInt(cWidth) + parseInt(p) * 2 + parseInt(b) * 2) + 'px';
                borderLayer.style.height = (parseInt(cHeight) + parseInt(p) * 2 + parseInt(b) * 2) + 'px';
                
                // Calculate total width and height for display
                const totalWidth = parseInt(cWidth) + parseInt(p) * 2 + parseInt(b) * 2;
                const totalHeight = parseInt(cHeight) + parseInt(p) * 2 + parseInt(b) * 2;
                
                // Center the box model in the container
                const containerWidth = 400;
                const containerHeight = 300;
                
                const leftMargin = (containerWidth - totalWidth - parseInt(m) * 2) / 2;
                const topMargin = (containerHeight - totalHeight - parseInt(m) * 2) / 2;
                
                marginLayer.style.width = (totalWidth + parseInt(m) * 2) + 'px';
                marginLayer.style.height = (totalHeight + parseInt(m) * 2) + 'px';
                marginLayer.style.left = leftMargin + 'px';
                marginLayer.style.top = topMargin + 'px';
            }
            
            // Add event listeners to the range inputs
            contentWidth.addEventListener('input', updateBoxModel);
            contentHeight.addEventListener('input', updateBoxModel);
            padding.addEventListener('input', updateBoxModel);
            borderWidth.addEventListener('input', updateBoxModel);
            margin.addEventListener('input', updateBoxModel);
            
            // Initialize the box model
            updateBoxModel();
        });
    </script>
</body>
</html>`,
            css: `/* You can add additional CSS here */
/* Try modifying the interactive box model */

/* Add a custom theme to the interactive box model */
.custom-theme .interactive-box {
    background-color: #e8f5e9;
    border-color: #4caf50;
    color: #2e7d32;
}

.custom-theme .interactive-box:hover {
    background-color: #c8e6c9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Create a custom interactive element */
.custom-interactive-element {
    width: 150px;
    height: 150px;
    background-color: #bbdefb;
    border: 2px solid #2196f3;
    border-radius: 10px;
    margin: 20px auto;
    padding: 15px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.custom-interactive-element:hover {
    /* Add your hover effects here */
}

/* Add animation to the box model display */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.animated-layer {
    animation: pulse 2s infinite;
}
`,
            js: `// You can add additional JavaScript here
// For example, try adding more interactivity to the box model

// Function to toggle a custom theme
function toggleCustomTheme() {
    const container = document.querySelector('.container');
    container.classList.toggle('custom-theme');
}

// Function to add animation to a specific layer
function animateLayer(layerId) {
    const layer = document.getElementById(layerId);
    layer.classList.toggle('animated-layer');
}

// Function to create a custom interactive element
function createCustomElement() {
    const customElement = document.createElement('div');
    customElement.className = 'custom-interactive-element';
    customElement.innerHTML = '<p>Click me!</p>';
    
    customElement.addEventListener('click', function() {
        // Add your click behavior here
        this.style.backgroundColor = getRandomColor();
    });
    
    // Add the element to the page
    const container = document.querySelector('.container');
    container.appendChild(customElement);
}

// Helper function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add your custom code below
`
        }
    }
}
    ;