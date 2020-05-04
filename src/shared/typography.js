import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Josefin Sans"],
  bodyFontFamily: ["Josefin Sans"],
  googleFonts: [
    {
      name: "Josefin Sans",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
})

export default typography
