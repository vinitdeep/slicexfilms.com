/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      "colors": {
        "surface-bright": "#3a3939",
        "on-background": "#e5e2e1",
        "outline-variant": "#4d4635",
        "on-secondary": "#482900",
        "surface-container-highest": "#353534",
        "surface-container": "#201f1f",
        "on-primary": "#3c2f00",
        "tertiary-fixed": "#ffdad5",
        "primary": "#f2ca50",
        "on-secondary-container": "#fdb86b",
        "primary-container": "#d4af37",
        "inverse-surface": "#e5e2e1",
        "on-primary-fixed": "#241a00",
        "inverse-primary": "#735c00",
        "on-tertiary": "#5b1a13",
        "secondary-fixed-dim": "#feb96c",
        "outline": "#99907c",
        "on-tertiary-container": "#762e26",
        "on-error": "#690005",
        "on-primary-fixed-variant": "#574500",
        "on-secondary-fixed-variant": "#683d00",
        "on-surface-variant": "#d0c5af",
        "tertiary-container": "#fc988a",
        "secondary-container": "#784700",
        "surface-container-lowest": "#0e0e0e",
        "background": "#131313",
        "surface-tint": "#e9c349",
        "surface-container-low": "#1c1b1b",
        "on-error-container": "#ffdad6",
        "on-primary-container": "#554300",
        "tertiary": "#ffbfb6",
        "inverse-on-surface": "#313030",
        "primary-fixed-dim": "#e9c349",
        "surface-container-high": "#2a2a2a",
        "on-surface": "#e5e2e1",
        "secondary-fixed": "#ffdcbb",
        "on-secondary-fixed": "#2c1700",
        "surface": "#131313",
        "on-tertiary-fixed-variant": "#783027",
        "tertiary-fixed-dim": "#ffb4a9",
        "error-container": "#93000a",
        "surface-variant": "#353534",
        "error": "#ffb4ab",
        "secondary": "#feb96c",
        "on-tertiary-fixed": "#3e0503",
        "primary-fixed": "#ffe088",
        "surface-dim": "#131313"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "space-xs": "0.5rem",
        "space-2xs": "0.25rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "margin-mobile": "1.25rem",
        "gutter-desktop": "2.5rem",
        "space-5xl": "9rem",
        "margin-desktop": "var(--sx-margin-desktop)",
        "gutter-mobile": "1rem",
        "space-sm": "0.75rem",
        "space-4xl": "6rem",
        "space-md": "1rem",
        "space-3xl": "4.5rem",
        "gutter": "1.5rem"
      },
      "fontFamily": {
        "headline-sm": [
          "Playfair Display",
          "serif"
        ],
        "metadata-dense": [
          "Manrope",
          "sans-serif"
        ],
        "display-hero": [
          "Playfair Display",
          "serif"
        ],
        "numerical-index": [
          "Manrope",
          "sans-serif"
        ],
        "display-lg-mobile": [
          "Playfair Display",
          "serif"
        ],
        "editorial-quote": [
          "Playfair Display",
          "serif"
        ],
        "headline-lg": [
          "Playfair Display",
          "serif"
        ],
        "display-lg": [
          "Playfair Display",
          "serif"
        ],
        "body-md": [
          "Manrope",
          "sans-serif"
        ],
        "label-uppercase": [
          "Manrope",
          "sans-serif"
        ],
        "display-hero-mobile": [
          "Playfair Display",
          "serif"
        ],
        "headline-lg-mobile": [
          "Playfair Display",
          "serif"
        ],
        "headline-md": [
          "Playfair Display",
          "serif"
        ],
        "body-lg": [
          "Manrope",
          "sans-serif"
        ],
        "body-sm": [
          "Manrope",
          "sans-serif"
        ],
        "label-lg": [
          "Manrope"
        ],
        "label-sm": [
          "Manrope"
        ],
        "label-md": [
          "Manrope"
        ]
      },
      "fontSize": {
        "headline-sm": [
          "22px",
          {
            "lineHeight": "30px",
            "fontWeight": "500"
          }
        ],
        "metadata-dense": [
          "11px",
          {
            "lineHeight": "15px",
            "letterSpacing": "0.18em",
            "fontWeight": "600"
          }
        ],
        "display-hero": [
          "var(--sx-display-hero-size)",
          {
            "lineHeight": "var(--sx-display-hero-lh)",
            "letterSpacing": "var(--sx-display-hero-ls)",
            "fontWeight": "400"
          }
        ],
        "numerical-index": [
          "13px",
          {
            "lineHeight": "18px",
            "letterSpacing": "0.12em",
            "fontWeight": "700"
          }
        ],
        "display-lg-mobile": [
          "36px",
          {
            "lineHeight": "42px",
            "letterSpacing": "-0.02em",
            "fontWeight": "400"
          }
        ],
        "editorial-quote": [
          "24px",
          {
            "lineHeight": "38px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "headline-lg": [
          "40px",
          {
            "lineHeight": "var(--sx-headline-lg-lh)",
            "letterSpacing": "-0.01em",
            "fontWeight": "500"
          }
        ],
        "display-lg": [
          "56px",
          {
            "lineHeight": "64px",
            "letterSpacing": "-0.02em",
            "fontWeight": "400"
          }
        ],
        "body-md": [
          "15px",
          {
            "lineHeight": "24px",
            "letterSpacing": "0.01em",
            "fontWeight": "400"
          }
        ],
        "label-uppercase": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.18em",
            "fontWeight": "600"
          }
        ],
        "display-hero-mobile": [
          "var(--sx-display-hero-m-size)",
          {
            "lineHeight": "var(--sx-display-hero-m-lh)",
            "letterSpacing": "var(--sx-display-hero-m-ls)",
            "fontWeight": "400"
          }
        ],
        "headline-lg-mobile": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "var(--sx-headline-lg-m-ls)",
            "fontWeight": "500"
          }
        ],
        "headline-md": [
          "28px",
          {
            "lineHeight": "38px",
            "letterSpacing": "var(--sx-headline-md-ls)",
            "fontWeight": "400"
          }
        ],
        "body-lg": [
          "18px",
          {
            "lineHeight": "28px",
            "letterSpacing": "0.01em",
            "fontWeight": "300"
          }
        ],
        "body-sm": [
          "13px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0.02em",
            "fontWeight": "400"
          }
        ],
        "label-lg": [
          "13px",
          {
            "lineHeight": "18px",
            "letterSpacing": "0.12em",
            "fontWeight": "600"
          }
        ],
        "label-sm": [
          "10px",
          {
            "lineHeight": "14px",
            "letterSpacing": "0.16em",
            "fontWeight": "500"
          }
        ],
        "label-md": [
          "11px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.14em",
            "fontWeight": "600"
          }
        ]
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
};
