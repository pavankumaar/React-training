import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';
import { day1EditorContent } from './day1_editor_content';

// Define the image path - hardcoded to ensure it works in all environments
const imagePath = '/image.jpg';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const ImageContainer = styled.div`
  margin: 15px 0;
`;

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px 0;
`;

const GalleryImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 1px solid #ddd;
`;

const FloatLeftImage = styled.img`
  float: left;
  margin-right: 15px;
  margin-bottom: 10px;
`;

const FloatRightImage = styled.img`
  float: right;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const ClearFix = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const Figure = styled.figure`
  margin: 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: inline-block;
`;

const Figcaption = styled.figcaption`
  text-align: center;
  font-style: italic;
  margin-top: 8px;
`;

const BackgroundImageDiv = styled.div`
  width: 500px;
  height: 400px;
  background-image: url('/image.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

const Images = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day1/forms" 
        nextLink="/day2/css-introduction" 
        indexLink="/day1" 
      />
      
      <Title>HTML Images</Title>
      
      <Example title="Basic Image Syntax">
        <p>The <code>&lt;img&gt;</code> tag is used to embed images in an HTML page:</p>
        
        <ImageContainer>
          <img src={imagePath} alt="Placeholder Img" />
        </ImageContainer>
        
        <CodeBlock>
{`<img src="/image.jpg" alt="Description of the image">`}
        </CodeBlock>
        
        <h3>Required Attributes:</h3>
        <ul>
          <li><code>src</code> - Specifies the path to the image</li>
          <li><code>alt</code> - Provides alternative text for the image (for accessibility and if the image cannot be displayed)</li>
        </ul>
        
        <TryEditorButton
          htmlCode={day1EditorContent.images.basic_image.html}
          cssCode={day1EditorContent.images.basic_image.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example title="Image Size Attributes">
        <p>You can specify the width and height of an image using the <code>width</code> and <code>height</code> attributes:</p>
        
        <ImageContainer>
          <img src={imagePath} alt="Resized Img" width="300" height="200" />
        </ImageContainer>
        
        <CodeBlock>
{`<img src="/image.jpg" alt="Resized Image" width="300" height="200">`}
        </CodeBlock>
        
        <p>Note: It's a good practice to specify both width and height to prevent layout shifts during page loading.</p>
        
        <TryEditorButton
          htmlCode={day1EditorContent.images.image_size.html}
          cssCode={day1EditorContent.images.image_size.css}
          jsCode={day1EditorContent.images.image_size.js}
          enabledTabs={{ html: true, css: true, js: true }}
        />
      </Example>

      <Example title="Responsive Images">
        <p>To make images responsive (scale with the browser window), you can use CSS:</p>
        
        <ImageContainer>
          <ResponsiveImage src={imagePath} alt="Responsive Image" />
        </ImageContainer>
        
        <CodeBlock>
{`<img src="/image.jpg" alt="Responsive Image" class="img-responsive">`}
        </CodeBlock>
        
        <p>CSS used:</p>
        <CodeBlock>
{`.img-responsive {
  max-width: 100%;
  height: auto;
}`}
        </CodeBlock>
        
        <TryEditorButton
          htmlCode={day1EditorContent.images.responsive_image.html}
          cssCode={day1EditorContent.images.responsive_image.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example title="Image as a Link">
        <p>Images can be used as links by placing them inside an <code>&lt;a&gt;</code> tag:</p>
        
        <ImageContainer>
          <a href="https://example.com">
            <img src={imagePath} alt="Clickable Img" width="200" height="100" />
          </a>
        </ImageContainer>
        
        <CodeBlock>
{`<a href="https://example.com">
  <img src="/image.jpg" alt="Clickable Image">
</a>`}
        </CodeBlock>
        
        <TryEditorButton
          htmlCode={day1EditorContent.images.image_as_link.html}
          cssCode={day1EditorContent.images.image_as_link.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example title="Image Formats">
        <p>Common web image formats include:</p>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Format</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>File Extension</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Best For</th>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>JPEG/JPG</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>.jpg, .jpeg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Photographs, complex images with many colors</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>PNG</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>.png</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Images requiring transparency, logos, icons</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>GIF</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>.gif</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Simple animations, images with few colors</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>SVG</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>.svg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Vector graphics, logos, icons (scalable without quality loss)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>WebP</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>.webp</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Modern format with better compression and quality</td>
          </tr>
        </table>
      </Example>

      <Example title="Figure and Caption">
        <p>The <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements provide a semantic way to associate captions with images:</p>
        
        <Figure>
          <img src={imagePath} alt="Figure Example" width="400" height="300" />
          <Figcaption>Fig.1 - This is a caption for the image above.</Figcaption>
        </Figure>
        
        <CodeBlock>
{`<figure>
  <img src="/image.jpg" alt="Figure Example">
  <figcaption>Fig.1 - This is a caption for the image above.</figcaption>
</figure>`}
        </CodeBlock>
        
        <TryEditorButton
          htmlCode={day1EditorContent.images.figure_caption.html}
          cssCode={day1EditorContent.images.figure_caption.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example title="Background Images with CSS">
        <p>Images can also be added as backgrounds using CSS:</p>
        
        <BackgroundImageDiv />
        
        <CodeBlock>
{`<div style="width: 500px; height: 400px; background-image: url('/image.jpg'); background-size: cover; background-position: center;"></div>`}
        </CodeBlock>
        
        <p>CSS properties for background images:</p>
        <ul>
          <li><code>background-image</code> - Sets the background image</li>
          <li><code>background-size</code> - Controls the size of the background image</li>
          <li><code>background-position</code> - Sets the starting position of the background image</li>
          <li><code>background-repeat</code> - Controls if/how the background image repeats</li>
        </ul>
        
        <TryEditorButton
          htmlCode={day1EditorContent.images.background_image.html}
          cssCode={day1EditorContent.images.background_image.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example title="Image Floating">
        <p>Images can be floated to allow text to wrap around them:</p>
        
        <ClearFix>
          <FloatLeftImage src={imagePath} alt="Left Floating Image" width="150" height="150" />
          <p>This is an example of text wrapping around an image that is floated to the left. The float property is commonly used to create text wrapping around images. This creates a nice layout where the image is positioned on one side and the text flows around it. You can use this technique for things like article layouts, blog posts, or any content where you want to combine images with text in a visually appealing way.</p>
        </ClearFix>
        
        <ClearFix>
          <FloatRightImage src={imagePath} alt="Right Floating Image" width="150" height="150" />
          <p>This is an example of text wrapping around an image that is floated to the right. Notice how the text flows around the left side of the image. Floating elements to the right is useful when you want the image to appear on the right side of your content. Remember to use a clearfix to prevent layout issues when using floated elements.</p>
        </ClearFix>
        
        <CodeBlock>
{`<!-- Left float -->
<div class="clearfix">
  <img src="/image.jpg" alt="Left Floating Image" class="img-float-left">
  <p>This is an example of text wrapping around an image...</p>
</div>

<!-- CSS -->
.img-float-left {
  float: left;
  margin-right: 15px;
  margin-bottom: 10px;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}`}
        </CodeBlock>
        
        <TryEditorButton
          htmlCode={day1EditorContent.images.image_floating.html}
          cssCode={day1EditorContent.images.image_floating.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example title="Image Gallery Example">
        <p>A simple image gallery using CSS Flexbox:</p>
        
        <ImageGallery>
          <GalleryImage src={imagePath} alt="Gallery Image 1" />
          <GalleryImage src={imagePath} alt="Gallery Image 2" />
          <GalleryImage src={imagePath} alt="Gallery Image 3" />
          <GalleryImage src={imagePath} alt="Gallery Image 4" />
          <GalleryImage src={imagePath} alt="Gallery Image 5" />
          <GalleryImage src={imagePath} alt="Gallery Image 6" />
        </ImageGallery>
        
        <CodeBlock>
{`<div class="img-gallery">
  <img src="/image.jpg" alt="Gallery Image 1">
  <img src="/image.jpg" alt="Gallery Image 2">
  <img src="/image.jpg" alt="Gallery Image 3">
  <img src="/image.jpg" alt="Gallery Image 4">
  <img src="/image.jpg" alt="Gallery Image 5">
  <img src="/image.jpg" alt="Gallery Image 6">
</div>

<!-- CSS -->
.img-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.img-gallery img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}`}
        </CodeBlock>
        
        <TryEditorButton
          htmlCode={day1EditorContent.images.image_gallery.html}
          cssCode={day1EditorContent.images.image_gallery.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example title="Accessibility Best Practices">
        <ul>
          <li>Always include meaningful <code>alt</code> text for images</li>
          <li>For decorative images that don't add content, use <code>alt=""</code></li>
          <li>Make sure there's enough contrast between text and background images</li>
          <li>Don't rely solely on images to convey important information</li>
          <li>Consider using the <code>loading="lazy"</code> attribute for images below the fold to improve page performance</li>
        </ul>
        
        <CodeBlock>
{`<!-- Informative image with alt text -->
<img src="/image.jpg" alt="Sales chart showing 20% increase in Q4 2023">

<!-- Decorative image -->
<img src="/image.jpg" alt="">

<!-- Lazy loading -->
<img src="/image.jpg" alt="Description" loading="lazy">`}
        </CodeBlock>
        
        <TryEditorButton
          htmlCode={day1EditorContent.images.accessibility.html}
          cssCode={day1EditorContent.images.accessibility.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>
      
      <Navigation 
        prevLink="/day1/forms" 
        nextLink="/day2/css-introduction" 
        indexLink="/day1" 
      />
    </Layout>
  );
};

export default Images;