/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Assistant: ['Assistant', 'sans-serif'],
            },
            colors: {
                primaryColor: '#5065a8',
            },
        },
    },
    plugins: [],
};
