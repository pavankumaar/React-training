import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const RadioGroup = styled.div`
  margin-bottom: 15px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 15px;
`;

const CheckboxOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  
  &:hover {
    background-color: #45a049;
  }
`;

const SubmitInput = styled.input`
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

const Fieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 15px;
`;

const Legend = styled.legend`
  padding: 0 10px;
  font-weight: bold;
`;

const Forms = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day1/tables" 
        nextLink="/day1/images" 
        indexLink="/day1" 
      />
      
      <Title>HTML Forms</Title>
      
      <Example title="Basic Form Structure">
        <p>HTML forms are used to collect user input. The <code>&lt;form&gt;</code> element defines a form:</p>
        
        <CodeBlock>
{`<form action="/submit-form" method="post">
  ... form elements ...
</form>`}
        </CodeBlock>
        
        <h3>Form Attributes:</h3>
        <ul>
          <li><code>action</code> - Specifies where to send the form data when submitted</li>
          <li><code>method</code> - Specifies the HTTP method to use when sending form data (get or post)</li>
          <li><code>target</code> - Specifies where to display the response after submitting the form</li>
          <li><code>enctype</code> - Specifies how form data should be encoded when submitting to the server</li>
        </ul>
      </Example>

      <Example title="Text Input Fields">
        <FormContainer>
          <FormGroup>
            <Label htmlFor="text-input">Text Input:</Label>
            <Input type="text" id="text-input" name="text-input" placeholder="Enter text here" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password-input">Password Input:</Label>
            <Input type="password" id="password-input" name="password-input" placeholder="Enter password" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email-input">Email Input:</Label>
            <Input type="email" id="email-input" name="email-input" placeholder="Enter your email" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="number-input">Number Input:</Label>
            <Input type="number" id="number-input" name="number-input" min="0" max="100" step="1" defaultValue="50" />
          </FormGroup>
        </FormContainer>
        
        <CodeBlock>
{`<label for="text-input">Text Input:</label>
<input type="text" id="text-input" name="text-input" placeholder="Enter text here">

<label for="password-input">Password Input:</label>
<input type="password" id="password-input" name="password-input" placeholder="Enter password">

<label for="email-input">Email Input:</label>
<input type="email" id="email-input" name="email-input" placeholder="Enter your email">

<label for="number-input">Number Input:</label>
<input type="number" id="number-input" name="number-input" min="0" max="100" step="1" value="50">`}
        </CodeBlock>
      </Example>

      <Example title="Selection Elements">
        <FormContainer>
          <FormGroup>
            <Label htmlFor="dropdown">Dropdown Select:</Label>
            <Select id="dropdown" name="dropdown">
              <option value="">-- Select an option --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormGroup>
          
          <RadioGroup>
            <p>Radio Buttons:</p>
            <RadioOption>
              <RadioInput type="radio" id="radio1" name="radio-group" value="option1" />
              <Label htmlFor="radio1">Option 1</Label>
            </RadioOption>
            <RadioOption>
              <RadioInput type="radio" id="radio2" name="radio-group" value="option2" />
              <Label htmlFor="radio2">Option 2</Label>
            </RadioOption>
            <RadioOption>
              <RadioInput type="radio" id="radio3" name="radio-group" value="option3" />
              <Label htmlFor="radio3">Option 3</Label>
            </RadioOption>
          </RadioGroup>
          
          <CheckboxGroup>
            <p>Checkboxes:</p>
            <CheckboxOption>
              <CheckboxInput type="checkbox" id="check1" name="check1" value="option1" />
              <Label htmlFor="check1">Option 1</Label>
            </CheckboxOption>
            <CheckboxOption>
              <CheckboxInput type="checkbox" id="check2" name="check2" value="option2" />
              <Label htmlFor="check2">Option 2</Label>
            </CheckboxOption>
            <CheckboxOption>
              <CheckboxInput type="checkbox" id="check3" name="check3" value="option3" />
              <Label htmlFor="check3">Option 3</Label>
            </CheckboxOption>
          </CheckboxGroup>
        </FormContainer>
        
        <CodeBlock>
{`<!-- Dropdown -->
<label for="dropdown">Dropdown Select:</label>
<select id="dropdown" name="dropdown">
  <option value="">-- Select an option --</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>

