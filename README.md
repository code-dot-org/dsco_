# Design System for Code.org (DSCO)

This repository translates our design system to code and publishes the corresponding styles and React components as independent NPM packages. It's "dsco\_" because "dsco" wasn't available as an NPM organization :)

## Setup

1. Clone this repository and navigate to the root directory.
2. `npm install`

## Storybook

Run `npm run storybook` from the root directory to start storybook locally.

## Resources

### Tools

- [lerna](https://github.com/lerna/lerna) for publishing many NPM packages from a monorepo.
- [storybook](https://storybook.js.org/docs/react/get-started/introduction) for documenting components.
- [commitlint](https://commitlint.js.org) enforces commit linting. Currently set up to enforce the [Conventional Commits](https://www.conventionalcommits.org) specification.
- [husky](https://typicode.github.io/husky) for git hooks.
- [prettier](https://prettier.io) for code formatting. It's best to [configure your editor](https://prettier.io/docs/en/editors.html) to run prettier on save, but it will also auto-format before committing.
- [eslint](https://eslint.org) for consistency and finding possible code problems. It's best to [configure your editor](https://eslint.org/docs/user-guide/integrations) to run eslint, but it will also run (will not auto-fix) before committing.
