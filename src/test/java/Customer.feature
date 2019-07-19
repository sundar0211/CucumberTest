Feature: To Generate Customer ID

  Scenario: To check add customer functionality
    Given the user in add customer page
    When the user enters the customer details
    | firstName   | test           |
      | lastName    | one            |
      | emailAdress | test@gmail.com |
      | adress      | chennai        |
      | phoneNum    |        7464849 |
    And the user click submit buttom
    Then the user see the customer ID
    
    Scenario: To check add customer functionality negative way 
    Given the user in add customer page
    When the user enters the invalid customer details
    | firstName   | test           |
      | lastName    | one            |
      | emailAdress | test@gmail.com |
      | adress      | chennai        |
      | phoneNum    |         |
    And the user click submit buttom
    Then the user should not see customer ID
    
    
