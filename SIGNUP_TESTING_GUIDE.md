# SignUp Testing Framework Guide

This guide explains how to use the comprehensive SignUp testing framework created for the Cypress Real World App.

## Overview

The SignUp testing framework includes:

- **Feature file**: `cypress/e2e/features/signup.feature` - BDD scenarios
- **Step definitions**: `cypress/support/step_definitions/signup_steps.js` - Step implementations
- **Page Object**: `cypress/support/pages/signup_page.js` - Page interactions
- **Elements**: `cypress/support/elements/signup_page_elements.js` - Element selectors
- **User Factory**: `cypress/support/factories/user_factory.js` - Test data
- **Cypress Tests**: `cypress/e2e/signup.cy.js` - Direct Cypress tests

## Test Scenarios Covered

### 1. Successful SignUp

- Valid credentials with all required fields
- Proper form submission and redirection

### 2. Validation Errors

- Missing first name
- Missing last name
- Missing username
- Missing password
- Missing confirm password
- Password too short (less than 4 characters)
- Passwords do not match
- Username already exists
- Empty form submission

### 3. Navigation

- Link to sign in page

### 4. UI Elements

- All form fields visibility
- Logo and title display
- Button states (enabled/disabled)
- Footer presence

## File Structure

```
cypress/
├── e2e/
│   ├── features/
│   │   └── signup.feature          # BDD scenarios
│   └── signup.cy.js                # Direct Cypress tests
└── support/
    ├── elements/
    │   └── signup_page_elements.js # Element selectors
    ├── pages/
    │   └── signup_page.js          # Page interactions
    ├── step_definitions/
    │   └── signup_steps.js         # Step implementations
    ├── factories/
    │   └── user_factory.js         # Test data
    └── constants.js                # URLs and constants
```

## Key Components

### 1. SignUpPageElements

Contains all element selectors for the signup page:

- Form fields (firstName, lastName, username, password, confirmPassword)
- Buttons and links
- Error messages
- UI elements

### 2. SignUpPage

Page Object class with methods for:

- Filling form fields
- Clicking buttons/links
- Validating page elements
- Checking error messages
- Form validation

### 3. UserFactory

Provides test data for different scenarios:

- Valid signup user
- Existing user (for duplicate username tests)
- Short password user
- Mismatched passwords user
- Empty fields user

### 4. Step Definitions

Implements all BDD steps for:

- Navigation
- Form interactions
- Validations
- Assertions

## Running Tests

### BDD Tests (Cucumber)

```bash
# Run all signup feature tests
npx cypress run --spec "cypress/e2e/features/signup.feature"

# Run with UI
npx cypress open
# Then select signup.feature
```

### Direct Cypress Tests

```bash
# Run signup Cypress tests
npx cypress run --spec "cypress/e2e/signup.cy.js"

# Run specific test suite
npx cypress run --spec "cypress/e2e/signup.cy.js" --grep "Validation Errors"
```

## Usage Examples

### Using Page Object

```javascript
import SignUpPage from "../support/pages/signup_page";

// Fill all fields
SignUpPage.fillAllRequiredFields(
  "John",
  "Doe",
  "johndoe",
  "password123",
  "password123"
);

// Check for errors
SignUpPage.shouldShowFirstNameRequiredError();

// Navigate
SignUpPage.clickSignIn();
```

### Using User Factory

```javascript
import UserFactory from "../support/factories/user_factory";

// Get valid user data
const user = UserFactory.getValidSignupUser();

// Get specific test data
const existingUser = UserFactory.getExistingSignupUser();
const shortPasswordUser = UserFactory.getShortPasswordUser();
```

### Writing Custom Tests

```javascript
describe("Custom SignUp Test", () => {
  it("should test custom scenario", () => {
    SignUpPage.visit("/signup");

    // Fill specific fields
    SignUpPage.fillFirstName("Custom");
    SignUpPage.fillLastName("User");

    // Validate
    SignUpPage.shouldShowEnabledSignUpButton();
  });
});
```

## Element Selectors

All selectors are based on the HTML structure and use:

- `data-test` attributes for form fields
- Material-UI classes for styling elements
- Semantic selectors for better maintainability

### Key Selectors

```javascript
// Form fields
firstNameField: '[data-test="signup-first-name"] input[name="firstName"]';
lastNameField: '[data-test="signup-last-name"] input[name="lastName"]';
usernameField: '[data-test="signup-username"] input[name="username"]';
passwordField: '[data-test="signup-password"] input[name="password"]';
confirmPasswordField: '[data-test="signup-confirmPassword"] input[name="confirmPassword"]';

// Buttons and links
signUpButton: '[data-test="signup-submit"]';
signInLink: 'a[href="/signin"]';

// Error messages
errorMessage: ".MuiFormHelperText-root.Mui-error";
alertErrorMessage: ".MuiAlert-root .MuiAlert-message";
```

## Error Handling

The framework handles various error scenarios:

- **Field-level errors**: Displayed under each field
- **Form-level errors**: Alert messages for server errors
- **Validation errors**: Real-time form validation
- **Button states**: Enabled/disabled based on form validity

## Best Practices

1. **Use Page Objects**: Always use the SignUpPage class for interactions
2. **Use User Factory**: Generate test data using UserFactory methods
3. **Follow BDD**: Write scenarios in Gherkin syntax for better readability
4. **Maintain Selectors**: Keep element selectors in SignUpPageElements
5. **Test Data Isolation**: Use unique usernames with timestamps
6. **Error Validation**: Always check for appropriate error messages

## Configuration

Update `cypress/support/constants.js` for your environment:

```javascript
export const BASE_URL = Cypress.env("baseUrl") || "http://localhost:3000";
export const SIGNUP_URL = "/signup";
```

## Troubleshooting

### Common Issues

1. **Element not found**: Check if selectors match the actual HTML
2. **Test data conflicts**: Ensure unique usernames for each test
3. **Timing issues**: Add appropriate waits for dynamic content
4. **Environment issues**: Verify BASE_URL configuration

### Debug Tips

- Use `cy.debug()` to pause execution
- Check browser console for JavaScript errors
- Verify network requests in Cypress network tab
- Use `cy.screenshot()` for visual debugging

## Extending the Framework

To add new test scenarios:

1. Add new user types to UserFactory
2. Create new methods in SignUpPage
3. Add new step definitions
4. Update feature file with new scenarios
5. Add corresponding Cypress tests

This framework provides a solid foundation for comprehensive SignUp testing with maintainable, reusable code.
