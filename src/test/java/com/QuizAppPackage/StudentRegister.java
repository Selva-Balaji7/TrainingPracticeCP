package com.QuizAppPackage;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;

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
            
//            Thread.sleep(10000);
            driver.manage().window().maximize();
            Thread.sleep(500);
            driver.findElement(By.id("basic-menu")).click();
           
            driver.findElement(By.xpath("//li[@tabindex=\"0\" and @role=\"menuitem\"]")).click();
            Thread.sleep(2000);
            driver.findElement(By.name("fname")).sendKeys("Selva");
            Thread.sleep(500);
            driver.findElement(By.name("lname")).sendKeys("Balaji");
            Thread.sleep(500);
            driver.findElement(By.name("email")).sendKeys("tharunbalaji@gmail.com");
            Thread.sleep(500);
            driver.findElement(By.name("contact")).sendKeys("7812805662");
            Thread.sleep(500);
            driver.findElement(By.name("password")).sendKeys("Selva@123");
            Thread.sleep(500);
            driver.findElement(By.name("password2")).sendKeys("Selva@123");
            Thread.sleep(500);
            driver.findElement(By.xpath("//div[@aria-haspopup=\"listbox\"]")).click();
            Thread.sleep(500);
            driver.findElement(By.xpath("//li[@data-value='student']")).click();
            Thread.sleep(500);
            driver.findElement(By.xpath("//input[@value='Branch']")).click();
            Thread.sleep(500);
            
//            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//            WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("input[name='branch']")));
//
//            // Scroll the element into view before clicking
//            ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
//            Thread.sleep(1000);
//            // Now perform the click
//            element.click();
           

            driver.findElement(By.xpath("//input[@value='male']")).click();
            Thread.sleep(500);
            driver.findElement(By.xpath("//button[@type='submit']")).click();
            Thread.sleep(500);

            driver.close();
	        
	

}
}