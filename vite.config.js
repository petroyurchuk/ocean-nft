import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: "./src/partials",
      context: {
        headerList: ["Market", "Features", "Community"],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
});
