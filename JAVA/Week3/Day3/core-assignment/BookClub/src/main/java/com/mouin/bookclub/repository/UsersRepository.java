package com.mouin.bookclub.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.mouin.bookclub.models.Users;

public interface UsersRepository extends CrudRepository<Users, Long> {
	
	
	  // this method retrieves all the books from the database
    List<Users> findAll();


//	List <User> findAll();
	
    Optional<Users> findByEmail(String email);
}
