Feature: Login to the application

    Scenario: Successful login with valid credentials
        Given I am on the login page
        When I fill in the username field with a valid username
        And I fill in the password field with a valid password
        And I click the sign in button
        Then I should be redirected to the home page

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