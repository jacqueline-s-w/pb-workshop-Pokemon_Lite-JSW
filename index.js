// pb-workshop Pokemon Lite
// Pokemon Klasse:
class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }

    learnAttackSkill(skillToLearn) {
        this.skills.push(skillToLearn);
        return `${this.name} learned ${skillToLearn.poWer} successfully`;
    }

    showStatus() {
        return `${this.name}, HP: ${this.health}, MP: ${this.magic}`;
    } // Status anzeigen (Name, Gesundheit, Magie)
    attack(poWerIndex, geGner) {
        this.magic -= this.skills[poWerIndex].magicBulk;
        geGner.health -= this.skills[poWerIndex].dmgLoad;
        return `${this.name} attacked ${geGner.name}.  `;
        //if(pokemon doesn't have enough magic to launch the attack skill){
        // call one of the Pokemon's attack and apply it to the other pokemon
    }
    getMagic() {
        this.magic += 20;
        return `${this.name} now has ${this.magic} MP `;
    }
}

// Pokemon Instanzen:
// mit bestimmter Menge health and magic starten...
const pikaChu = new Pokemon("Pikachu", 274, 160);
const bulbaSur = new Pokemon("Bulbasur", 195, 105);
const squirTle = new Pokemon("Squirtle", 85, 15);
const cuBone = new Pokemon("Cubone", 300, 180);
const charMander = new Pokemon("Charmander", 282, 190); //

//--------------------------------------------------
// AttackSkill Klasse:

class AttackSkill {
    constructor(poWer, dmgLoad, magicBulk) {
        this.poWer = poWer; // skillname
        this.dmgLoad = dmgLoad; // Schaden(Menge)
        this.magicBulk = magicBulk; // Magiekosten(Menge)
    }
}

//Attacke Instanzen:
//Jedes skill macht einen gewissen dmgLoad (Schaden) und nimmt dafür eine gewisse Menge magicBulk(Menge an Magie) von dem angegriffenen Pokemon.

const lightNing = new AttackSkill("lightning", 40, 30);
const poisonSeed = new AttackSkill("poison seed", 20, 20);
const waterGun = new AttackSkill("Water Gun", 40, 25);
const boneRush = new AttackSkill("Bone Rush", 25, 13);
const fireSpin = new AttackSkill("Fire Spin", 35, 18);

// Pikachu Skill beibringen
console.log(pikaChu.learnAttackSkill(lightNing));
console.log(pikaChu);

//--------------------------------------------------
//The first argument to `attack` should be the index (or key) of the attack

// Pikachu greift Bisasam mit Attacke auf Index 0 (poWerIndex) an.

console.log(pikaChu.attack(0, bulbaSur)); // Pikachu attacked Bulbasur.
console.log(pikaChu.showStatus()); // Pikachu, HP: 120, MP: 50
console.log(pikaChu.getMagic()); // Pikachu now has 70 MP
console.log(pikaChu.showStatus()); // Pikachu, HP: 120, MP: 70
