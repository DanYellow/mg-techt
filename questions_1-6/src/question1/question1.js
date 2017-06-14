/**
 * Remove a item in a array
 * @param  {String|Number} valueToRemove  Item to remove in the array
 * @param  {Array<String|Number>} source Source of datas
 * @return {Array}       A new array with the unwanted item removed
 */
const question_1 = (valueToRemove, source = []) => {
  if (!valueToRemove || !source.length) { 
    return source; 
  }

  const newArray = [];
  let currentValue = null;
  for (let i = 0; i < source.length; i++) {
    currentValue = source[i];
    if (JSON.stringify(currentValue) === JSON.stringify(valueToRemove)) {
      continue;
    }
    newArray.push(currentValue);
  }

  return newArray;
}

export default question_1;
