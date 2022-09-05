class Warrior{
    constructor(name, level = 1,rank = "Pushover",experience = 100){
        this.name = name;
        this.level = level; //уровень
        this.rank = rank; //ранг
        this.experience = experience; //опыт
    }
    gameStart(){
        console.log(
            `😾 Создан воин: ${this.name}. Уровень-${this.level}. Ранг-${this.rank}. Опыт-${this.experience}  `
        );
    }

    attack(target){
if(target.level < 1 || target.level > 100){
    return "Invalid level" //перезагрузить игру
} else{
    let WarriorExperience = this.experience
    console.log(`${this.name} атакует ${target} и получает ${WarriorExperience} очков опыта`);
    
    // прописать как именно получать опыт
    
}
    }
}

const warrior1 = new Warrior('Железный человек')
const warrior2 = new Warrior('Доктор Стрэндж')
warrior1.gameStart() //создаём воина 1
warrior2.gameStart() //создаём воина 2


const rankWarrior = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]