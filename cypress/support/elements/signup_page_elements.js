/**
 * SignUpPageElements
 * Abstraction for mapping all elements of the SignUp Page.
 * Use these selectors with BaseTest methods in your test or page actions.
 */
class SignUpPageElements {
  // First Name field
  static firstNameField = '[data-test="signup-first-name"] input[name="firstName"]';
  static firstNameLabel = '[for="firstName"]';
  static firstNameHelperText = '#firstName-helper-text';

  // Last Name field
  static lastNameField = '[data-test="signup-last-name"] input[name="lastName"]';
  static lastNameLabel = '[for="lastName"]';
  static lastNameHelperText = '#lastName-helper-text';

  // Username field
  static usernameField = '[data-test="signup-username"] input[name="username"]';
  static usernameLabel = '[for="username"]';
  static usernameHelperText = '#username-helper-text';

  // Password field
  static passwordField = '[data-test="signup-password"] input[name="password"]';
  static passwordLabel = '[for="password"]';
  static passwordHelperText = '#password-helper-text';

  // Confirm Password field
  static confirmPasswordField = '[data-test="signup-confirmPassword"] input[name="confirmPassword"]';
  static confirmPasswordLabel = '[for="confirmPassword"]';
  static confirmPasswordHelperText = '#confirmPassword-helper-text';

  // Sign Up button
  static signUpButton = '[data-test="signup-submit"]';

  // Error message (for any field or form)
  static errorMessage = '.MuiFormHelperText-root.Mui-error';

  // Alert error message (Material-UI Alert component)
  static alertErrorMessage = '.MuiAlert-root .MuiAlert-message';
  static alertErrorContainer = '.MuiAlert-root.MuiAlert-standardError';

  // "Have an account? Sign In" link
  static signInLink = 'a[href="/signin"]';

  // Footer (Built by Cypress)
  static footer = '.MuiBox-root .MuiTypography-alignCenter';

  // Main containers
  static logo = '.SignUpForm-logo';
  static pageTitle = '[data-test="signup-title"]';

  // Text constants
  static TEXTS = {
    // Page title
    pageTitle: 'Sign Up',
    
    // Error messages
    firstNameRequired: 'First Name is required',
    lastNameRequired: 'Last Name is required',
    usernameRequired: 'Username is required',
    passwordRequired: 'Enter your password',
    confirmPasswordRequired: 'Confirm your password',
    passwordsDoNotMatch: 'Password does not match',
    usernameAlreadyExists: 'Username already exists',
    passwordMinLength: 'Password must contain at least 4 characters',
    
    // Link text
    signInLinkText: 'Have an account? Sign In',
    
    // Button text
    signUpButtonText: 'Sign Up'
  };
}

export default SignUpPageElements;
