// pb-workshop Pokemon Lite

class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }
    learnAttackSkill(skillToLearn) {
        if (skillToLearn) this.skills.push(skillToLearn);
    }
    showStatus() {
        return `${this.name}${this.health}, ${this.magic}`;
    }
    attack() {
        // picks one of the pokemon attack skills to attack other pokemon (aus this.skills)
        //if(pokemon doesn't have enough magic to launch the attack skill){
        // call one of the Pokemon's attack and apply it to the other pokemon
    }
    getMagic() {}
}
//  bunch of skills (the skills can be stored in an array or object).

// Pokemon Instanzen:
const pikaChu = new Pokemon("Pikachu", 120, 80);

//--------------------------------------------------
class AttackSkill {
    constructor(nOA, aOD, aOMTAR) {
        this.nOA = nOA; // skillname
        this.aOD = aOD; // damageamount
        this.aOMTAR = aOMTAR; // mpCost
    }
}

//Attacke Instanzen:
const lightning = new AttackSkill("lightning", 40, 30);
pikaChu.learnAttackSkill(lightning); // Pikachu Skill beibringen
console.log(pikaChu);
// For example, here we're creating a lightning attack skill that causes 40 damage, and requires 30 magic:
// let lightning = new AttackSkill("lightning", 40, 30);

// let lightning = new AttackSkill("lightning", 40, 30);
// pikachu.learnAttackSkill(lightning);
