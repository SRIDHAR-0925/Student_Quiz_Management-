package com.example.Student_quiz.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CRUD_oper.Services.DataNotFoundError;
import com.example.CRUD_oper.model.Employee;
import com.example.Student_quiz.jpa.Registerjpa;
import com.example.Student_quiz.model.Registermodal;

@Service
public class Registerserv {
	@Autowired
	Registerjpa jar;
	public Registermodal addregister(Registermodal reg) {
		return this.jar.save(reg);		
	}
	public List<Registermodal> getlogin() {
		return this.jar.findAll();
	}
	public Registermodal login(String email,String password){
		return this.jar.login( email,password);
	}
	public Optional<Registermodal> getfetchlogin(int id) {
		return this.jar.findById(id);
	}
	public Registermodal updaterec(int id, Registermodal emp1) {
		
		Registermodal oldrecord=this.jar.findById(id)
				.orElseThrow(()->new DataNotFound("Employe not found"));
		oldrecord.setCourse(emp1.getCourse());
		return this.jar.save(oldrecord);
	}

	
}
