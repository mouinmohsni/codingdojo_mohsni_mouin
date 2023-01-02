package com.mouin.omikujiform;

import org.springframework.web.bind.annotation.RequestParam;

public class Form {

	// Member variable
	private String city;
	private int number ; 
	private String name ;
	private String hobby ; 
	private String living ;
	private String nice ;
	
	// Constructor 
	public Form() {
		
	}
	// Constructor 
	public Form(String city, int number, String name, String hobby, String living, String nice) {
		super();
		this.city = city;
		this.number = number;
		this.name = name;
		this.hobby = hobby;
		this.living = living;
		this.nice = nice;
	}

	
	// getter and setter 
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getHobby() {
		return hobby;
	}

	public void setHobby(String hobby) {
		this.hobby = hobby;
	}

	public String getLiving() {
		return living;
	}

	public void setLiving(String living) {
		this.living = living;
	}

	public String getNice() {
		return nice;
	}

	public void setNice(String nice) {
		this.nice = nice;
	}


	
	
	

}
