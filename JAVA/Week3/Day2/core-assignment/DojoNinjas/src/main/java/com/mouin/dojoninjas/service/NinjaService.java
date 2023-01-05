package com.mouin.dojoninjas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.mouin.dojoninjas.models.Ninjas;
import com.mouin.dojoninjas.repository.NinjasRepository;



@Service
public class NinjaService {
	
	@Autowired
	private NinjasRepository NinjaRep ;
	
//  add one 
    public Ninjas addOne(Ninjas b) {
        return NinjaRep.save(b);
    }

 // find all
 	public List<Ninjas> findall() {

 		return NinjaRep.findAll();
 	}
    

}
