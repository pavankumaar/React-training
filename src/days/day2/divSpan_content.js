export const divSpanContent = {
    divElement: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>Div Element Examples</title>
    <style>
        /* Basic styling */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        h1, h2 {
            color: #333;
            text-align: center;
        }
        
        /* Basic div examples */
        .simple-div {
            background-color: #e6f7ff;
            border: 2px solid #1890ff;
            padding: 15px;
            margin-bottom: 20px;
        }
        
        /* Div container with multiple divs */
        .div-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
        }
        
        .div-box {
            background-color: #91d5ff;
            padding: 20px;
            border-radius: 5px;
            width: 150px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        /* Page layout with divs */
        .page-layout {
            margin: 30px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
        }
        
        .header {
            background-color: #1890ff;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .content-area {
            display: flex;
            flex-wrap: wrap;
        }
        
        .sidebar {
            background-color: #e6f7ff;
            padding: 20px;
            flex: 1;
            min-width: 200px;
        }
        
        .main-content {
            background-color: #f0f5ff;
            padding: 20px;
            flex: 3;
            min-width: 300px;
        }
        
        .footer {
            background-color: #002766;
            color: white;
            padding: 15px;
            text-align: center;
        }
        
        /* Grid layout with divs */
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin: 20px 0;
        }
        
        .grid-item {
            background-color: #bae7ff;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        /* Card layout with divs */
        .cards-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin: 20px 0;
        }
        
        .card {
            width: 250px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .card-header {
            background-color: #4a90e2;
            color: white;
            padding: 15px;
        }
        
        .card-body {
            padding: 15px;
        }
        
        .card-footer {
            background-color: #f5f5f5;
            padding: 10px 15px;
            border-top: 1px solid #ddd;
            text-align: right;
        }
        
        .btn {
            display: inline-block;
            background-color: #1890ff;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <h1>Div Element Examples</h1>
    <p>Try modifying these examples to see how divs work!</p>
    
    <!-- Basic div example -->
    <h2>Basic Div</h2>
    <div class="simple-div">
        This is a simple div with background color, border, and padding.
    </div>
    
    <!-- Multiple divs in a container -->
    <h2>Multiple Divs</h2>
    <div class="div-container">
        <div class="div-box">Box 1</div>
        <div class="div-box">Box 2</div>
        <div class="div-box">Box 3</div>
        <div class="div-box">Box 4</div>
    </div>
    
    <!-- Page layout with divs -->
    <h2>Page Layout with Divs</h2>
    <div class="page-layout">
        <div class="header">
            Header
        </div>
        <div class="content-area">
            <div class="sidebar">
                <h3>Sidebar</h3>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            </div>
            <div class="main-content">
                <h3>Main Content</h3>
                <p>This is the main content area of the page.</p>
                <p>Try changing the flex values to see how the layout changes.</p>
            </div>
        </div>
        <div class="footer">
            Footer &copy; 2023
        </div>
    </div>
    
    <!-- Grid layout with divs -->
    <h2>Grid Layout with Divs</h2>
    <div class="grid-container">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item">Item 4</div>
        <div class="grid-item">Item 5</div>
        <div class="grid-item">Item 6</div>
    </div>
    
    <!-- Card layout with divs -->
    <h2>Card Layout with Divs</h2>
    <div class="cards-container">
        <div class="card">
            <div class="card-header">
                <h3>Card Title 1</h3>
            </div>
            <div class="card-body">
                <p>This is a card created using divs. Cards are commonly used in web design to display content in a clean, organized way.</p>
            </div>
            <div class="card-footer">
                <a href="#" class="btn">Learn More</a>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header">
                <h3>Card Title 2</h3>
            </div>
            <div class="card-body">
                <p>Try modifying these cards or adding more to see how they work. You can change colors, sizes, and content.</p>
            </div>
            <div class="card-footer">
                <a href="#" class="btn">Learn More</a>
            </div>
        </div>
    </div>
</body>
</html>`,
        css: `/* You can add additional CSS here */
/* Try modifying the div examples */

/* Create a card layout using divs */
.card {
    width: 300px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    margin: 20px auto;
}

.card-header {
    background-color: #4a90e2;
    color: white;
    padding: 15px;
}

.card-body {
    padding: 15px;
}

.card-footer {
    background-color: #f5f5f5;
    padding: 10px 15px;
    border-top: 1px solid #ddd;
}

/* Create a different grid layout */
.custom-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 15px;
    margin: 20px 0;
}

.custom-grid-item {
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

/* Create a flexbox layout */
.flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0;
}

.flex-item {
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
    padding: 20px;
    flex: 1;
    min-width: 150px;
    text-align: center;
}

/* Try adding your own div styles below */
`
    },
    
    spanElement: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>Span Element Examples</title>
    <style>
        /* Basic styling */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        h1, h2 {
            color: #333;
            text-align: center;
        }
        
        .example-section {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            padding: 20px;
            margin-bottom: 30px;
        }
        
        /* Basic span styling */
        .text-container {
            font-size: 18px;
            line-height: 1.8;
            margin: 15px 0;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 5px;
        }
        
        /* Text styling with spans */
        .highlight {
            background-color: #ffffcc;
            padding: 2px 5px;
            border-radius: 3px;
        }
        
        .bold {
            font-weight: bold;
        }
        
        .italic {
            font-style: italic;
        }
        
        .red {
            color: red;
        }
        
        .blue {
            color: blue;
        }
        
        .green {
            color: green;
        }
        
        .underline {
            text-decoration: underline;
        }
        
        .strike {
            text-decoration: line-through;
        }
        
        .shadow-text {
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        /* Tag styling with spans */
        .tag {
            display: inline-block;
            background-color: #f0f0f0;
            color: #333;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 12px;
            margin: 0 3px;
        }
        
        .tag-blue {
            background-color: #e6f7ff;
            color: #1890ff;
            border: 1px solid #91d5ff;
        }
        
        .tag-green {
            background-color: #f6ffed;
            color: #52c41a;
            border: 1px solid #b7eb8f;
        }
        
        .tag-orange {
            background-color: #fff7e6;
            color: #fa8c16;
            border: 1px solid #ffd591;
        }
        
        .tag-red {
            background-color: #fff1f0;
            color: #f5222d;
            border: 1px solid #ffa39e;
        }
        
        /* Tooltip styling */
        .tooltip-container {
            position: relative;
            display: inline-block;
        }
        
        .tooltip-text {
            position: relative;
            border-bottom: 1px dotted #666;
            cursor: help;
        }
        
        .tooltip {
            visibility: hidden;
            width: 200px;
            background-color: #555;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -100px;
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .tooltip-container:hover .tooltip {
            visibility: visible;
            opacity: 1;
        }
        
        /* Badge styling */
        .badge-container {
            position: relative;
            display: inline-block;
            margin-right: 20px;
        }
        
        .badge {
            position: absolute;
            top: -10px;
            right: -10px;
            background-color: #f44336;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            font-size: 12px;
        }
        
        /* Gradient text */
        .gradient-text {
            background: linear-gradient(to right, #ff8a00, #e52e71);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
        }
        
        /* Animated text */
        .animated-text {
            display: inline-block;
            position: relative;
            color: #2196f3;
            transition: all 0.3s ease;
        }
        
        .animated-text:hover {
            transform: translateY(-2px);
            color: #0d47a1;
        }
    </style>
</head>
<body>
    <h1>Span Element Examples</h1>
    <p>Try modifying these examples to see how spans work!</p>
    
    <!-- Basic text styling with spans -->
    <div class="example-section">
        <h2>Text Styling with Spans</h2>
        <div class="text-container">
            This is <span class="highlight">highlighted text</span> using a span.
            <br><br>
            You can make text <span class="bold">bold</span>, <span class="italic">italic</span>, or <span class="underline">underlined</span>.
            <br><br>
            Change text <span class="red">color</span> to <span class="blue">different</span> <span class="green">colors</span>.
            <br><br>
            Add <span class="shadow-text">shadow to text</span> or <span class="strike">strike through</span> it.
            <br><br>
            Spans can be <span class="blue bold underline">combined with multiple styles</span> as needed.
            <br><br>
            Create <span class="gradient-text">gradient text effects</span> with spans.
            <br><br>
            Make text <span class="animated-text">interactive on hover</span> (hover over this text).
        </div>
    </div>
    
    <!-- Tags with spans -->
    <div class="example-section">
        <h2>Tags with Spans</h2>
        <div class="text-container">
            This article is tagged with: 
            <span class="tag">HTML</span>
            <span class="tag tag-blue">CSS</span>
            <span class="tag tag-green">JavaScript</span>
            <span class="tag tag-orange">Web Design</span>
            <span class="tag tag-red">React</span>
            <br><br>
            Try adding your own tags or modifying these!
        </div>
    </div>
    
    <!-- Tooltips with spans -->
    <div class="example-section">
        <h2>Tooltips with Spans</h2>
        <div class="text-container">
            HTML and CSS are fundamental technologies for 
            <span class="tooltip-container">
                <span class="tooltip-text">web development</span>
                <span class="tooltip">The process of building and maintaining websites</span>
            </span>
            and are essential skills for front-end developers.
            <br><br>
            JavaScript is a 
            <span class="tooltip-container">
                <span class="tooltip-text">programming language</span>
                <span class="tooltip">A language used to create interactive effects and web applications</span>
            </span>
            that adds interactivity to websites.
            <br><br>
            Hover over the dotted underlined text to see the tooltips!
        </div>
    </div>
    
    <!-- Badges with spans -->
    <div class="example-section">
        <h2>Badges with Spans</h2>
        <div class="text-container">
            <span class="badge-container">
                Messages
                <span class="badge">5</span>
            </span>
            
            <span class="badge-container">
                Notifications
                <span class="badge">9</span>
            </span>
            
            <span class="badge-container">
                Updates
                <span class="badge">2</span>
            </span>
            <br><br>
            These notification badges are created using spans!
        </div>
    </div>
    
    <!-- Practical example -->
    <div class="example-section">
        <h2>Practical Example: Product Features</h2>
        <div class="text-container">
            <h3>Our Amazing Product</h3>
            <p>
                Our product comes with <span class="highlight">unlimited storage</span> and 
                <span class="bold">24/7 customer support</span>. 
                Enjoy <span class="tag tag-green">Free Shipping</span> on all orders!
            </p>
            <p>
                <span class="red">Limited time offer:</span> 
                Use code <span class="blue underline">SAVE20</span> for 20% off your purchase.
            </p>
            <p>
                <span class="tooltip-container">
                    <span class="tooltip-text">Premium features</span>
                    <span class="tooltip">Includes advanced analytics, priority support, and custom branding</span>
                </span>
                available for business accounts.
            </p>
        </div>
    </div>
</body>
</html>`,
        css: `/* You can add additional CSS here */
/* Try modifying the span examples */

/* Create custom span styles */
.custom-highlight {
    background: linear-gradient(to right, #ffeb3b, #ffc107);
    padding: 2px 5px;
    border-radius: 3px;
}

.shadow-text {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.glow-text {
    color: #0066ff;
    text-shadow: 0 0 5px rgba(0, 102, 255, 0.5);
}

/* Create animated spans */
.animated-text {
    display: inline-block;
    position: relative;
    color: #2196f3;
    transition: all 0.3s ease;
}

.animated-text:hover {
    transform: translateY(-2px);
    color: #0d47a1;
}

/* Create a badge with span */
.badge {
    display: inline-block;
    background-color: #f44336;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    margin-left: 5px;
}

/* Try adding your own span styles below */
`
    },
    
    divVsSpan: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>Div vs Span: Interactive Comparison</title>
    <style>
        /* Basic styling */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        h1, h2 {
            color: #333;
            text-align: center;
        }
        
        .example-section {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            padding: 20px;
            margin-bottom: 30px;
        }
        
        /* Visual comparison */
        .visual-comparison {
            margin: 20px 0;
        }
        
        .div-example {
            background-color: #e6f7ff;
            padding: 10px;
            margin-bottom: 10px;
            border: 2px solid #1890ff;
            border-radius: 5px;
        }
        
        .span-example {
            background-color: #fff7e6;
            padding: 3px;
            border: 2px solid #fa8c16;
            border-radius: 3px;
        }
        
        /* Interactive examples */
        .interactive-area {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin: 20px 0;
        }
        
        .control-panel {
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        .control-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input[type="range"] {
            width: 100%;
        }
        
        input[type="color"] {
            width: 50px;
            height: 30px;
        }
        
        .value-display {
            display: inline-block;
            width: 50px;
            text-align: center;
        }
        
        /* Test elements */
        .test-div {
            background-color: #e6f7ff;
            border: 2px solid #1890ff;
            padding: 15px;
            margin: 15px 0;
            width: 300px;
            height: 100px;
            overflow: auto;
        }
        
        .test-span {
            background-color: #fff7e6;
            border: 2px solid #fa8c16;
            padding: 5px;
            margin: 5px;
        }
        
        /* Nested elements */
        .nested-example {
            margin: 20px 0;
        }
        
        .outer-div {
            background-color: #d9f7be;
            padding: 15px;
            border: 2px solid #52c41a;
            margin-bottom: 15px;
            border-radius: 5px;
        }
        
        .inner-div {
            background-color: #b7eb8f;
            padding: 15px;
            border: 2px solid #389e0d;
            margin: 10px 0;
            border-radius: 5px;
        }
        
        .inner-span {
            background-color: #ffffb8;
            padding: 3px;
            border: 1px solid #d4b106;
            border-radius: 3px;
        }
        
        /* Practical example */
        .practical-example {
            margin: 20px 0;
        }
        
        .card {
            width: 300px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
            margin: 0 auto;
        }
        
        .card-header {
            background-color: #1890ff;
            color: white;
            padding: 15px;
        }
        
        .card-body {
            padding: 15px;
        }
        
        .card-footer {
            background-color: #f5f5f5;
            padding: 10px 15px;
            border-top: 1px solid #ddd;
        }
        
        .highlight {
            background-color: #ffffcc;
            padding: 2px 5px;
            border-radius: 3px;
        }
        
        .tag {
            display: inline-block;
            background-color: #e6f7ff;
            color: #1890ff;
            border: 1px solid #91d5ff;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
            margin: 0 3px;
        }
    </style>
</head>
<body>
    <h1>Div vs Span: Interactive Comparison</h1>
    <p style="text-align: center;">Experiment with these examples to understand the differences between div and span elements</p>
    
    <!-- Visual comparison -->
    <div class="example-section">
        <h2>Visual Comparison</h2>
        <div class="visual-comparison">
            <div class="div-example">
                This is a <strong>&lt;div&gt;</strong> element. It's a block-level element that takes up the full width available and starts on a new line.
            </div>
            
            This is normal text with a <span class="span-example">&lt;span&gt; element</span> inside it. The span is an inline element that only takes up as much space as it needs.
        </div>
    </div>
    
    <!-- Interactive properties -->
    <div class="example-section">
        <h2>Interactive Properties</h2>
        <p>Adjust these properties to see how they affect div and span elements differently:</p>
        
        <div class="control-panel">
            <div class="control-group">
                <label for="width">Width: <span id="width-value" class="value-display">300</span>px</label>
                <input type="range" id="width" min="100" max="500" value="300">
            </div>
            
            <div class="control-group">
                <label for="height">Height: <span id="height-value" class="value-display">100</span>px</label>
                <input type="range" id="height" min="50" max="200" value="100">
            </div>
            
            <div class="control-group">
                <label for="padding">Padding: <span id="padding-value" class="value-display">15</span>px</label>
                <input type="range" id="padding" min="0" max="50" value="15">
            </div>
            
            <div class="control-group">
                <label for="margin">Margin: <span id="margin-value" class="value-display">15</span>px</label>
                <input type="range" id="margin" min="0" max="50" value="15">
            </div>
            
            <div class="control-group">
                <label for="bg-color">Background Color:</label>
                <input type="color" id="bg-color" value="#e6f7ff">
            </div>
        </div>
        
        <div class="interactive-area">
            <div>
                <h3>&lt;div&gt; Element</h3>
                <div id="test-div" class="test-div">
                    This is a div element. Try changing its properties using the controls above.
                </div>
            </div>
            
            <div>
                <h3>&lt;span&gt; Element</h3>
                <p>
                    This is a paragraph with a <span id="test-span" class="test-span">span element</span> inside it. 
                    Try changing its properties using the controls above and notice the differences compared to the div.
                </p>
            </div>
        </div>
    </div>
    
    <!-- Nested elements -->
    <div class="example-section">
        <h2>Nested Elements</h2>
        <div class="nested-example">
            <div class="outer-div">
                This is an outer div
                <div class="inner-div">
                    This is an inner div
                    <span class="inner-span">This is a span inside a div</span>
                </div>
                <div class="inner-div">
                    Another inner div with <span class="inner-span">a span</span> inside it
                </div>
            </div>
            
            <p>
                Spans can contain other spans: 
                This text has a <span class="inner-span">span <span style="color: red;">with another span</span> inside it</span>.
            </p>
        </div>
    </div>
    
    <!-- Practical example -->
    <div class="example-section">
        <h2>Practical Example</h2>
        <p>This example shows how divs and spans are used together in a real-world scenario:</p>
        
        <div class="practical-example">
            <div class="card">
                <div class="card-header">
                    <h3>Product Details</h3>
                </div>
                <div class="card-body">
                    <h4>Premium Headphones</h4>
                    <p>
                        These <span class="highlight">wireless headphones</span> offer exceptional sound quality and comfort.
                    </p>
                    <p>
                        Features:
                        <span class="tag">Bluetooth 5.0</span>
                        <span class="tag">40h Battery</span>
                        <span class="tag">Noise Cancelling</span>
                    </p>
                    <p>
                        Price: <span style="color: #f5222d; font-weight: bold;">$129.99</span>
                        <span style="text-decoration: line-through; color: #999; margin-left: 10px;">$159.99</span>
                    </p>
                </div>
                <div class="card-footer">
                    <button style="background-color: #1890ff; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        <p style="text-align: center; margin-top: 15px;">
            In this example, <strong>divs</strong> create the structure (card, header, body, footer),<br>
            while <strong>spans</strong> style specific pieces of text (highlights, tags, prices).
        </p>
    </div>
    
    <script>
        // Interactive controls
        const widthSlider = document.getElementById('width');
        const heightSlider = document.getElementById('height');
        const paddingSlider = document.getElementById('padding');
        const marginSlider = document.getElementById('margin');
        const bgColorPicker = document.getElementById('bg-color');
        
        const widthValue = document.getElementById('width-value');
        const heightValue = document.getElementById('height-value');
        const paddingValue = document.getElementById('padding-value');
        const marginValue = document.getElementById('margin-value');
        
        const testDiv = document.getElementById('test-div');
        const testSpan = document.getElementById('test-span');
        
        // Update functions
        function updateWidth() {
            const width = widthSlider.value;
            widthValue.textContent = width;
            testDiv.style.width = width + 'px';
            testSpan.style.width = width + 'px';
        }
        
        function updateHeight() {
            const height = heightSlider.value;
            heightValue.textContent = height;
            testDiv.style.height = height + 'px';
            testSpan.style.height = height + 'px';
        }
        
        function updatePadding() {
            const padding = paddingSlider.value;
            paddingValue.textContent = padding;
            testDiv.style.padding = padding + 'px';
            testSpan.style.padding = padding + 'px';
        }
        
        function updateMargin() {
            const margin = marginSlider.value;
            marginValue.textContent = margin;
            testDiv.style.margin = margin + 'px';
            testSpan.style.margin = margin + 'px';
        }
        
        function updateBgColor() {
            const color = bgColorPicker.value;
            testDiv.style.backgroundColor = color;
            testSpan.style.backgroundColor = color;
        }
        
        // Event listeners
        widthSlider.addEventListener('input', updateWidth);
        heightSlider.addEventListener('input', updateHeight);
        paddingSlider.addEventListener('input', updatePadding);
        marginSlider.addEventListener('input', updateMargin);
        bgColorPicker.addEventListener('input', updateBgColor);
        
        // Initialize
        updateWidth();
        updateHeight();
        updatePadding();
        updateMargin();
        updateBgColor();
    </script>
</body>
</html>`,
        css: `/* You can add additional CSS here */
/* Try modifying the comparison examples */

/* Create a custom comparison layout */
.custom-comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
}

.custom-comparison-item {
    padding: 15px;
    border-radius: 5px;
}

.custom-div-example {
    background-color: #e3f2fd;
    border: 1px solid #2196f3;
}

.custom-span-example {
    background-color: #fff8e1;
    border: 1px solid #ffc107;
}

/* Create a practical example showing div and span usage */
.practical-example {
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
}

.example-header {
    background-color: #f5f5f5;
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
}

.example-content {
    padding: 15px;
}

.example-tag {
    display: inline-block;
    background-color: #e0e0e0;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 5px;
}

.example-highlight {
    background-color: #ffecb3;
    padding: 0 3px;
}

/* Try adding your own comparison styles below */
`
    }
};