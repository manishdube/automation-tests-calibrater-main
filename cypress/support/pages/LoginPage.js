class LoginPage
{

    txtUserName="#id_login";
    txtPassword="#id_password";
    btnSubmit="button[type='submit']";
    failedLoginMsg=".alert.alert-danger";

    setUserName(username)
    {
        cy.get(this.txtUserName).type(username);  
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);  
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    verifyAlertMessage()
    {
        cy.get(this.failedLoginMsg).should('contain',"The e-mail address and/or password you specified are not correct.")
    }

}

export default LoginPage;