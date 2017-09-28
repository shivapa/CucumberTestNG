@Register
Feature: Registration Functionality Feature

  Scenario Outline: Register Functionality
    Given User is on Home Page
    When User Navigate to Register Page
    And User enters Contact Information as "<firstname>" and "<lastname>" and "<phone>" and "<email>"
    And User enters Mailing Information as "<Address>" and "<City>" and "<State/Province>" and "<Postal Code>" and "<Country>"
    And User enters User Information as "<User Name>" and "<Password>" and "<Confirm Password>"
    Then Message displayed Registered Successfully

    Examples: 
      | firstname | lastname | phone       | email             | Address       | City | State/Province | Postal Code | Country | User Name | Password     | Confirm Password |
      | Shiv      | Pandey   | 1223456789  | shivp@gmail.com   |  Jbp          | Jbp  | MadhyaPradesh  |      412048 |       2 | shiv      | password@123 | password@123     |
      | Shiva     | Pandey   | 9876543212  | shivap@gmail.com  | Kalyani Nagar | Pune | Maharashtra    |      412265 |     146 | shivap    | shiva@123    | shiva@123        |
