import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const workerDirectory = new URL(
  ".cloudflare/output/v0/workers/default/",
  import.meta.url,
);
const bundleDirectory = new URL("bundle/", workerDirectory);

await rm(new URL(".cloudflare/", import.meta.url), {
  recursive: true,
  force: true,
});
await mkdir(bundleDirectory, { recursive: true });
await cp(new URL("src/index.js", import.meta.url), new URL("index.js", bundleDirectory));
await writeFile(
  new URL("config.json", workerDirectory),
  JSON.stringify(
    {
      type: "worker",
      name: "cf-cli-workers-builds-test",
      compatibilityDate: "2026-09-10",
      manifest: {
        type: "complete",
        mainModule: "index.js",
        modules: {
          "index.js": { type: "esm" },
        },
      },
    },
    null,
    2,
  ),
);

console.log("Built .cloudflare/output/v0/workers/default");
