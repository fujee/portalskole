/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#FF7125", //orange
      secondary: "#3C4884", //blue
      white: "#F6F6F6", //text - text/80 dark
      pureWhite: "#FFFFFF",
      black: "#202125",
      pureBlack: "#131313",
      faqBlack: "#1B1B1B",
      textColor: "#525252", // text
      navBg: "rgba(246, 246, 246, 0.08)",
      navBgDark: "rgba(68, 68, 68, 0.3)",
      navBorder: "rgba(60, 72, 132, 0.48)",
      navBorderDark: "#6F6F6F",
    },
    extend: {
      backgroundImage: {
        custom_bg1: `
          radial-gradient(81.97% 63.68% at -11.3% -12.61%, rgba(60, 72, 132, 0.24) 0%, rgba(255, 255, 255, 0.24) 100%), 
          radial-gradient(112.56% 95.07% at 120.03% 129.89%, rgba(255, 113, 37, 0.24) 0%, rgba(255, 255, 255, 0.24) 100%), 
          url(/src/media/functions/feature_box_1.png)
        `,
        custom_bg1_dark: `
          radial-gradient(77.97% 63.97% at 0% -2.39%, rgba(60, 72, 132, 0.24) 0%, rgba(19, 19, 19, 0.24) 100%), 
          radial-gradient(112.56% 95.07% at 120.03% 129.89%, rgba(255, 113, 37, 0.24) 0%, rgba(19, 19, 19, 0.24) 100%)
        `,
        custom_bg2: `radial-gradient(62.14% 54.4% at -3.38% -2.73%, rgba(255, 113, 37, 0.24) 0%, rgba(255, 255, 255, 0.24) 100%)`,
        custom_bg2_dark: `radial-gradient(62.14% 54.4% at -3.38% -2.73%, rgba(255, 113, 37, 0.24) 0%, rgba(19, 19, 19, 0.24) 100%)`,
        custom_bg3: `url(/src/media/functions/fourth/pattern.png), radial-gradient(272.53% 213.17% at -83.59% 219.32%, #3C4884 0%, #FFF 100%)`,
        custom_bg3_dark: `url(/src/media/functions/fourth/pattern_dark.png), radial-gradient(272.53% 213.17% at -83.59% 219.32%, #3C4884 0%, #131313 100%)`,
        custom_bg4: `radial-gradient(103.63% 93.43% at 101.68% 0%, rgba(255, 113, 37, 0.24) 0%, rgba(255, 255, 255, 0.24) 100%)`,
        custom_bg4_dark: `radial-gradient(103.63% 93.43% at 101.68% 0%, rgba(255, 113, 37, 0.24) 0%, rgba(19, 19, 19, 0.24) 100%)`,
        custom_bg5: `radial-gradient(145.38% 143.29% at 77.23% 169.77%, #3C4884 0%, #FFF 100%)`,
        custom_bg5_dark: `radial-gradient(103.63% 93.43% at 101.68% 0%, rgba(255, 113, 37, 0.24) 0%, rgba(19, 19, 19, 0.24) 100%)`,
        custom_bg6: `url(/src/media/functions/fifth/pattern.png)`,
        custom_bg6_dark: `url(/src/media/functions/fifth/pattern_dark.png)`,
      },
      backgroundPosition: {
        custom_bg1: "-142px -143.546px",
        custom_bg1_dark: "-142px -143.546px",
        custom_bg3: "0px 0px",
        custom_bg3_dark: "0px 0px",
        custom_bg6: "0px 0px",
        custom_bg6_dark: "0px 0px",
      },
      backgroundSize: {
        custom_bg1: "118.228% 143.174%",
        custom_bg3: "contain",
        custom_bg3_dark: "contain",
      },
      keyframes: {
        customBounce: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "custom-bounce": "customBounce 1.2s linear infinite",
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        wiggle: "wiggle .5s ease-in-out infinite",
      },
    },
  },
  darkMode: ["class", '[id="tema_wrapper"].dark'],
  plugins: [],
};
