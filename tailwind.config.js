/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Vibrant/Dark theme colors will be handled by CSS variables or utility classes basically
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
