import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";

Then(`User should see the homepage`, () => {
    const hp=new HomePage();
    hp.verifyHomepage()
})