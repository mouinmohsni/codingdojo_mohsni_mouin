package com.mouin.dojoninjas.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mouin.dojoninjas.models.Dojos;
import com.mouin.dojoninjas.repository.DojosRepository;



@Service
public class DojoServices {
	
	@Autowired
	private DojosRepository DojosRep ;
	
	
//  add one 
    public Dojos addOne(Dojos b) {
        return DojosRep.save(b);
    }

 // find all
 	public List<Dojos> findall() {

 		return DojosRep.findAll();
 	}
 	
 	
 	// one by id
 	
 	public Dojos oneById(long id) {
 		Optional<Dojos> dojo =DojosRep.findById(id);
 		if (dojo.isPresent()) {
 			
 			return  dojo.get();
 		} else {
 			return null;
 		}
 	}
    
    
}
