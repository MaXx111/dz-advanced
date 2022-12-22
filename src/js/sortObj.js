export default function sortObj(obj, keys) {
  const array = [];
  const arrayWithKey = [];
  const arrayWithoutKeys = [];
  for (const i in obj) {
    if (keys.includes(i)) {
      arrayWithKey.push([i, obj[i]]);
    } else {
      arrayWithoutKeys.push([i, obj[i]]);
    }
  }

  for (const key of keys) {
    for (const [i, value] of arrayWithKey) {
      if (key === i) {
        array.push({ key: i, value });
      }
    }
  }
  arrayWithoutKeys.sort();
  for (const [key, value] of arrayWithoutKeys) {
    array.push({ key, value });
  }
  return array;
}
