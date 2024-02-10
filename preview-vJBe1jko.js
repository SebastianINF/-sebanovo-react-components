import { t as r } from "./chunk-ZGA76URP-tvrjtbwS.js";
const a = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}, t = {
  darkMode: {
    classTarget: "html",
    stylePreview: !0,
    current: "dark",
    // Override the default dark theme
    dark: { ...r.dark, appBg: "black" },
    // Override the default light theme
    light: { ...r.normal, appBg: "red" }
  }
};
export {
  a as default,
  t as parameters
};
