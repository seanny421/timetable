module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '90': '90%',
        '95': '95%',
        '70': '70%',
        '60': '60%',
    },
    extend: {
        keyframes: {
            press: {
                "0%, 100%": {transform: "scale(1)"},
                "50%": {transform: "scale(0.95)"}
            }
        },
        animation: {
            press: "press 200ms ease-in-out"
        },
        width: {
            '200p' : '200%',
            '300p' : '300%',
            '400p' : '400%',
        },
        translate: {
            '200p': '200%',
            '250p': '250%',
            '300p': '300%',
            '400p': '400%',
            '450p': '450%',
            '500p': '500%',
            '6px': '4px',
            '6-px': '-6px',
            '8px': '8px',
            '8-px': '-8px',
            '9px': '9px',
            '9-px': '-9px',
            '10px': '10px',
            '12-px': '-12px',
            '600p': '600%',
            '100-p': '-100%',
            '200-p': '-200%',
            '300-p': '-300%',
            '500-p': '-500%',
            '600-p': '-600%',
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
