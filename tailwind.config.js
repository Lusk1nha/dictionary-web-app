/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        hightlight: "#A445ED",

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

        // Searchbox colors
        searchbox: {
          background: {
            light: "#F4F4F4",
            dark: "#1F1F1F",
          },
          text: {
            light: "#2D2D2D",
            dark: "#FFFFFF",
          },
          placeholder: {
            light: "#2D2D2D40",
            dark: "#ffffff40",
          },
          error: "#FF5252",
          active: "#A445ED",
          caret: "#A445ED",
        },

        // Not defined page colors
        notDefined: {
          title: {
            light: "#2D2D2D",
            dark: "#FFFFFF",
          },
          text: "#757575",
        },

        definition: {
          word: {
            light: "#2D2D2D",
            dark: "#FFFFFF",
          },
          phonetic: "#A445ED",
          noun: {
            light: "#2D2D2D",
            dark: "#FFFFFF",
          },
          divisor: {
            light: "#E9E9E9",
            dark: "#3A3A3A",
          },
          secondary: "#757575",
          list: {
            light: "#2D2D2D",
            dark: "#FFFFFF",
          },
          dot: "#8F19E8",
          example: "#757575",
          source: "#757575",
          link: {
            light: "#2D2D2D",
            dark: "#FFFFFF",
          },
          newwindow: "#757575",
          synonym: "#A445ED",
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
