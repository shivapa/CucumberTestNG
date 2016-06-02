package com.bdd.util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Base {

	public static WebDriver driver;

	public void setup() {
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
	}

	public void quit() {
		driver.quit();
	}

}
