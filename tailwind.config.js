/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        screen: {
          light: "#ffffff",
          dark: "#050505",
        },

        // Switch colors
        switch: {
          active: "#A445ED",
          inactive: "#757575",
          ball: "#FFFFFF",
        },

        logoIcon: "#757575",

        // Moon icon colors
        moonIcon: {
          active: "#A445ED",
          inative: "#757575",
        },

        dropdown: {
          modal: {
            light: "#FFFFFF",
            dark: "#1F1F1F",
          },
          icon: "#A445ED",
          text: {
            light: "#2D2D2D",
            dark: "#FFFFFF",
            hover: "#A445ED",
          },
        },
      },
    },
  },
  plugins: [],
};
