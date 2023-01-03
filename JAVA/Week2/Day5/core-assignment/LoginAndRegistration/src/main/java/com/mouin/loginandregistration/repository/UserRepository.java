package com.mouin.loginandregistration.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mouin.loginandregistration.models.Users;


@Repository
public interface UserRepository extends CrudRepository<Users, Long> {
	
//	List <User> findAll();
	
    Optional<Users> findByEmail(String email);

}
