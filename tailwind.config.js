/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/About.jsx", "./src/pages/Contact.jsx", "./src/pages/home.jsx", "./src/pages/login.jsx", "./src/pages/Signup.jsx"],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }