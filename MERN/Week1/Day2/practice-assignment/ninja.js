class Ninja {
    constructor(name, health =10, speed =3 ) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = 3;
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
        console.log(` my ninja name is ${this.name} i have  like stats  ${this.health} in health ${this.speed} in speed and ${this.strength} n strength `);


}
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake
