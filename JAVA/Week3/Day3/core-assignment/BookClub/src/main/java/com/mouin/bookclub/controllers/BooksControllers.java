package com.mouin.bookclub.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mouin.bookclub.models.Books;
import com.mouin.bookclub.models.Users;
import com.mouin.bookclub.services.BooksServices;
import com.mouin.bookclub.services.UsersServices;




@Controller
public class BooksControllers {
	
	@Autowired
	BooksServices booksServ;
	
	@Autowired

	UsersServices usersServices;
	

	
	@GetMapping("/books/new")
	public  String add (@ModelAttribute("book") Books book ,Model model) {
		return "newbook.jsp";
	}
	
	@GetMapping("/books")
	public  String allbooks (Model model) {
		List<Books> allbooks = booksServ.findall();
		model.addAttribute("allbooks", allbooks);
		return "index.jsp";
	}
	
	@PostMapping("/createBook")
	public String create(@Valid @ModelAttribute("book") Books book,
			BindingResult result,
			Model model,
			HttpSession session) {
		
		 if (result.hasErrors()) {
			 
	            return "newbook.jsp";
	        } else {
	        	Long userId = (Long) session.getAttribute("user_id");
	        	
	        	// Find user by ID
	        	Users currentUser = usersServices.findUserById(userId);
	        	System.out.println(currentUser);
	        	
	        	book.setUser(currentUser);
	        	// Create a book in the DB
	        	booksServ.add(book);
	            return "redirect:/books";
	        }
		 
	}
	
	//============== show one 
	
		@GetMapping("/book/{id}")
		public String show(@PathVariable("id") Long id, Model model) {
			Books book= booksServ.findBook(id);
			model.addAttribute("book", book);
			
			return "onebook.jsp";
		}
		

		 @PostMapping("/book/delete/{id}")
			public String deleteBook(@PathVariable("id") Long id) {
			 booksServ.deleteBook(id);
				
				
				return "redirect:/books";
			}
		 
		 
		 //================ update
		 
		 
		//================== update 


			@GetMapping("/edit/{id}")
			public String edit(@PathVariable("id") Long id,@ModelAttribute("book") Books book, Model model) {
				Books boook= booksServ.findBook(id);
				model.addAttribute("book", boook);
				
				return "edit.jsp";
			}
			
			@RequestMapping(value="/edit/{id}", method=RequestMethod.PUT)
		    public String update(@Valid @ModelAttribute("editbook") Books book, BindingResult result ,HttpSession session) {
		        if (result.hasErrors()) {
		            return "update.jsp";
		        } else {Long userId = (Long) session.getAttribute("user_id");
	        	
	        	// Find user by ID
	        	Users currentUser = usersServices.findUserById(userId);
	        	System.out.println(currentUser);
	        	
	        	book.setUser(currentUser);
	        	// Create a book in the DB
	        	booksServ.add(book);
		            return "redirect:/books";
		        }
		    }
}
