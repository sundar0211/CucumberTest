$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/AddTariff.feature");
formatter.feature({
  "name": "To test add tariff plan functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To verify the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us6"
    }
  ]
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user fill in valid tariff plan details \"\u003cMonthRent\u003e\", \"\u003cFreeLocal\u003e\",\"\u003cFreeInt\u003e\",\"\u003cFreeSMS\u003e\",\"\u003cLocalCharges\u003e\",\"\u003cInterCharges\u003e\",\"\u003cSMSCharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks submit button in add tariff plan page",
  "keyword": "And "
});
formatter.step({
  "name": "the user should see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRent",
        "FreeLocal",
        "FreeInt",
        "FreeSMS",
        "LocalCharges",
        "InterCharges",
        "SMSCharges"
      ]
    },
    {
      "cells": [
        "500",
        "200",
        "100",
        "300",
        "100",
        "200",
        "300"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in valid tariff plan details \"500\", \"200\",\"100\",\"300\",\"100\",\"200\",\"300\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_valid_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks submit button in add tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffSteps.the_user_clicks_submit_button_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify the error message",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user fill in invalid tariff plan details \"\u003cMonthRent\u003e\", \"\u003cFreeLocal\u003e\",\"\u003cFreeInt\u003e\",\"\u003cFreeSMS\u003e\",\"\u003cLocalCharges\u003e\",\"\u003cInterCharges\u003e\",\"\u003cSMSCharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks submit button in add tariff plan page",
  "keyword": "And "
});
formatter.step({
  "name": "the user should not see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRent",
        "FreeLocal",
        "FreeInt",
        "FreeSMS",
        "LocalCharges",
        "InterCharges",
        "SMSCharges"
      ]
    },
    {
      "cells": [
        "500",
        "200",
        "100",
        "300",
        "",
        "200",
        "300"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the error message",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in invalid tariff plan details \"500\", \"200\",\"100\",\"300\",\"\",\"200\",\"300\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_invalid_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks submit button in add tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffSteps.the_user_clicks_submit_button_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should not see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.the_user_should_not_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/Customer.feature");
formatter.feature({
  "name": "To Generate Customer ID",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To check add customer functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.x()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the customer details",
  "rows": [
    {
      "cells": [
        "firstName",
        "test"
      ]
    },
    {
      "cells": [
        "lastName",
        "one"
      ]
    },
    {
      "cells": [
        "emailAdress",
        "test@gmail.com"
      ]
    },
    {
      "cells": [
        "adress",
        "chennai"
      ]
    },
    {
      "cells": [
        "phoneNum",
        "7464849"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerFunct.the_user_fill_in_valid_customer_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click submit buttom",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerFunct.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user see the customer ID",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerFunct.the_user_see_the_customer_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To check add customer functionality negative way",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.x()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the invalid customer details",
  "rows": [
    {
      "cells": [
        "firstName",
        "test"
      ]
    },
    {
      "cells": [
        "lastName",
        "one"
      ]
    },
    {
      "cells": [
        "emailAdress",
        "test@gmail.com"
      ]
    },
    {
      "cells": [
        "adress",
        "chennai"
      ]
    },
    {
      "cells": [
        "phoneNum",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerFunct.the_user_enters_the_invalid_customer_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click submit buttom",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerFunct.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should not see customer ID",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerFunct.the_user_should_not_see_customer_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});