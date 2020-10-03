import { combinationSum } from './combinationSum';

describe('combinationSum', () => {
  it('should find combinations 1', () => {
    expect(combinationSum([1, 2, 8], 3)).toEqual([
      [1, 2],
      [1, 1, 1],
    ]);
  });
  it('should find combinations 2', () => {
    expect(combinationSum([4, 2, 8], 8)).toEqual([
      [4, 2, 2],
      [4, 4],
      [2, 2, 2, 2],
      [8],
    ]);
  });
  it('should find combinations 2', () => {
    expect(combinationSum([6, 12, 22, 4, 3], 14)).toEqual([
      [6, 4, 4],
      [4, 4, 3, 3],
    ]);
  });
});
