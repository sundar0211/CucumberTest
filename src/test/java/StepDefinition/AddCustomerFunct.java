package StepDefinition;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import junit.framework.Assert;

public class AddCustomerFunct {


	@When("the user enters the customer details")
	public void the_user_fill_in_valid_customer_details(DataTable customerDetails) {
		AddCustomerPage addcust = new AddCustomerPage();

		Map<String, String> customerDetailsMap = customerDetails.asMap(String.class, String.class);
		addcust.getRdo_done().click();
		addcust.getTxt_fname().sendKeys(customerDetailsMap.get("firstName"));
		addcust.getTxt_lname().sendKeys(customerDetailsMap.get("lastName"));
		addcust.getTxt_email().sendKeys(customerDetailsMap.get("emailAdress"));
		addcust.getTxt_adress().sendKeys(customerDetailsMap.get("adress"));
		addcust.getTxt_phnum().sendKeys(customerDetailsMap.get("phoneNum"));

	}

	@When("the user click submit buttom")
	public void the_user_clicks_the_submit_button() {
		AddCustomerPage addcust = new AddCustomerPage();
		addcust.getBtn_submit().click();
	}

	@Then("the user see the customer ID")
	public void the_user_see_the_customer_ID() {
		AddCustomerPage addcust = new AddCustomerPage();
		Assert.assertTrue(addcust.getLbl_custId().isDisplayed());
	} 
	    @When("the user enters the invalid customer details")
	    public void the_user_enters_the_invalid_customer_details(io.cucumber.datatable.DataTable customerDetails) {
	    	AddCustomerPage addcust = new AddCustomerPage();

			Map<String, String> customerDetailsMap = customerDetails.asMap(String.class, String.class);
			addcust.getRdo_done().click();
			addcust.getTxt_fname().sendKeys(customerDetailsMap.get("firstName"));
			addcust.getTxt_lname().sendKeys(customerDetailsMap.get("lastName"));
			addcust.getTxt_email().sendKeys(customerDetailsMap.get("emailAdress"));
			addcust.getTxt_adress().sendKeys(customerDetailsMap.get("adress"));
			
			addcust.getTxt_phnum().sendKeys(customerDetailsMap.get("phoneNum"));
	    
	    }
	    
	    @Then("the user should not see customer ID")   
	    public void the_user_should_not_see_customer_ID() throws InterruptedException  {
	    	AddCustomerPage addcust = new AddCustomerPage();
	    	Thread.sleep(2000);
	    	Alert a = Hooks.driver.switchTo().alert();
	    	a.accept();
			
	    }


	    
	}

