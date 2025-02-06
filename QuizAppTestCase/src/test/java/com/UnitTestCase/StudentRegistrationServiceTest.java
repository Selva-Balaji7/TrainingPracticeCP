package com.UnitTestCase;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class StudentRegistrationServiceTest {

	private StudentRegistrationService registrationService;
	
	@BeforeEach
	public void setUp() {
		registrationService = new StudentRegistrationService();
	}
	
	@Test
	public void testValidName() {
		assertTrue(registrationService.isValidName("John Doe"), "Name should be valid");
		assertTrue(registrationService.isValidName("Alice"), "Name should be valid");
	}
	
	@Test
	public void testInvalidName() {
		assertFalse(registrationService.isValidName(""), "Empty name should be invalid");
		assertFalse(registrationService.isValidName("J"), "Name shorter than 2 characters should be invalid");
		assertFalse(registrationService.isValidName("1234"), "Name with numbers should be invalid");
		assertFalse(registrationService.isValidName(null), "null name should be invalid");
	}
	
	@Test
	public void testValidEmail() {
		assertTrue(registrationService.isValidEmail("test@example.com"), "Email should be valid");
		assertTrue(registrationService.isValidEmail("user.name@domain.co"), "Name should be valid");
	}
	
	@Test
	public void testInvalidEmail() {
		assertFalse(registrationService.isValidEmail(""), "Empty email should be invalid");
		assertFalse(registrationService.isValidEmail("J"), "Email shorter than 2 characters should be invalid");
		assertFalse(registrationService.isValidEmail("1234"), "Email with numbers should be invalid");
		assertFalse(registrationService.isValidEmail(null), "null email should be invalid");
		assertFalse(registrationService.isValidEmail("aw@"), "Email without domain should be invalid");
	}
	

}
