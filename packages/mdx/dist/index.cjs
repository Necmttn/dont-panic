var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  PostType: () => PostType,
  getFileByPath: () => getFileByPath
});

// src/types.ts
var PostType = /* @__PURE__ */ ((PostType2) => {
  PostType2["TUTORIAL"] = "tutorial";
  PostType2["BLOGPOST"] = "blogPost";
  PostType2["AUTHOR"] = "author";
  return PostType2;
})(PostType || {});

// src/fs.tsx
var import_fs = __toESM(require("fs"), 1);
var import_gray_matter = __toESM(require("gray-matter"), 1);
var import_serialize = require("next-mdx-remote/serialize");
var import_reading_time = __toESM(require("reading-time"), 1);
var import_remark_autolink_headings = __toESM(require("remark-autolink-headings"), 1);
var TWEET_RE = /<StaticTweet\sid="[0-9]+"\s\/>/g;
var getFileByPath = async (slug, pathForFile) => {
  const source = import_fs.default.readFileSync(pathForFile, "utf8");
  const parsedFile = (0, import_gray_matter.default)(source);
  const data = parsedFile.data;
  const content = parsedFile.content;
  const mdxSource = await (0, import_serialize.serialize)(content, {
    mdxOptions: {
      rehypePlugins: [import_remark_autolink_headings.default],
      remarkPlugins: []
    }
  });
  const tweetMatch = content.match(TWEET_RE);
  const tweetIDs = tweetMatch == null ? void 0 : tweetMatch.map((mdxTweet) => {
    const id = mdxTweet.match(/[0-9]+/g)[0];
    return id;
  });
  const result = {
    mdxSource,
    tweetIDs: tweetIDs || [],
    frontMatter: __spreadValues({
      readingTime: (0, import_reading_time.default)(content),
      slug
    }, data)
  };
  return result;
};
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PostType,
  getFileByPath
});
