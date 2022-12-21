import returnObj from '../returnObj.js';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

const array = [{
  id: 8,
  name: 'Двойной выстрел',
  icon: 'http://...',
  description: 'Двойной выстрел наносит двойной урон',
}, {
  id: 9,
  name: 'Нокаутирующий удар',
  icon: 'http://...',
  description: 'Описание недоступно',
}];

test.each([
  ['someting', character, array],
])(
  ('Should return obj'),
  (something, amount, expected) => {
    const result = returnObj(amount);
    expect(result).toEqual(expected);
  },
);
