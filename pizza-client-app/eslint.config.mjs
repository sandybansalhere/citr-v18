// This brings in the default set of JavaScript rules from ESLint itself.
// These are the rules you'd expect around variables, syntax errors, etc.
import js from "@eslint/js";

// This gives us pre-defined global variables for different environments
// like `window`, `document`, `process`, etc.
import globals from "globals";

// This disables any ESLint rules that might conflict with how Prettier formats code.
// That way, Prettier handles formatting, and ESLint just worries about code quality.
import prettier from "eslint-config-prettier";

// This plugin adds all the helpful rules specifically for React code—like hooks rules,
// JSX syntax checking, and component best practices.
import reactPlugin from "eslint-plugin-react";

/**
 * This is a JSDoc type annotation used in JavaScript
 * files to tell your editor (like VS Code) what type the
 * next value has.
 *
 * If you remove the type annotation, ESLint will still
 * work — but:
 *
 * - You won’t get autocomplete
 * - Mistakes won’t be flagged until runtime or lint time
 * - You lose documentation and editor help
 */
/** @type {import('eslint').Linter.Config[]} */

/**
 * We’re exporting an array of configuration objects.
 * ESLint will apply them in order, from top to bottom.
 */
export default [
  // 🧠 Step 1: Use ESLint's default recommended rules for JavaScript.
  // These cover common things like avoiding unused variables, no-extra-semi, etc.
  js.configs.recommended,

  // ⚛️ Step 2: Add recommended rules for React.
  // This includes rules about things like valid JSX, hooks rules, prop usage, and more.
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        // Auto-detect the installed version of React in your project.
        // This helps the plugin apply version-specific rules correctly.
        version: "detect",
      },
    },
  },

  // 🪄 Step 3: Enable support for the modern JSX transform (React 17+).
  // This means you *don’t* need to import React manually in every file that uses JSX.
  reactPlugin.configs.flat["jsx-runtime"],

  {
    // 🎯 Step 4: Apply the following config only to .js and .jsx files
    files: ["**/*.js", "**/*.jsx"],

    languageOptions: {
      globals: {
        // Include both browser globals (like `window`, `document`)
        // and Node.js globals (like `require`, `process`)
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          // Tell ESLint that we’re using JSX in our JavaScript files
          jsx: true,
        },
      },
    },

    // 🛠 Step 5: Customize or override some React rules
    rules: {
      // This rule normally throws an error if you use things like `'` or `&` directly in JSX text.
      // We're turning it off because it's a little too picky for most modern apps.
      "react/no-unescaped-entities": "off",

      // This rule enforces defining PropTypes for React components,
      // but if you're using TypeScript or another type-checking tool, you can safely turn it off.
      "react/prop-types": "off",
    },
  },

  // 🎨 Step 6: Turn off any ESLint rules that might clash with Prettier.
  // This makes sure your code formatting stays consistent and error-free.
  prettier,
];
