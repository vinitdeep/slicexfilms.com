/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Palette: black surfaces, white text, aqua-blue accent.
      "colors": {
        "surface-bright": "#3a3a3a",
        "on-background": "#ffffff",
        "outline-variant": "#3a4547",
        "on-secondary": "#003a40",
        "surface-container-highest": "#353535",
        "surface-container": "#1f1f1f",
        "on-primary": "#00363b",
        "tertiary-fixed": "#e0f7fa",
        "primary": "#3ee6f0",
        "on-secondary-container": "#9ef7ff",
        "primary-container": "#00b8c8",
        "inverse-surface": "#ffffff",
        "on-primary-fixed": "#001f23",
        "inverse-primary": "#006a73",
        "on-tertiary": "#00363b",
        "secondary-fixed-dim": "#67e8f9",
        "outline": "#8a9496",
        "on-tertiary-container": "#004f56",
        "on-error": "#690005",
        "on-primary-fixed-variant": "#004f56",
        "on-secondary-fixed-variant": "#00505a",
        "on-surface-variant": "#c8d0d2",
        "tertiary-container": "#7eeaf5",
        "secondary-container": "#005e66",
        "surface-container-lowest": "#0a0a0a",
        "background": "#0f0f0f",
        "surface-tint": "#22d3ee",
        "surface-container-low": "#171717",
        "on-error-container": "#ffdad6",
        "on-primary-container": "#003c42",
        "tertiary": "#a5f3fc",
        "inverse-on-surface": "#1a1a1a",
        "primary-fixed-dim": "#22d3ee",
        "surface-container-high": "#292929",
        "on-surface": "#ffffff",
        "secondary-fixed": "#c5fbff",
        "on-secondary-fixed": "#00232a",
        "surface": "#0f0f0f",
        "on-tertiary-fixed-variant": "#004f56",
        "tertiary-fixed-dim": "#67e8f9",
        "error-container": "#93000a",
        "surface-variant": "#353535",
        "error": "#ffb4ab",
        "secondary": "#67e8f9",
        "on-tertiary-fixed": "#00232a",
        "primary-fixed": "#a5f3fc",
        "surface-dim": "#0f0f0f"
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
