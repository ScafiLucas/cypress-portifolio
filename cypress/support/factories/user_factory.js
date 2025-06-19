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
  },
  signup: {
    valid: {
      firstName: 'John',
      lastName: 'Doe',
      username: `johndoe_${Date.now()}`,
      password: 'password123',
      confirmPassword: 'password123'
    },
    existing: {
      firstName: 'Existing',
      lastName: 'User',
      username: 'existinguser',
      password: 'password123',
      confirmPassword: 'password123'
    },
    shortPassword: {
      firstName: 'Short',
      lastName: 'Password',
      username: `shortpass_${Date.now()}`,
      password: '123',
      confirmPassword: '123'
    },
    mismatchedPasswords: {
      firstName: 'Mismatch',
      lastName: 'User',
      username: `mismatch_${Date.now()}`,
      password: 'password123',
      confirmPassword: 'differentpassword'
    },
    emptyFields: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
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

  static getSignupUser(type = 'valid') {
    return USERS.signup[type];
  }

  static getValidSignupUser() {
    return this.getSignupUser('valid');
  }

  static getExistingSignupUser() {
    return this.getSignupUser('existing');
  }

  static getShortPasswordUser() {
    return this.getSignupUser('shortPassword');
  }

  static getMismatchedPasswordsUser() {
    return this.getSignupUser('mismatchedPasswords');
  }

  static getEmptyFieldsUser() {
    return this.getSignupUser('emptyFields');
  }
}
