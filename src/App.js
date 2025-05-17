import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CompletionProvider } from './context/CompletionContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';

// Main pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import CodeEditorPage from './pages/CodeEditorPage';
import SearchPage from './pages/SearchPage';

// Day index pages
import Day1IndexPage from './pages/Day1IndexPage';
import Day2IndexPage from './pages/Day2IndexPage';
import Day3IndexPage from './pages/Day3IndexPage';
import Day4IndexPage from './pages/Day4IndexPage';
import Day5IndexPage from './pages/Day5IndexPage';

// Day 1 pages
import HtmlBasics from './days/day1/HtmlBasics';
import Headings from './days/day1/Headings';
import ParagraphsText from './days/day1/ParagraphsText';
import Attributes from './days/day1/Attributes';
import Tables from './days/day1/Tables';
import Forms from './days/day1/Forms';
import Images from './days/day1/Images';

// Day 2 pages
import CssIntroduction from './days/day2/CssIntroduction';
import CssSelectors from './days/day2/CssSelectors';
import ClassesIds from './days/day2/ClassesIds';
import DivSpan from './days/day2/DivSpan';
import BoxModel from './days/day2/BoxModel';

// Day 3 pages
import FlexboxGrid from './days/day3/FlexboxGrid';
import StylingFormsButtons from './days/day3/StylingFormsButtons';
import ResponsiveDesign from './days/day3/ResponsiveDesign';

// Day 4 pages
import Variables from './days/day4/Variables';
import DataTypes from './days/day4/DataTypes';
import OperatorsConditionals from './days/day4/OperatorsConditionals';

// Day 5 pages
import Functions from './days/day5/Functions';
import ArraysObjects from './days/day5/ArraysObjects';
import Loops from './days/day5/Loops';

function App() {
  return (
    <AuthProvider>
      <CompletionProvider>
        <ThemeProvider>
          <ToastProvider>
            <Router>
              <ScrollToTop />
              <Routes>
            {/* Main routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path="/code-editor" element={
              <ProtectedRoute>
                <CodeEditorPage />
              </ProtectedRoute>
            } />
            <Route path="/search" element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            } />
          
          {/* Day index routes */}
          <Route path="/day1" element={<ProtectedRoute><Day1IndexPage /></ProtectedRoute>} />
          <Route path="/day2" element={<ProtectedRoute><Day2IndexPage /></ProtectedRoute>} />
          <Route path="/day3" element={<ProtectedRoute><Day3IndexPage /></ProtectedRoute>} />
          <Route path="/day4" element={<ProtectedRoute><Day4IndexPage /></ProtectedRoute>} />
          <Route path="/day5" element={<ProtectedRoute><Day5IndexPage /></ProtectedRoute>} />
          
          {/* Day 1 routes */}
          <Route path="/day1/html-basics" element={<ProtectedRoute><HtmlBasics /></ProtectedRoute>} />
          <Route path="/day1/headings" element={<ProtectedRoute><Headings /></ProtectedRoute>} />
          <Route path="/day1/paragraphs-text" element={<ProtectedRoute><ParagraphsText /></ProtectedRoute>} />
          <Route path="/day1/attributes" element={<ProtectedRoute><Attributes /></ProtectedRoute>} />
          <Route path="/day1/tables" element={<ProtectedRoute><Tables /></ProtectedRoute>} />
          <Route path="/day1/forms" element={<ProtectedRoute><Forms /></ProtectedRoute>} />
          <Route path="/day1/images" element={<ProtectedRoute><Images /></ProtectedRoute>} />
          
          {/* Day 2 routes */}
          <Route path="/day2/css-introduction" element={<ProtectedRoute><CssIntroduction /></ProtectedRoute>} />
          <Route path="/day2/css-selectors" element={<ProtectedRoute><CssSelectors /></ProtectedRoute>} />
          <Route path="/day2/classes-ids" element={<ProtectedRoute><ClassesIds /></ProtectedRoute>} />
          <Route path="/day2/div-span" element={<ProtectedRoute><DivSpan /></ProtectedRoute>} />
          <Route path="/day2/box-model" element={<ProtectedRoute><BoxModel /></ProtectedRoute>} />
          
          {/* Day 3 routes */}
          <Route path="/day3/flexbox-grid" element={<ProtectedRoute><FlexboxGrid /></ProtectedRoute>} />
          <Route path="/day3/styling-forms-buttons" element={<ProtectedRoute><StylingFormsButtons /></ProtectedRoute>} />
          <Route path="/day3/responsive-design" element={<ProtectedRoute><ResponsiveDesign /></ProtectedRoute>} />
          
          {/* Day 4 routes */}
          <Route path="/day4/variables" element={<ProtectedRoute><Variables /></ProtectedRoute>} />
          <Route path="/day4/data-types" element={<ProtectedRoute><DataTypes /></ProtectedRoute>} />
          <Route path="/day4/operators-conditionals" element={<ProtectedRoute><OperatorsConditionals /></ProtectedRoute>} />
          
          {/* Day 5 routes */}
          <Route path="/day5/functions" element={<ProtectedRoute><Functions /></ProtectedRoute>} />
          <Route path="/day5/arrays-objects" element={<ProtectedRoute><ArraysObjects /></ProtectedRoute>} />
          <Route path="/day5/loops" element={<ProtectedRoute><Loops /></ProtectedRoute>} />
          
          {/* 404 route */}
          <Route path="*" element={<ProtectedRoute><NotFoundPage /></ProtectedRoute>} />
        </Routes>
            </Router>
          </ToastProvider>
        </ThemeProvider>
      </CompletionProvider>
    </AuthProvider>
  );
}

export default App;
