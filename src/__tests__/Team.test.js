import Team from '../Team';

test('should create Team', () => {
  expect(new Team()).toEqual({
    members: new Set(),
  });
});

test('should throw error', () => {
  const team = new Team();
  team.add('Lou');
  expect(team.add('Lou')).toThrow(new Error('Персонаж уже в команде'));
});

// test('should add', () => {
//   const team = new Team();
//   team.add('Lou');
//   expect(team.members).toEqual(['Lou']);
// });

test('should addAll', () => {
  const team = new Team();
  team.addAll('Lou', 'Jim', 'Sergey', 'Jim');
  expect(team.members).toEqual(Set {"Lou", "Jim", "Sergey"});
});

test('should toArray', () => {
  const team = new Team();
  team.addAll('Lou', 'Jim', 'Sergey', 'Jim');
  expect(team.toArray()).toEqual(['Lou', 'Jim', 'Sergey']);
});
