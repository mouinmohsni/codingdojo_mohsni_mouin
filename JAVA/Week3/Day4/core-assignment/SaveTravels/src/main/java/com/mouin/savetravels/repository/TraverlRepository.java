package com.mouin.savetravels.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mouin.savetravels.models.Travels;

@Repository
public interface TraverlRepository extends CrudRepository<Travels, Long> {
	
	// this method retrieves all the books from the database
    List<Travels> findAll();

}
