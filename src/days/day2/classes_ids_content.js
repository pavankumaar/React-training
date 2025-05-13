export const classesIdsContent = {
    classExample: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Classes Example</title>
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
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        /* Text styling classes */
        .text-red {
            color: red;
        }
        
        .text-blue {
            color: blue;
        }
        
        .text-green {
            color: green;
        }
        
        .text-purple {
            color: purple;
        }
        
        .bg-yellow {
            background-color: #ffffcc;
        }
        
        .bg-lightblue {
            background-color: #e6f7ff;
        }
        
        .bg-lightgreen {
            background-color: #f6ffed;
        }
        
        .bg-lightpink {
            background-color: #fff0f6;
        }
        
        /* Text formatting classes */
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
        
        .text-right {
            text-align: right;
        }
        
        .text-large {
            font-size: 1.2em;
        }
        
        .text-small {
            font-size: 0.8em;
        }
        
        /* Box styling classes */
        .rounded {
            border-radius: 10px;
        }
        
        .shadow {
            box-shadow: 3px 3px 5px rgba(0,0,0,0.2);
        }
        
        .border {
            border: 1px solid #ddd;
        }
        
        .border-thick {
            border: 3px solid #999;
        }
        
        .padding-small {
            padding: 10px;
        }
        
        .padding-large {
            padding: 20px;
        }
        
        .margin-top {
            margin-top: 20px;
        }
        
        .margin-bottom {
            margin-bottom: 20px;
        }
        
        /* Component classes */
        .card {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 15px;
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
        
        /* Color variants */
        .primary {
            border-color: #007bff;
        }
        
        .primary .card-header {
            color: #007bff;
        }
        
        .success {
            border-color: #28a745;
        }
        
        .success .card-header {
            color: #28a745;
        }
        
        .warning {
            border-color: #ffc107;
        }
        
        .warning .card-header {
            color: #ffc107;
        }
        
        .danger {
            border-color: #dc3545;
        }
        
        .danger .card-header {
            color: #dc3545;
        }
        
        /* Button classes */
        .btn {
            display: inline-block;
            padding: 8px 16px;
            background-color: #f0f0f0;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            text-decoration: none;
            color: #333;
            font-size: 14px;
        }
        
        .btn-primary {
            background-color: #007bff;
            border-color: #0069d9;
            color: white;
        }
        
        .btn-success {
            background-color: #28a745;
            border-color: #218838;
            color: white;
        }
        
        .btn-warning {
            background-color: #ffc107;
            border-color: #e0a800;
            color: #333;
        }
        
        .btn-danger {
            background-color: #dc3545;
            border-color: #c82333;
            color: white;
        }
        
        /* Layout classes */
        .flex-container {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin: 20px 0;
        }
        
        .flex-item {
            flex: 1;
            min-width: 200px;
            padding: 15px;
            background-color: #f5f5f5;
            border-radius: 5px;
        }
        
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .grid-item {
            padding: 15px;
            background-color: #f5f5f5;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Classes Example</h1>
        <p>Classes allow you to apply the same style to multiple elements and combine multiple styles on a single element.</p>
        
        <!-- Basic text styling with classes -->
        <h2>Text Styling with Classes</h2>
        <p class="text-red">This text is red using the text-red class.</p>
        <p class="text-blue bg-yellow">This text is blue with a yellow background using multiple classes.</p>
        <p class="text-green bold">This text is green and bold using multiple classes.</p>
        <p class="text-purple italic underline">This text is purple, italic, and underlined using multiple classes.</p>
        <p class="text-center bg-lightblue">This text is centered with a light blue background.</p>
        <p class="text-right text-small">This is smaller text aligned to the right.</p>
        <p class="text-large bold">This is larger bold text.</p>
        
        <!-- Box styling with classes -->
        <h2>Box Styling with Classes</h2>
        <div class="border padding-small bg-lightgreen margin-bottom">
            This is a simple box with border, padding, background, and margin.
        </div>
        
        <div class="rounded shadow padding-large bg-lightpink margin-bottom">
            This box has rounded corners, shadow, larger padding, and a light pink background.
        </div>
        
        <div class="border-thick rounded padding-small text-center margin-bottom">
            This box has a thicker border, rounded corners, and centered text.
        </div>
        
        <!-- Component classes -->
        <h2>Component Classes</h2>
        <div class="card primary">
            <div class="card-header">
                <h3>Primary Card</h3>
            </div>
            <div class="card-body">
                <p>This card uses multiple classes: 'card' and 'primary'</p>
                <p>Classes allow you to create reusable components with consistent styling.</p>
            </div>
            <div class="card-footer">
                <a href="#" class="btn btn-primary">Learn More</a>
            </div>
        </div>
        
        <div class="card success">
            <div class="card-header">
                <h3>Success Card</h3>
            </div>
            <div class="card-body">
                <p>This card uses multiple classes: 'card' and 'success'</p>
                <p>Notice how we can change the appearance by just changing one class.</p>
            </div>
            <div class="card-footer">
                <a href="#" class="btn btn-success">Learn More</a>
            </div>
        </div>
        
        <!-- Button classes -->
        <h2>Button Classes</h2>
        <div class="text-center margin-bottom">
            <button class="btn">Default Button</button>
            <button class="btn btn-primary">Primary Button</button>
            <button class="btn btn-success">Success Button</button>
            <button class="btn btn-warning">Warning Button</button>
            <button class="btn btn-danger">Danger Button</button>
        </div>
        
        <!-- Layout classes -->
        <h2>Layout Classes</h2>
        <div class="flex-container">
            <div class="flex-item">Flex Item 1</div>
            <div class="flex-item">Flex Item 2</div>
            <div class="flex-item">Flex Item 3</div>
        </div>
        
        <div class="grid-container">
            <div class="grid-item">Grid Item 1</div>
            <div class="grid-item">Grid Item 2</div>
            <div class="grid-item">Grid Item 3</div>
            <div class="grid-item">Grid Item 4</div>
        </div>
        
        <!-- Try combining classes -->
        <h2>Try Combining Classes</h2>
        <p>Try adding or removing classes from the elements above to see how they change!</p>
        <p>You can also create your own classes in the CSS section.</p>
    </div>
</body>
</html>`,
        css: `/* You can add additional CSS here */
/* Try creating your own classes */

/* Example: Create a new text color class */
.text-orange {
    color: orange;
}

/* Example: Create a new background class */
.bg-lavender {
    background-color: lavender;
}

/* Example: Create a new border style */
.border-dashed {
    border: 2px dashed #999;
}

/* Example: Create a new shadow effect */
.shadow-inset {
    box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}

/* Example: Create a new animation class */
.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

/* Try creating your own classes below */
`
    },
    
    idExample: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS IDs Example</title>
    <style>
        /* Basic styling */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }
        
        /* Page structure with IDs */
        #page-container {
            max-width: 1000px;
            margin: 0 auto;
            background-color: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        
        #header {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        #nav {
            background-color: #444;
            color: white;
        }
        
        #nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
        }
        
        #nav li {
            padding: 15px 20px;
        }
        
        #nav li:hover {
            background-color: #555;
            cursor: pointer;
        }
        
        #content-wrapper {
            display: flex;
            flex-wrap: wrap;
        }
        
        #main-content {
            flex: 3;
            min-width: 300px;
            padding: 20px;
        }
        
        #sidebar {
            flex: 1;
            min-width: 200px;
            background-color: #f0f0f0;
            padding: 20px;
            border-left: 1px solid #ddd;
        }
        
        #footer {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        /* Content-specific IDs */
        #welcome-message {
            background-color: #e6f7ff;
            border: 1px solid #91d5ff;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        
        #featured-article {
            border: 1px solid #ddd;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        
        #featured-article-title {
            color: #0066cc;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        
        #featured-image {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 15px 0;
            border-radius: 5px;
        }
        
        #special-offer {
            background-color: #fff7e6;
            border: 1px solid #ffd591;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        
        #newsletter-signup {
            background-color: #f6ffed;
            border: 1px solid #b7eb8f;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        
        #contact-info {
            background-color: #f9f9f9;
            padding: 15px;
            border-top: 1px solid #ddd;
            margin-top: 20px;
        }
        
        /* Form styling */
        #signup-form {
            margin-top: 15px;
        }
        
        #email-input {
            padding: 8px;
            width: 70%;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        #submit-button {
            padding: 8px 16px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        #submit-button:hover {
            background-color: #218838;
        }
        
        /* Anchor link targets */
        #section1, #section2, #section3 {
            padding-top: 10px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div id="page-container">
        <!-- Header section with ID -->
        <header id="header">
            <h1>Website with CSS IDs</h1>
            <p>IDs are used to identify unique elements on a page</p>
        </header>
        
        <!-- Navigation with ID -->
        <nav id="nav">
            <ul>
                <li><a href="#section1" style="color: white; text-decoration: none;">Section 1</a></li>
                <li><a href="#section2" style="color: white; text-decoration: none;">Section 2</a></li>
                <li><a href="#section3" style="color: white; text-decoration: none;">Section 3</a></li>
                <li><a href="#contact-info" style="color: white; text-decoration: none;">Contact</a></li>
            </ul>
        </nav>
        
        <!-- Content wrapper with ID -->
        <div id="content-wrapper">
            <!-- Main content with ID -->
            <main id="main-content">
                <!-- Welcome message with ID -->
                <div id="welcome-message">
                    <h2>Welcome to our website!</h2>
                    <p>This is a demonstration of how IDs are used in CSS to style unique elements on a page.</p>
                </div>
                
                <!-- Featured article with ID -->
                <article id="featured-article">
                    <h2 id="featured-article-title">Featured Article</h2>
                    <img id="featured-image" src="https://via.placeholder.com/600x300" alt="Featured Image">
                    <p>This is a featured article with a unique ID. IDs are perfect for styling unique elements that only appear once on a page.</p>
                </article>
                
                <!-- Content sections with IDs for anchor links -->
                <section id="section1">
                    <h2>Section 1</h2>
                    <p>This section has an ID that can be targeted with an anchor link. Click on "Section 1" in the navigation to jump here.</p>
                    <p>IDs are useful for creating anchor links that allow users to navigate to specific parts of a page.</p>
                </section>
                
                <section id="section2">
                    <h2>Section 2</h2>
                    <p>This is another section with an ID for anchor linking. Click on "Section 2" in the navigation to jump here.</p>
                    <p>Each ID must be unique on the page. You cannot have two elements with the same ID.</p>
                </section>
                
                <section id="section3">
                    <h2>Section 3</h2>
                    <p>This is the third section with an ID for anchor linking. Click on "Section 3" in the navigation to jump here.</p>
                    <p>IDs have higher specificity than classes in CSS, which means they will override class styles if there's a conflict.</p>
                </section>
            </main>
            
            <!-- Sidebar with ID -->
            <aside id="sidebar">
                <!-- Special offer with ID -->
                <div id="special-offer">
                    <h3>Special Offer</h3>
                    <p>Get 20% off your first purchase with code: <strong>FIRST20</strong></p>
                </div>
                
                <!-- Newsletter signup with ID -->
                <div id="newsletter-signup">
                    <h3>Subscribe to Our Newsletter</h3>
                    <p>Stay updated with our latest news and offers.</p>
                    <form id="signup-form">
                        <input type="email" id="email-input" placeholder="Enter your email">
                        <button type="submit" id="submit-button">Subscribe</button>
                    </form>
                </div>
            </aside>
        </div>
        
        <!-- Footer with ID -->
        <footer id="footer">
            <div id="contact-info">
                <h3>Contact Us</h3>
                <p>Email: example@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Main St, Anytown, USA</p>
            </div>
            <p>&copy; 2023 CSS IDs Example. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>`,
        css: `/* You can add additional CSS here */
/* Try modifying the existing IDs or creating new ones */

/* Example: Change the header background */
#header {
    /* Uncomment to change the background */
    /* background-color: #4a148c; */
}

/* Example: Add a border to the navigation */
#nav {
    /* Uncomment to add a border */
    /* border-bottom: 3px solid #ff9800; */
}

/* Example: Change the sidebar width */
#sidebar {
    /* Uncomment to change the width */
    /* flex: 2; */
}

/* Example: Create a back-to-top button */
#back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    color: white;
    padding: 10px 15px;
    border-radius: 50%;
    text-decoration: none;
    display: none;
}

/* Try creating your own ID styles below */
`
    },
    
    classVsIdExample: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>Classes vs IDs: Interactive Comparison</title>
    <style>
        /* Basic styling */
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
        
        h1, h2 {
            color: #333;
            text-align: center;
        }
        
        .section {
            margin-bottom: 30px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        /* Class examples */
        .box {
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
        }
        
        .blue-box {
            background-color: #e6f7ff;
            border: 1px solid #91d5ff;
        }
        
        .green-box {
            background-color: #f6ffed;
            border: 1px solid #b7eb8f;
        }
        
        .yellow-box {
            background-color: #fffbe6;
            border: 1px solid #ffe58f;
        }
        
        /* ID examples */
        #unique-box-1 {
            background-color: #fff0f6;
            border: 1px solid #ffadd2;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
        }
        
        #unique-box-2 {
            background-color: #f9f0ff;
            border: 1px solid #d3adf7;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
        }
        
        /* Specificity demonstration */
        .style-me {
            background-color: yellow;
            color: black;
            padding: 10px;
            border: 1px solid #ddd;
        }
        
        #override-me {
            background-color: purple;
            color: white;
        }
        
        /* Interactive example styles */
        .interactive-area {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 20px;
        }
        
        .control-panel {
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        .result-panel {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
        }
        
        .btn {
            padding: 8px 16px;
            background-color: #f0f0f0;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 5px;
        }
        
        .btn-primary {
            background-color: #007bff;
            border-color: #0069d9;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Classes vs IDs: Interactive Comparison</h1>
        
        <!-- Class examples -->
        <div class="section">
            <h2>Classes</h2>
            <p>Classes can be reused on multiple elements:</p>
            
            <div class="box blue-box">This is a blue box using the classes "box" and "blue-box"</div>
            <div class="box green-box">This is a green box using the classes "box" and "green-box"</div>
            <div class="box yellow-box">This is a yellow box using the classes "box" and "yellow-box"</div>
            
            <p>The same element can have multiple classes:</p>
            <div class="box blue-box yellow-box">
                This element has three classes: "box", "blue-box", and "yellow-box".<br>
                Notice how the "yellow-box" class overrides the background from "blue-box" because it comes later in the CSS.
            </div>
        </div>
        
        <!-- ID examples -->
        <div class="section">
            <h2>IDs</h2>
            <p>IDs must be unique on the page:</p>
            
            <div id="unique-box-1">This is a unique element with ID "unique-box-1"</div>
            <div id="unique-box-2">This is another unique element with ID "unique-box-2"</div>
            
            <p>An element can have both an ID and classes:</p>
            <div id="unique-box-3" class="box blue-box">
                This element has an ID "unique-box-3" and classes "box" and "blue-box"
            </div>
        </div>
        
        <!-- Specificity example -->
        <div class="section">
            <h2>Specificity Comparison</h2>
            <p>IDs have higher specificity than classes, which means they override class styles:</p>
            
            <div class="style-me">
                This element only has a class "style-me"
            </div>
            
            <div class="style-me" id="override-me">
                This element has both the class "style-me" and the ID "override-me".<br>
                The ID styles override the class styles where they conflict.
            </div>
        </div>
        
        <!-- Interactive example -->
        <div class="section">
            <h2>Interactive Example</h2>
            <p>Click the buttons to see how classes and IDs work:</p>
            
            <div class="control-panel">
                <button class="btn" onclick="toggleClass('demo-element', 'blue-box')">Toggle Blue Class</button>
                <button class="btn" onclick="toggleClass('demo-element', 'green-box')">Toggle Green Class</button>
                <button class="btn" onclick="toggleClass('demo-element', 'yellow-box')">Toggle Yellow Class</button>
                <button class="btn btn-primary" onclick="toggleId()">Toggle ID Style</button>
            </div>
            
            <div class="result-panel">
                <div id="demo-element" class="box">
                    This is the demo element. Click the buttons above to apply or remove classes and ID styles.
                </div>
            </div>
        </div>
        
        <!-- Best practices -->
        <div class="section">
            <h2>When to Use Each</h2>
            
            <div class="box blue-box">
                <h3>Use Classes When:</h3>
                <ul>
                    <li>You want to apply the same style to multiple elements</li>
                    <li>You need to apply multiple styles to an element</li>
                    <li>You're creating reusable components</li>
                    <li>You want to toggle styles with JavaScript</li>
                </ul>
            </div>
            
            <div class="box green-box">
                <h3>Use IDs When:</h3>
                <ul>
                    <li>You need to identify a unique element</li>
                    <li>You're creating anchor links within a page</li>
                    <li>You need to access a specific element with JavaScript</li>
                    <li>You're working with forms and labels</li>
                </ul>
            </div>
        </div>
    </div>
    
    <script>
        // Function to toggle a class on an element
        function toggleClass(elementId, className) {
            const element = document.getElementById(elementId);
            if (element.classList.contains(className)) {
                element.classList.remove(className);
            } else {
                element.classList.add(className);
            }
        }
        
        // Function to toggle ID styling
        function toggleId() {
            const element = document.getElementById('demo-element');
            if (element.hasAttribute('style')) {
                element.removeAttribute('style');
            } else {
                element.style.backgroundColor = 'purple';
                element.style.color = 'white';
                element.style.fontWeight = 'bold';
            }
        }
    </script>
</body>
</html>`,
        css: `/* You can add additional CSS here */
/* Try creating your own classes and IDs */

/* Example: Create a new box class */
.orange-box {
    background-color: #fff7e6;
    border: 1px solid #ffd591;
}

/* Example: Create a new ID style */
#custom-element {
    background-color: #f5f0ff;
    border: 2px dashed #7028e4;
    padding: 20px;
    text-align: center;
    font-weight: bold;
}

/* Example: Create a class with animation */
.animated {
    transition: all 0.3s ease;
}

.animated:hover {
    transform: scale(1.05);
}

/* Try creating your own styles below */
`
    }
};