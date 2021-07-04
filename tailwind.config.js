const colors = require('tailwindcss/colors');

module.exports = {
    // mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Nunito', 'ui-sans-serif', 'system-ui'],
        },
        extend: {
            colors: {
                emerald: colors.emerald,
                rose: colors.rose,
                amber: colors.amber,
                cyan: colors.cyan,
                teal: colors.teal,
                violet: colors.violet,
            },
            maxHeight: (theme) => ({
                ...theme('spacing'),
            }),
            maxWidth: (theme) => ({
                ...theme('spacing'),
            }),
            spacing: {
                112: '28rem',
                128: '32rem',
                144: '36rem',
                160: '40rem',
                176: '44rem',
                192: '48rem',
                208: '52rem',
                224: '56rem',
                240: '60rem',
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        },
    },
    plugins: [],
};
