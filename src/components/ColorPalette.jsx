import { useState } from 'react';
import './ColorPalette.css';
import { getContrastTextColor } from '../utils/colorUtils';

/**
 * ColorPalette Component
 * Displays the main color palette with interactive color swatches
 * Features: click to copy, lock/unlock colors, hover effects
 */
const ColorPalette = ({ palette, lockedColors, onColorClick, onToggleLock, isLoading }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Handle color click with visual feedback
  const handleColorClick = (color, index) => {
    onColorClick(color, index);
    
    // Show copied feedback
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1000);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="palette-loading">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Generating beautiful colors...</p>
        </div>
      </div>
    );
  }

  // Empty state
  if (!palette || palette.length === 0) {
    return (
      <div className="palette-empty">
        <p>No palette generated yet</p>
      </div>
    );
  }

  return (
    <div className="color-palette">
      <div className="palette-grid">
        {palette.map((color, index) => {
          const isHovered = hoveredIndex === index;
          const isLocked = lockedColors[index];
          const isCopied = copiedIndex === index;
          const textColor = getContrastTextColor(color);
          
          return (
            <div 
              key={index}
              className={`color-swatch ${isLocked ? 'locked' : ''} ${isCopied ? 'copied' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color, index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              role="button"
              tabIndex={0}
              aria-label={`Color ${color}, click to copy${isLocked ? ', locked' : ''}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleColorClick(color, index);
                }
              }}
            >
              {/* Lock/unlock button */}
              <button 
                className={`lock-btn ${isLocked ? 'locked' : 'unlocked'}`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent color copy when clicking lock
                  onToggleLock(index);
                }}
                title={isLocked ? 'Unlock this color' : 'Lock this color'}
                aria-label={isLocked ? 'Unlock this color' : 'Lock this color'}
                style={{ color: textColor }}
              >
                {isLocked ? '🔒' : '🔓'}
              </button>
              
              {/* Color information overlay */}
              <div 
                className={`color-info ${isHovered || isCopied ? 'visible' : ''}`}
                style={{ color: textColor }}
              >
                <span className="color-hex">{color}</span>
                {isCopied && (
                  <span className="copied-indicator">Copied!</span>
                )}
                {!isCopied && isHovered && (
                  <span className="click-hint">Click to copy</span>
                )}
              </div>
              
              {/* Locked indicator overlay */}
              {isLocked && (
                <div className="locked-overlay" style={{ color: textColor }}>
                  <span className="locked-text">Locked</span>
                </div>
              )}
              
              {/* Color position indicator */}
              <div className="color-index" style={{ color: textColor }}>
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Palette info */}
      <div className="palette-info">
        <p className="palette-description">
          {lockedColors.some(locked => locked) 
            ? `${lockedColors.filter(Boolean).length} color${lockedColors.filter(Boolean).length > 1 ? 's' : ''} locked`
            : 'Click any color to copy its hex code'
          }
        </p>
      </div>
    </div>
  );
};

export default ColorPalette;
