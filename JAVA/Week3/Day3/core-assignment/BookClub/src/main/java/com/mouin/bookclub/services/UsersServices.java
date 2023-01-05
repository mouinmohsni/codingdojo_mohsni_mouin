package com.mouin.bookclub.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.mouin.bookclub.repository.UsersRepository;
import com.mouin.bookclub.models.Login;
import com.mouin.bookclub.models.Users;

@Service
public class UsersServices {
	
	@Autowired
	private UsersRepository UsersRepository;
	
	public Users register(Users newUser, BindingResult result) {
		Optional<Users> potentialUser = UsersRepository.findByEmail(newUser.getEmail());
		if (potentialUser.isPresent()) {
			result.rejectValue("email", "register error", "This email is already taken");
		}
		if (!newUser.getPassword().equals(newUser.getConfpassword())) {
			result.rejectValue("confpassword", "register error", "Passwords must match");
		}
		// Return the errors back
		if (result.hasErrors()) {
			return null;

		} else {
			String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
			newUser.setPassword(hashed);

			// Save the User
			return UsersRepository.save(newUser);

		}
	}

	// ==== Login ====
	public Users login(Login newLoginObject, BindingResult result) {

		// Check if email exists in the DB
		Optional<Users> potentialUser = UsersRepository.findByEmail(newLoginObject.getEmail());
		if (!potentialUser.isPresent()) {
			result.rejectValue("email", "login error", "Email not found in DB");
		} else {
			Users user = potentialUser.get();
			// returns true || false
			if (!BCrypt.checkpw(newLoginObject.getPassword(), user.getPassword())) {
				result.rejectValue("password", "login error", "invalid password");
			}
			if (result.hasErrors()) {
				return null;
			} else {
				// return user object
				return user;
			}
		}

		return null;
	}

	

    public Users findUserById(Long id) {
        Optional<Users> optionalUser = UsersRepository.findById(id);
        
        if(optionalUser.isPresent()) {
        	System.out.println("*****************"+optionalUser);
            return optionalUser.get();
        } else {
            return null;
        }
    }
}
