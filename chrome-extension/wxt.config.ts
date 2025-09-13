import { defineConfig } from "wxt";

export default defineConfig({
  manifest: {
    name: "Chrome Extension",
    description: "A Chrome extension built with WXT",
    side_panel: {
      default_path: "sidepanel.html",
    },
  },
  modules: ["@wxt-dev/module-react"],
});
