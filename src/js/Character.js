export class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length <= 10 && name.length >= 2) {
      this.name = name;
    } else throw new Error('Name must be more than 2 letters, less than 10 letters');
    const isType = Character.typeList.includes(type);
    if (isType) {
      this.type = type;
    } else throw new Error('Wrong character type');
    this.level = 1;
    this.health = 100;
    this.attack = undefined;
    this.defence = undefined;
  }

  static typeList = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
}
