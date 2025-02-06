package com.Samsung.main;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * Hello world!
 *
 */
public class  LaunchPage
{
    public static void main( String[] args ) throws InterruptedException
    {
    	
      WebDriver driver = new ChromeDriver();
      driver.get("https://www.samsung.com/in/");
      boolean logo= driver.findElement(By.className("icon")).isDisplayed();
      System.out.print("logo present:"+logo);
      driver.findElement(By.xpath("//button[@role='menuitem']")).click();
       driver.findElement(By.cssSelector("button[class=\"nv00-gnb-v3__utility-btn gnb__search-btn-js\"]")).click();
		Thread.sleep(3000);
		driver.findElement(By.cssSelector("input[name=\"search\"]")).sendKeys("Samsung M05");
		System.out.println("Send keys");
		driver.findElement(By.xpath("//button[@class=\"srd19-gnb-search__btn-search\"]")).click();
		System.out.println("Clicked button");
		
		Thread.sleep(3000);
//      driver.findElement(By.cssSelector("button[class=\"nv00-gnb-v3__utility-btn gnb__search-btn-js\"]")).click();	
//      Thread.sleep(3000); //element
//      driver.findElement(By.name("search")).sendKeys("samsung M05");
//      driver.findElement(By.xpath("//svg[@data-di-rand=\"1738744334510\"]")).click();
//      System.out.println("Clicked button");
//      Thread.sleep(3000);
	  driver.close();
	  
	  
	  
	  
	  
	  
	  
	  
      
//	WebDriver driver = new ChromeDriver();
//		
//		driver.get("https://www.samsung.com/in/offer/");
//		
//		driver.findElement(By.cssSelector("button[class=\"nv00-gnb-v3__utility-btn gnb__search-btn-js\"]")).click();
//		
//		Thread.sleep(3000);
//		driver.findElement(By.cssSelector("input[name=\"search\"]")).sendKeys("Samsung M05");
//		System.out.println("Send keys");
//		driver.findElement(By.xpath("//button[@class=\"srd19-gnb-search__btn-search\"]")).click();
//		System.out.println("Clicked button");
//		
//		Thread.sleep(3000);
//		driver.close();
//      
      
      
      
    }
}