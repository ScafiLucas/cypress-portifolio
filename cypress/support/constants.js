export const LOGIN_URL = '/login';
export const SIGNUP_URL = '/signup';
export const BASE_URL = Cypress.env('baseUrl') || 'http://localhost:3000';

const users = {
    valid: {
        username: 'valid_user',
        password: 'valid_pass',
    },
    invalid: {
        username: 'invalid_user',
        password: 'invalid_pass',
    }
};

export default users;