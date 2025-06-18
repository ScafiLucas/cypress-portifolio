import '@shelex/cypress-allure-plugin';
import './commands';

import UserFactory from "./factories/user_factory";

before(() => {
  const users = UserFactory.getAll();

  return cy.wrap(null)
    .then(() => UserFactory.create(users.valid))
    .then((res) => {
      cy.log(`Created valid_user - Status: ${res.status}`);
      Cypress.env('validUsername', users.valid.username);
      Cypress.env('validPassword', users.valid.password);
    })
    .then(() => UserFactory.create(users.invalid))
    .then((res) => {
      cy.log(`Created invalid_user - Status: ${res.status}`);
      Cypress.env('invalidUsername', users.invalid.username);
      Cypress.env('invalidPassword', users.invalid.password);
    });
});
