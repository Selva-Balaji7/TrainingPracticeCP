package com.QuizAppPackage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;


public class StudentRegister {

	public static void main(String[] args) throws InterruptedException {
		 
			 WebDriver driver =new EdgeDriver();
            driver.get("http://quiz-fe-test.hematitecorp.com");  
//	        driver.navigate().to("http://quiz-fe-test.hematitecorp.com");
//	        driver.get("http://quiz-fe-test.hematitecorp.com/signup");
//	        
//	        driver.findElement(By.id("email")).sendKeys("admin123@gmail.com");
//		    driver.findElement(By.id("password")).sendKeys(Admin1234@dcom);
	        //driver1.navigate().back();
	        //driver1.navigate().forward();
	        //driver1.navigate().refresh();
//	      driver1.manage().window().maximize();
//	       driver1.manage().window().minimize();
//	        driver1.manage().window().setSize(new Dimension(1024,768));
            
            Thread.sleep(10000);
            driver.findElement(By.id("basic-menu")).click();
            driver.findElement(By.xpath("//li[@tabindex=\"0\" and @role=\"menuitem\"]")).click();
            Thread.sleep(2000);
            driver.findElement(By.name("fname")).sendKeys("Selva");
            driver.findElement(By.name("lname")).sendKeys("Balaji");
            driver.findElement(By.name("email")).sendKeys("tharunbalaji@gmail.com");
            driver.findElement(By.name("contact")).sendKeys("7812805662");
            driver.findElement(By.name("password")).sendKeys("selva123");
            driver.findElement(By.name("password2")).sendKeys("selva123");
            driver.findElement(By.xpath("//div[@aria-haspopup=\"listbox\"]")).click();
            driver.findElement(By.xpath("//li[@data-value=\"student\"]")).click();
            driver.findElement(By.xpath("//input[@value=\"Branch\"]")).click();
            driver.findElement(By.xpath("//input[@value=\"male\"]")).click();
            driver.findElement(By.xpath("//button[@type=\"submit\"]")).click();

            driver.close();
	        
	

}
}