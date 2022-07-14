var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "robots.txt"]),
  mimeTypes: { ".png": "image/png", ".txt": "text/plain" },
  _: {
    entry: { "file": "start-3c011956.js", "js": ["start-3c011956.js", "chunks/index-05dc9c45.js", "chunks/singletons-d1fb5791.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "about",
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        path: "/about",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "bboy-business",
        pattern: /^\/bboy-business\/?$/,
        names: [],
        types: [],
        path: "/bboy-business",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "contact",
        pattern: /^\/contact\/?$/,
        names: [],
        types: [],
        path: "/contact",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "diaries",
        pattern: /^\/diaries\/?$/,
        names: [],
        types: [],
        path: "/diaries",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "services",
        pattern: /^\/services\/?$/,
        names: [],
        types: [],
        path: "/services",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "bboy-business/[id]",
        pattern: /^\/bboy-business\/([^/]+?)\/?$/,
        names: ["id"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/bboy-business/_id_.ts.js"))),
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "diaries/[id]",
        pattern: /^\/diaries\/([^/]+?)\/?$/,
        names: ["id"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/diaries/_id_.ts.js"))),
        a: [0, 9],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
