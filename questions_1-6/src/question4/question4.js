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
 * @param  {Array}  source [description]
 * @return {[type]}             [description]
 */
const question_4 = (source = []) => {
  if (!source.length) {
    return source;
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
