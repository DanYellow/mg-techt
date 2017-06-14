/**
 * Sorts array of string
 * @param  {Array}  sourceArray [description]
 * @return {[type]}             [description]
 */
const question_2 = (source = []) => {
  if (!source.length) {
    return source;
  }

  const sourceCopy = [...source];
  sourceCopy.sort((current, next) => {
    return current - next;
  })

  return sourceCopy;
}

export default question_2;
