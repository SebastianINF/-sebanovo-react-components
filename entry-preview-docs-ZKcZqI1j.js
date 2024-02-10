import { u as ua, b as Fn, c as la, d as Mn, e as ca, f as ha, g as fa, S as pa, h as Me, j as da, k as zr, l as $r, m as ma, n as ga, T as Hr, o as ri, p as va } from "./index--2oREgyY.js";
import { g as ni, c as Bt } from "./_commonjsHelpers-f3sTPFkQ.js";
import { d as xa } from "./index-WF3DY2Cr.js";
import { R as Xt, r as Pt } from "./index-_zimet0g.js";
var Zi = { exports: {} }, xi = { exports: {} }, Ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function ya() {
  if (Yr)
    return Ne;
  Yr = 1;
  var e = typeof Symbol == "function" && Symbol.for, i = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, x = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, A = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function U(g) {
    if (typeof g == "object" && g !== null) {
      var u = g.$$typeof;
      switch (u) {
        case i:
          switch (g = g.type, g) {
            case x:
            case _:
            case s:
            case l:
            case o:
            case A:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case v:
                case b:
                case T:
                case k:
                case f:
                  return g;
                default:
                  return u;
              }
          }
        case r:
          return u;
      }
    }
  }
  function N(g) {
    return U(g) === _;
  }
  return Ne.AsyncMode = x, Ne.ConcurrentMode = _, Ne.ContextConsumer = v, Ne.ContextProvider = f, Ne.Element = i, Ne.ForwardRef = b, Ne.Fragment = s, Ne.Lazy = T, Ne.Memo = k, Ne.Portal = r, Ne.Profiler = l, Ne.StrictMode = o, Ne.Suspense = A, Ne.isAsyncMode = function(g) {
    return N(g) || U(g) === x;
  }, Ne.isConcurrentMode = N, Ne.isContextConsumer = function(g) {
    return U(g) === v;
  }, Ne.isContextProvider = function(g) {
    return U(g) === f;
  }, Ne.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === i;
  }, Ne.isForwardRef = function(g) {
    return U(g) === b;
  }, Ne.isFragment = function(g) {
    return U(g) === s;
  }, Ne.isLazy = function(g) {
    return U(g) === T;
  }, Ne.isMemo = function(g) {
    return U(g) === k;
  }, Ne.isPortal = function(g) {
    return U(g) === r;
  }, Ne.isProfiler = function(g) {
    return U(g) === l;
  }, Ne.isStrictMode = function(g) {
    return U(g) === o;
  }, Ne.isSuspense = function(g) {
    return U(g) === A;
  }, Ne.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === s || g === _ || g === l || g === o || g === A || g === P || typeof g == "object" && g !== null && (g.$$typeof === T || g.$$typeof === k || g.$$typeof === f || g.$$typeof === v || g.$$typeof === b || g.$$typeof === w || g.$$typeof === B || g.$$typeof === j || g.$$typeof === E);
  }, Ne.typeOf = U, Ne;
}
var Re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function ba() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, i = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, x = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, A = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function U(G) {
      return typeof G == "string" || typeof G == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      G === s || G === _ || G === l || G === o || G === A || G === P || typeof G == "object" && G !== null && (G.$$typeof === T || G.$$typeof === k || G.$$typeof === f || G.$$typeof === v || G.$$typeof === b || G.$$typeof === w || G.$$typeof === B || G.$$typeof === j || G.$$typeof === E);
    }
    function N(G) {
      if (typeof G == "object" && G !== null) {
        var Ye = G.$$typeof;
        switch (Ye) {
          case i:
            var Q = G.type;
            switch (Q) {
              case x:
              case _:
              case s:
              case l:
              case o:
              case A:
                return Q;
              default:
                var Ke = Q && Q.$$typeof;
                switch (Ke) {
                  case v:
                  case b:
                  case T:
                  case k:
                  case f:
                    return Ke;
                  default:
                    return Ye;
                }
            }
          case r:
            return Ye;
        }
      }
    }
    var g = x, u = _, I = v, L = f, Y = i, H = b, ne = s, ee = T, J = k, he = r, Te = l, be = o, Ce = A, fe = !1;
    function Ve(G) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(G) || N(G) === x;
    }
    function D(G) {
      return N(G) === _;
    }
    function X(G) {
      return N(G) === v;
    }
    function M(G) {
      return N(G) === f;
    }
    function ae(G) {
      return typeof G == "object" && G !== null && G.$$typeof === i;
    }
    function oe(G) {
      return N(G) === b;
    }
    function le(G) {
      return N(G) === s;
    }
    function K(G) {
      return N(G) === T;
    }
    function ue(G) {
      return N(G) === k;
    }
    function me(G) {
      return N(G) === r;
    }
    function xe(G) {
      return N(G) === l;
    }
    function pe(G) {
      return N(G) === o;
    }
    function De(G) {
      return N(G) === A;
    }
    Re.AsyncMode = g, Re.ConcurrentMode = u, Re.ContextConsumer = I, Re.ContextProvider = L, Re.Element = Y, Re.ForwardRef = H, Re.Fragment = ne, Re.Lazy = ee, Re.Memo = J, Re.Portal = he, Re.Profiler = Te, Re.StrictMode = be, Re.Suspense = Ce, Re.isAsyncMode = Ve, Re.isConcurrentMode = D, Re.isContextConsumer = X, Re.isContextProvider = M, Re.isElement = ae, Re.isForwardRef = oe, Re.isFragment = le, Re.isLazy = K, Re.isMemo = ue, Re.isPortal = me, Re.isProfiler = xe, Re.isStrictMode = pe, Re.isSuspense = De, Re.isValidElementType = U, Re.typeOf = N;
  }()), Re;
}
var Xr;
function Bn() {
  return Xr || (Xr = 1, process.env.NODE_ENV === "production" ? xi.exports = ya() : xi.exports = ba()), xi.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Mi, Jr;
function Sa() {
  if (Jr)
    return Mi;
  Jr = 1;
  var e = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function s(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var f = {}, v = 0; v < 10; v++)
        f["_" + String.fromCharCode(v)] = v;
      var x = Object.getOwnPropertyNames(f).map(function(b) {
        return f[b];
      });
      if (x.join("") !== "0123456789")
        return !1;
      var _ = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        _[b] = b;
      }), Object.keys(Object.assign({}, _)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Mi = o() ? Object.assign : function(l, f) {
    for (var v, x = s(l), _, b = 1; b < arguments.length; b++) {
      v = Object(arguments[b]);
      for (var A in v)
        i.call(v, A) && (x[A] = v[A]);
      if (e) {
        _ = e(v);
        for (var P = 0; P < _.length; P++)
          r.call(v, _[P]) && (x[_[P]] = v[_[P]]);
      }
    }
    return x;
  }, Mi;
}
var Bi, Kr;
function cr() {
  if (Kr)
    return Bi;
  Kr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Bi = e, Bi;
}
var Di, Zr;
function Dn() {
  return Zr || (Zr = 1, Di = Function.call.bind(Object.prototype.hasOwnProperty)), Di;
}
var ji, en;
function _a() {
  if (en)
    return ji;
  en = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var i = cr(), r = {}, s = Dn();
    e = function(l) {
      var f = "Warning: " + l;
      typeof console < "u" && console.error(f);
      try {
        throw new Error(f);
      } catch {
      }
    };
  }
  function o(l, f, v, x, _) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in l)
        if (s(l, b)) {
          var A;
          try {
            if (typeof l[b] != "function") {
              var P = Error(
                (x || "React class") + ": " + v + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            A = l[b](f, b, x, v, null, i);
          } catch (T) {
            A = T;
          }
          if (A && !(A instanceof Error) && e(
            (x || "React class") + ": type specification of " + v + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof A + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), A instanceof Error && !(A.message in r)) {
            r[A.message] = !0;
            var k = _ ? _() : "";
            e(
              "Failed " + v + " type: " + A.message + (k ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ji = o, ji;
}
var qi, tn;
function Ca() {
  if (tn)
    return qi;
  tn = 1;
  var e = Bn(), i = Sa(), r = cr(), s = Dn(), o = _a(), l = function() {
  };
  process.env.NODE_ENV !== "production" && (l = function(v) {
    var x = "Warning: " + v;
    typeof console < "u" && console.error(x);
    try {
      throw new Error(x);
    } catch {
    }
  });
  function f() {
    return null;
  }
  return qi = function(v, x) {
    var _ = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function A(D) {
      var X = D && (_ && D[_] || D[b]);
      if (typeof X == "function")
        return X;
    }
    var P = "<<anonymous>>", k = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: j(),
      arrayOf: U,
      element: N(),
      elementType: g(),
      instanceOf: u,
      node: H(),
      objectOf: L,
      oneOf: I,
      oneOfType: Y,
      shape: ee,
      exact: J
    };
    function T(D, X) {
      return D === X ? D !== 0 || 1 / D === 1 / X : D !== D && X !== X;
    }
    function E(D, X) {
      this.message = D, this.data = X && typeof X == "object" ? X : {}, this.stack = "";
    }
    E.prototype = Error.prototype;
    function w(D) {
      if (process.env.NODE_ENV !== "production")
        var X = {}, M = 0;
      function ae(le, K, ue, me, xe, pe, De) {
        if (me = me || P, pe = pe || ue, De !== r) {
          if (x) {
            var G = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw G.name = "Invariant Violation", G;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ye = me + ":" + ue;
            !X[Ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + pe + "` prop on `" + me + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), X[Ye] = !0, M++);
          }
        }
        return K[ue] == null ? le ? K[ue] === null ? new E("The " + xe + " `" + pe + "` is marked as required " + ("in `" + me + "`, but its value is `null`.")) : new E("The " + xe + " `" + pe + "` is marked as required in " + ("`" + me + "`, but its value is `undefined`.")) : null : D(K, ue, me, xe, pe);
      }
      var oe = ae.bind(null, !1);
      return oe.isRequired = ae.bind(null, !0), oe;
    }
    function B(D) {
      function X(M, ae, oe, le, K, ue) {
        var me = M[ae], xe = be(me);
        if (xe !== D) {
          var pe = Ce(me);
          return new E(
            "Invalid " + le + " `" + K + "` of type " + ("`" + pe + "` supplied to `" + oe + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return w(X);
    }
    function j() {
      return w(f);
    }
    function U(D) {
      function X(M, ae, oe, le, K) {
        if (typeof D != "function")
          return new E("Property `" + K + "` of component `" + oe + "` has invalid PropType notation inside arrayOf.");
        var ue = M[ae];
        if (!Array.isArray(ue)) {
          var me = be(ue);
          return new E("Invalid " + le + " `" + K + "` of type " + ("`" + me + "` supplied to `" + oe + "`, expected an array."));
        }
        for (var xe = 0; xe < ue.length; xe++) {
          var pe = D(ue, xe, oe, le, K + "[" + xe + "]", r);
          if (pe instanceof Error)
            return pe;
        }
        return null;
      }
      return w(X);
    }
    function N() {
      function D(X, M, ae, oe, le) {
        var K = X[M];
        if (!v(K)) {
          var ue = be(K);
          return new E("Invalid " + oe + " `" + le + "` of type " + ("`" + ue + "` supplied to `" + ae + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(D);
    }
    function g() {
      function D(X, M, ae, oe, le) {
        var K = X[M];
        if (!e.isValidElementType(K)) {
          var ue = be(K);
          return new E("Invalid " + oe + " `" + le + "` of type " + ("`" + ue + "` supplied to `" + ae + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(D);
    }
    function u(D) {
      function X(M, ae, oe, le, K) {
        if (!(M[ae] instanceof D)) {
          var ue = D.name || P, me = Ve(M[ae]);
          return new E("Invalid " + le + " `" + K + "` of type " + ("`" + me + "` supplied to `" + oe + "`, expected ") + ("instance of `" + ue + "`."));
        }
        return null;
      }
      return w(X);
    }
    function I(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), f;
      function X(M, ae, oe, le, K) {
        for (var ue = M[ae], me = 0; me < D.length; me++)
          if (T(ue, D[me]))
            return null;
        var xe = JSON.stringify(D, function(De, G) {
          var Ye = Ce(G);
          return Ye === "symbol" ? String(G) : G;
        });
        return new E("Invalid " + le + " `" + K + "` of value `" + String(ue) + "` " + ("supplied to `" + oe + "`, expected one of " + xe + "."));
      }
      return w(X);
    }
    function L(D) {
      function X(M, ae, oe, le, K) {
        if (typeof D != "function")
          return new E("Property `" + K + "` of component `" + oe + "` has invalid PropType notation inside objectOf.");
        var ue = M[ae], me = be(ue);
        if (me !== "object")
          return new E("Invalid " + le + " `" + K + "` of type " + ("`" + me + "` supplied to `" + oe + "`, expected an object."));
        for (var xe in ue)
          if (s(ue, xe)) {
            var pe = D(ue, xe, oe, le, K + "." + xe, r);
            if (pe instanceof Error)
              return pe;
          }
        return null;
      }
      return w(X);
    }
    function Y(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), f;
      for (var X = 0; X < D.length; X++) {
        var M = D[X];
        if (typeof M != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(M) + " at index " + X + "."
          ), f;
      }
      function ae(oe, le, K, ue, me) {
        for (var xe = [], pe = 0; pe < D.length; pe++) {
          var De = D[pe], G = De(oe, le, K, ue, me, r);
          if (G == null)
            return null;
          G.data && s(G.data, "expectedType") && xe.push(G.data.expectedType);
        }
        var Ye = xe.length > 0 ? ", expected one of type [" + xe.join(", ") + "]" : "";
        return new E("Invalid " + ue + " `" + me + "` supplied to " + ("`" + K + "`" + Ye + "."));
      }
      return w(ae);
    }
    function H() {
      function D(X, M, ae, oe, le) {
        return he(X[M]) ? null : new E("Invalid " + oe + " `" + le + "` supplied to " + ("`" + ae + "`, expected a ReactNode."));
      }
      return w(D);
    }
    function ne(D, X, M, ae, oe) {
      return new E(
        (D || "React class") + ": " + X + " type `" + M + "." + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + oe + "`."
      );
    }
    function ee(D) {
      function X(M, ae, oe, le, K) {
        var ue = M[ae], me = be(ue);
        if (me !== "object")
          return new E("Invalid " + le + " `" + K + "` of type `" + me + "` " + ("supplied to `" + oe + "`, expected `object`."));
        for (var xe in D) {
          var pe = D[xe];
          if (typeof pe != "function")
            return ne(oe, le, K, xe, Ce(pe));
          var De = pe(ue, xe, oe, le, K + "." + xe, r);
          if (De)
            return De;
        }
        return null;
      }
      return w(X);
    }
    function J(D) {
      function X(M, ae, oe, le, K) {
        var ue = M[ae], me = be(ue);
        if (me !== "object")
          return new E("Invalid " + le + " `" + K + "` of type `" + me + "` " + ("supplied to `" + oe + "`, expected `object`."));
        var xe = i({}, M[ae], D);
        for (var pe in xe) {
          var De = D[pe];
          if (s(D, pe) && typeof De != "function")
            return ne(oe, le, K, pe, Ce(De));
          if (!De)
            return new E(
              "Invalid " + le + " `" + K + "` key `" + pe + "` supplied to `" + oe + "`.\nBad object: " + JSON.stringify(M[ae], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var G = De(ue, pe, oe, le, K + "." + pe, r);
          if (G)
            return G;
        }
        return null;
      }
      return w(X);
    }
    function he(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every(he);
          if (D === null || v(D))
            return !0;
          var X = A(D);
          if (X) {
            var M = X.call(D), ae;
            if (X !== D.entries) {
              for (; !(ae = M.next()).done; )
                if (!he(ae.value))
                  return !1;
            } else
              for (; !(ae = M.next()).done; ) {
                var oe = ae.value;
                if (oe && !he(oe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Te(D, X) {
      return D === "symbol" ? !0 : X ? X["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && X instanceof Symbol : !1;
    }
    function be(D) {
      var X = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : Te(X, D) ? "symbol" : X;
    }
    function Ce(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var X = be(D);
      if (X === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return X;
    }
    function fe(D) {
      var X = Ce(D);
      switch (X) {
        case "array":
        case "object":
          return "an " + X;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + X;
        default:
          return X;
      }
    }
    function Ve(D) {
      return !D.constructor || !D.constructor.name ? P : D.constructor.name;
    }
    return k.checkPropTypes = o, k.resetWarningCache = o.resetWarningCache, k.PropTypes = k, k;
  }, qi;
}
var Ui, rn;
function Ea() {
  if (rn)
    return Ui;
  rn = 1;
  var e = cr();
  function i() {
  }
  function r() {
  }
  return r.resetWarningCache = i, Ui = function() {
    function s(f, v, x, _, b, A) {
      if (A !== e) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    s.isRequired = s;
    function o() {
      return s;
    }
    var l = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: o,
      element: s,
      elementType: s,
      instanceOf: o,
      node: s,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: i
    };
    return l.PropTypes = l, l;
  }, Ui;
}
if (process.env.NODE_ENV !== "production") {
  var wa = Bn(), Aa = !0;
  Zi.exports = Ca()(wa.isElement, Aa);
} else
  Zi.exports = Ea()();
var ka = Zi.exports;
const nn = /* @__PURE__ */ ni(ka), Pa = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "search",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
var Ia = Pa;
const Ta = /* @__PURE__ */ ni(Ia);
var jn = {}, qn = {};
(function(e) {
  (function i(r) {
    var s, o, l, f, v, x;
    function _(g) {
      var u = {}, I, L;
      for (I in g)
        g.hasOwnProperty(I) && (L = g[I], typeof L == "object" && L !== null ? u[I] = _(L) : u[I] = L);
      return u;
    }
    function b(g, u) {
      var I, L, Y, H;
      for (L = g.length, Y = 0; L; )
        I = L >>> 1, H = Y + I, u(g[H]) ? L = I : (Y = H + 1, L -= I + 1);
      return Y;
    }
    s = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      // CAUTION: It's deferred to ES7.
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      // CAUTION: It's deferred to ES7.
      ComprehensionExpression: "ComprehensionExpression",
      // CAUTION: It's deferred to ES7.
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      // CAUTION: It's deferred to ES7.
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression"
    }, l = {
      AssignmentExpression: ["left", "right"],
      AssignmentPattern: ["left", "right"],
      ArrayExpression: ["elements"],
      ArrayPattern: ["elements"],
      ArrowFunctionExpression: ["params", "body"],
      AwaitExpression: ["argument"],
      // CAUTION: It's deferred to ES7.
      BlockStatement: ["body"],
      BinaryExpression: ["left", "right"],
      BreakStatement: ["label"],
      CallExpression: ["callee", "arguments"],
      CatchClause: ["param", "body"],
      ChainExpression: ["expression"],
      ClassBody: ["body"],
      ClassDeclaration: ["id", "superClass", "body"],
      ClassExpression: ["id", "superClass", "body"],
      ComprehensionBlock: ["left", "right"],
      // CAUTION: It's deferred to ES7.
      ComprehensionExpression: ["blocks", "filter", "body"],
      // CAUTION: It's deferred to ES7.
      ConditionalExpression: ["test", "consequent", "alternate"],
      ContinueStatement: ["label"],
      DebuggerStatement: [],
      DirectiveStatement: [],
      DoWhileStatement: ["body", "test"],
      EmptyStatement: [],
      ExportAllDeclaration: ["source"],
      ExportDefaultDeclaration: ["declaration"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source"],
      ExportSpecifier: ["exported", "local"],
      ExpressionStatement: ["expression"],
      ForStatement: ["init", "test", "update", "body"],
      ForInStatement: ["left", "right", "body"],
      ForOfStatement: ["left", "right", "body"],
      FunctionDeclaration: ["id", "params", "body"],
      FunctionExpression: ["id", "params", "body"],
      GeneratorExpression: ["blocks", "filter", "body"],
      // CAUTION: It's deferred to ES7.
      Identifier: [],
      IfStatement: ["test", "consequent", "alternate"],
      ImportExpression: ["source"],
      ImportDeclaration: ["specifiers", "source"],
      ImportDefaultSpecifier: ["local"],
      ImportNamespaceSpecifier: ["local"],
      ImportSpecifier: ["imported", "local"],
      Literal: [],
      LabeledStatement: ["label", "body"],
      LogicalExpression: ["left", "right"],
      MemberExpression: ["object", "property"],
      MetaProperty: ["meta", "property"],
      MethodDefinition: ["key", "value"],
      ModuleSpecifier: [],
      NewExpression: ["callee", "arguments"],
      ObjectExpression: ["properties"],
      ObjectPattern: ["properties"],
      PrivateIdentifier: [],
      Program: ["body"],
      Property: ["key", "value"],
      PropertyDefinition: ["key", "value"],
      RestElement: ["argument"],
      ReturnStatement: ["argument"],
      SequenceExpression: ["expressions"],
      SpreadElement: ["argument"],
      Super: [],
      SwitchStatement: ["discriminant", "cases"],
      SwitchCase: ["test", "consequent"],
      TaggedTemplateExpression: ["tag", "quasi"],
      TemplateElement: [],
      TemplateLiteral: ["quasis", "expressions"],
      ThisExpression: [],
      ThrowStatement: ["argument"],
      TryStatement: ["block", "handler", "finalizer"],
      UnaryExpression: ["argument"],
      UpdateExpression: ["argument"],
      VariableDeclaration: ["declarations"],
      VariableDeclarator: ["id", "init"],
      WhileStatement: ["test", "body"],
      WithStatement: ["object", "body"],
      YieldExpression: ["argument"]
    }, f = {}, v = {}, x = {}, o = {
      Break: f,
      Skip: v,
      Remove: x
    };
    function A(g, u) {
      this.parent = g, this.key = u;
    }
    A.prototype.replace = function(u) {
      this.parent[this.key] = u;
    }, A.prototype.remove = function() {
      return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), !0) : (this.replace(null), !1);
    };
    function P(g, u, I, L) {
      this.node = g, this.path = u, this.wrap = I, this.ref = L;
    }
    function k() {
    }
    k.prototype.path = function() {
      var u, I, L, Y, H, ne;
      function ee(J, he) {
        if (Array.isArray(he))
          for (L = 0, Y = he.length; L < Y; ++L)
            J.push(he[L]);
        else
          J.push(he);
      }
      if (!this.__current.path)
        return null;
      for (H = [], u = 2, I = this.__leavelist.length; u < I; ++u)
        ne = this.__leavelist[u], ee(H, ne.path);
      return ee(H, this.__current.path), H;
    }, k.prototype.type = function() {
      var g = this.current();
      return g.type || this.__current.wrap;
    }, k.prototype.parents = function() {
      var u, I, L;
      for (L = [], u = 1, I = this.__leavelist.length; u < I; ++u)
        L.push(this.__leavelist[u].node);
      return L;
    }, k.prototype.current = function() {
      return this.__current.node;
    }, k.prototype.__execute = function(u, I) {
      var L, Y;
      return Y = void 0, L = this.__current, this.__current = I, this.__state = null, u && (Y = u.call(this, I.node, this.__leavelist[this.__leavelist.length - 1].node)), this.__current = L, Y;
    }, k.prototype.notify = function(u) {
      this.__state = u;
    }, k.prototype.skip = function() {
      this.notify(v);
    }, k.prototype.break = function() {
      this.notify(f);
    }, k.prototype.remove = function() {
      this.notify(x);
    }, k.prototype.__initialize = function(g, u) {
      this.visitor = u, this.root = g, this.__worklist = [], this.__leavelist = [], this.__current = null, this.__state = null, this.__fallback = null, u.fallback === "iteration" ? this.__fallback = Object.keys : typeof u.fallback == "function" && (this.__fallback = u.fallback), this.__keys = l, u.keys && (this.__keys = Object.assign(Object.create(this.__keys), u.keys));
    };
    function T(g) {
      return g == null ? !1 : typeof g == "object" && typeof g.type == "string";
    }
    function E(g, u) {
      return (g === s.ObjectExpression || g === s.ObjectPattern) && u === "properties";
    }
    function w(g, u) {
      for (var I = g.length - 1; I >= 0; --I)
        if (g[I].node === u)
          return !0;
      return !1;
    }
    k.prototype.traverse = function(u, I) {
      var L, Y, H, ne, ee, J, he, Te, be, Ce, fe, Ve;
      for (this.__initialize(u, I), Ve = {}, L = this.__worklist, Y = this.__leavelist, L.push(new P(u, null, null, null)), Y.push(new P(null, null, null, null)); L.length; ) {
        if (H = L.pop(), H === Ve) {
          if (H = Y.pop(), J = this.__execute(I.leave, H), this.__state === f || J === f)
            return;
          continue;
        }
        if (H.node) {
          if (J = this.__execute(I.enter, H), this.__state === f || J === f)
            return;
          if (L.push(Ve), Y.push(H), this.__state === v || J === v)
            continue;
          if (ne = H.node, ee = ne.type || H.wrap, Ce = this.__keys[ee], !Ce)
            if (this.__fallback)
              Ce = this.__fallback(ne);
            else
              throw new Error("Unknown node type " + ee + ".");
          for (Te = Ce.length; (Te -= 1) >= 0; )
            if (he = Ce[Te], fe = ne[he], !!fe) {
              if (Array.isArray(fe)) {
                for (be = fe.length; (be -= 1) >= 0; )
                  if (fe[be] && !w(Y, fe[be])) {
                    if (E(ee, Ce[Te]))
                      H = new P(fe[be], [he, be], "Property", null);
                    else if (T(fe[be]))
                      H = new P(fe[be], [he, be], null, null);
                    else
                      continue;
                    L.push(H);
                  }
              } else if (T(fe)) {
                if (w(Y, fe))
                  continue;
                L.push(new P(fe, he, null, null));
              }
            }
        }
      }
    }, k.prototype.replace = function(u, I) {
      var L, Y, H, ne, ee, J, he, Te, be, Ce, fe, Ve, D;
      function X(M) {
        var ae, oe, le, K;
        if (M.ref.remove()) {
          for (oe = M.ref.key, K = M.ref.parent, ae = L.length; ae--; )
            if (le = L[ae], le.ref && le.ref.parent === K) {
              if (le.ref.key < oe)
                break;
              --le.ref.key;
            }
        }
      }
      for (this.__initialize(u, I), fe = {}, L = this.__worklist, Y = this.__leavelist, Ve = {
        root: u
      }, J = new P(u, null, null, new A(Ve, "root")), L.push(J), Y.push(J); L.length; ) {
        if (J = L.pop(), J === fe) {
          if (J = Y.pop(), ee = this.__execute(I.leave, J), ee !== void 0 && ee !== f && ee !== v && ee !== x && J.ref.replace(ee), (this.__state === x || ee === x) && X(J), this.__state === f || ee === f)
            return Ve.root;
          continue;
        }
        if (ee = this.__execute(I.enter, J), ee !== void 0 && ee !== f && ee !== v && ee !== x && (J.ref.replace(ee), J.node = ee), (this.__state === x || ee === x) && (X(J), J.node = null), this.__state === f || ee === f)
          return Ve.root;
        if (H = J.node, !!H && (L.push(fe), Y.push(J), !(this.__state === v || ee === v))) {
          if (ne = H.type || J.wrap, be = this.__keys[ne], !be)
            if (this.__fallback)
              be = this.__fallback(H);
            else
              throw new Error("Unknown node type " + ne + ".");
          for (he = be.length; (he -= 1) >= 0; )
            if (D = be[he], Ce = H[D], !!Ce)
              if (Array.isArray(Ce)) {
                for (Te = Ce.length; (Te -= 1) >= 0; )
                  if (Ce[Te]) {
                    if (E(ne, be[he]))
                      J = new P(Ce[Te], [D, Te], "Property", new A(Ce, Te));
                    else if (T(Ce[Te]))
                      J = new P(Ce[Te], [D, Te], null, new A(Ce, Te));
                    else
                      continue;
                    L.push(J);
                  }
              } else
                T(Ce) && L.push(new P(Ce, D, null, new A(H, D)));
        }
      }
      return Ve.root;
    };
    function B(g, u) {
      var I = new k();
      return I.traverse(g, u);
    }
    function j(g, u) {
      var I = new k();
      return I.replace(g, u);
    }
    function U(g, u) {
      var I;
      return I = b(u, function(Y) {
        return Y.range[0] > g.range[0];
      }), g.extendedRange = [g.range[0], g.range[1]], I !== u.length && (g.extendedRange[1] = u[I].range[0]), I -= 1, I >= 0 && (g.extendedRange[0] = u[I].range[1]), g;
    }
    function N(g, u, I) {
      var L = [], Y, H, ne, ee;
      if (!g.range)
        throw new Error("attachComments needs range information");
      if (!I.length) {
        if (u.length) {
          for (ne = 0, H = u.length; ne < H; ne += 1)
            Y = _(u[ne]), Y.extendedRange = [0, g.range[0]], L.push(Y);
          g.leadingComments = L;
        }
        return g;
      }
      for (ne = 0, H = u.length; ne < H; ne += 1)
        L.push(U(_(u[ne]), I));
      return ee = 0, B(g, {
        enter: function(J) {
          for (var he; ee < L.length && (he = L[ee], !(he.extendedRange[1] > J.range[0])); )
            he.extendedRange[1] === J.range[0] ? (J.leadingComments || (J.leadingComments = []), J.leadingComments.push(he), L.splice(ee, 1)) : ee += 1;
          if (ee === L.length)
            return o.Break;
          if (L[ee].extendedRange[0] > J.range[1])
            return o.Skip;
        }
      }), ee = 0, B(g, {
        leave: function(J) {
          for (var he; ee < L.length && (he = L[ee], !(J.range[1] < he.extendedRange[0])); )
            J.range[1] === he.extendedRange[0] ? (J.trailingComments || (J.trailingComments = []), J.trailingComments.push(he), L.splice(ee, 1)) : ee += 1;
          if (ee === L.length)
            return o.Break;
          if (L[ee].extendedRange[0] > J.range[1])
            return o.Skip;
        }
      }), g;
    }
    return r.Syntax = s, r.traverse = B, r.replace = j, r.attachComments = N, r.VisitorKeys = l, r.VisitorOption = o, r.Controller = k, r.cloneEnvironment = function() {
      return i({});
    }, r;
  })(e);
})(qn);
var Ht = {}, Wi = {}, yi = {}, bi = {}, sn;
function Na() {
  if (sn)
    return bi;
  sn = 1;
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return bi.encode = function(i) {
    if (0 <= i && i < e.length)
      return e[i];
    throw new TypeError("Must be between 0 and 63: " + i);
  }, bi.decode = function(i) {
    var r = 65, s = 90, o = 97, l = 122, f = 48, v = 57, x = 43, _ = 47, b = 26, A = 52;
    return r <= i && i <= s ? i - r : o <= i && i <= l ? i - o + b : f <= i && i <= v ? i - f + A : i == x ? 62 : i == _ ? 63 : -1;
  }, bi;
}
var an;
function Un() {
  if (an)
    return yi;
  an = 1;
  var e = Na(), i = 5, r = 1 << i, s = r - 1, o = r;
  function l(v) {
    return v < 0 ? (-v << 1) + 1 : (v << 1) + 0;
  }
  function f(v) {
    var x = (v & 1) === 1, _ = v >> 1;
    return x ? -_ : _;
  }
  return yi.encode = function(x) {
    var _ = "", b, A = l(x);
    do
      b = A & s, A >>>= i, A > 0 && (b |= o), _ += e.encode(b);
    while (A > 0);
    return _;
  }, yi.decode = function(x, _, b) {
    var A = x.length, P = 0, k = 0, T, E;
    do {
      if (_ >= A)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (E = e.decode(x.charCodeAt(_++)), E === -1)
        throw new Error("Invalid base64 digit: " + x.charAt(_ - 1));
      T = !!(E & o), E &= s, P = P + (E << k), k += i;
    } while (T);
    b.value = f(P), b.rest = _;
  }, yi;
}
var Gi = {}, on;
function si() {
  return on || (on = 1, function(e) {
    function i(N, g, u) {
      if (g in N)
        return N[g];
      if (arguments.length === 3)
        return u;
      throw new Error('"' + g + '" is a required argument.');
    }
    e.getArg = i;
    var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function o(N) {
      var g = N.match(r);
      return g ? {
        scheme: g[1],
        auth: g[2],
        host: g[3],
        port: g[4],
        path: g[5]
      } : null;
    }
    e.urlParse = o;
    function l(N) {
      var g = "";
      return N.scheme && (g += N.scheme + ":"), g += "//", N.auth && (g += N.auth + "@"), N.host && (g += N.host), N.port && (g += ":" + N.port), N.path && (g += N.path), g;
    }
    e.urlGenerate = l;
    function f(N) {
      var g = N, u = o(N);
      if (u) {
        if (!u.path)
          return N;
        g = u.path;
      }
      for (var I = e.isAbsolute(g), L = g.split(/\/+/), Y, H = 0, ne = L.length - 1; ne >= 0; ne--)
        Y = L[ne], Y === "." ? L.splice(ne, 1) : Y === ".." ? H++ : H > 0 && (Y === "" ? (L.splice(ne + 1, H), H = 0) : (L.splice(ne, 2), H--));
      return g = L.join("/"), g === "" && (g = I ? "/" : "."), u ? (u.path = g, l(u)) : g;
    }
    e.normalize = f;
    function v(N, g) {
      N === "" && (N = "."), g === "" && (g = ".");
      var u = o(g), I = o(N);
      if (I && (N = I.path || "/"), u && !u.scheme)
        return I && (u.scheme = I.scheme), l(u);
      if (u || g.match(s))
        return g;
      if (I && !I.host && !I.path)
        return I.host = g, l(I);
      var L = g.charAt(0) === "/" ? g : f(N.replace(/\/+$/, "") + "/" + g);
      return I ? (I.path = L, l(I)) : L;
    }
    e.join = v, e.isAbsolute = function(N) {
      return N.charAt(0) === "/" || r.test(N);
    };
    function x(N, g) {
      N === "" && (N = "."), N = N.replace(/\/$/, "");
      for (var u = 0; g.indexOf(N + "/") !== 0; ) {
        var I = N.lastIndexOf("/");
        if (I < 0 || (N = N.slice(0, I), N.match(/^([^\/]+:\/)?\/*$/)))
          return g;
        ++u;
      }
      return Array(u + 1).join("../") + g.substr(N.length + 1);
    }
    e.relative = x;
    var _ = function() {
      var N = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in N);
    }();
    function b(N) {
      return N;
    }
    function A(N) {
      return k(N) ? "$" + N : N;
    }
    e.toSetString = _ ? b : A;
    function P(N) {
      return k(N) ? N.slice(1) : N;
    }
    e.fromSetString = _ ? b : P;
    function k(N) {
      if (!N)
        return !1;
      var g = N.length;
      if (g < 9 || N.charCodeAt(g - 1) !== 95 || N.charCodeAt(g - 2) !== 95 || N.charCodeAt(g - 3) !== 111 || N.charCodeAt(g - 4) !== 116 || N.charCodeAt(g - 5) !== 111 || N.charCodeAt(g - 6) !== 114 || N.charCodeAt(g - 7) !== 112 || N.charCodeAt(g - 8) !== 95 || N.charCodeAt(g - 9) !== 95)
        return !1;
      for (var u = g - 10; u >= 0; u--)
        if (N.charCodeAt(u) !== 36)
          return !1;
      return !0;
    }
    function T(N, g, u) {
      var I = w(N.source, g.source);
      return I !== 0 || (I = N.originalLine - g.originalLine, I !== 0) || (I = N.originalColumn - g.originalColumn, I !== 0 || u) || (I = N.generatedColumn - g.generatedColumn, I !== 0) || (I = N.generatedLine - g.generatedLine, I !== 0) ? I : w(N.name, g.name);
    }
    e.compareByOriginalPositions = T;
    function E(N, g, u) {
      var I = N.generatedLine - g.generatedLine;
      return I !== 0 || (I = N.generatedColumn - g.generatedColumn, I !== 0 || u) || (I = w(N.source, g.source), I !== 0) || (I = N.originalLine - g.originalLine, I !== 0) || (I = N.originalColumn - g.originalColumn, I !== 0) ? I : w(N.name, g.name);
    }
    e.compareByGeneratedPositionsDeflated = E;
    function w(N, g) {
      return N === g ? 0 : N === null ? 1 : g === null ? -1 : N > g ? 1 : -1;
    }
    function B(N, g) {
      var u = N.generatedLine - g.generatedLine;
      return u !== 0 || (u = N.generatedColumn - g.generatedColumn, u !== 0) || (u = w(N.source, g.source), u !== 0) || (u = N.originalLine - g.originalLine, u !== 0) || (u = N.originalColumn - g.originalColumn, u !== 0) ? u : w(N.name, g.name);
    }
    e.compareByGeneratedPositionsInflated = B;
    function j(N) {
      return JSON.parse(N.replace(/^\)]}'[^\n]*\n/, ""));
    }
    e.parseSourceMapInput = j;
    function U(N, g, u) {
      if (g = g || "", N && (N[N.length - 1] !== "/" && g[0] !== "/" && (N += "/"), g = N + g), u) {
        var I = o(u);
        if (!I)
          throw new Error("sourceMapURL could not be parsed");
        if (I.path) {
          var L = I.path.lastIndexOf("/");
          L >= 0 && (I.path = I.path.substring(0, L + 1));
        }
        g = v(l(I), g);
      }
      return f(g);
    }
    e.computeSourceURL = U;
  }(Gi)), Gi;
}
var zi = {}, un;
function Wn() {
  if (un)
    return zi;
  un = 1;
  var e = si(), i = Object.prototype.hasOwnProperty, r = typeof Map < "u";
  function s() {
    this._array = [], this._set = r ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(l, f) {
    for (var v = new s(), x = 0, _ = l.length; x < _; x++)
      v.add(l[x], f);
    return v;
  }, s.prototype.size = function() {
    return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(l, f) {
    var v = r ? l : e.toSetString(l), x = r ? this.has(l) : i.call(this._set, v), _ = this._array.length;
    (!x || f) && this._array.push(l), x || (r ? this._set.set(l, _) : this._set[v] = _);
  }, s.prototype.has = function(l) {
    if (r)
      return this._set.has(l);
    var f = e.toSetString(l);
    return i.call(this._set, f);
  }, s.prototype.indexOf = function(l) {
    if (r) {
      var f = this._set.get(l);
      if (f >= 0)
        return f;
    } else {
      var v = e.toSetString(l);
      if (i.call(this._set, v))
        return this._set[v];
    }
    throw new Error('"' + l + '" is not in the set.');
  }, s.prototype.at = function(l) {
    if (l >= 0 && l < this._array.length)
      return this._array[l];
    throw new Error("No element indexed by " + l);
  }, s.prototype.toArray = function() {
    return this._array.slice();
  }, zi.ArraySet = s, zi;
}
var $i = {}, ln;
function Ra() {
  if (ln)
    return $i;
  ln = 1;
  var e = si();
  function i(s, o) {
    var l = s.generatedLine, f = o.generatedLine, v = s.generatedColumn, x = o.generatedColumn;
    return f > l || f == l && x >= v || e.compareByGeneratedPositionsInflated(s, o) <= 0;
  }
  function r() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return r.prototype.unsortedForEach = function(o, l) {
    this._array.forEach(o, l);
  }, r.prototype.add = function(o) {
    i(this._last, o) ? (this._last = o, this._array.push(o)) : (this._sorted = !1, this._array.push(o));
  }, r.prototype.toArray = function() {
    return this._sorted || (this._array.sort(e.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, $i.MappingList = r, $i;
}
var cn;
function Gn() {
  if (cn)
    return Wi;
  cn = 1;
  var e = Un(), i = si(), r = Wn().ArraySet, s = Ra().MappingList;
  function o(l) {
    l || (l = {}), this._file = i.getArg(l, "file", null), this._sourceRoot = i.getArg(l, "sourceRoot", null), this._skipValidation = i.getArg(l, "skipValidation", !1), this._sources = new r(), this._names = new r(), this._mappings = new s(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(f) {
    var v = f.sourceRoot, x = new o({
      file: f.file,
      sourceRoot: v
    });
    return f.eachMapping(function(_) {
      var b = {
        generated: {
          line: _.generatedLine,
          column: _.generatedColumn
        }
      };
      _.source != null && (b.source = _.source, v != null && (b.source = i.relative(v, b.source)), b.original = {
        line: _.originalLine,
        column: _.originalColumn
      }, _.name != null && (b.name = _.name)), x.addMapping(b);
    }), f.sources.forEach(function(_) {
      var b = _;
      v !== null && (b = i.relative(v, _)), x._sources.has(b) || x._sources.add(b);
      var A = f.sourceContentFor(_);
      A != null && x.setSourceContent(_, A);
    }), x;
  }, o.prototype.addMapping = function(f) {
    var v = i.getArg(f, "generated"), x = i.getArg(f, "original", null), _ = i.getArg(f, "source", null), b = i.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(v, x, _, b), _ != null && (_ = String(_), this._sources.has(_) || this._sources.add(_)), b != null && (b = String(b), this._names.has(b) || this._names.add(b)), this._mappings.add({
      generatedLine: v.line,
      generatedColumn: v.column,
      originalLine: x != null && x.line,
      originalColumn: x != null && x.column,
      source: _,
      name: b
    });
  }, o.prototype.setSourceContent = function(f, v) {
    var x = f;
    this._sourceRoot != null && (x = i.relative(this._sourceRoot, x)), v != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[i.toSetString(x)] = v) : this._sourcesContents && (delete this._sourcesContents[i.toSetString(x)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(f, v, x) {
    var _ = v;
    if (v == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      _ = f.file;
    }
    var b = this._sourceRoot;
    b != null && (_ = i.relative(b, _));
    var A = new r(), P = new r();
    this._mappings.unsortedForEach(function(k) {
      if (k.source === _ && k.originalLine != null) {
        var T = f.originalPositionFor({
          line: k.originalLine,
          column: k.originalColumn
        });
        T.source != null && (k.source = T.source, x != null && (k.source = i.join(x, k.source)), b != null && (k.source = i.relative(b, k.source)), k.originalLine = T.line, k.originalColumn = T.column, T.name != null && (k.name = T.name));
      }
      var E = k.source;
      E != null && !A.has(E) && A.add(E);
      var w = k.name;
      w != null && !P.has(w) && P.add(w);
    }, this), this._sources = A, this._names = P, f.sources.forEach(function(k) {
      var T = f.sourceContentFor(k);
      T != null && (x != null && (k = i.join(x, k)), b != null && (k = i.relative(b, k)), this.setSourceContent(k, T));
    }, this);
  }, o.prototype._validateMapping = function(f, v, x, _) {
    if (v && typeof v.line != "number" && typeof v.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !v && !x && !_)) {
      if (f && "line" in f && "column" in f && v && "line" in v && "column" in v && f.line > 0 && f.column >= 0 && v.line > 0 && v.column >= 0 && x)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: x,
        original: v,
        name: _
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var f = 0, v = 1, x = 0, _ = 0, b = 0, A = 0, P = "", k, T, E, w, B = this._mappings.toArray(), j = 0, U = B.length; j < U; j++) {
      if (T = B[j], k = "", T.generatedLine !== v)
        for (f = 0; T.generatedLine !== v; )
          k += ";", v++;
      else if (j > 0) {
        if (!i.compareByGeneratedPositionsInflated(T, B[j - 1]))
          continue;
        k += ",";
      }
      k += e.encode(T.generatedColumn - f), f = T.generatedColumn, T.source != null && (w = this._sources.indexOf(T.source), k += e.encode(w - A), A = w, k += e.encode(T.originalLine - 1 - _), _ = T.originalLine - 1, k += e.encode(T.originalColumn - x), x = T.originalColumn, T.name != null && (E = this._names.indexOf(T.name), k += e.encode(E - b), b = E)), P += k;
    }
    return P;
  }, o.prototype._generateSourcesContent = function(f, v) {
    return f.map(function(x) {
      if (!this._sourcesContents)
        return null;
      v != null && (x = i.relative(v, x));
      var _ = i.toSetString(x);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, _) ? this._sourcesContents[_] : null;
    }, this);
  }, o.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, o.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, Wi.SourceMapGenerator = o, Wi;
}
var Yt = {}, Hi = {}, hn;
function La() {
  return hn || (hn = 1, function(e) {
    e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;
    function i(r, s, o, l, f, v) {
      var x = Math.floor((s - r) / 2) + r, _ = f(o, l[x], !0);
      return _ === 0 ? x : _ > 0 ? s - x > 1 ? i(x, s, o, l, f, v) : v == e.LEAST_UPPER_BOUND ? s < l.length ? s : -1 : x : x - r > 1 ? i(r, x, o, l, f, v) : v == e.LEAST_UPPER_BOUND ? x : r < 0 ? -1 : r;
    }
    e.search = function(s, o, l, f) {
      if (o.length === 0)
        return -1;
      var v = i(
        -1,
        o.length,
        s,
        o,
        l,
        f || e.GREATEST_LOWER_BOUND
      );
      if (v < 0)
        return -1;
      for (; v - 1 >= 0 && l(o[v], o[v - 1], !0) === 0; )
        --v;
      return v;
    };
  }(Hi)), Hi;
}
var Yi = {}, fn;
function Oa() {
  if (fn)
    return Yi;
  fn = 1;
  function e(s, o, l) {
    var f = s[o];
    s[o] = s[l], s[l] = f;
  }
  function i(s, o) {
    return Math.round(s + Math.random() * (o - s));
  }
  function r(s, o, l, f) {
    if (l < f) {
      var v = i(l, f), x = l - 1;
      e(s, v, f);
      for (var _ = s[f], b = l; b < f; b++)
        o(s[b], _) <= 0 && (x += 1, e(s, x, b));
      e(s, x + 1, b);
      var A = x + 1;
      r(s, o, l, A - 1), r(s, o, A + 1, f);
    }
  }
  return Yi.quickSort = function(s, o) {
    r(s, o, 0, s.length - 1);
  }, Yi;
}
var pn;
function Va() {
  if (pn)
    return Yt;
  pn = 1;
  var e = si(), i = La(), r = Wn().ArraySet, s = Un(), o = Oa().quickSort;
  function l(_, b) {
    var A = _;
    return typeof _ == "string" && (A = e.parseSourceMapInput(_)), A.sections != null ? new x(A, b) : new f(A, b);
  }
  l.fromSourceMap = function(_, b) {
    return f.fromSourceMap(_, b);
  }, l.prototype._version = 3, l.prototype.__generatedMappings = null, Object.defineProperty(l.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), l.prototype.__originalMappings = null, Object.defineProperty(l.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), l.prototype._charIsMappingSeparator = function(b, A) {
    var P = b.charAt(A);
    return P === ";" || P === ",";
  }, l.prototype._parseMappings = function(b, A) {
    throw new Error("Subclasses must implement _parseMappings");
  }, l.GENERATED_ORDER = 1, l.ORIGINAL_ORDER = 2, l.GREATEST_LOWER_BOUND = 1, l.LEAST_UPPER_BOUND = 2, l.prototype.eachMapping = function(b, A, P) {
    var k = A || null, T = P || l.GENERATED_ORDER, E;
    switch (T) {
      case l.GENERATED_ORDER:
        E = this._generatedMappings;
        break;
      case l.ORIGINAL_ORDER:
        E = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var w = this.sourceRoot;
    E.map(function(B) {
      var j = B.source === null ? null : this._sources.at(B.source);
      return j = e.computeSourceURL(w, j, this._sourceMapURL), {
        source: j,
        generatedLine: B.generatedLine,
        generatedColumn: B.generatedColumn,
        originalLine: B.originalLine,
        originalColumn: B.originalColumn,
        name: B.name === null ? null : this._names.at(B.name)
      };
    }, this).forEach(b, k);
  }, l.prototype.allGeneratedPositionsFor = function(b) {
    var A = e.getArg(b, "line"), P = {
      source: e.getArg(b, "source"),
      originalLine: A,
      originalColumn: e.getArg(b, "column", 0)
    };
    if (P.source = this._findSourceIndex(P.source), P.source < 0)
      return [];
    var k = [], T = this._findMapping(
      P,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      i.LEAST_UPPER_BOUND
    );
    if (T >= 0) {
      var E = this._originalMappings[T];
      if (b.column === void 0)
        for (var w = E.originalLine; E && E.originalLine === w; )
          k.push({
            line: e.getArg(E, "generatedLine", null),
            column: e.getArg(E, "generatedColumn", null),
            lastColumn: e.getArg(E, "lastGeneratedColumn", null)
          }), E = this._originalMappings[++T];
      else
        for (var B = E.originalColumn; E && E.originalLine === A && E.originalColumn == B; )
          k.push({
            line: e.getArg(E, "generatedLine", null),
            column: e.getArg(E, "generatedColumn", null),
            lastColumn: e.getArg(E, "lastGeneratedColumn", null)
          }), E = this._originalMappings[++T];
    }
    return k;
  }, Yt.SourceMapConsumer = l;
  function f(_, b) {
    var A = _;
    typeof _ == "string" && (A = e.parseSourceMapInput(_));
    var P = e.getArg(A, "version"), k = e.getArg(A, "sources"), T = e.getArg(A, "names", []), E = e.getArg(A, "sourceRoot", null), w = e.getArg(A, "sourcesContent", null), B = e.getArg(A, "mappings"), j = e.getArg(A, "file", null);
    if (P != this._version)
      throw new Error("Unsupported version: " + P);
    E && (E = e.normalize(E)), k = k.map(String).map(e.normalize).map(function(U) {
      return E && e.isAbsolute(E) && e.isAbsolute(U) ? e.relative(E, U) : U;
    }), this._names = r.fromArray(T.map(String), !0), this._sources = r.fromArray(k, !0), this._absoluteSources = this._sources.toArray().map(function(U) {
      return e.computeSourceURL(E, U, b);
    }), this.sourceRoot = E, this.sourcesContent = w, this._mappings = B, this._sourceMapURL = b, this.file = j;
  }
  f.prototype = Object.create(l.prototype), f.prototype.consumer = l, f.prototype._findSourceIndex = function(_) {
    var b = _;
    if (this.sourceRoot != null && (b = e.relative(this.sourceRoot, b)), this._sources.has(b))
      return this._sources.indexOf(b);
    var A;
    for (A = 0; A < this._absoluteSources.length; ++A)
      if (this._absoluteSources[A] == _)
        return A;
    return -1;
  }, f.fromSourceMap = function(b, A) {
    var P = Object.create(f.prototype), k = P._names = r.fromArray(b._names.toArray(), !0), T = P._sources = r.fromArray(b._sources.toArray(), !0);
    P.sourceRoot = b._sourceRoot, P.sourcesContent = b._generateSourcesContent(
      P._sources.toArray(),
      P.sourceRoot
    ), P.file = b._file, P._sourceMapURL = A, P._absoluteSources = P._sources.toArray().map(function(u) {
      return e.computeSourceURL(P.sourceRoot, u, A);
    });
    for (var E = b._mappings.toArray().slice(), w = P.__generatedMappings = [], B = P.__originalMappings = [], j = 0, U = E.length; j < U; j++) {
      var N = E[j], g = new v();
      g.generatedLine = N.generatedLine, g.generatedColumn = N.generatedColumn, N.source && (g.source = T.indexOf(N.source), g.originalLine = N.originalLine, g.originalColumn = N.originalColumn, N.name && (g.name = k.indexOf(N.name)), B.push(g)), w.push(g);
    }
    return o(P.__originalMappings, e.compareByOriginalPositions), P;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function v() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(b, A) {
    for (var P = 1, k = 0, T = 0, E = 0, w = 0, B = 0, j = b.length, U = 0, N = {}, g = {}, u = [], I = [], L, Y, H, ne, ee; U < j; )
      if (b.charAt(U) === ";")
        P++, U++, k = 0;
      else if (b.charAt(U) === ",")
        U++;
      else {
        for (L = new v(), L.generatedLine = P, ne = U; ne < j && !this._charIsMappingSeparator(b, ne); ne++)
          ;
        if (Y = b.slice(U, ne), H = N[Y], H)
          U += Y.length;
        else {
          for (H = []; U < ne; )
            s.decode(b, U, g), ee = g.value, U = g.rest, H.push(ee);
          if (H.length === 2)
            throw new Error("Found a source, but no line and column");
          if (H.length === 3)
            throw new Error("Found a source and line, but no column");
          N[Y] = H;
        }
        L.generatedColumn = k + H[0], k = L.generatedColumn, H.length > 1 && (L.source = w + H[1], w += H[1], L.originalLine = T + H[2], T = L.originalLine, L.originalLine += 1, L.originalColumn = E + H[3], E = L.originalColumn, H.length > 4 && (L.name = B + H[4], B += H[4])), I.push(L), typeof L.originalLine == "number" && u.push(L);
      }
    o(I, e.compareByGeneratedPositionsDeflated), this.__generatedMappings = I, o(u, e.compareByOriginalPositions), this.__originalMappings = u;
  }, f.prototype._findMapping = function(b, A, P, k, T, E) {
    if (b[P] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + b[P]);
    if (b[k] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + b[k]);
    return i.search(b, A, T, E);
  }, f.prototype.computeColumnSpans = function() {
    for (var b = 0; b < this._generatedMappings.length; ++b) {
      var A = this._generatedMappings[b];
      if (b + 1 < this._generatedMappings.length) {
        var P = this._generatedMappings[b + 1];
        if (A.generatedLine === P.generatedLine) {
          A.lastGeneratedColumn = P.generatedColumn - 1;
          continue;
        }
      }
      A.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(b) {
    var A = {
      generatedLine: e.getArg(b, "line"),
      generatedColumn: e.getArg(b, "column")
    }, P = this._findMapping(
      A,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      e.compareByGeneratedPositionsDeflated,
      e.getArg(b, "bias", l.GREATEST_LOWER_BOUND)
    );
    if (P >= 0) {
      var k = this._generatedMappings[P];
      if (k.generatedLine === A.generatedLine) {
        var T = e.getArg(k, "source", null);
        T !== null && (T = this._sources.at(T), T = e.computeSourceURL(this.sourceRoot, T, this._sourceMapURL));
        var E = e.getArg(k, "name", null);
        return E !== null && (E = this._names.at(E)), {
          source: T,
          line: e.getArg(k, "originalLine", null),
          column: e.getArg(k, "originalColumn", null),
          name: E
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, f.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(b) {
      return b == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(b, A) {
    if (!this.sourcesContent)
      return null;
    var P = this._findSourceIndex(b);
    if (P >= 0)
      return this.sourcesContent[P];
    var k = b;
    this.sourceRoot != null && (k = e.relative(this.sourceRoot, k));
    var T;
    if (this.sourceRoot != null && (T = e.urlParse(this.sourceRoot))) {
      var E = k.replace(/^file:\/\//, "");
      if (T.scheme == "file" && this._sources.has(E))
        return this.sourcesContent[this._sources.indexOf(E)];
      if ((!T.path || T.path == "/") && this._sources.has("/" + k))
        return this.sourcesContent[this._sources.indexOf("/" + k)];
    }
    if (A)
      return null;
    throw new Error('"' + k + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(b) {
    var A = e.getArg(b, "source");
    if (A = this._findSourceIndex(A), A < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var P = {
      source: A,
      originalLine: e.getArg(b, "line"),
      originalColumn: e.getArg(b, "column")
    }, k = this._findMapping(
      P,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      e.getArg(b, "bias", l.GREATEST_LOWER_BOUND)
    );
    if (k >= 0) {
      var T = this._originalMappings[k];
      if (T.source === P.source)
        return {
          line: e.getArg(T, "generatedLine", null),
          column: e.getArg(T, "generatedColumn", null),
          lastColumn: e.getArg(T, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Yt.BasicSourceMapConsumer = f;
  function x(_, b) {
    var A = _;
    typeof _ == "string" && (A = e.parseSourceMapInput(_));
    var P = e.getArg(A, "version"), k = e.getArg(A, "sections");
    if (P != this._version)
      throw new Error("Unsupported version: " + P);
    this._sources = new r(), this._names = new r();
    var T = {
      line: -1,
      column: 0
    };
    this._sections = k.map(function(E) {
      if (E.url)
        throw new Error("Support for url field in sections not implemented.");
      var w = e.getArg(E, "offset"), B = e.getArg(w, "line"), j = e.getArg(w, "column");
      if (B < T.line || B === T.line && j < T.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return T = w, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: B + 1,
          generatedColumn: j + 1
        },
        consumer: new l(e.getArg(E, "map"), b)
      };
    });
  }
  return x.prototype = Object.create(l.prototype), x.prototype.constructor = l, x.prototype._version = 3, Object.defineProperty(x.prototype, "sources", {
    get: function() {
      for (var _ = [], b = 0; b < this._sections.length; b++)
        for (var A = 0; A < this._sections[b].consumer.sources.length; A++)
          _.push(this._sections[b].consumer.sources[A]);
      return _;
    }
  }), x.prototype.originalPositionFor = function(b) {
    var A = {
      generatedLine: e.getArg(b, "line"),
      generatedColumn: e.getArg(b, "column")
    }, P = i.search(
      A,
      this._sections,
      function(T, E) {
        var w = T.generatedLine - E.generatedOffset.generatedLine;
        return w || T.generatedColumn - E.generatedOffset.generatedColumn;
      }
    ), k = this._sections[P];
    return k ? k.consumer.originalPositionFor({
      line: A.generatedLine - (k.generatedOffset.generatedLine - 1),
      column: A.generatedColumn - (k.generatedOffset.generatedLine === A.generatedLine ? k.generatedOffset.generatedColumn - 1 : 0),
      bias: b.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, x.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(b) {
      return b.consumer.hasContentsOfAllSources();
    });
  }, x.prototype.sourceContentFor = function(b, A) {
    for (var P = 0; P < this._sections.length; P++) {
      var k = this._sections[P], T = k.consumer.sourceContentFor(b, !0);
      if (T)
        return T;
    }
    if (A)
      return null;
    throw new Error('"' + b + '" is not in the SourceMap.');
  }, x.prototype.generatedPositionFor = function(b) {
    for (var A = 0; A < this._sections.length; A++) {
      var P = this._sections[A];
      if (P.consumer._findSourceIndex(e.getArg(b, "source")) !== -1) {
        var k = P.consumer.generatedPositionFor(b);
        if (k) {
          var T = {
            line: k.line + (P.generatedOffset.generatedLine - 1),
            column: k.column + (P.generatedOffset.generatedLine === k.line ? P.generatedOffset.generatedColumn - 1 : 0)
          };
          return T;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, x.prototype._parseMappings = function(b, A) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var P = 0; P < this._sections.length; P++)
      for (var k = this._sections[P], T = k.consumer._generatedMappings, E = 0; E < T.length; E++) {
        var w = T[E], B = k.consumer._sources.at(w.source);
        B = e.computeSourceURL(k.consumer.sourceRoot, B, this._sourceMapURL), this._sources.add(B), B = this._sources.indexOf(B);
        var j = null;
        w.name && (j = k.consumer._names.at(w.name), this._names.add(j), j = this._names.indexOf(j));
        var U = {
          source: B,
          generatedLine: w.generatedLine + (k.generatedOffset.generatedLine - 1),
          generatedColumn: w.generatedColumn + (k.generatedOffset.generatedLine === w.generatedLine ? k.generatedOffset.generatedColumn - 1 : 0),
          originalLine: w.originalLine,
          originalColumn: w.originalColumn,
          name: j
        };
        this.__generatedMappings.push(U), typeof U.originalLine == "number" && this.__originalMappings.push(U);
      }
    o(this.__generatedMappings, e.compareByGeneratedPositionsDeflated), o(this.__originalMappings, e.compareByOriginalPositions);
  }, Yt.IndexedSourceMapConsumer = x, Yt;
}
var Qi = {}, dn;
function Fa() {
  if (dn)
    return Qi;
  dn = 1;
  var e = Gn().SourceMapGenerator, i = si(), r = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function l(f, v, x, _, b) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = v ?? null, this.source = x ?? null, this.name = b ?? null, this[o] = !0, _ != null && this.add(_);
  }
  return l.fromStringWithSourceMap = function(v, x, _) {
    var b = new l(), A = v.split(r), P = 0, k = function() {
      var j = N(), U = N() || "";
      return j + U;
      function N() {
        return P < A.length ? A[P++] : void 0;
      }
    }, T = 1, E = 0, w = null;
    return x.eachMapping(function(j) {
      if (w !== null)
        if (T < j.generatedLine)
          B(w, k()), T++, E = 0;
        else {
          var U = A[P] || "", N = U.substr(0, j.generatedColumn - E);
          A[P] = U.substr(j.generatedColumn - E), E = j.generatedColumn, B(w, N), w = j;
          return;
        }
      for (; T < j.generatedLine; )
        b.add(k()), T++;
      if (E < j.generatedColumn) {
        var U = A[P] || "";
        b.add(U.substr(0, j.generatedColumn)), A[P] = U.substr(j.generatedColumn), E = j.generatedColumn;
      }
      w = j;
    }, this), P < A.length && (w && B(w, k()), b.add(A.splice(P).join(""))), x.sources.forEach(function(j) {
      var U = x.sourceContentFor(j);
      U != null && (_ != null && (j = i.join(_, j)), b.setSourceContent(j, U));
    }), b;
    function B(j, U) {
      if (j === null || j.source === void 0)
        b.add(U);
      else {
        var N = _ ? i.join(_, j.source) : j.source;
        b.add(new l(
          j.originalLine,
          j.originalColumn,
          N,
          U,
          j.name
        ));
      }
    }
  }, l.prototype.add = function(v) {
    if (Array.isArray(v))
      v.forEach(function(x) {
        this.add(x);
      }, this);
    else if (v[o] || typeof v == "string")
      v && this.children.push(v);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + v
      );
    return this;
  }, l.prototype.prepend = function(v) {
    if (Array.isArray(v))
      for (var x = v.length - 1; x >= 0; x--)
        this.prepend(v[x]);
    else if (v[o] || typeof v == "string")
      this.children.unshift(v);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + v
      );
    return this;
  }, l.prototype.walk = function(v) {
    for (var x, _ = 0, b = this.children.length; _ < b; _++)
      x = this.children[_], x[o] ? x.walk(v) : x !== "" && v(x, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, l.prototype.join = function(v) {
    var x, _, b = this.children.length;
    if (b > 0) {
      for (x = [], _ = 0; _ < b - 1; _++)
        x.push(this.children[_]), x.push(v);
      x.push(this.children[_]), this.children = x;
    }
    return this;
  }, l.prototype.replaceRight = function(v, x) {
    var _ = this.children[this.children.length - 1];
    return _[o] ? _.replaceRight(v, x) : typeof _ == "string" ? this.children[this.children.length - 1] = _.replace(v, x) : this.children.push("".replace(v, x)), this;
  }, l.prototype.setSourceContent = function(v, x) {
    this.sourceContents[i.toSetString(v)] = x;
  }, l.prototype.walkSourceContents = function(v) {
    for (var x = 0, _ = this.children.length; x < _; x++)
      this.children[x][o] && this.children[x].walkSourceContents(v);
    for (var b = Object.keys(this.sourceContents), x = 0, _ = b.length; x < _; x++)
      v(i.fromSetString(b[x]), this.sourceContents[b[x]]);
  }, l.prototype.toString = function() {
    var v = "";
    return this.walk(function(x) {
      v += x;
    }), v;
  }, l.prototype.toStringWithSourceMap = function(v) {
    var x = {
      code: "",
      line: 1,
      column: 0
    }, _ = new e(v), b = !1, A = null, P = null, k = null, T = null;
    return this.walk(function(E, w) {
      x.code += E, w.source !== null && w.line !== null && w.column !== null ? ((A !== w.source || P !== w.line || k !== w.column || T !== w.name) && _.addMapping({
        source: w.source,
        original: {
          line: w.line,
          column: w.column
        },
        generated: {
          line: x.line,
          column: x.column
        },
        name: w.name
      }), A = w.source, P = w.line, k = w.column, T = w.name, b = !0) : b && (_.addMapping({
        generated: {
          line: x.line,
          column: x.column
        }
      }), A = null, b = !1);
      for (var B = 0, j = E.length; B < j; B++)
        E.charCodeAt(B) === s ? (x.line++, x.column = 0, B + 1 === j ? (A = null, b = !1) : b && _.addMapping({
          source: w.source,
          original: {
            line: w.line,
            column: w.column
          },
          generated: {
            line: x.line,
            column: x.column
          },
          name: w.name
        })) : x.column++;
    }), this.walkSourceContents(function(E, w) {
      _.setSourceContent(E, w);
    }), { code: x.code, map: _ };
  }, Qi.SourceNode = l, Qi;
}
var mn;
function Ma() {
  return mn || (mn = 1, Ht.SourceMapGenerator = Gn().SourceMapGenerator, Ht.SourceMapConsumer = Va().SourceMapConsumer, Ht.SourceNode = Fa().SourceNode), Ht;
}
const Ba = "escodegen", Da = "ECMAScript code generator", ja = "http://github.com/estools/escodegen", qa = "escodegen.js", Ua = {
  esgenerate: "./bin/esgenerate.js",
  escodegen: "./bin/escodegen.js"
}, Wa = [
  "LICENSE.BSD",
  "README.md",
  "bin",
  "escodegen.js",
  "package.json"
], Ga = "2.1.0", za = {
  node: ">=6.0"
}, $a = [
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "http://github.com/Constellation"
  }
], Ha = {
  type: "git",
  url: "http://github.com/estools/escodegen.git"
}, Ya = {
  estraverse: "^5.2.0",
  esutils: "^2.0.2",
  esprima: "^4.0.1"
}, Qa = {
  "source-map": "~0.6.1"
}, Xa = {
  acorn: "^8.0.4",
  bluebird: "^3.4.7",
  "bower-registry-client": "^1.0.0",
  chai: "^4.2.0",
  "chai-exclude": "^2.0.2",
  "commonjs-everywhere": "^0.9.7",
  gulp: "^4.0.2",
  "gulp-eslint": "^6.0.0",
  "gulp-mocha": "^7.0.2",
  minimist: "^1.2.5",
  optionator: "^0.9.1",
  semver: "^7.3.4"
}, Ja = "BSD-2-Clause", Ka = {
  test: "gulp travis",
  "unit-test": "gulp test",
  lint: "gulp lint",
  release: "node tools/release.js",
  "build-min": "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
  build: "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js"
}, Za = {
  name: Ba,
  description: Da,
  homepage: ja,
  main: qa,
  bin: Ua,
  files: Wa,
  version: Ga,
  engines: za,
  maintainers: $a,
  repository: Ha,
  dependencies: Ya,
  optionalDependencies: Qa,
  devDependencies: Xa,
  license: Ja,
  scripts: Ka
};
(function(e) {
  (function() {
    var i, r, s, o, l, f, v, x, _, b, A, P, k, T, E, w, B, j, U, N, g, u, I, L, Y, H;
    l = qn, f = ua, i = l.Syntax;
    function ne(a) {
      return qe.Expression.hasOwnProperty(a.type);
    }
    function ee(a) {
      return qe.Statement.hasOwnProperty(a.type);
    }
    r = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      Coalesce: 3,
      LogicalOR: 4,
      LogicalAND: 5,
      BitwiseOR: 6,
      BitwiseXOR: 7,
      BitwiseAND: 8,
      Equality: 9,
      Relational: 10,
      BitwiseSHIFT: 11,
      Additive: 12,
      Multiplicative: 13,
      Exponentiation: 14,
      Await: 15,
      Unary: 15,
      Postfix: 16,
      OptionalChaining: 17,
      Call: 18,
      New: 19,
      TaggedTemplate: 20,
      Member: 21,
      Primary: 22
    }, s = {
      "??": r.Coalesce,
      "||": r.LogicalOR,
      "&&": r.LogicalAND,
      "|": r.BitwiseOR,
      "^": r.BitwiseXOR,
      "&": r.BitwiseAND,
      "==": r.Equality,
      "!=": r.Equality,
      "===": r.Equality,
      "!==": r.Equality,
      is: r.Equality,
      isnt: r.Equality,
      "<": r.Relational,
      ">": r.Relational,
      "<=": r.Relational,
      ">=": r.Relational,
      in: r.Relational,
      instanceof: r.Relational,
      "<<": r.BitwiseSHIFT,
      ">>": r.BitwiseSHIFT,
      ">>>": r.BitwiseSHIFT,
      "+": r.Additive,
      "-": r.Additive,
      "*": r.Multiplicative,
      "%": r.Multiplicative,
      "/": r.Multiplicative,
      "**": r.Exponentiation
    };
    var J = 1, he = 2, Te = 4, be = 8, Ce = 16, fe = 32, Ve = 64, D = he | Te, X = J | he, M = J | he | Te, ae = J, oe = Te, le = J | Te, K = J, ue = J | fe, me = 0, xe = J | Ce, pe = J | be;
    function De() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: {
            style: "    ",
            base: 0,
            adjustMultilineComment: !1
          },
          newline: `
`,
          space: " ",
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: "single",
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: !1,
          starlessGenerator: !1
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null
      };
    }
    function G(a, m) {
      var h = "";
      for (m |= 0; m > 0; m >>>= 1, a += a)
        m & 1 && (h += a);
      return h;
    }
    function Ye(a) {
      return /[\r\n]/g.test(a);
    }
    function Q(a) {
      var m = a.length;
      return m && f.code.isLineTerminator(a.charCodeAt(m - 1));
    }
    function Ke(a, m) {
      var h;
      for (h in m)
        m.hasOwnProperty(h) && (a[h] = m[h]);
      return a;
    }
    function tt(a, m) {
      var h, d;
      function S(V) {
        return typeof V == "object" && V instanceof Object && !(V instanceof RegExp);
      }
      for (h in m)
        m.hasOwnProperty(h) && (d = m[h], S(d) ? S(a[h]) ? tt(a[h], d) : a[h] = tt({}, d) : a[h] = d);
      return a;
    }
    function ct(a) {
      var m, h, d, S, V;
      if (a !== a)
        throw new Error("Numeric literal whose value is NaN");
      if (a < 0 || a === 0 && 1 / a < 0)
        throw new Error("Numeric literal whose value is negative");
      if (a === 1 / 0)
        return _ ? "null" : b ? "1e400" : "1e+400";
      if (m = "" + a, !b || m.length < 3)
        return m;
      for (h = m.indexOf("."), !_ && m.charCodeAt(0) === 48 && h === 1 && (h = 0, m = m.slice(1)), d = m, m = m.replace("e+", "e"), S = 0, (V = d.indexOf("e")) > 0 && (S = +d.slice(V + 1), d = d.slice(0, V)), h >= 0 && (S -= d.length - h - 1, d = +(d.slice(0, h) + d.slice(h + 1)) + ""), V = 0; d.charCodeAt(d.length + V - 1) === 48; )
        --V;
      return V !== 0 && (S -= V, d = d.slice(0, V)), S !== 0 && (d += "e" + S), (d.length < m.length || A && a > 1e12 && Math.floor(a) === a && (d = "0x" + a.toString(16)).length < m.length) && +d === a && (m = d), m;
    }
    function Nt(a, m) {
      return (a & -2) === 8232 ? (m ? "u" : "\\u") + (a === 8232 ? "2028" : "2029") : a === 10 || a === 13 ? (m ? "" : "\\") + (a === 10 ? "n" : "r") : String.fromCharCode(a);
    }
    function Wt(a) {
      var m, h, d, S, V, F, q, Z;
      if (h = a.toString(), a.source) {
        if (m = h.match(/\/([^/]*)$/), !m)
          return h;
        for (d = m[1], h = "", q = !1, Z = !1, S = 0, V = a.source.length; S < V; ++S)
          F = a.source.charCodeAt(S), Z ? (h += Nt(F, Z), Z = !1) : (q ? F === 93 && (q = !1) : F === 47 ? h += "\\" : F === 91 && (q = !0), h += Nt(F, Z), Z = F === 92);
        return "/" + h + "/" + d;
      }
      return h;
    }
    function Rt(a, m) {
      var h;
      return a === 8 ? "\\b" : a === 12 ? "\\f" : a === 9 ? "\\t" : (h = a.toString(16).toUpperCase(), _ || a > 255 ? "\\u" + "0000".slice(h.length) + h : a === 0 && !f.code.isDecimalDigit(m) ? "\\0" : a === 11 ? "\\x0B" : "\\x" + "00".slice(h.length) + h);
    }
    function Gt(a) {
      if (a === 92)
        return "\\\\";
      if (a === 10)
        return "\\n";
      if (a === 13)
        return "\\r";
      if (a === 8232)
        return "\\u2028";
      if (a === 8233)
        return "\\u2029";
      throw new Error("Incorrectly classified character");
    }
    function ut(a) {
      var m, h, d, S;
      for (S = P === "double" ? '"' : "'", m = 0, h = a.length; m < h; ++m)
        if (d = a.charCodeAt(m), d === 39) {
          S = '"';
          break;
        } else if (d === 34) {
          S = "'";
          break;
        } else
          d === 92 && ++m;
      return S + a + S;
    }
    function ci(a) {
      var m = "", h, d, S, V = 0, F = 0, q, Z;
      for (h = 0, d = a.length; h < d; ++h) {
        if (S = a.charCodeAt(h), S === 39)
          ++V;
        else if (S === 34)
          ++F;
        else if (S === 47 && _)
          m += "\\";
        else if (f.code.isLineTerminator(S) || S === 92) {
          m += Gt(S);
          continue;
        } else if (!f.code.isIdentifierPartES5(S) && (_ && S < 32 || !_ && !k && (S < 32 || S > 126))) {
          m += Rt(S, a.charCodeAt(h + 1));
          continue;
        }
        m += String.fromCharCode(S);
      }
      if (q = !(P === "double" || P === "auto" && F < V), Z = q ? "'" : '"', !(q ? V : F))
        return Z + m + Z;
      for (a = m, m = Z, h = 0, d = a.length; h < d; ++h)
        S = a.charCodeAt(h), (S === 39 && q || S === 34 && !q) && (m += "\\"), m += String.fromCharCode(S);
      return m + Z;
    }
    function zt(a) {
      var m, h, d, S = "";
      for (m = 0, h = a.length; m < h; ++m)
        d = a[m], S += Array.isArray(d) ? zt(d) : d;
      return S;
    }
    function ke(a, m) {
      if (!u)
        return Array.isArray(a) ? zt(a) : a;
      if (m == null) {
        if (a instanceof o)
          return a;
        m = {};
      }
      return m.loc == null ? new o(null, null, u, a, m.name || null) : new o(m.loc.start.line, m.loc.start.column, u === !0 ? m.loc.source || null : u, a, m.name || null);
    }
    function ge() {
      return E || " ";
    }
    function re(a, m) {
      var h, d, S, V;
      return h = ke(a).toString(), h.length === 0 ? [m] : (d = ke(m).toString(), d.length === 0 ? [a] : (S = h.charCodeAt(h.length - 1), V = d.charCodeAt(0), (S === 43 || S === 45) && S === V || f.code.isIdentifierPartES5(S) && f.code.isIdentifierPartES5(V) || S === 47 && V === 105 ? [a, ge(), m] : f.code.isWhiteSpace(S) || f.code.isLineTerminator(S) || f.code.isWhiteSpace(V) || f.code.isLineTerminator(V) ? [a, m] : [a, E, m]));
    }
    function Pe(a) {
      return [v, a];
    }
    function je(a) {
      var m;
      m = v, v += x, a(v), v = m;
    }
    function Lt(a) {
      var m;
      for (m = a.length - 1; m >= 0 && !f.code.isLineTerminator(a.charCodeAt(m)); --m)
        ;
      return a.length - 1 - m;
    }
    function ie(a, m) {
      var h, d, S, V, F, q, Z, Se;
      for (h = a.split(/\r\n|[\r\n]/), q = Number.MAX_VALUE, d = 1, S = h.length; d < S; ++d) {
        for (V = h[d], F = 0; F < V.length && f.code.isWhiteSpace(V.charCodeAt(F)); )
          ++F;
        q > F && (q = F);
      }
      for (typeof m < "u" ? (Z = v, h[1][q] === "*" && (m += " "), v = m) : (q & 1 && --q, Z = v), d = 1, S = h.length; d < S; ++d)
        Se = ke(Pe(h[d].slice(q))), h[d] = u ? Se.join("") : Se;
      return v = Z, h.join(`
`);
    }
    function Ze(a, m) {
      if (a.type === "Line") {
        if (Q(a.value))
          return "//" + a.value;
        var h = "//" + a.value;
        return L || (h += `
`), h;
      }
      return N.format.indent.adjustMultilineComment && /[\n\r]/.test(a.value) ? ie("/*" + a.value + "*/", m) : "/*" + a.value + "*/";
    }
    function hi(a, m) {
      var h, d, S, V, F, q, Z, Se, Ue, ht, dt, pi, di, it;
      if (a.leadingComments && a.leadingComments.length > 0) {
        if (V = m, L) {
          for (S = a.leadingComments[0], m = [], Se = S.extendedRange, Ue = S.range, dt = I.substring(Se[0], Ue[0]), it = (dt.match(/\n/g) || []).length, it > 0 ? (m.push(G(`
`, it)), m.push(Pe(Ze(S)))) : (m.push(dt), m.push(Ze(S))), ht = Ue, h = 1, d = a.leadingComments.length; h < d; h++)
            S = a.leadingComments[h], Ue = S.range, pi = I.substring(ht[1], Ue[0]), it = (pi.match(/\n/g) || []).length, m.push(G(`
`, it)), m.push(Pe(Ze(S))), ht = Ue;
          di = I.substring(Ue[1], Se[1]), it = (di.match(/\n/g) || []).length, m.push(G(`
`, it));
        } else
          for (S = a.leadingComments[0], m = [], j && a.type === i.Program && a.body.length === 0 && m.push(`
`), m.push(Ze(S)), Q(ke(m).toString()) || m.push(`
`), h = 1, d = a.leadingComments.length; h < d; ++h)
            S = a.leadingComments[h], Z = [Ze(S)], Q(ke(Z).toString()) || Z.push(`
`), m.push(Pe(Z));
        m.push(Pe(V));
      }
      if (a.trailingComments)
        if (L)
          S = a.trailingComments[0], Se = S.extendedRange, Ue = S.range, dt = I.substring(Se[0], Ue[0]), it = (dt.match(/\n/g) || []).length, it > 0 ? (m.push(G(`
`, it)), m.push(Pe(Ze(S)))) : (m.push(dt), m.push(Ze(S)));
        else
          for (F = !Q(ke(m).toString()), q = G(" ", Lt(ke([v, m, x]).toString())), h = 0, d = a.trailingComments.length; h < d; ++h)
            S = a.trailingComments[h], F ? (h === 0 ? m = [m, x] : m = [m, q], m.push(Ze(S, q))) : m = [m, Pe(Ze(S))], h !== d - 1 && !Q(ke(m).toString()) && (m = [m, `
`]);
      return m;
    }
    function bt(a, m, h) {
      var d, S = 0;
      for (d = a; d < m; d++)
        I[d] === `
` && S++;
      for (d = 1; d < S; d++)
        h.push(T);
    }
    function Be(a, m, h) {
      return m < h ? ["(", a, ")"] : a;
    }
    function Ot(a) {
      var m, h, d;
      for (d = a.split(/\r\n|\n/), m = 1, h = d.length; m < h; m++)
        d[m] = T + v + d[m];
      return d;
    }
    function fi(a, m) {
      var h, d, S;
      return h = a[N.verbatim], typeof h == "string" ? d = Be(Ot(h), r.Sequence, m) : (d = Ot(h.content), S = h.precedence != null ? h.precedence : r.Sequence, d = Be(d, S, m)), ke(d, a);
    }
    function qe() {
    }
    qe.prototype.maybeBlock = function(a, m) {
      var h, d, S = this;
      return d = !N.comment || !a.leadingComments, a.type === i.BlockStatement && d ? [E, this.generateStatement(a, m)] : a.type === i.EmptyStatement && d ? ";" : (je(function() {
        h = [
          T,
          Pe(S.generateStatement(a, m))
        ];
      }), h);
    }, qe.prototype.maybeBlockSuffix = function(a, m) {
      var h = Q(ke(m).toString());
      return a.type === i.BlockStatement && (!N.comment || !a.leadingComments) && !h ? [m, E] : h ? [m, v] : [m, T, v];
    };
    function $e(a) {
      return ke(a.name, a);
    }
    function He(a, m) {
      return a.async ? "async" + (m ? ge() : E) : "";
    }
    function Qe(a) {
      var m = a.generator && !N.moz.starlessGenerator;
      return m ? "*" + E : "";
    }
    function Fe(a) {
      var m = a.value, h = "";
      return m.async && (h += He(m, !a.computed)), m.generator && (h += Qe(m) ? "*" : ""), h;
    }
    qe.prototype.generatePattern = function(a, m, h) {
      return a.type === i.Identifier ? $e(a) : this.generateExpression(a, m, h);
    }, qe.prototype.generateFunctionParams = function(a) {
      var m, h, d, S;
      if (S = !1, a.type === i.ArrowFunctionExpression && !a.rest && (!a.defaults || a.defaults.length === 0) && a.params.length === 1 && a.params[0].type === i.Identifier)
        d = [He(a, !0), $e(a.params[0])];
      else {
        for (d = a.type === i.ArrowFunctionExpression ? [He(a, !1)] : [], d.push("("), a.defaults && (S = !0), m = 0, h = a.params.length; m < h; ++m)
          S && a.defaults[m] ? d.push(this.generateAssignment(a.params[m], a.defaults[m], "=", r.Assignment, M)) : d.push(this.generatePattern(a.params[m], r.Assignment, M)), m + 1 < h && d.push("," + E);
        a.rest && (a.params.length && d.push("," + E), d.push("..."), d.push($e(a.rest))), d.push(")");
      }
      return d;
    }, qe.prototype.generateFunctionBody = function(a) {
      var m, h;
      return m = this.generateFunctionParams(a), a.type === i.ArrowFunctionExpression && (m.push(E), m.push("=>")), a.expression ? (m.push(E), h = this.generateExpression(a.body, r.Assignment, M), h.toString().charAt(0) === "{" && (h = ["(", h, ")"]), m.push(h)) : m.push(this.maybeBlock(a.body, pe)), m;
    }, qe.prototype.generateIterationForStatement = function(a, m, h) {
      var d = ["for" + (m.await ? ge() + "await" : "") + E + "("], S = this;
      return je(function() {
        m.left.type === i.VariableDeclaration ? je(function() {
          d.push(m.left.kind + ge()), d.push(S.generateStatement(m.left.declarations[0], me));
        }) : d.push(S.generateExpression(m.left, r.Call, M)), d = re(d, a), d = [re(
          d,
          S.generateExpression(m.right, r.Assignment, M)
        ), ")"];
      }), d.push(this.maybeBlock(m.body, h)), d;
    }, qe.prototype.generatePropertyKey = function(a, m) {
      var h = [];
      return m && h.push("["), h.push(this.generateExpression(a, r.Assignment, M)), m && h.push("]"), h;
    }, qe.prototype.generateAssignment = function(a, m, h, d, S) {
      return r.Assignment < d && (S |= J), Be(
        [
          this.generateExpression(a, r.Call, S),
          E + h + E,
          this.generateExpression(m, r.Assignment, S)
        ],
        r.Assignment,
        d
      );
    }, qe.prototype.semicolon = function(a) {
      return !B && a & fe ? "" : ";";
    }, qe.Statement = {
      BlockStatement: function(a, m) {
        var h, d, S = ["{", T], V = this;
        return je(function() {
          a.body.length === 0 && L && (h = a.range, h[1] - h[0] > 2 && (d = I.substring(h[0] + 1, h[1] - 1), d[0] === `
` && (S = ["{"]), S.push(d)));
          var F, q, Z, Se;
          for (Se = K, m & be && (Se |= Ce), F = 0, q = a.body.length; F < q; ++F)
            L && (F === 0 && (a.body[0].leadingComments && (h = a.body[0].leadingComments[0].extendedRange, d = I.substring(h[0], h[1]), d[0] === `
` && (S = ["{"])), a.body[0].leadingComments || bt(a.range[0], a.body[0].range[0], S)), F > 0 && !a.body[F - 1].trailingComments && !a.body[F].leadingComments && bt(a.body[F - 1].range[1], a.body[F].range[0], S)), F === q - 1 && (Se |= fe), a.body[F].leadingComments && L ? Z = V.generateStatement(a.body[F], Se) : Z = Pe(V.generateStatement(a.body[F], Se)), S.push(Z), Q(ke(Z).toString()) || L && F < q - 1 && a.body[F + 1].leadingComments || S.push(T), L && F === q - 1 && (a.body[F].trailingComments || bt(a.body[F].range[1], a.range[1], S));
        }), S.push(Pe("}")), S;
      },
      BreakStatement: function(a, m) {
        return a.label ? "break " + a.label.name + this.semicolon(m) : "break" + this.semicolon(m);
      },
      ContinueStatement: function(a, m) {
        return a.label ? "continue " + a.label.name + this.semicolon(m) : "continue" + this.semicolon(m);
      },
      ClassBody: function(a, m) {
        var h = ["{", T], d = this;
        return je(function(S) {
          var V, F;
          for (V = 0, F = a.body.length; V < F; ++V)
            h.push(S), h.push(d.generateExpression(a.body[V], r.Sequence, M)), V + 1 < F && h.push(T);
        }), Q(ke(h).toString()) || h.push(T), h.push(v), h.push("}"), h;
      },
      ClassDeclaration: function(a, m) {
        var h, d;
        return h = ["class"], a.id && (h = re(h, this.generateExpression(a.id, r.Sequence, M))), a.superClass && (d = re("extends", this.generateExpression(a.superClass, r.Unary, M)), h = re(h, d)), h.push(E), h.push(this.generateStatement(a.body, ue)), h;
      },
      DirectiveStatement: function(a, m) {
        return N.raw && a.raw ? a.raw + this.semicolon(m) : ut(a.directive) + this.semicolon(m);
      },
      DoWhileStatement: function(a, m) {
        var h = re("do", this.maybeBlock(a.body, K));
        return h = this.maybeBlockSuffix(a.body, h), re(h, [
          "while" + E + "(",
          this.generateExpression(a.test, r.Sequence, M),
          ")" + this.semicolon(m)
        ]);
      },
      CatchClause: function(a, m) {
        var h, d = this;
        return je(function() {
          var S;
          a.param ? (h = [
            "catch" + E + "(",
            d.generateExpression(a.param, r.Sequence, M),
            ")"
          ], a.guard && (S = d.generateExpression(a.guard, r.Sequence, M), h.splice(2, 0, " if ", S))) : h = ["catch"];
        }), h.push(this.maybeBlock(a.body, K)), h;
      },
      DebuggerStatement: function(a, m) {
        return "debugger" + this.semicolon(m);
      },
      EmptyStatement: function(a, m) {
        return ";";
      },
      ExportDefaultDeclaration: function(a, m) {
        var h = ["export"], d;
        return d = m & fe ? ue : K, h = re(h, "default"), ee(a.declaration) ? h = re(h, this.generateStatement(a.declaration, d)) : h = re(h, this.generateExpression(a.declaration, r.Assignment, M) + this.semicolon(m)), h;
      },
      ExportNamedDeclaration: function(a, m) {
        var h = ["export"], d, S = this;
        return d = m & fe ? ue : K, a.declaration ? re(h, this.generateStatement(a.declaration, d)) : (a.specifiers && (a.specifiers.length === 0 ? h = re(h, "{" + E + "}") : a.specifiers[0].type === i.ExportBatchSpecifier ? h = re(h, this.generateExpression(a.specifiers[0], r.Sequence, M)) : (h = re(h, "{"), je(function(V) {
          var F, q;
          for (h.push(T), F = 0, q = a.specifiers.length; F < q; ++F)
            h.push(V), h.push(S.generateExpression(a.specifiers[F], r.Sequence, M)), F + 1 < q && h.push("," + T);
        }), Q(ke(h).toString()) || h.push(T), h.push(v + "}")), a.source ? h = re(h, [
          "from" + E,
          // ModuleSpecifier
          this.generateExpression(a.source, r.Sequence, M),
          this.semicolon(m)
        ]) : h.push(this.semicolon(m))), h);
      },
      ExportAllDeclaration: function(a, m) {
        return [
          "export" + E,
          "*" + E,
          "from" + E,
          // ModuleSpecifier
          this.generateExpression(a.source, r.Sequence, M),
          this.semicolon(m)
        ];
      },
      ExpressionStatement: function(a, m) {
        var h, d;
        function S(q) {
          var Z;
          return q.slice(0, 5) !== "class" ? !1 : (Z = q.charCodeAt(5), Z === 123 || f.code.isWhiteSpace(Z) || f.code.isLineTerminator(Z));
        }
        function V(q) {
          var Z;
          return q.slice(0, 8) !== "function" ? !1 : (Z = q.charCodeAt(8), Z === 40 || f.code.isWhiteSpace(Z) || Z === 42 || f.code.isLineTerminator(Z));
        }
        function F(q) {
          var Z, Se, Ue;
          if (q.slice(0, 5) !== "async" || !f.code.isWhiteSpace(q.charCodeAt(5)))
            return !1;
          for (Se = 6, Ue = q.length; Se < Ue && f.code.isWhiteSpace(q.charCodeAt(Se)); ++Se)
            ;
          return Se === Ue || q.slice(Se, Se + 8) !== "function" ? !1 : (Z = q.charCodeAt(Se + 8), Z === 40 || f.code.isWhiteSpace(Z) || Z === 42 || f.code.isLineTerminator(Z));
        }
        return h = [this.generateExpression(a.expression, r.Sequence, M)], d = ke(h).toString(), d.charCodeAt(0) === 123 || // ObjectExpression
        S(d) || V(d) || F(d) || U && m & Ce && a.expression.type === i.Literal && typeof a.expression.value == "string" ? h = ["(", h, ")" + this.semicolon(m)] : h.push(this.semicolon(m)), h;
      },
      ImportDeclaration: function(a, m) {
        var h, d, S = this;
        return a.specifiers.length === 0 ? [
          "import",
          E,
          // ModuleSpecifier
          this.generateExpression(a.source, r.Sequence, M),
          this.semicolon(m)
        ] : (h = [
          "import"
        ], d = 0, a.specifiers[d].type === i.ImportDefaultSpecifier && (h = re(h, [
          this.generateExpression(a.specifiers[d], r.Sequence, M)
        ]), ++d), a.specifiers[d] && (d !== 0 && h.push(","), a.specifiers[d].type === i.ImportNamespaceSpecifier ? h = re(h, [
          E,
          this.generateExpression(a.specifiers[d], r.Sequence, M)
        ]) : (h.push(E + "{"), a.specifiers.length - d === 1 ? (h.push(E), h.push(this.generateExpression(a.specifiers[d], r.Sequence, M)), h.push(E + "}" + E)) : (je(function(V) {
          var F, q;
          for (h.push(T), F = d, q = a.specifiers.length; F < q; ++F)
            h.push(V), h.push(S.generateExpression(a.specifiers[F], r.Sequence, M)), F + 1 < q && h.push("," + T);
        }), Q(ke(h).toString()) || h.push(T), h.push(v + "}" + E)))), h = re(h, [
          "from" + E,
          // ModuleSpecifier
          this.generateExpression(a.source, r.Sequence, M),
          this.semicolon(m)
        ]), h);
      },
      VariableDeclarator: function(a, m) {
        var h = m & J ? M : D;
        return a.init ? [
          this.generateExpression(a.id, r.Assignment, h),
          E,
          "=",
          E,
          this.generateExpression(a.init, r.Assignment, h)
        ] : this.generatePattern(a.id, r.Assignment, h);
      },
      VariableDeclaration: function(a, m) {
        var h, d, S, V, F, q = this;
        h = [a.kind], F = m & J ? K : me;
        function Z() {
          for (V = a.declarations[0], N.comment && V.leadingComments ? (h.push(`
`), h.push(Pe(q.generateStatement(V, F)))) : (h.push(ge()), h.push(q.generateStatement(V, F))), d = 1, S = a.declarations.length; d < S; ++d)
            V = a.declarations[d], N.comment && V.leadingComments ? (h.push("," + T), h.push(Pe(q.generateStatement(V, F)))) : (h.push("," + E), h.push(q.generateStatement(V, F)));
        }
        return a.declarations.length > 1 ? je(Z) : Z(), h.push(this.semicolon(m)), h;
      },
      ThrowStatement: function(a, m) {
        return [re(
          "throw",
          this.generateExpression(a.argument, r.Sequence, M)
        ), this.semicolon(m)];
      },
      TryStatement: function(a, m) {
        var h, d, S, V;
        if (h = ["try", this.maybeBlock(a.block, K)], h = this.maybeBlockSuffix(a.block, h), a.handlers)
          for (d = 0, S = a.handlers.length; d < S; ++d)
            h = re(h, this.generateStatement(a.handlers[d], K)), (a.finalizer || d + 1 !== S) && (h = this.maybeBlockSuffix(a.handlers[d].body, h));
        else {
          for (V = a.guardedHandlers || [], d = 0, S = V.length; d < S; ++d)
            h = re(h, this.generateStatement(V[d], K)), (a.finalizer || d + 1 !== S) && (h = this.maybeBlockSuffix(V[d].body, h));
          if (a.handler)
            if (Array.isArray(a.handler))
              for (d = 0, S = a.handler.length; d < S; ++d)
                h = re(h, this.generateStatement(a.handler[d], K)), (a.finalizer || d + 1 !== S) && (h = this.maybeBlockSuffix(a.handler[d].body, h));
            else
              h = re(h, this.generateStatement(a.handler, K)), a.finalizer && (h = this.maybeBlockSuffix(a.handler.body, h));
        }
        return a.finalizer && (h = re(h, ["finally", this.maybeBlock(a.finalizer, K)])), h;
      },
      SwitchStatement: function(a, m) {
        var h, d, S, V, F, q = this;
        if (je(function() {
          h = [
            "switch" + E + "(",
            q.generateExpression(a.discriminant, r.Sequence, M),
            ")" + E + "{" + T
          ];
        }), a.cases)
          for (F = K, S = 0, V = a.cases.length; S < V; ++S)
            S === V - 1 && (F |= fe), d = Pe(this.generateStatement(a.cases[S], F)), h.push(d), Q(ke(d).toString()) || h.push(T);
        return h.push(Pe("}")), h;
      },
      SwitchCase: function(a, m) {
        var h, d, S, V, F, q = this;
        return je(function() {
          for (a.test ? h = [
            re("case", q.generateExpression(a.test, r.Sequence, M)),
            ":"
          ] : h = ["default:"], S = 0, V = a.consequent.length, V && a.consequent[0].type === i.BlockStatement && (d = q.maybeBlock(a.consequent[0], K), h.push(d), S = 1), S !== V && !Q(ke(h).toString()) && h.push(T), F = K; S < V; ++S)
            S === V - 1 && m & fe && (F |= fe), d = Pe(q.generateStatement(a.consequent[S], F)), h.push(d), S + 1 !== V && !Q(ke(d).toString()) && h.push(T);
        }), h;
      },
      IfStatement: function(a, m) {
        var h, d, S, V = this;
        return je(function() {
          h = [
            "if" + E + "(",
            V.generateExpression(a.test, r.Sequence, M),
            ")"
          ];
        }), S = m & fe, d = K, S && (d |= fe), a.alternate ? (h.push(this.maybeBlock(a.consequent, K)), h = this.maybeBlockSuffix(a.consequent, h), a.alternate.type === i.IfStatement ? h = re(h, ["else ", this.generateStatement(a.alternate, d)]) : h = re(h, re("else", this.maybeBlock(a.alternate, d)))) : h.push(this.maybeBlock(a.consequent, d)), h;
      },
      ForStatement: function(a, m) {
        var h, d = this;
        return je(function() {
          h = ["for" + E + "("], a.init ? a.init.type === i.VariableDeclaration ? h.push(d.generateStatement(a.init, me)) : (h.push(d.generateExpression(a.init, r.Sequence, D)), h.push(";")) : h.push(";"), a.test && (h.push(E), h.push(d.generateExpression(a.test, r.Sequence, M))), h.push(";"), a.update && (h.push(E), h.push(d.generateExpression(a.update, r.Sequence, M))), h.push(")");
        }), h.push(this.maybeBlock(a.body, m & fe ? ue : K)), h;
      },
      ForInStatement: function(a, m) {
        return this.generateIterationForStatement("in", a, m & fe ? ue : K);
      },
      ForOfStatement: function(a, m) {
        return this.generateIterationForStatement("of", a, m & fe ? ue : K);
      },
      LabeledStatement: function(a, m) {
        return [a.label.name + ":", this.maybeBlock(a.body, m & fe ? ue : K)];
      },
      Program: function(a, m) {
        var h, d, S, V, F;
        for (V = a.body.length, h = [j && V > 0 ? `
` : ""], F = xe, S = 0; S < V; ++S)
          !j && S === V - 1 && (F |= fe), L && (S === 0 && (a.body[0].leadingComments || bt(a.range[0], a.body[S].range[0], h)), S > 0 && !a.body[S - 1].trailingComments && !a.body[S].leadingComments && bt(a.body[S - 1].range[1], a.body[S].range[0], h)), d = Pe(this.generateStatement(a.body[S], F)), h.push(d), S + 1 < V && !Q(ke(d).toString()) && (L && a.body[S + 1].leadingComments || h.push(T)), L && S === V - 1 && (a.body[S].trailingComments || bt(a.body[S].range[1], a.range[1], h));
        return h;
      },
      FunctionDeclaration: function(a, m) {
        return [
          He(a, !0),
          "function",
          Qe(a) || ge(),
          a.id ? $e(a.id) : "",
          this.generateFunctionBody(a)
        ];
      },
      ReturnStatement: function(a, m) {
        return a.argument ? [re(
          "return",
          this.generateExpression(a.argument, r.Sequence, M)
        ), this.semicolon(m)] : ["return" + this.semicolon(m)];
      },
      WhileStatement: function(a, m) {
        var h, d = this;
        return je(function() {
          h = [
            "while" + E + "(",
            d.generateExpression(a.test, r.Sequence, M),
            ")"
          ];
        }), h.push(this.maybeBlock(a.body, m & fe ? ue : K)), h;
      },
      WithStatement: function(a, m) {
        var h, d = this;
        return je(function() {
          h = [
            "with" + E + "(",
            d.generateExpression(a.object, r.Sequence, M),
            ")"
          ];
        }), h.push(this.maybeBlock(a.body, m & fe ? ue : K)), h;
      }
    }, Ke(qe.prototype, qe.Statement), qe.Expression = {
      SequenceExpression: function(a, m, h) {
        var d, S, V;
        for (r.Sequence < m && (h |= J), d = [], S = 0, V = a.expressions.length; S < V; ++S)
          d.push(this.generateExpression(a.expressions[S], r.Assignment, h)), S + 1 < V && d.push("," + E);
        return Be(d, r.Sequence, m);
      },
      AssignmentExpression: function(a, m, h) {
        return this.generateAssignment(a.left, a.right, a.operator, m, h);
      },
      ArrowFunctionExpression: function(a, m, h) {
        return Be(this.generateFunctionBody(a), r.ArrowFunction, m);
      },
      ConditionalExpression: function(a, m, h) {
        return r.Conditional < m && (h |= J), Be(
          [
            this.generateExpression(a.test, r.Coalesce, h),
            E + "?" + E,
            this.generateExpression(a.consequent, r.Assignment, h),
            E + ":" + E,
            this.generateExpression(a.alternate, r.Assignment, h)
          ],
          r.Conditional,
          m
        );
      },
      LogicalExpression: function(a, m, h) {
        return a.operator === "??" && (h |= Ve), this.BinaryExpression(a, m, h);
      },
      BinaryExpression: function(a, m, h) {
        var d, S, V, F, q, Z;
        return F = s[a.operator], S = a.operator === "**" ? r.Postfix : F, V = a.operator === "**" ? F : F + 1, F < m && (h |= J), q = this.generateExpression(a.left, S, h), Z = q.toString(), Z.charCodeAt(Z.length - 1) === 47 && f.code.isIdentifierPartES5(a.operator.charCodeAt(0)) ? d = [q, ge(), a.operator] : d = re(q, a.operator), q = this.generateExpression(a.right, V, h), a.operator === "/" && q.toString().charAt(0) === "/" || a.operator.slice(-1) === "<" && q.toString().slice(0, 3) === "!--" ? (d.push(ge()), d.push(q)) : d = re(d, q), a.operator === "in" && !(h & J) ? ["(", d, ")"] : (a.operator === "||" || a.operator === "&&") && h & Ve ? ["(", d, ")"] : Be(d, F, m);
      },
      CallExpression: function(a, m, h) {
        var d, S, V;
        for (d = [this.generateExpression(a.callee, r.Call, X)], a.optional && d.push("?."), d.push("("), S = 0, V = a.arguments.length; S < V; ++S)
          d.push(this.generateExpression(a.arguments[S], r.Assignment, M)), S + 1 < V && d.push("," + E);
        return d.push(")"), h & he ? Be(d, r.Call, m) : ["(", d, ")"];
      },
      ChainExpression: function(a, m, h) {
        r.OptionalChaining < m && (h |= he);
        var d = this.generateExpression(a.expression, r.OptionalChaining, h);
        return Be(d, r.OptionalChaining, m);
      },
      NewExpression: function(a, m, h) {
        var d, S, V, F, q;
        if (S = a.arguments.length, q = h & Te && !w && S === 0 ? le : ae, d = re(
          "new",
          this.generateExpression(a.callee, r.New, q)
        ), !(h & Te) || w || S > 0) {
          for (d.push("("), V = 0, F = S; V < F; ++V)
            d.push(this.generateExpression(a.arguments[V], r.Assignment, M)), V + 1 < F && d.push("," + E);
          d.push(")");
        }
        return Be(d, r.New, m);
      },
      MemberExpression: function(a, m, h) {
        var d, S;
        return d = [this.generateExpression(a.object, r.Call, h & he ? X : ae)], a.computed ? (a.optional && d.push("?."), d.push("["), d.push(this.generateExpression(a.property, r.Sequence, h & he ? M : le)), d.push("]")) : (!a.optional && a.object.type === i.Literal && typeof a.object.value == "number" && (S = ke(d).toString(), S.indexOf(".") < 0 && !/[eExX]/.test(S) && f.code.isDecimalDigit(S.charCodeAt(S.length - 1)) && !(S.length >= 2 && S.charCodeAt(0) === 48) && d.push(" ")), d.push(a.optional ? "?." : "."), d.push($e(a.property))), Be(d, r.Member, m);
      },
      MetaProperty: function(a, m, h) {
        var d;
        return d = [], d.push(typeof a.meta == "string" ? a.meta : $e(a.meta)), d.push("."), d.push(typeof a.property == "string" ? a.property : $e(a.property)), Be(d, r.Member, m);
      },
      UnaryExpression: function(a, m, h) {
        var d, S, V, F, q;
        return S = this.generateExpression(a.argument, r.Unary, M), E === "" ? d = re(a.operator, S) : (d = [a.operator], a.operator.length > 2 ? d = re(d, S) : (F = ke(d).toString(), q = F.charCodeAt(F.length - 1), V = S.toString().charCodeAt(0), ((q === 43 || q === 45) && q === V || f.code.isIdentifierPartES5(q) && f.code.isIdentifierPartES5(V)) && d.push(ge()), d.push(S))), Be(d, r.Unary, m);
      },
      YieldExpression: function(a, m, h) {
        var d;
        return a.delegate ? d = "yield*" : d = "yield", a.argument && (d = re(
          d,
          this.generateExpression(a.argument, r.Yield, M)
        )), Be(d, r.Yield, m);
      },
      AwaitExpression: function(a, m, h) {
        var d = re(
          a.all ? "await*" : "await",
          this.generateExpression(a.argument, r.Await, M)
        );
        return Be(d, r.Await, m);
      },
      UpdateExpression: function(a, m, h) {
        return a.prefix ? Be(
          [
            a.operator,
            this.generateExpression(a.argument, r.Unary, M)
          ],
          r.Unary,
          m
        ) : Be(
          [
            this.generateExpression(a.argument, r.Postfix, M),
            a.operator
          ],
          r.Postfix,
          m
        );
      },
      FunctionExpression: function(a, m, h) {
        var d = [
          He(a, !0),
          "function"
        ];
        return a.id ? (d.push(Qe(a) || ge()), d.push($e(a.id))) : d.push(Qe(a) || E), d.push(this.generateFunctionBody(a)), d;
      },
      ArrayPattern: function(a, m, h) {
        return this.ArrayExpression(a, m, h, !0);
      },
      ArrayExpression: function(a, m, h, d) {
        var S, V, F = this;
        return a.elements.length ? (V = d ? !1 : a.elements.length > 1, S = ["[", V ? T : ""], je(function(q) {
          var Z, Se;
          for (Z = 0, Se = a.elements.length; Z < Se; ++Z)
            a.elements[Z] ? (S.push(V ? q : ""), S.push(F.generateExpression(a.elements[Z], r.Assignment, M))) : (V && S.push(q), Z + 1 === Se && S.push(",")), Z + 1 < Se && S.push("," + (V ? T : E));
        }), V && !Q(ke(S).toString()) && S.push(T), S.push(V ? v : ""), S.push("]"), S) : "[]";
      },
      RestElement: function(a, m, h) {
        return "..." + this.generatePattern(a.argument);
      },
      ClassExpression: function(a, m, h) {
        var d, S;
        return d = ["class"], a.id && (d = re(d, this.generateExpression(a.id, r.Sequence, M))), a.superClass && (S = re("extends", this.generateExpression(a.superClass, r.Unary, M)), d = re(d, S)), d.push(E), d.push(this.generateStatement(a.body, ue)), d;
      },
      MethodDefinition: function(a, m, h) {
        var d, S;
        return a.static ? d = ["static" + E] : d = [], a.kind === "get" || a.kind === "set" ? S = [
          re(a.kind, this.generatePropertyKey(a.key, a.computed)),
          this.generateFunctionBody(a.value)
        ] : S = [
          Fe(a),
          this.generatePropertyKey(a.key, a.computed),
          this.generateFunctionBody(a.value)
        ], re(d, S);
      },
      Property: function(a, m, h) {
        return a.kind === "get" || a.kind === "set" ? [
          a.kind,
          ge(),
          this.generatePropertyKey(a.key, a.computed),
          this.generateFunctionBody(a.value)
        ] : a.shorthand ? a.value.type === "AssignmentPattern" ? this.AssignmentPattern(a.value, r.Sequence, M) : this.generatePropertyKey(a.key, a.computed) : a.method ? [
          Fe(a),
          this.generatePropertyKey(a.key, a.computed),
          this.generateFunctionBody(a.value)
        ] : [
          this.generatePropertyKey(a.key, a.computed),
          ":" + E,
          this.generateExpression(a.value, r.Assignment, M)
        ];
      },
      ObjectExpression: function(a, m, h) {
        var d, S, V, F = this;
        return a.properties.length ? (d = a.properties.length > 1, je(function() {
          V = F.generateExpression(a.properties[0], r.Sequence, M);
        }), !d && !Ye(ke(V).toString()) ? ["{", E, V, E, "}"] : (je(function(q) {
          var Z, Se;
          if (S = ["{", T, q, V], d)
            for (S.push("," + T), Z = 1, Se = a.properties.length; Z < Se; ++Z)
              S.push(q), S.push(F.generateExpression(a.properties[Z], r.Sequence, M)), Z + 1 < Se && S.push("," + T);
        }), Q(ke(S).toString()) || S.push(T), S.push(v), S.push("}"), S)) : "{}";
      },
      AssignmentPattern: function(a, m, h) {
        return this.generateAssignment(a.left, a.right, "=", m, h);
      },
      ObjectPattern: function(a, m, h) {
        var d, S, V, F, q, Z = this;
        if (!a.properties.length)
          return "{}";
        if (F = !1, a.properties.length === 1)
          q = a.properties[0], q.type === i.Property && q.value.type !== i.Identifier && (F = !0);
        else
          for (S = 0, V = a.properties.length; S < V; ++S)
            if (q = a.properties[S], q.type === i.Property && !q.shorthand) {
              F = !0;
              break;
            }
        return d = ["{", F ? T : ""], je(function(Se) {
          var Ue, ht;
          for (Ue = 0, ht = a.properties.length; Ue < ht; ++Ue)
            d.push(F ? Se : ""), d.push(Z.generateExpression(a.properties[Ue], r.Sequence, M)), Ue + 1 < ht && d.push("," + (F ? T : E));
        }), F && !Q(ke(d).toString()) && d.push(T), d.push(F ? v : ""), d.push("}"), d;
      },
      ThisExpression: function(a, m, h) {
        return "this";
      },
      Super: function(a, m, h) {
        return "super";
      },
      Identifier: function(a, m, h) {
        return $e(a);
      },
      ImportDefaultSpecifier: function(a, m, h) {
        return $e(a.id || a.local);
      },
      ImportNamespaceSpecifier: function(a, m, h) {
        var d = ["*"], S = a.id || a.local;
        return S && d.push(E + "as" + ge() + $e(S)), d;
      },
      ImportSpecifier: function(a, m, h) {
        var d = a.imported, S = [d.name], V = a.local;
        return V && V.name !== d.name && S.push(ge() + "as" + ge() + $e(V)), S;
      },
      ExportSpecifier: function(a, m, h) {
        var d = a.local, S = [d.name], V = a.exported;
        return V && V.name !== d.name && S.push(ge() + "as" + ge() + $e(V)), S;
      },
      Literal: function(a, m, h) {
        var d;
        if (a.hasOwnProperty("raw") && g && N.raw)
          try {
            if (d = g(a.raw).body[0].expression, d.type === i.Literal && d.value === a.value)
              return a.raw;
          } catch {
          }
        return a.regex ? "/" + a.regex.pattern + "/" + a.regex.flags : typeof a.value == "bigint" ? a.value.toString() + "n" : a.bigint ? a.bigint + "n" : a.value === null ? "null" : typeof a.value == "string" ? ci(a.value) : typeof a.value == "number" ? ct(a.value) : typeof a.value == "boolean" ? a.value ? "true" : "false" : Wt(a.value);
      },
      GeneratorExpression: function(a, m, h) {
        return this.ComprehensionExpression(a, m, h);
      },
      ComprehensionExpression: function(a, m, h) {
        var d, S, V, F, q = this;
        return d = a.type === i.GeneratorExpression ? ["("] : ["["], N.moz.comprehensionExpressionStartsWithAssignment && (F = this.generateExpression(a.body, r.Assignment, M), d.push(F)), a.blocks && je(function() {
          for (S = 0, V = a.blocks.length; S < V; ++S)
            F = q.generateExpression(a.blocks[S], r.Sequence, M), S > 0 || N.moz.comprehensionExpressionStartsWithAssignment ? d = re(d, F) : d.push(F);
        }), a.filter && (d = re(d, "if" + E), F = this.generateExpression(a.filter, r.Sequence, M), d = re(d, ["(", F, ")"])), N.moz.comprehensionExpressionStartsWithAssignment || (F = this.generateExpression(a.body, r.Assignment, M), d = re(d, F)), d.push(a.type === i.GeneratorExpression ? ")" : "]"), d;
      },
      ComprehensionBlock: function(a, m, h) {
        var d;
        return a.left.type === i.VariableDeclaration ? d = [
          a.left.kind,
          ge(),
          this.generateStatement(a.left.declarations[0], me)
        ] : d = this.generateExpression(a.left, r.Call, M), d = re(d, a.of ? "of" : "in"), d = re(d, this.generateExpression(a.right, r.Sequence, M)), ["for" + E + "(", d, ")"];
      },
      SpreadElement: function(a, m, h) {
        return [
          "...",
          this.generateExpression(a.argument, r.Assignment, M)
        ];
      },
      TaggedTemplateExpression: function(a, m, h) {
        var d = X;
        h & he || (d = ae);
        var S = [
          this.generateExpression(a.tag, r.Call, d),
          this.generateExpression(a.quasi, r.Primary, oe)
        ];
        return Be(S, r.TaggedTemplate, m);
      },
      TemplateElement: function(a, m, h) {
        return a.value.raw;
      },
      TemplateLiteral: function(a, m, h) {
        var d, S, V;
        for (d = ["`"], S = 0, V = a.quasis.length; S < V; ++S)
          d.push(this.generateExpression(a.quasis[S], r.Primary, M)), S + 1 < V && (d.push("${" + E), d.push(this.generateExpression(a.expressions[S], r.Sequence, M)), d.push(E + "}"));
        return d.push("`"), d;
      },
      ModuleSpecifier: function(a, m, h) {
        return this.Literal(a, m, h);
      },
      ImportExpression: function(a, m, h) {
        return Be([
          "import(",
          this.generateExpression(a.source, r.Assignment, M),
          ")"
        ], r.Call, m);
      }
    }, Ke(qe.prototype, qe.Expression), qe.prototype.generateExpression = function(a, m, h) {
      var d, S;
      return S = a.type || i.Property, N.verbatim && a.hasOwnProperty(N.verbatim) ? fi(a, m) : (d = this[S](a, m, h), N.comment && (d = hi(a, d)), ke(d, a));
    }, qe.prototype.generateStatement = function(a, m) {
      var h, d;
      return h = this[a.type](a, m), N.comment && (h = hi(a, h)), d = ke(h).toString(), a.type === i.Program && !j && T === "" && d.charAt(d.length - 1) === `
` && (h = u ? ke(h).replaceRight(/\s+$/, "") : d.replace(/\s+$/, "")), ke(h, a);
    };
    function St(a) {
      var m;
      if (m = new qe(), ee(a))
        return m.generateStatement(a, K);
      if (ne(a))
        return m.generateExpression(a, r.Sequence, M);
      throw new Error("Unknown node type: " + a.type);
    }
    function ce(a, m) {
      var h = De(), d, S;
      return m != null ? (typeof m.indent == "string" && (h.format.indent.style = m.indent), typeof m.base == "number" && (h.format.indent.base = m.base), m = tt(h, m), x = m.format.indent.style, typeof m.base == "string" ? v = m.base : v = G(x, m.format.indent.base)) : (m = h, x = m.format.indent.style, v = G(x, m.format.indent.base)), _ = m.format.json, b = m.format.renumber, A = _ ? !1 : m.format.hexadecimal, P = _ ? "double" : m.format.quotes, k = m.format.escapeless, T = m.format.newline, E = m.format.space, m.format.compact && (T = E = x = v = ""), w = m.format.parentheses, B = m.format.semicolons, j = m.format.safeConcatenation, U = m.directive, g = _ ? null : m.parse, u = m.sourceMap, I = m.sourceCode, L = m.format.preserveBlankLines && I !== null, N = m, u && (e.browser ? o = Bt.sourceMap.SourceNode : o = Ma().SourceNode), d = St(a), u ? (S = d.toStringWithSourceMap({
        file: m.file,
        sourceRoot: m.sourceMapRoot
      }), m.sourceContent && S.map.setSourceContent(
        m.sourceMap,
        m.sourceContent
      ), m.sourceMapWithCode ? S : S.map.toString()) : (S = { code: d.toString(), map: null }, m.sourceMapWithCode ? S : S.code);
    }
    Y = {
      indent: {
        style: "",
        base: 0
      },
      renumber: !0,
      hexadecimal: !0,
      quotes: "auto",
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1
    }, H = De().format, e.version = Za.version, e.generate = ce, e.attachComments = l.attachComments, e.Precedence = tt({}, r), e.browser = !1, e.FORMAT_MINIFY = Y, e.FORMAT_DEFAULTS = H;
  })();
})(jn);
var Xi = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, Ji = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", eo = {
  5: Ji,
  "5module": Ji + " export import",
  6: Ji + " const class extends export import super"
}, to = /^in(stanceof)?$/, hr = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", zn = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿", io = new RegExp("[" + hr + "]"), ro = new RegExp("[" + hr + zn + "]");
hr = zn = null;
var $n = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], no = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function er(e, i) {
  for (var r = 65536, s = 0; s < i.length; s += 2) {
    if (r += i[s], r > e)
      return !1;
    if (r += i[s + 1], r >= e)
      return !0;
  }
}
function Ct(e, i) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && io.test(String.fromCharCode(e)) : i === !1 ? !1 : er(e, $n);
}
function Dt(e, i) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && ro.test(String.fromCharCode(e)) : i === !1 ? !1 : er(e, $n) || er(e, no);
}
var Ie = function(i, r) {
  r === void 0 && (r = {}), this.label = i, this.keyword = r.keyword, this.beforeExpr = !!r.beforeExpr, this.startsExpr = !!r.startsExpr, this.isLoop = !!r.isLoop, this.isAssign = !!r.isAssign, this.prefix = !!r.prefix, this.postfix = !!r.postfix, this.binop = r.binop || null, this.updateContext = null;
};
function nt(e, i) {
  return new Ie(e, { beforeExpr: !0, binop: i });
}
var st = { beforeExpr: !0 }, et = { startsExpr: !0 }, fr = {};
function Ae(e, i) {
  return i === void 0 && (i = {}), i.keyword = e, fr[e] = new Ie(e, i);
}
var y = {
  num: new Ie("num", et),
  regexp: new Ie("regexp", et),
  string: new Ie("string", et),
  name: new Ie("name", et),
  eof: new Ie("eof"),
  // Punctuation token types.
  bracketL: new Ie("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new Ie("]"),
  braceL: new Ie("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new Ie("}"),
  parenL: new Ie("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new Ie(")"),
  comma: new Ie(",", st),
  semi: new Ie(";", st),
  colon: new Ie(":", st),
  dot: new Ie("."),
  question: new Ie("?", st),
  questionDot: new Ie("?."),
  arrow: new Ie("=>", st),
  template: new Ie("template"),
  invalidTemplate: new Ie("invalidTemplate"),
  ellipsis: new Ie("...", st),
  backQuote: new Ie("`", et),
  dollarBraceL: new Ie("${", { beforeExpr: !0, startsExpr: !0 }),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new Ie("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new Ie("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new Ie("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new Ie("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: nt("||", 1),
  logicalAND: nt("&&", 2),
  bitwiseOR: nt("|", 3),
  bitwiseXOR: nt("^", 4),
  bitwiseAND: nt("&", 5),
  equality: nt("==/!=/===/!==", 6),
  relational: nt("</>/<=/>=", 7),
  bitShift: nt("<</>>/>>>", 8),
  plusMin: new Ie("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: nt("%", 10),
  star: nt("*", 10),
  slash: nt("/", 10),
  starstar: new Ie("**", { beforeExpr: !0 }),
  coalesce: nt("??", 1),
  // Keyword token types.
  _break: Ae("break"),
  _case: Ae("case", st),
  _catch: Ae("catch"),
  _continue: Ae("continue"),
  _debugger: Ae("debugger"),
  _default: Ae("default", st),
  _do: Ae("do", { isLoop: !0, beforeExpr: !0 }),
  _else: Ae("else", st),
  _finally: Ae("finally"),
  _for: Ae("for", { isLoop: !0 }),
  _function: Ae("function", et),
  _if: Ae("if"),
  _return: Ae("return", st),
  _switch: Ae("switch"),
  _throw: Ae("throw", st),
  _try: Ae("try"),
  _var: Ae("var"),
  _const: Ae("const"),
  _while: Ae("while", { isLoop: !0 }),
  _with: Ae("with"),
  _new: Ae("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: Ae("this", et),
  _super: Ae("super", et),
  _class: Ae("class", et),
  _extends: Ae("extends", st),
  _export: Ae("export"),
  _import: Ae("import", et),
  _null: Ae("null", et),
  _true: Ae("true", et),
  _false: Ae("false", et),
  _in: Ae("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: Ae("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: Ae("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: Ae("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: Ae("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, ot = /\r\n?|\n|\u2028|\u2029/, Zt = new RegExp(ot.source, "g");
function ai(e, i) {
  return e === 10 || e === 13 || !i && (e === 8232 || e === 8233);
}
var Hn = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, at = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Yn = Object.prototype, so = Yn.hasOwnProperty, ao = Yn.toString;
function Pi(e, i) {
  return so.call(e, i);
}
var gn = Array.isArray || function(e) {
  return ao.call(e) === "[object Array]";
};
function kt(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
var ei = function(i, r) {
  this.line = i, this.column = r;
};
ei.prototype.offset = function(i) {
  return new ei(this.line, this.column + i);
};
var Ii = function(i, r, s) {
  this.start = r, this.end = s, i.sourceFile !== null && (this.source = i.sourceFile);
};
function Qn(e, i) {
  for (var r = 1, s = 0; ; ) {
    Zt.lastIndex = s;
    var o = Zt.exec(e);
    if (o && o.index < i)
      ++r, s = o.index + o[0].length;
    else
      return new ei(r, i - s);
  }
}
var tr = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (2015), 7 (2016), 8 (2017), 9 (2018), or 10
  // (2019). This influences support for strict mode, the set of
  // reserved words, and support for new syntax features. The default
  // is 10.
  ecmaVersion: 10,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called
  // when a semicolon is automatically inserted. It will be passed
  // the position of the comma as an offset, and if `locations` is
  // enabled, it is given the location as a `{line, column}` object
  // as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: !1,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: !1,
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: !1,
  // When enabled, hashbang directive in the beginning of file
  // is allowed and treated as a line comment.
  allowHashBang: !1,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: !1,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: !1,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: !1
};
function oo(e) {
  var i = {};
  for (var r in tr)
    i[r] = e && Pi(e, r) ? e[r] : tr[r];
  if (i.ecmaVersion >= 2015 && (i.ecmaVersion -= 2009), i.allowReserved == null && (i.allowReserved = i.ecmaVersion < 5), gn(i.onToken)) {
    var s = i.onToken;
    i.onToken = function(o) {
      return s.push(o);
    };
  }
  return gn(i.onComment) && (i.onComment = uo(i, i.onComment)), i;
}
function uo(e, i) {
  return function(r, s, o, l, f, v) {
    var x = {
      type: r ? "Block" : "Line",
      value: s,
      start: o,
      end: l
    };
    e.locations && (x.loc = new Ii(this, f, v)), e.ranges && (x.range = [o, l]), i.push(x);
  };
}
var ti = 1, oi = 2, pr = ti | oi, Xn = 4, Jn = 8, Kn = 16, Zn = 32, es = 64, ts = 128;
function dr(e, i) {
  return oi | (e ? Xn : 0) | (i ? Jn : 0);
}
var vn = 0, mr = 1, vt = 2, is = 3, rs = 4, ns = 5, Ge = function(i, r, s) {
  this.options = i = oo(i), this.sourceFile = i.sourceFile, this.keywords = kt(eo[i.ecmaVersion >= 6 ? 6 : i.sourceType === "module" ? "5module" : 5]);
  var o = "";
  if (i.allowReserved !== !0) {
    for (var l = i.ecmaVersion; !(o = Xi[l]); l--)
      ;
    i.sourceType === "module" && (o += " await");
  }
  this.reservedWords = kt(o);
  var f = (o ? o + " " : "") + Xi.strict;
  this.reservedWordsStrict = kt(f), this.reservedWordsStrictBind = kt(f + " " + Xi.strictBind), this.input = String(r), this.containsEsc = !1, s ? (this.pos = s, this.lineStart = this.input.lastIndexOf(`
`, s - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(ot).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = y.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = i.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = {}, this.pos === 0 && i.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(ti), this.regexpState = null;
}, It = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 } };
Ge.prototype.parse = function() {
  var i = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(i);
};
It.inFunction.get = function() {
  return (this.currentVarScope().flags & oi) > 0;
};
It.inGenerator.get = function() {
  return (this.currentVarScope().flags & Jn) > 0;
};
It.inAsync.get = function() {
  return (this.currentVarScope().flags & Xn) > 0;
};
It.allowSuper.get = function() {
  return (this.currentThisScope().flags & es) > 0;
};
It.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & ts) > 0;
};
It.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Ge.prototype.inNonArrowFunction = function() {
  return (this.currentThisScope().flags & oi) > 0;
};
Ge.extend = function() {
  for (var i = [], r = arguments.length; r--; )
    i[r] = arguments[r];
  for (var s = this, o = 0; o < i.length; o++)
    s = i[o](s);
  return s;
};
Ge.parse = function(i, r) {
  return new this(r, i).parse();
};
Ge.parseExpressionAt = function(i, r, s) {
  var o = new this(s, i, r);
  return o.nextToken(), o.parseExpression();
};
Ge.tokenizer = function(i, r) {
  return new this(r, i);
};
Object.defineProperties(Ge.prototype, It);
var Je = Ge.prototype, lo = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
Je.strictDirective = function(e) {
  for (; ; ) {
    at.lastIndex = e, e += at.exec(this.input)[0].length;
    var i = lo.exec(this.input.slice(e));
    if (!i)
      return !1;
    if ((i[1] || i[2]) === "use strict") {
      at.lastIndex = e + i[0].length;
      var r = at.exec(this.input), s = r.index + r[0].length, o = this.input.charAt(s);
      return o === ";" || o === "}" || ot.test(r[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(o) || o === "!" && this.input.charAt(s + 1) === "=");
    }
    e += i[0].length, at.lastIndex = e, e += at.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
Je.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
Je.isContextual = function(e) {
  return this.type === y.name && this.value === e && !this.containsEsc;
};
Je.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
Je.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
Je.canInsertSemicolon = function() {
  return this.type === y.eof || this.type === y.braceR || ot.test(this.input.slice(this.lastTokEnd, this.start));
};
Je.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
Je.semicolon = function() {
  !this.eat(y.semi) && !this.insertSemicolon() && this.unexpected();
};
Je.afterTrailingComma = function(e, i) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), i || this.next(), !0;
};
Je.expect = function(e) {
  this.eat(e) || this.unexpected();
};
Je.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
function Ti() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}
Je.checkPatternErrors = function(e, i) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var r = i ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, "Parenthesized pattern");
  }
};
Je.checkExpressionErrors = function(e, i) {
  if (!e)
    return !1;
  var r = e.shorthandAssign, s = e.doubleProto;
  if (!i)
    return r >= 0 || s >= 0;
  r >= 0 && this.raise(r, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property");
};
Je.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
Je.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var de = Ge.prototype;
de.parseTopLevel = function(e) {
  var i = {};
  for (e.body || (e.body = []); this.type !== y.eof; ) {
    var r = this.parseStatement(null, !0, i);
    e.body.push(r);
  }
  if (this.inModule)
    for (var s = 0, o = Object.keys(this.undefinedExports); s < o.length; s += 1) {
      var l = o[s];
      this.raiseRecoverable(this.undefinedExports[l].start, "Export '" + l + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var gr = { kind: "loop" }, co = { kind: "switch" };
de.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  at.lastIndex = this.pos;
  var i = at.exec(this.input), r = this.pos + i[0].length, s = this.input.charCodeAt(r);
  if (s === 91)
    return !0;
  if (e)
    return !1;
  if (s === 123)
    return !0;
  if (Ct(s, !0)) {
    for (var o = r + 1; Dt(this.input.charCodeAt(o), !0); )
      ++o;
    var l = this.input.slice(r, o);
    if (!to.test(l))
      return !0;
  }
  return !1;
};
de.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  at.lastIndex = this.pos;
  var e = at.exec(this.input), i = this.pos + e[0].length;
  return !ot.test(this.input.slice(this.pos, i)) && this.input.slice(i, i + 8) === "function" && (i + 8 === this.input.length || !Dt(this.input.charAt(i + 8)));
};
de.parseStatement = function(e, i, r) {
  var s = this.type, o = this.startNode(), l;
  switch (this.isLet(e) && (s = y._var, l = "let"), s) {
    case y._break:
    case y._continue:
      return this.parseBreakContinueStatement(o, s.keyword);
    case y._debugger:
      return this.parseDebuggerStatement(o);
    case y._do:
      return this.parseDoStatement(o);
    case y._for:
      return this.parseForStatement(o);
    case y._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(o, !1, !e);
    case y._class:
      return e && this.unexpected(), this.parseClass(o, !0);
    case y._if:
      return this.parseIfStatement(o);
    case y._return:
      return this.parseReturnStatement(o);
    case y._switch:
      return this.parseSwitchStatement(o);
    case y._throw:
      return this.parseThrowStatement(o);
    case y._try:
      return this.parseTryStatement(o);
    case y._const:
    case y._var:
      return l = l || this.value, e && l !== "var" && this.unexpected(), this.parseVarStatement(o, l);
    case y._while:
      return this.parseWhileStatement(o);
    case y._with:
      return this.parseWithStatement(o);
    case y.braceL:
      return this.parseBlock(!0, o);
    case y.semi:
      return this.parseEmptyStatement(o);
    case y._export:
    case y._import:
      if (this.options.ecmaVersion > 10 && s === y._import) {
        at.lastIndex = this.pos;
        var f = at.exec(this.input), v = this.pos + f[0].length, x = this.input.charCodeAt(v);
        if (x === 40 || x === 46)
          return this.parseExpressionStatement(o, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (i || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), s === y._import ? this.parseImport(o) : this.parseExport(o, r);
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(o, !0, !e);
      var _ = this.value, b = this.parseExpression();
      return s === y.name && b.type === "Identifier" && this.eat(y.colon) ? this.parseLabeledStatement(o, _, b, e) : this.parseExpressionStatement(o, b);
  }
};
de.parseBreakContinueStatement = function(e, i) {
  var r = i === "break";
  this.next(), this.eat(y.semi) || this.insertSemicolon() ? e.label = null : this.type !== y.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var s = 0; s < this.labels.length; ++s) {
    var o = this.labels[s];
    if ((e.label == null || o.name === e.label.name) && (o.kind != null && (r || o.kind === "loop") || e.label && r))
      break;
  }
  return s === this.labels.length && this.raise(e.start, "Unsyntactic " + i), this.finishNode(e, r ? "BreakStatement" : "ContinueStatement");
};
de.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
de.parseDoStatement = function(e) {
  return this.next(), this.labels.push(gr), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(y._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(y.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
de.parseForStatement = function(e) {
  this.next();
  var i = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(gr), this.enterScope(0), this.expect(y.parenL), this.type === y.semi)
    return i > -1 && this.unexpected(i), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === y._var || this.type === y._const || r) {
    var s = this.startNode(), o = r ? "let" : this.value;
    return this.next(), this.parseVar(s, !0, o), this.finishNode(s, "VariableDeclaration"), (this.type === y._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && s.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === y._in ? i > -1 && this.unexpected(i) : e.await = i > -1), this.parseForIn(e, s)) : (i > -1 && this.unexpected(i), this.parseFor(e, s));
  }
  var l = new Ti(), f = this.parseExpression(!0, l);
  return this.type === y._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === y._in ? i > -1 && this.unexpected(i) : e.await = i > -1), this.toAssignable(f, !1, l), this.checkLVal(f), this.parseForIn(e, f)) : (this.checkExpressionErrors(l, !0), i > -1 && this.unexpected(i), this.parseFor(e, f));
};
de.parseFunctionStatement = function(e, i, r) {
  return this.next(), this.parseFunction(e, Jt | (r ? 0 : ir), !1, i);
};
de.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(y._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
de.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(y.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
de.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(y.braceL), this.labels.push(co), this.enterScope(0);
  for (var i, r = !1; this.type !== y.braceR; )
    if (this.type === y._case || this.type === y._default) {
      var s = this.type === y._case;
      i && this.finishNode(i, "SwitchCase"), e.cases.push(i = this.startNode()), i.consequent = [], this.next(), s ? i.test = this.parseExpression() : (r && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), r = !0, i.test = null), this.expect(y.colon);
    } else
      i || this.unexpected(), i.consequent.push(this.parseStatement(null));
  return this.exitScope(), i && this.finishNode(i, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
de.parseThrowStatement = function(e) {
  return this.next(), ot.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var ho = [];
de.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === y._catch) {
    var i = this.startNode();
    if (this.next(), this.eat(y.parenL)) {
      i.param = this.parseBindingAtom();
      var r = i.param.type === "Identifier";
      this.enterScope(r ? Zn : 0), this.checkLVal(i.param, r ? rs : vt), this.expect(y.parenR);
    } else
      this.options.ecmaVersion < 10 && this.unexpected(), i.param = null, this.enterScope(0);
    i.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(i, "CatchClause");
  }
  return e.finalizer = this.eat(y._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
de.parseVarStatement = function(e, i) {
  return this.next(), this.parseVar(e, !1, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
de.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(gr), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
de.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
de.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
de.parseLabeledStatement = function(e, i, r, s) {
  for (var o = 0, l = this.labels; o < l.length; o += 1) {
    var f = l[o];
    f.name === i && this.raise(r.start, "Label '" + i + "' is already declared");
  }
  for (var v = this.type.isLoop ? "loop" : this.type === y._switch ? "switch" : null, x = this.labels.length - 1; x >= 0; x--) {
    var _ = this.labels[x];
    if (_.statementStart === e.start)
      _.statementStart = this.start, _.kind = v;
    else
      break;
  }
  return this.labels.push({ name: i, kind: v, statementStart: this.start }), e.body = this.parseStatement(s ? s.indexOf("label") === -1 ? s + "label" : s : "label"), this.labels.pop(), e.label = r, this.finishNode(e, "LabeledStatement");
};
de.parseExpressionStatement = function(e, i) {
  return e.expression = i, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
de.parseBlock = function(e, i, r) {
  for (e === void 0 && (e = !0), i === void 0 && (i = this.startNode()), i.body = [], this.expect(y.braceL), e && this.enterScope(0); this.type !== y.braceR; ) {
    var s = this.parseStatement(null);
    i.body.push(s);
  }
  return r && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(i, "BlockStatement");
};
de.parseFor = function(e, i) {
  return e.init = i, this.expect(y.semi), e.test = this.type === y.semi ? null : this.parseExpression(), this.expect(y.semi), e.update = this.type === y.parenR ? null : this.parseExpression(), this.expect(y.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
de.parseForIn = function(e, i) {
  var r = this.type === y._in;
  return this.next(), i.type === "VariableDeclaration" && i.declarations[0].init != null && (!r || this.options.ecmaVersion < 8 || this.strict || i.kind !== "var" || i.declarations[0].id.type !== "Identifier") ? this.raise(
    i.start,
    (r ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ) : i.type === "AssignmentPattern" && this.raise(i.start, "Invalid left-hand side in for-loop"), e.left = i, e.right = r ? this.parseExpression() : this.parseMaybeAssign(), this.expect(y.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, r ? "ForInStatement" : "ForOfStatement");
};
de.parseVar = function(e, i, r) {
  for (e.declarations = [], e.kind = r; ; ) {
    var s = this.startNode();
    if (this.parseVarId(s, r), this.eat(y.eq) ? s.init = this.parseMaybeAssign(i) : r === "const" && !(this.type === y._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : s.id.type !== "Identifier" && !(i && (this.type === y._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : s.init = null, e.declarations.push(this.finishNode(s, "VariableDeclarator")), !this.eat(y.comma))
      break;
  }
  return e;
};
de.parseVarId = function(e, i) {
  e.id = this.parseBindingAtom(), this.checkLVal(e.id, i === "var" ? mr : vt, !1);
};
var Jt = 1, ir = 2, ss = 4;
de.parseFunction = function(e, i, r, s) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === y.star && i & ir && this.unexpected(), e.generator = this.eat(y.star)), this.options.ecmaVersion >= 8 && (e.async = !!s), i & Jt && (e.id = i & ss && this.type !== y.name ? null : this.parseIdent(), e.id && !(i & ir) && this.checkLVal(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? mr : vt : is));
  var o = this.yieldPos, l = this.awaitPos, f = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(dr(e.async, e.generator)), i & Jt || (e.id = this.type === y.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, r, !1), this.yieldPos = o, this.awaitPos = l, this.awaitIdentPos = f, this.finishNode(e, i & Jt ? "FunctionDeclaration" : "FunctionExpression");
};
de.parseFunctionParams = function(e) {
  this.expect(y.parenL), e.params = this.parseBindingList(y.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
de.parseClass = function(e, i) {
  this.next();
  var r = this.strict;
  this.strict = !0, this.parseClassId(e, i), this.parseClassSuper(e);
  var s = this.startNode(), o = !1;
  for (s.body = [], this.expect(y.braceL); this.type !== y.braceR; ) {
    var l = this.parseClassElement(e.superClass !== null);
    l && (s.body.push(l), l.type === "MethodDefinition" && l.kind === "constructor" && (o && this.raise(l.start, "Duplicate constructor in the same class"), o = !0));
  }
  return this.strict = r, this.next(), e.body = this.finishNode(s, "ClassBody"), this.finishNode(e, i ? "ClassDeclaration" : "ClassExpression");
};
de.parseClassElement = function(e) {
  var i = this;
  if (this.eat(y.semi))
    return null;
  var r = this.startNode(), s = function(x, _) {
    _ === void 0 && (_ = !1);
    var b = i.start, A = i.startLoc;
    return i.eatContextual(x) ? i.type !== y.parenL && (!_ || !i.canInsertSemicolon()) ? !0 : (r.key && i.unexpected(), r.computed = !1, r.key = i.startNodeAt(b, A), r.key.name = x, i.finishNode(r.key, "Identifier"), !1) : !1;
  };
  r.kind = "method", r.static = s("static");
  var o = this.eat(y.star), l = !1;
  o || (this.options.ecmaVersion >= 8 && s("async", !0) ? (l = !0, o = this.options.ecmaVersion >= 9 && this.eat(y.star)) : s("get") ? r.kind = "get" : s("set") && (r.kind = "set")), r.key || this.parsePropertyName(r);
  var f = r.key, v = !1;
  return !r.computed && !r.static && (f.type === "Identifier" && f.name === "constructor" || f.type === "Literal" && f.value === "constructor") ? (r.kind !== "method" && this.raise(f.start, "Constructor can't have get/set modifier"), o && this.raise(f.start, "Constructor can't be a generator"), l && this.raise(f.start, "Constructor can't be an async method"), r.kind = "constructor", v = e) : r.static && f.type === "Identifier" && f.name === "prototype" && this.raise(f.start, "Classes may not have a static property named prototype"), this.parseClassMethod(r, o, l, v), r.kind === "get" && r.value.params.length !== 0 && this.raiseRecoverable(r.value.start, "getter should have no params"), r.kind === "set" && r.value.params.length !== 1 && this.raiseRecoverable(r.value.start, "setter should have exactly one param"), r.kind === "set" && r.value.params[0].type === "RestElement" && this.raiseRecoverable(r.value.params[0].start, "Setter cannot use rest params"), r;
};
de.parseClassMethod = function(e, i, r, s) {
  return e.value = this.parseMethod(i, r, s), this.finishNode(e, "MethodDefinition");
};
de.parseClassId = function(e, i) {
  this.type === y.name ? (e.id = this.parseIdent(), i && this.checkLVal(e.id, vt, !1)) : (i === !0 && this.unexpected(), e.id = null);
};
de.parseClassSuper = function(e) {
  e.superClass = this.eat(y._extends) ? this.parseExprSubscripts() : null;
};
de.parseExport = function(e, i) {
  if (this.next(), this.eat(y.star))
    return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseIdent(!0), this.checkExport(i, e.exported.name, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== y.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
  if (this.eat(y._default)) {
    this.checkExport(i, "default", this.lastTokStart);
    var r;
    if (this.type === y._function || (r = this.isAsyncFunction())) {
      var s = this.startNode();
      this.next(), r && this.next(), e.declaration = this.parseFunction(s, Jt | ss, !1, r);
    } else if (this.type === y._class) {
      var o = this.startNode();
      e.declaration = this.parseClass(o, "nullableID");
    } else
      e.declaration = this.parseMaybeAssign(), this.semicolon();
    return this.finishNode(e, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement())
    e.declaration = this.parseStatement(null), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(i, e.declaration.declarations) : this.checkExport(i, e.declaration.id.name, e.declaration.id.start), e.specifiers = [], e.source = null;
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(i), this.eatContextual("from"))
      this.type !== y.string && this.unexpected(), e.source = this.parseExprAtom();
    else {
      for (var l = 0, f = e.specifiers; l < f.length; l += 1) {
        var v = f[l];
        this.checkUnreserved(v.local), this.checkLocalExport(v.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
de.checkExport = function(e, i, r) {
  e && (Pi(e, i) && this.raiseRecoverable(r, "Duplicate export '" + i + "'"), e[i] = !0);
};
de.checkPatternExport = function(e, i) {
  var r = i.type;
  if (r === "Identifier")
    this.checkExport(e, i.name, i.start);
  else if (r === "ObjectPattern")
    for (var s = 0, o = i.properties; s < o.length; s += 1) {
      var l = o[s];
      this.checkPatternExport(e, l);
    }
  else if (r === "ArrayPattern")
    for (var f = 0, v = i.elements; f < v.length; f += 1) {
      var x = v[f];
      x && this.checkPatternExport(e, x);
    }
  else
    r === "Property" ? this.checkPatternExport(e, i.value) : r === "AssignmentPattern" ? this.checkPatternExport(e, i.left) : r === "RestElement" ? this.checkPatternExport(e, i.argument) : r === "ParenthesizedExpression" && this.checkPatternExport(e, i.expression);
};
de.checkVariableExport = function(e, i) {
  if (e)
    for (var r = 0, s = i; r < s.length; r += 1) {
      var o = s[r];
      this.checkPatternExport(e, o.id);
    }
};
de.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
de.parseExportSpecifiers = function(e) {
  var i = [], r = !0;
  for (this.expect(y.braceL); !this.eat(y.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(y.comma), this.afterTrailingComma(y.braceR))
      break;
    var s = this.startNode();
    s.local = this.parseIdent(!0), s.exported = this.eatContextual("as") ? this.parseIdent(!0) : s.local, this.checkExport(e, s.exported.name, s.exported.start), i.push(this.finishNode(s, "ExportSpecifier"));
  }
  return i;
};
de.parseImport = function(e) {
  return this.next(), this.type === y.string ? (e.specifiers = ho, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === y.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
de.parseImportSpecifiers = function() {
  var e = [], i = !0;
  if (this.type === y.name) {
    var r = this.startNode();
    if (r.local = this.parseIdent(), this.checkLVal(r.local, vt), e.push(this.finishNode(r, "ImportDefaultSpecifier")), !this.eat(y.comma))
      return e;
  }
  if (this.type === y.star) {
    var s = this.startNode();
    return this.next(), this.expectContextual("as"), s.local = this.parseIdent(), this.checkLVal(s.local, vt), e.push(this.finishNode(s, "ImportNamespaceSpecifier")), e;
  }
  for (this.expect(y.braceL); !this.eat(y.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(y.comma), this.afterTrailingComma(y.braceR))
      break;
    var o = this.startNode();
    o.imported = this.parseIdent(!0), this.eatContextual("as") ? o.local = this.parseIdent() : (this.checkUnreserved(o.imported), o.local = o.imported), this.checkLVal(o.local, vt), e.push(this.finishNode(o, "ImportSpecifier"));
  }
  return e;
};
de.adaptDirectivePrologue = function(e) {
  for (var i = 0; i < e.length && this.isDirectiveCandidate(e[i]); ++i)
    e[i].directive = e[i].expression.raw.slice(1, -1);
};
de.isDirectiveCandidate = function(e) {
  return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && // Reject parenthesized strings.
  (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var xt = Ge.prototype;
xt.toAssignable = function(e, i, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern", r && this.checkPatternErrors(r, !0);
        for (var s = 0, o = e.properties; s < o.length; s += 1) {
          var l = o[s];
          this.toAssignable(l, i), l.type === "RestElement" && (l.argument.type === "ArrayPattern" || l.argument.type === "ObjectPattern") && this.raise(l.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, i);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern", r && this.checkPatternErrors(r, !0), this.toAssignableList(e.elements, i);
        break;
      case "SpreadElement":
        e.type = "RestElement", this.toAssignable(e.argument, i), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, i);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, i, r);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!i)
          break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else
    r && this.checkPatternErrors(r, !0);
  return e;
};
xt.toAssignableList = function(e, i) {
  for (var r = e.length, s = 0; s < r; s++) {
    var o = e[s];
    o && this.toAssignable(o, i);
  }
  if (r) {
    var l = e[r - 1];
    this.options.ecmaVersion === 6 && i && l && l.type === "RestElement" && l.argument.type !== "Identifier" && this.unexpected(l.argument.start);
  }
  return e;
};
xt.parseSpread = function(e) {
  var i = this.startNode();
  return this.next(), i.argument = this.parseMaybeAssign(!1, e), this.finishNode(i, "SpreadElement");
};
xt.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== y.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
xt.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case y.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(y.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case y.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
xt.parseBindingList = function(e, i, r) {
  for (var s = [], o = !0; !this.eat(e); )
    if (o ? o = !1 : this.expect(y.comma), i && this.type === y.comma)
      s.push(null);
    else {
      if (r && this.afterTrailingComma(e))
        break;
      if (this.type === y.ellipsis) {
        var l = this.parseRestBinding();
        this.parseBindingListItem(l), s.push(l), this.type === y.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else {
        var f = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(f), s.push(f);
      }
    }
  return s;
};
xt.parseBindingListItem = function(e) {
  return e;
};
xt.parseMaybeDefault = function(e, i, r) {
  if (r = r || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(y.eq))
    return r;
  var s = this.startNodeAt(e, i);
  return s.left = r, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern");
};
xt.checkLVal = function(e, i, r) {
  switch (i === void 0 && (i = vn), e.type) {
    case "Identifier":
      i === vt && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (i ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (Pi(r, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), r[e.name] = !0), i !== vn && i !== ns && this.declareName(e.name, i, e.start);
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      i && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ObjectPattern":
      for (var s = 0, o = e.properties; s < o.length; s += 1) {
        var l = o[s];
        this.checkLVal(l, i, r);
      }
      break;
    case "Property":
      this.checkLVal(e.value, i, r);
      break;
    case "ArrayPattern":
      for (var f = 0, v = e.elements; f < v.length; f += 1) {
        var x = v[f];
        x && this.checkLVal(x, i, r);
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(e.left, i, r);
      break;
    case "RestElement":
      this.checkLVal(e.argument, i, r);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(e.expression, i, r);
      break;
    default:
      this.raise(e.start, (i ? "Binding" : "Assigning to") + " rvalue");
  }
};
var ye = Ge.prototype;
ye.checkPropClash = function(e, i, r) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var s = e.key, o;
    switch (s.type) {
      case "Identifier":
        o = s.name;
        break;
      case "Literal":
        o = String(s.value);
        break;
      default:
        return;
    }
    var l = e.kind;
    if (this.options.ecmaVersion >= 6) {
      o === "__proto__" && l === "init" && (i.proto && (r ? r.doubleProto < 0 && (r.doubleProto = s.start) : this.raiseRecoverable(s.start, "Redefinition of __proto__ property")), i.proto = !0);
      return;
    }
    o = "$" + o;
    var f = i[o];
    if (f) {
      var v;
      l === "init" ? v = this.strict && f.init || f.get || f.set : v = f.init || f[l], v && this.raiseRecoverable(s.start, "Redefinition of property");
    } else
      f = i[o] = {
        init: !1,
        get: !1,
        set: !1
      };
    f[l] = !0;
  }
};
ye.parseExpression = function(e, i) {
  var r = this.start, s = this.startLoc, o = this.parseMaybeAssign(e, i);
  if (this.type === y.comma) {
    var l = this.startNodeAt(r, s);
    for (l.expressions = [o]; this.eat(y.comma); )
      l.expressions.push(this.parseMaybeAssign(e, i));
    return this.finishNode(l, "SequenceExpression");
  }
  return o;
};
ye.parseMaybeAssign = function(e, i, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var s = !1, o = -1, l = -1;
  i ? (o = i.parenthesizedAssign, l = i.trailingComma, i.parenthesizedAssign = i.trailingComma = -1) : (i = new Ti(), s = !0);
  var f = this.start, v = this.startLoc;
  (this.type === y.parenL || this.type === y.name) && (this.potentialArrowAt = this.start);
  var x = this.parseMaybeConditional(e, i);
  if (r && (x = r.call(this, x, f, v)), this.type.isAssign) {
    var _ = this.startNodeAt(f, v);
    return _.operator = this.value, _.left = this.type === y.eq ? this.toAssignable(x, !1, i) : x, s || (i.parenthesizedAssign = i.trailingComma = i.doubleProto = -1), i.shorthandAssign >= _.left.start && (i.shorthandAssign = -1), this.checkLVal(x), this.next(), _.right = this.parseMaybeAssign(e), this.finishNode(_, "AssignmentExpression");
  } else
    s && this.checkExpressionErrors(i, !0);
  return o > -1 && (i.parenthesizedAssign = o), l > -1 && (i.trailingComma = l), x;
};
ye.parseMaybeConditional = function(e, i) {
  var r = this.start, s = this.startLoc, o = this.parseExprOps(e, i);
  if (this.checkExpressionErrors(i))
    return o;
  if (this.eat(y.question)) {
    var l = this.startNodeAt(r, s);
    return l.test = o, l.consequent = this.parseMaybeAssign(), this.expect(y.colon), l.alternate = this.parseMaybeAssign(e), this.finishNode(l, "ConditionalExpression");
  }
  return o;
};
ye.parseExprOps = function(e, i) {
  var r = this.start, s = this.startLoc, o = this.parseMaybeUnary(i, !1);
  return this.checkExpressionErrors(i) || o.start === r && o.type === "ArrowFunctionExpression" ? o : this.parseExprOp(o, r, s, -1, e);
};
ye.parseExprOp = function(e, i, r, s, o) {
  var l = this.type.binop;
  if (l != null && (!o || this.type !== y._in) && l > s) {
    var f = this.type === y.logicalOR || this.type === y.logicalAND, v = this.type === y.coalesce;
    v && (l = y.logicalAND.binop);
    var x = this.value;
    this.next();
    var _ = this.start, b = this.startLoc, A = this.parseExprOp(this.parseMaybeUnary(null, !1), _, b, l, o), P = this.buildBinary(i, r, e, A, x, f || v);
    return (f && this.type === y.coalesce || v && (this.type === y.logicalOR || this.type === y.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(P, i, r, s, o);
  }
  return e;
};
ye.buildBinary = function(e, i, r, s, o, l) {
  var f = this.startNodeAt(e, i);
  return f.left = r, f.operator = o, f.right = s, this.finishNode(f, l ? "LogicalExpression" : "BinaryExpression");
};
ye.parseMaybeUnary = function(e, i) {
  var r = this.start, s = this.startLoc, o;
  if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction))
    o = this.parseAwait(), i = !0;
  else if (this.type.prefix) {
    var l = this.startNode(), f = this.type === y.incDec;
    l.operator = this.value, l.prefix = !0, this.next(), l.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(e, !0), f ? this.checkLVal(l.argument) : this.strict && l.operator === "delete" && l.argument.type === "Identifier" ? this.raiseRecoverable(l.start, "Deleting local variable in strict mode") : i = !0, o = this.finishNode(l, f ? "UpdateExpression" : "UnaryExpression");
  } else {
    if (o = this.parseExprSubscripts(e), this.checkExpressionErrors(e))
      return o;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var v = this.startNodeAt(r, s);
      v.operator = this.value, v.prefix = !1, v.argument = o, this.checkLVal(o), this.next(), o = this.finishNode(v, "UpdateExpression");
    }
  }
  return !i && this.eat(y.starstar) ? this.buildBinary(r, s, o, this.parseMaybeUnary(null, !1), "**", !1) : o;
};
ye.parseExprSubscripts = function(e) {
  var i = this.start, r = this.startLoc, s = this.parseExprAtom(e);
  if (s.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return s;
  var o = this.parseSubscripts(s, i, r);
  return e && o.type === "MemberExpression" && (e.parenthesizedAssign >= o.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= o.start && (e.parenthesizedBind = -1)), o;
};
ye.parseSubscripts = function(e, i, r, s) {
  for (var o = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, l = !1; ; ) {
    var f = this.parseSubscript(e, i, r, s, o, l);
    if (f.optional && (l = !0), f === e || f.type === "ArrowFunctionExpression") {
      if (l) {
        var v = this.startNodeAt(i, r);
        v.expression = f, f = this.finishNode(v, "ChainExpression");
      }
      return f;
    }
    e = f;
  }
};
ye.parseSubscript = function(e, i, r, s, o, l) {
  var f = this.options.ecmaVersion >= 11, v = f && this.eat(y.questionDot);
  s && v && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var x = this.eat(y.bracketL);
  if (x || v && this.type !== y.parenL && this.type !== y.backQuote || this.eat(y.dot)) {
    var _ = this.startNodeAt(i, r);
    _.object = e, _.property = x ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never"), _.computed = !!x, x && this.expect(y.bracketR), f && (_.optional = v), e = this.finishNode(_, "MemberExpression");
  } else if (!s && this.eat(y.parenL)) {
    var b = new Ti(), A = this.yieldPos, P = this.awaitPos, k = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var T = this.parseExprList(y.parenR, this.options.ecmaVersion >= 8, !1, b);
    if (o && !v && !this.canInsertSemicolon() && this.eat(y.arrow))
      return this.checkPatternErrors(b, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = A, this.awaitPos = P, this.awaitIdentPos = k, this.parseArrowExpression(this.startNodeAt(i, r), T, !0);
    this.checkExpressionErrors(b, !0), this.yieldPos = A || this.yieldPos, this.awaitPos = P || this.awaitPos, this.awaitIdentPos = k || this.awaitIdentPos;
    var E = this.startNodeAt(i, r);
    E.callee = e, E.arguments = T, f && (E.optional = v), e = this.finishNode(E, "CallExpression");
  } else if (this.type === y.backQuote) {
    (v || l) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var w = this.startNodeAt(i, r);
    w.tag = e, w.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(w, "TaggedTemplateExpression");
  }
  return e;
};
ye.parseExprAtom = function(e) {
  this.type === y.slash && this.readRegexp();
  var i, r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case y._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), i = this.startNode(), this.next(), this.type === y.parenL && !this.allowDirectSuper && this.raise(i.start, "super() call outside constructor of a subclass"), this.type !== y.dot && this.type !== y.bracketL && this.type !== y.parenL && this.unexpected(), this.finishNode(i, "Super");
    case y._this:
      return i = this.startNode(), this.next(), this.finishNode(i, "ThisExpression");
    case y.name:
      var s = this.start, o = this.startLoc, l = this.containsEsc, f = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !l && f.name === "async" && !this.canInsertSemicolon() && this.eat(y._function))
        return this.parseFunction(this.startNodeAt(s, o), 0, !1, !0);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(y.arrow))
          return this.parseArrowExpression(this.startNodeAt(s, o), [f], !1);
        if (this.options.ecmaVersion >= 8 && f.name === "async" && this.type === y.name && !l)
          return f = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(y.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(s, o), [f], !0);
      }
      return f;
    case y.regexp:
      var v = this.value;
      return i = this.parseLiteral(v.value), i.regex = { pattern: v.pattern, flags: v.flags }, i;
    case y.num:
    case y.string:
      return this.parseLiteral(this.value);
    case y._null:
    case y._true:
    case y._false:
      return i = this.startNode(), i.value = this.type === y._null ? null : this.type === y._true, i.raw = this.type.keyword, this.next(), this.finishNode(i, "Literal");
    case y.parenL:
      var x = this.start, _ = this.parseParenAndDistinguishExpression(r);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(_) && (e.parenthesizedAssign = x), e.parenthesizedBind < 0 && (e.parenthesizedBind = x)), _;
    case y.bracketL:
      return i = this.startNode(), this.next(), i.elements = this.parseExprList(y.bracketR, !0, !0, e), this.finishNode(i, "ArrayExpression");
    case y.braceL:
      return this.parseObj(!1, e);
    case y._function:
      return i = this.startNode(), this.next(), this.parseFunction(i, 0);
    case y._class:
      return this.parseClass(this.startNode(), !1);
    case y._new:
      return this.parseNew();
    case y.backQuote:
      return this.parseTemplate();
    case y._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
    default:
      this.unexpected();
  }
};
ye.parseExprImport = function() {
  var e = this.startNode();
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  var i = this.parseIdent(!0);
  switch (this.type) {
    case y.parenL:
      return this.parseDynamicImport(e);
    case y.dot:
      return e.meta = i, this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
ye.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(y.parenR)) {
    var i = this.start;
    this.eat(y.comma) && this.eat(y.parenR) ? this.raiseRecoverable(i, "Trailing comma is not allowed in import()") : this.unexpected(i);
  }
  return this.finishNode(e, "ImportExpression");
};
ye.parseImportMeta = function(e) {
  this.next();
  var i = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), i && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
ye.parseLiteral = function(e) {
  var i = this.startNode();
  return i.value = e, i.raw = this.input.slice(this.start, this.end), i.raw.charCodeAt(i.raw.length - 1) === 110 && (i.bigint = i.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(i, "Literal");
};
ye.parseParenExpression = function() {
  this.expect(y.parenL);
  var e = this.parseExpression();
  return this.expect(y.parenR), e;
};
ye.parseParenAndDistinguishExpression = function(e) {
  var i = this.start, r = this.startLoc, s, o = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var l = this.start, f = this.startLoc, v = [], x = !0, _ = !1, b = new Ti(), A = this.yieldPos, P = this.awaitPos, k;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== y.parenR; )
      if (x ? x = !1 : this.expect(y.comma), o && this.afterTrailingComma(y.parenR, !0)) {
        _ = !0;
        break;
      } else if (this.type === y.ellipsis) {
        k = this.start, v.push(this.parseParenItem(this.parseRestBinding())), this.type === y.comma && this.raise(this.start, "Comma is not permitted after the rest element");
        break;
      } else
        v.push(this.parseMaybeAssign(!1, b, this.parseParenItem));
    var T = this.start, E = this.startLoc;
    if (this.expect(y.parenR), e && !this.canInsertSemicolon() && this.eat(y.arrow))
      return this.checkPatternErrors(b, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = A, this.awaitPos = P, this.parseParenArrowList(i, r, v);
    (!v.length || _) && this.unexpected(this.lastTokStart), k && this.unexpected(k), this.checkExpressionErrors(b, !0), this.yieldPos = A || this.yieldPos, this.awaitPos = P || this.awaitPos, v.length > 1 ? (s = this.startNodeAt(l, f), s.expressions = v, this.finishNodeAt(s, "SequenceExpression", T, E)) : s = v[0];
  } else
    s = this.parseParenExpression();
  if (this.options.preserveParens) {
    var w = this.startNodeAt(i, r);
    return w.expression = s, this.finishNode(w, "ParenthesizedExpression");
  } else
    return s;
};
ye.parseParenItem = function(e) {
  return e;
};
ye.parseParenArrowList = function(e, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, i), r);
};
var fo = [];
ye.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode(), i = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(y.dot)) {
    e.meta = i;
    var r = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), r && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.inNonArrowFunction() || this.raiseRecoverable(e.start, "'new.target' can only be used in functions"), this.finishNode(e, "MetaProperty");
  }
  var s = this.start, o = this.startLoc, l = this.type === y._import;
  return e.callee = this.parseSubscripts(this.parseExprAtom(), s, o, !0), l && e.callee.type === "ImportExpression" && this.raise(s, "Cannot use new with import()"), this.eat(y.parenL) ? e.arguments = this.parseExprList(y.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = fo, this.finishNode(e, "NewExpression");
};
ye.parseTemplateElement = function(e) {
  var i = e.isTagged, r = this.startNode();
  return this.type === y.invalidTemplate ? (i || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), r.value = {
    raw: this.value,
    cooked: null
  }) : r.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), r.tail = this.type === y.backQuote, this.finishNode(r, "TemplateElement");
};
ye.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var i = e.isTagged;
  i === void 0 && (i = !1);
  var r = this.startNode();
  this.next(), r.expressions = [];
  var s = this.parseTemplateElement({ isTagged: i });
  for (r.quasis = [s]; !s.tail; )
    this.type === y.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(y.dollarBraceL), r.expressions.push(this.parseExpression()), this.expect(y.braceR), r.quasis.push(s = this.parseTemplateElement({ isTagged: i }));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
ye.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === y.name || this.type === y.num || this.type === y.string || this.type === y.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === y.star) && !ot.test(this.input.slice(this.lastTokEnd, this.start));
};
ye.parseObj = function(e, i) {
  var r = this.startNode(), s = !0, o = {};
  for (r.properties = [], this.next(); !this.eat(y.braceR); ) {
    if (s)
      s = !1;
    else if (this.expect(y.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(y.braceR))
      break;
    var l = this.parseProperty(e, i);
    e || this.checkPropClash(l, o, i), r.properties.push(l);
  }
  return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression");
};
ye.parseProperty = function(e, i) {
  var r = this.startNode(), s, o, l, f;
  if (this.options.ecmaVersion >= 9 && this.eat(y.ellipsis))
    return e ? (r.argument = this.parseIdent(!1), this.type === y.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(r, "RestElement")) : (this.type === y.parenL && i && (i.parenthesizedAssign < 0 && (i.parenthesizedAssign = this.start), i.parenthesizedBind < 0 && (i.parenthesizedBind = this.start)), r.argument = this.parseMaybeAssign(!1, i), this.type === y.comma && i && i.trailingComma < 0 && (i.trailingComma = this.start), this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (r.method = !1, r.shorthand = !1, (e || i) && (l = this.start, f = this.startLoc), e || (s = this.eat(y.star)));
  var v = this.containsEsc;
  return this.parsePropertyName(r), !e && !v && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(r) ? (o = !0, s = this.options.ecmaVersion >= 9 && this.eat(y.star), this.parsePropertyName(r, i)) : o = !1, this.parsePropertyValue(r, e, s, o, l, f, i, v), this.finishNode(r, "Property");
};
ye.parsePropertyValue = function(e, i, r, s, o, l, f, v) {
  if ((r || s) && this.type === y.colon && this.unexpected(), this.eat(y.colon))
    e.value = i ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, f), e.kind = "init";
  else if (this.options.ecmaVersion >= 6 && this.type === y.parenL)
    i && this.unexpected(), e.kind = "init", e.method = !0, e.value = this.parseMethod(r, s);
  else if (!i && !v && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== y.comma && this.type !== y.braceR && this.type !== y.eq) {
    (r || s) && this.unexpected(), e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(!1);
    var x = e.kind === "get" ? 0 : 1;
    if (e.value.params.length !== x) {
      var _ = e.value.start;
      e.kind === "get" ? this.raiseRecoverable(_, "getter should have no params") : this.raiseRecoverable(_, "setter should have exactly one param");
    } else
      e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
  } else
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((r || s) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = o), e.kind = "init", i ? e.value = this.parseMaybeDefault(o, l, e.key) : this.type === y.eq && f ? (f.shorthandAssign < 0 && (f.shorthandAssign = this.start), e.value = this.parseMaybeDefault(o, l, e.key)) : e.value = e.key, e.shorthand = !0) : this.unexpected();
};
ye.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(y.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(y.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === y.num || this.type === y.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
ye.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
ye.parseMethod = function(e, i, r) {
  var s = this.startNode(), o = this.yieldPos, l = this.awaitPos, f = this.awaitIdentPos;
  return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = e), this.options.ecmaVersion >= 8 && (s.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(dr(i, s.generator) | es | (r ? ts : 0)), this.expect(y.parenL), s.params = this.parseBindingList(y.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0), this.yieldPos = o, this.awaitPos = l, this.awaitIdentPos = f, this.finishNode(s, "FunctionExpression");
};
ye.parseArrowExpression = function(e, i, r) {
  var s = this.yieldPos, o = this.awaitPos, l = this.awaitIdentPos;
  return this.enterScope(dr(r, !1) | Kn), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(i, !0), this.parseFunctionBody(e, !0, !1), this.yieldPos = s, this.awaitPos = o, this.awaitIdentPos = l, this.finishNode(e, "ArrowFunctionExpression");
};
ye.parseFunctionBody = function(e, i, r) {
  var s = i && this.type !== y.braceL, o = this.strict, l = !1;
  if (s)
    e.body = this.parseMaybeAssign(), e.expression = !0, this.checkParams(e, !1);
  else {
    var f = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!o || f) && (l = this.strictDirective(this.end), l && f && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var v = this.labels;
    this.labels = [], l && (this.strict = !0), this.checkParams(e, !o && !l && !i && !r && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLVal(e.id, ns), e.body = this.parseBlock(!1, void 0, l && !o), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = v;
  }
  this.exitScope();
};
ye.isSimpleParamList = function(e) {
  for (var i = 0, r = e; i < r.length; i += 1) {
    var s = r[i];
    if (s.type !== "Identifier")
      return !1;
  }
  return !0;
};
ye.checkParams = function(e, i) {
  for (var r = {}, s = 0, o = e.params; s < o.length; s += 1) {
    var l = o[s];
    this.checkLVal(l, mr, i ? null : r);
  }
};
ye.parseExprList = function(e, i, r, s) {
  for (var o = [], l = !0; !this.eat(e); ) {
    if (l)
      l = !1;
    else if (this.expect(y.comma), i && this.afterTrailingComma(e))
      break;
    var f = void 0;
    r && this.type === y.comma ? f = null : this.type === y.ellipsis ? (f = this.parseSpread(s), s && this.type === y.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : f = this.parseMaybeAssign(!1, s), o.push(f);
  }
  return o;
};
ye.checkUnreserved = function(e) {
  var i = e.start, r = e.end, s = e.name;
  if (this.inGenerator && s === "yield" && this.raiseRecoverable(i, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && s === "await" && this.raiseRecoverable(i, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(s) && this.raise(i, "Unexpected keyword '" + s + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(i, r).indexOf("\\") !== -1)) {
    var o = this.strict ? this.reservedWordsStrict : this.reservedWords;
    o.test(s) && (!this.inAsync && s === "await" && this.raiseRecoverable(i, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(i, "The keyword '" + s + "' is reserved"));
  }
};
ye.parseIdent = function(e, i) {
  var r = this.startNode();
  return this.type === y.name ? r.name = this.value : this.type.keyword ? (r.name = this.type.keyword, (r.name === "class" || r.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop()) : this.unexpected(), this.next(!!e), this.finishNode(r, "Identifier"), e || (this.checkUnreserved(r), r.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = r.start)), r;
};
ye.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var i = this.startNode();
  return this.next(), this.type === y.semi || this.canInsertSemicolon() || this.type !== y.star && !this.type.startsExpr ? (i.delegate = !1, i.argument = null) : (i.delegate = this.eat(y.star), i.argument = this.parseMaybeAssign(e)), this.finishNode(i, "YieldExpression");
};
ye.parseAwait = function() {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeUnary(null, !1), this.finishNode(e, "AwaitExpression");
};
var Ei = Ge.prototype;
Ei.raise = function(e, i) {
  var r = Qn(this.input, e);
  i += " (" + r.line + ":" + r.column + ")";
  var s = new SyntaxError(i);
  throw s.pos = e, s.loc = r, s.raisedAt = this.pos, s;
};
Ei.raiseRecoverable = Ei.raise;
Ei.curPosition = function() {
  if (this.options.locations)
    return new ei(this.curLine, this.pos - this.lineStart);
};
var wt = Ge.prototype, po = function(i) {
  this.flags = i, this.var = [], this.lexical = [], this.functions = [];
};
wt.enterScope = function(e) {
  this.scopeStack.push(new po(e));
};
wt.exitScope = function() {
  this.scopeStack.pop();
};
wt.treatFunctionsAsVarInScope = function(e) {
  return e.flags & oi || !this.inModule && e.flags & ti;
};
wt.declareName = function(e, i, r) {
  var s = !1;
  if (i === vt) {
    var o = this.currentScope();
    s = o.lexical.indexOf(e) > -1 || o.functions.indexOf(e) > -1 || o.var.indexOf(e) > -1, o.lexical.push(e), this.inModule && o.flags & ti && delete this.undefinedExports[e];
  } else if (i === rs) {
    var l = this.currentScope();
    l.lexical.push(e);
  } else if (i === is) {
    var f = this.currentScope();
    this.treatFunctionsAsVar ? s = f.lexical.indexOf(e) > -1 : s = f.lexical.indexOf(e) > -1 || f.var.indexOf(e) > -1, f.functions.push(e);
  } else
    for (var v = this.scopeStack.length - 1; v >= 0; --v) {
      var x = this.scopeStack[v];
      if (x.lexical.indexOf(e) > -1 && !(x.flags & Zn && x.lexical[0] === e) || !this.treatFunctionsAsVarInScope(x) && x.functions.indexOf(e) > -1) {
        s = !0;
        break;
      }
      if (x.var.push(e), this.inModule && x.flags & ti && delete this.undefinedExports[e], x.flags & pr)
        break;
    }
  s && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared");
};
wt.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
wt.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
wt.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var i = this.scopeStack[e];
    if (i.flags & pr)
      return i;
  }
};
wt.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var i = this.scopeStack[e];
    if (i.flags & pr && !(i.flags & Kn))
      return i;
  }
};
var vr = function(i, r, s) {
  this.type = "", this.start = r, this.end = 0, i.options.locations && (this.loc = new Ii(i, s)), i.options.directSourceFile && (this.sourceFile = i.options.directSourceFile), i.options.ranges && (this.range = [r, 0]);
}, Ni = Ge.prototype;
Ni.startNode = function() {
  return new vr(this, this.start, this.startLoc);
};
Ni.startNodeAt = function(e, i) {
  return new vr(this, e, i);
};
function as(e, i, r, s) {
  return e.type = i, e.end = r, this.options.locations && (e.loc.end = s), this.options.ranges && (e.range[1] = r), e;
}
Ni.finishNode = function(e, i) {
  return as.call(this, e, i, this.lastTokEnd, this.lastTokEndLoc);
};
Ni.finishNodeAt = function(e, i, r, s) {
  return as.call(this, e, i, r, s);
};
var lt = function(i, r, s, o, l) {
  this.token = i, this.isExpr = !!r, this.preserveSpace = !!s, this.override = o, this.generator = !!l;
}, We = {
  b_stat: new lt("{", !1),
  b_expr: new lt("{", !0),
  b_tmpl: new lt("${", !1),
  p_stat: new lt("(", !1),
  p_expr: new lt("(", !0),
  q_tmpl: new lt("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new lt("function", !1),
  f_expr: new lt("function", !0),
  f_expr_gen: new lt("function", !0, !1, null, !0),
  f_gen: new lt("function", !1, !1, null, !0)
}, Ri = Ge.prototype;
Ri.initialContext = function() {
  return [We.b_stat];
};
Ri.braceIsBlock = function(e) {
  var i = this.curContext();
  return i === We.f_expr || i === We.f_stat ? !0 : e === y.colon && (i === We.b_stat || i === We.b_expr) ? !i.isExpr : e === y._return || e === y.name && this.exprAllowed ? ot.test(this.input.slice(this.lastTokEnd, this.start)) : e === y._else || e === y.semi || e === y.eof || e === y.parenR || e === y.arrow ? !0 : e === y.braceL ? i === We.b_stat : e === y._var || e === y._const || e === y.name ? !1 : !this.exprAllowed;
};
Ri.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var i = this.context[e];
    if (i.token === "function")
      return i.generator;
  }
  return !1;
};
Ri.updateContext = function(e) {
  var i, r = this.type;
  r.keyword && e === y.dot ? this.exprAllowed = !1 : (i = r.updateContext) ? i.call(this, e) : this.exprAllowed = r.beforeExpr;
};
y.parenR.updateContext = y.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === We.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
y.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? We.b_stat : We.b_expr), this.exprAllowed = !0;
};
y.dollarBraceL.updateContext = function() {
  this.context.push(We.b_tmpl), this.exprAllowed = !0;
};
y.parenL.updateContext = function(e) {
  var i = e === y._if || e === y._for || e === y._with || e === y._while;
  this.context.push(i ? We.p_stat : We.p_expr), this.exprAllowed = !0;
};
y.incDec.updateContext = function() {
};
y._function.updateContext = y._class.updateContext = function(e) {
  e.beforeExpr && e !== y.semi && e !== y._else && !(e === y._return && ot.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === y.colon || e === y.braceL) && this.curContext() === We.b_stat) ? this.context.push(We.f_expr) : this.context.push(We.f_stat), this.exprAllowed = !1;
};
y.backQuote.updateContext = function() {
  this.curContext() === We.q_tmpl ? this.context.pop() : this.context.push(We.q_tmpl), this.exprAllowed = !1;
};
y.star.updateContext = function(e) {
  if (e === y._function) {
    var i = this.context.length - 1;
    this.context[i] === We.f_expr ? this.context[i] = We.f_expr_gen : this.context[i] = We.f_gen;
  }
  this.exprAllowed = !0;
};
y.name.updateContext = function(e) {
  var i = !1;
  this.options.ecmaVersion >= 6 && e !== y.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (i = !0), this.exprAllowed = i;
};
var os = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", us = os + " Extended_Pictographic", mo = us, go = {
  9: os,
  10: us,
  11: mo
}, xn = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", ls = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", cs = ls + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", vo = cs + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", xo = {
  9: ls,
  10: cs,
  11: vo
}, hs = {};
function xr(e) {
  var i = hs[e] = {
    binary: kt(go[e] + " " + xn),
    nonBinary: {
      General_Category: kt(xn),
      Script: kt(xo[e])
    }
  };
  i.nonBinary.Script_Extensions = i.nonBinary.Script, i.nonBinary.gc = i.nonBinary.General_Category, i.nonBinary.sc = i.nonBinary.Script, i.nonBinary.scx = i.nonBinary.Script_Extensions;
}
xr(9);
xr(10);
xr(11);
var se = Ge.prototype, yt = function(i) {
  this.parser = i, this.validFlags = "gim" + (i.options.ecmaVersion >= 6 ? "uy" : "") + (i.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = hs[i.options.ecmaVersion >= 11 ? 11 : i.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [];
};
yt.prototype.reset = function(i, r, s) {
  var o = s.indexOf("u") !== -1;
  this.start = i | 0, this.source = r + "", this.flags = s, this.switchU = o && this.parser.options.ecmaVersion >= 6, this.switchN = o && this.parser.options.ecmaVersion >= 9;
};
yt.prototype.raise = function(i) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + i);
};
yt.prototype.at = function(i, r) {
  r === void 0 && (r = !1);
  var s = this.source, o = s.length;
  if (i >= o)
    return -1;
  var l = s.charCodeAt(i);
  if (!(r || this.switchU) || l <= 55295 || l >= 57344 || i + 1 >= o)
    return l;
  var f = s.charCodeAt(i + 1);
  return f >= 56320 && f <= 57343 ? (l << 10) + f - 56613888 : l;
};
yt.prototype.nextIndex = function(i, r) {
  r === void 0 && (r = !1);
  var s = this.source, o = s.length;
  if (i >= o)
    return o;
  var l = s.charCodeAt(i), f;
  return !(r || this.switchU) || l <= 55295 || l >= 57344 || i + 1 >= o || (f = s.charCodeAt(i + 1)) < 56320 || f > 57343 ? i + 1 : i + 2;
};
yt.prototype.current = function(i) {
  return i === void 0 && (i = !1), this.at(this.pos, i);
};
yt.prototype.lookahead = function(i) {
  return i === void 0 && (i = !1), this.at(this.nextIndex(this.pos, i), i);
};
yt.prototype.advance = function(i) {
  i === void 0 && (i = !1), this.pos = this.nextIndex(this.pos, i);
};
yt.prototype.eat = function(i, r) {
  return r === void 0 && (r = !1), this.current(r) === i ? (this.advance(r), !0) : !1;
};
function wi(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
se.validateRegExpFlags = function(e) {
  for (var i = e.validFlags, r = e.flags, s = 0; s < r.length; s++) {
    var o = r.charAt(s);
    i.indexOf(o) === -1 && this.raise(e.start, "Invalid regular expression flag"), r.indexOf(o, s + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
  }
};
se.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && (e.switchN = !0, this.regexp_pattern(e));
};
se.regexp_pattern = function(e) {
  e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames.length = 0, e.backReferenceNames.length = 0, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(
    41
    /* ) */
  ) && e.raise("Unmatched ')'"), (e.eat(
    93
    /* ] */
  ) || e.eat(
    125
    /* } */
  )) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var i = 0, r = e.backReferenceNames; i < r.length; i += 1) {
    var s = r[i];
    e.groupNames.indexOf(s) === -1 && e.raise("Invalid named capture referenced");
  }
};
se.regexp_disjunction = function(e) {
  for (this.regexp_alternative(e); e.eat(
    124
    /* | */
  ); )
    this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(
    123
    /* { */
  ) && e.raise("Lone quantifier brackets");
};
se.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
};
se.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
};
se.regexp_eatAssertion = function(e) {
  var i = e.pos;
  if (e.lastAssertionIsQuantifiable = !1, e.eat(
    94
    /* ^ */
  ) || e.eat(
    36
    /* $ */
  ))
    return !0;
  if (e.eat(
    92
    /* \ */
  )) {
    if (e.eat(
      66
      /* B */
    ) || e.eat(
      98
      /* b */
    ))
      return !0;
    e.pos = i;
  }
  if (e.eat(
    40
    /* ( */
  ) && e.eat(
    63
    /* ? */
  )) {
    var r = !1;
    if (this.options.ecmaVersion >= 9 && (r = e.eat(
      60
      /* < */
    )), e.eat(
      61
      /* = */
    ) || e.eat(
      33
      /* ! */
    ))
      return this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !r, !0;
  }
  return e.pos = i, !1;
};
se.regexp_eatQuantifier = function(e, i) {
  return i === void 0 && (i = !1), this.regexp_eatQuantifierPrefix(e, i) ? (e.eat(
    63
    /* ? */
  ), !0) : !1;
};
se.regexp_eatQuantifierPrefix = function(e, i) {
  return e.eat(
    42
    /* * */
  ) || e.eat(
    43
    /* + */
  ) || e.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(e, i);
};
se.regexp_eatBracedQuantifier = function(e, i) {
  var r = e.pos;
  if (e.eat(
    123
    /* { */
  )) {
    var s = 0, o = -1;
    if (this.regexp_eatDecimalDigits(e) && (s = e.lastIntValue, e.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(e) && (o = e.lastIntValue), e.eat(
      125
      /* } */
    )))
      return o !== -1 && o < s && !i && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !i && e.raise("Incomplete quantifier"), e.pos = r;
  }
  return !1;
};
se.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
se.regexp_eatReverseSolidusAtomEscape = function(e) {
  var i = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(e))
      return !0;
    e.pos = i;
  }
  return !1;
};
se.regexp_eatUncapturingGroup = function(e) {
  var i = e.pos;
  if (e.eat(
    40
    /* ( */
  )) {
    if (e.eat(
      63
      /* ? */
    ) && e.eat(
      58
      /* : */
    )) {
      if (this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ))
        return !0;
      e.raise("Unterminated group");
    }
    e.pos = i;
  }
  return !1;
};
se.regexp_eatCapturingGroup = function(e) {
  if (e.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(
      41
      /* ) */
    ))
      return e.numCapturingParens += 1, !0;
    e.raise("Unterminated group");
  }
  return !1;
};
se.regexp_eatExtendedAtom = function(e) {
  return e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
se.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
se.regexp_eatSyntaxCharacter = function(e) {
  var i = e.current();
  return fs(i) ? (e.lastIntValue = i, e.advance(), !0) : !1;
};
function fs(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
se.regexp_eatPatternCharacters = function(e) {
  for (var i = e.pos, r = 0; (r = e.current()) !== -1 && !fs(r); )
    e.advance();
  return e.pos !== i;
};
se.regexp_eatExtendedPatternCharacter = function(e) {
  var i = e.current();
  return i !== -1 && i !== 36 && !(i >= 40 && i <= 43) && i !== 46 && i !== 63 && i !== 91 && i !== 94 && i !== 124 ? (e.advance(), !0) : !1;
};
se.regexp_groupSpecifier = function(e) {
  if (e.eat(
    63
    /* ? */
  )) {
    if (this.regexp_eatGroupName(e)) {
      e.groupNames.indexOf(e.lastStringValue) !== -1 && e.raise("Duplicate capture group name"), e.groupNames.push(e.lastStringValue);
      return;
    }
    e.raise("Invalid group");
  }
};
se.regexp_eatGroupName = function(e) {
  if (e.lastStringValue = "", e.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(
      62
      /* > */
    ))
      return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
se.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += wi(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += wi(e.lastIntValue);
    return !0;
  }
  return !1;
};
se.regexp_eatRegExpIdentifierStart = function(e) {
  var i = e.pos, r = this.options.ecmaVersion >= 11, s = e.current(r);
  return e.advance(r), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (s = e.lastIntValue), yo(s) ? (e.lastIntValue = s, !0) : (e.pos = i, !1);
};
function yo(e) {
  return Ct(e, !0) || e === 36 || e === 95;
}
se.regexp_eatRegExpIdentifierPart = function(e) {
  var i = e.pos, r = this.options.ecmaVersion >= 11, s = e.current(r);
  return e.advance(r), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (s = e.lastIntValue), bo(s) ? (e.lastIntValue = s, !0) : (e.pos = i, !1);
};
function bo(e) {
  return Dt(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
se.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
se.regexp_eatBackReference = function(e) {
  var i = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU)
      return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens)
      return !0;
    e.pos = i;
  }
  return !1;
};
se.regexp_eatKGroupName = function(e) {
  if (e.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
se.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
se.regexp_eatCControlLetter = function(e) {
  var i = e.pos;
  if (e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(e))
      return !0;
    e.pos = i;
  }
  return !1;
};
se.regexp_eatZero = function(e) {
  return e.current() === 48 && !Li(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
se.regexp_eatControlEscape = function(e) {
  var i = e.current();
  return i === 116 ? (e.lastIntValue = 9, e.advance(), !0) : i === 110 ? (e.lastIntValue = 10, e.advance(), !0) : i === 118 ? (e.lastIntValue = 11, e.advance(), !0) : i === 102 ? (e.lastIntValue = 12, e.advance(), !0) : i === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
se.regexp_eatControlLetter = function(e) {
  var i = e.current();
  return ps(i) ? (e.lastIntValue = i % 32, e.advance(), !0) : !1;
};
function ps(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
se.regexp_eatRegExpUnicodeEscapeSequence = function(e, i) {
  i === void 0 && (i = !1);
  var r = e.pos, s = i || e.switchU;
  if (e.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var o = e.lastIntValue;
      if (s && o >= 55296 && o <= 56319) {
        var l = e.pos;
        if (e.eat(
          92
          /* \ */
        ) && e.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(e, 4)) {
          var f = e.lastIntValue;
          if (f >= 56320 && f <= 57343)
            return e.lastIntValue = (o - 55296) * 1024 + (f - 56320) + 65536, !0;
        }
        e.pos = l, e.lastIntValue = o;
      }
      return !0;
    }
    if (s && e.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(e) && e.eat(
      125
      /* } */
    ) && So(e.lastIntValue))
      return !0;
    s && e.raise("Invalid unicode escape"), e.pos = r;
  }
  return !1;
};
function So(e) {
  return e >= 0 && e <= 1114111;
}
se.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(
      47
      /* / */
    ) ? (e.lastIntValue = 47, !0) : !1;
  var i = e.current();
  return i !== 99 && (!e.switchN || i !== 107) ? (e.lastIntValue = i, e.advance(), !0) : !1;
};
se.regexp_eatDecimalEscape = function(e) {
  e.lastIntValue = 0;
  var i = e.current();
  if (i >= 49 && i <= 57) {
    do
      e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
    while ((i = e.current()) >= 48 && i <= 57);
    return !0;
  }
  return !1;
};
se.regexp_eatCharacterClassEscape = function(e) {
  var i = e.current();
  if (_o(i))
    return e.lastIntValue = -1, e.advance(), !0;
  if (e.switchU && this.options.ecmaVersion >= 9 && (i === 80 || i === 112)) {
    if (e.lastIntValue = -1, e.advance(), e.eat(
      123
      /* { */
    ) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(
      125
      /* } */
    ))
      return !0;
    e.raise("Invalid property name");
  }
  return !1;
};
function _o(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
se.regexp_eatUnicodePropertyValueExpression = function(e) {
  var i = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(
    61
    /* = */
  )) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var s = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, s), !0;
    }
  }
  if (e.pos = i, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var o = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, o), !0;
  }
  return !1;
};
se.regexp_validateUnicodePropertyNameAndValue = function(e, i, r) {
  Pi(e.unicodeProperties.nonBinary, i) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[i].test(r) || e.raise("Invalid property value");
};
se.regexp_validateUnicodePropertyNameOrValue = function(e, i) {
  e.unicodeProperties.binary.test(i) || e.raise("Invalid property name");
};
se.regexp_eatUnicodePropertyName = function(e) {
  var i = 0;
  for (e.lastStringValue = ""; ds(i = e.current()); )
    e.lastStringValue += wi(i), e.advance();
  return e.lastStringValue !== "";
};
function ds(e) {
  return ps(e) || e === 95;
}
se.regexp_eatUnicodePropertyValue = function(e) {
  var i = 0;
  for (e.lastStringValue = ""; Co(i = e.current()); )
    e.lastStringValue += wi(i), e.advance();
  return e.lastStringValue !== "";
};
function Co(e) {
  return ds(e) || Li(e);
}
se.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
se.regexp_eatCharacterClass = function(e) {
  if (e.eat(
    91
    /* [ */
  )) {
    if (e.eat(
      94
      /* ^ */
    ), this.regexp_classRanges(e), e.eat(
      93
      /* ] */
    ))
      return !0;
    e.raise("Unterminated character class");
  }
  return !1;
};
se.regexp_classRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var i = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (i === -1 || r === -1) && e.raise("Invalid character class"), i !== -1 && r !== -1 && i > r && e.raise("Range out of order in character class");
    }
  }
};
se.regexp_eatClassAtom = function(e) {
  var i = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(e))
      return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || vs(r)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = i;
  }
  var s = e.current();
  return s !== 93 ? (e.lastIntValue = s, e.advance(), !0) : !1;
};
se.regexp_eatClassEscape = function(e) {
  var i = e.pos;
  if (e.eat(
    98
    /* b */
  ))
    return e.lastIntValue = 8, !0;
  if (e.switchU && e.eat(
    45
    /* - */
  ))
    return e.lastIntValue = 45, !0;
  if (!e.switchU && e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(e))
      return !0;
    e.pos = i;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
se.regexp_eatClassControlLetter = function(e) {
  var i = e.current();
  return Li(i) || i === 95 ? (e.lastIntValue = i % 32, e.advance(), !0) : !1;
};
se.regexp_eatHexEscapeSequence = function(e) {
  var i = e.pos;
  if (e.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 2))
      return !0;
    e.switchU && e.raise("Invalid escape"), e.pos = i;
  }
  return !1;
};
se.regexp_eatDecimalDigits = function(e) {
  var i = e.pos, r = 0;
  for (e.lastIntValue = 0; Li(r = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (r - 48), e.advance();
  return e.pos !== i;
};
function Li(e) {
  return e >= 48 && e <= 57;
}
se.regexp_eatHexDigits = function(e) {
  var i = e.pos, r = 0;
  for (e.lastIntValue = 0; ms(r = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + gs(r), e.advance();
  return e.pos !== i;
};
function ms(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function gs(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
se.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var i = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      i <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = i * 64 + r * 8 + e.lastIntValue : e.lastIntValue = i * 8 + r;
    } else
      e.lastIntValue = i;
    return !0;
  }
  return !1;
};
se.regexp_eatOctalDigit = function(e) {
  var i = e.current();
  return vs(i) ? (e.lastIntValue = i - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function vs(e) {
  return e >= 48 && e <= 55;
}
se.regexp_eatFixedHexDigits = function(e, i) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var s = 0; s < i; ++s) {
    var o = e.current();
    if (!ms(o))
      return e.pos = r, !1;
    e.lastIntValue = 16 * e.lastIntValue + gs(o), e.advance();
  }
  return !0;
};
var yr = function(i) {
  this.type = i.type, this.value = i.value, this.start = i.start, this.end = i.end, i.options.locations && (this.loc = new Ii(i, i.startLoc, i.endLoc)), i.options.ranges && (this.range = [i.start, i.end]);
}, we = Ge.prototype;
we.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new yr(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
we.getToken = function() {
  return this.next(), new yr(this);
};
typeof Symbol < "u" && (we[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var i = e.getToken();
      return {
        done: i.type === y.eof,
        value: i
      };
    }
  };
});
we.curContext = function() {
  return this.context[this.context.length - 1];
};
we.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(y.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
we.readToken = function(e) {
  return Ct(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
we.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 57344)
    return e;
  var i = this.input.charCodeAt(this.pos + 1);
  return (e << 10) + i - 56613888;
};
we.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), i = this.pos, r = this.input.indexOf("*/", this.pos += 2);
  if (r === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options.locations) {
    Zt.lastIndex = i;
    for (var s; (s = Zt.exec(this.input)) && s.index < this.pos; )
      ++this.curLine, this.lineStart = s.index + s[0].length;
  }
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(i + 2, r),
    i,
    this.pos,
    e,
    this.curPosition()
  );
};
we.skipLineComment = function(e) {
  for (var i = this.pos, r = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !ai(s); )
    s = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(i + e, this.pos),
    i,
    this.pos,
    r,
    this.curPosition()
  );
};
we.skipSpace = function() {
  e:
    for (; this.pos < this.input.length; ) {
      var e = this.input.charCodeAt(this.pos);
      switch (e) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
        case 10:
        case 8232:
        case 8233:
          ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break e;
          }
          break;
        default:
          if (e > 8 && e < 14 || e >= 5760 && Hn.test(String.fromCharCode(e)))
            ++this.pos;
          else
            break e;
      }
    }
};
we.finishToken = function(e, i) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  this.type = e, this.value = i, this.updateContext(r);
};
we.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var i = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && i === 46 ? (this.pos += 3, this.finishToken(y.ellipsis)) : (++this.pos, this.finishToken(y.dot));
};
we.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(y.assign, 2) : this.finishOp(y.slash, 1);
};
we.readToken_mult_modulo_exp = function(e) {
  var i = this.input.charCodeAt(this.pos + 1), r = 1, s = e === 42 ? y.star : y.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && i === 42 && (++r, s = y.starstar, i = this.input.charCodeAt(this.pos + 2)), i === 61 ? this.finishOp(y.assign, r + 1) : this.finishOp(s, r);
};
we.readToken_pipe_amp = function(e) {
  var i = this.input.charCodeAt(this.pos + 1);
  if (i === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61)
        return this.finishOp(y.assign, 3);
    }
    return this.finishOp(e === 124 ? y.logicalOR : y.logicalAND, 2);
  }
  return i === 61 ? this.finishOp(y.assign, 2) : this.finishOp(e === 124 ? y.bitwiseOR : y.bitwiseAND, 1);
};
we.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(y.assign, 2) : this.finishOp(y.bitwiseXOR, 1);
};
we.readToken_plus_min = function(e) {
  var i = this.input.charCodeAt(this.pos + 1);
  return i === e ? i === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || ot.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(y.incDec, 2) : i === 61 ? this.finishOp(y.assign, 2) : this.finishOp(y.plusMin, 1);
};
we.readToken_lt_gt = function(e) {
  var i = this.input.charCodeAt(this.pos + 1), r = 1;
  return i === e ? (r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + r) === 61 ? this.finishOp(y.assign, r + 1) : this.finishOp(y.bitShift, r)) : i === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (i === 61 && (r = 2), this.finishOp(y.relational, r));
};
we.readToken_eq_excl = function(e) {
  var i = this.input.charCodeAt(this.pos + 1);
  return i === 61 ? this.finishOp(y.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && i === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(y.arrow)) : this.finishOp(e === 61 ? y.eq : y.prefix, 1);
};
we.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var i = this.input.charCodeAt(this.pos + 1);
    if (i === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57)
        return this.finishOp(y.questionDot, 2);
    }
    if (i === 63) {
      if (e >= 12) {
        var s = this.input.charCodeAt(this.pos + 2);
        if (s === 61)
          return this.finishOp(y.assign, 3);
      }
      return this.finishOp(y.coalesce, 2);
    }
  }
  return this.finishOp(y.question, 1);
};
we.getTokenFromCode = function(e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(y.parenL);
    case 41:
      return ++this.pos, this.finishToken(y.parenR);
    case 59:
      return ++this.pos, this.finishToken(y.semi);
    case 44:
      return ++this.pos, this.finishToken(y.comma);
    case 91:
      return ++this.pos, this.finishToken(y.bracketL);
    case 93:
      return ++this.pos, this.finishToken(y.bracketR);
    case 123:
      return ++this.pos, this.finishToken(y.braceL);
    case 125:
      return ++this.pos, this.finishToken(y.braceR);
    case 58:
      return ++this.pos, this.finishToken(y.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(y.backQuote);
    case 48:
      var i = this.input.charCodeAt(this.pos + 1);
      if (i === 120 || i === 88)
        return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (i === 111 || i === 79)
          return this.readRadixNumber(8);
        if (i === 98 || i === 66)
          return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(y.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + br(e) + "'");
};
we.finishOp = function(e, i) {
  var r = this.input.slice(this.pos, this.pos + i);
  return this.pos += i, this.finishToken(e, r);
};
we.readRegexp = function() {
  for (var e, i, r = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(r, "Unterminated regular expression");
    var s = this.input.charAt(this.pos);
    if (ot.test(s) && this.raise(r, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (s === "[")
        i = !0;
      else if (s === "]" && i)
        i = !1;
      else if (s === "/" && !i)
        break;
      e = s === "\\";
    }
    ++this.pos;
  }
  var o = this.input.slice(r, this.pos);
  ++this.pos;
  var l = this.pos, f = this.readWord1();
  this.containsEsc && this.unexpected(l);
  var v = this.regexpState || (this.regexpState = new yt(this));
  v.reset(r, o, f), this.validateRegExpFlags(v), this.validateRegExpPattern(v);
  var x = null;
  try {
    x = new RegExp(o, f);
  } catch {
  }
  return this.finishToken(y.regexp, { pattern: o, flags: f, value: x });
};
we.readInt = function(e, i, r) {
  for (var s = this.options.ecmaVersion >= 12 && i === void 0, o = r && this.input.charCodeAt(this.pos) === 48, l = this.pos, f = 0, v = 0, x = 0, _ = i ?? 1 / 0; x < _; ++x, ++this.pos) {
    var b = this.input.charCodeAt(this.pos), A = void 0;
    if (s && b === 95) {
      o && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), v === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), x === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), v = b;
      continue;
    }
    if (b >= 97 ? A = b - 97 + 10 : b >= 65 ? A = b - 65 + 10 : b >= 48 && b <= 57 ? A = b - 48 : A = 1 / 0, A >= e)
      break;
    v = b, f = f * e + A;
  }
  return s && v === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === l || i != null && this.pos - l !== i ? null : f;
};
function Eo(e, i) {
  return i ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function xs(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
we.readRadixNumber = function(e) {
  var i = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return r == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (r = xs(this.input.slice(i, this.pos)), ++this.pos) : Ct(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(y.num, r);
};
we.readNumber = function(e) {
  var i = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(i, "Invalid number");
  var r = this.pos - i >= 2 && this.input.charCodeAt(i) === 48;
  r && this.strict && this.raise(i, "Invalid number");
  var s = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && s === 110) {
    var o = xs(this.input.slice(i, this.pos));
    return ++this.pos, Ct(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(y.num, o);
  }
  r && /[89]/.test(this.input.slice(i, this.pos)) && (r = !1), s === 46 && !r && (++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos)), (s === 69 || s === 101) && !r && (s = this.input.charCodeAt(++this.pos), (s === 43 || s === 45) && ++this.pos, this.readInt(10) === null && this.raise(i, "Invalid number")), Ct(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var l = Eo(this.input.slice(i, this.pos), r);
  return this.finishToken(y.num, l);
};
we.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), i;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    i = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, i > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else
    i = this.readHexChar(4);
  return i;
};
function br(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
we.readString = function(e) {
  for (var i = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var s = this.input.charCodeAt(this.pos);
    if (s === e)
      break;
    s === 92 ? (i += this.input.slice(r, this.pos), i += this.readEscapedChar(!1), r = this.pos) : (ai(s, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return i += this.input.slice(r, this.pos++), this.finishToken(y.string, i);
};
var ys = {};
we.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === ys)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
we.invalidStringToken = function(e, i) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw ys;
  this.raise(e, i);
};
we.readTmplToken = function() {
  for (var e = "", i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || r === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === y.template || this.type === y.invalidTemplate) ? r === 36 ? (this.pos += 2, this.finishToken(y.dollarBraceL)) : (++this.pos, this.finishToken(y.backQuote)) : (e += this.input.slice(i, this.pos), this.finishToken(y.template, e));
    if (r === 92)
      e += this.input.slice(i, this.pos), e += this.readEscapedChar(!0), i = this.pos;
    else if (ai(r)) {
      switch (e += this.input.slice(i, this.pos), ++this.pos, r) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), i = this.pos;
    } else
      ++this.pos;
  }
};
we.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{")
          break;
      case "`":
        return this.finishToken(y.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  this.raise(this.start, "Unterminated template");
};
we.readEscapedChar = function(e) {
  var i = this.input.charCodeAt(++this.pos);
  switch (++this.pos, i) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return br(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (e) {
        var r = this.pos - 1;
        return this.invalidStringToken(
          r,
          "Invalid escape sequence in template string"
        ), null;
      }
    default:
      if (i >= 48 && i <= 55) {
        var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], o = parseInt(s, 8);
        return o > 255 && (s = s.slice(0, -1), o = parseInt(s, 8)), this.pos += s.length - 1, i = this.input.charCodeAt(this.pos), (s !== "0" || i === 56 || i === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - s.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(o);
      }
      return ai(i) ? "" : String.fromCharCode(i);
  }
};
we.readHexChar = function(e) {
  var i = this.pos, r = this.readInt(16, e);
  return r === null && this.invalidStringToken(i, "Bad character escape sequence"), r;
};
we.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", i = !0, r = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var o = this.fullCharCodeAtPos();
    if (Dt(o, s))
      this.pos += o <= 65535 ? 1 : 2;
    else if (o === 92) {
      this.containsEsc = !0, e += this.input.slice(r, this.pos);
      var l = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var f = this.readCodePoint();
      (i ? Ct : Dt)(f, s) || this.invalidStringToken(l, "Invalid Unicode escape"), e += br(f), r = this.pos;
    } else
      break;
    i = !1;
  }
  return e + this.input.slice(r, this.pos);
};
we.readWord = function() {
  var e = this.readWord1(), i = y.name;
  return this.keywords.test(e) && (i = fr[e]), this.finishToken(i, e);
};
var wo = "7.4.1";
Ge.acorn = {
  Parser: Ge,
  version: wo,
  defaultOptions: tr,
  Position: ei,
  SourceLocation: Ii,
  getLineInfo: Qn,
  Node: vr,
  TokenType: Ie,
  tokTypes: y,
  keywordTypes: fr,
  TokContext: lt,
  tokContexts: We,
  isIdentifierChar: Dt,
  isIdentifierStart: Ct,
  Token: yr,
  isNewLine: ai,
  lineBreak: ot,
  lineBreakG: Zt,
  nonASCIIwhitespace: Hn
};
var bs = { exports: {} }, Ao = {
  quot: '"',
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  frasl: "⁄",
  euro: "€",
  image: "ℑ",
  weierp: "℘",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  int: "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
}, Si = { exports: {} }, yn;
function bn() {
  return yn || (yn = 1, function(e, i) {
    (function(r, s) {
      s(i);
    })(Bt, function(r) {
      var s = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], o = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], l = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", f = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", v = {
        3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
        5: "class enum extends super const export import",
        6: "enum",
        strict: "implements interface let package private protected public static yield",
        strictBind: "eval arguments"
      }, x = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", _ = {
        5: x,
        "5module": x + " export import",
        6: x + " const class extends export import super"
      }, b = /^in(stanceof)?$/, A = new RegExp("[" + f + "]"), P = new RegExp("[" + f + l + "]");
      function k(t, n) {
        for (var c = 65536, p = 0; p < n.length; p += 2) {
          if (c += n[p], c > t)
            return !1;
          if (c += n[p + 1], c >= t)
            return !0;
        }
        return !1;
      }
      function T(t, n) {
        return t < 65 ? t === 36 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && A.test(String.fromCharCode(t)) : n === !1 ? !1 : k(t, o);
      }
      function E(t, n) {
        return t < 48 ? t === 36 : t < 58 ? !0 : t < 65 ? !1 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && P.test(String.fromCharCode(t)) : n === !1 ? !1 : k(t, o) || k(t, s);
      }
      var w = function(n, c) {
        c === void 0 && (c = {}), this.label = n, this.keyword = c.keyword, this.beforeExpr = !!c.beforeExpr, this.startsExpr = !!c.startsExpr, this.isLoop = !!c.isLoop, this.isAssign = !!c.isAssign, this.prefix = !!c.prefix, this.postfix = !!c.postfix, this.binop = c.binop || null, this.updateContext = null;
      };
      function B(t, n) {
        return new w(t, { beforeExpr: !0, binop: n });
      }
      var j = { beforeExpr: !0 }, U = { startsExpr: !0 }, N = {};
      function g(t, n) {
        return n === void 0 && (n = {}), n.keyword = t, N[t] = new w(t, n);
      }
      var u = {
        num: new w("num", U),
        regexp: new w("regexp", U),
        string: new w("string", U),
        name: new w("name", U),
        privateId: new w("privateId", U),
        eof: new w("eof"),
        // Punctuation token types.
        bracketL: new w("[", { beforeExpr: !0, startsExpr: !0 }),
        bracketR: new w("]"),
        braceL: new w("{", { beforeExpr: !0, startsExpr: !0 }),
        braceR: new w("}"),
        parenL: new w("(", { beforeExpr: !0, startsExpr: !0 }),
        parenR: new w(")"),
        comma: new w(",", j),
        semi: new w(";", j),
        colon: new w(":", j),
        dot: new w("."),
        question: new w("?", j),
        questionDot: new w("?."),
        arrow: new w("=>", j),
        template: new w("template"),
        invalidTemplate: new w("invalidTemplate"),
        ellipsis: new w("...", j),
        backQuote: new w("`", U),
        dollarBraceL: new w("${", { beforeExpr: !0, startsExpr: !0 }),
        // Operators. These carry several kinds of properties to help the
        // parser use them properly (the presence of these properties is
        // what categorizes them as operators).
        //
        // `binop`, when present, specifies that this operator is a binary
        // operator, and will refer to its precedence.
        //
        // `prefix` and `postfix` mark the operator as a prefix or postfix
        // unary operator.
        //
        // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
        // binary operators with a very low precedence, that should result
        // in AssignmentExpression nodes.
        eq: new w("=", { beforeExpr: !0, isAssign: !0 }),
        assign: new w("_=", { beforeExpr: !0, isAssign: !0 }),
        incDec: new w("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
        prefix: new w("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        logicalOR: B("||", 1),
        logicalAND: B("&&", 2),
        bitwiseOR: B("|", 3),
        bitwiseXOR: B("^", 4),
        bitwiseAND: B("&", 5),
        equality: B("==/!=/===/!==", 6),
        relational: B("</>/<=/>=", 7),
        bitShift: B("<</>>/>>>", 8),
        plusMin: new w("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
        modulo: B("%", 10),
        star: B("*", 10),
        slash: B("/", 10),
        starstar: new w("**", { beforeExpr: !0 }),
        coalesce: B("??", 1),
        // Keyword token types.
        _break: g("break"),
        _case: g("case", j),
        _catch: g("catch"),
        _continue: g("continue"),
        _debugger: g("debugger"),
        _default: g("default", j),
        _do: g("do", { isLoop: !0, beforeExpr: !0 }),
        _else: g("else", j),
        _finally: g("finally"),
        _for: g("for", { isLoop: !0 }),
        _function: g("function", U),
        _if: g("if"),
        _return: g("return", j),
        _switch: g("switch"),
        _throw: g("throw", j),
        _try: g("try"),
        _var: g("var"),
        _const: g("const"),
        _while: g("while", { isLoop: !0 }),
        _with: g("with"),
        _new: g("new", { beforeExpr: !0, startsExpr: !0 }),
        _this: g("this", U),
        _super: g("super", U),
        _class: g("class", U),
        _extends: g("extends", j),
        _export: g("export"),
        _import: g("import", U),
        _null: g("null", U),
        _true: g("true", U),
        _false: g("false", U),
        _in: g("in", { beforeExpr: !0, binop: 7 }),
        _instanceof: g("instanceof", { beforeExpr: !0, binop: 7 }),
        _typeof: g("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        _void: g("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        _delete: g("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
      }, I = /\r\n?|\n|\u2028|\u2029/, L = new RegExp(I.source, "g");
      function Y(t) {
        return t === 10 || t === 13 || t === 8232 || t === 8233;
      }
      function H(t, n, c) {
        c === void 0 && (c = t.length);
        for (var p = n; p < c; p++) {
          var C = t.charCodeAt(p);
          if (Y(C))
            return p < c - 1 && C === 13 && t.charCodeAt(p + 1) === 10 ? p + 2 : p + 1;
        }
        return -1;
      }
      var ne = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, ee = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, J = Object.prototype, he = J.hasOwnProperty, Te = J.toString, be = Object.hasOwn || function(t, n) {
        return he.call(t, n);
      }, Ce = Array.isArray || function(t) {
        return Te.call(t) === "[object Array]";
      }, fe = /* @__PURE__ */ Object.create(null);
      function Ve(t) {
        return fe[t] || (fe[t] = new RegExp("^(?:" + t.replace(/ /g, "|") + ")$"));
      }
      function D(t) {
        return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
      }
      var X = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, M = function(n, c) {
        this.line = n, this.column = c;
      };
      M.prototype.offset = function(n) {
        return new M(this.line, this.column + n);
      };
      var ae = function(n, c, p) {
        this.start = c, this.end = p, n.sourceFile !== null && (this.source = n.sourceFile);
      };
      function oe(t, n) {
        for (var c = 1, p = 0; ; ) {
          var C = H(t, p, n);
          if (C < 0)
            return new M(c, n - p);
          ++c, p = C;
        }
      }
      var le = {
        // `ecmaVersion` indicates the ECMAScript version to parse. Must be
        // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
        // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
        // (the latest version the library supports). This influences
        // support for strict mode, the set of reserved words, and support
        // for new syntax features.
        ecmaVersion: null,
        // `sourceType` indicates the mode the code should be parsed in.
        // Can be either `"script"` or `"module"`. This influences global
        // strict mode and parsing of `import` and `export` declarations.
        sourceType: "script",
        // `onInsertedSemicolon` can be a callback that will be called when
        // a semicolon is automatically inserted. It will be passed the
        // position of the inserted semicolon as an offset, and if
        // `locations` is enabled, it is given the location as a `{line,
        // column}` object as second argument.
        onInsertedSemicolon: null,
        // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
        // trailing commas.
        onTrailingComma: null,
        // By default, reserved words are only enforced if ecmaVersion >= 5.
        // Set `allowReserved` to a boolean value to explicitly turn this on
        // an off. When this option has the value "never", reserved words
        // and keywords can also not be used as property names.
        allowReserved: null,
        // When enabled, a return at the top level is not considered an
        // error.
        allowReturnOutsideFunction: !1,
        // When enabled, import/export statements are not constrained to
        // appearing at the top of the program, and an import.meta expression
        // in a script isn't considered an error.
        allowImportExportEverywhere: !1,
        // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
        // When enabled, await identifiers are allowed to appear at the top-level scope,
        // but they are still not allowed in non-async functions.
        allowAwaitOutsideFunction: null,
        // When enabled, super identifiers are not constrained to
        // appearing in methods and do not raise an error when they appear elsewhere.
        allowSuperOutsideMethod: null,
        // When enabled, hashbang directive in the beginning of file is
        // allowed and treated as a line comment. Enabled by default when
        // `ecmaVersion` >= 2023.
        allowHashBang: !1,
        // By default, the parser will verify that private properties are
        // only used in places where they are valid and have been declared.
        // Set this to false to turn such checks off.
        checkPrivateFields: !0,
        // When `locations` is on, `loc` properties holding objects with
        // `start` and `end` properties in `{line, column}` form (with
        // line being 1-based and column 0-based) will be attached to the
        // nodes.
        locations: !1,
        // A function can be passed as `onToken` option, which will
        // cause Acorn to call that function with object in the same
        // format as tokens returned from `tokenizer().getToken()`. Note
        // that you are not allowed to call the parser from the
        // callback—that will corrupt its internal state.
        onToken: null,
        // A function can be passed as `onComment` option, which will
        // cause Acorn to call that function with `(block, text, start,
        // end)` parameters whenever a comment is skipped. `block` is a
        // boolean indicating whether this is a block (`/* */`) comment,
        // `text` is the content of the comment, and `start` and `end` are
        // character offsets that denote the start and end of the comment.
        // When the `locations` option is on, two more parameters are
        // passed, the full `{line, column}` locations of the start and
        // end of the comments. Note that you are not allowed to call the
        // parser from the callback—that will corrupt its internal state.
        // When this option has an array as value, objects representing the
        // comments are pushed to it.
        onComment: null,
        // Nodes have their start and end characters offsets recorded in
        // `start` and `end` properties (directly on the node, rather than
        // the `loc` object, which holds line/column data. To also add a
        // [semi-standardized][range] `range` property holding a `[start,
        // end]` array with the same numbers, set the `ranges` option to
        // `true`.
        //
        // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
        ranges: !1,
        // It is possible to parse multiple files into a single AST by
        // passing the tree produced by parsing the first file as
        // `program` option in subsequent parses. This will add the
        // toplevel forms of the parsed file to the `Program` (top) node
        // of an existing parse tree.
        program: null,
        // When `locations` is on, you can pass this to record the source
        // file in every node's `loc` object.
        sourceFile: null,
        // This value, if given, is stored in every node, whether
        // `locations` is on or off.
        directSourceFile: null,
        // When enabled, parenthesized expressions are represented by
        // (non-standard) ParenthesizedExpression nodes
        preserveParens: !1
      }, K = !1;
      function ue(t) {
        var n = {};
        for (var c in le)
          n[c] = t && be(t, c) ? t[c] : le[c];
        if (n.ecmaVersion === "latest" ? n.ecmaVersion = 1e8 : n.ecmaVersion == null ? (!K && typeof console == "object" && console.warn && (K = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), n.ecmaVersion = 11) : n.ecmaVersion >= 2015 && (n.ecmaVersion -= 2009), n.allowReserved == null && (n.allowReserved = n.ecmaVersion < 5), (!t || t.allowHashBang == null) && (n.allowHashBang = n.ecmaVersion >= 14), Ce(n.onToken)) {
          var p = n.onToken;
          n.onToken = function(C) {
            return p.push(C);
          };
        }
        return Ce(n.onComment) && (n.onComment = me(n, n.onComment)), n;
      }
      function me(t, n) {
        return function(c, p, C, R, O, W) {
          var $ = {
            type: c ? "Block" : "Line",
            value: p,
            start: C,
            end: R
          };
          t.locations && ($.loc = new ae(this, O, W)), t.ranges && ($.range = [C, R]), n.push($);
        };
      }
      var xe = 1, pe = 2, De = 4, G = 8, Ye = 16, Q = 32, Ke = 64, tt = 128, ct = 256, Nt = xe | pe | ct;
      function Wt(t, n) {
        return pe | (t ? De : 0) | (n ? G : 0);
      }
      var Rt = 0, Gt = 1, ut = 2, ci = 3, zt = 4, ke = 5, ge = function(n, c, p) {
        this.options = n = ue(n), this.sourceFile = n.sourceFile, this.keywords = Ve(_[n.ecmaVersion >= 6 ? 6 : n.sourceType === "module" ? "5module" : 5]);
        var C = "";
        n.allowReserved !== !0 && (C = v[n.ecmaVersion >= 6 ? 6 : n.ecmaVersion === 5 ? 5 : 3], n.sourceType === "module" && (C += " await")), this.reservedWords = Ve(C);
        var R = (C ? C + " " : "") + v.strict;
        this.reservedWordsStrict = Ve(R), this.reservedWordsStrictBind = Ve(R + " " + v.strictBind), this.input = String(c), this.containsEsc = !1, p ? (this.pos = p, this.lineStart = this.input.lastIndexOf(`
`, p - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(I).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = u.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = n.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && n.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(xe), this.regexpState = null, this.privateNameStack = [];
      }, re = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
      ge.prototype.parse = function() {
        var n = this.options.program || this.startNode();
        return this.nextToken(), this.parseTopLevel(n);
      }, re.inFunction.get = function() {
        return (this.currentVarScope().flags & pe) > 0;
      }, re.inGenerator.get = function() {
        return (this.currentVarScope().flags & G) > 0 && !this.currentVarScope().inClassFieldInit;
      }, re.inAsync.get = function() {
        return (this.currentVarScope().flags & De) > 0 && !this.currentVarScope().inClassFieldInit;
      }, re.canAwait.get = function() {
        for (var t = this.scopeStack.length - 1; t >= 0; t--) {
          var n = this.scopeStack[t];
          if (n.inClassFieldInit || n.flags & ct)
            return !1;
          if (n.flags & pe)
            return (n.flags & De) > 0;
        }
        return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
      }, re.allowSuper.get = function() {
        var t = this.currentThisScope(), n = t.flags, c = t.inClassFieldInit;
        return (n & Ke) > 0 || c || this.options.allowSuperOutsideMethod;
      }, re.allowDirectSuper.get = function() {
        return (this.currentThisScope().flags & tt) > 0;
      }, re.treatFunctionsAsVar.get = function() {
        return this.treatFunctionsAsVarInScope(this.currentScope());
      }, re.allowNewDotTarget.get = function() {
        var t = this.currentThisScope(), n = t.flags, c = t.inClassFieldInit;
        return (n & (pe | ct)) > 0 || c;
      }, re.inClassStaticBlock.get = function() {
        return (this.currentVarScope().flags & ct) > 0;
      }, ge.extend = function() {
        for (var n = [], c = arguments.length; c--; )
          n[c] = arguments[c];
        for (var p = this, C = 0; C < n.length; C++)
          p = n[C](p);
        return p;
      }, ge.parse = function(n, c) {
        return new this(c, n).parse();
      }, ge.parseExpressionAt = function(n, c, p) {
        var C = new this(p, n, c);
        return C.nextToken(), C.parseExpression();
      }, ge.tokenizer = function(n, c) {
        return new this(c, n);
      }, Object.defineProperties(ge.prototype, re);
      var Pe = ge.prototype, je = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
      Pe.strictDirective = function(t) {
        if (this.options.ecmaVersion < 5)
          return !1;
        for (; ; ) {
          ee.lastIndex = t, t += ee.exec(this.input)[0].length;
          var n = je.exec(this.input.slice(t));
          if (!n)
            return !1;
          if ((n[1] || n[2]) === "use strict") {
            ee.lastIndex = t + n[0].length;
            var c = ee.exec(this.input), p = c.index + c[0].length, C = this.input.charAt(p);
            return C === ";" || C === "}" || I.test(c[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(C) || C === "!" && this.input.charAt(p + 1) === "=");
          }
          t += n[0].length, ee.lastIndex = t, t += ee.exec(this.input)[0].length, this.input[t] === ";" && t++;
        }
      }, Pe.eat = function(t) {
        return this.type === t ? (this.next(), !0) : !1;
      }, Pe.isContextual = function(t) {
        return this.type === u.name && this.value === t && !this.containsEsc;
      }, Pe.eatContextual = function(t) {
        return this.isContextual(t) ? (this.next(), !0) : !1;
      }, Pe.expectContextual = function(t) {
        this.eatContextual(t) || this.unexpected();
      }, Pe.canInsertSemicolon = function() {
        return this.type === u.eof || this.type === u.braceR || I.test(this.input.slice(this.lastTokEnd, this.start));
      }, Pe.insertSemicolon = function() {
        if (this.canInsertSemicolon())
          return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
      }, Pe.semicolon = function() {
        !this.eat(u.semi) && !this.insertSemicolon() && this.unexpected();
      }, Pe.afterTrailingComma = function(t, n) {
        if (this.type === t)
          return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), n || this.next(), !0;
      }, Pe.expect = function(t) {
        this.eat(t) || this.unexpected();
      }, Pe.unexpected = function(t) {
        this.raise(t ?? this.start, "Unexpected token");
      };
      var Lt = function() {
        this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
      };
      Pe.checkPatternErrors = function(t, n) {
        if (t) {
          t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
          var c = n ? t.parenthesizedAssign : t.parenthesizedBind;
          c > -1 && this.raiseRecoverable(c, n ? "Assigning to rvalue" : "Parenthesized pattern");
        }
      }, Pe.checkExpressionErrors = function(t, n) {
        if (!t)
          return !1;
        var c = t.shorthandAssign, p = t.doubleProto;
        if (!n)
          return c >= 0 || p >= 0;
        c >= 0 && this.raise(c, "Shorthand property assignments are valid only in destructuring patterns"), p >= 0 && this.raiseRecoverable(p, "Redefinition of __proto__ property");
      }, Pe.checkYieldAwaitInDefaultParams = function() {
        this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
      }, Pe.isSimpleAssignTarget = function(t) {
        return t.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(t.expression) : t.type === "Identifier" || t.type === "MemberExpression";
      };
      var ie = ge.prototype;
      ie.parseTopLevel = function(t) {
        var n = /* @__PURE__ */ Object.create(null);
        for (t.body || (t.body = []); this.type !== u.eof; ) {
          var c = this.parseStatement(null, !0, n);
          t.body.push(c);
        }
        if (this.inModule)
          for (var p = 0, C = Object.keys(this.undefinedExports); p < C.length; p += 1) {
            var R = C[p];
            this.raiseRecoverable(this.undefinedExports[R].start, "Export '" + R + "' is not defined");
          }
        return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program");
      };
      var Ze = { kind: "loop" }, hi = { kind: "switch" };
      ie.isLet = function(t) {
        if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
          return !1;
        ee.lastIndex = this.pos;
        var n = ee.exec(this.input), c = this.pos + n[0].length, p = this.input.charCodeAt(c);
        if (p === 91 || p === 92)
          return !0;
        if (t)
          return !1;
        if (p === 123 || p > 55295 && p < 56320)
          return !0;
        if (T(p, !0)) {
          for (var C = c + 1; E(p = this.input.charCodeAt(C), !0); )
            ++C;
          if (p === 92 || p > 55295 && p < 56320)
            return !0;
          var R = this.input.slice(c, C);
          if (!b.test(R))
            return !0;
        }
        return !1;
      }, ie.isAsyncFunction = function() {
        if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
          return !1;
        ee.lastIndex = this.pos;
        var t = ee.exec(this.input), n = this.pos + t[0].length, c;
        return !I.test(this.input.slice(this.pos, n)) && this.input.slice(n, n + 8) === "function" && (n + 8 === this.input.length || !(E(c = this.input.charCodeAt(n + 8)) || c > 55295 && c < 56320));
      }, ie.parseStatement = function(t, n, c) {
        var p = this.type, C = this.startNode(), R;
        switch (this.isLet(t) && (p = u._var, R = "let"), p) {
          case u._break:
          case u._continue:
            return this.parseBreakContinueStatement(C, p.keyword);
          case u._debugger:
            return this.parseDebuggerStatement(C);
          case u._do:
            return this.parseDoStatement(C);
          case u._for:
            return this.parseForStatement(C);
          case u._function:
            return t && (this.strict || t !== "if" && t !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(C, !1, !t);
          case u._class:
            return t && this.unexpected(), this.parseClass(C, !0);
          case u._if:
            return this.parseIfStatement(C);
          case u._return:
            return this.parseReturnStatement(C);
          case u._switch:
            return this.parseSwitchStatement(C);
          case u._throw:
            return this.parseThrowStatement(C);
          case u._try:
            return this.parseTryStatement(C);
          case u._const:
          case u._var:
            return R = R || this.value, t && R !== "var" && this.unexpected(), this.parseVarStatement(C, R);
          case u._while:
            return this.parseWhileStatement(C);
          case u._with:
            return this.parseWithStatement(C);
          case u.braceL:
            return this.parseBlock(!0, C);
          case u.semi:
            return this.parseEmptyStatement(C);
          case u._export:
          case u._import:
            if (this.options.ecmaVersion > 10 && p === u._import) {
              ee.lastIndex = this.pos;
              var O = ee.exec(this.input), W = this.pos + O[0].length, $ = this.input.charCodeAt(W);
              if ($ === 40 || $ === 46)
                return this.parseExpressionStatement(C, this.parseExpression());
            }
            return this.options.allowImportExportEverywhere || (n || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), p === u._import ? this.parseImport(C) : this.parseExport(C, c);
          default:
            if (this.isAsyncFunction())
              return t && this.unexpected(), this.next(), this.parseFunctionStatement(C, !0, !t);
            var ve = this.value, _e = this.parseExpression();
            return p === u.name && _e.type === "Identifier" && this.eat(u.colon) ? this.parseLabeledStatement(C, ve, _e, t) : this.parseExpressionStatement(C, _e);
        }
      }, ie.parseBreakContinueStatement = function(t, n) {
        var c = n === "break";
        this.next(), this.eat(u.semi) || this.insertSemicolon() ? t.label = null : this.type !== u.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
        for (var p = 0; p < this.labels.length; ++p) {
          var C = this.labels[p];
          if ((t.label == null || C.name === t.label.name) && (C.kind != null && (c || C.kind === "loop") || t.label && c))
            break;
        }
        return p === this.labels.length && this.raise(t.start, "Unsyntactic " + n), this.finishNode(t, c ? "BreakStatement" : "ContinueStatement");
      }, ie.parseDebuggerStatement = function(t) {
        return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
      }, ie.parseDoStatement = function(t) {
        return this.next(), this.labels.push(Ze), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(u._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(u.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement");
      }, ie.parseForStatement = function(t) {
        this.next();
        var n = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
        if (this.labels.push(Ze), this.enterScope(0), this.expect(u.parenL), this.type === u.semi)
          return n > -1 && this.unexpected(n), this.parseFor(t, null);
        var c = this.isLet();
        if (this.type === u._var || this.type === u._const || c) {
          var p = this.startNode(), C = c ? "let" : this.value;
          return this.next(), this.parseVar(p, !0, C), this.finishNode(p, "VariableDeclaration"), (this.type === u._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && p.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === u._in ? n > -1 && this.unexpected(n) : t.await = n > -1), this.parseForIn(t, p)) : (n > -1 && this.unexpected(n), this.parseFor(t, p));
        }
        var R = this.isContextual("let"), O = !1, W = new Lt(), $ = this.parseExpression(n > -1 ? "await" : !0, W);
        return this.type === u._in || (O = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (this.options.ecmaVersion >= 9 && (this.type === u._in ? n > -1 && this.unexpected(n) : t.await = n > -1), R && O && this.raise($.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable($, !1, W), this.checkLValPattern($), this.parseForIn(t, $)) : (this.checkExpressionErrors(W, !0), n > -1 && this.unexpected(n), this.parseFor(t, $));
      }, ie.parseFunctionStatement = function(t, n, c) {
        return this.next(), this.parseFunction(t, Be | (c ? 0 : Ot), !1, n);
      }, ie.parseIfStatement = function(t) {
        return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(u._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement");
      }, ie.parseReturnStatement = function(t) {
        return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(u.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
      }, ie.parseSwitchStatement = function(t) {
        this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(u.braceL), this.labels.push(hi), this.enterScope(0);
        for (var n, c = !1; this.type !== u.braceR; )
          if (this.type === u._case || this.type === u._default) {
            var p = this.type === u._case;
            n && this.finishNode(n, "SwitchCase"), t.cases.push(n = this.startNode()), n.consequent = [], this.next(), p ? n.test = this.parseExpression() : (c && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), c = !0, n.test = null), this.expect(u.colon);
          } else
            n || this.unexpected(), n.consequent.push(this.parseStatement(null));
        return this.exitScope(), n && this.finishNode(n, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement");
      }, ie.parseThrowStatement = function(t) {
        return this.next(), I.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
      };
      var bt = [];
      ie.parseCatchClauseParam = function() {
        var t = this.parseBindingAtom(), n = t.type === "Identifier";
        return this.enterScope(n ? Q : 0), this.checkLValPattern(t, n ? zt : ut), this.expect(u.parenR), t;
      }, ie.parseTryStatement = function(t) {
        if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === u._catch) {
          var n = this.startNode();
          this.next(), this.eat(u.parenL) ? n.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), n.param = null, this.enterScope(0)), n.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(n, "CatchClause");
        }
        return t.finalizer = this.eat(u._finally) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement");
      }, ie.parseVarStatement = function(t, n, c) {
        return this.next(), this.parseVar(t, !1, n, c), this.semicolon(), this.finishNode(t, "VariableDeclaration");
      }, ie.parseWhileStatement = function(t) {
        return this.next(), t.test = this.parseParenExpression(), this.labels.push(Ze), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement");
      }, ie.parseWithStatement = function(t) {
        return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement");
      }, ie.parseEmptyStatement = function(t) {
        return this.next(), this.finishNode(t, "EmptyStatement");
      }, ie.parseLabeledStatement = function(t, n, c, p) {
        for (var C = 0, R = this.labels; C < R.length; C += 1) {
          var O = R[C];
          O.name === n && this.raise(c.start, "Label '" + n + "' is already declared");
        }
        for (var W = this.type.isLoop ? "loop" : this.type === u._switch ? "switch" : null, $ = this.labels.length - 1; $ >= 0; $--) {
          var ve = this.labels[$];
          if (ve.statementStart === t.start)
            ve.statementStart = this.start, ve.kind = W;
          else
            break;
        }
        return this.labels.push({ name: n, kind: W, statementStart: this.start }), t.body = this.parseStatement(p ? p.indexOf("label") === -1 ? p + "label" : p : "label"), this.labels.pop(), t.label = c, this.finishNode(t, "LabeledStatement");
      }, ie.parseExpressionStatement = function(t, n) {
        return t.expression = n, this.semicolon(), this.finishNode(t, "ExpressionStatement");
      }, ie.parseBlock = function(t, n, c) {
        for (t === void 0 && (t = !0), n === void 0 && (n = this.startNode()), n.body = [], this.expect(u.braceL), t && this.enterScope(0); this.type !== u.braceR; ) {
          var p = this.parseStatement(null);
          n.body.push(p);
        }
        return c && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(n, "BlockStatement");
      }, ie.parseFor = function(t, n) {
        return t.init = n, this.expect(u.semi), t.test = this.type === u.semi ? null : this.parseExpression(), this.expect(u.semi), t.update = this.type === u.parenR ? null : this.parseExpression(), this.expect(u.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement");
      }, ie.parseForIn = function(t, n) {
        var c = this.type === u._in;
        return this.next(), n.type === "VariableDeclaration" && n.declarations[0].init != null && (!c || this.options.ecmaVersion < 8 || this.strict || n.kind !== "var" || n.declarations[0].id.type !== "Identifier") && this.raise(
          n.start,
          (c ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
        ), t.left = n, t.right = c ? this.parseExpression() : this.parseMaybeAssign(), this.expect(u.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, c ? "ForInStatement" : "ForOfStatement");
      }, ie.parseVar = function(t, n, c, p) {
        for (t.declarations = [], t.kind = c; ; ) {
          var C = this.startNode();
          if (this.parseVarId(C, c), this.eat(u.eq) ? C.init = this.parseMaybeAssign(n) : !p && c === "const" && !(this.type === u._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !p && C.id.type !== "Identifier" && !(n && (this.type === u._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : C.init = null, t.declarations.push(this.finishNode(C, "VariableDeclarator")), !this.eat(u.comma))
            break;
        }
        return t;
      }, ie.parseVarId = function(t, n) {
        t.id = this.parseBindingAtom(), this.checkLValPattern(t.id, n === "var" ? Gt : ut, !1);
      };
      var Be = 1, Ot = 2, fi = 4;
      ie.parseFunction = function(t, n, c, p, C) {
        this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !p) && (this.type === u.star && n & Ot && this.unexpected(), t.generator = this.eat(u.star)), this.options.ecmaVersion >= 8 && (t.async = !!p), n & Be && (t.id = n & fi && this.type !== u.name ? null : this.parseIdent(), t.id && !(n & Ot) && this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? Gt : ut : ci));
        var R = this.yieldPos, O = this.awaitPos, W = this.awaitIdentPos;
        return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Wt(t.async, t.generator)), n & Be || (t.id = this.type === u.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, c, !1, C), this.yieldPos = R, this.awaitPos = O, this.awaitIdentPos = W, this.finishNode(t, n & Be ? "FunctionDeclaration" : "FunctionExpression");
      }, ie.parseFunctionParams = function(t) {
        this.expect(u.parenL), t.params = this.parseBindingList(u.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
      }, ie.parseClass = function(t, n) {
        this.next();
        var c = this.strict;
        this.strict = !0, this.parseClassId(t, n), this.parseClassSuper(t);
        var p = this.enterClassBody(), C = this.startNode(), R = !1;
        for (C.body = [], this.expect(u.braceL); this.type !== u.braceR; ) {
          var O = this.parseClassElement(t.superClass !== null);
          O && (C.body.push(O), O.type === "MethodDefinition" && O.kind === "constructor" ? (R && this.raiseRecoverable(O.start, "Duplicate constructor in the same class"), R = !0) : O.key && O.key.type === "PrivateIdentifier" && qe(p, O) && this.raiseRecoverable(O.key.start, "Identifier '#" + O.key.name + "' has already been declared"));
        }
        return this.strict = c, this.next(), t.body = this.finishNode(C, "ClassBody"), this.exitClassBody(), this.finishNode(t, n ? "ClassDeclaration" : "ClassExpression");
      }, ie.parseClassElement = function(t) {
        if (this.eat(u.semi))
          return null;
        var n = this.options.ecmaVersion, c = this.startNode(), p = "", C = !1, R = !1, O = "method", W = !1;
        if (this.eatContextual("static")) {
          if (n >= 13 && this.eat(u.braceL))
            return this.parseClassStaticBlock(c), c;
          this.isClassElementNameStart() || this.type === u.star ? W = !0 : p = "static";
        }
        if (c.static = W, !p && n >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === u.star) && !this.canInsertSemicolon() ? R = !0 : p = "async"), !p && (n >= 9 || !R) && this.eat(u.star) && (C = !0), !p && !R && !C) {
          var $ = this.value;
          (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? O = $ : p = $);
        }
        if (p ? (c.computed = !1, c.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), c.key.name = p, this.finishNode(c.key, "Identifier")) : this.parseClassElementName(c), n < 13 || this.type === u.parenL || O !== "method" || C || R) {
          var ve = !c.static && $e(c, "constructor"), _e = ve && t;
          ve && O !== "method" && this.raise(c.key.start, "Constructor can't have get/set modifier"), c.kind = ve ? "constructor" : O, this.parseClassMethod(c, C, R, _e);
        } else
          this.parseClassField(c);
        return c;
      }, ie.isClassElementNameStart = function() {
        return this.type === u.name || this.type === u.privateId || this.type === u.num || this.type === u.string || this.type === u.bracketL || this.type.keyword;
      }, ie.parseClassElementName = function(t) {
        this.type === u.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), t.computed = !1, t.key = this.parsePrivateIdent()) : this.parsePropertyName(t);
      }, ie.parseClassMethod = function(t, n, c, p) {
        var C = t.key;
        t.kind === "constructor" ? (n && this.raise(C.start, "Constructor can't be a generator"), c && this.raise(C.start, "Constructor can't be an async method")) : t.static && $e(t, "prototype") && this.raise(C.start, "Classes may not have a static property named prototype");
        var R = t.value = this.parseMethod(n, c, p);
        return t.kind === "get" && R.params.length !== 0 && this.raiseRecoverable(R.start, "getter should have no params"), t.kind === "set" && R.params.length !== 1 && this.raiseRecoverable(R.start, "setter should have exactly one param"), t.kind === "set" && R.params[0].type === "RestElement" && this.raiseRecoverable(R.params[0].start, "Setter cannot use rest params"), this.finishNode(t, "MethodDefinition");
      }, ie.parseClassField = function(t) {
        if ($e(t, "constructor") ? this.raise(t.key.start, "Classes can't have a field named 'constructor'") : t.static && $e(t, "prototype") && this.raise(t.key.start, "Classes can't have a static field named 'prototype'"), this.eat(u.eq)) {
          var n = this.currentThisScope(), c = n.inClassFieldInit;
          n.inClassFieldInit = !0, t.value = this.parseMaybeAssign(), n.inClassFieldInit = c;
        } else
          t.value = null;
        return this.semicolon(), this.finishNode(t, "PropertyDefinition");
      }, ie.parseClassStaticBlock = function(t) {
        t.body = [];
        var n = this.labels;
        for (this.labels = [], this.enterScope(ct | Ke); this.type !== u.braceR; ) {
          var c = this.parseStatement(null);
          t.body.push(c);
        }
        return this.next(), this.exitScope(), this.labels = n, this.finishNode(t, "StaticBlock");
      }, ie.parseClassId = function(t, n) {
        this.type === u.name ? (t.id = this.parseIdent(), n && this.checkLValSimple(t.id, ut, !1)) : (n === !0 && this.unexpected(), t.id = null);
      }, ie.parseClassSuper = function(t) {
        t.superClass = this.eat(u._extends) ? this.parseExprSubscripts(null, !1) : null;
      }, ie.enterClassBody = function() {
        var t = { declared: /* @__PURE__ */ Object.create(null), used: [] };
        return this.privateNameStack.push(t), t.declared;
      }, ie.exitClassBody = function() {
        var t = this.privateNameStack.pop(), n = t.declared, c = t.used;
        if (this.options.checkPrivateFields)
          for (var p = this.privateNameStack.length, C = p === 0 ? null : this.privateNameStack[p - 1], R = 0; R < c.length; ++R) {
            var O = c[R];
            be(n, O.name) || (C ? C.used.push(O) : this.raiseRecoverable(O.start, "Private field '#" + O.name + "' must be declared in an enclosing class"));
          }
      };
      function qe(t, n) {
        var c = n.key.name, p = t[c], C = "true";
        return n.type === "MethodDefinition" && (n.kind === "get" || n.kind === "set") && (C = (n.static ? "s" : "i") + n.kind), p === "iget" && C === "iset" || p === "iset" && C === "iget" || p === "sget" && C === "sset" || p === "sset" && C === "sget" ? (t[c] = "true", !1) : p ? !0 : (t[c] = C, !1);
      }
      function $e(t, n) {
        var c = t.computed, p = t.key;
        return !c && (p.type === "Identifier" && p.name === n || p.type === "Literal" && p.value === n);
      }
      ie.parseExportAllDeclaration = function(t, n) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseModuleExportName(), this.checkExport(n, t.exported, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== u.string && this.unexpected(), t.source = this.parseExprAtom(), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
      }, ie.parseExport = function(t, n) {
        if (this.next(), this.eat(u.star))
          return this.parseExportAllDeclaration(t, n);
        if (this.eat(u._default))
          return this.checkExport(n, "default", this.lastTokStart), t.declaration = this.parseExportDefaultDeclaration(), this.finishNode(t, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement())
          t.declaration = this.parseExportDeclaration(t), t.declaration.type === "VariableDeclaration" ? this.checkVariableExport(n, t.declaration.declarations) : this.checkExport(n, t.declaration.id, t.declaration.id.start), t.specifiers = [], t.source = null;
        else {
          if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(n), this.eatContextual("from"))
            this.type !== u.string && this.unexpected(), t.source = this.parseExprAtom();
          else {
            for (var c = 0, p = t.specifiers; c < p.length; c += 1) {
              var C = p[c];
              this.checkUnreserved(C.local), this.checkLocalExport(C.local), C.local.type === "Literal" && this.raise(C.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            t.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(t, "ExportNamedDeclaration");
      }, ie.parseExportDeclaration = function(t) {
        return this.parseStatement(null);
      }, ie.parseExportDefaultDeclaration = function() {
        var t;
        if (this.type === u._function || (t = this.isAsyncFunction())) {
          var n = this.startNode();
          return this.next(), t && this.next(), this.parseFunction(n, Be | fi, !1, t);
        } else if (this.type === u._class) {
          var c = this.startNode();
          return this.parseClass(c, "nullableID");
        } else {
          var p = this.parseMaybeAssign();
          return this.semicolon(), p;
        }
      }, ie.checkExport = function(t, n, c) {
        t && (typeof n != "string" && (n = n.type === "Identifier" ? n.name : n.value), be(t, n) && this.raiseRecoverable(c, "Duplicate export '" + n + "'"), t[n] = !0);
      }, ie.checkPatternExport = function(t, n) {
        var c = n.type;
        if (c === "Identifier")
          this.checkExport(t, n, n.start);
        else if (c === "ObjectPattern")
          for (var p = 0, C = n.properties; p < C.length; p += 1) {
            var R = C[p];
            this.checkPatternExport(t, R);
          }
        else if (c === "ArrayPattern")
          for (var O = 0, W = n.elements; O < W.length; O += 1) {
            var $ = W[O];
            $ && this.checkPatternExport(t, $);
          }
        else
          c === "Property" ? this.checkPatternExport(t, n.value) : c === "AssignmentPattern" ? this.checkPatternExport(t, n.left) : c === "RestElement" && this.checkPatternExport(t, n.argument);
      }, ie.checkVariableExport = function(t, n) {
        if (t)
          for (var c = 0, p = n; c < p.length; c += 1) {
            var C = p[c];
            this.checkPatternExport(t, C.id);
          }
      }, ie.shouldParseExportStatement = function() {
        return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
      }, ie.parseExportSpecifier = function(t) {
        var n = this.startNode();
        return n.local = this.parseModuleExportName(), n.exported = this.eatContextual("as") ? this.parseModuleExportName() : n.local, this.checkExport(
          t,
          n.exported,
          n.exported.start
        ), this.finishNode(n, "ExportSpecifier");
      }, ie.parseExportSpecifiers = function(t) {
        var n = [], c = !0;
        for (this.expect(u.braceL); !this.eat(u.braceR); ) {
          if (c)
            c = !1;
          else if (this.expect(u.comma), this.afterTrailingComma(u.braceR))
            break;
          n.push(this.parseExportSpecifier(t));
        }
        return n;
      }, ie.parseImport = function(t) {
        return this.next(), this.type === u.string ? (t.specifiers = bt, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === u.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(t, "ImportDeclaration");
      }, ie.parseImportSpecifier = function() {
        var t = this.startNode();
        return t.imported = this.parseModuleExportName(), this.eatContextual("as") ? t.local = this.parseIdent() : (this.checkUnreserved(t.imported), t.local = t.imported), this.checkLValSimple(t.local, ut), this.finishNode(t, "ImportSpecifier");
      }, ie.parseImportDefaultSpecifier = function() {
        var t = this.startNode();
        return t.local = this.parseIdent(), this.checkLValSimple(t.local, ut), this.finishNode(t, "ImportDefaultSpecifier");
      }, ie.parseImportNamespaceSpecifier = function() {
        var t = this.startNode();
        return this.next(), this.expectContextual("as"), t.local = this.parseIdent(), this.checkLValSimple(t.local, ut), this.finishNode(t, "ImportNamespaceSpecifier");
      }, ie.parseImportSpecifiers = function() {
        var t = [], n = !0;
        if (this.type === u.name && (t.push(this.parseImportDefaultSpecifier()), !this.eat(u.comma)))
          return t;
        if (this.type === u.star)
          return t.push(this.parseImportNamespaceSpecifier()), t;
        for (this.expect(u.braceL); !this.eat(u.braceR); ) {
          if (n)
            n = !1;
          else if (this.expect(u.comma), this.afterTrailingComma(u.braceR))
            break;
          t.push(this.parseImportSpecifier());
        }
        return t;
      }, ie.parseModuleExportName = function() {
        if (this.options.ecmaVersion >= 13 && this.type === u.string) {
          var t = this.parseLiteral(this.value);
          return X.test(t.value) && this.raise(t.start, "An export name cannot include a lone surrogate."), t;
        }
        return this.parseIdent(!0);
      }, ie.adaptDirectivePrologue = function(t) {
        for (var n = 0; n < t.length && this.isDirectiveCandidate(t[n]); ++n)
          t[n].directive = t[n].expression.raw.slice(1, -1);
      }, ie.isDirectiveCandidate = function(t) {
        return this.options.ecmaVersion >= 5 && t.type === "ExpressionStatement" && t.expression.type === "Literal" && typeof t.expression.value == "string" && // Reject parenthesized strings.
        (this.input[t.start] === '"' || this.input[t.start] === "'");
      };
      var He = ge.prototype;
      He.toAssignable = function(t, n, c) {
        if (this.options.ecmaVersion >= 6 && t)
          switch (t.type) {
            case "Identifier":
              this.inAsync && t.name === "await" && this.raise(t.start, "Cannot use 'await' as identifier inside an async function");
              break;
            case "ObjectPattern":
            case "ArrayPattern":
            case "AssignmentPattern":
            case "RestElement":
              break;
            case "ObjectExpression":
              t.type = "ObjectPattern", c && this.checkPatternErrors(c, !0);
              for (var p = 0, C = t.properties; p < C.length; p += 1) {
                var R = C[p];
                this.toAssignable(R, n), R.type === "RestElement" && (R.argument.type === "ArrayPattern" || R.argument.type === "ObjectPattern") && this.raise(R.argument.start, "Unexpected token");
              }
              break;
            case "Property":
              t.kind !== "init" && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, n);
              break;
            case "ArrayExpression":
              t.type = "ArrayPattern", c && this.checkPatternErrors(c, !0), this.toAssignableList(t.elements, n);
              break;
            case "SpreadElement":
              t.type = "RestElement", this.toAssignable(t.argument, n), t.argument.type === "AssignmentPattern" && this.raise(t.argument.start, "Rest elements cannot have a default value");
              break;
            case "AssignmentExpression":
              t.operator !== "=" && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, n);
              break;
            case "ParenthesizedExpression":
              this.toAssignable(t.expression, n, c);
              break;
            case "ChainExpression":
              this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
              break;
            case "MemberExpression":
              if (!n)
                break;
            default:
              this.raise(t.start, "Assigning to rvalue");
          }
        else
          c && this.checkPatternErrors(c, !0);
        return t;
      }, He.toAssignableList = function(t, n) {
        for (var c = t.length, p = 0; p < c; p++) {
          var C = t[p];
          C && this.toAssignable(C, n);
        }
        if (c) {
          var R = t[c - 1];
          this.options.ecmaVersion === 6 && n && R && R.type === "RestElement" && R.argument.type !== "Identifier" && this.unexpected(R.argument.start);
        }
        return t;
      }, He.parseSpread = function(t) {
        var n = this.startNode();
        return this.next(), n.argument = this.parseMaybeAssign(!1, t), this.finishNode(n, "SpreadElement");
      }, He.parseRestBinding = function() {
        var t = this.startNode();
        return this.next(), this.options.ecmaVersion === 6 && this.type !== u.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
      }, He.parseBindingAtom = function() {
        if (this.options.ecmaVersion >= 6)
          switch (this.type) {
            case u.bracketL:
              var t = this.startNode();
              return this.next(), t.elements = this.parseBindingList(u.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
            case u.braceL:
              return this.parseObj(!0);
          }
        return this.parseIdent();
      }, He.parseBindingList = function(t, n, c, p) {
        for (var C = [], R = !0; !this.eat(t); )
          if (R ? R = !1 : this.expect(u.comma), n && this.type === u.comma)
            C.push(null);
          else {
            if (c && this.afterTrailingComma(t))
              break;
            if (this.type === u.ellipsis) {
              var O = this.parseRestBinding();
              this.parseBindingListItem(O), C.push(O), this.type === u.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(t);
              break;
            } else
              C.push(this.parseAssignableListItem(p));
          }
        return C;
      }, He.parseAssignableListItem = function(t) {
        var n = this.parseMaybeDefault(this.start, this.startLoc);
        return this.parseBindingListItem(n), n;
      }, He.parseBindingListItem = function(t) {
        return t;
      }, He.parseMaybeDefault = function(t, n, c) {
        if (c = c || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(u.eq))
          return c;
        var p = this.startNodeAt(t, n);
        return p.left = c, p.right = this.parseMaybeAssign(), this.finishNode(p, "AssignmentPattern");
      }, He.checkLValSimple = function(t, n, c) {
        n === void 0 && (n = Rt);
        var p = n !== Rt;
        switch (t.type) {
          case "Identifier":
            this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (p ? "Binding " : "Assigning to ") + t.name + " in strict mode"), p && (n === ut && t.name === "let" && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), c && (be(c, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), c[t.name] = !0), n !== ke && this.declareName(t.name, n, t.start));
            break;
          case "ChainExpression":
            this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
            break;
          case "MemberExpression":
            p && this.raiseRecoverable(t.start, "Binding member expression");
            break;
          case "ParenthesizedExpression":
            return p && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, n, c);
          default:
            this.raise(t.start, (p ? "Binding" : "Assigning to") + " rvalue");
        }
      }, He.checkLValPattern = function(t, n, c) {
        switch (n === void 0 && (n = Rt), t.type) {
          case "ObjectPattern":
            for (var p = 0, C = t.properties; p < C.length; p += 1) {
              var R = C[p];
              this.checkLValInnerPattern(R, n, c);
            }
            break;
          case "ArrayPattern":
            for (var O = 0, W = t.elements; O < W.length; O += 1) {
              var $ = W[O];
              $ && this.checkLValInnerPattern($, n, c);
            }
            break;
          default:
            this.checkLValSimple(t, n, c);
        }
      }, He.checkLValInnerPattern = function(t, n, c) {
        switch (n === void 0 && (n = Rt), t.type) {
          case "Property":
            this.checkLValInnerPattern(t.value, n, c);
            break;
          case "AssignmentPattern":
            this.checkLValPattern(t.left, n, c);
            break;
          case "RestElement":
            this.checkLValPattern(t.argument, n, c);
            break;
          default:
            this.checkLValPattern(t, n, c);
        }
      };
      var Qe = function(n, c, p, C, R) {
        this.token = n, this.isExpr = !!c, this.preserveSpace = !!p, this.override = C, this.generator = !!R;
      }, Fe = {
        b_stat: new Qe("{", !1),
        b_expr: new Qe("{", !0),
        b_tmpl: new Qe("${", !1),
        p_stat: new Qe("(", !1),
        p_expr: new Qe("(", !0),
        q_tmpl: new Qe("`", !0, !0, function(t) {
          return t.tryReadTemplateToken();
        }),
        f_stat: new Qe("function", !1),
        f_expr: new Qe("function", !0),
        f_expr_gen: new Qe("function", !0, !1, null, !0),
        f_gen: new Qe("function", !1, !1, null, !0)
      }, St = ge.prototype;
      St.initialContext = function() {
        return [Fe.b_stat];
      }, St.curContext = function() {
        return this.context[this.context.length - 1];
      }, St.braceIsBlock = function(t) {
        var n = this.curContext();
        return n === Fe.f_expr || n === Fe.f_stat ? !0 : t === u.colon && (n === Fe.b_stat || n === Fe.b_expr) ? !n.isExpr : t === u._return || t === u.name && this.exprAllowed ? I.test(this.input.slice(this.lastTokEnd, this.start)) : t === u._else || t === u.semi || t === u.eof || t === u.parenR || t === u.arrow ? !0 : t === u.braceL ? n === Fe.b_stat : t === u._var || t === u._const || t === u.name ? !1 : !this.exprAllowed;
      }, St.inGeneratorContext = function() {
        for (var t = this.context.length - 1; t >= 1; t--) {
          var n = this.context[t];
          if (n.token === "function")
            return n.generator;
        }
        return !1;
      }, St.updateContext = function(t) {
        var n, c = this.type;
        c.keyword && t === u.dot ? this.exprAllowed = !1 : (n = c.updateContext) ? n.call(this, t) : this.exprAllowed = c.beforeExpr;
      }, St.overrideContext = function(t) {
        this.curContext() !== t && (this.context[this.context.length - 1] = t);
      }, u.parenR.updateContext = u.braceR.updateContext = function() {
        if (this.context.length === 1) {
          this.exprAllowed = !0;
          return;
        }
        var t = this.context.pop();
        t === Fe.b_stat && this.curContext().token === "function" && (t = this.context.pop()), this.exprAllowed = !t.isExpr;
      }, u.braceL.updateContext = function(t) {
        this.context.push(this.braceIsBlock(t) ? Fe.b_stat : Fe.b_expr), this.exprAllowed = !0;
      }, u.dollarBraceL.updateContext = function() {
        this.context.push(Fe.b_tmpl), this.exprAllowed = !0;
      }, u.parenL.updateContext = function(t) {
        var n = t === u._if || t === u._for || t === u._with || t === u._while;
        this.context.push(n ? Fe.p_stat : Fe.p_expr), this.exprAllowed = !0;
      }, u.incDec.updateContext = function() {
      }, u._function.updateContext = u._class.updateContext = function(t) {
        t.beforeExpr && t !== u._else && !(t === u.semi && this.curContext() !== Fe.p_stat) && !(t === u._return && I.test(this.input.slice(this.lastTokEnd, this.start))) && !((t === u.colon || t === u.braceL) && this.curContext() === Fe.b_stat) ? this.context.push(Fe.f_expr) : this.context.push(Fe.f_stat), this.exprAllowed = !1;
      }, u.colon.updateContext = function() {
        this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
      }, u.backQuote.updateContext = function() {
        this.curContext() === Fe.q_tmpl ? this.context.pop() : this.context.push(Fe.q_tmpl), this.exprAllowed = !1;
      }, u.star.updateContext = function(t) {
        if (t === u._function) {
          var n = this.context.length - 1;
          this.context[n] === Fe.f_expr ? this.context[n] = Fe.f_expr_gen : this.context[n] = Fe.f_gen;
        }
        this.exprAllowed = !0;
      }, u.name.updateContext = function(t) {
        var n = !1;
        this.options.ecmaVersion >= 6 && t !== u.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (n = !0), this.exprAllowed = n;
      };
      var ce = ge.prototype;
      ce.checkPropClash = function(t, n, c) {
        if (!(this.options.ecmaVersion >= 9 && t.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
          var p = t.key, C;
          switch (p.type) {
            case "Identifier":
              C = p.name;
              break;
            case "Literal":
              C = String(p.value);
              break;
            default:
              return;
          }
          var R = t.kind;
          if (this.options.ecmaVersion >= 6) {
            C === "__proto__" && R === "init" && (n.proto && (c ? c.doubleProto < 0 && (c.doubleProto = p.start) : this.raiseRecoverable(p.start, "Redefinition of __proto__ property")), n.proto = !0);
            return;
          }
          C = "$" + C;
          var O = n[C];
          if (O) {
            var W;
            R === "init" ? W = this.strict && O.init || O.get || O.set : W = O.init || O[R], W && this.raiseRecoverable(p.start, "Redefinition of property");
          } else
            O = n[C] = {
              init: !1,
              get: !1,
              set: !1
            };
          O[R] = !0;
        }
      }, ce.parseExpression = function(t, n) {
        var c = this.start, p = this.startLoc, C = this.parseMaybeAssign(t, n);
        if (this.type === u.comma) {
          var R = this.startNodeAt(c, p);
          for (R.expressions = [C]; this.eat(u.comma); )
            R.expressions.push(this.parseMaybeAssign(t, n));
          return this.finishNode(R, "SequenceExpression");
        }
        return C;
      }, ce.parseMaybeAssign = function(t, n, c) {
        if (this.isContextual("yield")) {
          if (this.inGenerator)
            return this.parseYield(t);
          this.exprAllowed = !1;
        }
        var p = !1, C = -1, R = -1, O = -1;
        n ? (C = n.parenthesizedAssign, R = n.trailingComma, O = n.doubleProto, n.parenthesizedAssign = n.trailingComma = -1) : (n = new Lt(), p = !0);
        var W = this.start, $ = this.startLoc;
        (this.type === u.parenL || this.type === u.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = t === "await");
        var ve = this.parseMaybeConditional(t, n);
        if (c && (ve = c.call(this, ve, W, $)), this.type.isAssign) {
          var _e = this.startNodeAt(W, $);
          return _e.operator = this.value, this.type === u.eq && (ve = this.toAssignable(ve, !1, n)), p || (n.parenthesizedAssign = n.trailingComma = n.doubleProto = -1), n.shorthandAssign >= ve.start && (n.shorthandAssign = -1), this.type === u.eq ? this.checkLValPattern(ve) : this.checkLValSimple(ve), _e.left = ve, this.next(), _e.right = this.parseMaybeAssign(t), O > -1 && (n.doubleProto = O), this.finishNode(_e, "AssignmentExpression");
        } else
          p && this.checkExpressionErrors(n, !0);
        return C > -1 && (n.parenthesizedAssign = C), R > -1 && (n.trailingComma = R), ve;
      }, ce.parseMaybeConditional = function(t, n) {
        var c = this.start, p = this.startLoc, C = this.parseExprOps(t, n);
        if (this.checkExpressionErrors(n))
          return C;
        if (this.eat(u.question)) {
          var R = this.startNodeAt(c, p);
          return R.test = C, R.consequent = this.parseMaybeAssign(), this.expect(u.colon), R.alternate = this.parseMaybeAssign(t), this.finishNode(R, "ConditionalExpression");
        }
        return C;
      }, ce.parseExprOps = function(t, n) {
        var c = this.start, p = this.startLoc, C = this.parseMaybeUnary(n, !1, !1, t);
        return this.checkExpressionErrors(n) || C.start === c && C.type === "ArrowFunctionExpression" ? C : this.parseExprOp(C, c, p, -1, t);
      }, ce.parseExprOp = function(t, n, c, p, C) {
        var R = this.type.binop;
        if (R != null && (!C || this.type !== u._in) && R > p) {
          var O = this.type === u.logicalOR || this.type === u.logicalAND, W = this.type === u.coalesce;
          W && (R = u.logicalAND.binop);
          var $ = this.value;
          this.next();
          var ve = this.start, _e = this.startLoc, ze = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, C), ve, _e, R, C), At = this.buildBinary(n, c, t, ze, $, O || W);
          return (O && this.type === u.coalesce || W && (this.type === u.logicalOR || this.type === u.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(At, n, c, p, C);
        }
        return t;
      }, ce.buildBinary = function(t, n, c, p, C, R) {
        p.type === "PrivateIdentifier" && this.raise(p.start, "Private identifier can only be left side of binary expression");
        var O = this.startNodeAt(t, n);
        return O.left = c, O.operator = C, O.right = p, this.finishNode(O, R ? "LogicalExpression" : "BinaryExpression");
      }, ce.parseMaybeUnary = function(t, n, c, p) {
        var C = this.start, R = this.startLoc, O;
        if (this.isContextual("await") && this.canAwait)
          O = this.parseAwait(p), n = !0;
        else if (this.type.prefix) {
          var W = this.startNode(), $ = this.type === u.incDec;
          W.operator = this.value, W.prefix = !0, this.next(), W.argument = this.parseMaybeUnary(null, !0, $, p), this.checkExpressionErrors(t, !0), $ ? this.checkLValSimple(W.argument) : this.strict && W.operator === "delete" && W.argument.type === "Identifier" ? this.raiseRecoverable(W.start, "Deleting local variable in strict mode") : W.operator === "delete" && a(W.argument) ? this.raiseRecoverable(W.start, "Private fields can not be deleted") : n = !0, O = this.finishNode(W, $ ? "UpdateExpression" : "UnaryExpression");
        } else if (!n && this.type === u.privateId)
          (p || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), O = this.parsePrivateIdent(), this.type !== u._in && this.unexpected();
        else {
          if (O = this.parseExprSubscripts(t, p), this.checkExpressionErrors(t))
            return O;
          for (; this.type.postfix && !this.canInsertSemicolon(); ) {
            var ve = this.startNodeAt(C, R);
            ve.operator = this.value, ve.prefix = !1, ve.argument = O, this.checkLValSimple(O), this.next(), O = this.finishNode(ve, "UpdateExpression");
          }
        }
        if (!c && this.eat(u.starstar))
          if (n)
            this.unexpected(this.lastTokStart);
          else
            return this.buildBinary(C, R, O, this.parseMaybeUnary(null, !1, !1, p), "**", !1);
        else
          return O;
      };
      function a(t) {
        return t.type === "MemberExpression" && t.property.type === "PrivateIdentifier" || t.type === "ChainExpression" && a(t.expression);
      }
      ce.parseExprSubscripts = function(t, n) {
        var c = this.start, p = this.startLoc, C = this.parseExprAtom(t, n);
        if (C.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
          return C;
        var R = this.parseSubscripts(C, c, p, !1, n);
        return t && R.type === "MemberExpression" && (t.parenthesizedAssign >= R.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= R.start && (t.parenthesizedBind = -1), t.trailingComma >= R.start && (t.trailingComma = -1)), R;
      }, ce.parseSubscripts = function(t, n, c, p, C) {
        for (var R = this.options.ecmaVersion >= 8 && t.type === "Identifier" && t.name === "async" && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && this.potentialArrowAt === t.start, O = !1; ; ) {
          var W = this.parseSubscript(t, n, c, p, R, O, C);
          if (W.optional && (O = !0), W === t || W.type === "ArrowFunctionExpression") {
            if (O) {
              var $ = this.startNodeAt(n, c);
              $.expression = W, W = this.finishNode($, "ChainExpression");
            }
            return W;
          }
          t = W;
        }
      }, ce.shouldParseAsyncArrow = function() {
        return !this.canInsertSemicolon() && this.eat(u.arrow);
      }, ce.parseSubscriptAsyncArrow = function(t, n, c, p) {
        return this.parseArrowExpression(this.startNodeAt(t, n), c, !0, p);
      }, ce.parseSubscript = function(t, n, c, p, C, R, O) {
        var W = this.options.ecmaVersion >= 11, $ = W && this.eat(u.questionDot);
        p && $ && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var ve = this.eat(u.bracketL);
        if (ve || $ && this.type !== u.parenL && this.type !== u.backQuote || this.eat(u.dot)) {
          var _e = this.startNodeAt(n, c);
          _e.object = t, ve ? (_e.property = this.parseExpression(), this.expect(u.bracketR)) : this.type === u.privateId && t.type !== "Super" ? _e.property = this.parsePrivateIdent() : _e.property = this.parseIdent(this.options.allowReserved !== "never"), _e.computed = !!ve, W && (_e.optional = $), t = this.finishNode(_e, "MemberExpression");
        } else if (!p && this.eat(u.parenL)) {
          var ze = new Lt(), At = this.yieldPos, $t = this.awaitPos, Vt = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var vi = this.parseExprList(u.parenR, this.options.ecmaVersion >= 8, !1, ze);
          if (C && !$ && this.shouldParseAsyncArrow())
            return this.checkPatternErrors(ze, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = At, this.awaitPos = $t, this.awaitIdentPos = Vt, this.parseSubscriptAsyncArrow(n, c, vi, O);
          this.checkExpressionErrors(ze, !0), this.yieldPos = At || this.yieldPos, this.awaitPos = $t || this.awaitPos, this.awaitIdentPos = Vt || this.awaitIdentPos;
          var Ft = this.startNodeAt(n, c);
          Ft.callee = t, Ft.arguments = vi, W && (Ft.optional = $), t = this.finishNode(Ft, "CallExpression");
        } else if (this.type === u.backQuote) {
          ($ || R) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var Mt = this.startNodeAt(n, c);
          Mt.tag = t, Mt.quasi = this.parseTemplate({ isTagged: !0 }), t = this.finishNode(Mt, "TaggedTemplateExpression");
        }
        return t;
      }, ce.parseExprAtom = function(t, n, c) {
        this.type === u.slash && this.readRegexp();
        var p, C = this.potentialArrowAt === this.start;
        switch (this.type) {
          case u._super:
            return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), p = this.startNode(), this.next(), this.type === u.parenL && !this.allowDirectSuper && this.raise(p.start, "super() call outside constructor of a subclass"), this.type !== u.dot && this.type !== u.bracketL && this.type !== u.parenL && this.unexpected(), this.finishNode(p, "Super");
          case u._this:
            return p = this.startNode(), this.next(), this.finishNode(p, "ThisExpression");
          case u.name:
            var R = this.start, O = this.startLoc, W = this.containsEsc, $ = this.parseIdent(!1);
            if (this.options.ecmaVersion >= 8 && !W && $.name === "async" && !this.canInsertSemicolon() && this.eat(u._function))
              return this.overrideContext(Fe.f_expr), this.parseFunction(this.startNodeAt(R, O), 0, !1, !0, n);
            if (C && !this.canInsertSemicolon()) {
              if (this.eat(u.arrow))
                return this.parseArrowExpression(this.startNodeAt(R, O), [$], !1, n);
              if (this.options.ecmaVersion >= 8 && $.name === "async" && this.type === u.name && !W && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
                return $ = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(u.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(R, O), [$], !0, n);
            }
            return $;
          case u.regexp:
            var ve = this.value;
            return p = this.parseLiteral(ve.value), p.regex = { pattern: ve.pattern, flags: ve.flags }, p;
          case u.num:
          case u.string:
            return this.parseLiteral(this.value);
          case u._null:
          case u._true:
          case u._false:
            return p = this.startNode(), p.value = this.type === u._null ? null : this.type === u._true, p.raw = this.type.keyword, this.next(), this.finishNode(p, "Literal");
          case u.parenL:
            var _e = this.start, ze = this.parseParenAndDistinguishExpression(C, n);
            return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(ze) && (t.parenthesizedAssign = _e), t.parenthesizedBind < 0 && (t.parenthesizedBind = _e)), ze;
          case u.bracketL:
            return p = this.startNode(), this.next(), p.elements = this.parseExprList(u.bracketR, !0, !0, t), this.finishNode(p, "ArrayExpression");
          case u.braceL:
            return this.overrideContext(Fe.b_expr), this.parseObj(!1, t);
          case u._function:
            return p = this.startNode(), this.next(), this.parseFunction(p, 0);
          case u._class:
            return this.parseClass(this.startNode(), !1);
          case u._new:
            return this.parseNew();
          case u.backQuote:
            return this.parseTemplate();
          case u._import:
            return this.options.ecmaVersion >= 11 ? this.parseExprImport(c) : this.unexpected();
          default:
            return this.parseExprAtomDefault();
        }
      }, ce.parseExprAtomDefault = function() {
        this.unexpected();
      }, ce.parseExprImport = function(t) {
        var n = this.startNode();
        if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === u.parenL && !t)
          return this.parseDynamicImport(n);
        if (this.type === u.dot) {
          var c = this.startNodeAt(n.start, n.loc && n.loc.start);
          return c.name = "import", n.meta = this.finishNode(c, "Identifier"), this.parseImportMeta(n);
        } else
          this.unexpected();
      }, ce.parseDynamicImport = function(t) {
        if (this.next(), t.source = this.parseMaybeAssign(), !this.eat(u.parenR)) {
          var n = this.start;
          this.eat(u.comma) && this.eat(u.parenR) ? this.raiseRecoverable(n, "Trailing comma is not allowed in import()") : this.unexpected(n);
        }
        return this.finishNode(t, "ImportExpression");
      }, ce.parseImportMeta = function(t) {
        this.next();
        var n = this.containsEsc;
        return t.property = this.parseIdent(!0), t.property.name !== "meta" && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), n && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty");
      }, ce.parseLiteral = function(t) {
        var n = this.startNode();
        return n.value = t, n.raw = this.input.slice(this.start, this.end), n.raw.charCodeAt(n.raw.length - 1) === 110 && (n.bigint = n.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(n, "Literal");
      }, ce.parseParenExpression = function() {
        this.expect(u.parenL);
        var t = this.parseExpression();
        return this.expect(u.parenR), t;
      }, ce.shouldParseArrow = function(t) {
        return !this.canInsertSemicolon();
      }, ce.parseParenAndDistinguishExpression = function(t, n) {
        var c = this.start, p = this.startLoc, C, R = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          this.next();
          var O = this.start, W = this.startLoc, $ = [], ve = !0, _e = !1, ze = new Lt(), At = this.yieldPos, $t = this.awaitPos, Vt;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== u.parenR; )
            if (ve ? ve = !1 : this.expect(u.comma), R && this.afterTrailingComma(u.parenR, !0)) {
              _e = !0;
              break;
            } else if (this.type === u.ellipsis) {
              Vt = this.start, $.push(this.parseParenItem(this.parseRestBinding())), this.type === u.comma && this.raiseRecoverable(
                this.start,
                "Comma is not permitted after the rest element"
              );
              break;
            } else
              $.push(this.parseMaybeAssign(!1, ze, this.parseParenItem));
          var vi = this.lastTokEnd, Ft = this.lastTokEndLoc;
          if (this.expect(u.parenR), t && this.shouldParseArrow($) && this.eat(u.arrow))
            return this.checkPatternErrors(ze, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = At, this.awaitPos = $t, this.parseParenArrowList(c, p, $, n);
          (!$.length || _e) && this.unexpected(this.lastTokStart), Vt && this.unexpected(Vt), this.checkExpressionErrors(ze, !0), this.yieldPos = At || this.yieldPos, this.awaitPos = $t || this.awaitPos, $.length > 1 ? (C = this.startNodeAt(O, W), C.expressions = $, this.finishNodeAt(C, "SequenceExpression", vi, Ft)) : C = $[0];
        } else
          C = this.parseParenExpression();
        if (this.options.preserveParens) {
          var Mt = this.startNodeAt(c, p);
          return Mt.expression = C, this.finishNode(Mt, "ParenthesizedExpression");
        } else
          return C;
      }, ce.parseParenItem = function(t) {
        return t;
      }, ce.parseParenArrowList = function(t, n, c, p) {
        return this.parseArrowExpression(this.startNodeAt(t, n), c, !1, p);
      };
      var m = [];
      ce.parseNew = function() {
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var t = this.startNode();
        if (this.next(), this.options.ecmaVersion >= 6 && this.type === u.dot) {
          var n = this.startNodeAt(t.start, t.loc && t.loc.start);
          n.name = "new", t.meta = this.finishNode(n, "Identifier"), this.next();
          var c = this.containsEsc;
          return t.property = this.parseIdent(!0), t.property.name !== "target" && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), c && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(t.start, "'new.target' can only be used in functions and class static block"), this.finishNode(t, "MetaProperty");
        }
        var p = this.start, C = this.startLoc;
        return t.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), p, C, !0, !1), this.eat(u.parenL) ? t.arguments = this.parseExprList(u.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = m, this.finishNode(t, "NewExpression");
      }, ce.parseTemplateElement = function(t) {
        var n = t.isTagged, c = this.startNode();
        return this.type === u.invalidTemplate ? (n || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), c.value = {
          raw: this.value,
          cooked: null
        }) : c.value = {
          raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
          cooked: this.value
        }, this.next(), c.tail = this.type === u.backQuote, this.finishNode(c, "TemplateElement");
      }, ce.parseTemplate = function(t) {
        t === void 0 && (t = {});
        var n = t.isTagged;
        n === void 0 && (n = !1);
        var c = this.startNode();
        this.next(), c.expressions = [];
        var p = this.parseTemplateElement({ isTagged: n });
        for (c.quasis = [p]; !p.tail; )
          this.type === u.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(u.dollarBraceL), c.expressions.push(this.parseExpression()), this.expect(u.braceR), c.quasis.push(p = this.parseTemplateElement({ isTagged: n }));
        return this.next(), this.finishNode(c, "TemplateLiteral");
      }, ce.isAsyncProp = function(t) {
        return !t.computed && t.key.type === "Identifier" && t.key.name === "async" && (this.type === u.name || this.type === u.num || this.type === u.string || this.type === u.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === u.star) && !I.test(this.input.slice(this.lastTokEnd, this.start));
      }, ce.parseObj = function(t, n) {
        var c = this.startNode(), p = !0, C = {};
        for (c.properties = [], this.next(); !this.eat(u.braceR); ) {
          if (p)
            p = !1;
          else if (this.expect(u.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(u.braceR))
            break;
          var R = this.parseProperty(t, n);
          t || this.checkPropClash(R, C, n), c.properties.push(R);
        }
        return this.finishNode(c, t ? "ObjectPattern" : "ObjectExpression");
      }, ce.parseProperty = function(t, n) {
        var c = this.startNode(), p, C, R, O;
        if (this.options.ecmaVersion >= 9 && this.eat(u.ellipsis))
          return t ? (c.argument = this.parseIdent(!1), this.type === u.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(c, "RestElement")) : (c.argument = this.parseMaybeAssign(!1, n), this.type === u.comma && n && n.trailingComma < 0 && (n.trailingComma = this.start), this.finishNode(c, "SpreadElement"));
        this.options.ecmaVersion >= 6 && (c.method = !1, c.shorthand = !1, (t || n) && (R = this.start, O = this.startLoc), t || (p = this.eat(u.star)));
        var W = this.containsEsc;
        return this.parsePropertyName(c), !t && !W && this.options.ecmaVersion >= 8 && !p && this.isAsyncProp(c) ? (C = !0, p = this.options.ecmaVersion >= 9 && this.eat(u.star), this.parsePropertyName(c)) : C = !1, this.parsePropertyValue(c, t, p, C, R, O, n, W), this.finishNode(c, "Property");
      }, ce.parseGetterSetter = function(t) {
        t.kind = t.key.name, this.parsePropertyName(t), t.value = this.parseMethod(!1);
        var n = t.kind === "get" ? 0 : 1;
        if (t.value.params.length !== n) {
          var c = t.value.start;
          t.kind === "get" ? this.raiseRecoverable(c, "getter should have no params") : this.raiseRecoverable(c, "setter should have exactly one param");
        } else
          t.kind === "set" && t.value.params[0].type === "RestElement" && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params");
      }, ce.parsePropertyValue = function(t, n, c, p, C, R, O, W) {
        (c || p) && this.type === u.colon && this.unexpected(), this.eat(u.colon) ? (t.value = n ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, O), t.kind = "init") : this.options.ecmaVersion >= 6 && this.type === u.parenL ? (n && this.unexpected(), t.kind = "init", t.method = !0, t.value = this.parseMethod(c, p)) : !n && !W && this.options.ecmaVersion >= 5 && !t.computed && t.key.type === "Identifier" && (t.key.name === "get" || t.key.name === "set") && this.type !== u.comma && this.type !== u.braceR && this.type !== u.eq ? ((c || p) && this.unexpected(), this.parseGetterSetter(t)) : this.options.ecmaVersion >= 6 && !t.computed && t.key.type === "Identifier" ? ((c || p) && this.unexpected(), this.checkUnreserved(t.key), t.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = C), t.kind = "init", n ? t.value = this.parseMaybeDefault(C, R, this.copyNode(t.key)) : this.type === u.eq && O ? (O.shorthandAssign < 0 && (O.shorthandAssign = this.start), t.value = this.parseMaybeDefault(C, R, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.shorthand = !0) : this.unexpected();
      }, ce.parsePropertyName = function(t) {
        if (this.options.ecmaVersion >= 6) {
          if (this.eat(u.bracketL))
            return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(u.bracketR), t.key;
          t.computed = !1;
        }
        return t.key = this.type === u.num || this.type === u.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
      }, ce.initFunction = function(t) {
        t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1);
      }, ce.parseMethod = function(t, n, c) {
        var p = this.startNode(), C = this.yieldPos, R = this.awaitPos, O = this.awaitIdentPos;
        return this.initFunction(p), this.options.ecmaVersion >= 6 && (p.generator = t), this.options.ecmaVersion >= 8 && (p.async = !!n), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Wt(n, p.generator) | Ke | (c ? tt : 0)), this.expect(u.parenL), p.params = this.parseBindingList(u.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(p, !1, !0, !1), this.yieldPos = C, this.awaitPos = R, this.awaitIdentPos = O, this.finishNode(p, "FunctionExpression");
      }, ce.parseArrowExpression = function(t, n, c, p) {
        var C = this.yieldPos, R = this.awaitPos, O = this.awaitIdentPos;
        return this.enterScope(Wt(c, !1) | Ye), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!c), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(n, !0), this.parseFunctionBody(t, !0, !1, p), this.yieldPos = C, this.awaitPos = R, this.awaitIdentPos = O, this.finishNode(t, "ArrowFunctionExpression");
      }, ce.parseFunctionBody = function(t, n, c, p) {
        var C = n && this.type !== u.braceL, R = this.strict, O = !1;
        if (C)
          t.body = this.parseMaybeAssign(p), t.expression = !0, this.checkParams(t, !1);
        else {
          var W = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
          (!R || W) && (O = this.strictDirective(this.end), O && W && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
          var $ = this.labels;
          this.labels = [], O && (this.strict = !0), this.checkParams(t, !R && !O && !n && !c && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, ke), t.body = this.parseBlock(!1, void 0, O && !R), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = $;
        }
        this.exitScope();
      }, ce.isSimpleParamList = function(t) {
        for (var n = 0, c = t; n < c.length; n += 1) {
          var p = c[n];
          if (p.type !== "Identifier")
            return !1;
        }
        return !0;
      }, ce.checkParams = function(t, n) {
        for (var c = /* @__PURE__ */ Object.create(null), p = 0, C = t.params; p < C.length; p += 1) {
          var R = C[p];
          this.checkLValInnerPattern(R, Gt, n ? null : c);
        }
      }, ce.parseExprList = function(t, n, c, p) {
        for (var C = [], R = !0; !this.eat(t); ) {
          if (R)
            R = !1;
          else if (this.expect(u.comma), n && this.afterTrailingComma(t))
            break;
          var O = void 0;
          c && this.type === u.comma ? O = null : this.type === u.ellipsis ? (O = this.parseSpread(p), p && this.type === u.comma && p.trailingComma < 0 && (p.trailingComma = this.start)) : O = this.parseMaybeAssign(!1, p), C.push(O);
        }
        return C;
      }, ce.checkUnreserved = function(t) {
        var n = t.start, c = t.end, p = t.name;
        if (this.inGenerator && p === "yield" && this.raiseRecoverable(n, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && p === "await" && this.raiseRecoverable(n, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && p === "arguments" && this.raiseRecoverable(n, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (p === "arguments" || p === "await") && this.raise(n, "Cannot use " + p + " in class static initialization block"), this.keywords.test(p) && this.raise(n, "Unexpected keyword '" + p + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(n, c).indexOf("\\") !== -1)) {
          var C = this.strict ? this.reservedWordsStrict : this.reservedWords;
          C.test(p) && (!this.inAsync && p === "await" && this.raiseRecoverable(n, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(n, "The keyword '" + p + "' is reserved"));
        }
      }, ce.parseIdent = function(t) {
        var n = this.parseIdentNode();
        return this.next(!!t), this.finishNode(n, "Identifier"), t || (this.checkUnreserved(n), n.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = n.start)), n;
      }, ce.parseIdentNode = function() {
        var t = this.startNode();
        return this.type === u.name ? t.name = this.value : this.type.keyword ? (t.name = this.type.keyword, (t.name === "class" || t.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = u.name) : this.unexpected(), t;
      }, ce.parsePrivateIdent = function() {
        var t = this.startNode();
        return this.type === u.privateId ? t.name = this.value : this.unexpected(), this.next(), this.finishNode(t, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(t.start, "Private field '#" + t.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(t)), t;
      }, ce.parseYield = function(t) {
        this.yieldPos || (this.yieldPos = this.start);
        var n = this.startNode();
        return this.next(), this.type === u.semi || this.canInsertSemicolon() || this.type !== u.star && !this.type.startsExpr ? (n.delegate = !1, n.argument = null) : (n.delegate = this.eat(u.star), n.argument = this.parseMaybeAssign(t)), this.finishNode(n, "YieldExpression");
      }, ce.parseAwait = function(t) {
        this.awaitPos || (this.awaitPos = this.start);
        var n = this.startNode();
        return this.next(), n.argument = this.parseMaybeUnary(null, !0, !1, t), this.finishNode(n, "AwaitExpression");
      };
      var h = ge.prototype;
      h.raise = function(t, n) {
        var c = oe(this.input, t);
        n += " (" + c.line + ":" + c.column + ")";
        var p = new SyntaxError(n);
        throw p.pos = t, p.loc = c, p.raisedAt = this.pos, p;
      }, h.raiseRecoverable = h.raise, h.curPosition = function() {
        if (this.options.locations)
          return new M(this.curLine, this.pos - this.lineStart);
      };
      var d = ge.prototype, S = function(n) {
        this.flags = n, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = !1;
      };
      d.enterScope = function(t) {
        this.scopeStack.push(new S(t));
      }, d.exitScope = function() {
        this.scopeStack.pop();
      }, d.treatFunctionsAsVarInScope = function(t) {
        return t.flags & pe || !this.inModule && t.flags & xe;
      }, d.declareName = function(t, n, c) {
        var p = !1;
        if (n === ut) {
          var C = this.currentScope();
          p = C.lexical.indexOf(t) > -1 || C.functions.indexOf(t) > -1 || C.var.indexOf(t) > -1, C.lexical.push(t), this.inModule && C.flags & xe && delete this.undefinedExports[t];
        } else if (n === zt) {
          var R = this.currentScope();
          R.lexical.push(t);
        } else if (n === ci) {
          var O = this.currentScope();
          this.treatFunctionsAsVar ? p = O.lexical.indexOf(t) > -1 : p = O.lexical.indexOf(t) > -1 || O.var.indexOf(t) > -1, O.functions.push(t);
        } else
          for (var W = this.scopeStack.length - 1; W >= 0; --W) {
            var $ = this.scopeStack[W];
            if ($.lexical.indexOf(t) > -1 && !($.flags & Q && $.lexical[0] === t) || !this.treatFunctionsAsVarInScope($) && $.functions.indexOf(t) > -1) {
              p = !0;
              break;
            }
            if ($.var.push(t), this.inModule && $.flags & xe && delete this.undefinedExports[t], $.flags & Nt)
              break;
          }
        p && this.raiseRecoverable(c, "Identifier '" + t + "' has already been declared");
      }, d.checkLocalExport = function(t) {
        this.scopeStack[0].lexical.indexOf(t.name) === -1 && this.scopeStack[0].var.indexOf(t.name) === -1 && (this.undefinedExports[t.name] = t);
      }, d.currentScope = function() {
        return this.scopeStack[this.scopeStack.length - 1];
      }, d.currentVarScope = function() {
        for (var t = this.scopeStack.length - 1; ; t--) {
          var n = this.scopeStack[t];
          if (n.flags & Nt)
            return n;
        }
      }, d.currentThisScope = function() {
        for (var t = this.scopeStack.length - 1; ; t--) {
          var n = this.scopeStack[t];
          if (n.flags & Nt && !(n.flags & Ye))
            return n;
        }
      };
      var V = function(n, c, p) {
        this.type = "", this.start = c, this.end = 0, n.options.locations && (this.loc = new ae(n, p)), n.options.directSourceFile && (this.sourceFile = n.options.directSourceFile), n.options.ranges && (this.range = [c, 0]);
      }, F = ge.prototype;
      F.startNode = function() {
        return new V(this, this.start, this.startLoc);
      }, F.startNodeAt = function(t, n) {
        return new V(this, t, n);
      };
      function q(t, n, c, p) {
        return t.type = n, t.end = c, this.options.locations && (t.loc.end = p), this.options.ranges && (t.range[1] = c), t;
      }
      F.finishNode = function(t, n) {
        return q.call(this, t, n, this.lastTokEnd, this.lastTokEndLoc);
      }, F.finishNodeAt = function(t, n, c, p) {
        return q.call(this, t, n, c, p);
      }, F.copyNode = function(t) {
        var n = new V(this, t.start, this.startLoc);
        for (var c in t)
          n[c] = t[c];
        return n;
      };
      var Z = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Se = Z + " Extended_Pictographic", Ue = Se, ht = Ue + " EBase EComp EMod EPres ExtPict", dt = ht, pi = dt, di = {
        9: Z,
        10: Se,
        11: Ue,
        12: ht,
        13: dt,
        14: pi
      }, it = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", zs = {
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: it
      }, kr = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Pr = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Ir = Pr + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Tr = Ir + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Nr = Tr + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", Rr = Nr + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", $s = Rr + " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz", Hs = {
        9: Pr,
        10: Ir,
        11: Tr,
        12: Nr,
        13: Rr,
        14: $s
      }, Lr = {};
      function Ys(t) {
        var n = Lr[t] = {
          binary: Ve(di[t] + " " + kr),
          binaryOfStrings: Ve(zs[t]),
          nonBinary: {
            General_Category: Ve(kr),
            Script: Ve(Hs[t])
          }
        };
        n.nonBinary.Script_Extensions = n.nonBinary.Script, n.nonBinary.gc = n.nonBinary.General_Category, n.nonBinary.sc = n.nonBinary.Script, n.nonBinary.scx = n.nonBinary.Script_Extensions;
      }
      for (var Fi = 0, Or = [9, 10, 11, 12, 13, 14]; Fi < Or.length; Fi += 1) {
        var Qs = Or[Fi];
        Ys(Qs);
      }
      var te = ge.prototype, ft = function(n) {
        this.parser = n, this.validFlags = "gim" + (n.options.ecmaVersion >= 6 ? "uy" : "") + (n.options.ecmaVersion >= 9 ? "s" : "") + (n.options.ecmaVersion >= 13 ? "d" : "") + (n.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Lr[n.options.ecmaVersion >= 14 ? 14 : n.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [];
      };
      ft.prototype.reset = function(n, c, p) {
        var C = p.indexOf("v") !== -1, R = p.indexOf("u") !== -1;
        this.start = n | 0, this.source = c + "", this.flags = p, C && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = R && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = R && this.parser.options.ecmaVersion >= 9);
      }, ft.prototype.raise = function(n) {
        this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + n);
      }, ft.prototype.at = function(n, c) {
        c === void 0 && (c = !1);
        var p = this.source, C = p.length;
        if (n >= C)
          return -1;
        var R = p.charCodeAt(n);
        if (!(c || this.switchU) || R <= 55295 || R >= 57344 || n + 1 >= C)
          return R;
        var O = p.charCodeAt(n + 1);
        return O >= 56320 && O <= 57343 ? (R << 10) + O - 56613888 : R;
      }, ft.prototype.nextIndex = function(n, c) {
        c === void 0 && (c = !1);
        var p = this.source, C = p.length;
        if (n >= C)
          return C;
        var R = p.charCodeAt(n), O;
        return !(c || this.switchU) || R <= 55295 || R >= 57344 || n + 1 >= C || (O = p.charCodeAt(n + 1)) < 56320 || O > 57343 ? n + 1 : n + 2;
      }, ft.prototype.current = function(n) {
        return n === void 0 && (n = !1), this.at(this.pos, n);
      }, ft.prototype.lookahead = function(n) {
        return n === void 0 && (n = !1), this.at(this.nextIndex(this.pos, n), n);
      }, ft.prototype.advance = function(n) {
        n === void 0 && (n = !1), this.pos = this.nextIndex(this.pos, n);
      }, ft.prototype.eat = function(n, c) {
        return c === void 0 && (c = !1), this.current(c) === n ? (this.advance(c), !0) : !1;
      }, ft.prototype.eatChars = function(n, c) {
        c === void 0 && (c = !1);
        for (var p = this.pos, C = 0, R = n; C < R.length; C += 1) {
          var O = R[C], W = this.at(p, c);
          if (W === -1 || W !== O)
            return !1;
          p = this.nextIndex(p, c);
        }
        return this.pos = p, !0;
      }, te.validateRegExpFlags = function(t) {
        for (var n = t.validFlags, c = t.flags, p = !1, C = !1, R = 0; R < c.length; R++) {
          var O = c.charAt(R);
          n.indexOf(O) === -1 && this.raise(t.start, "Invalid regular expression flag"), c.indexOf(O, R + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag"), O === "u" && (p = !0), O === "v" && (C = !0);
        }
        this.options.ecmaVersion >= 15 && p && C && this.raise(t.start, "Invalid regular expression flag");
      }, te.validateRegExpPattern = function(t) {
        this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && t.groupNames.length > 0 && (t.switchN = !0, this.regexp_pattern(t));
      }, te.regexp_pattern = function(t) {
        t.pos = 0, t.lastIntValue = 0, t.lastStringValue = "", t.lastAssertionIsQuantifiable = !1, t.numCapturingParens = 0, t.maxBackReference = 0, t.groupNames.length = 0, t.backReferenceNames.length = 0, this.regexp_disjunction(t), t.pos !== t.source.length && (t.eat(
          41
          /* ) */
        ) && t.raise("Unmatched ')'"), (t.eat(
          93
          /* ] */
        ) || t.eat(
          125
          /* } */
        )) && t.raise("Lone quantifier brackets")), t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
        for (var n = 0, c = t.backReferenceNames; n < c.length; n += 1) {
          var p = c[n];
          t.groupNames.indexOf(p) === -1 && t.raise("Invalid named capture referenced");
        }
      }, te.regexp_disjunction = function(t) {
        for (this.regexp_alternative(t); t.eat(
          124
          /* | */
        ); )
          this.regexp_alternative(t);
        this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(
          123
          /* { */
        ) && t.raise("Lone quantifier brackets");
      }, te.regexp_alternative = function(t) {
        for (; t.pos < t.source.length && this.regexp_eatTerm(t); )
          ;
      }, te.regexp_eatTerm = function(t) {
        return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : (t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) ? (this.regexp_eatQuantifier(t), !0) : !1;
      }, te.regexp_eatAssertion = function(t) {
        var n = t.pos;
        if (t.lastAssertionIsQuantifiable = !1, t.eat(
          94
          /* ^ */
        ) || t.eat(
          36
          /* $ */
        ))
          return !0;
        if (t.eat(
          92
          /* \ */
        )) {
          if (t.eat(
            66
            /* B */
          ) || t.eat(
            98
            /* b */
          ))
            return !0;
          t.pos = n;
        }
        if (t.eat(
          40
          /* ( */
        ) && t.eat(
          63
          /* ? */
        )) {
          var c = !1;
          if (this.options.ecmaVersion >= 9 && (c = t.eat(
            60
            /* < */
          )), t.eat(
            61
            /* = */
          ) || t.eat(
            33
            /* ! */
          ))
            return this.regexp_disjunction(t), t.eat(
              41
              /* ) */
            ) || t.raise("Unterminated group"), t.lastAssertionIsQuantifiable = !c, !0;
        }
        return t.pos = n, !1;
      }, te.regexp_eatQuantifier = function(t, n) {
        return n === void 0 && (n = !1), this.regexp_eatQuantifierPrefix(t, n) ? (t.eat(
          63
          /* ? */
        ), !0) : !1;
      }, te.regexp_eatQuantifierPrefix = function(t, n) {
        return t.eat(
          42
          /* * */
        ) || t.eat(
          43
          /* + */
        ) || t.eat(
          63
          /* ? */
        ) || this.regexp_eatBracedQuantifier(t, n);
      }, te.regexp_eatBracedQuantifier = function(t, n) {
        var c = t.pos;
        if (t.eat(
          123
          /* { */
        )) {
          var p = 0, C = -1;
          if (this.regexp_eatDecimalDigits(t) && (p = t.lastIntValue, t.eat(
            44
            /* , */
          ) && this.regexp_eatDecimalDigits(t) && (C = t.lastIntValue), t.eat(
            125
            /* } */
          )))
            return C !== -1 && C < p && !n && t.raise("numbers out of order in {} quantifier"), !0;
          t.switchU && !n && t.raise("Incomplete quantifier"), t.pos = c;
        }
        return !1;
      }, te.regexp_eatAtom = function(t) {
        return this.regexp_eatPatternCharacters(t) || t.eat(
          46
          /* . */
        ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t);
      }, te.regexp_eatReverseSolidusAtomEscape = function(t) {
        var n = t.pos;
        if (t.eat(
          92
          /* \ */
        )) {
          if (this.regexp_eatAtomEscape(t))
            return !0;
          t.pos = n;
        }
        return !1;
      }, te.regexp_eatUncapturingGroup = function(t) {
        var n = t.pos;
        if (t.eat(
          40
          /* ( */
        )) {
          if (t.eat(
            63
            /* ? */
          ) && t.eat(
            58
            /* : */
          )) {
            if (this.regexp_disjunction(t), t.eat(
              41
              /* ) */
            ))
              return !0;
            t.raise("Unterminated group");
          }
          t.pos = n;
        }
        return !1;
      }, te.regexp_eatCapturingGroup = function(t) {
        if (t.eat(
          40
          /* ( */
        )) {
          if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : t.current() === 63 && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(
            41
            /* ) */
          ))
            return t.numCapturingParens += 1, !0;
          t.raise("Unterminated group");
        }
        return !1;
      }, te.regexp_eatExtendedAtom = function(t) {
        return t.eat(
          46
          /* . */
        ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t);
      }, te.regexp_eatInvalidBracedQuantifier = function(t) {
        return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1;
      }, te.regexp_eatSyntaxCharacter = function(t) {
        var n = t.current();
        return Vr(n) ? (t.lastIntValue = n, t.advance(), !0) : !1;
      };
      function Vr(t) {
        return t === 36 || t >= 40 && t <= 43 || t === 46 || t === 63 || t >= 91 && t <= 94 || t >= 123 && t <= 125;
      }
      te.regexp_eatPatternCharacters = function(t) {
        for (var n = t.pos, c = 0; (c = t.current()) !== -1 && !Vr(c); )
          t.advance();
        return t.pos !== n;
      }, te.regexp_eatExtendedPatternCharacter = function(t) {
        var n = t.current();
        return n !== -1 && n !== 36 && !(n >= 40 && n <= 43) && n !== 46 && n !== 63 && n !== 91 && n !== 94 && n !== 124 ? (t.advance(), !0) : !1;
      }, te.regexp_groupSpecifier = function(t) {
        if (t.eat(
          63
          /* ? */
        )) {
          if (this.regexp_eatGroupName(t)) {
            t.groupNames.indexOf(t.lastStringValue) !== -1 && t.raise("Duplicate capture group name"), t.groupNames.push(t.lastStringValue);
            return;
          }
          t.raise("Invalid group");
        }
      }, te.regexp_eatGroupName = function(t) {
        if (t.lastStringValue = "", t.eat(
          60
          /* < */
        )) {
          if (this.regexp_eatRegExpIdentifierName(t) && t.eat(
            62
            /* > */
          ))
            return !0;
          t.raise("Invalid capture group name");
        }
        return !1;
      }, te.regexp_eatRegExpIdentifierName = function(t) {
        if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
          for (t.lastStringValue += D(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t); )
            t.lastStringValue += D(t.lastIntValue);
          return !0;
        }
        return !1;
      }, te.regexp_eatRegExpIdentifierStart = function(t) {
        var n = t.pos, c = this.options.ecmaVersion >= 11, p = t.current(c);
        return t.advance(c), p === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, c) && (p = t.lastIntValue), Xs(p) ? (t.lastIntValue = p, !0) : (t.pos = n, !1);
      };
      function Xs(t) {
        return T(t, !0) || t === 36 || t === 95;
      }
      te.regexp_eatRegExpIdentifierPart = function(t) {
        var n = t.pos, c = this.options.ecmaVersion >= 11, p = t.current(c);
        return t.advance(c), p === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, c) && (p = t.lastIntValue), Js(p) ? (t.lastIntValue = p, !0) : (t.pos = n, !1);
      };
      function Js(t) {
        return E(t, !0) || t === 36 || t === 95 || t === 8204 || t === 8205;
      }
      te.regexp_eatAtomEscape = function(t) {
        return this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t) ? !0 : (t.switchU && (t.current() === 99 && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1);
      }, te.regexp_eatBackReference = function(t) {
        var n = t.pos;
        if (this.regexp_eatDecimalEscape(t)) {
          var c = t.lastIntValue;
          if (t.switchU)
            return c > t.maxBackReference && (t.maxBackReference = c), !0;
          if (c <= t.numCapturingParens)
            return !0;
          t.pos = n;
        }
        return !1;
      }, te.regexp_eatKGroupName = function(t) {
        if (t.eat(
          107
          /* k */
        )) {
          if (this.regexp_eatGroupName(t))
            return t.backReferenceNames.push(t.lastStringValue), !0;
          t.raise("Invalid named reference");
        }
        return !1;
      }, te.regexp_eatCharacterEscape = function(t) {
        return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t);
      }, te.regexp_eatCControlLetter = function(t) {
        var n = t.pos;
        if (t.eat(
          99
          /* c */
        )) {
          if (this.regexp_eatControlLetter(t))
            return !0;
          t.pos = n;
        }
        return !1;
      }, te.regexp_eatZero = function(t) {
        return t.current() === 48 && !mi(t.lookahead()) ? (t.lastIntValue = 0, t.advance(), !0) : !1;
      }, te.regexp_eatControlEscape = function(t) {
        var n = t.current();
        return n === 116 ? (t.lastIntValue = 9, t.advance(), !0) : n === 110 ? (t.lastIntValue = 10, t.advance(), !0) : n === 118 ? (t.lastIntValue = 11, t.advance(), !0) : n === 102 ? (t.lastIntValue = 12, t.advance(), !0) : n === 114 ? (t.lastIntValue = 13, t.advance(), !0) : !1;
      }, te.regexp_eatControlLetter = function(t) {
        var n = t.current();
        return Fr(n) ? (t.lastIntValue = n % 32, t.advance(), !0) : !1;
      };
      function Fr(t) {
        return t >= 65 && t <= 90 || t >= 97 && t <= 122;
      }
      te.regexp_eatRegExpUnicodeEscapeSequence = function(t, n) {
        n === void 0 && (n = !1);
        var c = t.pos, p = n || t.switchU;
        if (t.eat(
          117
          /* u */
        )) {
          if (this.regexp_eatFixedHexDigits(t, 4)) {
            var C = t.lastIntValue;
            if (p && C >= 55296 && C <= 56319) {
              var R = t.pos;
              if (t.eat(
                92
                /* \ */
              ) && t.eat(
                117
                /* u */
              ) && this.regexp_eatFixedHexDigits(t, 4)) {
                var O = t.lastIntValue;
                if (O >= 56320 && O <= 57343)
                  return t.lastIntValue = (C - 55296) * 1024 + (O - 56320) + 65536, !0;
              }
              t.pos = R, t.lastIntValue = C;
            }
            return !0;
          }
          if (p && t.eat(
            123
            /* { */
          ) && this.regexp_eatHexDigits(t) && t.eat(
            125
            /* } */
          ) && Ks(t.lastIntValue))
            return !0;
          p && t.raise("Invalid unicode escape"), t.pos = c;
        }
        return !1;
      };
      function Ks(t) {
        return t >= 0 && t <= 1114111;
      }
      te.regexp_eatIdentityEscape = function(t) {
        if (t.switchU)
          return this.regexp_eatSyntaxCharacter(t) ? !0 : t.eat(
            47
            /* / */
          ) ? (t.lastIntValue = 47, !0) : !1;
        var n = t.current();
        return n !== 99 && (!t.switchN || n !== 107) ? (t.lastIntValue = n, t.advance(), !0) : !1;
      }, te.regexp_eatDecimalEscape = function(t) {
        t.lastIntValue = 0;
        var n = t.current();
        if (n >= 49 && n <= 57) {
          do
            t.lastIntValue = 10 * t.lastIntValue + (n - 48), t.advance();
          while ((n = t.current()) >= 48 && n <= 57);
          return !0;
        }
        return !1;
      };
      var Mr = 0, mt = 1, rt = 2;
      te.regexp_eatCharacterClassEscape = function(t) {
        var n = t.current();
        if (Zs(n))
          return t.lastIntValue = -1, t.advance(), mt;
        var c = !1;
        if (t.switchU && this.options.ecmaVersion >= 9 && ((c = n === 80) || n === 112)) {
          t.lastIntValue = -1, t.advance();
          var p;
          if (t.eat(
            123
            /* { */
          ) && (p = this.regexp_eatUnicodePropertyValueExpression(t)) && t.eat(
            125
            /* } */
          ))
            return c && p === rt && t.raise("Invalid property name"), p;
          t.raise("Invalid property name");
        }
        return Mr;
      };
      function Zs(t) {
        return t === 100 || t === 68 || t === 115 || t === 83 || t === 119 || t === 87;
      }
      te.regexp_eatUnicodePropertyValueExpression = function(t) {
        var n = t.pos;
        if (this.regexp_eatUnicodePropertyName(t) && t.eat(
          61
          /* = */
        )) {
          var c = t.lastStringValue;
          if (this.regexp_eatUnicodePropertyValue(t)) {
            var p = t.lastStringValue;
            return this.regexp_validateUnicodePropertyNameAndValue(t, c, p), mt;
          }
        }
        if (t.pos = n, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
          var C = t.lastStringValue;
          return this.regexp_validateUnicodePropertyNameOrValue(t, C);
        }
        return Mr;
      }, te.regexp_validateUnicodePropertyNameAndValue = function(t, n, c) {
        be(t.unicodeProperties.nonBinary, n) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[n].test(c) || t.raise("Invalid property value");
      }, te.regexp_validateUnicodePropertyNameOrValue = function(t, n) {
        if (t.unicodeProperties.binary.test(n))
          return mt;
        if (t.switchV && t.unicodeProperties.binaryOfStrings.test(n))
          return rt;
        t.raise("Invalid property name");
      }, te.regexp_eatUnicodePropertyName = function(t) {
        var n = 0;
        for (t.lastStringValue = ""; Br(n = t.current()); )
          t.lastStringValue += D(n), t.advance();
        return t.lastStringValue !== "";
      };
      function Br(t) {
        return Fr(t) || t === 95;
      }
      te.regexp_eatUnicodePropertyValue = function(t) {
        var n = 0;
        for (t.lastStringValue = ""; ea(n = t.current()); )
          t.lastStringValue += D(n), t.advance();
        return t.lastStringValue !== "";
      };
      function ea(t) {
        return Br(t) || mi(t);
      }
      te.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
        return this.regexp_eatUnicodePropertyValue(t);
      }, te.regexp_eatCharacterClass = function(t) {
        if (t.eat(
          91
          /* [ */
        )) {
          var n = t.eat(
            94
            /* ^ */
          ), c = this.regexp_classContents(t);
          return t.eat(
            93
            /* ] */
          ) || t.raise("Unterminated character class"), n && c === rt && t.raise("Negated character class may contain strings"), !0;
        }
        return !1;
      }, te.regexp_classContents = function(t) {
        return t.current() === 93 ? mt : t.switchV ? this.regexp_classSetExpression(t) : (this.regexp_nonEmptyClassRanges(t), mt);
      }, te.regexp_nonEmptyClassRanges = function(t) {
        for (; this.regexp_eatClassAtom(t); ) {
          var n = t.lastIntValue;
          if (t.eat(
            45
            /* - */
          ) && this.regexp_eatClassAtom(t)) {
            var c = t.lastIntValue;
            t.switchU && (n === -1 || c === -1) && t.raise("Invalid character class"), n !== -1 && c !== -1 && n > c && t.raise("Range out of order in character class");
          }
        }
      }, te.regexp_eatClassAtom = function(t) {
        var n = t.pos;
        if (t.eat(
          92
          /* \ */
        )) {
          if (this.regexp_eatClassEscape(t))
            return !0;
          if (t.switchU) {
            var c = t.current();
            (c === 99 || qr(c)) && t.raise("Invalid class escape"), t.raise("Invalid escape");
          }
          t.pos = n;
        }
        var p = t.current();
        return p !== 93 ? (t.lastIntValue = p, t.advance(), !0) : !1;
      }, te.regexp_eatClassEscape = function(t) {
        var n = t.pos;
        if (t.eat(
          98
          /* b */
        ))
          return t.lastIntValue = 8, !0;
        if (t.switchU && t.eat(
          45
          /* - */
        ))
          return t.lastIntValue = 45, !0;
        if (!t.switchU && t.eat(
          99
          /* c */
        )) {
          if (this.regexp_eatClassControlLetter(t))
            return !0;
          t.pos = n;
        }
        return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t);
      }, te.regexp_classSetExpression = function(t) {
        var n = mt, c;
        if (!this.regexp_eatClassSetRange(t))
          if (c = this.regexp_eatClassSetOperand(t)) {
            c === rt && (n = rt);
            for (var p = t.pos; t.eatChars(
              [38, 38]
              /* && */
            ); ) {
              if (t.current() !== 38 && (c = this.regexp_eatClassSetOperand(t))) {
                c !== rt && (n = mt);
                continue;
              }
              t.raise("Invalid character in character class");
            }
            if (p !== t.pos)
              return n;
            for (; t.eatChars(
              [45, 45]
              /* -- */
            ); )
              this.regexp_eatClassSetOperand(t) || t.raise("Invalid character in character class");
            if (p !== t.pos)
              return n;
          } else
            t.raise("Invalid character in character class");
        for (; ; )
          if (!this.regexp_eatClassSetRange(t)) {
            if (c = this.regexp_eatClassSetOperand(t), !c)
              return n;
            c === rt && (n = rt);
          }
      }, te.regexp_eatClassSetRange = function(t) {
        var n = t.pos;
        if (this.regexp_eatClassSetCharacter(t)) {
          var c = t.lastIntValue;
          if (t.eat(
            45
            /* - */
          ) && this.regexp_eatClassSetCharacter(t)) {
            var p = t.lastIntValue;
            return c !== -1 && p !== -1 && c > p && t.raise("Range out of order in character class"), !0;
          }
          t.pos = n;
        }
        return !1;
      }, te.regexp_eatClassSetOperand = function(t) {
        return this.regexp_eatClassSetCharacter(t) ? mt : this.regexp_eatClassStringDisjunction(t) || this.regexp_eatNestedClass(t);
      }, te.regexp_eatNestedClass = function(t) {
        var n = t.pos;
        if (t.eat(
          91
          /* [ */
        )) {
          var c = t.eat(
            94
            /* ^ */
          ), p = this.regexp_classContents(t);
          if (t.eat(
            93
            /* ] */
          ))
            return c && p === rt && t.raise("Negated character class may contain strings"), p;
          t.pos = n;
        }
        if (t.eat(
          92
          /* \ */
        )) {
          var C = this.regexp_eatCharacterClassEscape(t);
          if (C)
            return C;
          t.pos = n;
        }
        return null;
      }, te.regexp_eatClassStringDisjunction = function(t) {
        var n = t.pos;
        if (t.eatChars(
          [92, 113]
          /* \q */
        )) {
          if (t.eat(
            123
            /* { */
          )) {
            var c = this.regexp_classStringDisjunctionContents(t);
            if (t.eat(
              125
              /* } */
            ))
              return c;
          } else
            t.raise("Invalid escape");
          t.pos = n;
        }
        return null;
      }, te.regexp_classStringDisjunctionContents = function(t) {
        for (var n = this.regexp_classString(t); t.eat(
          124
          /* | */
        ); )
          this.regexp_classString(t) === rt && (n = rt);
        return n;
      }, te.regexp_classString = function(t) {
        for (var n = 0; this.regexp_eatClassSetCharacter(t); )
          n++;
        return n === 1 ? mt : rt;
      }, te.regexp_eatClassSetCharacter = function(t) {
        var n = t.pos;
        if (t.eat(
          92
          /* \ */
        ))
          return this.regexp_eatCharacterEscape(t) || this.regexp_eatClassSetReservedPunctuator(t) ? !0 : t.eat(
            98
            /* b */
          ) ? (t.lastIntValue = 8, !0) : (t.pos = n, !1);
        var c = t.current();
        return c < 0 || c === t.lookahead() && ta(c) || ia(c) ? !1 : (t.advance(), t.lastIntValue = c, !0);
      };
      function ta(t) {
        return t === 33 || t >= 35 && t <= 38 || t >= 42 && t <= 44 || t === 46 || t >= 58 && t <= 64 || t === 94 || t === 96 || t === 126;
      }
      function ia(t) {
        return t === 40 || t === 41 || t === 45 || t === 47 || t >= 91 && t <= 93 || t >= 123 && t <= 125;
      }
      te.regexp_eatClassSetReservedPunctuator = function(t) {
        var n = t.current();
        return ra(n) ? (t.lastIntValue = n, t.advance(), !0) : !1;
      };
      function ra(t) {
        return t === 33 || t === 35 || t === 37 || t === 38 || t === 44 || t === 45 || t >= 58 && t <= 62 || t === 64 || t === 96 || t === 126;
      }
      te.regexp_eatClassControlLetter = function(t) {
        var n = t.current();
        return mi(n) || n === 95 ? (t.lastIntValue = n % 32, t.advance(), !0) : !1;
      }, te.regexp_eatHexEscapeSequence = function(t) {
        var n = t.pos;
        if (t.eat(
          120
          /* x */
        )) {
          if (this.regexp_eatFixedHexDigits(t, 2))
            return !0;
          t.switchU && t.raise("Invalid escape"), t.pos = n;
        }
        return !1;
      }, te.regexp_eatDecimalDigits = function(t) {
        var n = t.pos, c = 0;
        for (t.lastIntValue = 0; mi(c = t.current()); )
          t.lastIntValue = 10 * t.lastIntValue + (c - 48), t.advance();
        return t.pos !== n;
      };
      function mi(t) {
        return t >= 48 && t <= 57;
      }
      te.regexp_eatHexDigits = function(t) {
        var n = t.pos, c = 0;
        for (t.lastIntValue = 0; Dr(c = t.current()); )
          t.lastIntValue = 16 * t.lastIntValue + jr(c), t.advance();
        return t.pos !== n;
      };
      function Dr(t) {
        return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
      }
      function jr(t) {
        return t >= 65 && t <= 70 ? 10 + (t - 65) : t >= 97 && t <= 102 ? 10 + (t - 97) : t - 48;
      }
      te.regexp_eatLegacyOctalEscapeSequence = function(t) {
        if (this.regexp_eatOctalDigit(t)) {
          var n = t.lastIntValue;
          if (this.regexp_eatOctalDigit(t)) {
            var c = t.lastIntValue;
            n <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = n * 64 + c * 8 + t.lastIntValue : t.lastIntValue = n * 8 + c;
          } else
            t.lastIntValue = n;
          return !0;
        }
        return !1;
      }, te.regexp_eatOctalDigit = function(t) {
        var n = t.current();
        return qr(n) ? (t.lastIntValue = n - 48, t.advance(), !0) : (t.lastIntValue = 0, !1);
      };
      function qr(t) {
        return t >= 48 && t <= 55;
      }
      te.regexp_eatFixedHexDigits = function(t, n) {
        var c = t.pos;
        t.lastIntValue = 0;
        for (var p = 0; p < n; ++p) {
          var C = t.current();
          if (!Dr(C))
            return t.pos = c, !1;
          t.lastIntValue = 16 * t.lastIntValue + jr(C), t.advance();
        }
        return !0;
      };
      var gi = function(n) {
        this.type = n.type, this.value = n.value, this.start = n.start, this.end = n.end, n.options.locations && (this.loc = new ae(n, n.startLoc, n.endLoc)), n.options.ranges && (this.range = [n.start, n.end]);
      }, Ee = ge.prototype;
      Ee.next = function(t) {
        !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new gi(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
      }, Ee.getToken = function() {
        return this.next(), new gi(this);
      }, typeof Symbol < "u" && (Ee[Symbol.iterator] = function() {
        var t = this;
        return {
          next: function() {
            var n = t.getToken();
            return {
              done: n.type === u.eof,
              value: n
            };
          }
        };
      }), Ee.nextToken = function() {
        var t = this.curContext();
        if ((!t || !t.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
          return this.finishToken(u.eof);
        if (t.override)
          return t.override(this);
        this.readToken(this.fullCharCodeAtPos());
      }, Ee.readToken = function(t) {
        return T(t, this.options.ecmaVersion >= 6) || t === 92 ? this.readWord() : this.getTokenFromCode(t);
      }, Ee.fullCharCodeAtPos = function() {
        var t = this.input.charCodeAt(this.pos);
        if (t <= 55295 || t >= 56320)
          return t;
        var n = this.input.charCodeAt(this.pos + 1);
        return n <= 56319 || n >= 57344 ? t : (t << 10) + n - 56613888;
      }, Ee.skipBlockComment = function() {
        var t = this.options.onComment && this.curPosition(), n = this.pos, c = this.input.indexOf("*/", this.pos += 2);
        if (c === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = c + 2, this.options.locations)
          for (var p = void 0, C = n; (p = H(this.input, C, this.pos)) > -1; )
            ++this.curLine, C = this.lineStart = p;
        this.options.onComment && this.options.onComment(
          !0,
          this.input.slice(n + 2, c),
          n,
          this.pos,
          t,
          this.curPosition()
        );
      }, Ee.skipLineComment = function(t) {
        for (var n = this.pos, c = this.options.onComment && this.curPosition(), p = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !Y(p); )
          p = this.input.charCodeAt(++this.pos);
        this.options.onComment && this.options.onComment(
          !1,
          this.input.slice(n + t, this.pos),
          n,
          this.pos,
          c,
          this.curPosition()
        );
      }, Ee.skipSpace = function() {
        e:
          for (; this.pos < this.input.length; ) {
            var t = this.input.charCodeAt(this.pos);
            switch (t) {
              case 32:
              case 160:
                ++this.pos;
                break;
              case 13:
                this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
              case 10:
              case 8232:
              case 8233:
                ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
                break;
              case 47:
                switch (this.input.charCodeAt(this.pos + 1)) {
                  case 42:
                    this.skipBlockComment();
                    break;
                  case 47:
                    this.skipLineComment(2);
                    break;
                  default:
                    break e;
                }
                break;
              default:
                if (t > 8 && t < 14 || t >= 5760 && ne.test(String.fromCharCode(t)))
                  ++this.pos;
                else
                  break e;
            }
          }
      }, Ee.finishToken = function(t, n) {
        this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var c = this.type;
        this.type = t, this.value = n, this.updateContext(c);
      }, Ee.readToken_dot = function() {
        var t = this.input.charCodeAt(this.pos + 1);
        if (t >= 48 && t <= 57)
          return this.readNumber(!0);
        var n = this.input.charCodeAt(this.pos + 2);
        return this.options.ecmaVersion >= 6 && t === 46 && n === 46 ? (this.pos += 3, this.finishToken(u.ellipsis)) : (++this.pos, this.finishToken(u.dot));
      }, Ee.readToken_slash = function() {
        var t = this.input.charCodeAt(this.pos + 1);
        return this.exprAllowed ? (++this.pos, this.readRegexp()) : t === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.slash, 1);
      }, Ee.readToken_mult_modulo_exp = function(t) {
        var n = this.input.charCodeAt(this.pos + 1), c = 1, p = t === 42 ? u.star : u.modulo;
        return this.options.ecmaVersion >= 7 && t === 42 && n === 42 && (++c, p = u.starstar, n = this.input.charCodeAt(this.pos + 2)), n === 61 ? this.finishOp(u.assign, c + 1) : this.finishOp(p, c);
      }, Ee.readToken_pipe_amp = function(t) {
        var n = this.input.charCodeAt(this.pos + 1);
        if (n === t) {
          if (this.options.ecmaVersion >= 12) {
            var c = this.input.charCodeAt(this.pos + 2);
            if (c === 61)
              return this.finishOp(u.assign, 3);
          }
          return this.finishOp(t === 124 ? u.logicalOR : u.logicalAND, 2);
        }
        return n === 61 ? this.finishOp(u.assign, 2) : this.finishOp(t === 124 ? u.bitwiseOR : u.bitwiseAND, 1);
      }, Ee.readToken_caret = function() {
        var t = this.input.charCodeAt(this.pos + 1);
        return t === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.bitwiseXOR, 1);
      }, Ee.readToken_plus_min = function(t) {
        var n = this.input.charCodeAt(this.pos + 1);
        return n === t ? n === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || I.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(u.incDec, 2) : n === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.plusMin, 1);
      }, Ee.readToken_lt_gt = function(t) {
        var n = this.input.charCodeAt(this.pos + 1), c = 1;
        return n === t ? (c = t === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + c) === 61 ? this.finishOp(u.assign, c + 1) : this.finishOp(u.bitShift, c)) : n === 33 && t === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (n === 61 && (c = 2), this.finishOp(u.relational, c));
      }, Ee.readToken_eq_excl = function(t) {
        var n = this.input.charCodeAt(this.pos + 1);
        return n === 61 ? this.finishOp(u.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : t === 61 && n === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(u.arrow)) : this.finishOp(t === 61 ? u.eq : u.prefix, 1);
      }, Ee.readToken_question = function() {
        var t = this.options.ecmaVersion;
        if (t >= 11) {
          var n = this.input.charCodeAt(this.pos + 1);
          if (n === 46) {
            var c = this.input.charCodeAt(this.pos + 2);
            if (c < 48 || c > 57)
              return this.finishOp(u.questionDot, 2);
          }
          if (n === 63) {
            if (t >= 12) {
              var p = this.input.charCodeAt(this.pos + 2);
              if (p === 61)
                return this.finishOp(u.assign, 3);
            }
            return this.finishOp(u.coalesce, 2);
          }
        }
        return this.finishOp(u.question, 1);
      }, Ee.readToken_numberSign = function() {
        var t = this.options.ecmaVersion, n = 35;
        if (t >= 13 && (++this.pos, n = this.fullCharCodeAtPos(), T(n, !0) || n === 92))
          return this.finishToken(u.privateId, this.readWord1());
        this.raise(this.pos, "Unexpected character '" + D(n) + "'");
      }, Ee.getTokenFromCode = function(t) {
        switch (t) {
          case 46:
            return this.readToken_dot();
          case 40:
            return ++this.pos, this.finishToken(u.parenL);
          case 41:
            return ++this.pos, this.finishToken(u.parenR);
          case 59:
            return ++this.pos, this.finishToken(u.semi);
          case 44:
            return ++this.pos, this.finishToken(u.comma);
          case 91:
            return ++this.pos, this.finishToken(u.bracketL);
          case 93:
            return ++this.pos, this.finishToken(u.bracketR);
          case 123:
            return ++this.pos, this.finishToken(u.braceL);
          case 125:
            return ++this.pos, this.finishToken(u.braceR);
          case 58:
            return ++this.pos, this.finishToken(u.colon);
          case 96:
            if (this.options.ecmaVersion < 6)
              break;
            return ++this.pos, this.finishToken(u.backQuote);
          case 48:
            var n = this.input.charCodeAt(this.pos + 1);
            if (n === 120 || n === 88)
              return this.readRadixNumber(16);
            if (this.options.ecmaVersion >= 6) {
              if (n === 111 || n === 79)
                return this.readRadixNumber(8);
              if (n === 98 || n === 66)
                return this.readRadixNumber(2);
            }
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return this.readNumber(!1);
          case 34:
          case 39:
            return this.readString(t);
          case 47:
            return this.readToken_slash();
          case 37:
          case 42:
            return this.readToken_mult_modulo_exp(t);
          case 124:
          case 38:
            return this.readToken_pipe_amp(t);
          case 94:
            return this.readToken_caret();
          case 43:
          case 45:
            return this.readToken_plus_min(t);
          case 60:
          case 62:
            return this.readToken_lt_gt(t);
          case 61:
          case 33:
            return this.readToken_eq_excl(t);
          case 63:
            return this.readToken_question();
          case 126:
            return this.finishOp(u.prefix, 1);
          case 35:
            return this.readToken_numberSign();
        }
        this.raise(this.pos, "Unexpected character '" + D(t) + "'");
      }, Ee.finishOp = function(t, n) {
        var c = this.input.slice(this.pos, this.pos + n);
        return this.pos += n, this.finishToken(t, c);
      }, Ee.readRegexp = function() {
        for (var t, n, c = this.pos; ; ) {
          this.pos >= this.input.length && this.raise(c, "Unterminated regular expression");
          var p = this.input.charAt(this.pos);
          if (I.test(p) && this.raise(c, "Unterminated regular expression"), t)
            t = !1;
          else {
            if (p === "[")
              n = !0;
            else if (p === "]" && n)
              n = !1;
            else if (p === "/" && !n)
              break;
            t = p === "\\";
          }
          ++this.pos;
        }
        var C = this.input.slice(c, this.pos);
        ++this.pos;
        var R = this.pos, O = this.readWord1();
        this.containsEsc && this.unexpected(R);
        var W = this.regexpState || (this.regexpState = new ft(this));
        W.reset(c, C, O), this.validateRegExpFlags(W), this.validateRegExpPattern(W);
        var $ = null;
        try {
          $ = new RegExp(C, O);
        } catch {
        }
        return this.finishToken(u.regexp, { pattern: C, flags: O, value: $ });
      }, Ee.readInt = function(t, n, c) {
        for (var p = this.options.ecmaVersion >= 12 && n === void 0, C = c && this.input.charCodeAt(this.pos) === 48, R = this.pos, O = 0, W = 0, $ = 0, ve = n ?? 1 / 0; $ < ve; ++$, ++this.pos) {
          var _e = this.input.charCodeAt(this.pos), ze = void 0;
          if (p && _e === 95) {
            C && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), W === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), $ === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), W = _e;
            continue;
          }
          if (_e >= 97 ? ze = _e - 97 + 10 : _e >= 65 ? ze = _e - 65 + 10 : _e >= 48 && _e <= 57 ? ze = _e - 48 : ze = 1 / 0, ze >= t)
            break;
          W = _e, O = O * t + ze;
        }
        return p && W === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === R || n != null && this.pos - R !== n ? null : O;
      };
      function na(t, n) {
        return n ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""));
      }
      function Ur(t) {
        return typeof BigInt != "function" ? null : BigInt(t.replace(/_/g, ""));
      }
      Ee.readRadixNumber = function(t) {
        var n = this.pos;
        this.pos += 2;
        var c = this.readInt(t);
        return c == null && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (c = Ur(this.input.slice(n, this.pos)), ++this.pos) : T(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(u.num, c);
      }, Ee.readNumber = function(t) {
        var n = this.pos;
        !t && this.readInt(10, void 0, !0) === null && this.raise(n, "Invalid number");
        var c = this.pos - n >= 2 && this.input.charCodeAt(n) === 48;
        c && this.strict && this.raise(n, "Invalid number");
        var p = this.input.charCodeAt(this.pos);
        if (!c && !t && this.options.ecmaVersion >= 11 && p === 110) {
          var C = Ur(this.input.slice(n, this.pos));
          return ++this.pos, T(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(u.num, C);
        }
        c && /[89]/.test(this.input.slice(n, this.pos)) && (c = !1), p === 46 && !c && (++this.pos, this.readInt(10), p = this.input.charCodeAt(this.pos)), (p === 69 || p === 101) && !c && (p = this.input.charCodeAt(++this.pos), (p === 43 || p === 45) && ++this.pos, this.readInt(10) === null && this.raise(n, "Invalid number")), T(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
        var R = na(this.input.slice(n, this.pos), c);
        return this.finishToken(u.num, R);
      }, Ee.readCodePoint = function() {
        var t = this.input.charCodeAt(this.pos), n;
        if (t === 123) {
          this.options.ecmaVersion < 6 && this.unexpected();
          var c = ++this.pos;
          n = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, n > 1114111 && this.invalidStringToken(c, "Code point out of bounds");
        } else
          n = this.readHexChar(4);
        return n;
      }, Ee.readString = function(t) {
        for (var n = "", c = ++this.pos; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
          var p = this.input.charCodeAt(this.pos);
          if (p === t)
            break;
          p === 92 ? (n += this.input.slice(c, this.pos), n += this.readEscapedChar(!1), c = this.pos) : p === 8232 || p === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Y(p) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
        }
        return n += this.input.slice(c, this.pos++), this.finishToken(u.string, n);
      };
      var Wr = {};
      Ee.tryReadTemplateToken = function() {
        this.inTemplateElement = !0;
        try {
          this.readTmplToken();
        } catch (t) {
          if (t === Wr)
            this.readInvalidTemplateToken();
          else
            throw t;
        }
        this.inTemplateElement = !1;
      }, Ee.invalidStringToken = function(t, n) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9)
          throw Wr;
        this.raise(t, n);
      }, Ee.readTmplToken = function() {
        for (var t = "", n = this.pos; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
          var c = this.input.charCodeAt(this.pos);
          if (c === 96 || c === 36 && this.input.charCodeAt(this.pos + 1) === 123)
            return this.pos === this.start && (this.type === u.template || this.type === u.invalidTemplate) ? c === 36 ? (this.pos += 2, this.finishToken(u.dollarBraceL)) : (++this.pos, this.finishToken(u.backQuote)) : (t += this.input.slice(n, this.pos), this.finishToken(u.template, t));
          if (c === 92)
            t += this.input.slice(n, this.pos), t += this.readEscapedChar(!0), n = this.pos;
          else if (Y(c)) {
            switch (t += this.input.slice(n, this.pos), ++this.pos, c) {
              case 13:
                this.input.charCodeAt(this.pos) === 10 && ++this.pos;
              case 10:
                t += `
`;
                break;
              default:
                t += String.fromCharCode(c);
                break;
            }
            this.options.locations && (++this.curLine, this.lineStart = this.pos), n = this.pos;
          } else
            ++this.pos;
        }
      }, Ee.readInvalidTemplateToken = function() {
        for (; this.pos < this.input.length; this.pos++)
          switch (this.input[this.pos]) {
            case "\\":
              ++this.pos;
              break;
            case "$":
              if (this.input[this.pos + 1] !== "{")
                break;
            case "`":
              return this.finishToken(u.invalidTemplate, this.input.slice(this.start, this.pos));
          }
        this.raise(this.start, "Unterminated template");
      }, Ee.readEscapedChar = function(t) {
        var n = this.input.charCodeAt(++this.pos);
        switch (++this.pos, n) {
          case 110:
            return `
`;
          case 114:
            return "\r";
          case 120:
            return String.fromCharCode(this.readHexChar(2));
          case 117:
            return D(this.readCodePoint());
          case 116:
            return "	";
          case 98:
            return "\b";
          case 118:
            return "\v";
          case 102:
            return "\f";
          case 13:
            this.input.charCodeAt(this.pos) === 10 && ++this.pos;
          case 10:
            return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
          case 56:
          case 57:
            if (this.strict && this.invalidStringToken(
              this.pos - 1,
              "Invalid escape sequence"
            ), t) {
              var c = this.pos - 1;
              this.invalidStringToken(
                c,
                "Invalid escape sequence in template string"
              );
            }
          default:
            if (n >= 48 && n <= 55) {
              var p = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], C = parseInt(p, 8);
              return C > 255 && (p = p.slice(0, -1), C = parseInt(p, 8)), this.pos += p.length - 1, n = this.input.charCodeAt(this.pos), (p !== "0" || n === 56 || n === 57) && (this.strict || t) && this.invalidStringToken(
                this.pos - 1 - p.length,
                t ? "Octal literal in template string" : "Octal literal in strict mode"
              ), String.fromCharCode(C);
            }
            return Y(n) ? "" : String.fromCharCode(n);
        }
      }, Ee.readHexChar = function(t) {
        var n = this.pos, c = this.readInt(16, t);
        return c === null && this.invalidStringToken(n, "Bad character escape sequence"), c;
      }, Ee.readWord1 = function() {
        this.containsEsc = !1;
        for (var t = "", n = !0, c = this.pos, p = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
          var C = this.fullCharCodeAtPos();
          if (E(C, p))
            this.pos += C <= 65535 ? 1 : 2;
          else if (C === 92) {
            this.containsEsc = !0, t += this.input.slice(c, this.pos);
            var R = this.pos;
            this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
            var O = this.readCodePoint();
            (n ? T : E)(O, p) || this.invalidStringToken(R, "Invalid Unicode escape"), t += D(O), c = this.pos;
          } else
            break;
          n = !1;
        }
        return t + this.input.slice(c, this.pos);
      }, Ee.readWord = function() {
        var t = this.readWord1(), n = u.name;
        return this.keywords.test(t) && (n = N[t]), this.finishToken(n, t);
      };
      var Gr = "8.11.3";
      ge.acorn = {
        Parser: ge,
        version: Gr,
        defaultOptions: le,
        Position: M,
        SourceLocation: ae,
        getLineInfo: oe,
        Node: V,
        TokenType: w,
        tokTypes: u,
        keywordTypes: N,
        TokContext: Qe,
        tokContexts: Fe,
        isIdentifierChar: E,
        isIdentifierStart: T,
        Token: gi,
        isNewLine: Y,
        lineBreak: I,
        lineBreakG: L,
        nonASCIIwhitespace: ne
      };
      function sa(t, n) {
        return ge.parse(t, n);
      }
      function aa(t, n, c) {
        return ge.parseExpressionAt(t, n, c);
      }
      function oa(t, n) {
        return ge.tokenizer(t, n);
      }
      r.Node = V, r.Parser = ge, r.Position = M, r.SourceLocation = ae, r.TokContext = Qe, r.Token = gi, r.TokenType = w, r.defaultOptions = le, r.getLineInfo = oe, r.isIdentifierChar = E, r.isIdentifierStart = T, r.isNewLine = Y, r.keywordTypes = N, r.lineBreak = I, r.lineBreakG = L, r.nonASCIIwhitespace = ne, r.parse = sa, r.parseExpressionAt = aa, r.tokContexts = Fe, r.tokTypes = u, r.tokenizer = oa, r.version = Gr;
    });
  }(Si, Si.exports)), Si.exports;
}
(function(e) {
  const i = Ao, r = /^[\da-fA-F]+$/, s = /^\d+$/, o = /* @__PURE__ */ new WeakMap();
  function l(x) {
    x = x.Parser.acorn || x;
    let _ = o.get(x);
    if (!_) {
      const b = x.tokTypes, A = x.TokContext, P = x.TokenType, k = new A("<tag", !1), T = new A("</tag", !1), E = new A("<tag>...</tag>", !0, !0), w = {
        tc_oTag: k,
        tc_cTag: T,
        tc_expr: E
      }, B = {
        jsxName: new P("jsxName"),
        jsxText: new P("jsxText", { beforeExpr: !0 }),
        jsxTagStart: new P("jsxTagStart", { startsExpr: !0 }),
        jsxTagEnd: new P("jsxTagEnd")
      };
      B.jsxTagStart.updateContext = function() {
        this.context.push(E), this.context.push(k), this.exprAllowed = !1;
      }, B.jsxTagEnd.updateContext = function(j) {
        let U = this.context.pop();
        U === k && j === b.slash || U === T ? (this.context.pop(), this.exprAllowed = this.curContext() === E) : this.exprAllowed = !0;
      }, _ = { tokContexts: w, tokTypes: B }, o.set(x, _);
    }
    return _;
  }
  function f(x) {
    if (!x)
      return x;
    if (x.type === "JSXIdentifier")
      return x.name;
    if (x.type === "JSXNamespacedName")
      return x.namespace.name + ":" + x.name.name;
    if (x.type === "JSXMemberExpression")
      return f(x.object) + "." + f(x.property);
  }
  e.exports = function(x) {
    return x = x || {}, function(_) {
      return v({
        allowNamespaces: x.allowNamespaces !== !1,
        allowNamespacedObjects: !!x.allowNamespacedObjects
      }, _);
    };
  }, Object.defineProperty(e.exports, "tokTypes", {
    get: function() {
      return l(bn()).tokTypes;
    },
    configurable: !0,
    enumerable: !0
  });
  function v(x, _) {
    const b = _.acorn || bn(), A = l(b), P = b.tokTypes, k = A.tokTypes, T = b.tokContexts, E = A.tokContexts.tc_oTag, w = A.tokContexts.tc_cTag, B = A.tokContexts.tc_expr, j = b.isNewLine, U = b.isIdentifierStart, N = b.isIdentifierChar;
    return class extends _ {
      // Expose actual `tokTypes` and `tokContexts` to other plugins.
      static get acornJsx() {
        return A;
      }
      // Reads inline JSX contents token.
      jsx_readToken() {
        let g = "", u = this.pos;
        for (; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
          let I = this.input.charCodeAt(this.pos);
          switch (I) {
            case 60:
            case 123:
              return this.pos === this.start ? I === 60 && this.exprAllowed ? (++this.pos, this.finishToken(k.jsxTagStart)) : this.getTokenFromCode(I) : (g += this.input.slice(u, this.pos), this.finishToken(k.jsxText, g));
            case 38:
              g += this.input.slice(u, this.pos), g += this.jsx_readEntity(), u = this.pos;
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (I === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?'
              );
            default:
              j(I) ? (g += this.input.slice(u, this.pos), g += this.jsx_readNewLine(!0), u = this.pos) : ++this.pos;
          }
        }
      }
      jsx_readNewLine(g) {
        let u = this.input.charCodeAt(this.pos), I;
        return ++this.pos, u === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, I = g ? `
` : `\r
`) : I = String.fromCharCode(u), this.options.locations && (++this.curLine, this.lineStart = this.pos), I;
      }
      jsx_readString(g) {
        let u = "", I = ++this.pos;
        for (; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
          let L = this.input.charCodeAt(this.pos);
          if (L === g)
            break;
          L === 38 ? (u += this.input.slice(I, this.pos), u += this.jsx_readEntity(), I = this.pos) : j(L) ? (u += this.input.slice(I, this.pos), u += this.jsx_readNewLine(!1), I = this.pos) : ++this.pos;
        }
        return u += this.input.slice(I, this.pos++), this.finishToken(P.string, u);
      }
      jsx_readEntity() {
        let g = "", u = 0, I, L = this.input[this.pos];
        L !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
        let Y = ++this.pos;
        for (; this.pos < this.input.length && u++ < 10; ) {
          if (L = this.input[this.pos++], L === ";") {
            g[0] === "#" ? g[1] === "x" ? (g = g.substr(2), r.test(g) && (I = String.fromCharCode(parseInt(g, 16)))) : (g = g.substr(1), s.test(g) && (I = String.fromCharCode(parseInt(g, 10)))) : I = i[g];
            break;
          }
          g += L;
        }
        return I || (this.pos = Y, "&");
      }
      // Read a JSX identifier (valid tag or attribute name).
      //
      // Optimized version since JSX identifiers can't contain
      // escape characters and so can be read as single slice.
      // Also assumes that first character was already checked
      // by isIdentifierStart in readToken.
      jsx_readWord() {
        let g, u = this.pos;
        do
          g = this.input.charCodeAt(++this.pos);
        while (N(g) || g === 45);
        return this.finishToken(k.jsxName, this.input.slice(u, this.pos));
      }
      // Parse next token as JSX identifier
      jsx_parseIdentifier() {
        let g = this.startNode();
        return this.type === k.jsxName ? g.name = this.value : this.type.keyword ? g.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(g, "JSXIdentifier");
      }
      // Parse namespaced identifier.
      jsx_parseNamespacedName() {
        let g = this.start, u = this.startLoc, I = this.jsx_parseIdentifier();
        if (!x.allowNamespaces || !this.eat(P.colon))
          return I;
        var L = this.startNodeAt(g, u);
        return L.namespace = I, L.name = this.jsx_parseIdentifier(), this.finishNode(L, "JSXNamespacedName");
      }
      // Parses element name in any form - namespaced, member
      // or single identifier.
      jsx_parseElementName() {
        if (this.type === k.jsxTagEnd)
          return "";
        let g = this.start, u = this.startLoc, I = this.jsx_parseNamespacedName();
        for (this.type === P.dot && I.type === "JSXNamespacedName" && !x.allowNamespacedObjects && this.unexpected(); this.eat(P.dot); ) {
          let L = this.startNodeAt(g, u);
          L.object = I, L.property = this.jsx_parseIdentifier(), I = this.finishNode(L, "JSXMemberExpression");
        }
        return I;
      }
      // Parses any type of JSX attribute value.
      jsx_parseAttributeValue() {
        switch (this.type) {
          case P.braceL:
            let g = this.jsx_parseExpressionContainer();
            return g.expression.type === "JSXEmptyExpression" && this.raise(g.start, "JSX attributes must only be assigned a non-empty expression"), g;
          case k.jsxTagStart:
          case P.string:
            return this.parseExprAtom();
          default:
            this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
        }
      }
      // JSXEmptyExpression is unique type since it doesn't actually parse anything,
      // and so it should start at the end of last read token (left brace) and finish
      // at the beginning of the next one (right brace).
      jsx_parseEmptyExpression() {
        let g = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(g, "JSXEmptyExpression", this.start, this.startLoc);
      }
      // Parses JSX expression enclosed into curly brackets.
      jsx_parseExpressionContainer() {
        let g = this.startNode();
        return this.next(), g.expression = this.type === P.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(P.braceR), this.finishNode(g, "JSXExpressionContainer");
      }
      // Parses following JSX attribute name-value pair.
      jsx_parseAttribute() {
        let g = this.startNode();
        return this.eat(P.braceL) ? (this.expect(P.ellipsis), g.argument = this.parseMaybeAssign(), this.expect(P.braceR), this.finishNode(g, "JSXSpreadAttribute")) : (g.name = this.jsx_parseNamespacedName(), g.value = this.eat(P.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(g, "JSXAttribute"));
      }
      // Parses JSX opening tag starting after '<'.
      jsx_parseOpeningElementAt(g, u) {
        let I = this.startNodeAt(g, u);
        I.attributes = [];
        let L = this.jsx_parseElementName();
        for (L && (I.name = L); this.type !== P.slash && this.type !== k.jsxTagEnd; )
          I.attributes.push(this.jsx_parseAttribute());
        return I.selfClosing = this.eat(P.slash), this.expect(k.jsxTagEnd), this.finishNode(I, L ? "JSXOpeningElement" : "JSXOpeningFragment");
      }
      // Parses JSX closing tag starting after '</'.
      jsx_parseClosingElementAt(g, u) {
        let I = this.startNodeAt(g, u), L = this.jsx_parseElementName();
        return L && (I.name = L), this.expect(k.jsxTagEnd), this.finishNode(I, L ? "JSXClosingElement" : "JSXClosingFragment");
      }
      // Parses entire JSX element, including it's opening tag
      // (starting after '<'), attributes, contents and closing tag.
      jsx_parseElementAt(g, u) {
        let I = this.startNodeAt(g, u), L = [], Y = this.jsx_parseOpeningElementAt(g, u), H = null;
        if (!Y.selfClosing) {
          e:
            for (; ; )
              switch (this.type) {
                case k.jsxTagStart:
                  if (g = this.start, u = this.startLoc, this.next(), this.eat(P.slash)) {
                    H = this.jsx_parseClosingElementAt(g, u);
                    break e;
                  }
                  L.push(this.jsx_parseElementAt(g, u));
                  break;
                case k.jsxText:
                  L.push(this.parseExprAtom());
                  break;
                case P.braceL:
                  L.push(this.jsx_parseExpressionContainer());
                  break;
                default:
                  this.unexpected();
              }
          f(H.name) !== f(Y.name) && this.raise(
            H.start,
            "Expected corresponding JSX closing tag for <" + f(Y.name) + ">"
          );
        }
        let ne = Y.name ? "Element" : "Fragment";
        return I["opening" + ne] = Y, I["closing" + ne] = H, I.children = L, this.type === P.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(I, "JSX" + ne);
      }
      // Parse JSX text
      jsx_parseText() {
        let g = this.parseLiteral(this.value);
        return g.type = "JSXText", g;
      }
      // Parses entire JSX element from current position.
      jsx_parseElement() {
        let g = this.start, u = this.startLoc;
        return this.next(), this.jsx_parseElementAt(g, u);
      }
      parseExprAtom(g) {
        return this.type === k.jsxText ? this.jsx_parseText() : this.type === k.jsxTagStart ? this.jsx_parseElement() : super.parseExprAtom(g);
      }
      readToken(g) {
        let u = this.curContext();
        if (u === B)
          return this.jsx_readToken();
        if (u === E || u === w) {
          if (U(g))
            return this.jsx_readWord();
          if (g == 62)
            return ++this.pos, this.finishToken(k.jsxTagEnd);
          if ((g === 34 || g === 39) && u == E)
            return this.jsx_readString(g);
        }
        return g === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33 ? (++this.pos, this.finishToken(k.jsxTagStart)) : super.readToken(g);
      }
      updateContext(g) {
        if (this.type == P.braceL) {
          var u = this.curContext();
          u == E ? this.context.push(T.b_expr) : u == B ? this.context.push(T.b_tmpl) : super.updateContext(g), this.exprAllowed = !0;
        } else if (this.type === P.slash && g === k.jsxTagStart)
          this.context.length -= 2, this.context.push(w), this.exprAllowed = !1;
        else
          return super.updateContext(g);
      }
    };
  }
})(bs);
var ko = bs.exports;
const Po = /* @__PURE__ */ ni(ko);
function Ss(e, i, r, s, o) {
  r || (r = z), function l(f, v, x) {
    var _ = x || f.type, b = i[_];
    r[_](f, v, l), b && b(f, v);
  }(e, s, o);
}
function Io(e, i, r, s, o) {
  var l = [];
  r || (r = z), function f(v, x, _) {
    var b = _ || v.type, A = i[b], P = v !== l[l.length - 1];
    P && l.push(v), r[b](v, x, f), A && A(v, x || l, l), P && l.pop();
  }(e, s, o);
}
function Sr(e, i, r) {
  r(e, i);
}
function Tt(e, i, r) {
}
var z = {};
z.Program = z.BlockStatement = function(e, i, r) {
  for (var s = 0, o = e.body; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Statement");
  }
};
z.Statement = Sr;
z.EmptyStatement = Tt;
z.ExpressionStatement = z.ParenthesizedExpression = z.ChainExpression = function(e, i, r) {
  return r(e.expression, i, "Expression");
};
z.IfStatement = function(e, i, r) {
  r(e.test, i, "Expression"), r(e.consequent, i, "Statement"), e.alternate && r(e.alternate, i, "Statement");
};
z.LabeledStatement = function(e, i, r) {
  return r(e.body, i, "Statement");
};
z.BreakStatement = z.ContinueStatement = Tt;
z.WithStatement = function(e, i, r) {
  r(e.object, i, "Expression"), r(e.body, i, "Statement");
};
z.SwitchStatement = function(e, i, r) {
  r(e.discriminant, i, "Expression");
  for (var s = 0, o = e.cases; s < o.length; s += 1) {
    var l = o[s];
    l.test && r(l.test, i, "Expression");
    for (var f = 0, v = l.consequent; f < v.length; f += 1) {
      var x = v[f];
      r(x, i, "Statement");
    }
  }
};
z.SwitchCase = function(e, i, r) {
  e.test && r(e.test, i, "Expression");
  for (var s = 0, o = e.consequent; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Statement");
  }
};
z.ReturnStatement = z.YieldExpression = z.AwaitExpression = function(e, i, r) {
  e.argument && r(e.argument, i, "Expression");
};
z.ThrowStatement = z.SpreadElement = function(e, i, r) {
  return r(e.argument, i, "Expression");
};
z.TryStatement = function(e, i, r) {
  r(e.block, i, "Statement"), e.handler && r(e.handler, i), e.finalizer && r(e.finalizer, i, "Statement");
};
z.CatchClause = function(e, i, r) {
  e.param && r(e.param, i, "Pattern"), r(e.body, i, "Statement");
};
z.WhileStatement = z.DoWhileStatement = function(e, i, r) {
  r(e.test, i, "Expression"), r(e.body, i, "Statement");
};
z.ForStatement = function(e, i, r) {
  e.init && r(e.init, i, "ForInit"), e.test && r(e.test, i, "Expression"), e.update && r(e.update, i, "Expression"), r(e.body, i, "Statement");
};
z.ForInStatement = z.ForOfStatement = function(e, i, r) {
  r(e.left, i, "ForInit"), r(e.right, i, "Expression"), r(e.body, i, "Statement");
};
z.ForInit = function(e, i, r) {
  e.type === "VariableDeclaration" ? r(e, i) : r(e, i, "Expression");
};
z.DebuggerStatement = Tt;
z.FunctionDeclaration = function(e, i, r) {
  return r(e, i, "Function");
};
z.VariableDeclaration = function(e, i, r) {
  for (var s = 0, o = e.declarations; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
};
z.VariableDeclarator = function(e, i, r) {
  r(e.id, i, "Pattern"), e.init && r(e.init, i, "Expression");
};
z.Function = function(e, i, r) {
  e.id && r(e.id, i, "Pattern");
  for (var s = 0, o = e.params; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Pattern");
  }
  r(e.body, i, e.expression ? "Expression" : "Statement");
};
z.Pattern = function(e, i, r) {
  e.type === "Identifier" ? r(e, i, "VariablePattern") : e.type === "MemberExpression" ? r(e, i, "MemberPattern") : r(e, i);
};
z.VariablePattern = Tt;
z.MemberPattern = Sr;
z.RestElement = function(e, i, r) {
  return r(e.argument, i, "Pattern");
};
z.ArrayPattern = function(e, i, r) {
  for (var s = 0, o = e.elements; s < o.length; s += 1) {
    var l = o[s];
    l && r(l, i, "Pattern");
  }
};
z.ObjectPattern = function(e, i, r) {
  for (var s = 0, o = e.properties; s < o.length; s += 1) {
    var l = o[s];
    l.type === "Property" ? (l.computed && r(l.key, i, "Expression"), r(l.value, i, "Pattern")) : l.type === "RestElement" && r(l.argument, i, "Pattern");
  }
};
z.Expression = Sr;
z.ThisExpression = z.Super = z.MetaProperty = Tt;
z.ArrayExpression = function(e, i, r) {
  for (var s = 0, o = e.elements; s < o.length; s += 1) {
    var l = o[s];
    l && r(l, i, "Expression");
  }
};
z.ObjectExpression = function(e, i, r) {
  for (var s = 0, o = e.properties; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
};
z.FunctionExpression = z.ArrowFunctionExpression = z.FunctionDeclaration;
z.SequenceExpression = function(e, i, r) {
  for (var s = 0, o = e.expressions; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Expression");
  }
};
z.TemplateLiteral = function(e, i, r) {
  for (var s = 0, o = e.quasis; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
  for (var f = 0, v = e.expressions; f < v.length; f += 1) {
    var x = v[f];
    r(x, i, "Expression");
  }
};
z.TemplateElement = Tt;
z.UnaryExpression = z.UpdateExpression = function(e, i, r) {
  r(e.argument, i, "Expression");
};
z.BinaryExpression = z.LogicalExpression = function(e, i, r) {
  r(e.left, i, "Expression"), r(e.right, i, "Expression");
};
z.AssignmentExpression = z.AssignmentPattern = function(e, i, r) {
  r(e.left, i, "Pattern"), r(e.right, i, "Expression");
};
z.ConditionalExpression = function(e, i, r) {
  r(e.test, i, "Expression"), r(e.consequent, i, "Expression"), r(e.alternate, i, "Expression");
};
z.NewExpression = z.CallExpression = function(e, i, r) {
  if (r(e.callee, i, "Expression"), e.arguments)
    for (var s = 0, o = e.arguments; s < o.length; s += 1) {
      var l = o[s];
      r(l, i, "Expression");
    }
};
z.MemberExpression = function(e, i, r) {
  r(e.object, i, "Expression"), e.computed && r(e.property, i, "Expression");
};
z.ExportNamedDeclaration = z.ExportDefaultDeclaration = function(e, i, r) {
  e.declaration && r(e.declaration, i, e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression"), e.source && r(e.source, i, "Expression");
};
z.ExportAllDeclaration = function(e, i, r) {
  e.exported && r(e.exported, i), r(e.source, i, "Expression");
};
z.ImportDeclaration = function(e, i, r) {
  for (var s = 0, o = e.specifiers; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
  r(e.source, i, "Expression");
};
z.ImportExpression = function(e, i, r) {
  r(e.source, i, "Expression");
};
z.ImportSpecifier = z.ImportDefaultSpecifier = z.ImportNamespaceSpecifier = z.Identifier = z.Literal = Tt;
z.TaggedTemplateExpression = function(e, i, r) {
  r(e.tag, i, "Expression"), r(e.quasi, i, "Expression");
};
z.ClassDeclaration = z.ClassExpression = function(e, i, r) {
  return r(e, i, "Class");
};
z.Class = function(e, i, r) {
  e.id && r(e.id, i, "Pattern"), e.superClass && r(e.superClass, i, "Expression"), r(e.body, i);
};
z.ClassBody = function(e, i, r) {
  for (var s = 0, o = e.body; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
};
z.MethodDefinition = z.Property = function(e, i, r) {
  e.computed && r(e.key, i, "Expression"), r(e.value, i, "Expression");
};
var To = Fn, No = la, Ro = Mn, Lo = "[object Object]", Oo = Function.prototype, Vo = Object.prototype, _s = Oo.toString, Fo = Vo.hasOwnProperty, Mo = _s.call(Object);
function Bo(e) {
  if (!Ro(e) || To(e) != Lo)
    return !1;
  var i = No(e);
  if (i === null)
    return !0;
  var r = Fo.call(i, "constructor") && i.constructor;
  return typeof r == "function" && r instanceof r && _s.call(r) == Mo;
}
var Do = Bo;
const jo = /* @__PURE__ */ ni(Do);
var qo = Fn, Uo = ca, Wo = Mn, Go = "[object String]";
function zo(e) {
  return typeof e == "string" || !Uo(e) && Wo(e) && qo(e) == Go;
}
var $o = zo;
const Ho = /* @__PURE__ */ ni($o);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Sn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Yo(e) {
  var i, r;
  return Sn(e) === !1 ? !1 : (i = e.constructor, i === void 0 ? !0 : (r = i.prototype, !(Sn(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var Cs = {}, Ai = Bt && Bt.__assign || function() {
  return Ai = Object.assign || function(e) {
    for (var i, r = 1, s = arguments.length; r < s; r++) {
      i = arguments[r];
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
    }
    return e;
  }, Ai.apply(this, arguments);
}, Qo = Bt && Bt.__spreadArrays || function() {
  for (var e = 0, i = 0, r = arguments.length; i < r; i++)
    e += arguments[i].length;
  for (var s = Array(e), o = 0, i = 0; i < r; i++)
    for (var l = arguments[i], f = 0, v = l.length; f < v; f++, o++)
      s[o] = l[f];
  return s;
};
Object.defineProperty(Cs, "__esModule", { value: !0 });
var Qt = [];
function Xo(e) {
  var i = typeof e;
  return e !== null && (i === "object" || i === "function");
}
function Jo(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Ko(e) {
  return Object.getOwnPropertySymbols(e).filter(function(i) {
    return Object.prototype.propertyIsEnumerable.call(e, i);
  });
}
function Ci(e, i, r) {
  r === void 0 && (r = "");
  var s = {
    indent: "	",
    singleQuotes: !0
  }, o = Ai(Ai({}, s), i), l;
  o.inlineCharacterLimit === void 0 ? l = {
    newLine: `
`,
    newLineOrSpace: `
`,
    pad: r,
    indent: r + o.indent
  } : l = {
    newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
    newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
    pad: "@@__PRETTY_PRINT_PAD__@@",
    indent: "@@__PRETTY_PRINT_INDENT__@@"
  };
  var f = function(_) {
    if (o.inlineCharacterLimit === void 0)
      return _;
    var b = _.replace(new RegExp(l.newLine, "g"), "").replace(new RegExp(l.newLineOrSpace, "g"), " ").replace(new RegExp(l.pad + "|" + l.indent, "g"), "");
    return b.length <= o.inlineCharacterLimit ? b : _.replace(new RegExp(l.newLine + "|" + l.newLineOrSpace, "g"), `
`).replace(new RegExp(l.pad, "g"), r).replace(new RegExp(l.indent, "g"), r + o.indent);
  };
  if (Qt.indexOf(e) !== -1)
    return '"[Circular]"';
  if (e == null || typeof e == "number" || typeof e == "boolean" || typeof e == "function" || typeof e == "symbol" || Jo(e))
    return String(e);
  if (e instanceof Date)
    return "new Date('" + e.toISOString() + "')";
  if (Array.isArray(e)) {
    if (e.length === 0)
      return "[]";
    Qt.push(e);
    var v = "[" + l.newLine + e.map(function(_, b) {
      var A = e.length - 1 === b ? l.newLine : "," + l.newLineOrSpace, P = Ci(_, o, r + o.indent);
      return o.transform && (P = o.transform(e, b, P)), l.indent + P + A;
    }).join("") + l.pad + "]";
    return Qt.pop(), f(v);
  }
  if (Xo(e)) {
    var x = Qo(Object.keys(e), Ko(e));
    if (o.filter && (x = x.filter(function(b) {
      return o.filter && o.filter(e, b);
    })), x.length === 0)
      return "{}";
    Qt.push(e);
    var v = "{" + l.newLine + x.map(function(b, A) {
      var P = x.length - 1 === A ? l.newLine : "," + l.newLineOrSpace, k = typeof b == "symbol", T = !k && /^[a-z$_][a-z$_0-9]*$/i.test(b.toString()), E = k || T ? b : Ci(b, o), w = Ci(e[b], o, r + o.indent);
      return o.transform && (w = o.transform(e, b, w)), l.indent + String(E) + ": " + w + P;
    }).join("") + l.pad + "}";
    return Qt.pop(), f(v);
  }
  return e = String(e).replace(/[\r\n]/g, function(_) {
    return _ === `
` ? "\\n" : "\\r";
  }), o.singleQuotes ? (e = e.replace(/\\?'/g, "\\'"), "'" + e + "'") : (e = e.replace(/"/g, '\\"'), '"' + e + '"');
}
var Zo = Cs.prettyPrint = Ci, rr = { exports: {} }, Le = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function eu() {
  if (_n)
    return Le;
  _n = 1;
  var e = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), f = Symbol.for("react.context"), v = Symbol.for("react.server_context"), x = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), T;
  T = Symbol.for("react.module.reference");
  function E(w) {
    if (typeof w == "object" && w !== null) {
      var B = w.$$typeof;
      switch (B) {
        case e:
          switch (w = w.type, w) {
            case r:
            case o:
            case s:
            case _:
            case b:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case v:
                case f:
                case x:
                case P:
                case A:
                case l:
                  return w;
                default:
                  return B;
              }
          }
        case i:
          return B;
      }
    }
  }
  return Le.ContextConsumer = f, Le.ContextProvider = l, Le.Element = e, Le.ForwardRef = x, Le.Fragment = r, Le.Lazy = P, Le.Memo = A, Le.Portal = i, Le.Profiler = o, Le.StrictMode = s, Le.Suspense = _, Le.SuspenseList = b, Le.isAsyncMode = function() {
    return !1;
  }, Le.isConcurrentMode = function() {
    return !1;
  }, Le.isContextConsumer = function(w) {
    return E(w) === f;
  }, Le.isContextProvider = function(w) {
    return E(w) === l;
  }, Le.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Le.isForwardRef = function(w) {
    return E(w) === x;
  }, Le.isFragment = function(w) {
    return E(w) === r;
  }, Le.isLazy = function(w) {
    return E(w) === P;
  }, Le.isMemo = function(w) {
    return E(w) === A;
  }, Le.isPortal = function(w) {
    return E(w) === i;
  }, Le.isProfiler = function(w) {
    return E(w) === o;
  }, Le.isStrictMode = function(w) {
    return E(w) === s;
  }, Le.isSuspense = function(w) {
    return E(w) === _;
  }, Le.isSuspenseList = function(w) {
    return E(w) === b;
  }, Le.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === o || w === s || w === _ || w === b || w === k || typeof w == "object" && w !== null && (w.$$typeof === P || w.$$typeof === A || w.$$typeof === l || w.$$typeof === f || w.$$typeof === x || w.$$typeof === T || w.getModuleId !== void 0);
  }, Le.typeOf = E, Le;
}
var Oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function tu() {
  return Cn || (Cn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = !1, i = !1, r = !1, s = !1, o = !1, l = Symbol.for("react.element"), f = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), A = Symbol.for("react.context"), P = Symbol.for("react.server_context"), k = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), U;
    U = Symbol.for("react.module.reference");
    function N(Q) {
      return !!(typeof Q == "string" || typeof Q == "function" || Q === v || Q === _ || o || Q === x || Q === T || Q === E || s || Q === j || e || i || r || typeof Q == "object" && Q !== null && (Q.$$typeof === B || Q.$$typeof === w || Q.$$typeof === b || Q.$$typeof === A || Q.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Q.$$typeof === U || Q.getModuleId !== void 0));
    }
    function g(Q) {
      if (typeof Q == "object" && Q !== null) {
        var Ke = Q.$$typeof;
        switch (Ke) {
          case l:
            var tt = Q.type;
            switch (tt) {
              case v:
              case _:
              case x:
              case T:
              case E:
                return tt;
              default:
                var ct = tt && tt.$$typeof;
                switch (ct) {
                  case P:
                  case A:
                  case k:
                  case B:
                  case w:
                  case b:
                    return ct;
                  default:
                    return Ke;
                }
            }
          case f:
            return Ke;
        }
      }
    }
    var u = A, I = b, L = l, Y = k, H = v, ne = B, ee = w, J = f, he = _, Te = x, be = T, Ce = E, fe = !1, Ve = !1;
    function D(Q) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(Q) {
      return Ve || (Ve = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function M(Q) {
      return g(Q) === A;
    }
    function ae(Q) {
      return g(Q) === b;
    }
    function oe(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === l;
    }
    function le(Q) {
      return g(Q) === k;
    }
    function K(Q) {
      return g(Q) === v;
    }
    function ue(Q) {
      return g(Q) === B;
    }
    function me(Q) {
      return g(Q) === w;
    }
    function xe(Q) {
      return g(Q) === f;
    }
    function pe(Q) {
      return g(Q) === _;
    }
    function De(Q) {
      return g(Q) === x;
    }
    function G(Q) {
      return g(Q) === T;
    }
    function Ye(Q) {
      return g(Q) === E;
    }
    Oe.ContextConsumer = u, Oe.ContextProvider = I, Oe.Element = L, Oe.ForwardRef = Y, Oe.Fragment = H, Oe.Lazy = ne, Oe.Memo = ee, Oe.Portal = J, Oe.Profiler = he, Oe.StrictMode = Te, Oe.Suspense = be, Oe.SuspenseList = Ce, Oe.isAsyncMode = D, Oe.isConcurrentMode = X, Oe.isContextConsumer = M, Oe.isContextProvider = ae, Oe.isElement = oe, Oe.isForwardRef = le, Oe.isFragment = K, Oe.isLazy = ue, Oe.isMemo = me, Oe.isPortal = xe, Oe.isProfiler = pe, Oe.isStrictMode = De, Oe.isSuspense = G, Oe.isSuspenseList = Ye, Oe.isValidElementType = N, Oe.typeOf = g;
  }()), Oe;
}
process.env.NODE_ENV === "production" ? rr.exports = eu() : rr.exports = tu();
var pt = rr.exports, gt = function(e, i) {
  return e === 0 ? "" : new Array(e * i).fill(" ").join("");
};
function ii(e) {
  "@babel/helpers - typeof";
  return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, ii(e);
}
function En(e) {
  return iu(e) || ru(e) || nu(e) || su();
}
function iu(e) {
  if (Array.isArray(e))
    return nr(e);
}
function ru(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function nu(e, i) {
  if (e) {
    if (typeof e == "string")
      return nr(e, i);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return nr(e, i);
  }
}
function nr(e, i) {
  (i == null || i > e.length) && (i = e.length);
  for (var r = 0, s = new Array(i); r < i; r++)
    s[r] = e[r];
  return s;
}
function su() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sr(e, i) {
  return e === null || ii(e) !== "object" || e instanceof Date || e instanceof RegExp || /* @__PURE__ */ Pt.isValidElement(e) ? e : (i.add(e), Array.isArray(e) ? e.map(function(r) {
    return sr(r, i);
  }) : Object.keys(e).sort().reduce(function(r, s) {
    return s === "_owner" || (s === "current" || i.has(e[s]) ? r[s] = "[Circular]" : r[s] = sr(e[s], i)), r;
  }, {}));
}
function au(e) {
  return sr(e, /* @__PURE__ */ new WeakSet());
}
var Es = function(i) {
  return {
    type: "string",
    value: i
  };
}, ou = function(i) {
  return {
    type: "number",
    value: i
  };
}, uu = function(i, r, s, o) {
  return {
    type: "ReactElement",
    displayName: i,
    props: r,
    defaultProps: s,
    childrens: o
  };
}, lu = function(i, r) {
  return {
    type: "ReactFragment",
    key: i,
    childrens: r
  };
}, cu = !!Pt.Fragment, ws = function(i) {
  return !i.name || i.name === "_default" ? "No Display Name" : i.name;
}, hu = function e(i) {
  switch (!0) {
    case !!i.displayName:
      return i.displayName;
    case i.$$typeof === pt.Memo:
      return e(i.type);
    case i.$$typeof === pt.ForwardRef:
      return e(i.render);
    default:
      return ws(i);
  }
}, fu = function(i) {
  switch (!0) {
    case typeof i.type == "string":
      return i.type;
    case typeof i.type == "function":
      return i.type.displayName ? i.type.displayName : ws(i.type);
    case pt.isForwardRef(i):
    case pt.isMemo(i):
      return hu(i.type);
    case pt.isContextConsumer(i):
      return "".concat(i.type._context.displayName || "Context", ".Consumer");
    case pt.isContextProvider(i):
      return "".concat(i.type._context.displayName || "Context", ".Provider");
    case pt.isLazy(i):
      return "Lazy";
    case pt.isProfiler(i):
      return "Profiler";
    case pt.isStrictMode(i):
      return "StrictMode";
    case pt.isSuspense(i):
      return "Suspense";
    default:
      return "UnknownElementType";
  }
}, wn = function(i, r) {
  return r !== "children";
}, pu = function(i) {
  return i !== !0 && i !== !1 && i !== null && i !== "";
}, An = function(i, r) {
  var s = {};
  return Object.keys(i).filter(function(o) {
    return r(i[o], o);
  }).forEach(function(o) {
    return s[o] = i[o];
  }), s;
}, _r = function e(i, r) {
  var s = r.displayName, o = s === void 0 ? fu : s;
  if (typeof i == "string")
    return Es(i);
  if (typeof i == "number")
    return ou(i);
  if (!/* @__PURE__ */ Xt.isValidElement(i))
    throw new Error("react-element-to-jsx-string: Expected a React.Element, got `".concat(ii(i), "`"));
  var l = o(i), f = An(i.props, wn);
  i.ref !== null && (f.ref = i.ref);
  var v = i.key;
  typeof v == "string" && v.search(/^\./) && (f.key = v);
  var x = An(i.type.defaultProps || {}, wn), _ = Xt.Children.toArray(i.props.children).filter(pu).map(function(b) {
    return e(b, r);
  });
  return cu && i.type === Pt.Fragment ? lu(v, _) : uu(l, f, x, _);
};
function du() {
}
var mu = function(i) {
  return i.toString().split(`
`).map(function(r) {
    return r.trim();
  }).join("");
}, kn = mu, As = function(e, i) {
  var r = i.functionValue, s = r === void 0 ? kn : r, o = i.showFunctions;
  return s(!o && s === kn ? du : e);
}, gu = function(e, i, r, s) {
  var o = au(e), l = Zo(o, {
    transform: function(v, x, _) {
      var b = v[x];
      return b && /* @__PURE__ */ Pt.isValidElement(b) ? Oi(_r(b, s), !0, r, s) : typeof b == "function" ? As(b, s) : _;
    }
  });
  return i ? l.replace(/\s+/g, " ").replace(/{ /g, "{").replace(/ }/g, "}").replace(/\[ /g, "[").replace(/ ]/g, "]") : l.replace(/\t/g, gt(1, s.tabStop)).replace(/\n([^$])/g, `
`.concat(gt(r + 1, s.tabStop), "$1"));
}, vu = function(i) {
  return i.replace(/"/g, "&quot;");
}, xu = function(i, r, s, o) {
  if (typeof i == "number")
    return "{".concat(String(i), "}");
  if (typeof i == "string")
    return '"'.concat(vu(i), '"');
  if (ii(i) === "symbol") {
    var l = i.valueOf().toString().replace(/Symbol\((.*)\)/, "$1");
    return l ? "{Symbol('".concat(l, "')}") : "{Symbol()}";
  }
  return typeof i == "function" ? "{".concat(As(i, o), "}") : /* @__PURE__ */ Pt.isValidElement(i) ? "{".concat(Oi(_r(i, o), !0, s, o), "}") : i instanceof Date ? isNaN(i.valueOf()) ? "{new Date(NaN)}" : '{new Date("'.concat(i.toISOString(), '")}') : Yo(i) || Array.isArray(i) ? "{".concat(gu(i, r, s, o), "}") : "{".concat(String(i), "}");
}, yu = function(e, i, r, s, o, l, f, v) {
  if (!i && !s)
    throw new Error('The prop "'.concat(e, '" has no value and no default: could not be formatted'));
  var x = i ? r : o, _ = v.useBooleanShorthandSyntax, b = v.tabStop, A = xu(x, l, f, v), P = " ", k = `
`.concat(gt(f + 1, b)), T = A.includes(`
`);
  return _ && A === "{false}" && !s ? (P = "", k = "") : _ && A === "{true}" ? (P += "".concat(e), k += "".concat(e)) : (P += "".concat(e, "=").concat(A), k += "".concat(e, "=").concat(A)), {
    attributeFormattedInline: P,
    attributeFormattedMultiline: k,
    isMultilineAttribute: T
  };
}, bu = function(e, i) {
  var r = e.slice(0, e.length > 0 ? e.length - 1 : 0), s = e[e.length - 1];
  return s && (i.type === "string" || i.type === "number") && (s.type === "string" || s.type === "number") ? r.push(Es(String(s.value) + String(i.value))) : (s && r.push(s), r.push(i)), r;
}, Su = function(i) {
  return ["key", "ref"].includes(i);
}, _u = function(e) {
  return function(i) {
    var r = i.includes("key"), s = i.includes("ref"), o = i.filter(function(f) {
      return !Su(f);
    }), l = En(e ? o.sort() : o);
    return s && l.unshift("ref"), r && l.unshift("key"), l;
  };
};
function Cu(e, i) {
  return Array.isArray(i) ? function(r) {
    return i.indexOf(r) === -1;
  } : function(r) {
    return i(e[r], r);
  };
}
var Eu = function(i, r, s, o, l) {
  var f = l.tabStop;
  return i.type === "string" ? r.split(`
`).map(function(v, x) {
    return x === 0 ? v : "".concat(gt(o, f)).concat(v);
  }).join(`
`) : r;
}, wu = function(i, r, s) {
  return function(o) {
    return Eu(o, Oi(o, i, r, s), i, r, s);
  };
}, Au = function(i, r) {
  return function(s) {
    var o = Object.keys(i).includes(s);
    return !o || o && i[s] !== r[s];
  };
}, ks = function(i, r, s, o, l) {
  return l ? gt(s, o).length + r.length > l : i.length > 1;
}, ku = function(i, r, s, o, l, f, v) {
  return (ks(i, r, l, f, v) || s) && !o;
}, Ps = function(e, i, r, s) {
  var o = e.type, l = e.displayName, f = l === void 0 ? "" : l, v = e.childrens, x = e.props, _ = x === void 0 ? {} : x, b = e.defaultProps, A = b === void 0 ? {} : b;
  if (o !== "ReactElement")
    throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(o));
  var P = s.filterProps, k = s.maxInlineAttributesLineLength, T = s.showDefaultProps, E = s.sortProps, w = s.tabStop, B = "<".concat(f), j = B, U = B, N = !1, g = [], u = Cu(_, P);
  Object.keys(_).filter(u).filter(Au(A, _)).forEach(function(Y) {
    return g.push(Y);
  }), Object.keys(A).filter(u).filter(function() {
    return T;
  }).filter(function(Y) {
    return !g.includes(Y);
  }).forEach(function(Y) {
    return g.push(Y);
  });
  var I = _u(E)(g);
  if (I.forEach(function(Y) {
    var H = yu(Y, Object.keys(_).includes(Y), _[Y], Object.keys(A).includes(Y), A[Y], i, r, s), ne = H.attributeFormattedInline, ee = H.attributeFormattedMultiline, J = H.isMultilineAttribute;
    J && (N = !0), j += ne, U += ee;
  }), U += `
`.concat(gt(r, w)), ku(I, j, N, i, r, w, k) ? B = U : B = j, v && v.length > 0) {
    var L = r + 1;
    B += ">", i || (B += `
`, B += gt(L, w)), B += v.reduce(bu, []).map(wu(i, L, s)).join(i ? "" : `
`.concat(gt(L, w))), i || (B += `
`, B += gt(L - 1, w)), B += "</".concat(f, ">");
  } else
    ks(I, j, r, w, k) || (B += " "), B += "/>";
  return B;
}, Pu = "", Pn = "React.Fragment", Iu = function(i, r, s) {
  var o = {};
  return r && (o = {
    key: r
  }), {
    type: "ReactElement",
    displayName: i,
    props: o,
    defaultProps: {},
    childrens: s
  };
}, Tu = function(i) {
  var r = i.key;
  return !!r;
}, Nu = function(i) {
  var r = i.childrens;
  return r.length === 0;
}, Ru = function(e, i, r, s) {
  var o = e.type, l = e.key, f = e.childrens;
  if (o !== "ReactFragment")
    throw new Error('The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(o));
  var v = s.useFragmentShortSyntax, x;
  return v ? Nu(e) || Tu(e) ? x = Pn : x = Pu : x = Pn, Ps(Iu(x, l, f), i, r, s);
}, Lu = ["<", ">", "{", "}"], Ou = function(i) {
  return Lu.some(function(r) {
    return i.includes(r);
  });
}, Vu = function(i) {
  return Ou(i) ? "{`".concat(i, "`}") : i;
}, Fu = function(i) {
  var r = i;
  return r.endsWith(" ") && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")), r.startsWith(" ") && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")), r;
}, Oi = function(e, i, r, s) {
  if (e.type === "number")
    return String(e.value);
  if (e.type === "string")
    return e.value ? "".concat(Fu(Vu(String(e.value)))) : "";
  if (e.type === "ReactElement")
    return Ps(e, i, r, s);
  if (e.type === "ReactFragment")
    return Ru(e, i, r, s);
  throw new TypeError('Unknow format type "'.concat(e.type, '"'));
}, Mu = function(e, i) {
  return Oi(e, !1, 0, i);
}, Kt = function(i) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.filterProps, o = s === void 0 ? [] : s, l = r.showDefaultProps, f = l === void 0 ? !0 : l, v = r.showFunctions, x = v === void 0 ? !1 : v, _ = r.functionValue, b = r.tabStop, A = b === void 0 ? 2 : b, P = r.useBooleanShorthandSyntax, k = P === void 0 ? !0 : P, T = r.useFragmentShortSyntax, E = T === void 0 ? !0 : T, w = r.sortProps, B = w === void 0 ? !0 : w, j = r.maxInlineAttributesLineLength, U = r.displayName;
  if (!i)
    throw new Error("react-element-to-jsx-string: Expected a ReactElement");
  var N = {
    filterProps: o,
    showDefaultProps: f,
    showFunctions: x,
    functionValue: _,
    tabStop: A,
    useBooleanShorthandSyntax: k,
    useFragmentShortSyntax: E,
    sortProps: B,
    maxInlineAttributesLineLength: j,
    displayName: U
  };
  return Mu(_r(i, N), N);
};
const { defaultDecorateStory: Bu, addons: Du, useEffect: ju } = __STORYBOOK_MODULE_PREVIEW_API__, { logger: _i } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function qu(e, i) {
  let r = e != null, s = i != null;
  if (!r && !s)
    return "";
  let o = [];
  if (r) {
    let l = e.map((f) => {
      let v = f.getPrettyName(), x = f.getTypeName();
      return x != null ? `${v}: ${x}` : v;
    });
    o.push(`(${l.join(", ")})`);
  } else
    o.push("()");
  return s && o.push(`=> ${i.getTypeName()}`), o.join(" ");
}
function Uu(e, i) {
  let r = e != null, s = i != null;
  if (!r && !s)
    return "";
  let o = [];
  return r ? o.push("( ... )") : o.push("()"), s && o.push(`=> ${i.getTypeName()}`), o.join(" ");
}
function Wu(e) {
  return e.replace(/,/g, `,\r
`);
}
var ar = "custom", ui = "object", Cr = "array", Gu = "class", jt = "func", Ut = "element";
function Er(e) {
  return Ta.includes(e.toLowerCase());
}
var Is = { format: { indent: { style: "  " }, semicolons: !1 } }, zu = { ...Is, format: { newline: "" } }, $u = { ...Is };
function _t(e, i = !1) {
  return jn.generate(e, i ? zu : $u);
}
function or(e, i = !1) {
  return i ? Hu(e) : _t(e);
}
function Hu(e) {
  let i = _t(e, !0);
  return i.endsWith(" }") || (i = `${i.slice(0, -1)} }`), i;
}
function In(e, i = !1) {
  return i ? Qu(e) : Yu(e);
}
function Yu(e) {
  let i = _t(e);
  return i.endsWith("  }]") && (i = xa(i)), i;
}
function Qu(e) {
  let i = _t(e, !0);
  return i.startsWith("[    ") && (i = i.replace("[    ", "[")), i;
}
var Ts = (e) => e.$$typeof === Symbol.for("react.memo"), Xu = (e) => e.$$typeof === Symbol.for("react.forward_ref"), wr = { ...z, JSXElement: () => {
} }, Ju = Ge.extend(Po());
function li(e) {
  return e != null ? e.name : null;
}
function Tn(e) {
  return e.filter((i) => i.type === "ObjectExpression" || i.type === "ArrayExpression");
}
function Ns(e) {
  let i = [];
  return Io(e, { ObjectExpression(r, s) {
    i.push(Tn(s).length);
  }, ArrayExpression(r, s) {
    i.push(Tn(s).length);
  } }, wr), Math.max(...i);
}
function Ku(e) {
  return { inferredType: { type: "Identifier", identifier: li(e) }, ast: e };
}
function Zu(e) {
  return { inferredType: { type: "Literal" }, ast: e };
}
function el(e) {
  let i;
  Ss(e.body, { JSXElement(o) {
    i = o;
  } }, wr);
  let r = { type: i != null ? "Element" : "Function", params: e.params, hasParams: e.params.length !== 0 }, s = li(e.id);
  return s != null && (r.identifier = s), { inferredType: r, ast: e };
}
function tl(e) {
  let i;
  return Ss(e.body, { JSXElement(r) {
    i = r;
  } }, wr), { inferredType: { type: i != null ? "Element" : "Class", identifier: li(e.id) }, ast: e };
}
function il(e) {
  let i = { type: "Element" }, r = li(e.openingElement.name);
  return r != null && (i.identifier = r), { inferredType: i, ast: e };
}
function rl(e) {
  let i = e.callee.type === "MemberExpression" ? e.callee.property : e.callee;
  return li(i) === "shape" ? Rs(e.arguments[0]) : null;
}
function Rs(e) {
  return { inferredType: { type: "Object", depth: Ns(e) }, ast: e };
}
function nl(e) {
  return { inferredType: { type: "Array", depth: Ns(e) }, ast: e };
}
function sl(e) {
  switch (e.type) {
    case "Identifier":
      return Ku(e);
    case "Literal":
      return Zu(e);
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return el(e);
    case "ClassExpression":
      return tl(e);
    case "JSXElement":
      return il(e);
    case "CallExpression":
      return rl(e);
    case "ObjectExpression":
      return Rs(e);
    case "ArrayExpression":
      return nl(e);
    default:
      return null;
  }
}
function al(e) {
  let i = Ju.parse(`(${e})`, { ecmaVersion: 2020 }), r = { inferredType: { type: "Unknown" }, ast: i };
  if (i.body[0] != null) {
    let s = i.body[0];
    switch (s.type) {
      case "ExpressionStatement": {
        let o = sl(s.expression);
        o != null && (r = o);
        break;
      }
    }
  }
  return r;
}
function Et(e) {
  try {
    return { ...al(e) };
  } catch {
  }
  return { inferredType: { type: "Unknown" } };
}
var ol = 150;
function Xe({ name: e, short: i, compact: r, full: s, inferredType: o }) {
  return { name: e, short: i, compact: r, full: s ?? i, inferredType: o };
}
function Ls(e) {
  return e.replace(/PropTypes./g, "").replace(/.isRequired/g, "");
}
function Nn(e) {
  return e.split(/\r?\n/);
}
function ki(e, i = !1) {
  return Ls(or(e, i));
}
function Rn(e, i = !1) {
  return Ls(_t(e, i));
}
function ul(e) {
  switch (e) {
    case "Object":
      return ui;
    case "Array":
      return Cr;
    case "Class":
      return Gu;
    case "Function":
      return jt;
    case "Element":
      return Ut;
    default:
      return ar;
  }
}
function Os(e, i) {
  let { inferredType: r, ast: s } = Et(e), { type: o } = r, l, f, v;
  switch (o) {
    case "Identifier":
    case "Literal":
      l = e, f = e;
      break;
    case "Object": {
      let { depth: x } = r;
      l = ui, f = x === 1 ? ki(s, !0) : null, v = ki(s);
      break;
    }
    case "Element": {
      let { identifier: x } = r;
      l = x != null && !Er(x) ? x : Ut, f = Nn(e).length === 1 ? e : null, v = e;
      break;
    }
    case "Array": {
      let { depth: x } = r;
      l = Cr, f = x <= 2 ? Rn(s, !0) : null, v = Rn(s);
      break;
    }
    default:
      l = ul(o), f = Nn(e).length === 1 ? e : null, v = e;
      break;
  }
  return Xe({ name: i, short: l, compact: f, full: v, inferredType: o });
}
function ll({ raw: e }) {
  return e != null ? Os(e, "custom") : Xe({ name: "custom", short: ar, compact: ar });
}
function cl(e) {
  let { jsDocTags: i } = e;
  return i != null && (i.params != null || i.returns != null) ? Xe({ name: "func", short: Uu(i.params, i.returns), compact: null, full: qu(i.params, i.returns) }) : Xe({ name: "func", short: jt, compact: jt });
}
function hl(e, i) {
  let r = Object.keys(e.value).map((f) => `${f}: ${qt(e.value[f], i).full}`).join(", "), { inferredType: s, ast: o } = Et(`{ ${r} }`), { depth: l } = s;
  return Xe({ name: "shape", short: ui, compact: l === 1 && o ? ki(o, !0) : null, full: o ? ki(o) : null });
}
function Ki(e) {
  return `objectOf(${e})`;
}
function fl(e, i) {
  let { short: r, compact: s, full: o } = qt(e.value, i);
  return Xe({ name: "objectOf", short: Ki(r), compact: s != null ? Ki(s) : null, full: o && Ki(o) });
}
function pl(e, i) {
  if (Array.isArray(e.value)) {
    let r = e.value.reduce((s, o) => {
      let { short: l, compact: f, full: v } = qt(o, i);
      return s.short.push(l), s.compact.push(f), s.full.push(v), s;
    }, { short: [], compact: [], full: [] });
    return Xe({ name: "union", short: r.short.join(" | "), compact: r.compact.every((s) => s != null) ? r.compact.join(" | ") : null, full: r.full.join(" | ") });
  }
  return Xe({ name: "union", short: e.value, compact: null });
}
function dl({ value: e, computed: i }) {
  return i ? Os(e, "enumvalue") : Xe({ name: "enumvalue", short: e, compact: e });
}
function ml(e) {
  if (Array.isArray(e.value)) {
    let i = e.value.reduce((r, s) => {
      let { short: o, compact: l, full: f } = dl(s);
      return r.short.push(o), r.compact.push(l), r.full.push(f), r;
    }, { short: [], compact: [], full: [] });
    return Xe({ name: "enum", short: i.short.join(" | "), compact: i.compact.every((r) => r != null) ? i.compact.join(" | ") : null, full: i.full.join(" | ") });
  }
  return Xe({ name: "enum", short: e.value, compact: e.value });
}
function ur(e) {
  return `${e}[]`;
}
function Ln(e) {
  return `[${e}]`;
}
function On(e, i, r) {
  return Xe({ name: "arrayOf", short: ur(e), compact: i != null ? Ln(i) : null, full: r && Ln(r) });
}
function gl(e, i) {
  let { name: r, short: s, compact: o, full: l, inferredType: f } = qt(e.value, i);
  if (r === "custom") {
    if (f === "Object")
      return On(s, o, l);
  } else if (r === "shape")
    return On(s, o, l);
  return Xe({ name: "arrayOf", short: ur(s), compact: ur(s) });
}
function qt(e, i) {
  try {
    switch (e.name) {
      case "custom":
        return ll(e);
      case "func":
        return cl(i);
      case "shape":
        return hl(e, i);
      case "instanceOf":
        return Xe({ name: "instanceOf", short: e.value, compact: e.value });
      case "objectOf":
        return fl(e, i);
      case "union":
        return pl(e, i);
      case "enum":
        return ml(e);
      case "arrayOf":
        return gl(e, i);
      default:
        return Xe({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (r) {
    console.error(r);
  }
  return Xe({ name: "unknown", short: "unknown", compact: "unknown" });
}
function vl(e) {
  let { type: i } = e.docgenInfo;
  if (i == null)
    return null;
  try {
    switch (i.name) {
      case "custom":
      case "shape":
      case "instanceOf":
      case "objectOf":
      case "union":
      case "enum":
      case "arrayOf": {
        let { short: r, compact: s, full: o } = qt(i, e);
        return s != null && !va(s) ? Me(s) : o ? Me(r, o) : Me(r);
      }
      case "func": {
        let { short: r, full: s } = qt(i, e), o = r, l;
        return s && s.length < ol ? o = s : s && (l = Wu(s)), Me(o, l);
      }
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
function Vs({ inferredType: e, ast: i }) {
  let { depth: r } = e;
  if (r === 1) {
    let s = or(i, !0);
    if (!ri(s))
      return Me(s);
  }
  return Me(ui, or(i));
}
function Fs({ inferredType: e, ast: i }) {
  let { depth: r } = e;
  if (r <= 2) {
    let s = In(i, !0);
    if (!ri(s))
      return Me(s);
  }
  return Me(Cr, In(i));
}
function Ar(e, i) {
  return i ? `${e}( ... )` : `${e}()`;
}
function Vi(e) {
  return `<${e} />`;
}
function Ms(e) {
  let { type: i, identifier: r } = e;
  switch (i) {
    case "Function":
      return Ar(r, e.hasParams);
    case "Element":
      return Vi(r);
    default:
      return r;
  }
}
function xl({ inferredType: e, ast: i }) {
  let { identifier: r } = e;
  if (r != null)
    return Me(Ms(e), _t(i));
  let s = _t(i, !0);
  return ri(s) ? Me(jt, _t(i)) : Me(s);
}
function yl(e, i) {
  let { inferredType: r } = i, { identifier: s } = r;
  if (s != null && !Er(s)) {
    let o = Ms(r);
    return Me(o, e);
  }
  return ri(e) ? Me(Ut, e) : Me(e);
}
function Bs(e) {
  try {
    let i = Et(e);
    switch (i.inferredType.type) {
      case "Object":
        return Vs(i);
      case "Function":
        return xl(i);
      case "Element":
        return yl(e, i);
      case "Array":
        return Fs(i);
      default:
        return null;
    }
  } catch (i) {
    console.error(i);
  }
  return null;
}
function Ds(e) {
  return e.$$typeof != null;
}
function js(e, i) {
  let { name: r } = e;
  return r !== "" && r !== "anonymous" && r !== i ? r : null;
}
var bl = (e) => Me(JSON.stringify(e));
function Sl(e) {
  let { type: i } = e, { displayName: r } = i, s = Kt(e, {});
  if (r != null) {
    let o = Vi(r);
    return Me(o, s);
  }
  if (Ho(i) && Er(i)) {
    let o = Kt(e, { tabStop: 0 }).replace(/\r?\n|\r/g, "");
    if (!ri(o))
      return Me(o);
  }
  return Me(Ut, s);
}
var _l = (e) => {
  if (Ds(e) && e.type != null)
    return Sl(e);
  if (jo(e)) {
    let i = Et(JSON.stringify(e));
    return Vs(i);
  }
  if (Array.isArray(e)) {
    let i = Et(JSON.stringify(e));
    return Fs(i);
  }
  return Me(ui);
}, Cl = (e, i) => {
  let r = !1, s;
  if ($r(e.render))
    r = !0;
  else if (e.prototype != null && $r(e.prototype.render))
    r = !0;
  else {
    let l;
    try {
      s = Et(e.toString());
      let { hasParams: f, params: v } = s.inferredType;
      f ? v.length === 1 && v[0].type === "ObjectPattern" && (l = e({})) : l = e(), l != null && Ds(l) && (r = !0);
    } catch {
    }
  }
  let o = js(e, i.name);
  if (o != null) {
    if (r)
      return Me(Vi(o));
    s != null && (s = Et(e.toString()));
    let { hasParams: l } = s.inferredType;
    return Me(Ar(o, l));
  }
  return Me(r ? Ut : jt);
}, El = (e) => Me(e.toString()), qs = { string: bl, object: _l, function: Cl, default: El };
function wl(e = {}) {
  return { ...qs, ...e };
}
function Us(e, i, r = qs) {
  try {
    switch (typeof e) {
      case "string":
        return r.string(e, i);
      case "object":
        return r.object(e, i);
      case "function":
        return r.function(e, i);
      default:
        return r.default(e, i);
    }
  } catch (s) {
    console.error(s);
  }
  return null;
}
function Al(e, i) {
  let { propTypes: r } = i;
  return r != null ? Object.keys(r).map((s) => e.find((o) => o.name === s)).filter(Boolean) : e;
}
var kl = (e, { name: i, type: r }) => {
  let s = r.summary === "element" || r.summary === "elementType", o = js(e, i);
  if (o != null) {
    if (s)
      return Me(Vi(o));
    let { hasParams: l } = Et(e.toString()).inferredType;
    return Me(Ar(o, l));
  }
  return Me(s ? Ut : jt);
}, Pl = wl({ function: kl });
function Il(e, i) {
  let { propDef: r } = e, s = vl(e);
  s != null && (r.type = s);
  let { defaultValue: o } = e.docgenInfo;
  if (o != null && o.value != null) {
    let l = Bs(o.value);
    l != null && (r.defaultValue = l);
  } else if (i != null) {
    let l = Us(i, r, Pl);
    l != null && (r.defaultValue = l);
  }
  return r;
}
function Tl(e, i) {
  let r = i.defaultProps != null ? i.defaultProps : {}, s = e.map((o) => Il(o, r[o.propDef.name]));
  return Al(s, i);
}
function Nl(e, i) {
  let { propDef: r } = e, { defaultValue: s } = e.docgenInfo;
  if (s != null && s.value != null) {
    let o = Bs(s.value);
    o != null && (r.defaultValue = o);
  } else if (i != null) {
    let o = Us(i, r);
    o != null && (r.defaultValue = o);
  }
  return r;
}
function Rl(e) {
  return e.map((i) => Nl(i));
}
var Vn = /* @__PURE__ */ new Map();
Object.keys(nn).forEach((e) => {
  let i = nn[e];
  Vn.set(i, e), Vn.set(i.isRequired, e);
});
function Ll(e, i) {
  let r = e;
  !ma(e) && !e.propTypes && Ts(e) && (r = e.type);
  let s = ga(r, i);
  if (s.length === 0)
    return [];
  switch (s[0].typeSystem) {
    case Hr.JAVASCRIPT:
      return Tl(s, e);
    case Hr.TYPESCRIPT:
      return Rl(s);
    default:
      return s.map((o) => o.propDef);
  }
}
var Ol = (e) => ({ rows: Ll(e, "props") }), Vl = (e) => {
  if (e) {
    let { rows: i } = Ol(e);
    if (i)
      return i.reduce((r, s) => {
        let { name: o, description: l, type: f, sbType: v, defaultValue: x, jsDocTags: _, required: b } = s;
        return r[o] = { name: o, description: l, type: { required: b, ...v }, table: { type: f, jsDocTags: _, defaultValue: x } }, r;
      }, {});
  }
  return null;
};
function lr(e) {
  if (Pt.isValidElement(e)) {
    let i = Object.keys(e.props).reduce((r, s) => (r[s] = lr(e.props[s]), r), {});
    return { ...e, props: i, _owner: null };
  }
  return Array.isArray(e) ? e.map(lr) : e;
}
var Fl = (e, i) => {
  if (typeof e > "u")
    return _i.warn("Too many skip or undefined component"), null;
  let r = e, s = r.type;
  for (let l = 0; l < i.skip; l += 1) {
    if (typeof r > "u")
      return _i.warn("Cannot skip undefined element"), null;
    if (Xt.Children.count(r) > 1)
      return _i.warn("Trying to skip an array of elements"), null;
    typeof r.props.children > "u" ? (_i.warn("Not enough children to skip elements."), typeof r.type == "function" && r.type.name === "" && (r = Xt.createElement(s, { ...r.props }))) : typeof r.props.children == "function" ? r = r.props.children() : r = r.props.children;
  }
  let o = { ...typeof i.displayName == "string" ? { showFunctions: !0, displayName: () => i.displayName } : { displayName: (l) => l.type.displayName || (l.type === Symbol.for("react.profiler") ? "Profiler" : null) || da(l.type, "displayName") || (l.type.name !== "_default" ? l.type.name : null) || (typeof l.type == "function" ? "No Display Name" : null) || (Xu(l.type) ? l.type.render.name : null) || (Ts(l.type) ? l.type.type.name : null) || l.type }, filterProps: (l, f) => l !== void 0, ...i };
  return Xt.Children.map(e, (l) => {
    let f = typeof l == "number" ? l.toString() : l, v = (typeof Kt == "function" ? Kt : Kt.default)(lr(f), o);
    if (v.indexOf("&quot;") > -1) {
      let x = v.match(/\S+=\\"([^"]*)\\"/g);
      x && x.forEach((_) => {
        v = v.replace(_, _.replace(/&quot;/g, "'"));
      });
    }
    return v;
  }).join(`
`).replace(/function\s+noRefCheck\(\)\s+\{\}/g, "() => {}");
}, Ml = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 }, Bl = (e) => {
  var s;
  let i = (s = e == null ? void 0 : e.parameters.docs) == null ? void 0 : s.source, r = e == null ? void 0 : e.parameters.__isArgsStory;
  return (i == null ? void 0 : i.type) === zr.DYNAMIC ? !1 : !r || (i == null ? void 0 : i.code) || (i == null ? void 0 : i.type) === zr.CODE;
}, Dl = (e) => {
  var i, r;
  return ((i = e.type) == null ? void 0 : i.displayName) === "MDXCreateElement" && !!((r = e.props) != null && r.mdxType);
}, Ws = (e) => {
  if (!Dl(e))
    return e;
  let { mdxType: i, originalType: r, children: s, ...o } = e.props, l = [];
  return s && (l = (Array.isArray(s) ? s : [s]).map(Ws)), Pt.createElement(r, o, ...l);
}, Gs = (e, i) => {
  var b, A;
  let r = Du.getChannel(), s = Bl(i), o = "";
  ju(() => {
    if (!s) {
      let { id: P, unmappedArgs: k } = i;
      r.emit(pa, { id: P, source: o, args: k });
    }
  });
  let l = e();
  if (s)
    return l;
  let f = { ...Ml, ...(i == null ? void 0 : i.parameters.jsx) || {} }, v = (A = (b = i == null ? void 0 : i.parameters.docs) == null ? void 0 : b.source) != null && A.excludeDecorators ? i.originalStoryFn(i.args, i) : l, x = Ws(v), _ = Fl(x, f);
  return _ && (o = _), l;
}, Gl = (e, i) => {
  let r = i.findIndex((o) => o.originalFn === Gs), s = r === -1 ? i : [...i.splice(r, 1), ...i];
  return Bu(e, s);
}, zl = { docs: { story: { inline: !0 }, extractArgTypes: Vl, extractComponentDescription: ha } }, $l = [Gs], Hl = [fa];
export {
  Gl as applyDecorators,
  Hl as argTypesEnhancers,
  $l as decorators,
  zl as parameters
};
