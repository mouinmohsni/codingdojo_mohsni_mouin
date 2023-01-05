package com.mouin.dojoninjas.controllers;



import java.util.List;

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

import com.mouin.dojoninjas.models.Dojos;
import com.mouin.dojoninjas.service.DojoServices;






@Controller
public class DojosControllers {
	
	
	
	@Autowired
	private DojoServices DojoServices;
	
	
	
	
	@RequestMapping("/")
	public String index() {
		return "redirect:/dojos";
	}
	
	
	
	@RequestMapping("/dojos")
	public  String alldojos (Model model) {
		List<Dojos> allDojos = DojoServices.findall();
		model.addAttribute("allDojos", allDojos);
		
		return "index.jsp";
	}
	
	// go to page add new  Dojo
	
	@RequestMapping("/newdojo")
	public  String add (@ModelAttribute("dojo") Dojos dojo ,Model model) {
		return "addDojo.jsp";
	}
	
	// process for adding 
		@PostMapping("/addProssess")
	    public String create(@Valid @ModelAttribute("dojo") Dojos dojo, BindingResult result,Model model ) {
	        if (result.hasErrors()) {
	            return "addDojo.jsp";
	        } else {
	        	DojoServices.addOne(dojo);
	            return "redirect:/";
	        }
	    }
		
		// one dojos
		@GetMapping("/dojo/{id}")
		public String show(@PathVariable("id") Long id, Model model) {
			Dojos dojo= DojoServices.oneById(id);
			model.addAttribute("dojo", dojo);
			
			return "OneDojo.jsp";
		}
		
		}

	
	



