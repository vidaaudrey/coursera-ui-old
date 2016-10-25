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


const getAbsoluteBoundingRect = (el) => {
  const doc = document;
  const win = window;
  const body = doc.body;

  // pageXOffset and pageYOffset work everywhere except IE <9.
  let offsetX = win.pageXOffset !== undefined ? win.pageXOffset :
  (doc.documentElement || body.parentNode || body).scrollLeft;

  let offsetY = win.pageYOffset !== undefined ? win.pageYOffset :
  (doc.documentElement || body.parentNode || body).scrollTop;

  const rect = el.getBoundingClientRect();

  if (el !== body) {
    let parent = el.parentNode;

    // The element's rect will be affected by the scroll positions of
    // *all* of its scrollable parents, not just the window, so we have
    // to walk up the tree and collect every scroll offset. Good times.
    while (parent !== body) {
      offsetX += parent.scrollLeft;
      offsetY += parent.scrollTop;
      parent = parent.parentNode;
    }
  }

  return {
    bottom: rect.bottom + offsetY,
    height: rect.height,
    left: rect.left + offsetX,
    right: rect.right + offsetX,
    top: rect.top + offsetY,
    width: rect.width,
  };
};

export {
  helloWorld,
  getInitialsFromFullName,
  getMiddleValueFromArray,
  getAbsoluteBoundingRect,
};
