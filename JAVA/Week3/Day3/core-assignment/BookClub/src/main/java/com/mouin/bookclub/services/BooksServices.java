package com.mouin.bookclub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mouin.bookclub.models.Books;
import com.mouin.bookclub.repository.BooksRepository;


@Service
public class BooksServices {
	
	@Autowired
	BooksRepository booksRepository ;
	
	//### find all

	// find all
		public List<Books> findall() {

			return booksRepository.findAll();
		}



	 // #### add and edit

	    public Books add(Books b) {
	        return booksRepository.save(b);
	    }


	 // ####Get one by id

	    public Books findBook(Long id) {
	        Optional<Books> optionalBook = booksRepository.findById(id);
	        
	        if(optionalBook.isPresent()) {
	            return optionalBook.get();
	        } else {
	            return null;
	        }
	    }

	// ##  delete

	    public void deleteBook(Long id) {
	    	booksRepository.deleteById(id);
	    }

	

}
