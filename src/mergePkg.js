// Libraries
import mergeWith from 'lodash.mergewith';
import sortKeys from 'sort-keys';

const DEPENDENCIES = [
  'dependencies',
  'devDependencies',
  'optionalDependencies',
  'peerDependencies',
];

/**
 * Merges package.json objects into a single final output. Sorts dependencies
 * alphabetically and preserves key order.
 */
export default (...objects) => {
  return mergeWith({}, ...objects, (value1, value2, key) => {
    if (DEPENDENCIES.includes(key)) {
      return sortKeys(mergeWith({}, value1, value2));
    } else if (Array.isArray(value1)) {
      return value1.concat(value2);
    } else if (typeof value1 === 'object') {
      return mergeWith({}, value1, value2);
    } else {
      return value2;
    }
  });
};
