import { useState, useEffect, useCallback } from "react";
import "./App.css";

// Component imports
import ColorPalette from "./components/ColorPalette";
import Controls from "./components/Controls";
import Instructions from "./components/Instructions";
import Notification from "./components/Notification";
import Header from "./components/Header";

// Utility imports
import {
  generateRandomPalette,
  fetchColormindPalette,
  fetchPaletteWithLockedColors,
  copyToClipboard,
} from "./utils/colorUtils";

/**
 * Main App Component
 * Manages the entire color palette generator application state and functionality
 */
function App() {
  // State management for the application
  const [palette, setPalette] = useState([]); // Current color palette array
  const [lockedColors, setLockedColors] = useState([
    false,
    false,
    false,
    false,
    false,
  ]); // Lock status for each color
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  }); // Notification system
  const [isLoading, setIsLoading] = useState(false); // Loading state for API calls
  const [currentModel, setCurrentModel] = useState("default"); // Current Colormind model

  /**
   * Shows a notification message to the user
   * Automatically hides after 3 seconds
   * @param {string} message - Message to display
   * @param {string} type - Notification type ('success', 'error', 'warning')
   */
  const showNotification = useCallback((message, type = "success") => {
    setNotification({ show: true, message, type });

    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "success" });
    }, 3000);
  }, []);

  /**
   * Generates a new color palette
   * First tries Colormind API, falls back to random generation if API fails
   * Respects locked colors by preserving them in new generation
   */
  const generateNewPalette = useCallback(async () => {
    setIsLoading(true);

    try {
      let newPalette;

      // Check if any colors are locked
      const hasLockedColors = lockedColors.some((locked) => locked);

      if (hasLockedColors && palette.length === 5) {
        // Generate palette with locked colors preserved
        console.log("🔒 Generating palette with locked colors");
        newPalette = await fetchPaletteWithLockedColors(
          palette,
          lockedColors,
          currentModel
        );
      } else {
        // Generate completely new palette from API
        console.log("🎨 Generating fresh palette from Colormind API");
        const apiPalette = await fetchColormindPalette(currentModel);
        newPalette = apiPalette || generateRandomPalette();
      }

      setPalette(newPalette);
      console.log("✅ New palette generated:", newPalette);
    } catch (error) {
      console.error("Error generating palette:", error);

      // Fallback: Generate random colors for non-locked positions
      const fallbackPalette =
        palette.length === 5
          ? palette.map((color, index) =>
              lockedColors[index] ? color : generateRandomPalette()[0]
            )
          : generateRandomPalette();

      setPalette(fallbackPalette);
      showNotification("Using random colors (API unavailable)", "warning");
    }

    setIsLoading(false);
  }, [palette, lockedColors, currentModel, showNotification]);

  /**
   * Initialize the app with a fresh palette on component mount
   */
  useEffect(() => {
    console.log("🚀 Initializing Color Palette Generator");
    generateNewPalette();
  }, []); // Empty dependency array - only run on mount

  /**
   * Keyboard event handlers for enhanced user experience
   * Spacebar: Generate new palette
   * C key: Copy entire palette
   */
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Prevent keyboard shortcuts when user is typing in input fields
      const isTyping = event.target.matches("input, textarea, select");

      // Spacebar to generate new palette
      if (event.code === "Space" && !isTyping) {
        event.preventDefault(); // Prevent page scroll
        console.log("⌨️ Spacebar pressed - generating new palette");
        generateNewPalette();
      }

      // 'C' key to copy entire palette
      if (event.key.toLowerCase() === "c" && !isTyping) {
        event.preventDefault();
        copyEntirePalette();
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup event listener on component unmount
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [palette, generateNewPalette]);

  /**
   * Toggles the lock state of a specific color
   * Locked colors are preserved when generating new palettes
   * @param {number} index - Index of the color to toggle
   */
  const toggleLock = useCallback(
    (index) => {
      const newLockedColors = [...lockedColors];
      newLockedColors[index] = !newLockedColors[index];
      setLockedColors(newLockedColors);

      const lockStatus = newLockedColors[index] ? "locked" : "unlocked";
      console.log(`🔒 Color ${index + 1} ${lockStatus}:`, palette[index]);
      showNotification(`Color ${lockStatus}!`, "success");
    },
    [lockedColors, palette, showNotification]
  );

  /**
   * Copies a single color to clipboard
   * @param {string} color - Hex color string to copy
   * @param {number} index - Index of the color for logging
   */
  const copyColor = useCallback(
    async (color, index) => {
      try {
        const success = await copyToClipboard(color);

        if (success) {
          console.log(`📋 Copied color to clipboard:`, color);
          showNotification(`${color} copied!`, "success");
        } else {
          throw new Error("Clipboard operation failed");
        }
      } catch (error) {
        console.error("Failed to copy color:", error);
        showNotification("Failed to copy color", "error");
      }
    },
    [showNotification]
  );

  /**
   * Copies the entire palette as a comma-separated string
   */
  const copyEntirePalette = useCallback(async () => {
    if (palette.length === 0) {
      showNotification("No palette to copy", "warning");
      return;
    }

    try {
      const paletteString = palette.join(", ");
      const success = await copyToClipboard(paletteString);

      if (success) {
        console.log("📋 Copied entire palette:", paletteString);
        showNotification("Palette copied!", "success");
      } else {
        throw new Error("Failed to copy palette");
      }
    } catch (error) {
      console.error("Failed to copy palette:", error);
      showNotification("Failed to copy palette", "error");
    }
  }, [palette, showNotification]);

  /**
   * Changes the Colormind model for different color generation styles
   * @param {string} model - New model to use
   */
  const changeModel = useCallback(
    (model) => {
      setCurrentModel(model);
      console.log("🎨 Changed Colormind model to:", model);
      showNotification(`Switched to ${model} model`, "success");
    },
    [showNotification]
  );

  // Main application render
  return (
    <div className="app">
      {/* Main application container with responsive design */}
      <div className="app-container">
        {/* Header section with title and description */}
        <Header currentModel={currentModel} onModelChange={changeModel} />

        {/* Main content area */}
        <main className="app-main">
          {/* Color palette display - the heart of the application */}
          <ColorPalette
            palette={palette}
            lockedColors={lockedColors}
            onColorClick={copyColor}
            onToggleLock={toggleLock}
            isLoading={isLoading}
          />

          {/* Control buttons and actions */}
          <Controls
            onGenerate={generateNewPalette}
            onCopyAll={copyEntirePalette}
            isLoading={isLoading}
          />

          {/* Usage instructions for users */}
          <Instructions />
        </main>

        <footer className="app-footer">
          <p>
            Made with ❤️ using{" "}
            <a
              href="http://colormind.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colormind API
            </a>
          </p>
          <p>
            Press <kbd>Space</kbd> to generate • Press <kbd>C</kbd> to copy all
          </p>
          <div className="footer-trademark">
            <p>
              Built by{" "}
              <a
                href="https://portfolio-eta-blush-qsq9j1ksqi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Ujwal Khairnar</strong>
              </a>
            </p>
            <p>© 2025 Ujwal Khairnar. All rights reserved.</p>
            <div className="footer-links">
              <a
                href="https://github.com/Ujwal-27K"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com/in/ujwal-khairnar"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a href="mailto: ujwal.khairnar.uk@gmail.com">Contact</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Notification system - shows success/error messages */}
      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
      />
    </div>
  );
}

export default App;
