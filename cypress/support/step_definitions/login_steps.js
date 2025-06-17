import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/login_page';

// You can set your login page URL here
const LOGIN_URL = '/login';

// Mocks for different user types
const validUsername = 'valid_user';
const validPassword = 'valid_pass';
const invalidUsername = 'invalid_user';
const invalidPassword = 'invalid_pass';
const blockedUsername = 'blocked_user';
const specialUsername = 'user!@#';
const specialPassword = 'pass$%&';

Given('I am on the login page', () => {
  LoginPage.visit(LOGIN_URL);
});

When('I fill in the username field with a valid username', () => {
  LoginPage.fillUsername(validUsername);
});

When('I fill in the password field with a valid password', () => {
  LoginPage.fillPassword(validPassword);
});

When('I fill in the username field with an invalid username', () => {
  LoginPage.fillUsername(invalidUsername);
});

When('I fill in the password field with an invalid password', () => {
  LoginPage.fillPassword(invalidPassword);
});

When('I fill in the username field with a blocked username', () => {
  LoginPage.fillUsername(blockedUsername);
});

When('I fill in the username and password fields with valid credentials', () => {
  LoginPage.fillUsername(validUsername);
  LoginPage.fillPassword(validPassword);
});

When('I fill in the username and password fields with special characters', () => {
  LoginPage.fillUsername(specialUsername);
  LoginPage.fillPassword(specialPassword);
});

When('I click the sign in button', () => {
  LoginPage.clickSignIn();
});

When('I check the "Remember Me" checkbox', () => {
  LoginPage.toggleRememberMe();
});

When('I click the sign up link', () => {
  LoginPage.clickSignUp();
});

Then('I should be redirected to the home page', () => {
  // Replace with your actual home page assertion
  cy.url().should('include', '/home');
});

Then('I should see a success message', () => {
  // Replace with your actual success message selector/text
  cy.contains('Login successful').should('be.visible');
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

Then('I should see an error message for a blocked user', () => {
  LoginPage.shouldShowErrorMessage('User is blocked');
});

Then('I should remain logged in after refreshing the page', () => {
  cy.reload();
  // Replace with your actual assertion for a logged-in state
  cy.contains('Logout').should('be.visible');
});

Then('I should see the username field', () => {
  LoginPage.shouldShowUsernameField();
});

Then('I should see the password field', () => {
  LoginPage.shouldShowPasswordField();
});

Then('I should see the sign in button', () => {
  LoginPage.shouldShowSignInButton();
});

Then('I should see the sign up link', () => {
  LoginPage.shouldShowSignUpLink();
});

Then('I should be redirected to the sign up page', () => {
  // Replace with your actual sign up page assertion
  cy.url().should('include', '/signup');
});