import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

const routesToPrerender = [
  "/",
  "/services/mold-remediation",
];

async function prerender() {
  const template = fs.readFileSync(toAbsolute("dist/client/index.html"), "utf-8");
  const { render } = await import("./dist/server/entry-server.js");

  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace("<!--app-html-->", appHtml);

    const filePath =
      url === "/"
        ? toAbsolute("dist/client/index.html")
        : toAbsolute(`dist/client${url}/index.html`);

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);
    console.log("Pre-rendered:", url);
  }
}

prerender();
