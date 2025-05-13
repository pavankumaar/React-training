import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';
import TryEditorButton from '../../components/TryEditorButton';

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
  color: var(--text-color);
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-sizing: border-box;
  background-color: var(--card-background);
  color: var(--text-color);
  transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
  
  @media (max-width: 768px) {
    padding: 7px;
    margin-bottom: 12px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    padding: 6px;
    margin-bottom: 10px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 375px) {
    padding: 5px;
    margin-bottom: 8px;
    font-size: 0.85rem;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-sizing: border-box;
  background-color: var(--card-background);
  color: var(--text-color);
  transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
  
  option {
    background-color: var(--card-background);
    color: var(--text-color);
  }
  
  @media (max-width: 768px) {
    padding: 7px;
    margin-bottom: 12px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    padding: 6px;
    margin-bottom: 10px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 375px) {
    padding: 5px;
    margin-bottom: 8px;
    font-size: 0.85rem;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-sizing: border-box;
  background-color: var(--card-background);
  color: var(--text-color);
  transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
  
  @media (max-width: 768px) {
    padding: 7px;
    margin-bottom: 12px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    padding: 6px;
    margin-bottom: 10px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 375px) {
    padding: 5px;
    margin-bottom: 8px;
    font-size: 0.85rem;
  }
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
  background-color: var(--success-color);
  color: var(--button-text);
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-dark);
  }
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.95rem;
    margin-right: 8px;
  }
  
  @media (max-width: 576px) {
    padding: 7px 10px;
    font-size: 0.9rem;
    margin-right: 6px;
  }
  
  @media (max-width: 375px) {
    padding: 6px 8px;
    font-size: 0.85rem;
    margin-right: 5px;
  }
