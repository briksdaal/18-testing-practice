function analyzeArray(arr) {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return {
      average: null,
      min: null,
      max: null,
      length: null,
    };
  }

  const average = arr.reduce((cur, acc) => cur + acc, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const { length } = arr;
  return {
    average,
    min,
    max,
    length,
  };
}

export default analyzeArray;
