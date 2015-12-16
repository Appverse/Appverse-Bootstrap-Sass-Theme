Feature: ACCOUNTS

Narrative:
    In order to compare testing frameworks for HTML5 apps
    As a user
    I want to be able to execute end to end tests for the PilotoBS

Background:
    Given I am on the login page
    When I login

Scenario Outline: Login to Accounts Page
    Meta: @scAccountEntityNavigate

    Then I should be on the accounts page

Scenario Outline: Search for an account
    Meta: @scAccountEntitySearch

    When I search an account name: <name>
    Then one row shows in the table with the name: <name>

    Examples:

    | name      |
    | Account 0 |
    | Account 1 |
    | Account 2 |
