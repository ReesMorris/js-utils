# js-utils

This is a small repository where I store any code I write that I tend to re-use _a lot_ in other applications I make.

It's mainly independent, small utility functions that you can copy/paste into your own application (including the tests, if necessary!), though some functions may include other lightweight libraries to do the heavy lifting (such as for dates and timezones).

I try to keep this updated from time-to-time if I ever come across any utils that might be useful.

## Current utils

- `isEmpty(val: any)` - returns `true` if the provided argument is empty
- `partition(arr: any[], condition: (e?: any) => boolean)` - returns two arrays: the former with array items that match the condition, and the latter with array items that do not.
