import "./sb-preview/runtime.js";
(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    n(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const o = {};
    return e.integrity && (o.integrity = e.integrity), e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? o.credentials = "include" : e.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function n(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const o = s(e);
    fetch(e.href, o);
  }
})();
const { createBrowserChannel: O } = __STORYBOOK_MODULE_CHANNELS__, { addons: c } = __STORYBOOK_MODULE_PREVIEW_API__, _ = O({ page: "preview" });
c.setChannel(_);
window.__STORYBOOK_ADDONS_CHANNEL__ = _;
window.CONFIG_TYPE === "DEVELOPMENT" && (window.__STORYBOOK_SERVER_CHANNEL__ = _);
const d = {
  "./src/Configure.mdx": async () => import("./Configure-mOroWL2a.js"),
  "./src/stories/Button.stories.ts": async () => import("./Button.stories-jhn1srpk.js")
};
async function p(t) {
  return d[t]();
}
const { composeConfigs: l, PreviewWeb: a, ClientApi: m } = __STORYBOOK_MODULE_PREVIEW_API__, u = async () => {
  const t = await Promise.all([
    import("./entry-preview-2M4XTMyi.js"),
    import("./entry-preview-docs-ZKcZqI1j.js"),
    import("./preview-1tG1O6Ta.js"),
    import("./preview-ySQqa8tj.js"),
    import("./preview-rrC3JQGY.js"),
    import("./preview-YbxiK_AD.js"),
    import("./preview-CiQ4jesj.js"),
    import("./preview-hLqCMwaR.js"),
    import("./preview-U8rtm7ff.js"),
    import("./preview-jp7F_qEz.js"),
    import("./preview-vJBe1jko.js")
  ]);
  return l(t);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new a();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new m({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: p, getProjectAnnotations: u });
