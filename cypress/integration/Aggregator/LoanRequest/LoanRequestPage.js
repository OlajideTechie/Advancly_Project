const borrowerLink = ':nth-child(4) > .Sidebar_navLink__17DoH > span'
const selectBorrower = ':nth-child(2) > .text-primary'
const requestloan_Button = '.flex-wrap > :nth-child(3)'
const selectProduct    = '.form-control'
const success_alert   = '.alert'
//const now = new Date(2021, 03, 18).getTime() //  2019-01-02 timestamp

class RequestLoan {

      static borrower () {

        cy.get(borrowerLink).click()
      }

      static loan () {
        cy.wait(10000)
        cy.get('.card')
        cy.get('.card-body')
        cy.get('.AuthLayout_manipulateChildren__2aeY8')
         cy.get(selectBorrower).click()

      }
 
      static loanrequest () {
             cy.get(requestloan_Button).click()
      cy.get('.card-body > :nth-child(2)').should('have.text', "Borrower's Name: OLUWATOSIN BAKARE");
             cy.get('select[name="productId"]').select('TestProduct')
             cy.get(':nth-child(2) > .mb-4 > .input-group > .form-control').type(1000)
             cy.get(':nth-child(3) > .mb-4 > .input-group > .form-control').type(1)
             cy.get(':nth-child(4) > .mb-4 > .input-group > .form-control').type(reference())

             function reference() {
                var text = "";
                var possible = "REF0123456789";
            
                for (var i = 0; i < 10; i++)
                  text += possible.charAt(Math.floor(Math.random() * possible.length));
            
                return text;
              }

              cy.get('select[name="borrowerSector"]').select('financial services')
              cy.get(':nth-child(6) > .mb-4 > .input-group > .form-control').type('2021-12-31')
               cy.get(':nth-child(7) > .mb-4 > .input-group > .form-control').type(84)
               cy.get('.btn').click()
              //cy.get(':nth-child(6) > .mb-4 > .form-group > .form-control').click()

      }

      static success(){
          cy.get(success_alert).should('have.text',"The loan request is successful and is undergoing approval. The borrower's bank account will be credited if the loan is approved.")
      }

}


export default RequestLoan