import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/home_page';
import LoginPage from '../pages/login_page';
import UserFactory from '../factories/user_factory';
import BaseTest from '../adapters/test_base';

const getEnv = (key) => Cypress.env(key);

Given('I perform a successful first login', () => {
  // Visit login page
  LoginPage.visit('/signin');
  
  // Fill in valid credentials
  LoginPage.fillUsername(getEnv('validUsername'));
  LoginPage.fillPassword(getEnv('validPassword'));
  
  // Click sign in
  LoginPage.clickSignIn();
  
  // Verify we're on home page with onboarding dialog
  HomePage.verifyHomePageLoaded();
});

Given('I see the onboarding dialog title', () => {
  BaseTest.shouldBeVisible('[data-test="user-onboarding-dialog-title"]');
});

When('I click on the onboarding dialog button', () => {
  HomePage.clickOnboardingNextButton();
});

When('I input a valid bank name on the bank name input', () => {
  const bankAccount = UserFactory.getValidBankAccount();
  HomePage.inputBankName(bankAccount.bankName);
});

When('I input a valid bank account routing number on the routing number input', () => {
  const bankAccount = UserFactory.getValidBankAccount();
  HomePage.inputRoutingNumber(bankAccount.routingNumber);
});

When('I input a valid bank account number on the account number input', () => {
  const bankAccount = UserFactory.getValidBankAccount();
  HomePage.inputAccountNumber(bankAccount.accountNumber);
});

When('I click on the save bank account button', () => {
  HomePage.clickSaveBankAccountButton();
});

When('I click on the done button', () => {
  HomePage.clickDoneButton();
});

When('I click on the bank accounts menu item', () => {
  HomePage.clickBankAccountsMenuItem();
});

Then('I should see the onboarding success message', () => {
  HomePage.shouldSeeOnboardingSuccessMessage();
});

Then('I should see the same bank name I registered in the bank accounts list', () => {
  const bankAccount = UserFactory.getValidBankAccount();
  HomePage.shouldSeeBankNameInList(bankAccount.bankName);
}); 