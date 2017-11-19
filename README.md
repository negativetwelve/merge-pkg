# merge-pkg

[![npm](https://img.shields.io/npm/v/merge-pkg.svg)](https://www.npmjs.com/package/merge-pkg)
[![npm](https://img.shields.io/npm/dt/merge-pkg.svg)](https://www.npmjs.com/package/merge-pkg)
[![npm](https://img.shields.io/npm/l/merge-pkg.svg)](https://github.com/negativetwelve/merge-pkg/blob/master/LICENSE)

Merge multiple package.json files together preserving key order and sorting dependencies.

## Getting Started

Install `merge-pkg` using `yarn`:

```shell
yarn add merge-pkg
```

## Usage

```javascript
import merge from 'merge-pkg';

const merged = merge(firstPackageJSON, secondPackageJSON, thirdPackageJSON);
```

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/merge-pkg/issues) or [submit a PR](https://github.com/negativetwelve/merge-pkg/pulls).
