/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

const isEmpty = (val: any): boolean => {
  // Numbers and booleans can never be empty
  if (typeof val == 'number' || typeof val == 'boolean') return false;

  // Is it `undefined` or `null`?
  if (typeof val === 'undefined' || val === null) return true;

  // Does it have a length (string or array)?
  if (val.length && val.length === 0) return true;

  // Is it an array of empty arrays?
  if (Array.isArray(val)) return val.filter(e => !isEmpty(e)).length === 0;

  // Is it an object with no properties?
  if (typeof val === 'object') return Object.keys(val).length === 0;

  // Is it a string with no content?
  if (typeof val === 'string') return val.trim().length === 0;

  return false;
};

export default isEmpty;
