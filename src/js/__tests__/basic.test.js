import Character from '../app';

describe('check func-concstructor Character', () => {
  test('return this object', () => {
    const expected = {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'gleb',
      type: 'Swords',
    };
    const received = new Character('gleb', 'Swords');
    expect(received).toEqual(expected);
  });
  test('return error of name', () => {
    expect(() => {
      Character('f', 'Swords');
    }).toThrow();
  });
  test('return error of type', () => {
    expect(() => {
      Character('gleb', 'Sword');
    }).toThrow();
  });
});
