import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CalibraterUrl from "../data/constants/CalibraterUrl";
import LoginPage from "../pages/LoginPage";



Given(`User navigates to the login page`, () => {
    const url = new CalibraterUrl();
    cy.visit(url.client_Sign_In);
})

When(`User submits valid login credentials`, () => {
    cy.fixture('calibrater').then((data)=>{
        const ln=new LoginPage();
        ln.setUserName(data.client_Username)
        ln.setPassword(data.password)
        ln.clickSubmit()
    })
})

When(`User submits invalid login credentials`, () => {
        const ln=new LoginPage();
        ln.setUserName(`invalid@experityhealth.com`)
        ln.setPassword(`Invalid123`)
        ln.clickSubmit()
})


Then(`User should see alert message on login page`, () => {
    const ln=new LoginPage();
    ln.verifyAlertMessage()
})



