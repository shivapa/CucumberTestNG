$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/mercury/bdd/register/Register.feature");
formatter.feature({
  "line": 2,
  "name": "Registration Functionality Feature",
  "description": "",
  "id": "registration-functionality-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Register Functionality",
  "description": "",
  "id": "registration-functionality-feature;register-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to Register Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Contact Information as \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cphone\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Mailing Information as \"\u003cAddress\u003e\" and \"\u003cCity\u003e\" and \"\u003cState/Province\u003e\" and \"\u003cPostal Code\u003e\" and \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters User Information as \"\u003cUser Name\u003e\" and \"\u003cPassword\u003e\" and \"\u003cConfirm Password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Message displayed Registered Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "registration-functionality-feature;register-functionality;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "phone",
        "email",
        "Address",
        "City",
        "State/Province",
        "Postal Code",
        "Country",
        "User Name",
        "Password",
        "Confirm Password"
      ],
      "line": 13,
      "id": "registration-functionality-feature;register-functionality;;1"
    },
    {
      "cells": [
        "Shiv",
        "Pandey",
        "1223456789",
        "shivp@gmail.com",
        "Jbp",
        "Jbp",
        "MadhyaPradesh",
        "412048",
        "2",
        "shiv",
        "password@123",
        "password@123"
      ],
      "line": 14,
      "id": "registration-functionality-feature;register-functionality;;2"
    },
    {
      "cells": [
        "Shiva",
        "Pandey",
        "9876543212",
        "shivap@gmail.com",
        "Kalyani Nagar",
        "Pune",
        "Maharashtra",
        "412265",
        "146",
        "shivap",
        "shiva@123",
        "shiva@123"
      ],
      "line": 15,
      "id": "registration-functionality-feature;register-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Register Functionality",
  "description": "",
  "id": "registration-functionality-feature;register-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to Register Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Contact Information as \"Shiv\" and \"Pandey\" and \"1223456789\" and \"shivp@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Mailing Information as \"Jbp\" and \"Jbp\" and \"MadhyaPradesh\" and \"412048\" and \"2\"",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters User Information as \"shiv\" and \"password@123\" and \"password@123\"",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Message displayed Registered Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestRegister.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 6542915853,
  "status": "passed"
});
formatter.match({
  "location": "TestRegister.User_navigates_Registration_Page()"
});
formatter.result({
  "duration": 1240059379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shiv",
      "offset": 36
    },
    {
      "val": "Pandey",
      "offset": 47
    },
    {
      "val": "1223456789",
      "offset": 60
    },
    {
      "val": "shivp@gmail.com",
      "offset": 77
    }
  ],
  "location": "TestRegister.User_enters_Contact_information(String,String,String,String)"
});
formatter.result({
  "duration": 242273485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jbp",
      "offset": 36
    },
    {
      "val": "Jbp",
      "offset": 46
    },
    {
      "val": "MadhyaPradesh",
      "offset": 56
    },
    {
      "val": "412048",
      "offset": 76
    },
    {
      "val": "2",
      "offset": 89
    }
  ],
  "location": "TestRegister.User_enters_Mailing_information(String,String,String,String,String)"
});
formatter.result({
  "duration": 334837395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shiv",
      "offset": 33
    },
    {
      "val": "password@123",
      "offset": 44
    },
    {
      "val": "password@123",
      "offset": 63
    }
  ],
  "location": "TestRegister.User_enters_User_information(String,String,String)"
});
formatter.result({
  "duration": 2366537783,
  "status": "passed"
});
formatter.match({
  "location": "TestRegister.Message_displayed()"
});
formatter.result({
  "duration": 98591,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Register Functionality",
  "description": "",
  "id": "registration-functionality-feature;register-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to Register Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Contact Information as \"Shiva\" and \"Pandey\" and \"9876543212\" and \"shivap@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Mailing Information as \"Kalyani Nagar\" and \"Pune\" and \"Maharashtra\" and \"412265\" and \"146\"",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters User Information as \"shivap\" and \"shiva@123\" and \"shiva@123\"",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Message displayed Registered Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestRegister.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 6332083058,
  "status": "passed"
});
formatter.match({
  "location": "TestRegister.User_navigates_Registration_Page()"
});
formatter.result({
  "duration": 1561134728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shiva",
      "offset": 36
    },
    {
      "val": "Pandey",
      "offset": 48
    },
    {
      "val": "9876543212",
      "offset": 61
    },
    {
      "val": "shivap@gmail.com",
      "offset": 78
    }
  ],
  "location": "TestRegister.User_enters_Contact_information(String,String,String,String)"
});
formatter.result({
  "duration": 240467429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kalyani Nagar",
      "offset": 36
    },
    {
      "val": "Pune",
      "offset": 56
    },
    {
      "val": "Maharashtra",
      "offset": 67
    },
    {
      "val": "412265",
      "offset": 85
    },
    {
      "val": "146",
      "offset": 98
    }
  ],
  "location": "TestRegister.User_enters_Mailing_information(String,String,String,String,String)"
});
formatter.result({
  "duration": 346308516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivap",
      "offset": 33
    },
    {
      "val": "shiva@123",
      "offset": 46
    },
    {
      "val": "shiva@123",
      "offset": 62
    }
  ],
  "location": "TestRegister.User_enters_User_information(String,String,String)"
});
formatter.result({
  "duration": 2935216460,
  "status": "passed"
});
formatter.match({
  "location": "TestRegister.Message_displayed()"
});
formatter.result({
  "duration": 74954,
  "status": "passed"
});
});