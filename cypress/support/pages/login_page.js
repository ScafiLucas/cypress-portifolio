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

    // Clicks the sign in button
    static clickSignIn() {
        BaseTest.click(LoginPageElements.signInButton);
    }

    // Checks for required field errors
    static shouldShowUsernameRequiredError() {
        BaseTest.elementShouldContainText(LoginPageElements.usernameHelperText, LoginPageElements.TEXTS.usernameRequired);
    }

    static shouldShowPasswordRequiredError() {
        BaseTest.elementShouldContainText(LoginPageElements.passwordHelperText, LoginPageElements.TEXTS.passwordRequired);
    }

    // Checks if the sign in button is disabled
    static shouldShowDisabledSignInButton() {
        BaseTest.shouldBeDisabled(LoginPageElements.signInButton);
    }

    // Checks if the sign in button is enabled
    static shouldShowEnabledSignInButton() {
        BaseTest.shouldBeEnabled(LoginPageElements.signInButton);
    }

    // Checks specifically for invalid credentials error
    static shouldShowInvalidCredentialsError() {
        BaseTest.shouldBeVisible(LoginPageElements.alertErrorContainer);
        BaseTest.elementShouldContainText(LoginPageElements.alertErrorMessage, LoginPageElements.TEXTS.invalidCredentialsError);
    }
}

export default LoginPage;