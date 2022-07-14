var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Contact,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require("../../chunks/index-38cedc01.js");
var import_Seo_0b47aeec = require("../../chunks/Seo-0b47aeec.js");
const hydrate = import_Seo_0b47aeec.d;
const router = import_Seo_0b47aeec.b;
const prerender = true;
const Contact = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_38cedc01.v)(import_Seo_0b47aeec.S, "Seo").$$render($$result, {
    title: "Contact",
    description: "Contact for more information",
    pathname: "/contact"
  }, {}, {})}

<div class="${"page-wrapper"}"><h1>CONTACT</h1></div>`;
});
