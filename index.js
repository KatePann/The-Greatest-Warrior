class Warrior {
  constructor(name, level = 1, rank = 'Pushover', experience = 100) {
    this.name = name;
    this.level = level; // уровень
    this.rank = rank; // ранг
    this.experience = experience; // опыт
  }

  gameStart() {
    function levelWarrior() {
      let i = 1;
      while (i < 101) {
        i++; // меняется уровень
      }
    }

    function rankWarrior() {
      const rankName = ['Pushover', 'Novice', 'Fighter', 'Warrior', 'Veteran', 'Sage', 'Elite', 'Conqueror', 'Champion', 'Master', 'Greatest'];
      for (let i = 0; i < rankName.length; i++) {
if (levelWarrior)
      }
    } ляляля

    console.log(
      `😾 Создан воин: ${this.name}. Уровень-${this.level}. Ранг-${this.rank}. Опыт-${this.experience}  `,
    );
  }

  attack(target) {
    if (target.level < 1 || target.level > 100) {
      return 'Invalid level';
    }// перезагрузить игру
    if (this.level === target.level) {
      const WarriorExperience = this.experience;
      this.experience += 10;
      console.log(`${this.name} атакует ${target} и получает ${WarriorExperience} очков опыта`);
    }
    if (this.level === target.level - 1) {
      const WarriorExperience = this.experience;
      this.experience += 5;
      console.log(`${this.name} атакует ${target} и получает ${WarriorExperience} очков опыта`);
    }
    if (this.level >= target.level + 1) {
      const WarriorExperience = this.experience;
      this.experience = (20 * (target.level - this.level));
      console.log(`${this.name} атакует ${target} и получает ${WarriorExperience} очков опыта`);
    }
    // if (this.level <= target.level + 5 || this.rank <= target.rank + 1) {
    //   console.log("You've been defeated");
    // }
  }
}

const warrior1 = new Warrior('Железный человек');
const warrior2 = new Warrior('Доктор Стрэндж');
warrior1.gameStart(); // создаём воина 1
warrior2.gameStart(); // создаём воина 2

warrior1.attack(warrior2); // пробный бой. ничего не работает
