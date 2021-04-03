const baseUrl = 'https://advancly-aggregator.staging.vggdev.com'
const user_name = ':nth-child(2) > .input-group > .form-control'
const pass_word = ':nth-child(3) > .input-group > .form-control'
const submit_button  = '.btn'
const verify_user   = '.page-title'
const Error_message  = '.alert'



class loginPage{
   
    static visit() {
        cy.visit(baseUrl)

    } 

    static fillUsername(name) {
        cy.get(user_name).type(name)
    }


    static fillPassword(password) {
        cy.get(pass_word).type(password)

    }

    static button(name) {
        cy.get(submit_button).click()
    }

    static  wait_time(){
        cy.wait(10000)
    }

    static verify_user() {

        cy.get('.color-light-grey')

        cy.get('.page-title').should('have.text', 'Hello, Paelyt')
    }

    static error_message() {
        cy.get('.mt-5')

        cy.get(Error_message).contains('Unauthorized')

    }


}

export default loginPage 