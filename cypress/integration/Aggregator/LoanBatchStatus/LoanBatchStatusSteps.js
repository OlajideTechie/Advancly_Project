import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../Login/LoginPage'
import batchLoan from "./LoanBatchStatusPage";

Given( 'I visit the aggregator page', visit  => {

    //cy.visit('https://advancly-aggregator.test.vggdev.com', {retryOneNetworkFailure:true});
    loginPage.visit()
  
  })
  
  And ('I enter username as {string}', username => {
  
    loginPage.fillUsername(username)
      
    //cy.get(':nth-child(2) > .form-group > .form-control').type("paelyt@qa.team");
    //cy.get(':n//th-child(3) > .form-group > .form-control').type("P@ssword01");
  });
  
  
  And ('password as {string}', password => {
  
    loginPage.fillPassword(password)
  
    //cy.get(':nth-child(2) > .form-group > .form-control').type("paelyt@qa.team");
    //cy.get(':n//th-child(3) > .form-group > .form-control').type("P@ssword01");
  });
  
  And('I click on Log in button', () => {
  
    loginPage.button()
  
  });
  
  And('I wait for 7000 seconds', () => {
  
    loginPage.wait_time()
  
  });
  
And(/^I click to view loan status$/, () => {
	batchLoan.loan_link()
});

And(/^I can search by the loan status$/, () => {
	
});
