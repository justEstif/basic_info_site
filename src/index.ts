import http from "http";
import fs from "fs/promises";
import path from "path";

const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
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

const getResponse = async (url: string) => {
  const filePath = getFilePath(url);
  const { fileData, statusCode } = await getFileData(filePath);
  return {
    fileData,
    statusCode,
  };
};

const getFilePath = (url: string) => {
  const fileName = url === "/" ? "index" : url;
  const filePath = path.join(__dirname, "/public", `${fileName}.html`);
  return filePath;
};

const getFileData = async (filePath: string) => {
  try {
    const fileData = await fs.readFile(filePath, "utf-8");
    const statusCode = 200;
    return { fileData, statusCode };
  } catch (err) {
    const filePath = path.join(__dirname, "/public", `404.html`);
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      const statusCode = 404;
      return { fileData, statusCode };
    } catch (err) {
      const fileData = "<h1>Server Error</h1>";
      const statusCode = 500;
      return {
        fileData,
        statusCode,
      };
    }
  }
};
