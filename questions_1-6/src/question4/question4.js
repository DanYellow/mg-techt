export const computeString = (str = '') => {
  if (!str) {
    return str;
  }

  const strCopy = str;
  const strChunks = strCopy.split('_');

  const strChunksComputed = strChunks.map((chunk) => ( 
    `${chunk.charAt(0).toUpperCase()}${chunk.slice(1)}`
  ));

  return strChunksComputed.join(' ');
}

/**
 * Sorts array of string
 * @param  {Array}  source Source array of string to compute
 * @return {Array<string>|Array<empty>} New array of strings computed or empty array if source not contains only strings
 */
const question_4 = (source = []) => {
  if (!source.length || !source.every(item => typeof item === 'string')) {
    return [];
  }

  const sourceCopy = [...source];
  const newArray = [];
  let computedEntry = null;

  for (let i = 0; i < source.length; i++) {
    computedEntry = computeString(source[i]);
    newArray.push(computedEntry);
  }

  return newArray;
}

export default question_4;
