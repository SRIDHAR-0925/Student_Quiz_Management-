package com.example.Student_quiz.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Student_quiz.model.Staff_detail;


public interface Staffjpa  extends JpaRepository<Staff_detail,Integer>{

}
