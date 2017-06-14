/**
 * Indicates if all objects in the array contains the keyToFind as property
 * @param  {string} keyToFind string key to find in the array's object
 * @param  {Array}  source Array to inspect
 * @return {Boolean}
 */
const question_5 = (keyToFind = '', source = []) => {
  if (!keyToFind.length
    || !source.length
    || !source.every(item => typeof item === 'object')
    || typeof keyToFind !== 'string') {
    return false;
  }

  return source.every(currentObj => currentObj.hasOwnProperty(keyToFind));
}

export default question_5;
