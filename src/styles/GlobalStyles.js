import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Common variables */
    --border-radius: 4px;
    --transition-speed: 0.3s;
    
    /* Light theme (default) */
    --primary-color: #3498db;
    --primary-color-rgb: 52, 152, 219; /* RGB values for #3498db */
    --primary-dark: #2980b9;
    --primary-darker: #1a5e8a;
    --secondary-color: #2ecc71;
    --secondary-dark: #27ae60;
    --accent-color: #f39c12;
    --accent-dark: #e67e22;
    --success-color: #2ecc71;
    --warning-color: #f39c12;
    --danger-color: #e74c3c;
    
    /* Light theme specific */
    --background-color: #ffffff;
    --card-background: #ffffff;
    --text-color: #333333;
    --text-secondary: #666666;
    --light-gray: #f5f5f5;
    --medium-gray: #ddd;
    --dark-gray: #777;
    --border-color: #e0e0e0;
    --box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    --code-background: #f5f5f5;
    --code-text: #333333;
    --example-background: #ffffff;
    --header-text: #ffffff;
    --button-text: #ffffff;
  }

  /* Dark theme variables */
  [data-theme='dark'] {
    --primary-color: #4fa3e0;
    --primary-color-rgb: 79, 163, 224; /* RGB values for #4fa3e0 */
    --primary-dark: #3a8bc5;
    --primary-darker: #2a6b9c;
    --secondary-color: #3dd682;
    --secondary-dark: #2eb86c;
    --accent-color: #f7ab2f;
    --accent-dark: #e8912a;
    --success-color: #3dd682;
    --warning-color: #f7ab2f;
    --danger-color: #e95c4b;
    
    /* Dark theme specific */
    --background-color: #1a1a1a;
    --card-background: #2a2a2a;
    --text-color: #e0e0e0;
    --text-secondary: #b0b0b0;
    --light-gray: #333333;
    --medium-gray: #444444;
    --dark-gray: #999999;
    --border-color: #444444;
    --box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    --code-background: #2d2d2d;
    --code-text: #e0e0e0;
    --example-background: #2a2a2a;
    --header-text: #ffffff;
    --button-text: #ffffff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
  }

  a:hover {
    color: var(--primary-dark);
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.3;
    color: var(--text-color);
    transition: color var(--transition-speed) ease;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
    color: var(--text-color);
    transition: color var(--transition-speed) ease;
  }

  button, .button {
    display: inline-block;
    background-color: var(--primary-color);
    color: var(--button-text);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
  }

  button:hover, .button:hover {
    background-color: var(--primary-dark);
    color: var(--button-text);
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    
    /* Custom scrollbar for container - matching sidebar style */
    &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(var(--primary-color-rgb, 74, 144, 226), 0.5);
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color, #4a90e2);
    }
  }

  .code-block {
    background-color: var(--code-background);
    color: var(--code-text);
    padding: 1rem;
    border-radius: var(--border-radius);
    font-family: monospace;
    margin-bottom: 1rem;
    overflow-x: auto;
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
    
    /* Custom scrollbar for code blocks - matching sidebar style */
    &::-webkit-scrollbar {
      height: 5px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(var(--primary-color-rgb, 74, 144, 226), 0.5);
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color, #4a90e2);
    }
  }

  .example {
    background-color: var(--example-background);
    border: 1px solid var(--border-color);
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: var(--border-radius);
    transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease;
  }
  
  .example {
    color: var(--text-color);
    }
  
  .example ul,ol {
    margin-left: 20px;
  }

  section ul,ol {
    margin-left: 20px;
  }

  .completed {
    color: var(--success-color);
  }

  .pending {
    color: var(--dark-gray);
  }

  /* Ensure code editor themes match */
  .cm-s-material.CodeMirror {
    background-color: var(--code-background) !important;
    color: var(--code-text) !important;
  }

  /* Add smooth transitions for theme changes */
  .CodeMirror, .CodeMirror * {
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
  }

  /* Tablet devices */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }
    
    p, li, code {
      font-size: 0.95rem;
    }
    
    .container {
      padding: 0 0.75rem;
    }
    
    button, .button {
      padding: 0.4rem 0.8rem;
      font-size: 0.9rem;
    }
    
    .code-block {
      padding: 0.75rem;
      font-size: 0.9rem;
    }
    
    .example {
      padding: 0.75rem;
      margin-bottom: 1.25rem;
    }
  }
  
  /* Mobile devices */
  @media (max-width: 576px) {
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }
    
    p, li, code {
      font-size: 0.9rem;
    }
    
    .container {
      padding: 0 0.5rem;
    }
    
    button, .button {
      padding: 0.35rem 0.7rem;
      font-size: 0.85rem;
    }
    
    .code-block {
      padding: 0.5rem;
      font-size: 0.85rem;
    }
    
    .example {
      padding: 0.5rem;
      margin-bottom: 1rem;
    }
  }
  
  /* Small mobile devices */
  @media (max-width: 375px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1.1rem;
    }
    
    p, li, code {
      font-size: 0.85rem;
    }
    
    button, .button {
      padding: 0.3rem 0.6rem;
      font-size: 0.8rem;
    }
  }
`;

export default GlobalStyles;