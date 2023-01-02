package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser , HIPAACompliantAdmin {
	
    // Inside class:
    private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;

   //================================================================
    //===============Contractor==================================
	public AdminUser(Integer id, String role) {
		super(id);
		
		this.role = role;
		
	}

	

    
    
    
    
    
 //====================================================================================   
	//======================= method from interface 

	@Override
	public ArrayList<String> reportSecurityIncidents() {
		if (this.getSecurityIncidents() != null) {
			return this.getSecurityIncidents();
		}
		return null;
	}

	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		if (pin / 100000 > 1 ) {
			this.setPin(pin);
			return true ; 
		}
		return false;
	
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		if (confirmedAuthID == this.id) {
//			this.authIncident();
			return true ;
		} else {
		return false;
	}
	}
//=========================================================================
//================================ method =================================
	
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER");
        securityIncidents.add(report);
    }
	

//==========================================================================
	//===================setter & getters ==================================


//---------------------------------- employee ID 
	public Integer getEmployeeID() {
		return employeeID;
	}
	
	
	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}
	
	//------------------------------ Role
	public String getRole() {
		return role;
	}
	
	
	public void setRole(String role) {
		this.role = role;
	}
	
	//------------------------------Security Incidents
	public ArrayList<String> getSecurityIncidents() {
		return securityIncidents;
	}

	
	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
		
		this.securityIncidents = securityIncidents;
	}

	
}
