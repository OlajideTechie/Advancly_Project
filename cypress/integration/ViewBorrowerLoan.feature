
Feature: View borrower all loans

    As a valid Aggregator I want to view all loans requested by a borrower

    Scenario: As an Aggregator
        Given I visit the aggregator page
        Then I enter username as "paelyt@qa.team"
        And password as "P@ssword01"
        And I click on Log in button
        And I wait for 7000 seconds
        And I can search for a borrower loan with the reference "ABF407D544"
        Then I can view all loans taken by a borrower