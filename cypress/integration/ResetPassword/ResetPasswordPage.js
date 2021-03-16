const baseUrl = 'https://advancly-aggregator.staging.vggdev.com/reset-password'
const Email  = '.form-control'
const error_alert = '.alert'
const success_alert = ('p.text-dark')
const submit = '.btn'


class resetPage{

    static visit() {
        cy.visit(baseUrl)

    }

    static fillEmail(name) {
        cy.get(Email).type(name)
    }


    static submitButton(name) {
        cy.get(submit).click()
        cy.wait(7000)
    }

    static errorMessage(){
        cy.get(error_alert).contains('Sadly this email address wasn’t found. Please check and try again.')
    }

    static successMessage() {
        cy.wait(7000)
        cy.get('.ResetPassword_right__hKsGD')
        cy.wait(10000)
        //cy.get('.mt-5').contains( 'Enter the OTP sent to your email address to verify that you\'re the owner of this account')
        cy.get(success_alert).contains( 'Enter the OTP sent to your email address to verify that you\'re the owner of this account')
    }

}

export default resetPage