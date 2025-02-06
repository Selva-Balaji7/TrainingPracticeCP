package com.SeleniumWeb.main;

import org.openqa.selenium.By;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

/**
 * Hello world!
 *
 */
public class HomePage 
{
    public static void main( String[] args ) throws InterruptedException
    {
    	   WebDriver driver = new ChromeDriver();
           
           driver.get("https://www.selenium.dev/");
           driver.manage().window().maximize();
           boolean logo=driver.findElement(By.id("Layer_1")).isDisplayed();
           System.out.print("Logo is present:"+logo);
           driver.findElement(By.cssSelector("a.nav-link[href=\"/downloads\"]")).click();
           System.out.println("Navigated to Downloads Page");
           Thread.sleep(2000);
           driver.findElement(By.linkText("Documentation")).click();
           Thread.sleep(2000);
           WebElement searchBox=driver.findElement(By.className("DocSearch"));
           searchBox.click();
           searchBox.sendKeys(Keys.TAB);
           
           WebElement searchBox1=driver.findElement(By.xpath("//input[@class='DocSearch-Input']"));
           Thread.sleep(2000);
           searchBox1.sendKeys("Selenium Overview");
           Thread.sleep(2000);
           searchBox1.sendKeys(Keys.RETURN);
           
           Thread.sleep(2000);
           driver.findElement(By.cssSelector("a.nav-link[href=\"/downloads\"]")).click();
           System.out.println("Navigated to Downloads Pages again");
           
           
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
           driver.quit();
    }
}
