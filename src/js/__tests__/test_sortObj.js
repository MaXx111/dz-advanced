import sortObj from '../sortObj.js';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const array = [
  { key: 'name', value: 'мечник' },
  { key: 'defence', value: 40 },
  { key: 'attack', value: 80 },
  { key: 'health', value: 10 },
  { key: 'level', value: 2 },
];

test.each([
  ['someting', obj, array],
])(
  ('Should return sort obj'),
  (something, amount, expected) => {
    const result = sortObj(amount, ['name', 'defence']);
    expect(result).toEqual(expected);
  },
);
