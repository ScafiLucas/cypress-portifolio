import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/login_page';
import HomePage from '../pages/home_page';
import LoginPageElements from '../elements/login_page_elements';

const getEnv = (key) => Cypress.env(key);

Given('I am on the login page', () => {
  LoginPage.visit('/signin');
});

When('I fill in the username field with an invalid username', () => {
  LoginPage.fillUsername(getEnv('invalidUsername'));
});

When('I fill in the password field with an invalid password', () => {
  LoginPage.fillPassword(getEnv('invalidPassword'));
});

When('I fill in the username and password fields with valid credentials', () => {
  LoginPage.fillUsername(getEnv('validUsername'));
  LoginPage.fillPassword(getEnv('validPassword'));
});

When('I click the sign in button', () => {
  LoginPage.clickSignIn();
});

Then('I should be redirected to the home page', () => {
  HomePage.verifyHomePageLoaded();
});

Then('I should see an error message for invalid credentials', () => {
  LoginPage.shouldShowInvalidCredentialsError();
});

Then('I should see a required field error for the username at signin', () => {
  LoginPage.shouldShowUsernameRequiredError();
});

Then('I should see a required field error for the password in login screen', () => {
  LoginPage.shouldShowPasswordRequiredError();
});

Then('the sign in button should be disabled', () => {
  LoginPage.shouldShowDisabledSignInButton();
});

Then('the sign in button should be enabled', () => {
  LoginPage.shouldShowEnabledSignInButton();
});