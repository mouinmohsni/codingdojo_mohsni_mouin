package com.mouin.zookeeper;

public class Bat extends Mammal {
	


	public Bat(int energyLevels) {
		super(energyLevels);
		
	}



	
	
	public void fly() {
		System.out.println("the sound of a bat taking off and decrease its energy by 50");
		this.setEnergyLevels(this.getEnergyLevels()-50);
	}
	
	public void eatHumans() {
		System.out.println("the so- well, never mind, just increase its energy by 25.");
		this.setEnergyLevels(this.getEnergyLevels()-25);
	}
	
	public void attackTown() {
		System.out.println("he sound of a town on fire and decrease its energy by 100.");
		this.setEnergyLevels(this.getEnergyLevels()-100);
	}
	
	public void batAttack() {
		
		this.attackTown();
		this.attackTown();
		this.eatHumans();
		this.eatHumans();
		this.fly();
		System.out.println(this.getEnergyLevels());
	}

	

	
	
}
