import { reorder } from '../../utils/arr';

const findPlace = (arr: number[], index: number, prevIndex: number) => {
  const current = arr[index];
  const prev = arr[prevIndex];
  if (current < prev) {
    if (prevIndex !== 0 && current < arr[prevIndex - 1]) {
      findPlace(arr, index, prevIndex - 1);
    } else {
      reorder(arr, index, prevIndex);
    }
  }
};

/**
 * Runtime: O(n^2)
 */
export function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i += 1) {
    findPlace(arr, i, i - 1);
  }
  return arr;
}
