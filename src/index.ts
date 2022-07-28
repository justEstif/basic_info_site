import http from "http";
import fs from "fs/promises";
import path from "path";

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url) {
    getFileData(req.url);
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello World");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

const getFileData = async (url: string) => {
  const filePath = getFilePath(url); // function to get the filePath
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
