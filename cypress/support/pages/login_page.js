import BaseTest from '../adapters/test_base';
import LoginPageElements from '../elements/login_page_elements';

class LoginPage {                  
    // Navigates to the login page
    static visit(url) {
        BaseTest.visitUrl(url);
    }

    // Fills the username field
    static fillUsername(username) {
        BaseTest.clearField(LoginPageElements.usernameField);
        BaseTest.type(LoginPageElements.usernameField, username);
    }

    // Fills the password field
    static fillPassword(password) {
        BaseTest.clearField(LoginPageElements.passwordField);
        BaseTest.type(LoginPageElements.passwordField, password);
    }

    // Toggles the "Remember Me" checkbox
    static toggleRememberMe() {
        BaseTest.click(LoginPageElements.rememberMeCheckbox);
    }

    // Clicks the sign in button
    static clickSignIn() {
        BaseTest.click(LoginPageElements.signInButton);
    }

    // Clicks the sign up link
    static clickSignUp() {
        BaseTest.click(LoginPageElements.signUpLink);
    }

    // Checks if the logo is visible
    static shouldShowLogo() {
        BaseTest.shouldBeVisible(LoginPageElements.logo);
    }

    // Checks if the title is correct
    static shouldHaveTitle(text) {
        BaseTest.elementShouldContainText(LoginPageElements.title, text);
    }

    // Checks if an error message exists
    static shouldShowErrorMessage(text) {
        BaseTest.elementShouldContainText(LoginPageElements.errorMessage, text);
    }

    // Checks if the username field is visible
    static shouldShowUsernameField() {
        BaseTest.shouldBeVisible(LoginPageElements.usernameField);
    }

    // Checks if the password field is visible
    static shouldShowPasswordField() {
        BaseTest.shouldBeVisible(LoginPageElements.passwordField);
    }

    // Checks if the sign in button is visible
    static shouldShowSignInButton() {
        BaseTest.shouldBeVisible(LoginPageElements.signInButton);
    }

    // Checks if the sign up link is visible
    static shouldShowSignUpLink() {
        BaseTest.shouldBeVisible(LoginPageElements.signUpLink);
    }

    // Checks if the footer is visible
    static shouldShowFooter() {
        BaseTest.shouldBeVisible(LoginPageElements.footer);
    }
}

export default LoginPage;