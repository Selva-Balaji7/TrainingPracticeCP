package com.SeleniumWebTest.java;

import org.openqa.selenium.By;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;
import org.testng.ITestContext;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Listeners;

import junit.framework.TestCase;
import junit.framework.TestSuite;


@Listeners(com.SeleniumWebTest.java.MyListeners.class)
public class SeleniumWebTest {
	WebDriver driver = new ChromeDriver();
	
	@BeforeSuite
	public void LaunchBrowser(ITestContext context) {
		System.out.println("Before test");
		driver.get("https://www.selenium.dev/");
		driver.manage().window().maximize();
		context.setAttribute("WebDriver",driver);
		
	}
	
	@Test(priority=1)
	public void CheckLogo() {
		System.out.print("Test1");
		boolean logo=driver.findElement(By.id("Layer_1")).isDisplayed();
        System.out.print("Logo is present:"+logo);
		
	}
	
	@Test(priority=2)
	public void NavigatePage() throws InterruptedException {
		System.out.print("Test2");
		driver.findElement(By.cssSelector("a.nav-link[href=\"/downloads\"]")).click();
        System.out.println("Navigated to Downloads Page");
        Thread.sleep(2000);
        driver.findElement(By.linkText("Documentation")).click();
        Thread.sleep(2000);	
		
	}
	@Test(priority=3)
	public void DoSearch() throws InterruptedException {
		System.out.print("Test3");
		WebElement searchBox=driver.findElement(By.className("DocSearch"));
        searchBox.click();
        searchBox.sendKeys(Keys.TAB);
        
        WebElement searchBox1=driver.findElement(By.xpath("//input[@class='DocSearch-Input']"));
        Thread.sleep(2000);
        searchBox1.sendKeys("Selenium Overview");
        Thread.sleep(2000);
        searchBox1.sendKeys(Keys.RETURN);
	}
	@Test(priority=4)
	public void BrowserButton() throws InterruptedException {
		 System.out.print("Test4");
		 WebElement browsersButton = driver.findElement(By.xpath("//button[@data-bs-target=\"#supported-browsers\"]")); 
		 JavascriptExecutor js1 = (JavascriptExecutor) driver;
         js1.executeScript("arguments[0].scrollIntoView(true);",browsersButton);
         if(browsersButton.isDisplayed()) {
      	   System.out.println("Browsers Button is displayed");
      	   Thread.sleep(500);
      	   browsersButton.click();
         }
         else {
      	   System.out.println("Browsers Button is not displayed");
         }
		
	}
	@AfterSuite
	public void Teardown(ITestContext context) {
		System.out.print("After Test");
		WebDriver driver=(WebDriver) context.getAttribute("WebDriver");
		if(driver!=null)
			{
			driver.quit();
			}
		
		
	}
	
	
	
	
   
}
