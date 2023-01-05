package com.mouin.dojoninjas.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mouin.dojoninjas.models.Dojos;

public interface DojosRepository extends CrudRepository<Dojos, Long> {
	
	 List<Dojos> findAll();

}
