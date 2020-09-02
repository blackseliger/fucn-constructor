
function Character(name, type) {
  this.name = name;
  this.type = type;
  const profiles = [
    { class: 'Bowman', attack: 25, defence: 25 },
    { class: 'Swords', attack: 40, defence: 10 },
    { class: 'Magici', attack: 1, defence: 40 },
    { class: 'Undead', attack: 25, defence: 25 },
    { class: 'Zombie', attack: 40, defence: 10 },
    { class: 'Daemon', attack: 10, defence: 40 },
  ];

  const actualType = profiles.find((element) => (element.class === type));
  if (this.name.length > 2 && this.name.length < 10) {
    if (actualType === undefined) throw new Error('type has not found');
    const { attack, defence } = actualType;
    this.health = 100;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  } else {
    throw new Error('name length should be from 2 to 10 symbols');
  }
}


export default Character;
