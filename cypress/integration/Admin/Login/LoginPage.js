const admin_Url =  'https://advancly-admin.staging.vggdev.com/'
const User_name = '#username'
const Pass_word = '#password'
const login_button = '#loginButton'

class adminLoginPage {

static Admin_visit(){

    cy.visit(admin_Url)
}

static Username(adminusername){
  
    cy.get(User_name).type(adminusername, {force:true})

}


static Password(adminpassword){
  
    cy.get(Pass_word).type(adminpassword, {force:true})

}

static adminButton() {

    cy.get(login_button).click()
} 
}


export default adminLoginPage