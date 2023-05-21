package stepDefinitions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WomenStepDefinition {
	
WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_already_on_Login_page() {
		System.setProperty("webdriver.gecko.driver", "C:\\QA\\SeleniumJars\\geckodriver.exe");
        driver= new FirefoxDriver();
        driver.get("https://www.adidas.ca/en/account-login");
        
	}
	
	@When("^title of login page is adidas Online Shop | adidas CA$")
	public void title_of_login_page_is_Adidas_Login() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("adidas Online Shop | adidas CA", title);
	}
	
	@Then("^user enters email and password$")
	public void user_enters_email_Password(DataTable credentials) {
		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("login-email")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("login-password")).sendKeys(data.get(0).get(1));
	}
	
	@Then("^user clicks on email login button$")
	public void user_clicks_on_email_login_button() throws Throwable {
	    driver.findElement(By.xpath("//span[contains(text(),'Email Log in')]")).click();
	}
	
	@Then("^user moves to the Women page and select Whiteshoes option$")
	public void user_moves_to_the_Women_page_and_select_Whiteshoes_option() throws Throwable {
	    Actions action = new Actions(driver);
	    action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'WOMEN')]"))).build().perform();
	    driver.findElement(By.xpath("//div[contains(text(),'White Shoes')]")).click();
	}
	
	@Then("^user quit$")
	public void user_quit() throws Throwable {
	    driver.quit();
	}
	

}
