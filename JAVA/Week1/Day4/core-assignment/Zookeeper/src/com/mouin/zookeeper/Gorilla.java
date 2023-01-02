package com.mouin.zookeeper;

public class Gorilla extends Mammal {

	public Gorilla() {
		super();
		
	}
	
	public void throwSomething() {
		System.out.println("the gorilla has thrown something, as well as decrease the energy level by 5");
		this.setEnergyLevels(getEnergyLevels()-5);
	}
	
	public void eatBananas () {
		System.out.println("the gorilla's satisfaction and increase its energy by 10");
		this.setEnergyLevels(getEnergyLevels()+ 10);
	}
	
	public void  clim() {
		System.out.println("the gorilla has climbed a tree and decrease its energy by 10");
		this.setEnergyLevels(getEnergyLevels()- 10);
		
	}
	
	public void  doSomeThink() {
		this.throwSomething();
		this.throwSomething();
		this.throwSomething();
		this.eatBananas();
		this.clim();
		this.display();
		
		
	}
	
	

}
