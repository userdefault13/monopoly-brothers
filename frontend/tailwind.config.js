module.exports = {
  // Specify the paths to all of the template files in your project.
  // This is used by PurgeCSS to remove unused styles in production builds.
  content: ['./src/**/*.html', './src/**/*.js'],

  // Extend the default Tailwind CSS theme with your custom styles.
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        primary: '#1E40AF',
        secondary: '#FF6347',
      },
      fontFamily: {
        // Add custom fonts here
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      // Add more theme customizations here...
    },
  },

  // Enable additional plugins if needed.
  plugins: [
    // Add your custom plugins here, if any.
    // require('@tailwindcss/typography'), // Example plugin
  ],

  // Control how the Tailwind CSS features are purged (removed) in production builds.
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.html', './src/**/*.js'],
  },
};

