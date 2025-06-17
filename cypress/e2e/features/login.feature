Feature: Login to the application

  @only
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I fill in the username field with a valid username
    And I fill in the password field with a valid password
    And I click the sign in button
    Then I should be redirected to the home page
    And I should see a success message

  Scenario: Login with an invalid username
    Given I am on the login page
    When I fill in the username field with an invalid username
    And I fill in the password field with a valid password
    And I click the sign in button
    Then I should see an error message for invalid credentials

  Scenario: Login with an invalid password
    Given I am on the login page
    When I fill in the username field with a valid username
    And I fill in the password field with an invalid password
    And I click the sign in button
    Then I should see an error message for invalid credentials

  Scenario: Login with empty required fields
    Given I am on the login page
    When I click the sign in button
    Then I should see a required field error for the username
    And I should see a required field error for the password

  Scenario: Login with a blocked user
    Given I am on the login page
    When I fill in the username field with a blocked username
    And I fill in the password field with a valid password
    And I click the sign in button
    Then I should see an error message for a blocked user

  Scenario: Check and uncheck the "Remember Me" checkbox
    Given I am on the login page
    When I check the "Remember Me" checkbox
    And I fill in the username and password fields with valid credentials
    And I click the sign in button
    Then I should remain logged in after refreshing the page

  Scenario: Verify visibility of login page elements
    Given I am on the login page
    Then I should see the username field
    And I should see the password field
    And I should see the sign in button
    And I should see the sign up link

  Scenario: Navigate to the sign up page
    Given I am on the login page
    When I click the sign up link
    Then I should be redirected to the sign up page

  Scenario: Login with special characters in credentials
    Given I am on the login page
    When I fill in the username and password fields with special characters
    And I click the sign in button
    Then I should see an error message for invalid credentials