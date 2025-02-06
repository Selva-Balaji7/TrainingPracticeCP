package com.SeleniumWebTest.java;

import java.io.File; 

import java.io.IOException; 
import java.util.Calendar;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver; 
import org.testng.ISuite; 
import org.testng.ISuiteListener; 
import org.testng.ITestListener; 
import org.testng.ITestResult; 
import org.testng.annotations.Listeners;

import com.relevantcodes.extentreports.ExtentReports; 
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

//@Listeners(com.SeleniumWebTest.java.ExtentReportTest.class)
public class ExtentReportTest extends SeleniumWebTest implements ITestListener, ISuiteListener {


	public static ExtentReports report;
	public static ExtentTest logger;
	public void onStart(ISuite suite) {
		//Create an html report for the suite that is executed
		report = new ExtentReports(System.getProperty("user.dir") + "/reports/ExtentReport3.html");
	}


	public void onFinish(ISuite suite) {
		report.flush();
	}


	public void onTestStart(ITestResult result) {
		logger = report.startTest(result.getMethod().getMethodName());
		logger.log(LogStatus.INFO, "Executing test: " + result.getMethod().getMethodName());

	}


	public void onTestSuccess(ITestResult result) {
		logger.log(LogStatus.INFO, "Finished executing test");
	}


	public void onTestFailure(ITestResult result) {
	    WebDriver driver = (WebDriver) result.getTestContext().getAttribute("WebDriver");
	    if (driver != null) {
	        String screenshotPath = System.getProperty("user.dir") + "/screenshots/";
	        File screenshotDir = new File(screenshotPath);
	        if (!screenshotDir.exists()) {
	            screenshotDir.mkdirs(); // Create the directory if it doesn't exist
	        }

	        String fileName = String.format("Screenshot-%s.png", Calendar.getInstance().getTimeInMillis());
	        File srcFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	        File destFile = new File(screenshotDir, fileName);
	        try {
	            FileUtils.copyFile(srcFile, destFile);
	            logger.log(LogStatus.FAIL, "Test failed, screenshot saved: " + destFile.getAbsolutePath());
	        } catch (IOException e) {
	            logger.log(LogStatus.ERROR, "Failed to save screenshot: " + e.getMessage());
	        }
	    } else {
	        logger.log(LogStatus.FAIL, "Driver is null, screenshot not taken");
	    }
	}


	public void onTestSkipped(ITestResult result) {
		logger.log(LogStatus.SKIP, "Test skipped");
		
	}
}
