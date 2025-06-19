import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignUpPage from '../pages/signup_page';
import LoginPage from '../pages/login_page';
import BaseTest from '../adapters/test_base';
import { BASE_URL } from '../constants';

// Given steps
Given('I am on the signup page', () => {
    SignUpPage.visit(`${BASE_URL}/signup`);
    SignUpPage.shouldShowCorrectPageTitle();
});

// When steps
When('I fill in the first name field with a valid first name', () => {
    SignUpPage.fillFirstName('John');
});

When('I fill in the first name field with {string}', (firstName) => {
    SignUpPage.fillFirstName(firstName);
});

When('I fill in the last name field with a valid last name', () => {
    SignUpPage.fillLastName('Doe');
});

When('I fill in the last name field with {string}', (lastName) => {
    SignUpPage.fillLastName(lastName);
});

When('I fill in the username field with an existing username', () => {
    SignUpPage.fillUsername('existinguser');
});

When('I fill in the password field with a short password', () => {
    SignUpPage.fillPassword('123');
});

When('I fill in the confirm password field with a valid password', () => {
    SignUpPage.fillConfirmPassword('password123');
});

When('I fill in the confirm password field with the same password', () => {
    SignUpPage.fillConfirmPassword('password123');
});

When('I fill in the confirm password field with {string}', (confirmPassword) => {
    SignUpPage.fillConfirmPassword(confirmPassword);
});

When('I fill in the confirm password field with a different password', () => {
    SignUpPage.fillConfirmPassword('differentpassword');
});

When('I fill in the confirm password field with the same short password', () => {
    SignUpPage.fillConfirmPassword('123');
});

When('I click the sign up button', () => {
    SignUpPage.clickSignUp();
});

When('I click the sign up button even if disabled', () => {
    SignUpPage.clickSignUpForce();
});

When('I click the sign in link', () => {
    SignUpPage.clickSignIn();
});

When('I click the password field on signup', () => {
    SignUpPage.clickPasswordField();
});

When('I click the confirm password field on signup', () => {
    SignUpPage.clickConfirmPasswordField();
});

When('I blur the confirm password field by clicking elsewhere', () => {
    SignUpPage.blurConfirmPasswordFieldByClickingElsewhere();
});

// Then steps
Then('the sign up button should be enabled', () => {
    SignUpPage.shouldShowEnabledSignUpButton();
});

Then('the sign up button should be disabled', () => {
    SignUpPage.shouldShowDisabledSignUpButton();
});

Then('I should be redirected to the sign in page', () => {
    BaseTest.urlShouldInclude('/signin');
});

Then('I should see a required field error for the first name in signup screen', () => {
    SignUpPage.shouldShowFirstNameRequiredError();
});

Then('I should see a required field error for the last name in signup screen', () => {
    SignUpPage.shouldShowLastNameRequiredError();
});

Then('I should see a required field error for the username at signup in signup screen', () => {
    SignUpPage.shouldShowUsernameRequiredError();
});

Then('I should see a required field error for the password in signup screen', () => {
    SignUpPage.shouldShowPasswordRequiredError();
});

Then('I should see a required field error for the confirm password', () => {
    SignUpPage.shouldShowConfirmPasswordRequiredError();
});

Then('I should see required field errors for all fields', () => {
    SignUpPage.shouldShowFirstNameRequiredError();
    SignUpPage.shouldShowLastNameRequiredError();
    SignUpPage.shouldShowUsernameRequiredError();
    SignUpPage.shouldShowPasswordRequiredError();
    SignUpPage.shouldShowConfirmPasswordRequiredError();
});

Then('I should see a password minimum length error', () => {
    SignUpPage.shouldShowPasswordMinLengthError();
});

Then('I should see a passwords do not match error', () => {
    SignUpPage.shouldShowPasswordsDoNotMatchError();
});

Then('I should see an error message for username already exists', () => {
    SignUpPage.shouldShowUsernameAlreadyExistsError();
});

Then('I should see the signup logo', () => {
    SignUpPage.shouldShowLogo();
});

Then('I should see the signup title', () => {
    SignUpPage.shouldShowCorrectPageTitle();
});

Then('I should see the first name field', () => {
    SignUpPage.shouldShowFirstNameField();
});

Then('I should see the last name field', () => {
    SignUpPage.shouldShowLastNameField();
});

Then('I should see the username field', () => {
    SignUpPage.shouldShowUsernameField();
});

Then('I should see the password field', () => {
    SignUpPage.shouldShowPasswordField();
});

Then('I should see the confirm password field', () => {
    SignUpPage.shouldShowConfirmPasswordField();
});

Then('I should see the sign up button', () => {
    SignUpPage.shouldShowSignUpButton();
});

Then('I should see the sign in link', () => {
    SignUpPage.shouldShowSignInLink();
});

Then('I should see the footer', () => {
    SignUpPage.shouldShowFooter();
}); 