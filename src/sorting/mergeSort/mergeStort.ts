const merge = (arr1: number[], arr2: number[]) => {
  let i1 = 0;
  let i2 = 0;
  const mergedLength = arr1.length + arr2.length;
  const newArr: number[] = [];
  for (let i = 0; i < mergedLength; i += 1) {
    if (arr1[i1] === undefined || arr1[i1] > arr2[i2]) {
      newArr[i] = arr2[i2];
      i2 += 1;
    } else {
      newArr[i] = arr1[i1];
      i1 += 1;
    }
  }
  return newArr;
};

/**
 Worst-case performance O(n log n)
 Best-case performance  O(n log n) typical, O(n) natural variant
 Average performance    O(n log n)
 Worst-case space complexity О(n) total with O(n) auxiliary, O(1) auxiliary with linked lists[1]
 */
export function mergeSort(arr: number[]) {
  const { length } = arr;
  switch (true) {
    case length < 2:
      return arr;
    case length === 2:
      return arr[0] < arr[1] ? arr : [arr[1], arr[0]];
    default: {
      const half = Math.ceil(length / 2);
      return merge(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half)));
    }
  }
}
