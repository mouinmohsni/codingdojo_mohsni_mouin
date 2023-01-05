package com.mouin.dojoninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mouin.dojoninjas.models.Dojos;
import com.mouin.dojoninjas.models.Ninjas;
import com.mouin.dojoninjas.service.DojoServices;
import com.mouin.dojoninjas.service.NinjaService;



@Controller
public class NinjaControllers {
	
	@Autowired
	private DojoServices DojoServices;
	
	@Autowired
	private NinjaService NinjaServices;
	
	@RequestMapping("/newninja")
	public  String alldojos (@ModelAttribute("ninja") Ninjas ninja,Model model) {
		List<Dojos> allDojos = DojoServices.findall();
		model.addAttribute("allDojos", allDojos);
		
		return "NewNinja.jsp";
	}

	
	// process for adding 
			@PostMapping("/addninja")
		    public String createninja(@Valid @ModelAttribute("ninja") Ninjas ninja, BindingResult result,Model model ) {
		        if (result.hasErrors()) {
		        	List<Dojos> allDojos = DojoServices.findall();
		    		model.addAttribute("allDojos", allDojos);
		    		
		            return "NewNinja.jsp";
		        } else {
		        	NinjaServices.addOne(ninja);
		            return "redirect:/dojos";
		        }
		    }
}
