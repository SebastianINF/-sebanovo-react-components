import { j as e } from "./jsx-runtime-wYzeO6co.js";
import { M as s } from "./WithTooltip-V3YHNWJZ--jWFzE_X.js";
import { useMDXComponents as r } from "./index-k88nxXv7.js";
const l = () => {
  const t = Object.assign({
    svg: "svg",
    path: "path"
  }, r());
  return e.jsx(t.svg, {
    viewBox: "0 0 14 14",
    width: "8px",
    height: "14px",
    style: {
      marginLeft: "4px",
      display: "inline-block",
      shapeRendering: "inherit",
      verticalAlign: "middle",
      fill: "currentColor",
      "path fill": "currentColor"
    },
    children: e.jsx(t.path, {
      d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"
    })
  });
};
function i(t) {
  return e.jsxs(e.Fragment, {
    children: [e.jsx(s, {
      title: "Presentation"
    }), `
`, e.jsxs("main", {
      children: [e.jsx("h1", {
        children: "Hola esta es mi primera libreria de componentes de react"
      }), e.jsx("section", {
        children: "😀"
      })]
    }), `
`, e.jsx("style", {
      children: `
  main {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    color:black;
  } 
`
    })]
  });
}
function m(t = {}) {
  const { wrapper: n } = Object.assign({}, r(), t.components);
  return n ? e.jsx(n, Object.assign({}, t, {
    children: e.jsx(i, t)
  })) : i();
}
export {
  l as RightArrow,
  m as default
};
