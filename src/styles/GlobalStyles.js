import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #3498db;
    --primary-dark: #2980b9;
    --primary-darker: #1a5e8a;
    --secondary-color: #2ecc71;
    --secondary-dark: #27ae60;
    --accent-color: #f39c12;
    --accent-dark: #e67e22;
    --text-color: #333;
    --light-gray: #f5f5f5;
    --medium-gray: #ddd;
    --dark-gray: #777;
    --success-color: #2ecc71;
    --warning-color: #f39c12;
    --danger-color: #e74c3c;
    --border-radius: 4px;
    --box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    --transition-speed: 0.3s;
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
    background-color: #fff;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
  }

  a:hover {
    color: #2980b9;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.3;
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
  }

  button, .button {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color var(--transition-speed) ease;
  }

  button:hover, .button:hover {
    background-color: var(--primary-dark);
    color: white;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .code-block {
    background-color: var(--light-gray);
    padding: 1rem;
    border-radius: var(--border-radius);
    font-family: monospace;
    margin-bottom: 1rem;
    overflow-x: auto;
  }

  .example {
    border: 1px solid var(--medium-gray);
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: var(--border-radius);
  }

  .completed {
    color: var(--success-color);
  }

  .pending {
    color: var(--dark-gray);
  }

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
  }
`;

export default GlobalStyles;