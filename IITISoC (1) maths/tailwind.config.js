/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        thistle: "#a099c9",
        white: "#fff",
        darkslateblue: {
          "100": "#141948",
          "200": "rgba(20, 25, 72, 0.5)",
        },
        lightblue: "#c0dae9",
        gray: "#160d30",
        gainsboro: "#d9d9d9",
        mediumslateblue: "#8e7bff",
        midnightblue: {
          "100": "#171e5a",
          "200": "#130c3a",
        },
        blueviolet: "#9747ff",
        green: "#16a100",
      },
      fontFamily: {
        inter: "Inter",
        gluten: "Gluten",
        "josefin-sans": "'Josefin Sans'",
      },
      borderRadius: {
        xl: "20px",
        "161xl": "180px",
        "8xl": "27px",
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "4xl": "23px",
      "7xl": "26px",
      "10xl": "29px",
      "2xl": "21px",
      "45xl": "64px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
