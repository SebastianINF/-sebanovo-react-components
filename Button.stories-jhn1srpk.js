import "./Button.css";
import { j as s } from "./jsx-runtime-wYzeO6co.js";
const u = ({ text: t, onClick: r, ...l }) => /* @__PURE__ */ s.jsx("button", { className: "Button", ...l, onClick: r, children: t });
try {
  Button.displayName = "Button", Button.__docgenInfo = { description: "Primary UI component for user interaction", displayName: "Button", props: { size: { defaultValue: null, description: "How large should the button be?", name: "size", required: !1, type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }] } }, text: { defaultValue: null, description: "Button contents", name: "text", required: !0, type: { name: "string" } }, onClick: { defaultValue: null, description: "Optional click handler", name: "onClick", required: !1, type: { name: "(() => void)" } } } };
} catch {
}
const d = {
  title: "Example/Button",
  component: u,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"]
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
}, e = {
  args: {
    text: "Hola mundo",
    onClick() {
      alert(`El texto del boton es: ${this.text}`);
    }
  }
};
var o, n, a;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(o = e.parameters) == null ? void 0 : o.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Hola mundo',
    onClick() {
      alert(\`El texto del boton es: \${this.text}\`);
    }
  }
}`,
      ...(a = (n = e.parameters) == null ? void 0 : n.docs) == null ? void 0 : a.source
    }
  }
};
const m = ["Primary"];
export {
  e as Primary,
  m as __namedExportsOrder,
  d as default
};
