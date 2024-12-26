package com.QuizAppPackage;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class LaunchBrowser
{
	@SuppressWarnings("deprecation")
    public static void main( String[] args )
    {

		WebDriver driver1 = new ChromeDriver();
			driver1.get("http://quiz-fe-test.hematitecorp.com/");
			System.out.println(driver1.getTitle());
			System.out.println(driver1.getCurrentUrl());
			System.out.println(driver1.getPageSource());
			driver1.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS)
			driver1.close();
		
			WebDriver driver2 = new EdgeDriver();
			driver2.get("http://quiz-fe-test.hematitecorp.com/");
			System.out.println(driver2.getTitle());
			System.out.println(driver2.getCurrentUrl());
			System.out.println(driver2.getPageSource());
			driver2.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS)
			driver2.close();
			
			
			WebDriver driver3 = new EdgeDriver();
			driver3.get("http://quiz-fe-test.hematitecorp.com/");
			System.out.println(driver3.getTitle());
			System.out.println(driver3.getCurrentUrl());
			System.out.println(driver3.getPageSource());
			driver3.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS)
			driver3.close();
        
        
        
       // driver1.navigate().to("http://quiz-fe-test.hematitecorp.com/");
        //driver1.navigate().back();
        //driver1.navigate().forward();
        //driver1.navigate().refresh();
//      driver1.manage().window().maximize();
//       driver1.manage().window().minimize();
//        driver1.manage().window().setSize(new Dimension(1024,768));
         
    }
}
