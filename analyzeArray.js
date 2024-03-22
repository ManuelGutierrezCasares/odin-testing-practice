export const analyzeArray = (arr) => {
  return {
    average: arr.reduce((acc, curr) => acc + curr, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
};
