import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginPage from '../Login/LoginPage.js'
import searchLoan from "../SearchLoan/SearchLoanPage";
import AllLoans from "./ViewBorrowerLoanPage";

Given( 'I visit the aggregator page', visit  => {

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

And ('I can search for a borrower loan with the reference {string}', name => {
	searchLoan.search_loan()
	searchLoan.query_search(name)
});

Then ('I can view all loans taken by a borrower',() => {
    AllLoans.click_borrower()
	AllLoans.view_borrower_profile()

});


