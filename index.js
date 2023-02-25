// pb-workshop Sailormoon Lite
// SailorCharactors Klasse:
class SailorCharacters {
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
        // return `${this.name} attacked ${geGner.name}.  `;
        if (this.magic < this.skills[poWerIndex].magicCost) {
            return `${this.skills[poWerIndex].poWer} is too expensive. You don't have enough ${this.magicCost}. Try another one.`;
        } else if (this.magic >= this.skills[poWerIndex].magicCost) {
            this.magic -= this.skills[poWerIndex].magicCost;
            geGner.health -= this.skills[poWerIndex].dmgLoad;
            if (this.magic <= 0) {
                geGner.health = 0;
                return `${this.name} used ${this.skills[poWerIndex].poWer} against ${geGner.name}. ${geGner.name} was defeated.`;
            }

            return `${this.name} attacked ${geGner.name} with ${this.skills[poWerIndex].poWer} and used ${this.skills[poWerIndex].magicCost} MP.`;
        }
    }
    getMagic() {
        this.magic += 20;
        return `${this.name} now has ${this.magic} MP `;
    }
}

// Sailor Warrior Instanzen:
// mit bestimmter Menge health and magic starten...
const sailorMoon = new SailorCharacters("Sailor Moon", 350, 210);
const sailorPluto = new SailorCharacters("Sailor Pluto", 195, 105);
const sailorJupiter = new SailorCharacters("Sailor Jupiter", 290, 195);
const sailorMercury = new SailorCharacters("Sailor Mercury.", 300, 180);
const sailorUranus = new SailorCharacters("Sailor Uranus", 282, 190); //
// Sailor Villain Instanz:
const queenBeryl = new SailorCharacters("Queen Beryl", 500, 200);
//--------------------------------------------------
// AttackSkill Klasse:

class AttackSkill {
    constructor(poWer, dmgLoad, magicCost) {
        this.poWer = poWer; // Skillname
        this.dmgLoad = dmgLoad; // Schaden(Menge)
        this.magicCost = magicCost; // Magiekosten(Menge)
    }
}

//Attacke Instanzen:
//Jedes skill macht einen gewissen dmgLoad (Schaden) und nimmt dafür eine gewisse Menge magicBulk(Menge an Magie) von dem angegriffenen Pokemon.

const moonTiaraAction = new AttackSkill("Moon Tiara Action", 120, 30);
const deadScream = new AttackSkill("Dead Scream", 80, 20);
const sparklingWidePressure = new AttackSkill(
    "Sparkling Wide Pressure",
    95,
    25
);
const mercuryAquaRhapsody = new AttackSkill("Mercury Aqua Rhapsody", 75, 13);
const worldShaking = new AttackSkill("World Shaking", 100, 18);

const hairWhip = new AttackSkill("hair whip", 100, 30);
//--------------------------------------------------
//

setTimeout(function () {
    console.log(
        `Once a normal sorceress who fell in love with Prince Endymion  but was heartbroken when she found that he was in love with Princess Serenity.`
    );
}, 1000);

setTimeout(function () {
    console.log(` `);
}, 6000);
setTimeout(function () {
    console.log(
        `Her despair cast her into darkness and her new goal in life was to rule the universe with Endymion at her side.`
    );
}, 6000);

setTimeout(function () {
    console.log(` `);
}, 12000);
setTimeout(function () {
    console.log(
        `She is an extremely powerful magic user with an arsenal of spells and can even use her hair as a whip. With her poisoned heart, she loves to hurt everyone who's happy and tries to convince, weak people of her evil plans and makes them to their slaves.`
    );
}, 12000);

setTimeout(function () {
    console.log(` `);
}, 18000);
setTimeout(function () {
    console.log(
        ` But there are still our undfrightened and brave Sailor Warriors, who will defend humanity with theier lives with all their power and love...`
    );
}, 18000);

setTimeout(function () {
    console.log(` `);
}, 23000);
setTimeout(function () {
    console.log(sailorMoon.learnAttackSkill(moonTiaraAction));
}, 23000);

// //------------------------------------------------
// Sailor Pluto Skill beibringen
setTimeout(function () {
    console.log(` `);
}, 25000);
setTimeout(function () {
    console.log(sailorPluto.learnAttackSkill(deadScream));
}, 25000);

// //------------------------------------------------
// Sailor Jupiter Skill beibringen
setTimeout(function () {
    console.log(` `);
}, 27000);
setTimeout(function () {
    console.log(sailorJupiter.learnAttackSkill(sparklingWidePressure));
}, 27000);

//-----------------------------------------------
// Sailor Mercury Skill beibringen
setTimeout(function () {
    console.log(` `);
}, 29000);
setTimeout(function () {
    console.log(sailorMercury.learnAttackSkill(mercuryAquaRhapsody));
}, 29000);

//------------------------------------------------
// Sailor Uranus Skill beibringen
setTimeout(function () {
    console.log(` `);
}, 31000);
setTimeout(function () {
    console.log(sailorUranus.learnAttackSkill(mercuryAquaRhapsody));
}, 31000);

//------------------------------------------------
// Queen Beryl Skill beibringen
setTimeout(function () {
    console.log(` `);
}, 33000);
setTimeout(function () {
    console.log(queenBeryl.learnAttackSkill(mercuryAquaRhapsody));
}, 33000);
setTimeout(function () {
    console.log(` `);
}, 34000);
setTimeout(function () {
    console.log(sailorMoon.attack(0, queenBeryl)); // Sailor Moon  attacked attacked Queen Beryl.
}, 34000);
setTimeout(function () {
    console.log(` `);
}, 35000);
setTimeout(function () {
    console.log(queenBeryl.showStatus()); //
}, 35000);
setTimeout(function () {
    console.log(` `);
}, 37000);
setTimeout(function () {
    console.log(sailorMoon.showStatus()); //
}, 37000);

setTimeout(function () {
    console.log(` `);
}, 39000);
setTimeout(function () {
    console.log(queenBeryl.attack(0, sailorMoon)); // Queen Beryl attacked attacked Sailor Moon.
}, 39000);

setTimeout(function () {
    console.log(` `);
}, 41000);
setTimeout(function () {
    console.log(sailorMoon.getMagic()); // Sailor Moon gets magic.
}, 41000);
setTimeout(function () {
    console.log(` `);
}, 43000);
setTimeout(function () {
    console.log(sailorMoon.showStatus()); //
}, 43000);

setTimeout(function () {
    console.log(` `);
}, 45000);
setTimeout(function () {
    console.log(sailorPluto.attack(0, queenBeryl));
}, 45000);
setTimeout(function () {
    console.log(` `);
}, 47000);
setTimeout(function () {
    console.log(queenBeryl.showStatus());
}, 47000);
setTimeout(function () {
    console.log(` `);
}, 49000);
setTimeout(function () {
    console.log(sailorPluto.showStatus());
}, 49000);

setTimeout(function () {
    console.log(` `);
}, 51000);
setTimeout(function () {
    console.log(queenBeryl.attack(0, sailorPluto));
}, 51000);
setTimeout(function () {
    console.log(` `);
}, 53000);
setTimeout(function () {
    console.log(sailorPluto.showStatus());
}, 53000);
setTimeout(function () {
    console.log(` `);
}, 55000);
setTimeout(function () {
    console.log(queenBeryl.showStatus());
}, 55000);

setTimeout(function () {
    console.log(` `);
}, 57000);
setTimeout(function () {
    console.log(
        `And so the fight between Love and Hate or Darkness and Light conitinues...`
    );
}, 57000);
