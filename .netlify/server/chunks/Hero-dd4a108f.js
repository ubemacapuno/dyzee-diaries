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
  H: () => Hero
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require("./index-38cedc01.js");
var Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-rsrstl{position:relative;display:flex;align-items:center;min-height:300px;max-height:700px;margin-bottom:100px}img.svelte-rsrstl{width:calc(100vw - var(--sidebar-width));max-height:inherit;object-fit:cover;max-width:100%}.content.svelte-rsrstl{padding:40px 20px 20px;margin:0 5%;hyphens:auto;position:absolute;max-width:900px}h1.svelte-rsrstl{text-transform:uppercase}h1.svelte-rsrstl,h3.svelte-rsrstl{color:white}.isCentered.svelte-rsrstl{text-align:center;justify-content:center}@media(max-width: 900px){img.svelte-rsrstl{width:100vw}}",
  map: null
};
const Hero = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { image = "" } = $$props;
  let { isCentered = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.isCentered === void 0 && $$bindings.isCentered && isCentered !== void 0)
    $$bindings.isCentered(isCentered);
  $$result.css.add(css);
  return `<div class="${[
    "wrapper svelte-rsrstl",
    (isCentered ? "isCentered" : "") + " " + (image ? "image" : "")
  ].join(" ").trim()}">${image ? `<img${(0, import_index_38cedc01.b)("src", image, 0)}${(0, import_index_38cedc01.b)("alt", title, 0)} class="${"svelte-rsrstl"}">` : ``}

  <div class="${"content svelte-rsrstl"}"><h1 class="${"svelte-rsrstl"}">${(0, import_index_38cedc01.e)(title)}</h1>    
    ${subtitle ? `<h3 class="${"svelte-rsrstl"}">${(0, import_index_38cedc01.e)(subtitle)}</h3>` : ``}</div>
</div>`;
});
