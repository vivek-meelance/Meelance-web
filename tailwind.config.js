/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2sm' : '450px',
        '3xl': '1920px', // Adding a custom breakpoint for 1920px width screens
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // Default padding
          sm: '2rem',      // Padding for small screens
          lg: '3rem',      // Padding for large screens
          xl: '4rem',      // Padding for extra-large screens
          '2xl': '6rem',
          // '3xl': '10rem'      
        },
      },
    },
  },
  plugins: [],
}