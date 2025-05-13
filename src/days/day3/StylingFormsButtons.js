import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

// Styled form elements for examples
const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: var(--text-color);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  box-sizing: border-box;
  background-color: var(--card-background);
  color: var(--text-color);
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 5px var(--primary-color);
  }
  
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 15px;
  }
  
  @media (max-width: 576px) {
    padding: 7px;
    font-size: 14px;
  }
  
  @media (max-width: 375px) {
    padding: 6px;
    font-size: 13px;
  }
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  box-sizing: border-box;
  background-color: var(--card-background);
  color: var(--text-color);
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 5px var(--primary-color);
  }
  
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 15px;
  }
  
  @media (max-width: 576px) {
    padding: 7px;
    font-size: 14px;
  }
  
  @media (max-width: 375px) {
    padding: 6px;
    font-size: 13px;
  }
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  box-sizing: border-box;
  background-color: var(--card-background);
  color: var(--text-color);
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 5px var(--primary-color);
  }
  
  option {
    background-color: var(--card-background);
    color: var(--text-color);
  }
  
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 15px;
  }
  
  @media (max-width: 576px) {
    padding: 7px;
    font-size: 14px;
  }
  
  @media (max-width: 375px) {
    padding: 6px;
    font-size: 13px;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2980b9;
  }
  
  &:active {
    background-color: #1f6da8;
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 15px;
  }
  
  @media (max-width: 576px) {
    padding: 7px 14px;
    font-size: 14px;
  }
  
  @media (max-width: 375px) {
    padding: 6px 12px;
    font-size: 13px;
  }
`;

const SuccessButton = styled(Button)`
  background-color: #2ecc71;
  
  &:hover {
    background-color: #27ae60;
  }
  
  &:active {
    background-color: #219653;
  }
`;

const WarningButton = styled(Button)`
  background-color: #f39c12;
  
  &:hover {
    background-color: #e67e22;
  }
  
  &:active {
    background-color: #d35400;
  }
