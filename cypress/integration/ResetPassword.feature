Feature: Password Reset for valid and invalid users

    As a valid Aggregator I can do a forgot password

    Scenario: As a registered Aggregator
        Given  I visit the forgot password page
        When  I enter my email as "paelyt@qa.team"
        And I click on the submit button
        Then An otp is sent to my mail
    
    @focus
    Scenario: As an unregistered Aggregator
        Given  I visit the forgot password page
        When I enter my email as "BTara@qa.team"
        And I click on the submit button
        Then I should see an error message
