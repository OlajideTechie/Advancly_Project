import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import adminLoginPage from './DisbursementPage.js'

Given(/^I visit the aggregator page$/, () => {
	adminLoginPage.Admin_visit()
});

And ('I enter username as {string}', adminusername => {

	adminLoginPage.Username(adminusername)
	  
	//cy.get(':nth-child(2) > .form-group > .form-control').type("paelyt@qa.team");
	//cy.get(':n//th-child(3) > .form-group > .form-control').type("P@ssword01");
  });

When('password as {string}', adminpassword => {
  
	adminLoginPage.Password(adminpassword)
});

When(/^I click on Log in button$/, () => {

	adminLoginPage.adminButton()
	
});

Then(/^I can login successfully and see my name$/, () => {

	adminLoginPage.verify_user()
	
});

When(/^view list of loans pending to be disbursed$/, () => {
	adminLoginPage.settlements()
});
