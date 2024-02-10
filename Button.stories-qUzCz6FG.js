import "./Button.css";
import { j as i } from "./jsx-runtime-wYzeO6co.js";
const t = ({ text: o, onClick: l, ...s }) => /* @__PURE__ */ i.jsx("button", { className: "Button", ...s, onClick: l, children: o });
try {
  t.displayName = "Button", t.__docgenInfo = { description: "Primary UI component for user interaction", displayName: "Button", props: { size: { defaultValue: null, description: "How large should the button be?", name: "size", required: !1, type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }] } }, text: { defaultValue: null, description: "Button contents", name: "text", required: !0, type: { name: "string" } }, onClick: { defaultValue: null, description: "Optional click handler", name: "onClick", required: !1, type: { name: "(() => void)" } } } };
} catch {
}
const d = {
  title: "Example/Button",
  component: t,
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
var a, r, n;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(a = e.parameters) == null ? void 0 : a.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Hola mundo',
    onClick() {
      alert(\`El texto del boton es: \${this.text}\`);
    }
  }
}`,
      ...(n = (r = e.parameters) == null ? void 0 : r.docs) == null ? void 0 : n.source
    }
  }
};
const m = ["Primary"];
export {
  e as Primary,
  m as __namedExportsOrder,
  d as default
};
