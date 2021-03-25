import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginPage from './LoginPage.js'

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


Then('I can login successfully and see my name', () => {

  loginPage.verify_user()

});

Then ('I should get an error message' ,() => {

 loginPage.error_message()

});
