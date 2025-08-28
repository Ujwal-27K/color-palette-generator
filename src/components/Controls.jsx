import './Controls.css';

/**
 * Controls Component
 * Provides main action buttons for palette generation and copying
 */
const Controls = ({ onGenerate, onCopyAll, isLoading }) => {
  return (
    <div className="controls">
      <div className="controls-grid">
        
        {/* Primary generate button */}
        <button 
          className={`btn btn-primary generate-btn ${isLoading ? 'loading' : ''}`}
          onClick={onGenerate}
          disabled={isLoading}
          aria-label="Generate new color palette"
        >
          <span className="btn-icon">🎨</span>
          <span className="btn-text">
            {isLoading ? 'Generating...' : 'Generate New Palette'}
          </span>
          {isLoading && <div className="btn-spinner"></div>}
        </button>
        
        {/* Copy all button */}
        <button 
          className="btn btn-secondary copy-all-btn"
          onClick={onCopyAll}
          disabled={isLoading}
          aria-label="Copy entire palette to clipboard"
        >
          <span className="btn-icon">📋</span>
          <span className="btn-text">Copy All Colors</span>
        </button>
        
      </div>
      
      {/* Quick actions hint */}
      <div className="controls-hint">
        <p className="hint-text">
          <kbd>Space</kbd> to generate • <kbd>C</kbd> to copy all
        </p>
      </div>
    </div>
  );
};

export default Controls;
