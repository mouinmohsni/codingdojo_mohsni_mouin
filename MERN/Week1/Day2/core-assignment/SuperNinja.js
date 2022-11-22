class Ninja {
    constructor(name, health =10, speed =3,strength=3 ) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        //this.strength = 3;
        this.strength=strength
    }

    sayName() {
        console.log(this.name);
        console.log(` my ninja name is ${this.constructor.name}`); // what a defferant about 
        console.log(` my ninja name is ${this.name}`); // what a defferant about 
    }

    showStats(){
        console.log(` my ninja name is ${this.name} i have  like stats  ${this.health} in health ${this.speed} in speed and ${this.strength} n strength `);
    }

    drinkSake(){
        console.log(' now i will drink Sake and you will see my power (*^◇^)_旦 (*^◇^)_旦 (*^◇^)_旦');
        this.health += 10;


}
}

class Sensei  extends Ninja {
    constructor(name) {
        super(name, 200, 10,10, );
    this.wisdom =10 ;
    }

    speakWisdom() {

        const message = super.drinkSake();
        //console.log(message);

    }

    showStats(){
        console.log(` my ninja name is ${this.name} Sensei i have  like stats  ${this.health} in health ${this.speed} in speed and ${this.strength} strength `);
    }
}



// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"