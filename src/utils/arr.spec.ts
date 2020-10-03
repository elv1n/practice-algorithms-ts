import { fillArray, reorder, swap } from './arr';

describe('arr utils', () => {
  it('should swap numbers', () => {
    expect(swap([1, 2, 3, 4, 5], 2, 0)).toEqual([3, 2, 1, 4, 5]);
  });
  it('should swap strings', () => {
    expect(swap(['1', '2', '3', '4', '5'], 2, 0)).toEqual([
      '3',
      '2',
      '1',
      '4',
      '5',
    ]);
  });
  it('should swap numbers from end to start', () => {
    expect(swap([1, 2, 3, 4, 5], 4, 0)).toEqual([5, 2, 3, 4, 1]);
  });
  it('should swap throw an error for negative number', () => {
    expect(
      swap.bind(null, [1, 2, 3, 4, 5], -1, 0)
    ).toThrowErrorMatchingSnapshot();
    expect(
      swap.bind(null, [1, 2, 3, 4, 5], 0, -1)
    ).toThrowErrorMatchingSnapshot();
  });
  it('should swap throw ean error for larger then max index arguments', () => {
    expect(
      swap.bind(null, [1, 2, 3, 4, 5], 5, 0)
    ).toThrowErrorMatchingSnapshot();
    expect(
      swap.bind(null, [1, 2, 3, 4, 5], 0, 5)
    ).toThrowErrorMatchingSnapshot();
  });
  it('should reorder numbers', () => {
    expect(reorder([1, 2, 3, 4, 5], 4, 0)).toEqual([5, 1, 2, 3, 4]);
  });
  it('should reorder strings', () => {
    expect(reorder(['1', '2', '3', '4', '5'], 2, 0)).toEqual([
      '3',
      '1',
      '2',
      '4',
      '5',
    ]);
  });
  it('should reorder throw an error for negative number', () => {
    expect(
      reorder.bind(null, [1, 2, 3, 4, 5], -1, 0)
    ).toThrowErrorMatchingSnapshot();
    expect(
      reorder.bind(null, [1, 2, 3, 4, 5], 0, -1)
    ).toThrowErrorMatchingSnapshot();
  });
  it('should reorder throw ean error for larger then max index arguments', () => {
    expect(
      reorder.bind(null, [1, 2, 3, 4, 5], 5, 0)
    ).toThrowErrorMatchingSnapshot();
    expect(
      reorder.bind(null, [1, 2, 3, 4, 5], 0, 5)
    ).toThrowErrorMatchingSnapshot();
  });

  it('should fill arr with number', () => {
    expect(fillArray(3, 2)).toEqual([2, 2, 2]);
  });
  it('should fill arr with string', () => {
    expect(fillArray(3, '2')).toEqual(['2', '2', '2']);
  });
});
