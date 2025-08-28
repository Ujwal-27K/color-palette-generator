/**
 * Color Utility Functions
 * Handles color generation, API integration, and color manipulation
 */

/**
 * Generates a random hexadecimal color
 * @returns {string} Random hex color (e.g., "#FF5733")
 */
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

/**
 * Generates a palette of 5 random colors
 * Used as fallback when API fails
 * @returns {string[]} Array of 5 hex colors
 */
export const generateRandomPalette = () => {
  return Array.from({ length: 5 }, generateRandomColor);
};

/**
 * Converts RGB values to hexadecimal color
 * @param {number[]} rgb - Array of RGB values [r, g, b]
 * @returns {string} Hex color string (e.g., "#FF5733")
 */
const rgbToHex = (rgb) => {
  return "#" + rgb.map(x => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("").toUpperCase();
};

/**
 * Validates if a string is a valid hex color
 * @param {string} hex - Hex color string to validate
 * @returns {boolean} True if valid hex color
 */
export const isValidHexColor = (hex) => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
};

/**
 * Fetches a color palette from the Colormind API
 * Colormind is an AI-powered color palette generator that creates
 * harmonious color combinations based on machine learning
 * 
 * API Documentation: http://colormind.io/api-access/
 * 
 * @param {string} model - The color model to use ('default', 'ui', etc.)
 * @param {number[][]} input - Optional input colors to influence the palette
 * @returns {Promise<string[]|null>} Array of hex colors or null if failed
 */
export const fetchColormindPalette = async (model = 'default', input = null) => {
  try {
    console.log('🎨 Fetching palette from Colormind API...');
    
    // Prepare the request body for the Colormind API
    const requestBody = {
      model: model // Available models: 'default', 'ui', 'makoto_shinkai', 'metroid_fusion'
    };
    
    // If input colors are provided, add them to the request
    // Input format: array of RGB arrays or "N" for random
    if (input) {
      requestBody.input = input;
    }
    
    // Make the API request
    // Note: Colormind API uses POST method and returns RGB values
    const response = await fetch('http://colormind.io/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Parse the JSON response
    const data = await response.json();
    console.log('✅ Successfully received palette from Colormind API');
    
    // Convert RGB arrays to hex color strings
    // API returns: { result: [[r,g,b], [r,g,b], [r,g,b], [r,g,b], [r,g,b]] }
    return data.result.map(rgb => rgbToHex(rgb));
    
  } catch (error) {
    console.warn('⚠️ Colormind API request failed:', error.message);
    console.log('🔄 Falling back to random color generation');
    return null;
  }
};

/**
 * Fetches a palette with locked colors preserved
 * Combines API generation with user-locked colors
 * 
 * @param {string[]} currentPalette - Current color palette
 * @param {boolean[]} lockedColors - Array indicating which colors are locked
 * @param {string} model - Colormind model to use
 * @returns {Promise<string[]>} New palette with locked colors preserved
 */
export const fetchPaletteWithLockedColors = async (currentPalette, lockedColors, model = 'default') => {
  try {
    // Create input array for API - locked colors as RGB, others as "N" (random)
    const input = currentPalette.map((color, index) => {
      if (lockedColors[index]) {
        // Convert hex to RGB for locked colors
        return hexToRgb(color);
      }
      return "N"; // "N" tells API to generate random color for this position
    });
    
    console.log('🔒 Generating palette with locked colors:', input);
    
    // Fetch new palette from API with locked color constraints
    const apiPalette = await fetchColormindPalette(model, input);
    
    if (apiPalette) {
      // Ensure locked colors remain unchanged
      return currentPalette.map((color, index) => 
        lockedColors[index] ? color : apiPalette[index]
      );
    }
    
    // Fallback: generate random colors for non-locked positions only
    return currentPalette.map((color, index) => 
      lockedColors[index] ? color : generateRandomColor()
    );
    
  } catch (error) {
    console.warn('Error in fetchPaletteWithLockedColors:', error);
    // Fallback: preserve locked colors, randomize others
    return currentPalette.map((color, index) => 
      lockedColors[index] ? color : generateRandomColor()
    );
  }
};

/**
 * Converts hex color to RGB array
 * @param {string} hex - Hex color string
 * @returns {number[]} RGB array [r, g, b]
 */
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : [0, 0, 0];
};

/**
 * Calculates the perceived brightness of a color
 * Uses the relative luminance formula for accessibility
 * @param {string} hex - Hex color string
 * @returns {number} Brightness value (0-255)
 */
export const getColorBrightness = (hex) => {
  const rgb = hexToRgb(hex);
  // Calculate perceived brightness using the relative luminance formula
  return Math.round(((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000);
};

/**
 * Determines if white or black text should be used on a color background
 * @param {string} backgroundColor - Hex color string
 * @returns {string} Either "#FFFFFF" (white) or "#000000" (black)
 */
export const getContrastTextColor = (backgroundColor) => {
  const brightness = getColorBrightness(backgroundColor);
  return brightness > 128 ? '#000000' : '#FFFFFF';
};

/**
 * Copies text to clipboard using the modern Clipboard API with fallback
 * @param {string} text - Text to copy to clipboard
 * @returns {Promise<boolean>} Promise resolving to success status
 */
export const copyToClipboard = async (text) => {
  try {
    // Try modern Clipboard API first (requires HTTPS or localhost)
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers or non-secure contexts
      return fallbackCopyTextToClipboard(text);
    }
  } catch (error) {
    console.warn('Clipboard API failed, trying fallback:', error);
    return fallbackCopyTextToClipboard(text);
  }
};

/**
 * Fallback clipboard function for older browsers
 * @param {string} text - Text to copy
 * @returns {boolean} Success status
 */
const fallbackCopyTextToClipboard = (text) => {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    
    return successful;
  } catch (error) {
    console.error('Fallback clipboard failed:', error);
    return false;
  }
};

/**
 * Available Colormind models for different use cases
 */
export const COLORMIND_MODELS = {
  default: 'default',        // General purpose palette generation
  ui: 'ui',                 // Optimized for user interface design
  makoto_shinkai: 'makoto_shinkai',  // Inspired by Makoto Shinkai's color schemes
  metroid_fusion: 'metroid_fusion'   // Video game inspired palettes
};

/**
 * Export palette in different formats
 * @param {string[]} palette - Array of hex colors
 * @param {string} format - Export format ('css', 'json', 'text', 'scss')
 * @returns {string} Formatted palette string
 */
export const exportPalette = (palette, format = 'css') => {
  switch (format) {
    case 'css':
      return palette.map((color, index) => 
        `  --color-${index + 1}: ${color};`
      ).join('\n');
    
    case 'scss':
      return palette.map((color, index) => 
        `$color-${index + 1}: ${color};`
      ).join('\n');
    
    case 'json':
      return JSON.stringify(palette, null, 2);
    
    case 'text':
      return palette.join('\n');
    
    default:
      return palette.join(', ');
  }
};
