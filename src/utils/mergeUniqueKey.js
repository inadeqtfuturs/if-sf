/**
 *
 * mergeUniqueKey: merges two arrays of objects, adding or
 * updating the initial array with values from the second.
 * You can also sort with an optional fourth param.
 *
 * @param {array} arr1
 * @param {array} arr2
 * @param {string - key value} key
 * @param {string - key value} sort
 *
 */

function mergeUniqueKey(arr1, arr2, key, sort = false) {
  const keyValues = new Set(arr2.map(v => v[key]));
  const merged = [...arr1.filter(v => !keyValues.has(v[key])), ...arr2];
  if (sort) {
    return merged.sort((a, b) => a[sort] - b[sort]);
  }
  return merged;
}

export default mergeUniqueKey;
