# toolkit-duo-libs

A monorepo for utility packages published to GitHub Packages.

## Structure

This repository uses Yarn workspaces to manage multiple packages:

```
toolkit-duo-libs/
├── package.json (root workspace)
├── .npmrc (GitHub Packages configuration)
├── .github/
│   └── workflows/
│       └── ci.yml
└── packages/
	├── format-utils/
	│   ├── package.json
	│   ├── index.js
	│   ├── format.js
	│   ├── index.d.ts
	│   ├── test.js
	│   └── README.md
	└── validate-utils/
		├── package.json
		├── index.js
		├── validate.js
		├── index.d.ts
		├── test.js
		└── README.md
```

## Packages

### @joschavai/format-utils

Simple formatting utilities (text, slug, currency, date).

### @joschavai/validate-utils

Simple validation utilities (email, password strength, min length, numeric string).

## Dependencies

- Shared package: `lodash`
- Package-specific (`format-utils`): `date-fns`
- Package-specific (`validate-utils`): `validator`

## Install (Consumer)

First, configure npm/Yarn to use GitHub Packages for `@joschavai` scoped packages in your `~/.npmrc`:

```
@joschavai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Then install only what you need:

```bash
yarn add @joschavai/format-utils
```

or

```bash
yarn add @joschavai/validate-utils
```

You can use one package without installing the other.

## Development (Monorepo)

Install all workspace dependencies:

```bash
yarn install
```

Run tests across all packages:

```bash
yarn test
```

## CI and Publish

The workflow in `.github/workflows/ci.yml` does:

- CI on `push` and `pull_request` (install + test)
- Publish on `release` event (only after tests pass)

## Manual Publish

From the repository root:

```bash
yarn workspace @joschavai/format-utils npm publish
yarn workspace @joschavai/validate-utils npm publish
```

## License

ISC
