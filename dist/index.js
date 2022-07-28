"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const PORT = process.env.PORT || 8080;
const server = http_1.default.createServer(async (req, res) => {
    if (req.url && req.url !== "/favicon.ico") {
        const { fileData, statusCode } = await getResponse(req.url);
        res.writeHead(statusCode, { "Content-Type": "text/html" });
        res.write(fileData);
        res.end();
    }
});
server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
const getResponse = async (url) => {
    const filePath = getFilePath(url);
    const { fileData, statusCode } = await getFileData(filePath);
    return {
        fileData,
        statusCode,
    };
};
const getFilePath = (url) => {
    const fileName = url === "/" ? "index" : url;
    const filePath = path_1.default.join(__dirname, "/public", `${fileName}.html`);
    return filePath;
};
const getFileData = async (filePath) => {
    try {
        const fileData = await promises_1.default.readFile(filePath, "utf-8");
        const statusCode = 200;
        return { fileData, statusCode };
    }
    catch (err) {
        const filePath = path_1.default.join(__dirname, "/public", `404.html`);
        try {
            const fileData = await promises_1.default.readFile(filePath, "utf-8");
            const statusCode = 404;
            return { fileData, statusCode };
        }
        catch (err) {
            const fileData = "<h1>Server Error</h1>";
            const statusCode = 500;
            return {
                fileData,
                statusCode,
            };
        }
    }
};
//# sourceMappingURL=index.js.map