/**
 * Sorts array of numbers
 * @param  {Array<number>}  sourceArray Unsorted array of Integer
 * @return {Array<number>|Array<Empty>} Sorted array or an empty array we don't pass an array of integers
 */
const question_2 = (source = []) => {
  if (!source.length || !source.every(item => item === parseInt(item, 10))) {
    return [];
  }

  const sourceCopy = [...source];
  sourceCopy.sort((current, next) => {
    return current - next;
  })

  return sourceCopy;
}

export default question_2;
