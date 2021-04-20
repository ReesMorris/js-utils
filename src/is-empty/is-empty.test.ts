import isEmpty from './is-empty';

test('returns `true` for null and undefined values', () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
});

test('returns `true` for an empty string', () => {
  expect(isEmpty('')).toBe(true);
  expect(isEmpty('  ')).toBe(true);
});

test('returns `false` for non-empty strings', () => {
  expect(isEmpty('1')).toBe(false);
  expect(isEmpty('    1')).toBe(false);
});

test('returns `false` for any number', () => {
  expect(isEmpty(0)).toBe(false);
  expect(isEmpty(123456789)).toBe(false);
});

test('returns `true` for an empty array', () => {
  expect(isEmpty([])).toBe(true);
  // eslint-disable-next-line no-sparse-arrays
  expect(isEmpty([, , , ,])).toBe(true);
  expect(isEmpty([[], [[]], [[[]]], []])).toBe(true);
});

test('returns `false` for an array with items', () => {
  expect(isEmpty([1])).toBe(false);
  // eslint-disable-next-line no-sparse-arrays
  expect(isEmpty([, , 1, ,])).toBe(false);
  expect(isEmpty([[], [[]], [[[1]]], []])).toBe(false);
});

test('returns `true` for an empty object', () => {
  expect(isEmpty({})).toBe(true);
});

test('returns `false` for an object with properties', () => {
  expect(isEmpty({ a: 'b' })).toBe(false);
});
