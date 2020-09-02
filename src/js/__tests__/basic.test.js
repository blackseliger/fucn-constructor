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
  test('return error of type', () => {
    expect(new Character('gleb', 'Sword')).toThrowError(new Error('type has not found'));
  });
  test('return error of name', () => {
    expect(new Character('f', 'Swords')).toThrowError(new Error('name length should be from 2 to 10 symbols'));
  });
});
