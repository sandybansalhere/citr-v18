# 🔍 How Vite Works

**Vite** (pronounced like _vite_ in “vite-speed”) is a modern frontend build tool that gives you a fast and smooth developer experience — especially when building apps with **React**, **Vue**, or **Svelte**.

This guide breaks down how Vite works under the hood, in a simple and beginner-friendly way.

---

## 🚀 Why Is Vite So Fast?

If you’ve used traditional tools like **Webpack**, you know how long it can take to start a dev server — even for small apps.

That’s because tools like Webpack **bundle everything** before serving it.

Vite does it differently:

- 🔥 Starts instantly — no full app bundling at the start
- ⚡ Uses modern browser features (like ESM — more on that below)
- 🧠 Transforms files only when you actually use them
- 🔄 Super fast Hot Module Replacement (HMR)

---

## 🧱 What’s Powering Vite Behind the Scenes?

Vite is fast because it uses a clever mix of modern tools. Here’s what’s under the hood:

| What It's For             | Tool Used            | What It Does                                                                     |
| ------------------------- | -------------------- | -------------------------------------------------------------------------------- |
| Transforming JSX/TS       | `esbuild`            | A super-fast tool (written in Go) that converts your code to plain JS            |
| Pre-bundling dependencies | `esbuild`            | Optimizes third-party code (from `node_modules`) so the browser can load it fast |
| Serving files in dev      | Native ESM + Koa     | Koa is a lightweight HTTP server; ESM is used to load JS modules natively        |
| Production build          | `Rollup`             | Creates optimized bundles with tree-shaking                                      |
| Minifying code            | `esbuild` / `terser` | Shrinks your code for production — `esbuild` is fast, `terser` is thorough       |
| Working with CSS          | PostCSS + others     | Supports Sass, Less, and other preprocessors                                     |
| Plugins                   | Rollup plugins       | Vite plugins are built on top of Rollup’s mature plugin system                   |
| Config                    | `defineConfig()`     | Helps you write config with type safety and better DX                            |

---

## ⚙️ What Happens in Dev Mode?

When you run `vite` for development:

1. Vite starts a server instantly (thanks to Koa).
2. It looks at your `index.html` and sees something like:
   ```html
   <script type="module" src="/main.js"></script>
   ```

## 🧪 Test esbuild Locally

Want to quickly test `esbuild` in your project without installing it globally? Here are two simple ways to do it! 🚀

---

### ✅ Option 1: Use `npx` (The Easiest Way)

Run this command from your project root:

```bash
npx esbuild src/index.js --bundle --outfile=dist/bundle.js
```

### ✅ Option 2: Use the Local Binary Directly

If you prefer to call it explicitly from node_modules, use:

```
./node_modules/.bin/esbuild src/index.js --bundle --outfile=dist/bundle.js
```

👀 This does the same thing, but you're calling the binary directly.