`;

const SubmitInput = styled.input`
  background-color: var(--success-color);
  color: var(--button-text);
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-dark);
  }
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    padding: 7px 10px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 375px) {
    padding: 6px 8px;
    font-size: 0.85rem;
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
        title="HTML Forms"
        subtitle="Understand how to create interactive forms with various input types"
      />
      
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
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>Basic Form Structure</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 600px;
            margin: 0 auto;
        }
        
        h1 {
            color: #333;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        
        form {
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 5px;
            background-color: #f9f9f9;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="password"],
        textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            box-sizing: border-box;
            background-color: var(--card-background);
            color: var(--text-color);
        }
        
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Basic Form Structure</h1>
    
    <!-- Basic form with action and method attributes -->
    <form action="/submit-form" method="post">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name">
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email">
        </div>
        
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
        
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </form>
    
    <h2>Form Attributes Explained:</h2>
    <ul>
        <li><code>action</code> - Specifies where to send the form data when submitted</li>
        <li><code>method</code> - Specifies the HTTP method to use when sending form data (get or post)</li>
        <li><code>target</code> - Specifies where to display the response after submitting the form</li>
        <li><code>enctype</code> - Specifies how form data should be encoded when submitting to the server</li>
    </ul>
    
    <!-- Try modifying the form or adding more form elements -->
    
</body>
</html>`}
          cssCode={`/* Additional styling for the form */
form {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

button {
  transition: background-color 0.3s ease;
}

.form-group:focus-within {
  background-color: #f0f7ff;
  padding: 10px;
  border-radius: 4px;
  margin: 0 -10px 15px -10px;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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
        
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
            <html>
            <head>
                <title>HTML Form Input Fields</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        margin: 20px;
                        max-width: 600px;
                        margin: 0 auto;
                    }
                    
                    h1 {
                        color: #333;
                        border-bottom: 1px solid #ddd;
                        padding-bottom: 10px;
                    }
                    
                    form {
                        border: 1px solid #ddd;
                        padding: 20px;
                        border-radius: 5px;
                        background-color: #f9f9f9;
                    }
                    
                    .form-group {
                        margin-bottom: 15px;
                    }
                    
                    label {
                        display: block;
                        margin-bottom: 5px;
                        font-weight: bold;
                    }
                    
                    input {
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        box-sizing: border-box;
                    }
                    
                    .note {
                        font-size: 0.9em;
                        color: #666;
                        margin-top: 5px;
                    }
                </style>
            </head>
            <body>
                <h1>Text Input Fields</h1>
                
                <form>
                    <div class="form-group">
                        <label for="text-input">Text Input:</label>
                        <input type="text" id="text-input" name="text-input" placeholder="Enter text here">
                        <div class="note">Basic text input for names, titles, etc.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="password-input">Password Input:</label>
                        <input type="password" id="password-input" name="password-input" placeholder="Enter password">
                        <div class="note">Masks the characters as they are typed</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="email-input">Email Input:</label>
                        <input type="email" id="email-input" name="email-input" placeholder="Enter your email">
                        <div class="note">Validates that the input is in email format</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="number-input">Number Input:</label>
                        <input type="number" id="number-input" name="number-input" min="0" max="100" step="1" value="50">
                        <div class="note">Only allows numeric input with min, max, and step controls</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="tel-input">Telephone Input:</label>
                        <input type="tel" id="tel-input" name="tel-input" placeholder="Enter your phone number">
                        <div class="note">Optimized for telephone number input</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="url-input">URL Input:</label>
                        <input type="url" id="url-input" name="url-input" placeholder="https://example.com">
                        <div class="note">Validates that the input is in URL format</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="search-input">Search Input:</label>
                        <input type="search" id="search-input" name="search-input" placeholder="Search...">
                        <div class="note">Optimized for search queries</div>
                    </div>
                </form>
                
                <!-- Try modifying the input types or adding more input fields -->
                
            </body>
            </html>`}
            cssCode={`/* Additional styling for the form inputs */
            input:focus {
              outline: none;
              border-color: #4CAF50;
              box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
            }

            input[type="number"] {
              appearance: textfield;
            }

            input[type="number"]::-webkit-inner-spin-button, 
            input[type="number"]::-webkit-outer-spin-button { 
              -webkit-appearance: none; 
              margin: 0; 
            }

            input[type="search"] {
              border-radius: 20px;
              padding-left: 15px;
              background-color: var(--card-background);
              color: var(--text-color);
              border: 1px solid var(--border-color);
            }

            input[type="email"]:valid {
              border-color: var(--success-color);
            }

            input[type="email"]:invalid {
              border-color: var(--danger-color);
            }

            .form-group:hover .note {
              color: #333;
            }`}
          enabledTabs={{ html: true, css: true, js: false }}
        />
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

        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Form Selection Elements</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        
        form {
            max-width: 500px;
            margin: 0 auto;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        
        .radio-group, .checkbox-group {
            margin-top: 10px;
        }
        
        .radio-option, .checkbox-option {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
        }
        
        .radio-option input, .checkbox-option input {
            margin-right: 10px;
        }
        
        .description {
            font-size: 0.8em;
            color: #666;
            margin-top: 3px;
        }
    </style>
</head>
<body>
    <h1>HTML Form Selection Elements</h1>
    
    <form>
        <div class="form-group">
            <label for="dropdown">Dropdown Select:</label>
            <select id="dropdown" name="dropdown">
                <option value="">-- Select an option --</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <div class="description">Standard dropdown selection.</div>
        </div>
        
        <div class="form-group">
            <label for="multiple-select">Multiple Select:</label>
            <select id="multiple-select" name="multiple-select" multiple size="4">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
                <option value="option5">Option 5</option>
            </select>
            <div class="description">Allows multiple selections (hold Ctrl/Cmd to select multiple).</div>
        </div>
        
        <div class="form-group">
            <label>Radio Buttons:</label>
            <div class="radio-group">
                <div class="radio-option">
                    <input type="radio" id="radio1" name="radio-group" value="option1">
                    <label for="radio1">Option 1</label>
                </div>
                <div class="radio-option">
                    <input type="radio" id="radio2" name="radio-group" value="option2">
                    <label for="radio2">Option 2</label>
                </div>
                <div class="radio-option">
                    <input type="radio" id="radio3" name="radio-group" value="option3">
                    <label for="radio3">Option 3</label>
                </div>
            </div>
            <div class="description">Allows selection of only one option from a group.</div>
        </div>
        
        <div class="form-group">
            <label>Checkboxes:</label>
            <div class="checkbox-group">
                <div class="checkbox-option">
                    <input type="checkbox" id="check1" name="check1" value="option1">
                    <label for="check1">Option 1</label>
                </div>
                <div class="checkbox-option">
                    <input type="checkbox" id="check2" name="check2" value="option2">
                    <label for="check2">Option 2</label>
                </div>
                <div class="checkbox-option">
                    <input type="checkbox" id="check3" name="check3" value="option3">
                    <label for="check3">Option 3</label>
                </div>
            </div>
            <div class="description">Allows selection of multiple options.</div>
        </div>
        
        <div class="form-group">
            <label for="datalist-input">Datalist Input:</label>
            <input type="text" id="datalist-input" name="datalist-input" list="options" placeholder="Type or select an option">
            <datalist id="options">
                <option value="Apple">
                <option value="Banana">
                <option value="Cherry">
                <option value="Durian">
                <option value="Elderberry">
            </datalist>
            <div class="description">Combines text input with predefined options.</div>
        </div>
    </form>
    
    <!-- Try modifying the selection elements or adding more options -->
</body>
</html>`}
          enabledTabs={{ html: true }}
        />

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

        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
            <html>
            <head>
                <title>HTML Form Specialized Inputs</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        margin: 20px;
                    }
                    
                    form {
                        max-width: 500px;
                        margin: 0 auto;
                    }
                    
                    .form-group {
                        margin-bottom: 20px;
                    }
                    
                    label {
                        display: block;
                        margin-bottom: 5px;
                        font-weight: bold;
                    }
                    
                    input {
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        box-sizing: border-box;
                    }
                    
                    textarea {
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        box-sizing: border-box;
                        resize: vertical;
                    }
                    
                    .description {
                        font-size: 0.8em;
                        color: #666;
                        margin-top: 3px;
                    }
                </style>
            </head>
            <body>
                <h1>HTML Form Specialized Inputs</h1>
                
                <form>
                    <div class="form-group">
                        <label for="date-input">Date Input:</label>
                        <input type="date" id="date-input" name="date-input">
                        <div class="description">Provides a date picker.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="time-input">Time Input:</label>
                        <input type="time" id="time-input" name="time-input">
                        <div class="description">Provides a time picker.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="datetime-input">Date and Time Input:</label>
                        <input type="datetime-local" id="datetime-input" name="datetime-input">
                        <div class="description">Provides a date and time picker.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="month-input">Month Input:</label>
                        <input type="month" id="month-input" name="month-input">
                        <div class="description">Allows selection of a month and year.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="week-input">Week Input:</label>
                        <input type="week" id="week-input" name="week-input">
                        <div class="description">Allows selection of a week and year.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="color-input">Color Input:</label>
                        <input type="color" id="color-input" name="color-input" value="#4CAF50">
                        <div class="description">Provides a color picker.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="range-input">Range Input:</label>
                        <input type="range" id="range-input" name="range-input" min="0" max="100" value="50">
                        <div class="description">Provides a slider for selecting a value within a range.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="file-input">File Input:</label>
                        <input type="file" id="file-input" name="file-input">
                        <div class="description">Allows uploading of files.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="textarea">Textarea:</label>
                        <textarea id="textarea" name="textarea" rows="4" placeholder="Enter your message here"></textarea>
                        <div class="description">Multi-line text input.</div>
                    </div>
                </form>
                
                <!-- Try modifying the input types or adding more fields -->
            </body>
            </html>`}
          enabledTabs={{ html: true }}
        />
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
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Form Buttons and Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        
        form {
            max-width: 500px;
            margin: 0 auto 30px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input[type="text"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        
        button, input[type="submit"], input[type="reset"] {
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 10px;
        }
        
        button[type="submit"], input[type="submit"] {
            background-color: #4CAF50;
            color: white;
        }
        
        button[type="reset"], input[type="reset"] {
            background-color: #f44336;
            color: white;
        }
        
        button[type="button"] {
            background-color: #2196F3;
            color: white;
        }
        
        .button-group {
            margin-top: 20px;
        }
        
        .result {
            margin-top: 20px;
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 4px;
            display: none;
        }
    </style>
</head>
<body>
    <h1>HTML Form Buttons and Submission</h1>
    
    <h2>Submit Button (Input Element)</h2>
    <form id="form1" action="#" method="get">
        <div class="form-group">
            <label for="name1">Name:</label>
            <input type="text" id="name1" name="name" placeholder="Enter your name">
        </div>
        
        <div class="button-group">
            <input type="submit" value="Submit Form">
        </div>
        
        <div id="result1" class="result"></div>
    </form>
    
    <h2>Submit Button (Button Element)</h2>
    <form id="form2" action="#" method="get">
        <div class="form-group">
            <label for="name2">Name:</label>
            <input type="text" id="name2" name="name" placeholder="Enter your name">
        </div>
        
        <div class="button-group">
            <button type="submit">Submit Form</button>
        </div>
        
        <div id="result2" class="result"></div>
    </form>
    
    <h2>Reset Button</h2>
    <form id="form3">
        <div class="form-group">
            <label for="name3">Name:</label>
            <input type="text" id="name3" name="name" placeholder="Enter your name">
        </div>
        
        <div class="form-group">
            <label for="email3">Email:</label>
            <input type="text" id="email3" name="email" placeholder="Enter your email">
        </div>
        
        <div class="button-group">
            <button type="submit">Submit Form</button>
            <button type="reset">Reset Form</button>
        </div>
        
        <div id="result3" class="result"></div>
    </form>
    
    <h2>Regular Button (No Form Action)</h2>
    <form id="form4">
        <div class="form-group">
            <label for="name4">Name:</label>
            <input type="text" id="name4" name="name" placeholder="Enter your name">
        </div>
        
        <div class="button-group">
            <button type="button" id="regular-button">Regular Button</button>
        </div>
        
        <div id="result4" class="result"></div>
    </form>
    
    <script>
        // Prevent actual form submission and show the data instead
        document.querySelectorAll('form').forEach((form, index) => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(this);
                let output = '<strong>Form Data:</strong><br>';
                
                for (let [key, value] of formData.entries()) {
                    output += \`\${key}: \${value}<br>\`;
                }
                
                const resultDiv = document.getElementById(\`result\${index + 1}\`);
                resultDiv.innerHTML = output;
                resultDiv.style.display = 'block';
            });
        });
        
        // Add click handler for the regular button
        document.getElementById('regular-button').addEventListener('click', function() {
            const name = document.getElementById('name4').value;
            const resultDiv = document.getElementById('result4');
            resultDiv.innerHTML = \`<strong>Button clicked!</strong><br>Name: \${name}\`;
            resultDiv.style.display = 'block';
        });
    </script>
</body>
</html>`}
          enabledTabs={{ html: true }}
        />
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
        <TryEditorButton
          htmlCode={`<!DOCTYPE html>
<html>
<head>
    <title>Form Organization with Fieldset</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        
        form {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        fieldset {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            margin-bottom: 20px;
        }
        
        legend {
            padding: 0 10px;
            font-weight: bold;
            color: #333;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="tel"],
        select {
            width: 100%;
            padding: 8px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            box-sizing: border-box;
            background-color: var(--card-background);
            color: var(--text-color);
        }
        
        .button-group {
            margin-top: 20px;
            text-align: center;
        }
        
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Form Organization with Fieldset</h1>
    
    <form>
        <fieldset>
            <legend>Personal Information</legend>
            
            <div class="form-group">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name">
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email">
            </div>
            
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
            </div>
        </fieldset>
        
        <fieldset>
            <legend>Address</legend>
            
            <div class="form-group">
                <label for="street">Street:</label>
                <input type="text" id="street" name="street" placeholder="Enter street address">
            </div>
            
            <div class="form-group">
                <label for="city">City:</label>
                <input type="text" id="city" name="city" placeholder="Enter city">
            </div>
            
            <div class="form-group">
                <label for="state">State/Province:</label>
                <input type="text" id="state" name="state" placeholder="Enter state or province">
            </div>
            
            <div class="form-group">
                <label for="zip">Zip/Postal Code:</label>
                <input type="text" id="zip" name="zip" placeholder="Enter zip or postal code">
            </div>
            
            <div class="form-group">
                <label for="country">Country:</label>
                <select id="country" name="country">
                    <option value="">-- Select a country --</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </fieldset>
        
        <fieldset>
            <legend>Additional Information</legend>
            
            <div class="form-group">
                <label for="comments">Comments:</label>
                <textarea id="comments" name="comments" rows="4" placeholder="Enter any additional comments" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;"></textarea>
            </div>
        </fieldset>
        
        <div class="button-group">
            <button type="submit">Submit Form</button>
        </div>
    </form>
</body>
</html>`}
          cssCode={`/* You can add additional CSS here */
/* For example, try creating a different form style */

.modern-form {
    background-color: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 10px;
}

.modern-form fieldset {
    border: none;
    border-bottom: 1px solid #eee;
    border-radius: 0;
    padding: 20px;
}

.modern-form fieldset:last-of-type {
    border-bottom: none;
}

.modern-form legend {
    color: #2196F3;
    font-size: 1.2em;
    padding: 0 15px;
}

.modern-form input[type="text"],
.modern-form input[type="email"],
.modern-form input[type="password"],
.modern-form input[type="tel"],
.modern-form select,
.modern-form textarea {
    border: none;
    border-bottom: 2px solid var(--border-color);
    border-radius: 0;
    padding: 10px 5px;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
    background-color: var(--card-background);
    color: var(--text-color);
}

.modern-form input[type="text"]:focus,
.modern-form input[type="email"]:focus,
.modern-form input[type="password"]:focus,
.modern-form input[type="tel"]:focus,
.modern-form select:focus,
.modern-form textarea:focus {
    border-color: var(--primary-color);
    outline: none;
}

.modern-form button {
    background-color: #2196F3;
    padding: 12px 30px;
    border-radius: 30px;
    transition: background-color 0.3s, transform 0.2s;
}

.modern-form button:hover {
    background-color: #0b7dda;
    transform: translateY(-2px);
}

/* Try adding this class to the form element */`}
          enabledTabs={{ html: true, css: true }}
        />
      </Example>
      
      
      
      <Navigation 
        prevLink="/day1/tables" 
        nextLink="/day1/images" 
        indexLink="/day1"
        title="HTML Forms"
        subtitle="Understand how to create interactive forms with various input types"
      />
    </Layout>
  );
};

export default Forms;