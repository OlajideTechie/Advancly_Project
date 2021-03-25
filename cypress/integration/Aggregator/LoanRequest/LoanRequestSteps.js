import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../Login/LoginPage'
import RequestLoan from '../LoanRequest/LoanRequestPage'


Given( 'I visit the aggregator page', visit  => {

    loginPage.visit()
  
  })
  
  And ('I enter username as {string}', username => {
  
    loginPage.fillUsername(username)
      
  });
  
  
  And ('password as {string}', password => {
  
    loginPage.fillPassword(password)
  
  });
  
  And('I click on Log in button', () => {
  
    loginPage.button()
  
  });
  
  And('I wait for 7000 seconds', () => {
  
    loginPage.wait_time()
  
  });

Then(/^I select an existing borrower$/, () => {
	RequestLoan.borrower()
});

When(/^I make a loan request "(.*)"$/, amount => {
	RequestLoan.loan()
    RequestLoan.loanrequest()
});

Then(/^I should see a suucess message$/, () => {
	RequestLoan.success()
});
