# `@dsco_/common`

This package contains all DSCO design constants, tokens, and styles. These are made available as SCSS files. See the "exports" field of this package to view available exports, which are also outlined below.

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
