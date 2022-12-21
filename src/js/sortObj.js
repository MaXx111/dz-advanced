export default function sortObj(obj, keys) {
  const array = [];
  for (const i of keys) {
    for (const [key] of Object.entries(obj)) {
      if (key === i) {
        array.push({ key: i, value: obj[i] });
        delete obj[i];
      }
    }
  }

  const arraySort = Object.entries(obj).sort((prev, next) => {
    if (prev < next) {
      return -1;
    }
    return 1;
  });

  for (const [key, value] of arraySort) {
    array.push({ key, value });
  }
  return array;
}
