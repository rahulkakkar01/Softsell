## SoftSell - Software License Marketplace

A modern, responsive landing page for SoftSell - a platform that helps businesses monetize their unused software licenses quickly and securely.

## Features

- 💡 *Modern UI* - Built with React, Tailwind CSS, and ShadCN UI components
- 🌓 *Dark/Light Mode* - Seamless theme switching with system preference detection
- 📱 *Fully Responsive* - Optimized for all device sizes
- 💬 *AI Chat Bot* - Interactive chat assistant with predefined Q&A
- 🎨 *Customizable Theme* - Easy to customize colors and styling
- ⚡ *Fast Performance* - Built with Vite for optimal development experience

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Installation

1. Clone the repository
   bash
   git clone https://github.com/rahulkakkar01/Softsell.git
   cd Softsell
   

2. Install dependencies
   bash
   npm install
   

3. Start the development server
   bash
   npm run dev
   

4. Open your browser and visit http://localhost:5173

## Project Structure

```
softsell-site/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # React components
│   │   ├── ui/          # UI components from ShadCN
│   │   └── ...          # Custom components
│   ├── lib/             # Utility functions
│   ├── styles/          # Global styles
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Customization

### Colors and Theme

You can customize the theme colors in globals.css. The application uses CSS variables for theming, making it easy to change colors for both light and dark modes.

### Components

The UI components are based on ShadCN UI, a collection of reusable components built with Radix UI and Tailwind CSS. You can customize these components in the ui directory.

## Key Features

### Responsive Design
The website is fully responsive, providing an optimal viewing experience across a wide range of devices from mobile phones to desktop monitors.

### Interactive Chat Bot
An AI-powered chat assistant helps visitors get quick answers to common questions about selling software licenses.

### Dark/Light Mode
Users can switch between dark and light themes based on their preference, with the system also detecting their default preference.

### Animated UI Elements
Subtle animations enhance the user experience with smooth transitions and interactive elements.

### Form Validation
The contact form includes client-side validation to ensure all required information is collected correctly.

## Deployment

To build the application for production, run:

bash
npm run build


This will generate optimized files in the dist directory, which you can deploy to any static hosting service like Vercel, Netlify, or GitHub Pages.
 

## Contact
- Time taken to complete this project was 14 to 15 hr
- Rahul Kakkar - rahulkakkar@example.com
- Project Link: [https://softsell-taupe.vercel.app/](https://softsell-taupe.vercel.app/)
