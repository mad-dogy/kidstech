# KidStech

## Description

Test task for LogicLike.

[Deploy link.](https://mad-dogy.github.io/kidstech/dist/)

## Get started

```bash
	yarn install
```

### Dev Scripts
- Start proj in dev mode using vite.
```bash
  npm run dev
```

### Build Scripts
- Generate bundle.
```bash
  npm run build
```

## Architecture

App implemented using [feature slices design](https://feature-sliced.design/) methodology.

## Utils

### EsLint

- Check Eslint errors.
```bash
	npm run lint
```

### Prettier

eslint + prettier for formatting code [https://prettier.io/docs/en/integrating-with-linters.html](using eslint-plugin-prettier).

> duplicate prettier config in the .eslintrc.js rules "prettier/prettier" to avoid conflicts between global config and project.
> highly recommended to setup your IDE to run lint:fix command on save file. (Current project has set up for vsCode, no additional actions need not).

### App Screenshots

![App screenshot](ReadmeResources/appScreenshot.png)
