package com.example.Student_quiz.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.GetExchange;

import com.example.Student_quiz.model.Staff_detail;
import com.example.Student_quiz.service.Staffservice;

@RestController
@RequestMapping("/Staff")

@CrossOrigin(origins="http://localhost:3000")

public class Staffcontroller {
	@Autowired
	Staffservice stf;
	@PostMapping("/Addstaff")
	public Staff_detail addstaffdetails(@RequestBody Staff_detail st) {
		return this.stf.addStaffdetail(st);
	}
	
	@GetMapping("/fetchstaff")
	public List<Staff_detail>getAllStaff(){
		return this.stf.getAllStaff();
	}
	@GetMapping("/fetchdisplay/{id}")
	public Optional<Staff_detail>getAllStaffdisp(@PathVariable(value="id") int id){
		return this.stf.getAllStaffdisp(id);
	}
	
}
	