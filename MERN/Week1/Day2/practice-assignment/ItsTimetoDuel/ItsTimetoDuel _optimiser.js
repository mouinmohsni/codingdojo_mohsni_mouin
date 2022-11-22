// class cards unit
class cart{
    constructor(name,cost ) {
        this.name= name;
        this.cost = cost;
    }

}

class Unit extends cart {
    constructor(name,cost, power, resilience ) {
        super(name,cost) ;
        this.power = power;
        this.resilience = resilience;
    }
    showStats(){
        console.log(`name : ${this.name}`);
        console.log(`  stats : - cost : ${this.cost}`);
        console.log(`  stats : - power : ${this.power}`);
        console.log(`  stats : - resilience : ${this.resilience}`);
    }
    attack(target){
        target.resilience = target.resilience - this.power 
    }
}
// class cards effect

class Effect extends cart {
    constructor(name, cost, text, stat ,magnitude) {
        super(name,cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude ;
    }

    res(target){
        if (target instanceof Unit){
            target.resilience += this.magnitude ;
            console.log(`increase ${target.name} resilience by ${this.magnitude} `);
        } else {
            throw new Error( "Target must be a unit!" );
        }
}

    pow(target){
        if (target instanceof Unit){
        target.power += this.magnitude ;
        console.log(`increase ${target.name} power by ${this.magnitude}` )
            } else {
                throw new Error( "Target must be a unit!" );
            }
    }
}




//  instntce Red Belt Ninja  / Black Belt Ninja 





//  instntce effect cards

const PlayCard_1    = new Effect( "Hard Algorithm" , 2 , "increase target's resilience by 3" , "resilience", 3 )

const PlayCard_2    = new Effect( "Unhandled Promise Rejection" , 1 , "reduce target's resilience by 2" , "resilience", -2 )

const PlayCard_3    = new Effect( "Pair Programming" , 1 , "reduce target's resilience by 2" , "resilience", 2 )

const red = new Unit("red", 3,3,4);
PlayCard_1.res(red);
red.showStats();
const black = new Unit("black", 4,5,4);
PlayCard_2.res(red);
red.showStats();
PlayCard_3.pow(red);
red.showStats();
red.attack(black);
black.showStats();

