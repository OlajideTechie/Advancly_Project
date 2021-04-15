const admin_Url =  'https://advancly-admin.staging.vggdev.com/'
const User_name = '#username'
const Pass_word = '#password'
const login_button = '#loginButton'
const Admin_user       = '.navbar__user > a > span'

class adminLoginPage {

static Admin_visit(){

    cy.visit(admin_Url)
}

static Username(adminusername){
  
    cy.get(User_name).type(adminusername, {force:true})

}


static Password(adminpassword){
  
    cy.get(Pass_word).type(adminpassword, {force:true})
    cy.get(login_button).click({force:true})


}

static verify_user(){
    
    cy.get('.Header')
    cy.wait(7000)
    cy.get('.navbar__user')
    cy.get(Admin_user).contains('Welcome Lendx')

}

static settlements() {
      
cy.get('.Hamburger')
cy.get('.Hamburger > .adv-icon').click()
cy.get('#manage-loans > a')
cy.get('#manage-loans > a > :nth-child(2)').click()
cy.wait(5000)
cy.get('[data-test=table]')
cy.get('[data-test=table-body] > :nth-child(1) > :nth-child(2)').contains('Paelyt')

 }

}

export default adminLoginPage