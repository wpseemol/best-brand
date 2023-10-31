/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                mySansFont: ['Open Sans', 'sans-serif'],
            },
            colors: {
                primaryColo: '#ec7c21',
            },
        },
    },
    plugins: [],
};
