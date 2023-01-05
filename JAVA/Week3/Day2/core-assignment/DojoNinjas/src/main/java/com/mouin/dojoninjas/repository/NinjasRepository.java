package com.mouin.dojoninjas.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mouin.dojoninjas.models.Ninjas;

public interface NinjasRepository extends CrudRepository<Ninjas, Long> {
	
	List<Ninjas> findAll();

}
