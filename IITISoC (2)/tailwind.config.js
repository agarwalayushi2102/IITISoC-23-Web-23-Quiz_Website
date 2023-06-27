/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gainsboro: "#d9d9d9",
        thistle: "#a099c9",
        darkslateblue: {
          "100": "#141948",
          "200": "rgba(20, 25, 72, 0.5)",
        },
        blueviolet: "#9747ff",
        mediumslateblue: "#8e7bff",
        midnightblue: {
          "100": "#171e5a",
          "200": "#130c3a",
        },
        lightblue: "#c0dae9",
        gray: "#160d30",
        green: "#16a100",
      },
      fontFamily: {
        inter: "Inter",
        gluten: "Gluten",
        "josefin-sans": "'Josefin Sans'",
      },
      borderRadius: {
        xl: "20px",
        "31xl": "50px",
        "3xs": "10px",
        "8xs": "5px",
        "8xl": "27px",
        "161xl": "180px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "7xl": "26px",
      "10xl": "29px",
      "4xl": "23px",
      "2xl": "21px",
      "45xl": "64px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
