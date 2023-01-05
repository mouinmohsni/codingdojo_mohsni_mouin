package com.mouin.bookclub.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="books")
public class Books {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min = 5, max = 200 , message="Title must be between 3 and 200 characters"  )
	private String title ;
	
	@NotNull
	@Size(min = 5, max = 200, message="Author Name must be between 3 and 200 characters")
	private String autorName ;
	// --- M : 1 ----
		@ManyToOne(fetch = FetchType.LAZY)
		@JoinColumn(name="User_id")
		
		private Users user;
		
		@NotNull
		@Size(min = 5, max = 200, message="thougth must be between 3 and 200 characters")
		private String thougth ;
	
		// This will not allow the createdAt column to be updated after creation
		@Column(updatable = false)
		@DateTimeFormat(pattern = "yyyy-MM-dd")
		private Date createdAt;
		@DateTimeFormat(pattern = "yyyy-MM-dd")
		private Date updatedAt;
		
		
		
		// Constructor
		public Books(String title, String autorName, Users user) {
			
			
			this.title = title;
			this.autorName = autorName;
			this.user = user;
		}

		public Books() {
			
		}
		
		// other getters and setters removed for brevity
	    @PrePersist
	    protected void onCreate(){
	        this.createdAt = new Date();
	    }
	    @PreUpdate
	    protected void onUpdate(){
	        this.updatedAt = new Date();
	    }

	    
	    
	    
	    
	    
	    // getter and setter
		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getAutorName() {
			return autorName;
		}

		public void setAutorName(String autorName) {
			this.autorName = autorName;
		}

		public Users getUser() {
			return user;
		}

		public void setUser(Users user) {
			this.user = user;
		}

		public Date getCreatedAt() {
			return createdAt;
		}

		public void setCreatedAt(Date createdAt) {
			this.createdAt = createdAt;
		}

		public Date getUpdatedAt() {
			return updatedAt;
		}

		public void setUpdatedAt(Date updatedAt) {
			this.updatedAt = updatedAt;
		}

		public String getThougth() {
			return thougth;
		}

		public void setThougth(String thougth) {
			this.thougth = thougth;
		}
	    
	    
	    

		
		
		
		
}
