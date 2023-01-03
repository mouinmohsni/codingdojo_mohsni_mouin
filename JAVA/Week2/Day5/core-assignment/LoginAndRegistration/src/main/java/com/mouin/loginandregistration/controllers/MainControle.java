package com.mouin.loginandregistration.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.mouin.loginandregistration.models.Login;
import com.mouin.loginandregistration.models.Users;
import com.mouin.loginandregistration.service.UserService;

@Controller
public class MainControle {
	
	@Autowired
	private UserService userServ;
	
	@GetMapping("/")
	public  String index (@ModelAttribute("register") Users newUser,@ModelAttribute("login") Users user)  {
		return "index.jsp";
	}

	// Register === Process register from === POST
		@PostMapping("/register")
		public String register(@Valid @ModelAttribute("register") Users newUser, 
	            BindingResult result, Model model, HttpSession session) {
			
			 // call a register method in the service
	        userServ.register(newUser, result);
			
	        if(result.hasErrors()) {
	            // Be sure to send in the empty LoginUser before 
	            // re-rendering the page.
	            model.addAttribute("login", new Login());
	            return "index.jsp";
	        }
	        
	        // No errors! 
	        // Store their ID from the DB in session, 
	        session.setAttribute("user_id", newUser.getId());
	        session.setAttribute("name", newUser.getName());
	        return "redirect:/success";
	    }
		
		// === Render the success page ===
		@GetMapping("/success")
		public String success(HttpSession s) {
			Long userId = (Long) s.getAttribute("user_id");
			
			if(userId == null) {
				return "redirect:/login";
			}
			
			return "success.jsp";
		}
		
		// Login === Process login from === POST
		@PostMapping("/login")
	    public String login(@Valid @ModelAttribute("login") Login newLogin, 
	            BindingResult result, Model model, HttpSession session) {
	        
	        // Add once service is implemented:
	         Users user = userServ.login(newLogin, result);
	    
	        if(result.hasErrors()) {
	            model.addAttribute("register", new Users());
	            return "index.jsp";
	        }
	    
	        // No errors! 
	        // TO-DO Later: Store their ID from the DB in session, 
	        // in other words, log them in.
	        session.setAttribute("user_id", user.getId());
	       ;
	        session.setAttribute("name", user.getName());
	        return "redirect:/success";
	    }
		
		@GetMapping("/logout")
		public String logout(HttpSession sesh) {
			sesh.invalidate();
			return "redirect:/";
		}
	
	
	
}
