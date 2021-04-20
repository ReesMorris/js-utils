import partition from './partition';

test('returns two arrays', () => {
  expect(partition([], () => true)).toStrictEqual([[], []]);
});

test('returns correct items in each array', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [odd, even] = partition(nums, e => e % 2 === 1);

  expect(odd).toStrictEqual(nums.filter(num => num % 2 === 1));
  expect(even).toStrictEqual(nums.filter(num => num % 2 === 0));
});

test('returns correct items in each array', () => {
  const arr = ['one', 2, 3, 'four', 5, 'six', 'seven'];
  const [strs, nums] = partition(arr, e => typeof e === 'string');

  expect(strs).toStrictEqual(['one', 'four', 'six', 'seven']);
  expect(nums).toStrictEqual([2, 3, 5]);
});

test('returns all passing items', () => {
  const nums = [1, 2, 3, 4, 5];
  const [lt, gt] = partition(nums, e => e < 10);

  expect(lt).toStrictEqual(nums);
  expect(gt).toStrictEqual([]);
});

test('returns all failing items', () => {
  const nums = [1, 2, 3, 4, 5];
  const [lt, gt] = partition(nums, e => e > 10);

  expect(lt).toStrictEqual([]);
  expect(gt).toStrictEqual(nums);
});
