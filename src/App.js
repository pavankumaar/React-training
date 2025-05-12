import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CompletionProvider } from './context/CompletionContext';
import ScrollToTop from './components/ScrollToTop';

// Main pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

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
    <CompletionProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<HomePage />} />
          
          {/* Day index routes */}
          <Route path="/day1" element={<Day1IndexPage />} />
          <Route path="/day2" element={<Day2IndexPage />} />
          <Route path="/day3" element={<Day3IndexPage />} />
          <Route path="/day4" element={<Day4IndexPage />} />
          <Route path="/day5" element={<Day5IndexPage />} />
          
          {/* Day 1 routes */}
          <Route path="/day1/html-basics" element={<HtmlBasics />} />
          <Route path="/day1/headings" element={<Headings />} />
          <Route path="/day1/paragraphs-text" element={<ParagraphsText />} />
          <Route path="/day1/attributes" element={<Attributes />} />
          <Route path="/day1/tables" element={<Tables />} />
          <Route path="/day1/forms" element={<Forms />} />
          <Route path="/day1/images" element={<Images />} />
          
          {/* Day 2 routes */}
          <Route path="/day2/css-introduction" element={<CssIntroduction />} />
          <Route path="/day2/css-selectors" element={<CssSelectors />} />
          <Route path="/day2/classes-ids" element={<ClassesIds />} />
          <Route path="/day2/div-span" element={<DivSpan />} />
          <Route path="/day2/box-model" element={<BoxModel />} />
          
          {/* Day 3 routes */}
          <Route path="/day3/flexbox-grid" element={<FlexboxGrid />} />
          <Route path="/day3/styling-forms-buttons" element={<StylingFormsButtons />} />
          <Route path="/day3/responsive-design" element={<ResponsiveDesign />} />
          
          {/* Day 4 routes */}
          <Route path="/day4/variables" element={<Variables />} />
          <Route path="/day4/data-types" element={<DataTypes />} />
          <Route path="/day4/operators-conditionals" element={<OperatorsConditionals />} />
          
          {/* Day 5 routes */}
          <Route path="/day5/functions" element={<Functions />} />
          <Route path="/day5/arrays-objects" element={<ArraysObjects />} />
          <Route path="/day5/loops" element={<Loops />} />
          
          {/* 404 route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </CompletionProvider>
  );
}

export default App;
