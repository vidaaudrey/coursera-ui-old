const helloWorld = () => {
  return 'hello world!';
};

const getInitialsFromFullName = (fullName) => {
  if (typeof fullName === 'string') {
    const initials = fullName.trim().split(' ').map(item => item.charAt(0)).join('');
    if (initials.length > 2) {
      // Take the first and last char if the initials are more than 2 chars
      return (initials[0] + initials[initials.length - 1]).toUpperCase();
    }
    return initials.toUpperCase();
  }
  return undefined;
};

/**
 * Get the middle value of an array, if sortFn is specified, use sortFn
 * With even number of elements, return the lower index
 * @param  {array} array
 * @param  {function}  sortFn
 * @return {any}
 */
const getMiddleValueFromArray = (array, sortFn = (a, b) => a > b) => {
  if (Array.isArray(array)) {
    if (array.length === 1) return array[0];
    return array.sort(sortFn)[Math.ceil(array.length / 2) - 1];
  }
  return undefined;
};
export {
  helloWorld,
  getInitialsFromFullName,
  getMiddleValueFromArray,
};
