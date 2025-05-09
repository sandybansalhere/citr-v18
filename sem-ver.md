# 📌 Understanding Semantic Versioning (a.k.a. SemVer)

Ever seen something like `18.3.1` and wondered what those numbers mean?
This format is called **Semantic Versioning**, and it's super helpful once you get the hang of it!

---

## 🔢 Format: `MAJOR.MINOR.PATCH`

Example:

```
18.3.1
```

Each number means something specific:

---

## 💥 1. MAJOR version → `18`

- Big changes!
- Usually includes **breaking changes** — stuff that might not work with older code.
- Example: React `18.x` → `19.x`
- ⚠️ When this number changes, double-check your setup — things _might_ break.

---

## ✨ 2. MINOR version → `3`

- New features! 🎉
- These updates are **backward-compatible** — your current code will still work.
- Example: `18.2.0` → `18.3.0`
- ✅ Safe to upgrade, especially if your tools (like React, Vite, etc.) support it.

---

## 🐛 3. PATCH version → `1`

- Small fixes 🛠️
- Bug squashing, performance boosts — no new features.
- Example: `18.3.0` → `18.3.1`
- ✅ Totally safe to update anytime.

---

## 🧪 Pre-release Tags (Optional and Experimental)

Sometimes you’ll see versions like this:

```
19.0.0-alpha.1
19.0.0-beta.3
19.0.0-rc.1
```

These are **not final versions** — they're meant for testing and previewing upcoming changes.

| Tag      | Meaning                             | Should You Use It?                                             |
| -------- | ----------------------------------- | -------------------------------------------------------------- |
| 🧬 alpha | Very early testing phase — unstable | 🚫 Not recommended unless you're contributing or experimenting |
| 🧪 beta  | More stable, but still being tested | ⚠️ Only for testing, not production                            |
| 🚀 rc    | "Release Candidate" — almost ready  | ✅ Okay to try, but test first!                                |

---

## 🧠 TL;DR — Version Checklist

- ✅ `PATCH` = Safe to update (bug fixes)
- ✅ `MINOR` = Safe to update (new features)
- ⚠️ `MAJOR` = Check compatibility (breaking changes)
- 🚫 `alpha/beta/rc` = Use only for testing/dev environments

---

### 🎯 Tip: Always check the changelog or release notes before updating — especially for MAJOR updates!