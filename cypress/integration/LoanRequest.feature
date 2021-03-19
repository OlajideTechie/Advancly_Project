
Feature: Successful loan request for an existing borrower

    As a valid Aggregator I want to make a successful loan request for an existing borrower

    Scenario Outline: Make loan request 
        Given I visit the aggregator page
        Then I enter username as "paelyt@qa.team"
        And password as "P@ssword01"
        And I click on Log in button
        And I wait for 7000 seconds
        And I select an existing borrower 
        When I make a loan request "<Amount>"
        Then I should see a suucess message 

        Examples:
            | Amount | 
            |1000|
           