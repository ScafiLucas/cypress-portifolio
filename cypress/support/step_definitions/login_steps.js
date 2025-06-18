import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/login_page';

const getEnv = (key) => Cypress.env(key);

Given('I am on the login page', () => {
  LoginPage.visit('/signin');
});

When('I fill in the username field with a valid username', () => {
  LoginPage.fillUsername(getEnv('validUsername'));
});

When('I fill in the password field with a valid password', () => {
  LoginPage.fillPassword(getEnv('validPassword'));
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
  // Assuming the home page URL is stored in the environment variable
});

Then('I should see an error message for invalid credentials', () => {
  LoginPage.shouldShowErrorMessage('Invalid username or password');
});

Then('I should see a required field error for the username', () => {
  LoginPage.shouldShowErrorMessage('Username is required');
});

Then('I should see a required field error for the password', () => {
  LoginPage.shouldShowErrorMessage('Password is required');
});