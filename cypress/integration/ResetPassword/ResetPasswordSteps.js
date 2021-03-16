import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import resetPage from "./ResetPasswordPage.js";

Given ( 'I visit the forgot password page', visit  => {
resetPage.visit()
})

When ('I enter my email as {string}', Email => {
    resetPage.fillEmail(Email)

});

And ('I click on the submit button', () => {
    resetPage.submitButton()

});

Then ('An otp is sent to my mail', password => {

    resetPage.successMessage()

});


Then ('I should see an error message', password => {

resetPage.errorMessage()

});

