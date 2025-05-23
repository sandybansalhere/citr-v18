# ⚛️ Complete intro to React v18.3.1

Complete intro to react **citr-v18** is all about **client-side React** and for more advance react concept and **Server-side React** please refer to **ir-v19**.

# 🚀 React core concepts

TODO: JSX, Hooks, NODE_ENV=development/production, React Developer Tools tips and tricks

## 📌 Understanding How React Works Across Platforms

- **React**
- **ReactDOM**

React is the core library used to build user interfaces, and it's the same whether you're building for the web, mobile, or even VR. Tools like React Native, React Three Fiber, and React 360 all use the same React at their core. What changes is the rendering layer—on the web, that's handled by React DOM, which takes care of updating the browser.

> 🧩 **React is all about making component.**

## 📌 Strict Mode

By wrapping your app in <StrictMode></StrictMode> React will give you additional warnings about things you shouldn't be doing.

> ✅ **StrictMode** double render the components and will run the effects twice. It does this to catch subtle bugs where your app will change between renders when it's not meant to.
