import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();
const port = process.env.PORT || 3000;
//
const pages = {
  index: path.normalize("./public/index.html"),
  about: path.normalize("./public/about.html"),
  contact: path.normalize("./public/contact-me.html"),
  error: path.normalize("./public/404.html"),
};

app.get("/", (_: Request, res: Response) => {
  res.sendFile(pages.index, { root: path.join(__dirname, "../") });
});

app.get("/about", (_: Request, res: Response) => {
  res.sendFile(pages.about, { root: path.join(__dirname, "../") });
});
//
app.get("/contact-me", (_: Request, res: Response) => {
  res.sendFile(pages.contact, { root: path.join(__dirname, "../") });
});
//
app.get("/*", (_: Request, res: Response) => {
  res.sendFile(pages.error, { root: path.join(__dirname, "../") });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
