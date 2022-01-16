"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.MDXLayoutRenderer = exports.Index = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var next_mdx_remote_1 = require("next-mdx-remote");
// components
var image_1 = __importDefault(require("./image"));
exports.Index = {
    Image: image_1["default"]
};
var MDXLayoutRenderer = function (_a) {
    var mdxSource = _a.mdxSource, customComponents = _a.customComponents, rest = __rest(_a, ["mdxSource", "customComponents"]);
    var components = __assign(__assign({}, exports.Index), customComponents);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(next_mdx_remote_1.MDXRemote, __assign({ components: components }, mdxSource), void 0) }, void 0) }, void 0));
};
exports.MDXLayoutRenderer = MDXLayoutRenderer;
