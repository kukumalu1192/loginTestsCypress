class SignInPage {

    visit() {
        cy.visit('mercurysignon.php');
    }

    fillEmail(email) {
        cy.get('input[name=userName]').clear();
        cy.get('input[name=userName]').type(email);
    }

    fillPassword(password) {
        cy.get('input[name=password]').clear();
        cy.get('input[name=password]').type(password);
    }

   
    clickOnSubmitButton() {
        cy.get('input[name=login]').click();
    }
    login = (username, password) => {
        this.fillEmail(username);
        this.fillPassword(password);
        this.clickOnSubmitButton();
    }

    verifyUserLoggedIn () {
        cy.get('td .mouseOut').contains('SIGN-ON').should('not.exist');
    }

    verifyUserNotLoggedIn () {
        cy.get('td .mouseOut').contains('SIGN-OFF').should('not.exist');
    }

}

export default SignInPage;