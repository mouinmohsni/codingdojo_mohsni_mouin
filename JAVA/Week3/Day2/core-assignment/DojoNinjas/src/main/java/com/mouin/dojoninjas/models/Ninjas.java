package com.mouin.dojoninjas.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "Ninjas")
public class Ninjas {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Size(min = 5, max = 200, message="first name should not be empty")
	private String firsName;

	@NotNull
	@Size(min = 5, max = 200 ,message="last name should not be empty")
	private String lastName;

	@NotNull(message="age should not be empty less than 6")
	@Min(6)
	private Integer age;

	// --- M : 1 ----
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "dojo_id")

	private Dojos dojos;

	// This will not allow the createdAt column to be updated after creation
	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;

	// Contractor
	public Ninjas(Long id, String firsName, String lastName, Integer age, Dojos dojos, Date createdAt, Date updatedAt) {

		this.id = id;
		this.firsName = firsName;
		this.lastName = lastName;
		this.age = age;
		this.dojos = dojos;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	
	
	// getter and setter
	public Ninjas() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirsName() {
		return firsName;
	}

	public void setFirsName(String firsName) {
		this.firsName = firsName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Dojos getDojos() {
		return dojos;
	}

	public void setDojos(Dojos dojos) {
		this.dojos = dojos;
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

	
	
}
