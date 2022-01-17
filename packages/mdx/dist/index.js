var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/types.ts
var PostType = /* @__PURE__ */ ((PostType2) => {
  PostType2["TUTORIAL"] = "tutorial";
  PostType2["BLOGPOST"] = "blogPost";
  PostType2["AUTHOR"] = "author";
  return PostType2;
})(PostType || {});

// src/fs.tsx
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "remark-autolink-headings";
var TWEET_RE = /<StaticTweet\sid="[0-9]+"\s\/>/g;
var getFileByPath = async (slug, pathForFile) => {
  const source = fs.readFileSync(pathForFile, "utf8");
  const parsedFile = matter(source);
  const data = parsedFile.data;
  const content = parsedFile.content;
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeAutolinkHeadings],
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
      readingTime: readingTime(content),
      slug
    }, data)
  };
  return result;
};
export {
  PostType,
  getFileByPath
};
