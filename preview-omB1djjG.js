import { t as r } from "./chunk-ZGA76URP-tvrjtbwS.js";
const e = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}, o = {
  darkMode: {
    current: "dark",
    // Override the default dark theme
    dark: { ...r.dark, appBg: "black" },
    // Override the default light theme
    light: { ...r.normal, appBg: "red" }
  }
};
export {
  e as default,
  o as parameters
};
