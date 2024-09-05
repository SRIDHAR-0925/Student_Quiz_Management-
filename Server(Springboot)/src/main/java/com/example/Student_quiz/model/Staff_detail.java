package com.example.Student_quiz.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="staff")
public class Staff_detail {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	@Column(name="staff_id")
	int staff_id;
	@Column(name="staff_name")
	String staff_name;
	@Column(name="staff_email")
	String staff_email;
	@Column(name="staff_phoneno")
	int staff_phoneno;
	@Column(name="staff_Course")
	String staff_Course;
	@Column(name="staff_Exp")
	String staff_Exp;
	public int getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
	}
	public String getStaff_name() {
		return staff_name;
	}
	public void setStaff_name(String staff_name) {
		this.staff_name = staff_name;
	}
	public String getStaff_email() {
		return staff_email;
	}
	public void setStaff_email(String staff_email) {
		this.staff_email = staff_email;
	}
	public long getStaff_phoneno() {
		return staff_phoneno;
	}
	public void setStaff_phoneno(int staff_phoneno) {
		this.staff_phoneno = staff_phoneno;
	}
	public String getStaff_Course() {
		return staff_Course;
	}
	public void setStaff_Course(String staff_Course) {
		this.staff_Course = staff_Course;
	}
	public String getStaff_Exp() {
		return staff_Exp;
	}
	public void setStaff_Expl(String staff_Exp) {
		this.staff_Exp = staff_Exp;
	}

}
