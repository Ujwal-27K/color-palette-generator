import { useState } from 'react';
import './Header.css';
import { COLORMIND_MODELS } from '../utils/colorUtils';

/**
 * Header Component
 * Displays the main title, description, and model selector
 */
const Header = ({ currentModel, onModelChange }) => {
  const [showModelSelector, setShowModelSelector] = useState(false);

  const modelDescriptions = {
    default: 'General purpose palette generation',
    ui: 'Optimized for user interface design',
    makoto_shinkai: 'Inspired by beautiful anime color schemes',
    metroid_fusion: 'Video game inspired vibrant palettes'
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          🎨 Color Palette Generator
        </h1>
        <p className="header-subtitle">
          Create beautiful, harmonious color combinations for your next design project
        </p>
        
        {/* Model Selector */}
        <div className="model-selector-container">
          <button 
            className="model-selector-toggle"
            onClick={() => setShowModelSelector(!showModelSelector)}
            aria-expanded={showModelSelector}
            aria-label="Select color generation model"
          >
            <span className="model-label">Style:</span>
            <span className="current-model">{currentModel}</span>
            <span className={`chevron ${showModelSelector ? 'open' : ''}`}>▼</span>
          </button>
          
          {showModelSelector && (
            <div className="model-dropdown">
              {Object.entries(COLORMIND_MODELS).map(([key, value]) => (
                <button
                  key={key}
                  className={`model-option ${currentModel === value ? 'active' : ''}`}
                  onClick={() => {
                    onModelChange(value);
                    setShowModelSelector(false);
                  }}
                >
                  <span className="model-name">{value}</span>
                  <span className="model-description">{modelDescriptions[value]}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
