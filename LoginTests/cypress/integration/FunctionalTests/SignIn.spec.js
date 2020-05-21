import SignInPage from '../../support/pages/SignInPage';


describe('SignIn test', () => {
    const signInPage = new SignInPage();

    beforeEach(() => {
        signInPage.visit();
    });

    it('Login with invalid account', () => {

        //signin with empty username
        signInPage.clickOnSubmitButton();
        signInPage.verifyUserNotLoggedIn();

        //Signin with invalid email
        signInPage.fillEmail('aa');
        signInPage.clickOnSubmitButton();
        signInPage.verifyUserNotLoggedIn();

        //Signin with valid username and empty pass
        signInPage.fillEmail('shopeetest');
        signInPage.clickOnSubmitButton();
        signInPage.verifyUserNotLoggedIn();

        //Signin with valid username and invalid pass
        signInPage.fillEmail('shopeetest');
        signInPage.fillPassword('111');
        signInPage.clickOnSubmitButton();
        signInPage.verifyUserNotLoggedIn();

   });

    it('Login with valid account', () => {
        //Signin with valid account
        signInPage.login('shopeetest', 'Shopee@2020');
        signInPage.verifyUserLoggedIn();
    });
})