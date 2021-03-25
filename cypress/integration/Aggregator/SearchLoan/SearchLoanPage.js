const loans = ':nth-child(2) > .Sidebar_navLink__17DoH'
const search = '.search-query'


class searchLoan {

static search_loan(Loans) {
    cy.get(loans).click({force:true})
}

static query_search(name) {
    cy.get('.AuthLayout_manipulateChildren__2aeY8')
    cy.wait(8000)
    //cy.get('.justify-content-between.flex-wrap')
    cy.get('.justify-content-between.flex-wrap > .flex-wrap')
    cy.get(search).type((name))
    cy.get('[style="min-width: 180px;"] > .d-flex').should('have.text','OLUFEMI OLUFON')
  }

}

export default searchLoan