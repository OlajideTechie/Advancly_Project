const select_borrower = '.text-primary'
const all_Loans   = '.alignToggleTabItems > :nth-child(3)'

class AllLoans {

    static click_borrower() {
        cy.get(select_borrower).click({force:true})

    }

    static view_borrower_profile() {
        cy.get(all_Loans).click( {force:true})
        cy.get('.px-3')
        cy.get('.bg-white')
        cy.get('.bg-white > .table-responsive')
        cy.get('.BorrowerProfileCard_alignNameSection__2trUl')
        cy.wait(5000)
        cy.get('.BorrowerProfileCard_name__2NzDU').should('have.text','OLUFEMI OLUFON')
       // cy.get('.font-size-1 > tr > :nth-child(2)').contains('OLADAPO OLASEMO')
        //cy.get('.font-size-1 > tr > :nth-child(2)').contains('OLADAPO OLASEMO')
    }

}

export default AllLoans