import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/login_page';
import SignUpPage from '../pages/signup_page';
import BaseTest from '../adapters/test_base';

const getEnv = (key) => Cypress.env(key);

// Common steps that can be used by both login and signup features
When('I fill in the username field with a valid username', () => {
  // This step can be used in both login and signup contexts
  // The page object will handle the appropriate action
  BaseTest.getCurrentUrl().then((url) => {
    if (url.includes('/signin')) {
      LoginPage.fillUsername(getEnv('validUsername'));
    } else if (url.includes('/signup')) {
      SignUpPage.fillUsername('johndoe123');
    }
  });
});

When('I fill in the password field with a valid password', () => {
  // This step can be used in both login and signup contexts
  BaseTest.getCurrentUrl().then((url) => {
    if (url.includes('/signin')) {
      LoginPage.fillPassword(getEnv('validPassword'));
    } else if (url.includes('/signup')) {
      SignUpPage.fillPassword('password123');
    }
  });
});

When('I fill in the username field with {string}', (username) => {
  BaseTest.getCurrentUrl().then((url) => {
    if (url.includes('/signin')) {
      LoginPage.fillUsername(username);
    } else if (url.includes('/signup')) {
      SignUpPage.fillUsername(username);
    }
  });
});

When('I fill in the password field with {string}', (password) => {
  BaseTest.getCurrentUrl().then((url) => {
    if (url.includes('/signin')) {
      LoginPage.fillPassword(password);
    } else if (url.includes('/signup')) {
      SignUpPage.fillPassword(password);
    }
  });
}); 