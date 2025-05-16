import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import Uber Move font */
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap');
  
  :root {
    /* Common variables */
    --border-radius: 20px;
    --form-border-radius: 12px;
    --transition-speed: 0.3s;
    --font-family: 'Public Sans', sans-serif;
    --font-mono: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    
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
    --card-background: #f8f9fa;
    --card-background-lighter: #ffffff;
    --card-background-darker: #e8e9ea;
    --image-background: #ffffff;
    --text-color: #333333;
    --sidebar-background: #e8e9ea;
    --sidebar-hover-bg: rgba(52, 152, 219, 0.08);
    --sidebar-active-bg: rgba(52, 152, 219, 0.12);
    --sidebar-submenu-bg: rgba(52, 152, 219, 0.05);
    --sidebar-item-hover-bg: rgba(52, 152, 219, 0.08);
    --sidebar-item-active-bg: rgba(52, 152, 219, 0.12);
    --text-secondary: #666666;
    --light-gray: #f5f5f5;
    --medium-gray: #ddd;
    --dark-gray: #777;
    --border-color: #e0e0e0;
    --box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    --code-background: #f0f2f5;
    --code-text: #333333;
    --example-background: #f8f9fa;
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
    --card-background: #2d2d35;
    --card-background-lighter: #3a3a45;
    --card-background-darker: #242428;
    --image-background: #3a3a45;
    --text-color: #e0e0e0;
    --sidebar-background: #242428;
    --sidebar-hover-bg: rgba(79, 163, 224, 0.15);
    --sidebar-active-bg: rgba(79, 163, 224, 0.2);
    --sidebar-submenu-bg: rgba(79, 163, 224, 0.1);
    --sidebar-item-hover-bg: rgba(79, 163, 224, 0.15);
    --sidebar-item-active-bg: rgba(79, 163, 224, 0.2);
    --text-secondary: #b0b0b0;
    --light-gray: #333333;
    --medium-gray: #444444;
    --dark-gray: #999999;
    --border-color: #444444;
    --box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    --code-background: #2d2d2d;
    --code-text: #e0e0e0;
    --example-background: #2d2d35;
    --header-text: #ffffff;
    --button-text: #ffffff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
  }

  body {
    font-family: var(--font-family);
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    line-height: 1.2;
    font-weight: 600;
    color: var(--text-color);
    transition: color var(--transition-speed) ease;
    letter-spacing: -0.02em;
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
    font-weight: 400;
    letter-spacing: -0.01em;
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
    font-family: var(--font-family);
    font-weight: 500;
    letter-spacing: -0.01em;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color var(--transition-speed) ease, 
                color var(--transition-speed) ease,
                box-shadow var(--transition-speed) ease,
                transform var(--transition-speed) ease;
  }

  button:hover, .button:hover {
    background-color: var(--primary-dark);
    color: var(--button-text);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
  
  button:active, .button:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
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
    padding: 1.25rem;
    border-radius: var(--border-radius);
    font-family: var(--font-mono);
    margin-bottom: 1.25rem;
    overflow-x: auto;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
    
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
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
    transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
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