import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';
import { day1EditorContent } from './day1_editor_content';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const HeadingExample = styled.div`
  margin-bottom: 1.5rem;
`;

const Headings = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day1/html-basics" 
        nextLink="/day1/paragraphs-text" 
        indexLink="/day1" 
      />
      
      <Title>HTML Headings</Title>
      
      <Example>
        <p>HTML provides six levels of headings, from h1 (most important) to h6 (least important):</p>
        
        <HeadingExample>
          <h1>This is Heading 1 (h1)</h1>
          <h2>This is Heading 2 (h2)</h2>
          <h3>This is Heading 3 (h3)</h3>
          <h4>This is Heading 4 (h4)</h4>
          <h5>This is Heading 5 (h5)</h5>
          <h6>This is Heading 6 (h6)</h6>
        </HeadingExample>
        
        <TryEditorButton
          htmlCode={day1EditorContent.headings.six_levels.html}
          cssCode={day1EditorContent.headings.six_levels.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Section>
        <SectionTitle>Best Practices for Headings</SectionTitle>
        <ul>
          <li>Use <code>&lt;h1&gt;</code> for the main heading of the page (typically only once per page)</li>
          <li>Use headings in order (h1, then h2, etc.) without skipping levels</li>
          <li>Don't use headings just to make text bold or large</li>
          <li>Use headings to create a logical structure for your content</li>
        </ul>
        
        <TryEditorButton
          htmlCode={day1EditorContent.headings.best_practices.html}
          cssCode={day1EditorContent.headings.best_practices.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Section>

      <Section>
        <SectionTitle>Semantic Importance</SectionTitle>
        <p>Headings are not just for visual styling. They provide structure to your document and are important for:</p>
        <ul>
          <li>Accessibility (screen readers use headings to navigate)</li>
          <li>SEO (search engines use headings to understand content)</li>
          <li>User experience (helps users scan content)</li>
        </ul>
        
        <TryEditorButton
          htmlCode={day1EditorContent.headings.semantic_importance.html}
          cssCode={day1EditorContent.headings.semantic_importance.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Section>

      <Example title="Heading Code Example">
        <p>Here's how to write headings in HTML:</p>
        <CodeBlock>
          {`<h1>This is a level 1 heading</h1>
          <h2>This is a level 2 heading</h2>
          <h3>This is a level 3 heading</h3>
          <h4>This is a level 4 heading</h4>
          <h5>This is a level 5 heading</h5>
          <h6>This is a level 6 heading</h6>`}
        </CodeBlock>
        
        <TryEditorButton
          htmlCode={day1EditorContent.headings.how_to_write.html}
          cssCode={`/* Additional CSS can be added here */`}
          jsCode={`// JavaScript is not needed for this example`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>
      
      
      
      <Navigation 
        prevLink="/day1/html-basics" 
        nextLink="/day1/paragraphs-text" 
        indexLink="/day1" 
      />
    </Layout>
  );
};

export default Headings;