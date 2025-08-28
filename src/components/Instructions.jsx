import './Instructions.css';

/**
 * Instructions Component
 * Provides helpful usage instructions and tips for users
 */
const Instructions = () => {
  return (
    <div className="instructions">
      <div className="instructions-content">
        <h3 className="instructions-title">How to use</h3>
        
        <div className="instructions-grid">
          
          <div className="instruction-item">
            <div className="instruction-icon">🖱️</div>
            <div className="instruction-text">
              <strong>Click any color</strong>
              <span>Copy hex code to clipboard</span>
            </div>
          </div>
          
          <div className="instruction-item">
            <div className="instruction-icon">⌨️</div>
            <div className="instruction-text">
              <strong>Press <kbd>Space</kbd></strong>
              <span>Generate new palette</span>
            </div>
          </div>
          
          <div className="instruction-item">
            <div className="instruction-icon">📋</div>
            <div className="instruction-text">
              <strong>Press <kbd>C</kbd></strong>
              <span>Copy entire palette</span>
            </div>
          </div>
          
          <div className="instruction-item">
            <div className="instruction-icon">🔒</div>
            <div className="instruction-text">
              <strong>Lock colors</strong>
              <span>Preserve favorites when generating</span>
            </div>
          </div>
          
        </div>
        
        {/* Pro tips section */}
        <div className="pro-tips">
          <h4 className="pro-tips-title">💡 Pro Tips</h4>
          <ul className="tips-list">
            <li>Lock your favorite colors before generating new palettes</li>
            <li>Try different AI models for various design styles</li>
            <li>Use keyboard shortcuts for faster workflow</li>
            <li>Copy individual colors or the entire palette</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
