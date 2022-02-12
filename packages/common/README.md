# `@dsco_/common`

This package contains all DSCO design constants, tokens, and styles. These are made available as SCSS files.

**Notes:**

- The [`@use`](https://sass-lang.com/documentation/at-rules/use) Sass feature is only available for Dart Sass. If you are using a different Sass implementation, replace `@use` with [`@import`](https://sass-lang.com/documentation/at-rules/import). Internally, this package uses `@import` to maintain compatibility with all Sass implementations.
- The import paths below use the "exports" field in `package.json`, which is a feature only available to Webpack 5+ consumers. If you use Webpack 4 or below, you should import this package as `@dsco_/common` (which corresponds to the "main" field in `package.json`), or point to a specific file in the package (e.g., `@dsco_/common/styles/_tokens.scss`).

## [fonts](styles/_fonts.scss)

Loads the Code.org Gotham font-faces from the [dsco.code.org CloudFront distribution](https://console.aws.amazon.com/cloudfront/v3/home?region=us-east-1#/distributions/E2QIN1MOUCTV1X), which is backed by the [cdo-dsco S3 bucket](https://console.aws.amazon.com/s3/buckets/cdo-dsco). These resources are only available for code.org domains -- any third-party consumers are responsible for licensing and loading Gotham fonts independently.

Example usage:

### SCSS

```scss
@use '@dsco_/common/fonts';
```

### JavaScript

```javascript
import '@dsco_/common/fonts';
```

This file should not be loaded by internal packages -- it should be loaded by consumers on any pages that require these font definitions.

Internally, [mixins](styles/_mixins.scss) map these font-faces to reusable font definitions. These mixins also fall back to the Code Studio font-faces, which are the same font resources but are defined slightly differently; this library defines a single 'Gotham' `font-family` with varying `font-weight`s and `font-style`s, whereas Code Studio defines each font-face as a separate `font-family` (e.g., 'Gotham 4r', 'Gotham 4i', 'Gotham 5r', etc.).

## [mixins](styles/_mixins.scss)

Common mixins.

Let's say this export defines a `font-regular` mixin. Example usage:

```scss
@use '@dsco_/common/mixins';

.text {
  @include mixins.font-regular;
}
```

## [styles](styles/_styles.scss)

Common utility classes. All classes should be prefaced with `dsco-` for namespacing and consistency.

Let's say this export defines a `dsco-text` class. Example usages:

### SCSS

```scss
// text.module.scss
@use '@dsco_/common/styles';

.text {
  @extend .dsco-text;
  // additional styles
}
```

### JavaScript

```javascript
// Text.jsx
import '@dsco_/common/styles';

export default function Text({text}) {
  return <p className="dsco-text">{text}</p>;
}
```

## [tokens](styles/_tokens.scss)

A set of SCSS variables that serve as design tokens for DSCO. These constants should be prefaced with `dsco-` for namespacing and consistency.

Example usage:

```scss
// @dsco_/common/tokens
$dsco-text-color: purple;
```

```scss
// text.module.scss
@use '@dsco_/common/tokens';

.text {
  color: tokens.$dsco-text-color;
}
```
