
Feature: search for an existing borrower loan

    As a valid Aggregator I want to search for an existing borrower loan

    Scenario: As an Aggregator I want to search for an existing borrower loan 
        Given I visit the aggregator page
        Then I enter username as "paelyt@qa.team"
        And password as "P@ssword01"
        And I click on Log in button
        And I wait for 7000 seconds
        And I can search for a borrower loan with the reference "219D1AF891"