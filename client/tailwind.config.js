/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


/*
Make sure to add the whatever folder you to 
apply style to in the content
array in the current tailwind.config.js file
otherwise you might get a weird bug where
some tailwind styles don't work
*/