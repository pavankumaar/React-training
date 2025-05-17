// Search index for all training content
const searchIndex = [
  // Day 1 - HTML
  {
    id: 'html-basics',
    title: 'HTML Basics',
    day: 'day1',
    path: '/day1/html-basics',
    keywords: ['html', 'markup', 'document structure', 'elements', 'tags', 'attributes'],
    content: 'Learn the fundamentals of HTML, including document structure and basic elements'
  },
  {
    id: 'headings',
    title: 'Headings',
    day: 'day1',
    path: '/day1/headings',
    keywords: ['html', 'headings', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    content: 'Learn about HTML heading elements from h1 to h6'
  },
  {
    id: 'paragraphs-text',
    title: 'Paragraphs & Text',
    day: 'day1',
    path: '/day1/paragraphs-text',
    keywords: ['html', 'paragraphs', 'text', 'formatting', 'p tag'],
    content: 'Working with paragraphs and text formatting in HTML'
  },
  {
    id: 'attributes',
    title: 'Attributes',
    day: 'day1',
    path: '/day1/attributes',
    keywords: ['html', 'attributes', 'properties', 'href', 'src', 'alt'],
    content: 'Understanding HTML attributes and how they modify elements'
  },
  {
    id: 'tables',
    title: 'Tables',
    day: 'day1',
    path: '/day1/tables',
    keywords: ['html', 'tables', 'rows', 'columns', 'th', 'tr', 'td'],
    content: 'Creating and styling tables in HTML'
  },
  {
    id: 'forms',
    title: 'Forms',
    day: 'day1',
    path: '/day1/forms',
    keywords: ['html', 'forms', 'input', 'submit', 'textarea', 'select', 'checkbox', 'radio'],
    content: 'Building interactive forms with various input types'
  },
  {
    id: 'images',
    title: 'Images',
    day: 'day1',
    path: '/day1/images',
    keywords: ['html', 'images', 'img', 'src', 'alt', 'responsive images'],
    content: 'Working with images in HTML documents'
  },

  // Day 2 - CSS
  {
    id: 'css-introduction',
    title: 'CSS Introduction',
    day: 'day2',
    path: '/day2/css-introduction',
    keywords: ['css', 'styles', 'stylesheets', 'selectors', 'properties'],
    content: 'Introduction to Cascading Style Sheets and how they style HTML'
  },
  {
    id: 'css-selectors',
    title: 'CSS Selectors',
    day: 'day2',
    path: '/day2/css-selectors',
    keywords: ['css', 'selectors', 'class selector', 'id selector', 'attribute selector', 'pseudo-classes'],
    content: 'Understanding different types of CSS selectors and their specificity'
  },
  {
    id: 'classes-ids',
    title: 'Classes & IDs',
    day: 'day2',
    path: '/day2/classes-ids',
    keywords: ['css', 'classes', 'ids', 'selectors', 'specificity'],
    content: 'Working with CSS classes and IDs to target specific elements'
  },
  {
    id: 'div-span',
    title: 'Div & Span',
    day: 'day2',
    path: '/day2/div-span',
    keywords: ['html', 'css', 'div', 'span', 'containers', 'block elements', 'inline elements'],
    content: 'Using div and span elements as containers for styling and layout'
  },
  {
    id: 'box-model',
    title: 'Box Model',
    day: 'day2',
    path: '/day2/box-model',
    keywords: ['css', 'box model', 'margin', 'padding', 'border', 'width', 'height'],
    content: 'Understanding the CSS box model and how it affects layout'
  },

  // Day 3 - Advanced CSS
  {
    id: 'flexbox-grid',
    title: 'Flexbox & Grid',
    day: 'day3',
    path: '/day3/flexbox-grid',
    keywords: ['css', 'flexbox', 'grid', 'layout', 'responsive', 'containers'],
    content: 'Modern CSS layout techniques using Flexbox and CSS Grid'
  },
  {
    id: 'styling-forms-buttons',
    title: 'Styling Forms & Buttons',
    day: 'day3',
    path: '/day3/styling-forms-buttons',
    keywords: ['css', 'forms', 'buttons', 'inputs', 'styling', 'user interface'],
    content: 'Creating beautiful and user-friendly form elements with CSS'
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    day: 'day3',
    path: '/day3/responsive-design',
    keywords: ['css', 'responsive', 'media queries', 'mobile-first', 'viewport', 'breakpoints'],
    content: 'Building websites that work well on all device sizes'
  },

  // Day 4 - JavaScript Basics
  {
    id: 'variables',
    title: 'Variables',
    day: 'day4',
    path: '/day4/variables',
    keywords: ['javascript', 'variables', 'let', 'const', 'var', 'declaration', 'assignment'],
    content: 'Understanding JavaScript variables and how to use them'
  },
  {
    id: 'data-types',
    title: 'Data Types',
    day: 'day4',
    path: '/day4/data-types',
    keywords: ['javascript', 'data types', 'string', 'number', 'boolean', 'object', 'array', 'null', 'undefined'],
    content: 'Exploring the different data types in JavaScript'
  },
  {
    id: 'operators-conditionals',
    title: 'Operators & Conditionals',
    day: 'day4',
    path: '/day4/operators-conditionals',
    keywords: ['javascript', 'operators', 'conditionals', 'if', 'else', 'switch', 'comparison', 'logical'],
    content: 'Working with operators and conditional statements in JavaScript'
  },

  // Day 5 - JavaScript Advanced
  {
    id: 'functions',
    title: 'Functions',
    day: 'day5',
    path: '/day5/functions',
    keywords: ['javascript', 'functions', 'parameters', 'arguments', 'return', 'arrow functions'],
    content: 'Creating and using functions in JavaScript'
  },
  {
    id: 'arrays-objects',
    title: 'Arrays & Objects',
    day: 'day5',
    path: '/day5/arrays-objects',
    keywords: ['javascript', 'arrays', 'objects', 'properties', 'methods', 'data structures'],
    content: 'Working with arrays and objects to store and manipulate data'
  },
  {
    id: 'loops',
    title: 'Loops',
    day: 'day5',
    path: '/day5/loops',
    keywords: ['javascript', 'loops', 'for', 'while', 'do-while', 'forEach', 'map', 'iteration'],
    content: 'Using different types of loops to iterate through data'
  }
];

export default searchIndex;