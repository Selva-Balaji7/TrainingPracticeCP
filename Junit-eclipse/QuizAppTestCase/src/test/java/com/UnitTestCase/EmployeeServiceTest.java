package com.UnitTestCase;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class EmployeeServiceTest {
private EmployeeService employeeService;
	
	@BeforeEach
	public void setUp() {
		employeeService = new EmployeeService();
	}
	//Test registering a valid employee
	@Test
	void testRegisterValidEmployee() {
		Employee employe=new Employee("John","Doe","john.doe@example.com", "1234567890", "Manager");
		asserTrue(employeeService.registerEmployee(employee), "Employee should be registered successfully");
	}
	
	//Test registering an aemployee with an invalid email format
	@Test
	void testRegisterValidEmployeewithInvalidEmail()
	{
		Employee employe=new Employee("John","Doe","invalid-email", "1234567890", "Developer");
		Exception exception =assertThrows(IllegalArgumentException.class,()->{
			employeeService.registerEmployee(employee);
		});
		assertEquals("Invalid email or phone format", exception.getMessage());
	}
	//Test reistering an employe with an invalid phone format
	@Test
	void testRegisterEmployeeWithInvalidPhone() {
		Employee firstEmployee=new Employee("Alice", "Smith", "alice.smith@example.com", "12345", "Designer");
		Exception exception =assertThrows(IllegalArgumentException.class,()->{
			employeeService.registerEmployee(employee);
		});
		assertEquals("Invalid email or phone format", exception.getMessage());
	}
	//Test registering an employee with a duplicate email
	@Test
	void testRegisterDuplicateEmail() {
		Employee firstEmployee=new Employee("John","Doe","john.duplicate@example.com", "1234567890", "Manager");
		Employee duplicateEmployee =new Employee("Jane","Smith", "john.duplicate@example.com", "0987654321", "Developer");
		employeeService.registerEmployee(firstEmployee);
		Exception exception =assertThrows(IllegalArgumentException.class,()->{
			employeeService.registerEmployee(duplicateemployee);
		
	}

}
