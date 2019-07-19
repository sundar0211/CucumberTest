package StepDefinition;

import cucumber.api.java.en.Given;

public class HomePageSteps {

	@Given("the user in add customer page")
	public void x() {
		HomePage home = new HomePage();
		home.getLnk_addCustomer().click();

	}
	
	@Given("The user is in add tariff plan page")
	public void the_user_is_in_add_tariff_plan_page() {
		HomePage home = new HomePage();
		home.getLnk_addTariffPlan().click();
	}
}
