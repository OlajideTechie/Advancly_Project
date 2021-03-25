
const loans_tab = ':nth-child(2) > .Sidebar_navLink__17DoH'
const loan_request_button = '.btn'
const multiple_loans_tab  = '.alignToggleTabItems > :nth-child(3)'
const uploaded_loans = '[href="/batch-loan-request-status"]'


class batchLoan {

    static loan_link() {
       
        cy.get(loans_tab).click({force:true})
        
        cy.wait(10000)
        cy.get('.justify-content-between.flex-wrap')
        cy.wait(7000)
        cy.get('.justify-content-between.flex-wrap > .flex-wrap')
        cy.get(loan_request_button).click({force:true})
        cy.wait(7000)
        //cy.get('.card-body')
        //cy.get('.alignToggleTabItems')
        cy.get(multiple_loans_tab).click({force:true})
        cy.get(uploaded_loans).click({force:true})
        cy.get(':nth-child(1) > .form-group > .form-control')
        cy.get(':nth-child(1) > .form-group > .form-control').select('Pending')
        cy.get('.card-body').contains('Pending')

        cy.get(':nth-child(1) > .form-group > .form-control').select('Success')
        cy.get('.card-body').contains('Success')
    
        cy.get(':nth-child(1) > .form-group > .form-control').select('Failed')
        cy.get('.card-body').contains('Failed')
        


    }
}

export default batchLoan