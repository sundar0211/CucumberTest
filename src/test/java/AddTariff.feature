Feature: To test add tariff plan functionality

  @us6
  Scenario Outline: To verify the success message
    Given The user is in add tariff plan page
    When the user fill in valid tariff plan details "<MonthRent>", "<FreeLocal>","<FreeInt>","<FreeSMS>","<LocalCharges>","<InterCharges>","<SMSCharges>"
    And the user clicks submit button in add tariff plan page
    Then the user should see the success message

    Examples: 
      | MonthRent | FreeLocal | FreeInt | FreeSMS | LocalCharges | InterCharges | SMSCharges |
      |       500 |       200 |     100 |     300 |          100 |          200 |        300 |
     
      
      Scenario Outline: To verify the error message
    Given The user is in add tariff plan page
    When the user fill in invalid tariff plan details "<MonthRent>", "<FreeLocal>","<FreeInt>","<FreeSMS>","<LocalCharges>","<InterCharges>","<SMSCharges>"
    And the user clicks submit button in add tariff plan page
    Then the user should not see the success message

    Examples: 
      | MonthRent | FreeLocal | FreeInt | FreeSMS | LocalCharges | InterCharges | SMSCharges |
      |       500 |       200 |     100 |     300 |           |          200 |        300 |