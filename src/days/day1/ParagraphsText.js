import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import CompleteButton from '../../components/CompleteButton';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
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
      />
      
      <Title>HTML Paragraphs and Text Formatting</Title>
      
      <Example title="Paragraphs">
        <p>This is a paragraph. Paragraphs are defined with the &lt;p&gt; tag.</p>
        <p>This is another paragraph. HTML automatically adds space before and after each paragraph.</p>
        
        <CodeBlock>
{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}
        </CodeBlock>
      </Example>

      <Example title="Line Breaks">
        <p>This is a paragraph with a line break.<br/>The text continues on a new line after the break.</p>
        
        <CodeBlock>
{`<p>This is a paragraph with a line break.<br>The text continues on a new line after the break.</p>`}
        </CodeBlock>
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
      </Example>
      
      
      
      <Navigation 
        prevLink="/day1/headings" 
        nextLink="/day1/attributes" 
        indexLink="/day1" 
      />
    </Layout>
  );
};

export default ParagraphsText;