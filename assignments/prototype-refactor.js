/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


  class GameObject{
      constructor(attribute){
          this.createdAt=attribute.createdAt;
          this.name=attribute.name;
          this.dimensions=attribute.dimensions;
      }
      destroy(){
          return `${this.name} was removed from the game`;
      }
  }

  class CharacterStats extends GameObject{
      constructor(charAttributes){
          super(charAttributes);
          this.healthPoints=charAttributes.healthPoints;
      }
    takeDamage(){
        return `${this.name} took damage`;
    }

  }
  
  class Humanoid extends CharacterStats{
      constructor(humanAttributes){
          super(humanAttributes);
          this.team=humanAttributes.team;
          this.weapons=humanAttributes.weapons;
          this.language=humanAttributes.language;
      }
      greet(){
          return `${this.name} offers a greeting in ${this.language}`;
      }
  }
  
  class Villain extends Humanoid{
      constructor(villianAttributes){
          super(villianAttributes);
          this.power=villianAttributes.power;
          this.pet=villianAttributes.pet;
      }
      magic(){
          return `${this.name} cast a spell using ${this.power}`;
      }
  }

    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const demon= new Humanoid({
      createdAt:new Date(),
      dimensions:{
        length:4,
        width: 6,
        height: 8,
      },
      healthPoints:25,
      name: 'Spawn Of Satan',
      team: 'Hell Spawn',
      weapons:['Sword','Staff','Trident',],
      language: 'Hebrew',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(demon.greet());
    console.log(demon.team);
    console.log(demon.name);
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
    