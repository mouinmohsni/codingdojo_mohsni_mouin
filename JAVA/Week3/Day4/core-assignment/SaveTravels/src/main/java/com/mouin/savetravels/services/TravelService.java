package com.mouin.savetravels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mouin.savetravels.models.Travels;
import com.mouin.savetravels.repository.TraverlRepository;

@Service
public class TravelService {

	private TraverlRepository TraverlRepository;

	public TravelService(TraverlRepository TraverlRepository) {

		this.TraverlRepository = TraverlRepository;

	}

	// find all
	public List<Travels> findall() {

		return TraverlRepository.findAll();
	}

	
	// add 
	public Travels newtravel(Travels t) {

		return TraverlRepository.save(t);
	}
	
	 //fine one by id 
	
	public Travels onebyid(Long id) {
		
		Optional<Travels> onetravel =TraverlRepository.findById(id);
		
		 if(onetravel.isPresent()) {
	            return onetravel.get();
	        } else {
	            return null;
	        }

	}
	
	// delete 	
	 
    public void delete(Long id) {
    	TraverlRepository.deleteById(id);
    }
	

}
