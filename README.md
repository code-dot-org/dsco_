# Design System for Code.org (DSCO)

This repository translates our design system to code and publishes the corresponding styles and React components as independent NPM packages. It's "dsco\_" because "dsco" wasn't available as an NPM organization :)

## Setup

1. Clone this repository and navigate to the root directory.
2. `npm install`

## Resources

### Tools

- [lerna](https://github.com/lerna/lerna) for publishing many NPM packages from a monorepo.
- [commitlint](https://commitlint.js.org) enforces commit linting. Currently set up to enforce the [Conventional Commits](https://www.conventionalcommits.org) specification.
- [husky](https://typicode.github.io/husky) for git hooks.
