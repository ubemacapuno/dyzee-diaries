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
  default: () => U5Bidu5D,
  hydrate: () => hydrate,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require("../../../chunks/index-38cedc01.js");
var import_Seo_0b47aeec = require("../../../chunks/Seo-0b47aeec.js");
var import_excerpt_95bd0daa = require("../../../chunks/excerpt-95bd0daa.js");
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: ".project.svelte-xnj41r{margin:0 auto;max-width:900px}.project-img{max-width:100%;height:auto}h2.svelte-xnj41r{color:var(--primary-color);hyphens:auto}h4.svelte-xnj41r{hyphens:auto}",
  map: null
};
const hydrate = import_Seo_0b47aeec.d;
const prerender = true;
const U5Bidu5D = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css);
  return `${(0, import_index_38cedc01.v)(import_Seo_0b47aeec.S, "Seo").$$render($$result, {
    title: project.title,
    description: project.excerpt || (0, import_excerpt_95bd0daa.g)(project.html),
    pathname: `/bboy-business/${project.id}`
  }, {}, {
    default: () => {
      return `<meta property="${"og:type"}" content="${"article"}">`;
    }
  })}


<div class="${"page-wrapper"}"><div class="${"project svelte-xnj41r"}">${project.image ? `<img${(0, import_index_38cedc01.b)("src", project.image, 0)} style="${"width:100%;"}"${(0, import_index_38cedc01.b)("alt", project.title, 0)}>` : ``}
    
    <h2 class="${"svelte-xnj41r"}">${(0, import_index_38cedc01.e)(project.title)}</h2>
    <h4 class="${"svelte-xnj41r"}">Project Overview</h4>
    
    <div class="${"content"}"><!-- HTML_TAG_START -->${project.html}<!-- HTML_TAG_END --></div></div>
</div>`;
});
