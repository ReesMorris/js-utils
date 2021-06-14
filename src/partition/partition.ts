const partition = <T>(array: T[], condition: (e: T) => boolean): T[][] => {
  const pass: T[] = [];
  const fail: T[] = [];

  array.forEach(e => (condition(e) ? pass : fail).push(e));

  return [pass, fail];
};

export default partition;
