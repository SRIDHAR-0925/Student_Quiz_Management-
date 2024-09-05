package com.example.Student_quiz.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.CRUD_oper.model.Employee;
import com.example.Student_quiz.model.Registermodal;
import com.example.Student_quiz.service.Registerserv;

@RestController
@RequestMapping("/register")
@CrossOrigin(origins="http://localhost:3000/")
public class Register {

	@Autowired
	Registerserv stf;
	@PostMapping("/register1")
	public Registermodal addregister(@RequestBody  Registermodal reg) {
		return this.stf.addregister(reg);
	}
	@GetMapping("/login")
	public List<Registermodal> getlogin(){
		return this.stf.getlogin();
	}
	
	@PostMapping("/logincheck")
	public Registermodal login(@RequestBody  Registermodal reg){
		return this.stf.login(reg.getEmail(),reg.getpassword());
	}
	@GetMapping("/fetchdisplay/{id}")
	public Optional<Registermodal> getfetchlogin(@PathVariable(value="id") int id){
		return this.stf.getfetchlogin(id);
	}
	@PutMapping("/profile/{id}")
	public Registermodal updaterec(@PathVariable(value="id") int id,@RequestBody Registermodal emp1) {
		return this.stf.updaterec(id,emp1);
	}
	
}
