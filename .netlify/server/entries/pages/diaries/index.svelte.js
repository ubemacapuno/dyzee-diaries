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
  default: () => Diaries,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require("../../../chunks/index-38cedc01.js");
var import_Seo_0b47aeec = require("../../../chunks/Seo-0b47aeec.js");
var import_Hero_dd4a108f = require("../../../chunks/Hero-dd4a108f.js");
var import_diaries_447f5d26 = require("../../../chunks/diaries-447f5d26.js");
var import_excerpt_95bd0daa = require("../../../chunks/excerpt-95bd0daa.js");
var import_Copy_600x433_366784a0 = require("../../../chunks/2019-07-02-17-57-44-Copy-600x433-366784a0.js");
var diariesHero = "/_app/assets/diaries-hero-bceb351a.jpeg";
var DiaryPreview_svelte_svelte_type_style_lang = "";
const css = {
  code: ".diary.svelte-1xhpxum{display:grid;grid-template-columns:320px 1fr;grid-gap:20px;padding-top:20px}.thumbnail.svelte-1xhpxum{overflow:hidden}img.svelte-1xhpxum{width:100%;height:auto}h5.svelte-1xhpxum{hyphens:auto;margin:0}.read-more.svelte-1xhpxum{display:flex;justify-content:flex-end}@media only screen and (max-width: 900px){.diary.svelte-1xhpxum{display:block}}",
  map: null
};
const DiaryPreview = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  let { diary } = $$props;
  if ($$props.diary === void 0 && $$bindings.diary && diary !== void 0)
    $$bindings.diary(diary);
  $$result.css.add(css);
  return `<div class="${"diary svelte-1xhpxum"}"><div class="${"thumbnail svelte-1xhpxum"}"><img${(0, import_index_38cedc01.b)("src", diary.image, 0)}${(0, import_index_38cedc01.b)("alt", diary.title, 0)} class="${"svelte-1xhpxum"}"></div>
  <div><h5 class="${"svelte-1xhpxum"}">${(0, import_index_38cedc01.e)(diary.date)}</h5>
    <h5 class="${"svelte-1xhpxum"}"><a${(0, import_index_38cedc01.b)("href", `/diaries/${diary.id}`, 0)}${(0, import_index_38cedc01.b)("aria-label", `link to a diary titled ${diary.title}`, 0)}>${(0, import_index_38cedc01.e)(diary.title)}</a></h5>
  <p>${(0, import_index_38cedc01.e)(diary.excerpt || (0, import_excerpt_95bd0daa.g)(diary.html))}</p></div></div>

<div class="${"read-more svelte-1xhpxum"}"><a${(0, import_index_38cedc01.b)("href", `/diaries/${diary.id}`, 0)}>Read More
  </a></div>

<hr>`;
});
const hydrate = import_Seo_0b47aeec.d;
const router = import_Seo_0b47aeec.b;
const prerender = true;
const title = "The Diaries";
const description = "The latest of vlogs, blogs, and other media to follow Dyzee on his quest";
const Diaries = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_38cedc01.v)(import_Seo_0b47aeec.S, "Seo").$$render($$result, { title, description, pathname: "/diaries" }, {}, {})}


${(0, import_index_38cedc01.v)(import_Hero_dd4a108f.H, "Hero").$$render($$result, {
    title,
    subtitle: description,
    image: diariesHero
  }, {}, {})}
<div class="${"page-wrapper"}">${import_diaries_447f5d26.d.length ? (0, import_index_38cedc01.d)(import_diaries_447f5d26.d, (diary) => {
    return `${(0, import_index_38cedc01.v)(DiaryPreview, "DiaryPreview").$$render($$result, { diary }, {}, {})}`;
  }) : `<h3>Coming Soon!</h3>`}</div>`;
});
