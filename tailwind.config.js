module.exports = {
  content: ["*"],
  theme: {
    screens: {
      "2xs": "320px",
      // => @media(min-width: 320px) {...}
      xs: "500px",
      // => @media(min-width: 500px) {...}
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "810px",
      // => @media (min-width: 768px) { ... }

      lg: "1003px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
  plugins: [],
};
