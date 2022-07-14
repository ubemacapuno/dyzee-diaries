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
  default: () => Bboy_business,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require("../../../chunks/index-38cedc01.js");
var import_Seo_0b47aeec = require("../../../chunks/Seo-0b47aeec.js");
var import_Hero_dd4a108f = require("../../../chunks/Hero-dd4a108f.js");
var import_excerpt_95bd0daa = require("../../../chunks/excerpt-95bd0daa.js");
var import_projects_c462c963 = require("../../../chunks/projects-c462c963.js");
var import_Copy_600x433_366784a0 = require("../../../chunks/2019-07-02-17-57-44-Copy-600x433-366784a0.js");
var businessHero = "/_app/assets/business-hero-6c9ab2c1.jpeg";
var ProjectPreview_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".project.svelte-1bmnxiy{border-radius:6px}img.svelte-1bmnxiy{width:100%;height:auto}h5.svelte-1bmnxiy{hyphens:auto;margin:0;color:var(--primary-color)}a.svelte-1bmnxiy:hover{text-decoration:none}",
  map: null
};
const ProjectPreview = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css$1);
  return `<a${(0, import_index_38cedc01.b)("href", `/bboy-business/${project.id}`, 0)}${(0, import_index_38cedc01.b)("aria-label", `link to a project titled ${project.title}`, 0)} class="${"svelte-1bmnxiy"}"><div class="${"project svelte-1bmnxiy"}"><img${(0, import_index_38cedc01.b)("src", project.image, 0)}${(0, import_index_38cedc01.b)("alt", project.title, 0)} class="${"svelte-1bmnxiy"}">
  <div class="${"content"}"><h5 class="${"svelte-1bmnxiy"}">${(0, import_index_38cedc01.e)(project.title)}</h5>
    <p>${(0, import_index_38cedc01.e)(project.excerpt || (0, import_excerpt_95bd0daa.g)(project.html))}</p></div></div>
</a>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-69bkx6{display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));grid-gap:1rem;margin-top:2rem}",
  map: null
};
const hydrate = import_Seo_0b47aeec.d;
const router = import_Seo_0b47aeec.b;
const prerender = true;
const title = "BBoy Business";
const description = "Dyzee is in the business of creating a self-sustaining Bboy industry";
const Bboy_business = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_38cedc01.v)(import_Seo_0b47aeec.S, "Seo").$$render($$result, {
    title,
    description,
    pathname: "/bboy-business"
  }, {}, {})}

${(0, import_index_38cedc01.v)(import_Hero_dd4a108f.H, "Hero").$$render($$result, {
    title,
    subtitle: description,
    image: businessHero
  }, {}, {})}
<div class="${"page-wrapper"}"><div class="${"grid svelte-69bkx6"}">${import_projects_c462c963.p.length ? (0, import_index_38cedc01.d)(import_projects_c462c963.p, (project) => {
    return `${(0, import_index_38cedc01.v)(ProjectPreview, "ProjectPreview").$$render($$result, { project }, {}, {})}`;
  }) : `<h3>Coming Soon!</h3>`}</div>
</div>`;
});
