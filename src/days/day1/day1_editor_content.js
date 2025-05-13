export const day1EditorContent = {
    images: {
        basic_image: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Basic HTML Image</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            color: #333;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        
        .image-container {
            margin: 20px 0;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 5px;
        }
        
        img {
            max-width: 100%;
            height: auto;
            display: block;
        }
        
        .caption {
            margin-top: 10px;
            font-style: italic;
            color: #666;
        }
    </style>
</head>
<body>
    <h1>Basic Image Syntax</h1>
    
    <div class="image-container">
        <img src="./image.jpg" alt="A placeholder image">
        <div class="caption">A basic image using the img tag</div>
    </div>
    
    <h2>Image Tag Explained:</h2>
    <ul>
        <li><code>src</code> - Specifies the path to the image (required)</li>
        <li><code>alt</code> - Provides alternative text for the image (required for accessibility)</li>
    </ul>
    
    <p>Try changing the src attribute to a different image URL or modifying the alt text!</p>
</body>
</html>`,
            css: `/* Additional styling for images */
.image-container {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.image-container:hover {
  transform: translateY(-5px);
}

img {
  border-radius: 4px;
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #3498db;
  margin-top: 30px;
}

code {
  background-color: #f8f9fa;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: Consolas, Monaco, monospace;
}`
        },
        image_size: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Image Size Attributes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            color: #333;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        
        .image-container {
            margin: 20px 0;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 5px;
        }
        
        .caption {
            margin-top: 10px;
            font-style: italic;
            color: #666;
        }
        
        .controls {
            margin: 20px 0;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>Image Size Attributes</h1>
    
    <div class="image-container">
        <img src="./image.jpg" alt="Resized image" width="400" height="300">
        <div class="caption">Image with width and height attributes set</div>
    </div>
    
    <h2>Size Attributes:</h2>
    <ul>
        <li><code>width</code> - Specifies the width of the image in pixels</li>
        <li><code>height</code> - Specifies the height of the image in pixels</li>
    </ul>
    
    <div class="controls">
        <p>Try changing the width and height values:</p>
        <label for="width-input">Width (px):</label>
        <input type="number" id="width-input" value="400" min="100" max="800">
        
        <label for="height-input">Height (px):</label>
        <input type="number" id="height-input" value="300" min="100" max="600">
    </div>
    
    <p>Note: It's a good practice to specify both width and height to prevent layout shifts during page loading.</p>
</body>
</html>`,
            css: `/* Additional styling for the image size demo */
.image-container {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
}

img {
  border: 2px solid #3498db;
  transition: all 0.3s ease;
}

.controls {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #3498db;
}

code {
  background-color: #f8f9fa;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: Consolas, Monaco, monospace;
}`,
            js: `// JavaScript to update image dimensions
document.addEventListener('DOMContentLoaded', function() {
  const widthInput = document.getElementById('width-input');
  const heightInput = document.getElementById('height-input');
  const image = document.querySelector('.image-container img');
  
  widthInput.addEventListener('input', updateImageSize);
  heightInput.addEventListener('input', updateImageSize);
  
  function updateImageSize() {
    image.width = widthInput.value;
    image.height = heightInput.value;
  }
});`
        },
        responsive_image: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Responsive Images</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            color: #333;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        
        .container {
            margin: 20px 0;
        }
        
        .responsive-image {
            max-width: 100%;
            height: auto;
            display: block;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        .caption {
            margin-top: 10px;
            font-style: italic;
            color: #666;
        }
        
        .resize-demo {
            margin-top: 30px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Responsive Images</h1>
    
    <div class="container">
        <img src="./image.jpg" alt="Responsive image example" class="responsive-image">
        <div class="caption">This image will resize with the browser window</div>
    </div>
    
    <h2>CSS for Responsive Images:</h2>
    <pre><code>
.responsive-image {
  max-width: 100%;
  height: auto;
}
    </code></pre>
    
    <div class="resize-demo">
        <p>Try resizing your browser window to see how the image responds!</p>
        <p>The image will scale down to fit smaller screens but won't grow larger than its natural size.</p>
    </div>
    
    <h2>Benefits of Responsive Images:</h2>
    <ul>
        <li>Better user experience across different devices</li>
        <li>Prevents horizontal scrolling on mobile devices</li>
        <li>Maintains aspect ratio automatically</li>
        <li>Improves page load times on mobile devices</li>
    </ul>
</body>
</html>`,
            css: `/* Additional styling for responsive images */
.container {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 10px;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.container:hover {
  transform: translateY(-5px);
}

.responsive-image {
  transition: all 0.3s ease;
}

.responsive-image:hover {
  opacity: 0.9;
}

.resize-demo {
  border-left: 4px solid #3498db;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #3498db;
  margin-top: 30px;
}

pre {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
}

code {
  font-family: Consolas, Monaco, monospace;
  color: #e74c3c;
}`
        },
        image_as_link: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Image as a Link</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            color: #333;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        
        .link-container {
            margin: 20px 0;
            text-align: center;
        }
        
        .image-link {
            display: inline-block;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 5px;
            text-decoration: none;
            color: #333;
        }
        
        .image-link img {
            max-width: 100%;
            height: auto;
            display: block;
            border-radius: 4px;
        }
        
        .link-caption {
            margin-top: 10px;
            font-style: italic;
        }
        
        .code-example {
            margin: 20px 0;
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>Image as a Link</h1>
    
    <div class="link-container">
        <a href="https://example.com" class="image-link" target="_blank">
            <img src="./image.jpg" alt="Clickable image">
            <div class="link-caption">Click this image to go to example.com</div>
        </a>
    </div>
    
    <h2>HTML Structure:</h2>
    <div class="code-example">
        <pre><code>&lt;a href="https://example.com"&gt;
    &lt;img src="image.jpg" alt="Description"&gt;
&lt;/a&gt;</code></pre>
    </div>
    
    <h2>Key Points:</h2>
    <ul>
        <li>Wrap the <code>&lt;img&gt;</code> tag with an <code>&lt;a&gt;</code> tag to make it clickable</li>
        <li>The <code>href</code> attribute specifies where the link goes</li>
        <li>Use <code>target="_blank"</code> to open the link in a new tab</li>
        <li>Always include descriptive <code>alt</code> text for accessibility</li>
    </ul>
    
    <p>Try changing the href attribute to link to a different website!</p>
</body>
</html>`,
            css: `/* Additional styling for image links */
.link-container {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 5px;
}

.image-link {
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.image-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.image-link img {
  transition: opacity 0.3s ease;
}

.image-link:hover img {
  opacity: 0.9;
}

.code-example {
  border-left: 4px solid #3498db;
}

pre {
  margin: 0;
}

code {
  font-family: Consolas, Monaco, monospace;
  color: #e74c3c;
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #3498db;
  margin-top: 30px;
}`
        },
        figure_caption: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Figure and Caption</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            color: #333;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        
        figure {
            margin: 20px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            text-align: center;
        }
        
        figure img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
            border-radius: 4px;
        }
        
        figcaption {
            margin-top: 10px;
            font-style: italic;
            color: #666;
        }
        
        .code-example {
            margin: 20px 0;
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        
        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 30px;
        }
        
        .gallery figure {
            flex: 1 0 calc(50% - 20px);
            min-width: 250px;
        }
    </style>
</head>
<body>
    <h1>Figure and Caption</h1>
    
    <figure>
        <img src="./image.jpg" alt="Main example image">
        <figcaption>Fig.1 - This is a caption for the image above.</figcaption>
    </figure>
    
    <h2>HTML Structure:</h2>
    <div class="code-example">
        <pre><code>&lt;figure&gt;
    &lt;img src="image.jpg" alt="Description"&gt;
    &lt;figcaption&gt;Caption text here&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
    </div>
    
    <h2>Benefits of Figure and Figcaption:</h2>
    <ul>
        <li>Provides semantic meaning to images with captions</li>
        <li>Improves accessibility</li>
        <li>Better for SEO</li>
        <li>Can contain multiple images or other content</li>
    </ul>
    
    <h2>Example Gallery:</h2>
    <div class="gallery">
        <figure>
            <img src="./image.jpg" alt="Gallery image 1">
            <figcaption>Mountain landscape</figcaption>
        </figure>
        <figure>
            <img src="./image.jpg" alt="Gallery image 2">
            <figcaption>Ocean sunset</figcaption>
        </figure>
    </div>
</body>
</html>`,
            css: `/* Additional styling for figure and figcaption */
figure {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  background-color: white;
}

figure:hover {
  transform: translateY(-5px);
}

figcaption {
  padding: 8px;
  background-color: #f8f9fa;
  border-radius: 0 0 4px 4px;
}

.code-example {
  border-left: 4px solid #3498db;
}

pre {
  margin: 0;
}

code {
  font-family: Consolas, Monaco, monospace;
  color: #e74c3c;
}

.gallery figure {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #3498db;
  margin-top: 30px;
}`
        },
        background_image: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Background Images with CSS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            color: #333;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        
        .bg-container {
            margin: 20px 0;
        }
        
        .bg-image {
            width: 100%;
            height: 300px;
            background-image: url('./image.jpg');
            background-size: cover;
            background-position: center;
            border-radius: 5px;
        }
        
        .bg-text {
            width: 100%;
            height: 200px;
            background-image: url('./image.jpg');
            background-size: cover;
            background-position: center;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
            font-size: 24px;
            font-weight: bold;
            margin-top: 20px;
        }
        
        .bg-repeat {
            width: 100%;
            height: 200px;
            background-image: url('./image.jpg');
            background-repeat: repeat;
            border-radius: 5px;
            margin-top: 20px;
        }
        
        .code-example {
            margin: 20px 0;
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>Background Images with CSS</h1>
    
    <div class="bg-container">
        <div class="bg-image"></div>
        <div class="bg-text">Text Over Background Image</div>
        <div class="bg-repeat"></div>
    </div>
    
    <h2>CSS Properties:</h2>
    <div class="code-example">
        <pre><code>.element {
    background-image: url('image.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}</code></pre>
    </div>
    
    <h2>Background Properties Explained:</h2>
    <ul>
        <li><code>background-image</code> - Sets the background image</li>
        <li><code>background-size</code> - Controls the size (cover, contain, or specific dimensions)</li>
        <li><code>background-position</code> - Sets the starting position</li>
        <li><code>background-repeat</code> - Controls if/how the image repeats (repeat, no-repeat, repeat-x, repeat-y)</li>
        <li><code>background-attachment</code> - Determines if the background scrolls with the content (scroll, fixed)</li>
    </ul>
</body>
</html>`,
            css: `/* Additional styling for background images */
.bg-container {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 5px;
  background-color: #f8f9fa;
}

.bg-image {
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.bg-image:hover {
  transform: scale(1.02);
}

.bg-text {
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.bg-text:hover {
  background-position: bottom right;
}

.bg-repeat {
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: background-position 0.3s ease;
}

.bg-repeat:hover {
  background-position: 10px 10px;
}

.code-example {
  border-left: 4px solid #3498db;
}

pre {
  margin: 0;
}

code {
  font-family: Consolas, Monaco, monospace;
  color: #e74c3c;
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #3498db;
  margin-top: 30px;
}`
        },
        image_floating: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Image Floating</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            color: #333;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        
        .clearfix::after {
            content: "";
            clear: both;
            display: table;
        }
        
        .float-left {
            float: left;
            margin-right: 15px;
            margin-bottom: 10px;
            width: 200px;
            height: auto;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        
        .float-right {
            float: right;
            margin-left: 15px;
            margin-bottom: 10px;
            width: 200px;
            height: auto;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        
        .text-section {
            margin-bottom: 30px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        
        .code-example {
            margin: 20px 0;
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            clear: both;
        }
    </style>
</head>
<body>
    <h1>Image Floating</h1>
    
    <h2>Left Floating Image</h2>
    <div class="text-section clearfix">
        <img src="./image.jpg" alt="Left floating image" class="float-left">
        <p>This is an example of text wrapping around an image that is floated to the left. The float property is commonly used to create text wrapping around images. This creates a nice layout where the image is positioned on one side and the text flows around it.</p>
        <p>You can use this technique for things like article layouts, blog posts, or any content where you want to combine images with text in a visually appealing way. Notice how the text continues to wrap around the image until it reaches the end of the image.</p>
    </div>
    
    <h2>Right Floating Image</h2>
    <div class="text-section clearfix">
        <img src="./image.jpg" alt="Right floating image" class="float-right">
        <p>This is an example of text wrapping around an image that is floated to the right. Notice how the text flows around the left side of the image. Floating elements to the right is useful when you want the image to appear on the right side of your content.</p>
        <p>Remember to use a clearfix to prevent layout issues when using floated elements. The clearfix ensures that the container expands to include the floated elements, preventing the container from collapsing.</p>
    </div>
    
    <h2>CSS Code:</h2>
    <div class="code-example">
        <pre><code>/* Left float */
.float-left {
    float: left;
    margin-right: 15px;
    margin-bottom: 10px;
}

/* Right float */
.float-right {
    float: right;
    margin-left: 15px;
    margin-bottom: 10px;
}

/* Clearfix to prevent container collapse */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}</code></pre>
    </div>
</body>
</html>`,
            css: `/* Additional styling for floating images */
.text-section {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.float-left, .float-right {
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.float-left:hover, .float-right:hover {
  transform: scale(1.05);
}

.code-example {
  border-left: 4px solid #3498db;
}

pre {
  margin: 0;
}

code {
  font-family: Consolas, Monaco, monospace;
  color: #e74c3c;
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #3498db;
  margin-top: 30px;
}

p {
  text-align: justify;
}`
        },
        image_gallery: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Image Gallery Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            color: #333;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        
        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
        }
        
        .gallery-item {
            flex: 1 0 calc(33.333% - 10px);
            min-width: 150px;
            max-width: calc(33.333% - 10px);
            position: relative;
            overflow: hidden;
            border-radius: 5px;
        }
        
        .gallery-item img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            display: block;
            border: 1px solid #ddd;
        }
        
        .gallery-caption {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 5px;
            font-size: 0.9em;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover .gallery-caption {
            transform: translateY(0);
        }
        
        .code-example {
            margin: 20px 0;
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>Image Gallery Example</h1>
    
    <div class="gallery">
        <div class="gallery-item">
            <img src="./image.jpg" alt="Gallery image 1">
            <div class="gallery-caption">Image 1</div>
        </div>
        <div class="gallery-item">
            <img src="./image.jpg" alt="Gallery image 2">
            <div class="gallery-caption">Image 2</div>
        </div>
        <div class="gallery-item">
            <img src="./image.jpg" alt="Gallery image 3">
            <div class="gallery-caption">Image 3</div>
        </div>
        <div class="gallery-item">
            <img src="./image.jpg" alt="Gallery image 4">
            <div class="gallery-caption">Image 4</div>
        </div>
        <div class="gallery-item">
            <img src="./image.jpg" alt="Gallery image 5">
            <div class="gallery-caption">Image 5</div>
        </div>
        <div class="gallery-item">
            <img src="./image.jpg" alt="Gallery image 6">
            <div class="gallery-caption">Image 6</div>
        </div>
    </div>
    
    <h2>CSS Code:</h2>
    <div class="code-example">
        <pre><code>.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.gallery-item {
    flex: 1 0 calc(33.333% - 10px);
    min-width: 150px;
    position: relative;
}

.gallery-item img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;
}</code></pre>
    </div>
    
    <h2>Benefits of Using Flexbox for Galleries:</h2>
    <ul>
        <li>Responsive layout that works on all screen sizes</li>
        <li>Equal height items regardless of content</li>
        <li>Easy to control spacing between items</li>
        <li>Automatically wraps items to new rows as needed</li>
    </ul>
</body>
</html>`,
            css: `/* Additional styling for image gallery */
.gallery {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.gallery-item {
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.gallery-item img {
  transition: all 0.3s ease;
}

.gallery-item:hover img {
  filter: brightness(1.1);
}

.code-example {
  border-left: 4px solid #3498db;
}

pre {
  margin: 0;
}

code {
  font-family: Consolas, Monaco, monospace;
  color: #e74c3c;
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #3498db;
  margin-top: 30px;
}`
        },
        accessibility: {
            html: `<!DOCTYPE html>
<html>
<head>
    <title>Image Accessibility Best Practices</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            color: #333;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        
        .example-container {
            margin: 20px 0;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        
        .good-example, .bad-example {
            margin-bottom: 20px;
            padding: 15px;
            border-radius: 5px;
        }
        
        .good-example {
            background-color: #d4edda;
            border-left: 4px solid #28a745;
        }
        
        .bad-example {
            background-color: #f8d7da;
            border-left: 4px solid #dc3545;
        }
        
        .example-title {
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .example-container img {
            max-width: 100%;
            height: auto;
            border-radius: 4px;
            display: block;
            margin-bottom: 10px;
        }
        
        .code-example {
            margin: 10px 0;
            background-color: #fff;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>Image Accessibility Best Practices</h1>
    
    <h2>1. Always Use Alt Text</h2>
    <div class="example-container">
        <div class="good-example">
            <div class="example-title">✅ Good Example:</div>
            <img src="./image.jpg" alt="A chart showing sales growth of 20% in Q4 2023">
            <div class="code-example">
                <code>&lt;img src="chart.jpg" alt="A chart showing sales growth of 20% in Q4 2023"&gt;</code>
            </div>
            <p>The alt text describes the content and meaning of the image.</p>
        </div>
        
        <div class="bad-example">
            <div class="example-title">❌ Bad Example:</div>
            <img src="./image.jpg" alt="Chart">
            <div class="code-example">
                <code>&lt;img src="chart.jpg" alt="Chart"&gt;</code>
            </div>
            <p>This alt text is too vague and doesn't convey the information in the image.</p>
        </div>
    </div>
    
    <h2>2. Empty Alt for Decorative Images</h2>
    <div class="example-container">
        <div class="good-example">
            <div class="example-title">✅ Good Example:</div>
            <img src="https://via.placeholder.com/400x100" alt="">
            <div class="code-example">
                <code>&lt;img src="decorative-line.jpg" alt=""&gt;</code>
            </div>
            <p>Decorative images that don't add content should have empty alt text.</p>
        </div>
    </div>
    
    <h2>3. Use Lazy Loading</h2>
    <div class="example-container">
        <div class="good-example">
            <div class="example-title">✅ Good Example:</div>
            <div class="code-example">
                <code>&lt;img src="large-image.jpg" alt="Description" loading="lazy"&gt;</code>
            </div>
            <p>The loading="lazy" attribute improves page performance by loading images only when they're about to enter the viewport.</p>
        </div>
    </div>
    
    <h2>4. Provide Context for Images</h2>
    <div class="example-container">
        <div class="good-example">
            <div class="example-title">✅ Good Example:</div>
            <figure>
                <img src="https://via.placeholder.com/400x200" alt="A bar graph showing monthly sales figures for 2023">
                <figcaption>Fig.1 - Monthly sales figures for 2023 showing peak performance in December.</figcaption>
            </figure>
            <div class="code-example">
                <code>&lt;figure&gt;
    &lt;img src="graph.jpg" alt="A bar graph showing monthly sales figures for 2023"&gt;
    &lt;figcaption&gt;Fig.1 - Monthly sales figures for 2023 showing peak performance in December.&lt;/figcaption&gt;
&lt;/figure&gt;</code>
            </div>
        </div>
    </div>
</body>
</html>`,
            css: `/* Additional styling for accessibility examples */
.example-container {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.good-example, .bad-example {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.good-example .example-title {
  color: #28a745;
}

.bad-example .example-title {
  color: #dc3545;
}

.code-example {
  border: 1px solid #ddd;
}

code {
  font-family: Consolas, Monaco, monospace;
  color: #e74c3c;
}

figure {
  margin: 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

figcaption {
  margin-top: 10px;
  font-style: italic;
  color: #666;
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #3498db;
  margin-top: 30px;
  border-left: 4px solid #3498db;
  padding-left: 10px;
}`
        }
    },
    headings: {
        six_levels: {
            html: `<!DOCTYPE html>
            <html>
            <head>
                <title>HTML Heading Levels</title>
            </head>
            <body>
                <h1>This is Heading 1 (h1)</h1>
                <h2>This is Heading 2 (h2)</h2>
                <h3>This is Heading 3 (h3)</h3>
                <h4>This is Heading 4 (h4)</h4>
                <h5>This is Heading 5 (h5)</h5>
                <h6>This is Heading 6 (h6)</h6>
            </body>
            </html>`,
            css: `/* Styling for different heading levels */
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              padding: 20px;
              max-width: 800px;
              margin: 0 auto;
            }

            h1 {
              color: #e74c3c;
              font-size: 2.5em;
            }

            h2 {
              color: #3498db;
              font-size: 2em;
            }

            h3 {
              color: #2ecc71;
              font-size: 1.75em;
            }

            h4 {
              color: #f39c12;
              font-size: 1.5em;
            }

            h5 {
              color: #9b59b6;
              font-size: 1.25em;
            }

            h6 {
              color: #1abc9c;
              font-size: 1em;
            }`
        },
        best_practices: {
            html: `<!DOCTYPE html>
            <html>
            <head>
                <title>Heading Best Practices</title>
            </head>
            <body>
                <!-- Good heading structure -->
                <h1>Main Topic: Web Development</h1>
                
                <h2>Subtopic 1: HTML Basics</h2>
                <p>Content about HTML basics goes here...</p>
                
                <h3>HTML Elements</h3>
                <p>Information about HTML elements...</p>
                
                <h3>HTML Attributes</h3>
                <p>Information about HTML attributes...</p>
                
                <h2>Subtopic 2: CSS Fundamentals</h2>
                <p>Content about CSS fundamentals goes here...</p>
                
                <!-- Try changing this structure to see how it affects readability -->
            </body>
            </html>`,
            css: `/* Styling to highlight the heading structure */
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              padding: 20px;
              max-width: 800px;
              margin: 0 auto;
            }

            h1 {
              color: #2c3e50;
              border-bottom: 2px solid #3498db;
              padding-bottom: 10px;
            }

            h2 {
              color: #e74c3c;
              border-left: 4px solid #e74c3c;
              padding-left: 10px;
              margin-top: 30px;
            }

            h3 {
              color: #27ae60;
              margin-top: 20px;
            }

            p {
              color: #555;
              margin-left: 15px;
            }`
        },
        semantic_importance: {
            html: `<!DOCTYPE html>
                <html>
                <head>
                    <title>Semantic Headings</title>
                </head>
                <body>
                    <header>
                        <h1>Understanding Semantic HTML</h1>
                        <p>A guide to using headings properly for accessibility and SEO</p>
                    </header>
                    
                    <main>
                        <section>
                            <h2>Accessibility Benefits</h2>
                            <p>Screen readers use headings to create an outline of the page, allowing users to navigate efficiently.</p>
                            <p>Try using the tab key to navigate this page - notice how headings are focusable elements.</p>
                            
                            <h3>Screen Reader Navigation</h3>
                            <p>Most screen readers allow users to jump between headings using keyboard shortcuts.</p>
                        </section>
                        
                        <section>
                            <h2>SEO Advantages</h2>
                            <p>Search engines give more weight to content in headings, especially h1 and h2 elements.</p>
                            
                            <h3>Content Hierarchy</h3>
                            <p>A clear heading structure helps search engines understand the relationship between different parts of your content.</p>
                        </section>
                    </main>
                    
                    <footer>
                        <h2>Additional Resources</h2>
                        <p>Learn more about semantic HTML and accessibility best practices.</p>
                    </footer>
                </body>
                </html>`,
            css: `/* Styling that enhances the semantic structure */
                body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                color: #333;
                }

                header {
                background-color: #f5f5f5;
                padding: 20px;
                border-radius: 5px;
                margin-bottom: 20px;
                }

                header h1 {
                color: #2c3e50;
                margin-top: 0;
                }

                section {
                margin-bottom: 30px;
                padding: 0 15px;
                }

                h2 {
                color: #3498db;
                border-bottom: 2px solid #3498db;
                padding-bottom: 5px;
                }

                h3 {
                color: #e67e22;
                }

                footer {
                background-color: #f5f5f5;
                padding: 15px;
                border-radius: 5px;
                margin-top: 30px;
                }

                footer h2 {
                font-size: 1.2em;
                color: #7f8c8d;
                border-bottom: none;
                }`
        },
        how_to_write: {
            html: `<!DOCTYPE html>
                <html>
                <head>
                    <title>HTML Headings Example</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            margin: 20px;
                        }
                        h1 { color: #e74c3c; }
                        h2 { color: #3498db; }
                        h3 { color: #2ecc71; }
                        h4 { color: #f39c12; }
                        h5 { color: #9b59b6; }
                        h6 { color: #1abc9c; }
                    </style>
                </head>
                <body>
                    <h1>This is a level 1 heading</h1>
                    <h2>This is a level 2 heading</h2>
                    <h3>This is a level 3 heading</h3>
                    <h4>This is a level 4 heading</h4>
                    <h5>This is a level 5 heading</h5>
                    <h6>This is a level 6 heading</h6>
                    
                    <p>Try editing the headings above or changing the colors in the style section!</p>
                </body>
                </html>`
        }
    },
    tables: {
      table_with_header_body_footer: {
        html: `<!DOCTYPE html>
          <html>
          <head>
              <title>Table with Header, Body, and Footer</title>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      line-height: 1.6;
                      margin: 20px;
                  }
                  table {
                      border-collapse: collapse;
                      width: 100%;
                  }
                  th, td {
                      border: 1px solid #ddd;
                      padding: 8px;
                      text-align: left;
                  }
                  th {
                      background-color: #f2f2f2;
                  }
                  caption {
                      font-weight: bold;
                      margin-bottom: 10px;
                      font-size: 1.2em;
                  }
                  tfoot {
                      background-color: #f9f9f9;
                      font-weight: bold;
                  }
              </style>
          </head>
          <body>
              <h1>Table with Header, Body, and Footer</h1>
              
              <table>
                  <caption>Monthly Savings</caption>
                  <thead>
                      <tr>
                          <th>Month</th>
                          <th>Income</th>
                          <th>Expenses</th>
                          <th>Savings</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>January</td>
                          <td>$5000</td>
                          <td>$3000</td>
                          <td>$2000</td>
                      </tr>
                      <tr>
                          <td>February</td>
                          <td>$5200</td>
                          <td>$3200</td>
                          <td>$2000</td>
                      </tr>
                      <tr>
                          <td>March</td>
                          <td>$5500</td>
                          <td>$3100</td>
                          <td>$2400</td>
                      </tr>
                  </tbody>
                  <tfoot>
                      <tr>
                          <td>Total</td>
                          <td>$15700</td>
                          <td>$9300</td>
                          <td>$6400</td>
                      </tr>
                  </tfoot>
              </table>
          </body>
          </html>`
      },
      basic_table: {
        html: `<!DOCTYPE html>
          <html>
          <head>
              <title>Basic HTML Table</title>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      line-height: 1.6;
                      margin: 20px;
                  }
                  table {
                      border-collapse: collapse;
                      width: 100%;
                      margin-bottom: 20px;
                  }
                  th, td {
                      border: 1px solid #ddd;
                      padding: 8px;
                      text-align: left;
                  }
                  th {
                      background-color: #f2f2f2;
                  }
                  tr:nth-child(even) {
                      background-color: #f9f9f9;
                  }
              </style>
          </head>
          <body>
              <h1>Basic HTML Table Structure</h1>
              
              <table>
                  <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Age</th>
                  </tr>
                  <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>25</td>
                  </tr>
                  <tr>
                      <td>Jane</td>
                      <td>Smith</td>
                      <td>30</td>
                  </tr>
                  <tr>
                      <td>Bob</td>
                      <td>Johnson</td>
                      <td>45</td>
                  </tr>
              </table>
              
              <h2>Table Elements Explained:</h2>
              <ul>
                  <li><code>&lt;table&gt;</code> - Defines an HTML table</li>
                  <li><code>&lt;tr&gt;</code> - Defines a table row</li>
                  <li><code>&lt;th&gt;</code> - Defines a table header cell</li>
                  <li><code>&lt;td&gt;</code> - Defines a table data cell</li>
              </ul>
              
              <!-- Try adding more rows or columns to the table -->
              
          </body>
          </html>`,
        css: `/* Additional styling for the table */
          table {
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }

          th {
            color: #333;
            font-weight: bold;
          }

          tr:hover {
            background-color: #f1f1f1;
          }

          h1 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
          }

          h2 {
            color: #3498db;
            margin-top: 30px;
          }

          code {
            background-color: #f8f9fa;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: Consolas, Monaco, monospace;
          }`
      },
      colspan_rowspan: {
        html: `<!DOCTYPE html>
            <html>
            <head>
                <title>Table with Colspan and Rowspan</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        margin: 20px;
                    }
                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Table with Colspan and Rowspan</h1>
                
                <h2>Colspan Example</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th colspan="2">Contact Information</th>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>555-1234</td>
                        <td>john@example.com</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>555-5678</td>
                        <td>jane@example.com</td>
                    </tr>
                </table>
                
                <h2>Rowspan Example</h2>
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td rowspan="2">Electronics</td>
                        <td>Laptop</td>
                        <td>$999.99</td>
                    </tr>
                    <tr>
                        <td>Smartphone</td>
                        <td>$699.99</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Clothing</td>
                        <td>T-Shirt</td>
                        <td>$19.99</td>
                    </tr>
                    <tr>
                        <td>Jeans</td>
                        <td>$49.99</td>
                    </tr>
                </table>
                
                <!-- Try modifying the colspan and rowspan values -->
            </body>
            </html>`
      },
      styled_tables: {
        html: `<!DOCTYPE html>
          <html>
          <head>
              <title>Styled HTML Tables</title>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      line-height: 1.6;
                      margin: 20px;
                  }
                  
                  /* Basic table styling */
                  table {
                      border-collapse: collapse;
                      width: 100%;
                      margin-bottom: 20px;
                  }
                  
                  th, td {
                      border: 1px solid #ddd;
                      padding: 8px;
                      text-align: left;
                  }
                  
                  th {
                      background-color: #f2f2f2;
                      font-weight: bold;
                  }
                  
                  caption {
                      font-weight: bold;
                      margin-bottom: 10px;
                      font-size: 1.2em;
                  }
                  
                  /* Zebra striped table */
                  .striped-table tr:nth-child(even) {
                      background-color: #f9f9f9;
                  }
                  
                  /* Fancy table */
                  .fancy-table {
                      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                      border-radius: 5px;
                      overflow: hidden;
                  }
                  
                  .fancy-table th {
                      background-color: #4CAF50;
                      color: white;
                  }
                  
                  .fancy-table tr:hover {
                      background-color: #f1f1f1;
                  }
                  
                  /* Colorful table */
                  .colorful-table th {
                      background-color: #3498db;
                      color: white;
                  }
                  
                  .colorful-table tr:nth-child(odd) {
                      background-color: #e8f4f8;
                  }
                  
                  .colorful-table tr:nth-child(even) {
                      background-color: #d4e6f1;
                  }
                  
                  .colorful-table caption {
                      color: #2980b9;
                  }
              </style>
          </head>
          <body>
              <h1>Styled HTML Tables</h1>
              
              <h2>Zebra Striped Table</h2>
              <table class="striped-table">
                  <caption>Employee List</caption>
                  <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Department</th>
                      <th>Position</th>
                  </tr>
                  <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>Marketing</td>
                      <td>Manager</td>
                  </tr>
                  <tr>
                      <td>Jane</td>
                      <td>Smith</td>
                      <td>Sales</td>
                      <td>Representative</td>
                  </tr>
                  <tr>
                      <td>Bob</td>
                      <td>Johnson</td>
                      <td>IT</td>
                      <td>Developer</td>
                  </tr>
                  <tr>
                      <td>Alice</td>
                      <td>Williams</td>
                      <td>HR</td>
                      <td>Specialist</td>
                  </tr>
              </table>
              
              <h2>Fancy Table</h2>
              <table class="fancy-table">
                  <caption>Product Inventory</caption>
                  <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Stock</th>
                  </tr>
                  <tr>
                      <td>P001</td>
                      <td>Laptop</td>
                      <td>Electronics</td>
                      <td>$999.99</td>
                      <td>15</td>
                  </tr>
                  <tr>
                      <td>P002</td>
                      <td>Smartphone</td>
                      <td>Electronics</td>
                      <td>$699.99</td>
                      <td>25</td>
                  </tr>
                  <tr>
                      <td>P003</td>
                      <td>Headphones</td>
                      <td>Accessories</td>
                      <td>$149.99</td>
                      <td>40</td>
                  </tr>
              </table>
              
              <h2>Colorful Table</h2>
              <table class="colorful-table">
                  <caption>Monthly Budget</caption>
                  <tr>
                      <th>Category</th>
                      <th>Budget</th>
                      <th>Actual</th>
                      <th>Difference</th>
                  </tr>
                  <tr>
                      <td>Housing</td>
                      <td>$1200</td>
                      <td>$1250</td>
                      <td>-$50</td>
                  </tr>
                  <tr>
                      <td>Food</td>
                      <td>$500</td>
                      <td>$450</td>
                      <td>+$50</td>
                  </tr>
                  <tr>
                      <td>Transportation</td>
                      <td>$300</td>
                      <td>$325</td>
                      <td>-$25</td>
                  </tr>
                  <tr>
                      <td>Entertainment</td>
                      <td>$200</td>
                      <td>$175</td>
                      <td>+$25</td>
                  </tr>
              </table>
              
              <!-- Try modifying the styles or creating your own table style -->
          </body>
          </html>`,
        css: `/* You can add additional CSS here */
          /* For example, try creating a new table style */

          .modern-table {
              border: none;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          .modern-table th {
              background-color: #6c5ce7;
              color: white;
              padding: 12px;
              font-weight: 500;
          }

          .modern-table td {
              padding: 12px;
              border: none;
              border-bottom: 1px solid #eee;
          }

          .modern-table tr:last-child td {
              border-bottom: none;
          }

          .modern-table tr:hover {
              background-color: #f7f7ff;
          }

          /* Try applying this class to one of the tables */`
      },
      interactive_tables: {
        html: `<!DOCTYPE html>
          <html>
          <head>
              <title>Interactive Tables</title>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      line-height: 1.6;
                      margin: 20px;
                  }
                  
                  table {
                      border-collapse: collapse;
                      width: 100%;
                      margin-bottom: 20px;
                  }
                  
                  th, td {
                      border: 1px solid #ddd;
                      padding: 8px;
                      text-align: left;
                  }
                  
                  th {
                      background-color: #4CAF50;
                      color: white;
                      cursor: pointer;
                  }
                  
                  tr:nth-child(even) {
                      background-color: #f2f2f2;
                  }
                  
                  tr:hover {
                      background-color: #ddd;
                  }
                  
                  .selected {
                      background-color: #ffffcc !important;
                  }
                  
                  .controls {
                      margin-bottom: 15px;
                  }
                  
                  button {
                      padding: 5px 10px;
                      margin-right: 10px;
                      cursor: pointer;
                  }
                  
                  input[type="text"] {
                      padding: 5px;
                      width: 200px;
                  }
              </style>
          </head>
          <body>
              <h1>Interactive Tables</h1>
              
              <div class="controls">
                  <input type="text" id="search-input" placeholder="Search table...">
                  <button id="add-row">Add New Row</button>
                  <button id="delete-selected">Delete Selected Row</button>
              </div>
              
              <table id="data-table">
                  <thead>
                      <tr>
                          <th data-sort="name">Name</th>
                          <th data-sort="age">Age</th>
                          <th data-sort="city">City</th>
                          <th data-sort="occupation">Occupation</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>John Smith</td>
                          <td>28</td>
                          <td>New York</td>
                          <td>Developer</td>
                      </tr>
                      <tr>
                          <td>Jane Doe</td>
                          <td>32</td>
                          <td>San Francisco</td>
                          <td>Designer</td>
                      </tr>
                      <tr>
                          <td>Bob Johnson</td>
                          <td>45</td>
                          <td>Chicago</td>
                          <td>Manager</td>
                      </tr>
                      <tr>
                          <td>Alice Williams</td>
                          <td>24</td>
                          <td>Boston</td>
                          <td>Engineer</td>
                      </tr>
                      <tr>
                          <td>Charlie Brown</td>
                          <td>38</td>
                          <td>Seattle</td>
                          <td>Architect</td>
                      </tr>
                  </tbody>
              </table>
              
              <p>Features:</p>
              <ul>
                  <li>Click on a row to select it</li>
                  <li>Click on column headers to sort the table</li>
                  <li>Use the search box to filter the table</li>
                  <li>Add new rows with the "Add New Row" button</li>
                  <li>Delete selected rows with the "Delete Selected Row" button</li>
              </ul>
          </body>
          </html>`,
        js: `// Add interactivity to the table
          document.addEventListener("DOMContentLoaded", function() {
              const table = document.getElementById("data-table");
              const tbody = table.querySelector("tbody");
              const searchInput = document.getElementById("search-input");
              const addRowButton = document.getElementById("add-row");
              const deleteSelectedButton = document.getElementById("delete-selected");
              
              // Row selection
              tbody.addEventListener("click", function(e) {
                  const target = e.target.parentNode;
                  if (target.tagName === "TR") {
                      // Toggle selection
                      target.classList.toggle("selected");
                  }
              });
              
              // Column sorting
              table.querySelectorAll("th").forEach(th => {
                  th.addEventListener("click", function() {
                      const sortBy = this.getAttribute("data-sort");
                      const rows = Array.from(tbody.querySelectorAll("tr"));
                      
                      // Determine column index
                      const headerRow = table.querySelector("thead tr");
                      const columnIndex = Array.from(headerRow.children).indexOf(this);
                      
                      // Sort rows
                      rows.sort((a, b) => {
                          const aValue = a.children[columnIndex].textContent;
                          const bValue = b.children[columnIndex].textContent;
                          
                          // Check if values are numbers
                          if (!isNaN(aValue) && !isNaN(bValue)) {
                              return Number(aValue) - Number(bValue);
                          }
                          
                          return aValue.localeCompare(bValue);
                      });
                      
                      // Check if we need to reverse the order (for descending sort)
                      if (this.classList.contains("sorted-asc")) {
                          rows.reverse();
                          this.classList.remove("sorted-asc");
                          this.classList.add("sorted-desc");
                      } else {
                          this.classList.remove("sorted-desc");
                          this.classList.add("sorted-asc");
                      }
                      
                      // Clear any existing sort indicators on other columns
                      table.querySelectorAll("th").forEach(header => {
                          if (header !== this) {
                              header.classList.remove("sorted-asc", "sorted-desc");
                          }
                      });
                      
                      // Reorder the rows in the table
                      rows.forEach(row => tbody.appendChild(row));
                  });
              });
              
              // Search functionality
              searchInput.addEventListener("input", function() {
                  const searchTerm = this.value.toLowerCase();
                  const rows = tbody.querySelectorAll("tr");
                  
                  rows.forEach(row => {
                      const text = row.textContent.toLowerCase();
                      row.style.display = text.includes(searchTerm) ? "" : "none";
                  });
              });
              
              // Add new row
              addRowButton.addEventListener("click", function() {
                  const newRow = document.createElement("tr");
                  
                  // Create a form for adding a new row
                  newRow.innerHTML = \`
                      <td><input type="text" placeholder="Name"></td>
                      <td><input type="text" placeholder="Age"></td>
                      <td><input type="text" placeholder="City"></td>
                      <td><input type="text" placeholder="Occupation"></td>
                  \`;
                  
                  // Add a temporary class to identify this as an editing row
                  newRow.classList.add("editing-row");
                  
                  // Add the row to the table
                  tbody.appendChild(newRow);
                  
                  // Focus the first input
                  newRow.querySelector("input").focus();
                  
                  // Add event listener to save the row when Enter is pressed
                  newRow.addEventListener("keydown", function(e) {
                      if (e.key === "Enter") {
                          const inputs = newRow.querySelectorAll("input");
                          const values = Array.from(inputs).map(input => input.value);
                          
                          // Replace inputs with text
                          newRow.innerHTML = values.map(value => \`<td>\${value}</td>\`).join("");
                          
                          // Remove the editing class
                          newRow.classList.remove("editing-row");
                      }
                  });
              });
              
              // Delete selected row
              deleteSelectedButton.addEventListener("click", function() {
                  const selectedRows = tbody.querySelectorAll("tr.selected");
                  
                  if (selectedRows.length === 0) {
                      alert("Please select a row to delete");
                      return;
                  }
                  
                  selectedRows.forEach(row => {
                      row.remove();
                  });
              });
          });`
          
      }
    }
}