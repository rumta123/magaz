/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07131f",
        slate: "#0f2233",
        mist: "#d6e3ee",
        coral: "#ff6b4a",
        mint: "#6cf2d6",
      },
      fontFamily: {
        display: ["Space Grotesk", "Manrope", "sans-serif"],
      },
      boxShadow: {
        neon: "0 10px 35px rgba(255, 107, 74, 0.22)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 0%, rgba(255, 107, 74, 0.18), transparent 40%), radial-gradient(circle at 100% 20%, rgba(108, 242, 214, 0.16), transparent 42%), linear-gradient(145deg, #07131f 0%, #0f2233 100%)",
      },
    },
  },
  plugins: [],
};
