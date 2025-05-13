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

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 15px;
  color: var(--text-color);
  
  th, td {
    border: 1px solid var(--border-color);
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: var(--light-gray);
    color: var(--text-color);
  }
  
  tr:nth-child(even) {
    background-color: var(--code-background);
  }
  
  tr:hover {
    background-color: var(--medium-gray);
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    
    th, td {
      padding: 6px;
    }
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    
    th, td {
      padding: 5px;
    }
  }
  
  @media (max-width: 375px) {
    font-size: 0.85rem;
    
    th, td {
      padding: 4px;
    }
  }
`;

const StyledTableWithCaption = styled(StyledTable)`
  caption {
    padding: 10px;
    font-weight: bold;
    font-size: 1.2em;
    color: var(--text-color);
  }
`;

const FancyTable = styled(StyledTable)`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  
  th {
    background-color: #4CAF50;
    color: white;
  }
  
  tr:hover {
    background-color: #f1f1f1;
  }
`;

const Tables = () => {
  return (
    <Layout>
      <Navigation 
        prevLink="/day1/attributes" 
        nextLink="/day1/forms" 
        indexLink="/day1"
        title="HTML Tables"
        subtitle="Learn how to create and structure tables in HTML"
      />
      
      <Example title="Basic Table Structure">
        <p>A basic HTML table consists of the <code>&lt;table&gt;</code> element and one or more <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code> elements:</p>
        
        <StyledTable>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Smith</td>
            <td>30</td>
          </tr>
        </StyledTable>
        
        <CodeBlock>
          {`<table>
          <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          </tr>
          <tr>
          <td>John</td>
          <td>Doe</td>
          <td>25</td>
          </tr>
          <tr>
          <td>Jane</td>
          <td>Smith</td>
          <td>30</td>
          </tr>
          </table>`}
        </CodeBlock>
        
        <h3>Table Elements Explained:</h3>
        <ul>
          <li><code>&lt;table&gt;</code> - Defines an HTML table</li>
          <li><code>&lt;tr&gt;</code> - Defines a table row</li>
          <li><code>&lt;th&gt;</code> - Defines a table header cell</li>
          <li><code>&lt;td&gt;</code> - Defines a table data cell</li>
        </ul>
        
        <TryEditorButton
          htmlCode={day1EditorContent.tables.basic_table.html}
          cssCode={day1EditorContent.tables.basic_table.css}
          enabledTabs={{ html: true, css: true, js: false }}
        />
      </Example>

      <Example title="Table with Header, Body, and Footer">
        <p>Tables can be divided into <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> sections:</p>
        
        <StyledTableWithCaption>
          <caption>Monthly Savings</caption>
          <thead>
            <tr>
              <th>Month</th>
              <th>Income</th>
              <th>Expenses</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January</td>
              <td>$5000</td>
              <td>$3000</td>
              <td>$2000</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$5200</td>
              <td>$3200</td>
              <td>$2000</td>
            </tr>
            <tr>
              <td>March</td>
              <td>$5500</td>
              <td>$3100</td>
              <td>$2400</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>$15700</td>
              <td>$9300</td>
              <td>$6400</td>
            </tr>
          </tfoot>
        </StyledTableWithCaption>
        
        <CodeBlock>
          {`<table>
            <caption>Monthly Savings</caption>
            <thead>
              <tr>
                <th>Month</th>
                <th>Income</th>
                <th>Expenses</th>
                <th>Savings</th>
              </tr>
            </thead>
            <tbody>
              ... table rows ...
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>$15700</td>
                <td>$9300</td>
                <td>$6400</td>
              </tr>
            </tfoot>
          </table>`}
        </CodeBlock>

        <TryEditorButton
          htmlCode={day1EditorContent.tables.table_with_header_body_footer.html}
          enabledTabs={{ html: true }}
        />

      </Example>

      <Example title="Spanning Rows and Columns">
        <p>You can use <code>colspan</code> and <code>rowspan</code> attributes to make cells span multiple columns or rows:</p>
        
        <StyledTable>
          <tr>
            <th>Name</th>
            <th colSpan="2">Contact</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>555-1234</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>555-5678</td>
            <td>jane@example.com</td>
          </tr>
        </StyledTable>
        
        <CodeBlock>
          {`<table>
            <tr>
              <th>Name</th>
              <th colspan="2">Contact</th>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>555-1234</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>555-5678</td>
              <td>jane@example.com</td>
            </tr>
          </table>`}
        </CodeBlock>
        
        <h3>Example with rowspan:</h3>
        <StyledTable>
          <tr>
            <th>Name</th>
            <td>John Doe</td>
          </tr>
          <tr>
            <th rowSpan="2">Contact</th>
            <td>555-1234</td>
          </tr>
          <tr>
            <td>john@example.com</td>
          </tr>
        </StyledTable>
        
        <CodeBlock>
          {`<table>
            <tr>
              <th>Name</th>
              <td>John Doe</td>
            </tr>
            <tr>
              <th rowspan="2">Contact</th>
              <td>555-1234</td>
            </tr>
            <tr>
              <td>john@example.com</td>
            </tr>
          </table>`}
        </CodeBlock>
        <TryEditorButton
          htmlCode={day1EditorContent.tables.colspan_rowspan.html}
          enabledTabs={{ html: true }}
        />
      </Example>

      <Example title="Styled Table Example">
        <p>Tables can be styled with CSS to improve their appearance:</p>
        
        <FancyTable>
          <caption>Product Inventory</caption>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>P001</td>
              <td>Laptop</td>
              <td>Electronics</td>
              <td>$999.99</td>
              <td>15</td>
            </tr>
            <tr>
              <td>P002</td>
              <td>Smartphone</td>
              <td>Electronics</td>
              <td>$699.99</td>
              <td>25</td>
            </tr>
            <tr>
              <td>P003</td>
              <td>Headphones</td>
              <td>Accessories</td>
              <td>$149.99</td>
              <td>40</td>
            </tr>
            <tr>
              <td>P004</td>
              <td>Wireless Mouse</td>
              <td>Accessories</td>
              <td>$29.99</td>
              <td>50</td>
            </tr>
          </tbody>
        </FancyTable>

        <TryEditorButton
          htmlCode={day1EditorContent.tables.styled_tables.html}
          cssCode={day1EditorContent.tables.styled_tables.css}
          enabledTabs={{ html: true, css: true }}
        />
      </Example>

      <Example title="Table Accessibility">
        <p>For better accessibility, use these practices:</p>
        <ul>
          <li>Use <code>&lt;caption&gt;</code> to provide a title for the table</li>
          <li>Use <code>&lt;th&gt;</code> elements for header cells</li>
          <li>Use the <code>scope</code> attribute to associate header cells with data cells</li>
          <li>Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> to group rows</li>
        </ul>
        
        <StyledTable>
          <caption>Employee Schedule</caption>
          <thead>
            <tr>
              <th scope="col">Employee</th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">John</th>
              <td>9 AM - 5 PM</td>
              <td>9 AM - 5 PM</td>
              <td>9 AM - 5 PM</td>
            </tr>
            <tr>
              <th scope="row">Jane</th>
              <td>10 AM - 6 PM</td>
              <td>10 AM - 6 PM</td>
              <td>10 AM - 6 PM</td>
            </tr>
          </tbody>
        </StyledTable>
        
        <CodeBlock>
          {`<table>
            <caption>Employee Schedule</caption>
            <thead>
              <tr>
                <th scope="col">Employee</th>
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">John</th>
                <td>9 AM - 5 PM</td>
                <td>9 AM - 5 PM</td>
                <td>9 AM - 5 PM</td>
              </tr>
              <tr>
                <th scope="row">Jane</th>
                <td>10 AM - 6 PM</td>
                <td>10 AM - 6 PM</td>
                <td>10 AM - 6 PM</td>
              </tr>
            </tbody>
          </table>`}
        </CodeBlock>
        <TryEditorButton
          htmlCode={day1EditorContent.tables.interactive_tables.html}
          jsCode={day1EditorContent.tables.interactive_tables.js}
          enabledTabs={{ html: true, js: true }}
        />
      </Example>
          
      <Navigation 
        prevLink="/day1/attributes" 
        nextLink="/day1/forms" 
        indexLink="/day1"
        title="HTML Tables"
        subtitle="Learn how to create and structure tables in HTML"
      />
    </Layout>
  );
};

export default Tables;