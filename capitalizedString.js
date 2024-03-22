export const capitalizedString = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Input is not a string!');
  }
  const clearString = string.trim();
  return clearString.slice(0, 1).toUpperCase() + clearString.slice(1).toLowerCase();
};
