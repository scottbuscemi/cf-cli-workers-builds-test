import { defineWorker } from "@cloudflare/vite-plugin/experimental-config";
import * as entrypoint from "./src/index.js" with { type: "cf-worker" };

export default defineWorker({
  name: "cf-cli-workers-builds-test",
  entrypoint,
  compatibilityDate: "2026-09-10",
});
