/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1100px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        DesaturatedDarkCyan: 'hsl(180, 29%, 50%)',
        LightGrayishCyan: 'hsl(180, 52%, 96%)',
        LightGrayishCyann: 'hsl(180, 31%, 95%)',
        DarkGrayishCyan: 'hsl(180, 8%, 52%)',
        VeryDarkGrayishCyan: 'hsl(220, 14%, 75%)',
        LightGrayishblue: 'hsl(180, 14%, 20%)',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
        spaceMono: ['Space+Mono'],
      },
    },
  },
  plugins: [],
}
