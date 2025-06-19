Feature: Sign Up to the application

    Scenario: Successful signup with valid credentials
        Given I am on the signup page
        When I fill in the first name field with a valid first name
        And I fill in the last name field with a valid last name
        And I fill in the username field with a valid username
        And I fill in the password field with a valid password
        And I fill in the confirm password field with the same password
        Then the sign up button should be enabled
        When I click the sign up button
        Then I should be redirected to the sign in page

    Scenario: Signup with missing first name
        Given I am on the signup page
        When I fill in the last name field with a valid last name
        And I fill in the username field with a valid username
        And I fill in the password field with a valid password
        And I fill in the confirm password field with the same password
        And I click the sign up button even if disabled
        Then I should see a required field error for the first name in signup screen
        And the sign up button should be disabled

    Scenario: Signup with missing last name
        Given I am on the signup page
        When I fill in the first name field with a valid first name
        And I fill in the username field with a valid username
        And I fill in the password field with a valid password
        And I fill in the confirm password field with the same password
        And I click the sign up button even if disabled
        Then the sign up button should be disabled

    Scenario: Signup with missing username
        Given I am on the signup page
        When I fill in the first name field with a valid first name
        And I fill in the last name field with a valid last name
        And I fill in the password field with a valid password
        And I fill in the confirm password field with the same password
        And I click the sign up button even if disabled
        Then the sign up button should be disabled

    Scenario: Signup with missing password
        Given I am on the signup page
        When I fill in the first name field with a valid first name
        And I fill in the last name field with a valid last name
        And I fill in the username field with a valid username
        And I click the password field on signup
        And I click the confirm password field on signup
        And I click the sign up button even if disabled
        Then I should see a required field error for the password in signup screen
        And the sign up button should be disabled

    Scenario: Signup with missing confirm password
        Given I am on the signup page
        When I fill in the first name field with a valid first name
        And I fill in the last name field with a valid last name
        And I fill in the username field with a valid username
        And I fill in the password field with a valid password
        And I blur the confirm password field by clicking elsewhere
        And I click the sign up button even if disabled
        Then I should see a required field error for the confirm password
        And the sign up button should be disabled

    Scenario: Signup with password that is too short
        Given I am on the signup page
        When I fill in the first name field with a valid first name
        And I fill in the last name field with a valid last name
        And I fill in the username field with a valid username
        And I fill in the password field with a short password
        And I fill in the confirm password field with the same short password
        And I click the sign up button even if disabled
        Then I should see a password minimum length error
        And the sign up button should be disabled

    Scenario: Signup with passwords that do not match
        Given I am on the signup page
        When I fill in the first name field with a valid first name
        And I fill in the last name field with a valid last name
        And I fill in the username field with a valid username
        And I fill in the password field with a valid password
        And I fill in the confirm password field with a different password
        And I click the sign up button even if disabled
        Then I should see a passwords do not match error
        And the sign up button should be disabled

    Scenario: Navigation to sign in page
        Given I am on the signup page
        When I click the sign in link
        Then I should be redirected to the sign in page
