export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Персонаж уже в команде');
    } else {
      this.members.add(char);
    }
  }

  addAll(...chars) {
    for (const char of chars) {
      this.members.add(char);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
