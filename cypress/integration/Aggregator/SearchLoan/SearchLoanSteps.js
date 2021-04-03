import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginPage from '../Login/LoginPage'
import searchLoan from '../SearchLoan/SearchLoanPage'

Given (/^I visit the aggregator page$/, () => {
	loginPage.visit()
});

Then('I enter username as {string}', name => {
	loginPage.fillUsername(name)
});

Then('password as {string}', password => {
	loginPage.fillPassword(password)
});

Then(/^I click on Log in button$/, () => {
	loginPage.button()
});

Then(/^I wait for 7000 seconds$/, () => {
	loginPage.wait_time()
});

And ('I can search for a borrower loan with the reference {string}', name => {
	searchLoan.search_loan()
	searchLoan.query_search(name)
});


