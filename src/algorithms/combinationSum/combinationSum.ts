export const combinationSum = (candidates: number[], target: number) => {
  const count = candidates.length - 1;
  const combinations: number[][] = [];

  const variants = candidates.reduce(
    (acc: Record<number, number[]>, candidate) => {
      let times = 1;
      acc[candidate] = [];
      while (times) {
        const res = times * candidate;

        if (res <= target) {
          acc[candidate].push(res);
          times += 1;
        } else {
          times = 0;
        }
      }
      return acc;
    },
    {}
  );

  for (let i = 0; i <= count; i += 1) {
    const item = candidates[i];
    variants[item].forEach(value => {
      if (value === target) {
        combinations.push(new Array(target / item).fill(item));
      }
      for (let y = i + 1; y <= count; y += 1) {
        const nextItem = candidates[y];
        variants[nextItem].forEach(nextValue => {
          if (nextValue + value === target) {
            combinations.push([
              ...new Array(Math.floor(value / item)).fill(item),
              ...new Array(Math.floor(nextValue / nextItem)).fill(nextItem),
            ]);
          }
        });
      }
    });
  }
  return combinations;
};
