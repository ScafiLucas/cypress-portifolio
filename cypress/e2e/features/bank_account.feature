Feature: Bank Account Menu

    Scenario: Register bank account on first login
        Given I perform a successful first login
        And I see the onboarding dialog title
        When I click on the onboarding dialog button
        And I input a valid bank name on the bank name input
        And I input a valid bank account routing number on the routing number input
        And I input a valid bank account number on the account number input
        And I click on the save bank account button
        Then I should see the onboarding success message
        When I click on the done button
        And I click on the bank accounts menu item
        Then I should see the same bank name I registered in the bank accounts list
