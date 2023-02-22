// pb-workshop Pokemon Lite

class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }
    learnAttackSkill(skillToLearn) {
        for (let i = 0; i <= skillToLearn.length; i++)
            if (skillToLearn.push(this.skills[i].poWer)) {
                return `${this.name} learned ${skillToLearn.poWer} successfully`;
            }
    } //  Attacken lernen STRING????
    showStatus() {
        return `${this.name}${this.health}, ${this.magic}`;
    } // Status anzeigen (Name, Gesundheit, Magie)
    attack(indexWoMeineAttackeLiegt, anzugreifendePkmn) {
        if (this.name) {
            //if(pokemon doesn't have enough magic to launch the attack skill){
            // call one of the Pokemon's attack and apply it to the other pokemon
        }
    }
    getMagic() {}
}
//  bunch of skills (the skills can be stored in an array or object).

// Pokemon Instanzen:
//Each Pokemon should start with a certain amount of health and magic. For example, here Pikachu starts with 120 health and 80 magic
const pikaChu = new Pokemon("Pikachu", 120, 80);
const bulbaSur = new Pokemon("Bulbasur", 95, 105);
//--------------------------------------------------
class AttackSkill {
    constructor(poWer, dmgLoad, magicBulk) {
        this.poWer = poWer; // skillname
        this.dmgLoad = dmgLoad; // damageamount
        this.magicBulk = magicBulk; // magicCost
    }
}

//Attacke Instanzen:
//Each skill should do a certain amount of damage, and consume a certain amount of magic from the Pokemon that used the skill.
const lightNing = new AttackSkill("lightning", 40, 30);
const poisonSeed = new AttackSkill("poison seed", 20, 20);

// Pikachu Skill beibringen
pikaChu.learnAttackSkill(lightNing); //
console.log(pikaChu);
// For example, here we're creating a lightning attack skill that causes 40 damage, and requires 30 magic:
// let lightning = new AttackSkill("lightning", 40, 30);

// let lightning = new AttackSkill("lightning", 40, 30);
// pikachu.learnAttackSkill(lightning);

//The first argument to `attack` should be the index (or key) of the attack
