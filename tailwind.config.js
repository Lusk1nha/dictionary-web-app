/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Background colors
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

        divider: "#E9E9E9",

        // Dropdown colors
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
            active: "#A445ED",
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      dropShadow: {
        light: "0 5px 30px #0000001a",
        dark: "0 5px 10px #A445ED",
      },
    },
  },
  plugins: [],
};
