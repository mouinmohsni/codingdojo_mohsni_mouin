package com.mouin.zookeeper;

public class Mammal {
	
	// member variables 
	private int  energyLevels ;
	
	
	
//	 constuctor
	public Mammal() {
		this.energyLevels = 100;
		
	}
	

	public Mammal(int energyLevels) {
		this.energyLevels = energyLevels;
	}
	
	
	



	
	
	
public Mammal display() {
	
	System.out.println(getEnergyLevels());
	
	return this;
}









	// getter and setter
	public int getEnergyLevels() {
		return energyLevels;
	}

	public void setEnergyLevels(int energyLevels) {
		this.energyLevels = energyLevels;
	}








	
	
	

	
	
	
	
	

	
}
