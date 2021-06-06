const colors = require('tailwindcss/colors');

module.exports = {
    // mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','./layout/*.{js,ts,jsx,tsx}' ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['Nunito', 'ui-sans-serif', 'system-ui']
        },
        extend: {
            colors: {
                emerald: colors.emerald,
                rose: colors.rose,
                amber: colors.amber,
                cyan: colors.cyan,
                teal: colors.teal,
                violet: colors.violet
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["active"],
        },
    },
    plugins: [],
}
