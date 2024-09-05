package com.example.Student_quiz.jpa;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.Student_quiz.model.Registermodal;

public interface Registerjpa extends JpaRepository<Registermodal,Integer> {

	@Query("SELECT r FROM Registermodal r WHERE r.email=?1  AND r.password=?2")
	Registermodal login(String email,String password);
}