<!-- Radio Buttons -->
<p>Radio Buttons:</p>
<input type="radio" id="radio1" name="radio-group" value="option1">
<label for="radio1">Option 1</label>

<input type="radio" id="radio2" name="radio-group" value="option2">
<label for="radio2">Option 2</label>

<input type="radio" id="radio3" name="radio-group" value="option3">
<label for="radio3">Option 3</label>

<!-- Checkboxes -->
<p>Checkboxes:</p>
<input type="checkbox" id="check1" name="check1" value="option1">
<label for="check1">Option 1</label>

<input type="checkbox" id="check2" name="check2" value="option2">
<label for="check2">Option 2</label>

<input type="checkbox" id="check3" name="check3" value="option3">
<label for="check3">Option 3</label>`}
        </CodeBlock>
      </Example>

      <Example title="Other Input Types">
        <FormContainer>
          <FormGroup>
            <Label htmlFor="date-input">Date Input:</Label>
            <Input type="date" id="date-input" name="date-input" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="time-input">Time Input:</Label>
            <Input type="time" id="time-input" name="time-input" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="color-input">Color Input:</Label>
            <Input type="color" id="color-input" name="color-input" defaultValue="#4CAF50" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="range-input">Range Input:</Label>
            <Input type="range" id="range-input" name="range-input" min="0" max="100" defaultValue="50" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="file-input">File Input:</Label>
            <Input type="file" id="file-input" name="file-input" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="textarea">Textarea:</Label>
            <Textarea id="textarea" name="textarea" rows="4" placeholder="Enter your message here"></Textarea>
          </FormGroup>
        </FormContainer>
        
        <CodeBlock>
{`<label for="date-input">Date Input:</label>
<input type="date" id="date-input" name="date-input">

<label for="time-input">Time Input:</label>
<input type="time" id="time-input" name="time-input">

<label for="color-input">Color Input:</label>
<input type="color" id="color-input" name="color-input" value="#4CAF50">

<label for="range-input">Range Input:</label>
<input type="range" id="range-input" name="range-input" min="0" max="100" value="50">

<label for="file-input">File Input:</label>
<input type="file" id="file-input" name="file-input">

<label for="textarea">Textarea:</label>
<textarea id="textarea" name="textarea" rows="4" placeholder="Enter your message here"></textarea>`}
        </CodeBlock>
      </Example>

      <Example title="Form Buttons">
        <FormContainer>
          <div>
            <SubmitInput type="submit" value="Submit Button (Input)" />
          </div>
          <br />
          <div>
            <Button type="submit">Submit Button (Button Element)</Button>
          </div>
          <br />
          <div>
            <Button type="reset">Reset Form</Button>
          </div>
          <br />
          <div>
            <Button type="button">Regular Button (No Form Action)</Button>
          </div>
        </FormContainer>
        
        <CodeBlock>
{`<input type="submit" value="Submit Button (Input)">

<button type="submit">Submit Button (Button Element)</button>

<button type="reset">Reset Form</button>

<button type="button">Regular Button (No Form Action)</button>`}
        </CodeBlock>
      </Example>

      <Example title="Form Organization with Fieldset">
        <FormContainer>
          <Fieldset>
            <Legend>Personal Information</Legend>
            
            <FormGroup>
              <Label htmlFor="name">Full Name:</Label>
              <Input type="text" id="name" name="name" placeholder="Enter your full name" />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input type="email" id="email" name="email" placeholder="Enter your email" />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="phone">Phone:</Label>
              <Input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
            </FormGroup>
          </Fieldset>
          
          <Fieldset>
            <Legend>Address</Legend>
            
            <FormGroup>
              <Label htmlFor="street">Street:</Label>
              <Input type="text" id="street" name="street" placeholder="Enter street address" />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="city">City:</Label>
              <Input type="text" id="city" name="city" placeholder="Enter city" />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="zip">Zip Code:</Label>
              <Input type="text" id="zip" name="zip" placeholder="Enter zip code" />
            </FormGroup>
          </Fieldset>
        </FormContainer>
      </Example>
      
      
      
      <Navigation 
        prevLink="/day1/tables" 
        nextLink="/day1/images" 
        indexLink="/day1" 
      />
    </Layout>
  );
};

export default Forms;