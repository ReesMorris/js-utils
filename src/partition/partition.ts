/* eslint-disable @typescript-eslint/no-explicit-any */

const partition = (array: any[], condition: (e?: any) => boolean): any[][] => {
  const pass: any[] = [];
  const fail: any[] = [];

  array.forEach(e => (condition(e) ? pass : fail).push(e));

  return [pass, fail];
};

export default partition;
