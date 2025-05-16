// Collection of web development related images
const webDevImages = {
  // HTML topics (Day 1)
  htmlBasics: '/images/web-dev/html-icon.svg',
  headings: '/images/web-dev/html-icon.svg',
  paragraphsText: '/images/web-dev/html-icon.svg',
  attributes: '/images/web-dev/html-icon.svg',
  tables: '/images/web-dev/html-icon.svg',
  forms: '/images/web-dev/html-icon.svg',
  images: '/images/web-dev/html-icon.svg',
  
  // CSS topics (Day 2)
  cssIntroduction: '/images/web-dev/css-icon.svg',
  cssSelectors: '/images/web-dev/css-icon.svg',
  classesIds: '/images/web-dev/css-icon.svg',
  divSpan: '/images/web-dev/css-icon.svg',
  boxModel: '/images/web-dev/css-icon.svg',
  
  // Advanced CSS topics (Day 3)
  flexboxGrid: '/images/web-dev/css-icon.svg',
  stylingFormsButtons: '/images/web-dev/css-icon.svg',
  responsiveDesign: '/images/web-dev/responsive-design.svg',
  
  // JavaScript topics (Day 4)
  variables: '/images/web-dev/js-icon.svg',
  dataTypes: '/images/web-dev/js-icon.svg',
  operatorsConditionals: '/images/web-dev/js-icon.svg',
  
  // Advanced JavaScript topics (Day 5)
  functions: '/images/web-dev/js-icon.svg',
  arraysObjects: '/images/web-dev/js-icon.svg',
  loops: '/images/web-dev/js-icon.svg',
};

// Default images by day
const dayDefaultImages = {
  day1: '/images/web-dev/html-icon.svg',
  day2: '/images/web-dev/css-icon.svg',
  day3: '/images/web-dev/responsive-design.svg',
  day4: '/images/web-dev/js-icon.svg',
  day5: '/images/web-dev/js-icon.svg',
};

// Fallback image if no match is found
const defaultImage = '/images/web-dev/html-icon.svg';

/**
 * Returns a relevant web development image URL based on the topic path
 * @param {string} topicPath - The topic path to match with a relevant image
 * @returns {string} - URL of the relevant image
 */
export const getRandomWebDevImage = (topicPath) => {
  if (!topicPath) {
    return defaultImage;
  }
  
  // Extract the day and topic from the path
  const pathParts = topicPath.split('/');
  const day = pathParts[1]; // e.g., "day1", "day2", etc.
  const topic = pathParts[2]; // e.g., "html-basics", "css-introduction", etc.
  
  if (!day || !topic) {
    return defaultImage;
  }
  
  // Map topic path to image key
  let imageKey;
  
  // HTML topics (Day 1)
  if (topic === 'html-basics') imageKey = 'htmlBasics';
  else if (topic === 'headings') imageKey = 'headings';
  else if (topic === 'paragraphs-text') imageKey = 'paragraphsText';
  else if (topic === 'attributes') imageKey = 'attributes';
  else if (topic === 'tables') imageKey = 'tables';
  else if (topic === 'forms') imageKey = 'forms';
  else if (topic === 'images') imageKey = 'images';
  
  // CSS topics (Day 2)
  else if (topic === 'css-introduction') imageKey = 'cssIntroduction';
  else if (topic === 'css-selectors') imageKey = 'cssSelectors';
  else if (topic === 'classes-ids') imageKey = 'classesIds';
  else if (topic === 'div-span') imageKey = 'divSpan';
  else if (topic === 'box-model') imageKey = 'boxModel';
  
  // Advanced CSS topics (Day 3)
  else if (topic === 'flexbox-grid') imageKey = 'flexboxGrid';
  else if (topic === 'styling-forms-buttons') imageKey = 'stylingFormsButtons';
  else if (topic === 'responsive-design') imageKey = 'responsiveDesign';
  
  // JavaScript topics (Day 4)
  else if (topic === 'variables') imageKey = 'variables';
  else if (topic === 'data-types') imageKey = 'dataTypes';
  else if (topic === 'operators-conditionals') imageKey = 'operatorsConditionals';
  
  // Advanced JavaScript topics (Day 5)
  else if (topic === 'functions') imageKey = 'functions';
  else if (topic === 'arrays-objects') imageKey = 'arraysObjects';
  else if (topic === 'loops') imageKey = 'loops';
  
  // If we have a direct mapping, use it
  if (imageKey && webDevImages[imageKey]) {
    return webDevImages[imageKey];
  }
  
  // If no specific match but we know the day, use the day's default image
  if (dayDefaultImages[day]) {
    return dayDefaultImages[day];
  }
  
  // Last resort fallback
  return defaultImage;
};