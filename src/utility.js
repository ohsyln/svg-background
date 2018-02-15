export function getRand() {
  const min = arguments[0];
  if (arguments.length === 1) {
    return Math.floor(Math.random() * min);
  }
  else {
    const max = arguments[1];
    const diff = max - min;
    return Math.floor(Math.random() * diff) + min;
  }
}

export function csvToArr(str) {
  return str.split(',');
}
