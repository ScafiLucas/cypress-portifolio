const USERS = {
  valid: {
    username: `valid_user_${Date.now()}`,
    password: 'valid_pass',
    firstName: 'Valid',
    lastName: 'User'
  },
  invalid: {
    username: `invalid_user_${Date.now()}`,
    password: 'invalid_pass',
    firstName: 'Invalid',
    lastName: 'User'
  }
};

export default class UserFactory {
  static create(user) {
    return cy.request({
      method: 'POST',
      url: '/users',
      body: user,
      failOnStatusCode: false
    });
  }

  static getAll() {
    return USERS;
  }
}
