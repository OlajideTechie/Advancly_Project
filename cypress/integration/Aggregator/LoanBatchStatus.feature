
Feature: View status of uploaded batch loans 

    As an Aggregator I should be able to see status of uploaded loans and search by status i.e All, Success, Pending and Failed

    Scenario: view status of uploaded loans
    
        Given I visit the aggregator page
        Then I enter username as "paelyt@qa.team"
        And password as "P@ssword01"
        And I click on Log in button
        And I wait for 7000 seconds
        And I click to view loan status  
        And I can search by the loan status