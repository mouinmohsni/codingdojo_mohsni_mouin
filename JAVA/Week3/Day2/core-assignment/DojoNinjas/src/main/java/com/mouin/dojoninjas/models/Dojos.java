package com.mouin.dojoninjas.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="dojos")
public class Dojos {
	
	// Member 
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
	
	@NotNull
	@Size(min = 5, max = 200)
	private String name ;
	
	@OneToMany(mappedBy = "dojos", fetch = FetchType.LAZY)
	private List<Ninjas> ninjas;
	
	// This will not allow the createdAt column to be updated after creation
		@Column(updatable = false)
		@DateTimeFormat(pattern = "yyyy-MM-dd")
		private Date createdAt;
		@DateTimeFormat(pattern = "yyyy-MM-dd")
		private Date updatedAt;
		
		
		// Constructor
		public Dojos() {
			
		}


		public Dojos(Long id, String name, Date createdAt, Date updatedAt) {
		
			this.name = name;
			
		}


		// Getter and Setter
		public Long getId() {
			return id;
		}


		public void setId(Long id) {
			this.id = id;
		}


		public String getName() {
			return name;
		}


		public void setName(String name) {
			this.name = name;
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
		
	


		public List<Ninjas> getNinjas() {
			return ninjas;
		}


		public void setNinjas(List<Ninjas> ninjas) {
			this.ninjas = ninjas;
		}

		
		
		
		

		
	
	
	
}
