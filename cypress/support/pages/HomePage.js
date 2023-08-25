class HomePage
{

    alertmsg=".alert.alert-success";
    homeLink="#id_home_menu_item_link";


    verifyHomepage()
    {
        cy.get(this.alertmsg).should('contain',"Successfully signed in")
        cy.get(this.homeLink).should('have.text', 'Home ')
    }
}

export default HomePage;