import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");import { jsxDEV } from "/@id/__x00__react/jsx-dev-runtime";
import RefreshRuntime from "/@react-refresh";
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "C:/Users/Rishank.Tiwari/Desktop/Testing/src/main.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=c660b7be"; const ReactDOM = __vite__cjsImport3_reactDom_client.__esModule ? __vite__cjsImport3_reactDom_client.default : __vite__cjsImport3_reactDom_client;
import { BrowserRouter, Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=c660b7be";
import App from "/src/App.jsx?t=1679389891472";
import Accordianfilter from "/src/Accordianfilter.jsx?t=1679389891472";
export default function Main() {
  return /* @__PURE__ */ jsxDEV(BrowserRouter, { children: /* @__PURE__ */ jsxDEV(Routes, { children: [
    /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
      fileName: "C:/Users/Rishank.Tiwari/Desktop/Testing/src/main.jsx",
      lineNumber: 8,
      columnNumber: 34
    }, this) }, void 0, false, {
      fileName: "C:/Users/Rishank.Tiwari/Desktop/Testing/src/main.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/filter", element: /* @__PURE__ */ jsxDEV(Accordianfilter, {}, void 0, false, {
      fileName: "C:/Users/Rishank.Tiwari/Desktop/Testing/src/main.jsx",
      lineNumber: 9,
      columnNumber: 40
    }, this) }, void 0, false, {
      fileName: "C:/Users/Rishank.Tiwari/Desktop/Testing/src/main.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/Rishank.Tiwari/Desktop/Testing/src/main.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/Rishank.Tiwari/Desktop/Testing/src/main.jsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
_c = Main;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(Main, {}, void 0, false, {
  fileName: "C:/Users/Rishank.Tiwari/Desktop/Testing/src/main.jsx",
  lineNumber: 15,
  columnNumber: 13
}, this));
var _c;
$RefreshReg$(_c, "Main");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  import(
    /* @vite-ignore */
    __vite__injectQuery(import.meta.url, 'import')).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Rishank.Tiwari/Desktop/Testing/src/main.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBUWlDO0FBUmpDLE9BQU9BLG9CQUFjO0FBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkMsU0FBU0MsZUFBZUMsUUFBUUMsYUFBYTtBQUM3QyxPQUFPQyxTQUFTO0FBQ2hCLE9BQU9DLHFCQUFxQjtBQUM1Qix3QkFBd0JDLE9BQU87QUFDN0IsU0FDRSx1QkFBQyxpQkFDQyxpQ0FBQyxVQUNDO0FBQUEsMkJBQUMsU0FBTSxNQUFLLEtBQUksU0FBUyx1QkFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSSxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWlDO0FBQUEsSUFDakMsdUJBQUMsU0FBTSxNQUFLLFdBQVUsU0FBUyx1QkFBQyxxQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWdCLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBbUQ7QUFBQSxPQUZyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0EsS0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0E7QUFFSjtBQUFDQyxLQVR1QkQ7QUFXeEIsTUFBTUUsT0FBT1IsU0FBU1MsV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUM7QUFDaEVILEtBQUtJLE9BQU8sdUJBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUssQ0FBRztBQUFFO0FBQUFDIiwibmFtZXMiOlsiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJBcHAiLCJBY2NvcmRpYW5maWx0ZXIiLCJNYWluIiwiX2MiLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJDOi9Vc2Vycy9SaXNoYW5rLlRpd2FyaS9EZXNrdG9wL1Rlc3Rpbmcvc3JjL21haW4uanN4Il0sImZpbGUiOiJDOi9Vc2Vycy9SaXNoYW5rLlRpd2FyaS9EZXNrdG9wL1Rlc3Rpbmcvc3JjL21haW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgQWNjb3JkaWFuZmlsdGVyIGZyb20gXCIuL0FjY29yZGlhbmZpbHRlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgPFJvdXRlcz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8QXBwIC8+fS8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZmlsdGVyXCIgZWxlbWVudD17PEFjY29yZGlhbmZpbHRlciAvPn0vPlxyXG4gICAgICA8L1JvdXRlcz5cclxuICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxucm9vdC5yZW5kZXIoPE1haW4gLz4pOyJdfQ==