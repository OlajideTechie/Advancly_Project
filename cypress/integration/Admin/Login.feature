
Feature: Login to Advancly Admin Page

  As an admin I can login successfully
  
  Scenario: As an Admin I want to login successfully
    Given  I visit the aggregator page
    And I enter username as "adminlendx@venturegardengroup.com"
    And password as "P@ssword01"
    And I click on Log in button
    Then I can login successfully and see my name





