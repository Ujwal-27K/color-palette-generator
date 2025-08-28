<div align="center">

# 🎨 Color Palette Generator

### *Create Beautiful, Harmonious Color Combinations with AI*

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Powered by Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![API Integration](https://img.shields.io/badge/API-Colormind-FF6B6B?style=for-the-badge)](http://colormind.io/)
[![Responsive Design](https://img.shields.io/badge/Design-Responsive-4ECDC4?style=for-the-badge)](/)
[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge)](https://color-palette-generator-git-main-ujwal-27ks-projects.vercel.app)

🎨 **An AI-powered color palette generator built with React and modern web technologies**

[🚀 Live Demo](https://color-palette-generator-git-main-ujwal-27ks-projects.vercel.app) • [📖 Documentation](#-features) • [🤝 Contributing](#-contributing) • [💻 GitHub](https://github.com/Ujwal-27K/color-palette-generator)

![Color Palette Generator](https://via.placeholder.com/800x400/667eea/ffffff?text=🎨+Color+Palette+Generator)

</div>

---

## ✨ About The Project

A modern, responsive **color palette generator** web application that harnesses the power of **Colormind's AI** to create stunning, harmonious color combinations for your design projects. Built with **React**, **Vite**, and featuring an intuitive interface with keyboard shortcuts and advanced color locking functionality.

### 🎯 Why This Project?

- **🤖 AI-Powered Generation**: Leverages machine learning algorithms for intelligent color harmonies
- **🎨 Designer-Friendly**: Perfect for UI/UX designers, developers, and digital artists
- **⚡ Lightning Fast**: Built with Vite for optimal performance and development experience
- **📱 Mobile-First**: Fully responsive design that works beautifully across all devices
- **♿ Accessible**: WCAG 2.1 compliant with full keyboard navigation support

---

## 🚀 Live Demo & Features

### 🎮 **Interactive Features**

<table>
<tr>
<td width="50%">

### 🎨 **Core Functionality**
- ✅ **AI Color Generation** - Intelligent palette creation using Colormind API
- ✅ **One-Click Copy** - Copy individual colors or entire palettes instantly
- ✅ **Color Locking System** - Lock favorite colors and generate around them
- ✅ **Keyboard Shortcuts** - Spacebar to generate, 'C' to copy all
- ✅ **Multiple AI Models** - Choose from different generation algorithms
- ✅ **Real-time Feedback** - Instant notifications for all actions

</td>
<td width="50%">

### 🛠️ **Technical Excellence**
- ✅ **Responsive Design** - Perfect on mobile, tablet, and desktop
- ✅ **Modern React** - Hooks, functional components, and best practices
- ✅ **API Integration** - Robust Colormind REST API implementation
- ✅ **Error Handling** - Graceful fallbacks when API is unavailable
- ✅ **Accessibility First** - Full ARIA support and keyboard navigation
- ✅ **Performance Optimized** - Fast loading and smooth interactions

</td>
</tr>
</table>

### 🎮 **User Experience Guide**

| 🎯 Action | 🎮 Method | 📝 Description |
|-----------|-----------|----------------|
| **Generate New Palette** | `Click Generate` or `Spacebar` | Creates fresh AI-generated color combinations |
| **Copy Single Color** | `Click on color swatch` | Instantly copies hex code to clipboard |
| **Copy Entire Palette** | `Press C key` or `Copy All button` | Copies all colors as comma-separated values |
| **Lock/Unlock Colors** | `Click 🔒 icon on swatch` | Preserves favorite colors in new generations |
| **Change AI Model** | `Style dropdown in header` | Switch between different generation algorithms |
| **Keyboard Navigation** | `Tab` and `Enter` keys | Full accessibility support |

---

## 🛠️ Built With

<div align="center">

### **Frontend Stack**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

### **Build Tools & APIs**
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Colormind API](https://img.shields.io/badge/Colormind_API-FF6B6B?style=for-the-badge)
![Clipboard API](https://img.shields.io/badge/Clipboard_API-4ECDC4?style=for-the-badge)

### **Deployment & Version Control**
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

### 🏗️ **Project Architecture**

📁 Project Structure
├── 🎯 src/
│ ├── 🏠 App.jsx (Main application & state management)
│ ├── 🎨 App.css (Global application styles)
│ ├── 🌐 index.css (CSS reset & design system)
│ ├── ⚡ main.jsx (React entry point)
│ │
│ ├── 🧩 components/
│ │ ├── 🏠 Header.jsx (Title & AI model selector)
│ │ ├── 🎨 ColorPalette.jsx (Main color display & interactions)
│ │ ├── 🎮 Controls.jsx (Generate & copy action buttons)
│ │ ├── 📖 Instructions.jsx (User guide & help section)
│ │ ├── 🔔 Notification.jsx (Success/error message system)
│ │ └── 🎨 *.css (Component-specific styles)
│ │
│ └── 🛠️ utils/
│ └── 🎨 colorUtils.js (Color operations & API integration)
│
├── 📦 package.json (Dependencies & scripts)
├── ⚡ vite.config.js (Build configuration)
└── 🌐 index.html (HTML template)

---

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** v18.0+ - [Download here](https://nodejs.org/)
- **npm** v9.0+ - (Comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **Modern Web Browser** - Chrome, Firefox, Safari, or Edge

### ⚡ Installation & Setup

Follow these simple steps to get your development environment running:

1️⃣ Clone the repository
git clone https://github.com/Ujwal-27K/color-palette-generator.git 

2️⃣ Navigate to project directory
cd color-palette-generator

3️⃣ Install dependencies
npm install

4️⃣ Start development server 
npm run dev

5️⃣ Open your browser
Navigate to http://localhost:5173 

### 🎯 **Available Scripts**

npm run dev # 🚀 Start development server \
npm run build # 📦 Build for production \
npm run preview # 👀 Preview production build \
npm run lint # 🧹 Run ESLint for code quality \

---

## 📖 Usage Guide

### 🎨 **Getting Started with Color Generation**

1. **🔄 Automatic Generation**: The app loads with a fresh AI-generated palette
2. **🎯 Choose Your Style**: Select different AI models from the header dropdown
3. **📋 Copy Colors**: Click any color swatch to instantly copy its hex code
4. **🔒 Lock Favorites**: Click the lock icon to preserve colors you love
5. **⚡ Quick Actions**: Use keyboard shortcuts for lightning-fast workflow

### ⌨️ **Keyboard Shortcuts**

| Key | Action | Description |
|-----|---------|-------------|
| `Spacebar` | **Generate New Palette** | Creates a fresh set of colors |
| `C` | **Copy All Colors** | Copies entire palette to clipboard |
| `Tab` | **Navigate Interface** | Move between interactive elements |
| `Enter` | **Activate Element** | Trigger focused buttons or controls |
| `Escape` | **Close Dropdowns** | Close any open menus or dropdowns |

### 🤖 **AI Models & Styles**

Choose from different AI models for varied color generation styles:

| Model | Best For | Style Description |
|-------|----------|------------------|
| **`default`** | General Design | Balanced, versatile color combinations |
| **`ui`** | Interface Design | Clean, professional palettes for UI/UX |
| **`makoto_shinkai`** | Artistic Projects | Beautiful, cinematic color schemes |
| **`metroid_fusion`** | Gaming & Creative | Vibrant, energetic color combinations |

---

## 🌐 API Integration & Technical Details

### 🤖 **Colormind AI API**

This project integrates seamlessly with the [Colormind API](http://colormind.io/api-access/) for intelligent color generation:

/**

🎨 Example API Integration

Demonstrates how we fetch AI-generated color palettes
*/
const fetchColormindPalette = async (model = 'default', input = null) => {
try {
const response = await fetch('http://colormind.io/api/', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Accept': 'application/json'
},
body: JSON.stringify({
model: model, // Choose AI model
input: input // Optional: lock specific colors
})
});

const data = await response.json();
return data.result.map(rgb => rgbToHex(rgb));
} catch (error) {
console.warn('API failed, using fallback colors');
return generateRandomPalette(); // Graceful fallback
}
};

### ✨ **API Features**

- 🧠 **Machine Learning Powered** - Advanced algorithms for color harmony
- 🎯 **Multiple Generation Models** - Different styles for various use cases
- 🔒 **Color Locking Support** - Generate around specific colors
- 🚫 **Graceful Error Handling** - Automatic fallback to random generation
- ⚡ **Fast Response Times** - Optimized for real-time interaction

### 🛠️ **Technical Implementation**

- **State Management**: React hooks for efficient state handling
- **Error Boundaries**: Comprehensive error handling throughout the app
- **Performance**: Optimized re-renders with `useCallback` and `useMemo`
- **Accessibility**: Full ARIA implementation for screen readers
- **Responsive Design**: CSS Grid and Flexbox for perfect layouts

---

## 📱 Responsive Design & Browser Support

### 📊 **Breakpoint Strategy**

<div align="center">

| 📱 Device Type | 📏 Breakpoint | 🎨 Layout Strategy |
|----------------|---------------|-------------------|
| **Extra Small** | `< 400px` | Minimal padding, compact swatches |
| **Mobile Portrait** | `400px - 576px` | Single column, touch-optimized |
| **Mobile Landscape** | `576px - 768px` | Balanced grid, larger touch targets |
| **Tablet** | `768px - 992px` | Enhanced spacing, better readability |
| **Desktop** | `992px - 1200px` | Full feature layout, optimal sizing |
| **Large Desktop** | `1200px+` | Maximum visual impact, expanded features |

</div>

### 🌐 **Browser Compatibility**

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Mobile Browsers** (iOS Safari, Chrome Mobile)

### ♿ **Accessibility Features**

- 🎯 **WCAG 2.1 Compliant** - AA accessibility standards
- ⌨️ **Full Keyboard Navigation** - No mouse required
- 🔊 **Screen Reader Support** - Complete ARIA implementation
- 🎨 **High Contrast Mode** - Support for accessibility preferences
- 🎭 **Reduced Motion** - Respects user motion preferences

---

## 🚀 Deployment Guide

### 🌐 **Deploy to Vercel (Recommended)**

Vercel provides the best experience for React applications:

1️⃣ Install Vercel CLI\
npm install -g vercel\

2️⃣ Build your project\
npm run build\

3️⃣ Deploy to Vercel\
vercel --prod\

4️⃣ Follow the prompts to configure your deployment

---

## 🤝 Contributing

We love contributions from the community! Here's how you can help make this project even better:

### 🌟 **Ways to Contribute**

- 🐛 **Bug Reports** - Found an issue? Let us know!
- ✨ **Feature Requests** - Have an idea? We'd love to hear it!
- 🔧 **Code Contributions** - Submit pull requests
- 📚 **Documentation** - Help improve our docs
- 🎨 **Design Suggestions** - Make it even more beautiful

### 🛠️ **Development Workflow**

1️⃣ Fork the repository on GitHub
2️⃣ Clone your fork
git clone https://github.com/your-username/color-palette-generator.git

3️⃣ Create a feature branch
git checkout -b feature/amazing-new-feature

4️⃣ Make your changes and commit
git add .
git commit -m "feat: add amazing new feature"

5️⃣ Push to your fork
git push origin feature/amazing-new-feature

6️⃣ Create a Pull Request on GitHub

### 📝 **Commit Message Convention**

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` ✨ New features
- `fix:` 🐛 Bug fixes
- `docs:` 📚 Documentation updates
- `style:` 🎨 Code style changes (formatting, etc.)
- `refactor:` 🔧 Code refactoring
- `test:` 🧪 Adding or updating tests
- `chore:` 🏗️ Build process or auxiliary tool changes

---

## 📋 Roadmap & Future Enhancements

### 🎯 **Coming Soon**

- [ ] 🎨 **Custom Color Input** - Start palettes from your own colors
- [ ] 💾 **Save & Export** - Save favorite palettes locally
- [ ] 🎭 **Theme Support** - Dark mode and custom themes  
- [ ] 📱 **PWA Features** - Offline support and app installation
- [ ] 🔗 **Palette Sharing** - Share palettes via URLs
- [ ] 🎯 **Accessibility Checker** - Built-in contrast validation
- [ ] 🎨 **More Export Formats** - CSS, SCSS, JSON, Adobe ASE

### 💡 **Long-term Vision**

- [ ] 🤖 **Advanced AI Models** - Custom-trained color generation
- [ ] 🎨 **Image-based Generation** - Extract palettes from photos
- [ ] 👥 **User Accounts** - Save and organize palette collections
- [ ] 🌐 **Community Features** - Share and discover public palettes
- [ ] 📊 **Analytics Dashboard** - Usage insights and statistics

---

## 🐛 Troubleshooting & FAQ

### ❓ **Common Issues**

<details>
<summary><strong>🚫 CORS Issues with Colormind API</strong></summary>

If you encounter CORS issues in production:

// Temporary workaround using CORS proxy
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const response = await fetch(CORS_PROXY + 'http://colormind.io/api/', options);

**Better solution**: Deploy your own CORS proxy or use server-side API calls.
</details>

<details>
<summary><strong>📋 Clipboard API Not Working</strong></summary>

The Clipboard API requires HTTPS or localhost. For HTTP sites:

// Fallback method is automatically used
const success = await copyToClipboard(text);

The app includes automatic fallback for older browsers and HTTP contexts.
</details>

<details>
<summary><strong>🔄 Build Issues</strong></summary>

If you encounter build problems:

Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

Clear Vite cache
npm run dev -- --force

</details>

### 💻 **System Requirements**

- **Node.js**: 18.0 or higher
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB for project and dependencies
- **Browser**: Modern browser with ES6+ support

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for complete details.

MIT License - Copyright (c) 2025 Ujwal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, subject to the following conditions:

[Full license text in LICENSE file]

---

## 🙏 Acknowledgments & Credits

### 🎨 **Special Thanks**

- **[Colormind](http://colormind.io/)** - For providing the amazing AI color generation API
- **[React Team](https://reactjs.org/)** - For creating such an incredible framework
- **[Vite Team](https://vitejs.dev/)** - For the lightning-fast build tool
- **[Vercel](https://vercel.com/)** - For seamless deployment and hosting

### 🎯 **Design Inspiration**

- Modern color theory and design principles
- Accessibility guidelines from WCAG 2.1
- Contemporary web design trends and best practices
- Open source design systems and component libraries

### 📚 **Learning Resources**

- [React Documentation](https://reactjs.org/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Modern CSS Techniques](https://css-tricks.com/)

---

<div align="center">

## 💎 **Project Creator**

### **Ujwal Khairnar**
#### *Full Stack Developer & UI/UX Enthusiast*

**© 2025 Ujwal Khairnar. All rights reserved.**

*Passionate about creating beautiful, accessible, and performant web experiences.*

---

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=firefoxbrowser&logoColor=white)](https://portfolio-eta-blush-qsq9j1ksqi.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ujwal-khairnar)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ujwal-27K)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ujwal.khairnar.uk@gmail.com)

---

### 🌟 **If this project helped you, please consider starring it!**

[![GitHub stars](https://img.shields.io/github/stars/Ujwal-27K/color-palette-generator?style=social)](https://github.com/Ujwal-27K/color-palette-generator/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Ujwal-27K/color-palette-generator?style=social)](https://github.com/Ujwal-27K/color-palette-generator/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/Ujwal-27K/color-palette-generator?style=social)](https://github.com/Ujwal-27K/color-palette-generator/watchers)

---

<sub>🚀 **Built with ❤️ using React, Vite, and Modern Web Technologies**</sub><br>
<sub>🎨 **Designed for developers, designers, and color enthusiasts worldwide**</sub>

</div>

---

<div align="center">
<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png" width="100%" />
</div>
