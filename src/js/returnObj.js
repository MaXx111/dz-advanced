export default function returnObj(obj) {
  const array = [];
  const { special } = obj;
  for (let i = 0; i < special.length; i++) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[i];
    array.push({
      id, name, icon, description,
    });
  }
  return array;
}