`;

const DangerButton = styled(Button)`
  background-color: #e74c3c;
  
  &:hover {
    background-color: #c0392b;
  }
  
  &:active {
    background-color: #a93226;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;

const StylingFormsButtons = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day3/flexbox-grid" 
        nextLink="/day3/responsive-design" 
        indexLink="/day3"
        title="Styling Forms & Buttons"
        subtitle="Learn how to create attractive and user-friendly forms and buttons with CSS"
      />
      
      <Section>
        <SectionTitle>Form Styling Basics</SectionTitle>
        <p>
          Forms are an essential part of web applications, allowing users to input data and interact with your site.
          Styling forms properly can greatly improve user experience and make your forms more accessible.
        </p>
        <p>
          Here are some key aspects to consider when styling forms:
        </p>
        <ul>
          <li>Consistent layout and spacing</li>
          <li>Clear labels and instructions</li>
          <li>Visual feedback for interactions (focus, hover, etc.)</li>
          <li>Proper sizing for input fields</li>
          <li>Mobile-friendly design</li>
        </ul>
      </Section>
      
      <Example title="Basic Form Styling">
        <p>Here's a simple form with basic styling:</p>
        <CodeBlock>
{`.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

.form-control {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
}

.form-control:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}`}
        </CodeBlock>
        
        <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '4px' }}>
          <form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Enter your name" />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows="4" placeholder="Enter your message"></Textarea>
            </FormGroup>
            
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Example>
      
      <Section>
        <SectionTitle>Input Types and Styling</SectionTitle>
        <p>
          HTML provides various input types for different kinds of data. Each type can be styled differently
          to provide a better user experience.
        </p>
        
        <h3>Common Input Types:</h3>
        <ul>
          <li><strong>text</strong>: For general text input</li>
          <li><strong>email</strong>: For email addresses</li>
          <li><strong>password</strong>: For password input (characters are masked)</li>
          <li><strong>number</strong>: For numeric input</li>
          <li><strong>date</strong>: For date selection</li>
          <li><strong>checkbox</strong>: For boolean (yes/no) options</li>
          <li><strong>radio</strong>: For selecting one option from many</li>
          <li><strong>select</strong>: For dropdown selection</li>
          <li><strong>textarea</strong>: For multi-line text input</li>
        </ul>
      </Section>
      
      <Example title="Different Input Types">
        <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '4px' }}>
          <FormGroup>
            <Label htmlFor="text-input">Text Input</Label>
            <Input type="text" id="text-input" placeholder="Enter text" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email-input">Email Input</Label>
            <Input type="email" id="email-input" placeholder="Enter email" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password-input">Password Input</Label>
            <Input type="password" id="password-input" placeholder="Enter password" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="select-input">Select Input</Label>
            <Select id="select-input">
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormGroup>
        </div>
      </Example>
      
      <Section>
        <SectionTitle>Button Styling</SectionTitle>
        <p>
          Buttons are interactive elements that trigger actions in your application. Styling buttons properly
          helps users understand what actions they can take and provides visual feedback for interactions.
        </p>
        
        <h3>Button States:</h3>
        <ul>
          <li><strong>Default</strong>: The normal state of the button</li>
          <li><strong>Hover</strong>: When the user hovers over the button</li>
          <li><strong>Active</strong>: When the button is being clicked</li>
          <li><strong>Focus</strong>: When the button is focused (e.g., via keyboard navigation)</li>
          <li><strong>Disabled</strong>: When the button is not available for interaction</li>
        </ul>
      </Section>
      
      <Example title="Button Styling">
        <CodeBlock>
{`.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2980b9;
}

.btn:active {
  background-color: #1f6da8;
}

.btn-success {
  background-color: #2ecc71;
}

.btn-success:hover {
  background-color: #27ae60;
}

.btn-warning {
  background-color: #f39c12;
}

.btn-warning:hover {
  background-color: #e67e22;
}

.btn-danger {
  background-color: #e74c3c;
}

.btn-danger:hover {
  background-color: #c0392b;
}`}
        </CodeBlock>
        
        <div style={{ marginTop: '20px' }}>
          <h3>Button Examples:</h3>
          <ButtonGroup>
            <Button>Default Button</Button>
            <SuccessButton>Success Button</SuccessButton>
            <WarningButton>Warning Button</WarningButton>
            <DangerButton>Danger Button</DangerButton>
          </ButtonGroup>
        </div>
      </Example>
      
      <Section>
        <SectionTitle>Form Layout Techniques</SectionTitle>
        <p>
          Organizing form elements in a clear and logical layout is crucial for usability. Here are some common
          layout techniques:
        </p>
        
        <h3>1. Vertical Layout</h3>
        <p>
          The most common layout, with form fields stacked vertically. This works well for most forms and is
          mobile-friendly by default.
        </p>
        
        <h3>2. Horizontal Layout</h3>
        <p>
          Form fields are arranged horizontally, which can be useful for short forms or related fields.
        </p>
        
        <h3>3. Grid Layout</h3>
        <p>
          Using CSS Grid or Flexbox to create more complex form layouts, especially for forms with many fields.
        </p>
        
        <h3>4. Multi-column Layout</h3>
        <p>
          Organizing fields into multiple columns to make better use of available space on larger screens.
        </p>
      </Section>
      
      <Example title="Responsive Form Layout">
        <p>Here's an example of a responsive form layout using Flexbox:</p>
        <CodeBlock>
{`.responsive-form {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.form-column {
  flex: 1 1 300px;
}

@media (max-width: 768px) {
  .responsive-form {
    flex-direction: column;
  }
}`}
        </CodeBlock>
        
        <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '4px' }}>
          <h3>Contact Form</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
            <div style={{ flex: '1 1 300px' }}>
              <FormGroup>
                <Label htmlFor="resp-name">Full Name</Label>
                <Input type="text" id="resp-name" placeholder="Enter your full name" />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="resp-email">Email</Label>
                <Input type="email" id="resp-email" placeholder="Enter your email" />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="resp-phone">Phone</Label>
                <Input type="tel" id="resp-phone" placeholder="Enter your phone number" />
              </FormGroup>
            </div>
            
            <div style={{ flex: '1 1 300px' }}>
              <FormGroup>
                <Label htmlFor="resp-subject">Subject</Label>
                <Input type="text" id="resp-subject" placeholder="Enter subject" />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="resp-message">Message</Label>
                <Textarea id="resp-message" rows="5" placeholder="Enter your message"></Textarea>
              </FormGroup>
              
              <Button type="submit">Send Message</Button>
            </div>
          </div>
        </div>
      </Example>
      
      
      
      <Navigation 
        prevLink="/day3/flexbox-grid" 
        nextLink="/day3/responsive-design" 
        indexLink="/day3"
        title="Styling Forms & Buttons"
        subtitle="Learn how to create attractive and user-friendly forms and buttons with CSS"
      />
    </Layout>
  );
};

export default StylingFormsButtons;