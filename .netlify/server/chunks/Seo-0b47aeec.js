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
  S: () => Seo,
  b: () => browser,
  d: () => dev
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require("./index-38cedc01.js");
const browser = false;
const dev = false;
let siteUrl = "https://www.dyzeediares.com";
let siteName = "Dyzee Diaries";
const Seo = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "The Diaries  of Dyzee" } = $$props;
  let { description = "The latest of vlogs, blogs, and other media to follow Dyzee on his quest" } = $$props;
  let { pathname = "" } = $$props;
  let { image = "" } = $$props;
  let { robots = "index, follow" } = $$props;
  let siteTitle = `${title} | ${siteName}`;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.robots === void 0 && $$bindings.robots && robots !== void 0)
    $$bindings.robots(robots);
  return `


${$$result.head += `${$$result.title = `<title>${(0, import_index_38cedc01.e)(siteTitle)}</title>`, ""}<meta name="${"description"}"${(0, import_index_38cedc01.b)("content", description, 0)} data-svelte="svelte-3y5rzd">${image ? `<meta name="${"image"}"${(0, import_index_38cedc01.b)("content", `${siteUrl}${image}`, 0)} data-svelte="svelte-3y5rzd">` : ``}<meta name="${"robots"}"${(0, import_index_38cedc01.b)("content", robots, 0)} data-svelte="svelte-3y5rzd"><link rel="${"canonical"}"${(0, import_index_38cedc01.b)("href", `${siteUrl}${pathname}`, 0)} data-svelte="svelte-3y5rzd"><meta property="${"st:title"}"${(0, import_index_38cedc01.b)("content", siteTitle, 0)} data-svelte="svelte-3y5rzd"><meta property="${"st:info"}"${(0, import_index_38cedc01.b)("content", description, 0)} data-svelte="svelte-3y5rzd">${pathname ? `<meta property="${"og:url"}"${(0, import_index_38cedc01.b)("content", `${siteUrl}${pathname}`, 0)} data-svelte="svelte-3y5rzd">` : ``}${image ? `<meta property="${"og:image"}"${(0, import_index_38cedc01.b)("content", `${siteUrl}${image}`, 0)} data-svelte="svelte-3y5rzd">` : ``}<meta property="${"og:title"}"${(0, import_index_38cedc01.b)("content", siteTitle, 0)} data-svelte="svelte-3y5rzd"><meta property="${"og:description"}"${(0, import_index_38cedc01.b)("content", description, 0)} data-svelte="svelte-3y5rzd">${image ? `<meta name="${"twitter:image"}"${(0, import_index_38cedc01.b)("content", `${siteUrl}${image}`, 0)} data-svelte="svelte-3y5rzd">` : ``}<meta name="${"twitter:title"}"${(0, import_index_38cedc01.b)("content", siteTitle, 0)} data-svelte="svelte-3y5rzd"><meta name="${"twitter:description"}"${(0, import_index_38cedc01.b)("content", description, 0)} data-svelte="svelte-3y5rzd">${slots.default ? slots.default({}) : ``}`, ""}`;
});
