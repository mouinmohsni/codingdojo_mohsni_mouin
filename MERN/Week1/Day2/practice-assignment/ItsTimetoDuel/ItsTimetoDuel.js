// class cards unit

class UnitCards {
    constructor(name,cost, power, resilience ) {
        this.name= name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience
    }


}
// class cards effect

class EffectCards {
    constructor(name, cost, text, stat ,magnitude) {
        this.name=name ;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude ;
    }


    Algo(target){
        if (target instanceof UnitCards){
            target.resilience += this.magnitude ;
            console.log(`increase ${target.name} resilience by 3 `);
        } else {
            throw new Error( "Target must be a unit!" );
        }
}
    Rejection(target){
        if (target instanceof UnitCards){
            target.resilience += this.magnitude ;
            console.log(`reduce ${target.name} resilience by 2 `);
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

    Pair(target){
        if (target instanceof UnitCards){
        target.power += this.magnitude ;
       console.log(`increase ${target.name} power by 2` )
            } else {
                throw new Error( "Target must be a unit!" );
            }
    }
}

//  inherit from unit  
class RedBeltNinja extends UnitCards {
    constructor(name){
        super(name ,3,3,4)
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
class BlackBeltNinja extends UnitCards {
    constructor(name){
        super(name,4,5,4);
    }

    showStats(){
        console.log(`name : ${this.name}`);
        console.log(`  stats : - cost : ${this.cost}`);
        console.log(`  stats : - power : ${this.power}`);
        console.log(`  stats : - resilience : ${this.resilience}`);
    }
}






//  instntce Red Belt Ninja  / Black Belt Ninja 

const mouin = new RedBeltNinja("mouin");

const nassim = new BlackBeltNinja("nassim", 4,5,4)
//nassim.showStats();
// inherit form effect

const HardAlgorithm	= new EffectCards( "Hard Algorithm" , 2 , "increase target's resilience by 3" , "resilience", 3 )
//HardAlgorithm.showcart()
const UnhandledPromiseRejection	= new EffectCards( "Unhandled Promise Rejection" , 1 , "reduce target's resilience by 2" , "resilience", -2 )
// UnhandledPromiseRejection.showcart()
const PairProgramming	= new EffectCards( "Pair Programming" , 1 , "reduce target's resilience by 2" , "resilience", 2 )
// PairProgramming.showcart()

mouin.showStats();
HardAlgorithm.Algo(mouin);
mouin.showStats();
nassim.showStats();
UnhandledPromiseRejection.Rejection(mouin)
mouin.showStats();
PairProgramming.Pair(mouin)
mouin.showStats();
mouin.attack(nassim)
nassim.showStats();

