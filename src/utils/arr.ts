const validateArrIndex = (
  arrLength: number,
  index1: number,
  index2: number
) => {
  if (index1 < 0 || index1 >= arrLength || index2 < 0 || index2 >= arrLength) {
    throw new Error(
      `Indexes should be zero or positive number less than array length. Incoming data: max index ${
        arrLength - 1
      }, index1: ${index1}, index2: ${index2}`
    );
  }
};
export const swap = <T>(arr: T[], fromIndex: number, toIndex: number) => {
  validateArrIndex(arr.length, fromIndex, toIndex);
  [arr[fromIndex], arr[toIndex]] = [arr[toIndex], arr[fromIndex]];
  return arr;
};

export const reorder = <T>(arr: T[], startIndex: number, endIndex: number) => {
  validateArrIndex(arr.length, startIndex, endIndex);
  const [removed] = arr.splice(startIndex, 1);
  arr.splice(endIndex, 0, removed);
  return arr;
};
/**
 * @deprecated
 * new Array(length).fill(value) faster
 */
export const fillArray = <T>(length: number, value: T): T[] => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr[i] = value;
  }
  return arr;
};
