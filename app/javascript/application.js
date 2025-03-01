// Entry point for the build script in your package.json
import "./components"

// Helper function to get props from the data container
const getProps = () => {
  const container = document.getElementById('js-data-container');
  if (!container) return {};
  
  try {
    return JSON.parse(container.dataset.props || '{}');
  } catch (e) {
    console.error('Error parsing props:', e);
    return {};
  }
}

// Use the props in your React components
const props = getProps();
console.log('Props:', props);