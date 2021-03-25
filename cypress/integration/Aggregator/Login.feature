
Feature: Login to Advancly Aggregator Page

  As a valid Aggregator I can login successfully and search for a borrower loan
  As an invalid Aggregator I should not be able to login at all

  
  Scenario: As an invalid Aggergator I can't login
    Given I visit the aggregator page
    Then I enter username as "paelyt@qa.team"
    And password as "P@ssword0"
    And I click on Log in button
    And I wait for 7000 seconds
    Then I should get an error message

  Scenario: As a valid Aggregator I want to login successfully
    Given  I visit the aggregator page
    When I enter username as "paelyt@qa.team"
    And password as "P@ssword01"
    And I click on Log in button
    And I wait for 7000 seconds
    Then I can login successfully and see my name





