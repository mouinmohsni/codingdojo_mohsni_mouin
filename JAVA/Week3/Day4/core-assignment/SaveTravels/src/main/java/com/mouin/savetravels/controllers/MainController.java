package com.mouin.savetravels.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mouin.savetravels.models.Travels;
import com.mouin.savetravels.services.TravelService;

@Controller
public class MainController {

	@Autowired
	private TravelService TravelService;
//	public MainController(TravelService TravelService) {
//		this.TravelService =TravelService ;
//	}

	@RequestMapping("/")
	public String index() {
		return "redirect:/expenses";
	}

	@GetMapping("/expenses")
	public String GetAll(@ModelAttribute("travel") Travels travel ,Model model ) {

		List<Travels> allTravels = TravelService.findall();
		model.addAttribute("allTravels", allTravels);
		return "index.jsp";
	}

	//  go to page add new travel===========================================================
	
	
	
	// process for adding 
	@PostMapping("/addProssess")
    public String create(@Valid @ModelAttribute("travel") Travels travel, BindingResult result,Model model ) {
        if (result.hasErrors()) {
        	List<Travels> allTravels = TravelService.findall();
    		model.addAttribute("allTravels", allTravels);
            return "index.jsp";
        } else {
        	TravelService.newtravel(travel);
            return "redirect:/expenses";
        }
    }


//================== update 


	@GetMapping("/expenses/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Travels travel= TravelService.onebyid(id);
		model.addAttribute("travel", travel);
		
		return "update.jsp";
	}
	
	@RequestMapping(value="/edit/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("travel") Travels travel, BindingResult result) {
        if (result.hasErrors()) {
            return "update.jsp";
        } else {
        	TravelService.newtravel(travel);
            return "redirect:/expenses";
        }
    }
	
	//============== show one 
	
	@GetMapping("/expenses/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Travels travel= TravelService.onebyid(id);
		model.addAttribute("travel", travel);
		
		return "show.jsp";
	}
	
	@GetMapping("/expenses/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
		TravelService.delete(id);
		
		
		return "redirect:/expenses";
	}
}