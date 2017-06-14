/**
 * [description]
 * @param  {String} keyToFind 
 * @param  {Array}  source    
 * @return {Boolean}
 */
const question_5 = (keyToFind = '', source = []) => {
  if (!keyToFind.length || !source.length || typeof keyToFind !== 'string') {
    return false;
  }

  let currentObj = null;
  for (let i = 0; i < source.length; i++) {
    currentObj = source[i];
    if (typeof currentObj !== 'object' || !currentObj.hasOwnProperty(keyToFind)) {
      return false;
    }
  }

  return true;
}

export default question_5;
