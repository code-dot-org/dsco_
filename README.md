# Design System for Code.org (DSCO)

This repository translates our design system to code and publishes the corresponding styles and React components as independent NPM packages. It's "dsco\_" because "dsco" wasn't available as an NPM organization :)

## Setup

1. Clone this repository and navigate to the root directory.
2. `npm install`

## Storybook

Run `npm run storybook` from the root directory to start storybook locally.

## Creating a New Component

Creating a new component may or may not involve creating a new package for that component. For example, if `@dsco_/form` exists and you're creating a component that belongs in a form, you should add that component to the existing package (don't forget to add tests and stories!).

Creating a component that should be in a new package is more involved. Make sure to review [our Styleguides](#styleguides) beforehand if you aren't already familiar; consistency is key in a component library!

1. Create the package scaffolding with [`lerna create @dsco_/<name>`](https://github.com/lerna/lerna/tree/main/commands/create#readme). You'll be asked a series of questions that influence how the resulting `package.json` is configured. You should change the following when prompted:
   - License should be "MIT"
   - Entry point should most likely be `dist/main.js`. This value sets the "main" field in our `package.json` and must match our Webpack output file, which is currently configured to the default output file of `dist/main.js`. If this package will have a different output file, that's fine, just make sure the "main" field matches.
2. Rename the entry point file to `lib/index.js`. The default will be `lib/<name>.js`, but Webpack is configured to look for a `lib/index.js` file as its entry point. This file should export all JavaScript package contents as named exports -- it shouldn't do anything else.
3. Add a "build" script to your new `package.json` file. It should be:

```json
"build": "webpack --config ../../webpack.config.js"
```

4. Add any dependencies to your component with [`lerna add`](https://github.com/lerna/lerna/tree/main/commands/add#readme). Make sure to use `--scope` to only add those dependencies to the necessary package.
5. Now you can start creating your component, writing tests (after renaming the default test file) and Storybook stories, and documenting your component!

### Adding Another `@dsco_` Package as a Dependency

1. If not already present, make sure the package you'll depend on is linked in the root `package.json` like this:

```json
"@dsco_/<name>": "file:packages/<name>"
```

2. `npm install` from the root directory.
3. [`lerna add @dsco_/<name>`](https://github.com/lerna/lerna/tree/main/commands/add#readme). Make sure to use the `--scope` flag to only add this dependency to the desired package(s).
4. `npm run build` from the root directory to make sure everything is properly linked.

### Testing/Installing an Unpublished Package

If want to test your package before publishing it to NPM, here are the steps to do so:

1. From the root directory, run `npm run build` (for a development build) or `npm run build:prod` (for a production build).
2. Navigate to the package root (the directory where that package's `package.json` lives).
3. Run [`npm pack`](https://docs.npmjs.com/cli/v7/commands/npm-pack), which will create a `.tgz` package in the current directory. (Make sure you don't accidentally commit this later.)
4. Add this local package to the consuming application's `package.json` file by referencing the path to your `.tgz` instead of a version number. It should look something like this:

```json
"@dsco_/my-component": "file:../dsco_/packages/my-component/dsco_-my-component-1.0.0.tgz"
```

5. Run the installation script in the consuming application (via `yarn install`, `npm install`, etc.). Now you can import and consume your local package the same as a published package.

## Styleguides

Many of these conventions are already enforced through linting (or should be if we notice any that are missing!), but the general conventions are also laid out below.

### JavaScript

- Follow the Airbnb styleguides for [JavaScript](https://airbnb.io/javascript/) and [React](https://airbnb.io/javascript/react/).
- JavaScript files: `camelCase.js`.
- React components and their files: `PascalCase.jsx`. See ["User-Defined Components Must Be Capitalized"](https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized) for more detail.
- A unit test filename should match the file it's testing and end in `.test.js`.
- A Storybook filename should match the component it's rendering and end in `.stories.js`.

### SCSS

- Follow the [Sass guidelines](https://sass-guidelin.es) as a styleguide.
- Global SCSS files that will be imported elsewhere: `_kebab-case.scss`
- SCSS module files: `kebab-case.module.scss`
- It's important to include/exclude `.module` because Webpack will bundle the file differently and it affects the scope of the styles in that file.

### Packages

NPM packages should be `kebab-case` under the `@dsco_` scope.

We should keep the file structure of each package consistent unless there's a good reason to structure a certain package differently (e.g., it isn't just a package that exports styled React components). For a package called `@dsco_/my-component` and exports a single React component called `MyComponent`, its file structure should look as follows:

```text
packages/my-component
  __stories__
    MyComponent.stories.js
  __tests__
    MyComponent.test.js
  lib
    index.js
    my_component.module.scss
    MyComponent.jsx
  package.json
  README.md
```

## Managing Common Dependencies

Many packages will have the same dependencies, so managing them together will make upgrades easier and less error-prone.

For managing common `devDependencies` (like React), see [this guide from Lerna](https://github.com/lerna/lerna#common-devdependencies).

## Resources

### Tools

- [lerna](https://github.com/lerna/lerna) for publishing many NPM packages from a monorepo.
- [storybook](https://storybook.js.org/docs/react/get-started/introduction) for documenting components.
- [commitlint](https://commitlint.js.org) enforces commit linting. Currently set up to enforce the [Conventional Commits](https://www.conventionalcommits.org) specification.
- [husky](https://typicode.github.io/husky) for git hooks.
- [prettier](https://prettier.io) for code formatting. It's best to [configure your editor](https://prettier.io/docs/en/editors.html) to run prettier on save, but it will also auto-format before committing.
- [eslint](https://eslint.org) for consistency and finding possible code problems. It's best to [configure your editor](https://eslint.org/docs/user-guide/integrations) to run eslint, but it will also run (will not auto-fix) before committing.
