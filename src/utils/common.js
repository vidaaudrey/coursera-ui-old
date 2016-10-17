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

export {
  helloWorld,
  getInitialsFromFullName,
};
