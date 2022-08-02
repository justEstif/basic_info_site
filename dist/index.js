"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const pages = {
    index: path_1.default.normalize("./public/index.html"),
    about: path_1.default.normalize("./public/about.html"),
    contact: path_1.default.normalize("./public/contact-me.html"),
    error: path_1.default.normalize("./public/404.html"),
};
app.get("/", (_, res) => {
    res.sendFile(pages.index, { root: path_1.default.join(__dirname, "../") });
});
app.get("/about", (_, res) => {
    res.sendFile(pages.about, { root: path_1.default.join(__dirname, "../") });
});
app.get("/contact-me", (_, res) => {
    res.sendFile(pages.contact, { root: path_1.default.join(__dirname, "../") });
});
app.get("/*", (_, res) => {
    res.sendFile(pages.error, { root: path_1.default.join(__dirname, "../") });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
//# sourceMappingURL=index.js.map