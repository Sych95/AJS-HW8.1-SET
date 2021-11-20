import { Character } from '../js/Character';
import { Team } from '../js/Team';

test('Test constructor class Team & Team add', () => {
  const character1 = new Character('Azmodan', 'Daemon');
  // const character2 = new Character('Triss', 'Magician');

  const result = new Team();
  result.add(character1);
  const characterList = new Set();
  characterList.add(character1);
  const expected = {
    members: characterList,
  };

  expect(result).toEqual(expected);
});

test('Test constructor class Team & Team error', () => {
  const character1 = new Character('Azmodan', 'Daemon');

  expect(() => { const result = new Team(); result.add(character1); result.add(character1); }).toThrowError(new Error('Team already has this character'));
});

test('Test addAll (several characters)', () => {
  const character1 = new Character('Azmodan', 'Daemon');
  const character2 = new Character('Triss', 'Magician');
  const result = new Team();
  result.addAll(character1, character2);

  const listOfCharacters = new Set();
  listOfCharacters.add(character1);
  listOfCharacters.add(character2);
  const expected = {
    members: listOfCharacters,
  };

  expect(result).toEqual(expected);
});

test('Test convert Set-collection to Array', () => {
  const character1 = new Character('Azmodan', 'Daemon');
  const character2 = new Character('Triss', 'Magician');
  const resultTeam = new Team();
  resultTeam.addAll(character1, character2);
  const result = resultTeam.toArray();

  const expected = [{
    name: 'Azmodan', type: 'Daemon', level: 1, health: 100, attack: undefined, defence: undefined,
  }, {
    name: 'Triss', type: 'Magician', level: 1, health: 100, attack: undefined, defence: undefined,
  }];

  expect(result).toEqual(expected);
});
