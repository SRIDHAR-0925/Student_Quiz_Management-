package com.example.Student_quiz.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Student_quiz.jpa.Staffjpa;
import com.example.Student_quiz.model.Staff_detail;

@Service
public class Staffservice {
	@Autowired
	Staffjpa jar;
	public Staff_detail addStaffdetail(Staff_detail stf) { 
		return this.jar.save(stf);
	}
		
		public List<Staff_detail> getAllStaff() {
			return this.jar.findAll();
		}

		public Optional<Staff_detail> getAllStaffdisp(Integer id) {
			return this.jar.findById(id);
		}
}
