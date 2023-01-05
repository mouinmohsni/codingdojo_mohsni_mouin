package com.mouin.bookclub.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mouin.bookclub.models.Books;


public interface BooksRepository extends CrudRepository<Books, Long> {
	
	  // this method retrieves all the books from the database
    List<Books> findAll();

}
