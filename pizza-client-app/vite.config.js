// Import the helper function that lets us define a strongly-typed Vite config.
// This isn't required, but using `defineConfig` helps with type hints and editor support.
import { defineConfig } from "vite";

// Import the official Vite plugin for React.
// This enables fast refresh, JSX support, and React-specific optimizations during development.
import react from "@vitejs/plugin-react";

// Export the Vite configuration using defineConfig.
// This is the default setup for a modern React project using Vite.
export default defineConfig({
  // The `plugins` array is where you register any Vite plugins.
  // Here we're using the React plugin, which adds:
  // - Automatic JSX transformation
  // - Fast Refresh (instant updates without reloading the page)
  // - Better error overlays in the browser
  plugins: [react()],
  server: {
    port: 5173, // start dev server on http://localhost:3000
    open: false, // open browser automatically when dev server starts
  },
  build: {
    outDir: "dist", // where the production build goes
  },
});
