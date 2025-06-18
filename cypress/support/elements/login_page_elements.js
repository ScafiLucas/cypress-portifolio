/**
 * LoginPageElements
 * Abstraction for mapping all elements of the Login Page.
 * Use these selectors with BaseTest methods in your test or page actions.
 */
class LoginPageElements {
  // Username field
  static usernameField = '[data-test="signin-username"] input[name="username"]';
  static usernameLabel = '[for="username"]';
  static usernameHelperText = '#username-helper-text';

  // Password field
  static passwordField = '[data-test="signin-password"] input[name="password"]';
  static passwordLabel = '[for="password"]';

  // Remember Me checkbox
  static rememberMeCheckbox = '[data-test="signin-remember-me"] input[type="checkbox"]';
  static rememberMeLabel = '.MuiFormControlLabel-label';

  // Sign In button
  static signInButton = '[data-test="signin-submit"]';

  // Error message (for username, password, or form)
  static errorMessage = '.MuiFormHelperText-root.Mui-error';

  // "Don't have an account? Sign Up" link
  static signUpLink = '[data-test="signup"]';

  // Footer (Built by Cypress)
  static footer = '.MuiBox-root .MuiTypography-alignCenter';
  static footerCypressLogo = '.MuiBox-root .MuiTypography-alignCenter svg';

  // Main containers
  static mainContainer = 'main.MuiContainer-root';
  static paperContainer = '.SignInForm-paper';
  static form = '.SignInForm-form';
}

export default LoginPageElements;