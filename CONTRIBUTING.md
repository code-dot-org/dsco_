# Contributing to DSCO

<details>
  <summary>Table of Contents</summary>

- [Contributing to DSCO](#contributing-to-dsco)
  - [General Guidelines](#general-guidelines)
    - [Contribution Process](#contribution-process)
  - [Setup](#setup)
  - [Storybook](#storybook)
    - [Deploying to GitHub Pages](#deploying-to-github-pages)
  - [Testing](#testing)
  - [Publishing](#publishing)
  - [Creating a New Component](#creating-a-new-component)
    - [Adding Another `@dsco_` Package as a Dependency](#adding-another-dsco_-package-as-a-dependency)
    - [Testing/Installing an Unpublished Package](#testinginstalling-an-unpublished-package)
  - [Developing a Package Locally Within a Consuming Application](#developing-a-package-locally-within-a-consuming-application)
  - [Styleguides](#styleguides)
    - [JavaScript](#javascript)
    - [SCSS](#scss)
    - [Packages](#packages)
  - [Managing Common Dependencies](#managing-common-dependencies)
  - [Resources](#resources)
    - [Tools](#tools)
    </details>

## General Guidelines

To contribute code to this repository, you will almost always make a pull request against the default branch. Unless you are publishing our packages and storybook, you shouldn't be committing or pushing directly to the default branch.

### Contribution Process

Before your first contribution, make sure to read through this file and familiarize yourself with [our tools](#tools) and [styleguides](#styleguides). Then you can...

1. Make a local branch from the default branch and make some changes.
2. When you're ready to commit, your commit messages must follow [conventional commits](https://www.conventionalcommits.org). **This is the most important part of the process!** Lerna uses our commit messages to decide the next version numbers and changelog content when we publish packages ([see more details from Lerna](https://github.com/lerna/lerna/blob/main/commands/version/README.md#--conventional-commits)). There is pre-commit linting set up to help you, but here are some additional tips that linting can't help with:

   - The `type` (e.g., `fix`, `feat`, `chore`) decides the version number for the next publish, so if you label a commit with a breaking API update as `feat`, the next version will be a minor bump instead of a major bump.
   - Always add the `scope` to your commit message -- each package is a "scope". Example: `feat(common): add color tokens` ensures this commit will make it into the next changelog for the `@dsco_/common` package and the next version will be a minor version bump.
   - It's generally best to commit to a single package at a time (e.g., a commit should only change files in 1 package, not many). It will keep changelogs clear and concise.
   - `chore` commits do not appear in changelogs, so these are best for commits like "adds tests" or "adds stories" that don't really need to be in the package's changelog.
   - [See examples here](https://www.conventionalcommits.org/en/v1.0.0/#examples). Additional examples that are specific to this repository:

```
# A commit that doesn't belong to a package (i.e., no changes are in packages/ files)
chore(root): add contributing guidelines

# A commit that adds a new feature to the @dsco_/link package
feat(link): always open external links in a new tab
```

3. Add stories for any visual changes and unit tests for any functional changes.
4. Push your branch and make a pull request. Make sure your PR description describes the change and why you're making it, has necessary screenshots/videos, and links to any Jira tasks or issues.
   - A review request will automatically be requested by the repository code owners, but you can add additional reviewers.
   - GitHub actions will run.
5. Once you have approval from at least 1 reviewer and GitHub checks have completed successfully, you're ready to merge!

## Setup

1. Clone this repository and navigate to the root directory.
2. `npm install`

## Storybook

Run `npm run storybook` from the root directory to start storybook locally.

**Tips:**

- If you are making changes to multiple packages at once, you may need to rebuild to see those changes across packages.

### Deploying to GitHub Pages

This should happen after every publish so that our Storybook documentation accurately reflects the most recent consumable versions of our components.

1. Make sure you're on the default repository branch with no uncommitted changes. You'll be committing/pushing directly to that branch to deploy the updated Storybook documentation to GitHub Pages.
2. `npm run storybook:build` from the root directory.
3. Commit the updated `docs/` files.
4. Push to origin to automatically deploy to GitHub Pages.

## Testing

Run `npm run test` from the root directory to run the entire suite. `npm run test <path>` will run tests within a specific directory.

## Publishing

1. Make sure you are a member of the `@dsco_` NPM organization and logged in to that NPM account from the command line (`npm whoami` will tell you your username). If you aren't a member, the dev-code-org NPM account (credentials in LastPass) has the proper permissions to invite members to `@dsco_`.
2. Run `npm run publish` **from the root directory on the default branch** to autogenerate changelogs and publish all packages that have changed since the last release. You'll be asked to confirm before anything is actually published to NPM.
3. [Deploy the newly-published components to Storybook](#deploying-to-github-pages).

**Tips:**

- Our publish script uses [`lerna publish`](https://github.com/lerna/lerna/tree/main/commands/publish#readme).
- We use [`--conventional-commits`](https://github.com/lerna/lerna/blob/main/commands/version/README.md#--conventional-commits), so Lerna will automatically detect what versions should be published based on commit messages.

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

Now you can create your component, write tests (after renaming the default test file) and Storybook stories, and document your component!

### Adding Another `@dsco_` Package as a Dependency

1. If not already present, make sure the package you'll depend on is linked in the root `package.json` as a dependency like this:

```json
"@dsco_/<name>": "file:packages/<name>"
```

2. `npm install` from the root directory.
3. [`lerna add @dsco_/<name>`](https://github.com/lerna/lerna/tree/main/commands/add#readme). Make sure to use the `--scope` flag to only add this dependency to the desired package(s).
4. `npm run build` from the root directory to make sure everything is properly linked.

### Testing/Installing an Unpublished Package

If want to test your package before publishing it to NPM, here are the steps to do so:

1. From the root directory, run `npm run build` (for a development build) or `npm run build:prod` (for a production build).
   - **Note:** Testing in Code Studio will only work with a production build.
2. Navigate to the package root (the directory where that package's `package.json` lives).
3. Run [`npm pack`](https://docs.npmjs.com/cli/v7/commands/npm-pack), which will create a `.tgz` package in the current directory. (Make sure you don't accidentally commit this later.)
4. Add this local package to the consuming application's `package.json` file by referencing the path to your `.tgz` instead of a version number. It should look something like this:

```json
"@dsco_/my-component": "file:../dsco_/packages/my-component/dsco_-my-component-1.0.0.tgz"
```

5. Run the installation script in the consuming application (via `yarn install`, `npm install`, etc.). Now you can import and consume your local package as if it were a published package.

## Developing a Package Locally Within a Consuming Application

1. Install the relevant package in the consuming application if it isn't already installed.
   - For unpublished packages, you need to go through [these installation steps](#testinginstalling-an-unpublished-package).
2. Navigate to the package's root directory and run [`npm link`](https://docs.npmjs.com/cli/v8/commands/npm-link).
   - **Note:** This will create a `package-lock.json` for the package; don't commit it -- Lerna manages our dependencies, but NPM will create the lockfile by default.
3. From the consuming application, navigate to the `package.json` directory and run `npm link <package>`.
4. Now you can make changes to your package and see them in the consuming application. You have to rebuild (`npm run build` or `npm run build:prod` from the root of this repository) anytime you make a change in order to see that change reflected in the consuming app because the consumer looks at your package's `dist/` output.
   - **Note:** Testing in Code Studio will only work with a production build.

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
- [Github Pages](https://pages.github.com/) for hosting our Storybook documentation.
- [commitlint](https://commitlint.js.org) enforces commit linting. Currently set up to enforce the [Conventional Commits](https://www.conventionalcommits.org) specification.
- [husky](https://typicode.github.io/husky) for git hooks.
- [prettier](https://prettier.io) for code formatting. It's best to [configure your editor](https://prettier.io/docs/en/editors.html) to run prettier on save, but it will also auto-format before committing.
- [eslint](https://eslint.org) for consistency and finding possible code problems. It's best to [configure your editor](https://eslint.org/docs/user-guide/integrations) to run eslint, but it will also run (will not auto-fix) before committing.
- [jest](https://jestjs.io/) for test harnessing and [testing library](https://testing-library.com/) for React testing utilities.
- [GitHub Actions](https://github.com/features/actions) for continuous integration.
