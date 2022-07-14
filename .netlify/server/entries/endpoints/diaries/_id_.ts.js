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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_diaries_447f5d26 = require("../../../chunks/diaries-447f5d26.js");
var import_Copy_600x433_366784a0 = require("../../../chunks/2019-07-02-17-57-44-Copy-600x433-366784a0.js");
async function get({ params }) {
  const diary = await import_diaries_447f5d26.d.find(({ id }) => id === params.id);
  if (diary) {
    return {
      body: { diary }
    };
  }
  return {
    status: 404
  };
}
