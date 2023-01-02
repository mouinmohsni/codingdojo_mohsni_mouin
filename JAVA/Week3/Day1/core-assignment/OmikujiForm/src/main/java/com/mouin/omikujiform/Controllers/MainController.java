package com.mouin.omikujiform.Controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.mouin.omikujiform.Form;

@Controller
public class MainController {

	Form form1 = new Form();
		
		@RequestMapping("/")
		public  String index () {
			return "redirect:/omikuji";
		}
		@RequestMapping("/omikuji")
		public  String omikuji () {
			
			return "index.jsp";
		}
		
		
		@RequestMapping(value="/goto",  method=RequestMethod.POST)
		public  String omikuji (@RequestParam(value="city") String city,
								@RequestParam(value="number") String number,
								@RequestParam(value="name") String name,
								@RequestParam(value="hobby") String hobby,
								@RequestParam(value="living") String living,
								@RequestParam(value="nice") String nice,
								HttpSession session) {
			
//			this.form1.setCity(city);
//			this.form1.setNumber(number);
//			this.form1.setName(name);
//			this.form1.setHobby(hobby);
//			this.form1.setLiving(living);
//			this.form1.setNice(nice);
			int numb =Integer.parseInt(number);
			session.setAttribute("city", city);
			session.setAttribute("numb", numb);
			session.setAttribute("name", name);
			session.setAttribute("hobby", hobby);
			session.setAttribute("living", living);
			session.setAttribute("nice", nice);
			
			return "redirect:/omikuji/show";
		}
		
		@RequestMapping("/omikuji/show")
		public  String show () {
			return "show.jsp";
		}
		
		
		
		
	
}
