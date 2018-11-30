import { createGlobalStyle } from "styled-components";
import fontFiles from "../fonts/fonts";

console.log("Loading ReynoldsCaps font-face");

export default createGlobalStyle `

  @font-face {
    font-family: ReynoldsCaps;
    font-style: normal;
    font-weight: normal;
    src: url('${fontFiles.ReynoldsCaps}') format("ttf");
  }
`