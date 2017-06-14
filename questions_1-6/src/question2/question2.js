/**
 * Sorts array of strings
 * @param  {Array}  sourceArray Array to sort
 * @return {Array<string>|Array<Empty>}             Sorted array or an empty array we don't pass an array of strings
 */
const question_2 = (source = []) => {
  if (!source.length || !source.every(item => typeof item === 'string')) {
    return [];
  }

  const sourceCopy = [...source];
  sourceCopy.sort()

  return sourceCopy;
}

export default question_2;
