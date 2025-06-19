import BaseTest from '../adapters/test_base';
import SignUpPageElements from '../elements/signup_page_elements';

class SignUpPage {
    // Navigates to the signup page
    static visit(url) {
        BaseTest.visitUrl(url);
    }

    // Fills the first name field
    static fillFirstName(firstName) {
        BaseTest.clearField(SignUpPageElements.firstNameField);
        BaseTest.type(SignUpPageElements.firstNameField, firstName);
    }

    // Fills the last name field
    static fillLastName(lastName) {
        BaseTest.clearField(SignUpPageElements.lastNameField);
        BaseTest.type(SignUpPageElements.lastNameField, lastName);
    }

    // Fills the username field
    static fillUsername(username) {
        BaseTest.clearField(SignUpPageElements.usernameField);
        BaseTest.type(SignUpPageElements.usernameField, username);
    }

    // Fills the password field
    static fillPassword(password) {
        BaseTest.clearField(SignUpPageElements.passwordField);
        BaseTest.type(SignUpPageElements.passwordField, password);
    }

    // Fills the confirm password field
    static fillConfirmPassword(confirmPassword) {
        BaseTest.clearField(SignUpPageElements.confirmPasswordField);
        BaseTest.type(SignUpPageElements.confirmPasswordField, confirmPassword);
    }

    // Clicks the sign up button
    static clickSignUp() {
        BaseTest.click(SignUpPageElements.signUpButton);
    }

    // Clicks the sign up button even if disabled (for testing validation scenarios)
    static clickSignUpForce() {
        cy.get(SignUpPageElements.signUpButton).click({ force: true });
    }

    // Clicks the sign in link
    static clickSignIn() {
        BaseTest.click(SignUpPageElements.signInLink);
    }

    // Checks if the logo is visible
    static shouldShowLogo() {
        BaseTest.shouldBeVisible(SignUpPageElements.logo);
    }

    // Checks if the page title is correct
    static shouldShowCorrectPageTitle() {
        BaseTest.elementShouldContainText(SignUpPageElements.pageTitle, SignUpPageElements.TEXTS.pageTitle);
    }

    // Checks if the first name field is visible
    static shouldShowFirstNameField() {
        BaseTest.shouldBeVisible(SignUpPageElements.firstNameField);
    }

    // Checks if the last name field is visible
    static shouldShowLastNameField() {
        BaseTest.shouldBeVisible(SignUpPageElements.lastNameField);
    }

    // Checks if the username field is visible
    static shouldShowUsernameField() {
        BaseTest.shouldBeVisible(SignUpPageElements.usernameField);
    }

    // Checks if the password field is visible
    static shouldShowPasswordField() {
        BaseTest.shouldBeVisible(SignUpPageElements.passwordField);
    }

    // Checks if the confirm password field is visible
    static shouldShowConfirmPasswordField() {
        BaseTest.shouldBeVisible(SignUpPageElements.confirmPasswordField);
    }

    // Checks if the sign up button is visible
    static shouldShowSignUpButton() {
        BaseTest.shouldBeVisible(SignUpPageElements.signUpButton);
    }

    // Checks if the sign in link is visible
    static shouldShowSignInLink() {
        BaseTest.shouldBeVisible(SignUpPageElements.signInLink);
    }

    // Checks if the footer is visible
    static shouldShowFooter() {
        BaseTest.shouldBeVisible(SignUpPageElements.footer);
    }

    // Checks for required field errors
    static shouldShowFirstNameRequiredError() {
        BaseTest.elementShouldContainText(SignUpPageElements.firstNameHelperText, SignUpPageElements.TEXTS.firstNameRequired);
    }

    static shouldShowLastNameRequiredError() {
        BaseTest.elementShouldContainText(SignUpPageElements.lastNameHelperText, SignUpPageElements.TEXTS.lastNameRequired);
    }

    static shouldShowUsernameRequiredError() {
        BaseTest.elementShouldContainText(SignUpPageElements.usernameHelperText, SignUpPageElements.TEXTS.usernameRequired);
    }

    static shouldShowPasswordRequiredError() {
        BaseTest.elementShouldContainText(SignUpPageElements.passwordHelperText, SignUpPageElements.TEXTS.passwordRequired);
    }

    static shouldShowConfirmPasswordRequiredError() {
        BaseTest.elementShouldContainText(SignUpPageElements.confirmPasswordHelperText, SignUpPageElements.TEXTS.confirmPasswordRequired);
    }

    // Checks for password minimum length error
    static shouldShowPasswordMinLengthError() {
        BaseTest.elementShouldContainText(SignUpPageElements.passwordHelperText, SignUpPageElements.TEXTS.passwordMinLength);
    }

    // Checks for passwords do not match error
    static shouldShowPasswordsDoNotMatchError() {
        BaseTest.elementShouldContainText(SignUpPageElements.confirmPasswordHelperText, SignUpPageElements.TEXTS.passwordsDoNotMatch);
    }

    // Checks for username already exists error
    static shouldShowUsernameAlreadyExistsError() {
        BaseTest.shouldBeVisible(SignUpPageElements.alertErrorContainer);
        BaseTest.elementShouldContainText(SignUpPageElements.alertErrorMessage, SignUpPageElements.TEXTS.usernameAlreadyExists);
    }

    // Checks if the sign up button is disabled
    static shouldShowDisabledSignUpButton() {
        BaseTest.shouldBeDisabled(SignUpPageElements.signUpButton);
    }

    // Checks if the sign up button is enabled
    static shouldShowEnabledSignUpButton() {
        BaseTest.shouldBeEnabled(SignUpPageElements.signUpButton);
    }

    // Fills all required fields with valid data
    static fillAllRequiredFields(firstName, lastName, username, password, confirmPassword) {
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillUsername(username);
        this.fillPassword(password);
        this.fillConfirmPassword(confirmPassword);
    }

    // Fills all required fields except one (for testing missing field scenarios)
    static fillAllRequiredFieldsExcept(excludeField, firstName, lastName, username, password, confirmPassword) {
        if (excludeField !== 'firstName') this.fillFirstName(firstName);
        if (excludeField !== 'lastName') this.fillLastName(lastName);
        if (excludeField !== 'username') this.fillUsername(username);
        if (excludeField !== 'password') this.fillPassword(password);
        if (excludeField !== 'confirmPassword') this.fillConfirmPassword(confirmPassword);
    }

    // Clicks the password field (for focus/blur testing)
    static clickPasswordField() {
        cy.get(SignUpPageElements.passwordField).click();
    }

    // Clicks the confirm password field (for focus/blur testing)
    static clickConfirmPasswordField() {
        cy.get(SignUpPageElements.confirmPasswordField).click().blur();
    }

    // Clica no campo de confirmação de senha e depois tira o foco clicando no botão de Sign Up (desativado)
    static blurConfirmPasswordFieldByClickingElsewhere() {
        cy.get(SignUpPageElements.confirmPasswordField).click();
        cy.get(SignUpPageElements.signUpButton).click({ force: true });
    }
}

export default SignUpPage; 