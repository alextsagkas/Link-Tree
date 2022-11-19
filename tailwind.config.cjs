/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans"],
      },
      colors: {
        bgColor: "#fff",
        accentColor: "#0257a8",
        hoverColor: "#0f60b0",
        linkColor: "#4c4c4c",
        textColor: "#000",
      },
      keyframes: {
        bounceIn: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.01)" },
          "50%": { transform: "scale(1.02)" },
          "75%": { transform: "scale(1.03)" },
          "90%": { transform: "scale(1.02)" },
        },
        slideInFromTop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        bounceIn: "bounceIn 0.08s",
        slideInFromTop: "slideInFromTop 0.8s",
      },
      scale: {
        105: "1.01",
        140: "1.4",
      },
      transitionTimingFunction: {
        inOutCustom: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
      },
    },
  },
  plugins: [],
};
